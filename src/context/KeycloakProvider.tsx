
import React from 'react';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import Keycloak from 'keycloak-js';

// Create a single Keycloak instance outside of the component
// This ensures it's only created once regardless of component re-renders
const keycloakInstance = new Keycloak({
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: 'RTCPANAPAY',
  clientId: 'login',
});

interface KeycloakProviderProps {
  children: React.ReactNode;
}

const KeycloakProvider: React.FC<KeycloakProviderProps> = ({ children }) => {
  // Handler function executed when the Keycloak instance is initialized
  const onKeycloakEvent = (event: any) => {
    console.log('Keycloak event:', event);
  };

  // Handler function executed when the authentication status changes
  const onKeycloakTokens = (tokens: any) => {
    console.log('Keycloak tokens:', tokens);
  };

  return (
    <ReactKeycloakProvider
      authClient={keycloakInstance}
      onEvent={onKeycloakEvent}
      onTokens={onKeycloakTokens}
    >
      {children}
    </ReactKeycloakProvider>
  );
};

export default KeycloakProvider;
