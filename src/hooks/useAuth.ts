
import { useKeycloak } from '@react-keycloak/web';

const useAuth = () => {
    const { keycloak, initialized } = useKeycloak();

    // Safe access to keycloak properties with optional chaining
    const isAuthenticated = initialized && keycloak?.authenticated || false;

    const login = () => {
        if (initialized && keycloak) {
            keycloak.login({
                redirectUri: window.location.origin + '/dashboard'
            });
        } else {
            console.warn('Keycloak not initialized, cannot login');
        }
    };
    
    const logout = () => {
        if (initialized && keycloak) {
            keycloak.logout({ redirectUri: window.location.origin });
        } else {
            console.warn('Keycloak not initialized, cannot logout');
        }
    };

    const getUserInfo = () => {
        if (isAuthenticated && keycloak?.tokenParsed) {
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

    const getToken = () => initialized && keycloak ? keycloak.token : null;

    const hasRole = (role: string) => {
        return initialized && keycloak ? keycloak.hasRealmRole(role) || false : false;
    };

    // For DashboardPage.tsx
    const user = initialized && keycloak?.tokenParsed?.preferred_username || 'Usuario';
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
