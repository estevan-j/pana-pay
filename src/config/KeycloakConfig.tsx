
import Keycloak from 'keycloak-js';

// Configuration for Keycloak
const keycloakConfig = {
    url: import.meta.env.VITE_KEYCLOAK_URL || 'http://localhost:8080',
    realm: import.meta.env.VITE_KEYCLOAK_REALM || 'adminpanapay',
    clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID || 'admin-panapay',
};

// Create a single Keycloak instance to be reused across the app
const keycloakInstance = new Keycloak(keycloakConfig);

// Track initialization state
let initialized = false;

// Prevent multiple initializations by not actually initializing here
// Let ReactKeycloakProvider handle the initialization
export const initializeKeycloak = async () => {
    if (initialized) {
        return Promise.resolve(keycloakInstance);
    }
    
    try {
        console.log('Keycloak instance returned without initialization');
        return keycloakInstance;
    } catch (error) {
        console.error('Failed to get Keycloak instance:', error);
        throw error;
    }
};

// Mark as initialized when ReactKeycloakProvider successfully initializes
export const markAsInitialized = () => {
    initialized = true;
    console.log('Keycloak instance marked as initialized');
};

export default keycloakInstance;
