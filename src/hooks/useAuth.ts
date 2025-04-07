
import { useKeycloak } from '@react-keycloak/web';
import { logAuthAttempt } from '../services/authLogService';
import { useEffect, useCallback } from 'react';

export const useAuth = () => {
  const { keycloak, initialized } = useKeycloak();

  const isAuthenticated = keycloak?.authenticated || false;

  const login = useCallback(() => {
    return keycloak.login({
      redirectUri: window.location.origin
    });
  }, [keycloak]);
  
  const logout = useCallback(() => {
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

  useEffect(() => {
    const handleAuthenticationLogging = async () => {
      if (isAuthenticated && initialized) {
        try {
          console.log('User authenticated, logging attempt');
          const userInfo = getUserInfo();
          if (userInfo?.email) {
            await logAuthAttempt({ 
              email: userInfo.email,
              username: userInfo.username 
            });
          } else {
            console.warn('Cannot log auth attempt: missing email in user info', userInfo);
          }
        } catch (error) {
          console.error('Error logging authentication attempt:', error);
        }
      }
    };

    handleAuthenticationLogging();
  }, [isAuthenticated, initialized, getUserInfo]);

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
