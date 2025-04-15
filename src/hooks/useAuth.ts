
import { useKeycloak } from '@react-keycloak/web';
import { logAuthAttempt } from '../services/authLogService';
import { useEffect, useCallback, useRef } from 'react';

export const useAuth = () => {
  const { keycloak, initialized } = useKeycloak();
  // Use ref to track if we've already logged this session
  const authLogged = useRef(false);

  const isAuthenticated = keycloak?.authenticated || false;

  const login = useCallback(() => {
    // Reset the auth logged flag when initiating a new login
    authLogged.current = false;
    return keycloak.login({
      redirectUri: window.location.origin
    });
  }, [keycloak]);
  
  const logout = useCallback(() => {
    // Reset the auth logged flag when logging out
    authLogged.current = false;
    return keycloak.logout({ redirectUri: window.location.origin });
  }, [keycloak]);

  const getUserInfo = useCallback(() => {
    if (isAuthenticated && keycloak?.tokenParsed) {
      const userInfo = {
        username: keycloak.tokenParsed?.preferred_username,
        email: keycloak.tokenParsed?.email,
        name: keycloak.tokenParsed?.name,
        id: keycloak.tokenParsed?.sub,
        roles: keycloak.tokenParsed?.realm_access?.roles || [],
      };
      return userInfo;
    }
    return null;
  }, [isAuthenticated, keycloak]);

  const getToken = useCallback(() => {
    return keycloak?.token;
  }, [keycloak]);
  
  const getRoles = useCallback(() => {
    if (keycloak?.tokenParsed?.realm_access?.roles) {
      return keycloak.tokenParsed.realm_access.roles;
    }
    return [];
  }, [keycloak]);

  // Use a single useEffect with strict condition to prevent multiple logs
  useEffect(() => {
    // Only log when both initialized and authenticated and not logged yet
    if (initialized && isAuthenticated && !authLogged.current) {
      const handleAuthenticationLogging = async () => {
        try {
          const userInfo = getUserInfo();
          if (userInfo?.email) {
            console.log('Attempting to log authentication once');
            // Set the flag before logging to prevent race conditions
            authLogged.current = true;
            
            // Log the auth attempt
            await logAuthAttempt({ 
              email: userInfo.email,
              username: userInfo.username 
            });
            
            console.log('Authentication logged successfully');
          } 
        } catch (error) {
          console.error('Error logging authentication attempt:', error);
        }
      };

      handleAuthenticationLogging();
    }
  }, [initialized, isAuthenticated, getUserInfo]);

  const roles = getRoles();
  const isAdmin = roles.includes(import.meta.env.VITE_APP_ALLOWED_ROLE);
  const user = keycloak?.tokenParsed?.preferred_username || null;

  return {
    isAuthenticated,
    initialized,
    login,
    logout,
    getUserInfo,
    getToken,
    isAdmin,
    keycloak,
    user
  };
};
