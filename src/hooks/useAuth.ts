
import { useKeycloak } from '@react-keycloak/web';

export const useAuth = () => {
  const { keycloak, initialized } = useKeycloak();

  const isAuthenticated = keycloak.authenticated;

  const login = () => {
    console.log('Attempting to login with Keycloak');
    console.log('Current auth state:', { initialized, isAuthenticated });
    return keycloak.login({
      // Adding redirectUri to ensure proper redirect after login
      redirectUri: window.location.origin
    });
  };
  
  const logout = () => {
    console.log('Logging out user');
    return keycloak.logout({ redirectUri: window.location.origin });
  };

  const getUserInfo = () => {
    if (isAuthenticated) {
      const userInfo = {
        username: keycloak.tokenParsed?.preferred_username,
        email: keycloak.tokenParsed?.email,
        name: keycloak.tokenParsed?.name,
        id: keycloak.tokenParsed?.sub,
        roles: keycloak.tokenParsed?.realm_access?.roles || [],
      };
      console.log('User info retrieved:', userInfo);
      return userInfo;
    }
    console.log('No user info available - user not authenticated');
    return null;
  };

  const getToken = () => {
    console.log('Token retrieved:', keycloak.token ? 'Token exists' : 'No token');
    return keycloak.token;
  };

  const hasRole = (role: string) => {
    const hasRole = keycloak.hasRealmRole(role);
    console.log(`Checking if user has role "${role}":`, hasRole);
    return hasRole;
  };

  const isAdmin = keycloak.hasRealmRole(import.meta.env.VITE_APP_ALLOWED_ROLE);
  console.log(`Is user admin (has role ${import.meta.env.VITE_APP_ALLOWED_ROLE}):`, isAdmin);

  const user = keycloak.tokenParsed?.preferred_username || null;
  console.log('Current user:', user);

  return {
    isAuthenticated,
    initialized,
    login,
    logout,
    getUserInfo,
    getToken,
    hasRole,
    keycloak,
    isAdmin,
    user
  };
};
