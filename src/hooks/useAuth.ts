
import { useKeycloak } from '@react-keycloak/web';

const useAuth = () => {
    const { keycloak, initialized } = useKeycloak();

    const isAuthenticated = keycloak?.authenticated || false;

    const login = () => {
        if (keycloak) {
            keycloak.login();
        }
    };
    
    const logout = () => {
        if (keycloak) {
            keycloak.logout({ redirectUri: window.location.origin });
        }
    };

    const getUserInfo = () => {
        if (isAuthenticated && keycloak.tokenParsed) {
            return {
                username: keycloak.tokenParsed?.preferred_username,
                email: keycloak.tokenParsed?.email,
                name: keycloak.tokenParsed?.name,
                id: keycloak.tokenParsed?.sub,
                roles: keycloak.tokenParsed?.realm_access?.roles || [],
            };
        }
        return null;
    };

    const getToken = () => keycloak?.token;

    const hasRole = (role: string) => {
        return keycloak?.hasRealmRole(role) || false;
    };

    // For DashboardPage.tsx
    const user = keycloak?.tokenParsed?.preferred_username || 'Usuario';
    const isAdmin = hasRole('admin');

    return {
        isAuthenticated,
        initialized,
        login,
        logout,
        getUserInfo,
        getToken,
        hasRole,
        keycloak,
        user,
        isAdmin,
    };
};

export default useAuth;
