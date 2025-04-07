
import Keycloak from 'keycloak-js';

// Configuración de Keycloak
const keycloakConfig = {
  url: import.meta.env.VITE_KEYCLOAK_URL ,
  realm: import.meta.env.VITE_KEYCLOAK_REALM ,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID ,
};

// Inicializar instancia de Keycloak
const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
