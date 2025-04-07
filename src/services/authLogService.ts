
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
    console.log('Logging authentication attempt for:', data.email);
    const ip = await getClientIP();
    const country = await getCountryFromIP(ip);
    
    console.log('Auth attempt details:', {
      email: data.email,
      username: data.username,
      ip,
      country
    });

    // Insert directly into the auth_logs table
    const { error } = await supabase
      .from('auth_logs')
      .insert([{
        username: data.username || data.email,
        ip_address: ip,
        country: country,
        login_timestamp: new Date().toISOString()
      }]);
    
    if (error) {
      throw error;
    }
    
    console.log('Authentication attempt logged successfully');

  } catch (error) {
    console.error('Error logging authentication attempt:', error);
  }
};
