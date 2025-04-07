
import Keycloak from 'keycloak-js';

// Configuración de Keycloak
const keycloakConfig = {
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM || 'adminpanapay', // Valor por defecto
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID || 'admin-panapay' // Valor por defecto
};

// Inicializar instancia de Keycloak
const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
