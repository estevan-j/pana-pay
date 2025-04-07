
import { ReactNode } from 'react';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from '../config/keycloak';

interface KeycloakProviderProps {
  children: ReactNode;
}

const KeycloakProvider = ({ children }: KeycloakProviderProps) => {
  // Configuración de eventos para Keycloak con logs detallados
  const eventLogger = (event: any, error: any) => {
    console.log('Keycloak event:', event);
    if (error) {
      console.error('Keycloak error:', error);
    }
    
    // Log specific events for better debugging
    if (event === 'onAuthError') {
      console.error('Authentication error occurred', error);
    }
    if (event === 'onAuthLogout') {
      console.log('User has been logged out');
    }
    if (event === 'onAuthRefreshError') {
      console.error('Token refresh error', error);
    }
    if (event === 'onAuthSuccess') {
      console.log('Authentication successful');
      console.log('Token exists:', !!keycloak.token);
      console.log('User info:', keycloak.tokenParsed?.preferred_username);
    }
    if (event === 'onTokenExpired') {
      console.log('Token has expired');
    }
  };

  // Opciones de inicialización - configurada para iniciar sesión automáticamente
  const initOptions = {
    onLoad: 'login-required',
    checkLoginIframe: false,
    enableLogging: true, // Enable Keycloak's internal logging
  };

  console.log('Initializing Keycloak with options:', initOptions);

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
