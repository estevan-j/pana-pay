
import React from 'react';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloakInstance from '../config/KeycloakConfig';

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
      initOptions={{
        onLoad: 'check-sso',
        checkLoginIframe: false
      }}
    >
      {children}
    </ReactKeycloakProvider>
  );
};

export default KeycloakProvider;
