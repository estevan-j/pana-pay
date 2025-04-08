
import { useKeycloak } from '@react-keycloak/web';
import { logAuthAttempt } from '../services/authLogService';
import { useEffect, useCallback, useRef } from 'react';

export const useAuth = () => {
  const { keycloak, initialized } = useKeycloak();
  // Add a ref to track if we've already logged this session
  const authLogged = useRef(false);

  const isAuthenticated = keycloak?.authenticated || false;

  const login = useCallback(() => {
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

  // Use a single useEffect with proper dependencies to prevent multiple executions
  useEffect(() => {
    // Only log when both initialized and authenticated
    if (initialized && isAuthenticated && !authLogged.current) {
      const handleAuthenticationLogging = async () => {
        try {
          const userInfo = getUserInfo();
          if (userInfo?.email) {
            console.log('Attempting to log authentication once');
            // Log the auth attempt
            await logAuthAttempt({ 
              email: userInfo.email,
              username: userInfo.username 
            });
            // Mark this session as logged
            authLogged.current = true;
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
