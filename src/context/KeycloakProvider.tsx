
import { ReactNode } from 'react';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from '../config/keycloak';

interface KeycloakProviderProps {
  children: ReactNode;
}

const KeycloakProvider = ({ children }: KeycloakProviderProps) => {
  // Configuración de eventos para Keycloak
  const eventLogger = (event: unknown, error: unknown) => {
    console.log('Keycloak event:', event, error);
  };

  // Opciones de inicialización
  const initOptions = {
    onLoad: 'check-sso',
    silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
    pkceMethod: 'S256',
  } as const;

  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      initOptions={initOptions}
      onEvent={eventLogger}
    >
      {children}
    </ReactKeycloakProvider>
  );
};

export default KeycloakProvider;
