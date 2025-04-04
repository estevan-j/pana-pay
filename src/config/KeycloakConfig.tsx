
import Keycloak from 'keycloak-js';

// Configuration for Keycloak
const keycloakConfig = {
    url: import.meta.env.VITE_KEYCLOAK_URL || 'http://localhost:8080',
    realm: import.meta.env.VITE_KEYCLOAK_REALM || 'adminpanapay',
    clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID || 'admin-panapay',
};

// Create a single Keycloak instance to be reused across the app
const keycloakInstance = new Keycloak(keycloakConfig);

export default keycloakInstance;
