
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

  // Opciones de inicialización - configurada para iniciar sesión automáticamente
  const initOptions = {
    onLoad: 'login-required',
    checkLoginIframe: false,
  };

  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      initOptions={initOptions}
      onEvent={eventLogger}
      LoadingComponent={
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          <p className="ml-3 text-lg">Conectando con Keycloak...</p>
        </div>
      }
    >
      {children}
    </ReactKeycloakProvider>
  );
};

export default KeycloakProvider;
