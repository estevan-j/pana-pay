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
      return '0.0.0.0';
    }
  };
  
const getCountryFromIP = async (ip: string): Promise<string | null> => {
    try {
      const response = await fetch(`https://ipapi.co/${ip}/json/`);
      const data = await response.json();
      return data.country_name || null;
    } catch (error) {
      return null;
    }
  };


export const logAuthAttempt = async (data: AuthAttemptData): Promise<void> => {
  try {
    const ip = await getClientIP();
    const country = await getCountryFromIP(ip);
    
    await supabase.rpc('log_auth_attempt', {
      email: data.email,
      ip_address: ip,
      country
    });

  } catch (error) {
    console.error('Error al registrar el intento de autenticación:', error);
  }
};

