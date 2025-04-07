
import Keycloak from 'keycloak-js';

// Configuración de Keycloak
const keycloakConfig = {
  url: import.meta.env.VITE_KEYCLOAK_URL || 'https://129.153.38.200.nip.io/auth',
  realm: 'adminpanapay',
  clientId: 'admin-panapay'
};

// Inicializar instancia de Keycloak
const keycloak = new Keycloak(keycloakConfig);

export default keycloak;
