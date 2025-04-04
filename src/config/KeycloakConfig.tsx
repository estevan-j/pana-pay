
import Keycloak from 'keycloak-js';

// Variable global para la instancia única
let keycloakInstance: Keycloak | null = null;

// Función para obtener la instancia de Keycloak como singleton
const getKeycloakInstance = (): Keycloak => {
  if (!keycloakInstance) {
    console.log('Creando nueva instancia de Keycloak'); // Para debug
    const keycloakConfig = {
      url: import.meta.env.VITE_KEYCLOAK_URL || 'http://localhost:8080',
      realm: import.meta.env.VITE_KEYCLOAK_REALM || 'adminpanapay',
      clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID || 'admin-panapay',
    };
    
    keycloakInstance = new Keycloak(keycloakConfig);
  } else {
    console.log('Usando instancia existente de Keycloak'); // Para debug
  }
  
  return keycloakInstance;
};

export default getKeycloakInstance;
