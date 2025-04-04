import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import supabase from '../lib/supabase';
import { SHA256 } from 'crypto-js';

interface AuthContextType {
  isAuthenticated: boolean;
  user: string | null;
  isAdmin: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const salt = import.meta.env.VITE_APP_PASSWORD_SALT;

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const storedAuth = sessionStorage.getItem('auth');
    return storedAuth ? JSON.parse(storedAuth).isAuthenticated : false;
  });
  const [user, setUser] = useState<string | null>(() => {
    const storedAuth = sessionStorage.getItem('auth');
    return storedAuth ? JSON.parse(storedAuth).user : null;
  });
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    const storedAuth = sessionStorage.getItem('auth');
    return storedAuth ? JSON.parse(storedAuth).isAdmin : false;
  });

  useEffect(() => {
    // Restaurar el estado de autenticación desde sessionStorage al cargar la aplicación
    const storedAuth = sessionStorage.getItem('auth');
    if (storedAuth) {
      const { isAuthenticated, user, isAdmin } = JSON.parse(storedAuth);
      setIsAuthenticated(isAuthenticated);
      setUser(user);
      setIsAdmin(isAdmin);
    }
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      // Obtener la IP del usuario a través de un servicio externo
      let ipAddress = '0.0.0.0';
      let countryName = null;

      try {
        // Obtener la IP del usuario
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        ipAddress = ipData.ip;

        // Obtener el país basado en la IP
        const geoResponse = await fetch(`https://ipapi.co/${ipAddress}/json/`);
        const geoData = await geoResponse.json();
        countryName = geoData.country_name;
      } catch (geoError) {
        console.error('Error al obtener IP/país:', geoError);
        // Continuar con la autenticación incluso si falla la geolocalización
      }
      // Encrypt password before sending to server
      const hashedPassword = SHA256(password + salt).toString();

      // Llamar a la función de autenticación con la información de IP y país
      const { data, error } = await supabase.rpc('authenticate_user3', {
        username: username,
        password: hashedPassword,
        ip_address: ipAddress,
        country: countryName
      });

      if (error) {
        console.error('Error de autenticación:', error.message);
        return false;
      }

      // Determinamos si el usuario es administrador basado en el rol
      const userIsAdmin = data[0].rol === import.meta.env.VITE_APP_ALLOWED_ROLE;

      setIsAuthenticated(true);
      setUser(username);
      setIsAdmin(userIsAdmin);

      // Guardar sesión en sessionStorage
      sessionStorage.setItem('auth', JSON.stringify({
        isAuthenticated: true,
        user: username,
        isAdmin: userIsAdmin
      }));

      return true;
    } catch (error) {
      console.error('Error de autenticación:', (error as Error).message);
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setIsAdmin(false);
    sessionStorage.removeItem('auth');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};