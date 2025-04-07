
import { useKeycloak } from '@react-keycloak/web';

export const useAuth = () => {
  const { keycloak, initialized } = useKeycloak();

  const isAuthenticated = keycloak.authenticated;

  const login = () => {
    return keycloak.login({
      redirectUri: window.location.origin
    });
  };
  
  const logout = () => {
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
      return userInfo;
    }
    return null;
  };

  const getToken = () => {
    return keycloak.token;
  };
  
  const getRoles = () => {
    if (keycloak.tokenParsed?.realm_access?.roles) {
      console.log('Roles:', keycloak.tokenParsed.realm_access.roles);
      return keycloak.tokenParsed.realm_access.roles;
    }
    console.error('No roles found in tokenParsed');
    return [];
  };

  const roles = getRoles();
  const isAdmin = roles.includes(import.meta.env.VITE_APP_ALLOWED_ROLE);


  const user = keycloak.tokenParsed?.preferred_username || null;

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
