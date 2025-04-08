
import supabase from "@/lib/supabase";

export interface AuthAttemptData {
  email: string;
  username?: string;
}

const getClientIP = async (): Promise<string> => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error('Error getting client IP:', error);
      return '0.0.0.0';
    }
  };
  
const getCountryFromIP = async (ip: string): Promise<string | null> => {
    try {
      const response = await fetch(`https://ipapi.co/${ip}/json/`);
      const data = await response.json();
      return data.country_name || null;
    } catch (error) {
      console.error('Error getting country from IP:', error);
      return null;
    }
  };

export const logAuthAttempt = async (data: AuthAttemptData): Promise<void> => {
  try {
    const ip = await getClientIP();
    const country = await getCountryFromIP(ip);
    
    // Ensure we use the email field correctly
    const email = data.email || data.username || '';
    
    // Insert directly into the auth_logs table
    const { error } = await supabase.rpc('log_auth_attempt', {
      email: email,
      ip_address: ip,
      country: country
    });
    
    if (error) {
      throw error;
    }
    
    console.log('Authentication attempt logged successfully');
  } catch (error) {
    console.error('Error logging authentication attempt:', error);
  }
};
