
import Keycloak from 'keycloak-js';

// Configuration for Keycloak
const keycloakConfig = {
    url: import.meta.env.VITE_KEYCLOAK_URL || 'http://localhost:8080',
    realm: import.meta.env.VITE_KEYCLOAK_REALM || 'adminpanapay',
    clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID || 'admin-panapay',
};

// Create a single Keycloak instance to be reused across the app
const keycloakInstance = new Keycloak(keycloakConfig);

// Prevent multiple initializations
let initialized = false;

export const initializeKeycloak = async () => {
    if (initialized) {
        return Promise.resolve(keycloakInstance);
    }
    
    try {
        initialized = true;
        return keycloakInstance;
    } catch (error) {
        console.error('Failed to initialize Keycloak:', error);
        initialized = false;
        throw error;
    }
};

export default keycloakInstance;
