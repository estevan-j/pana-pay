
import React from 'react';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloakInstance from '../config/KeycloakConfig';

const KeycloakProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const onKeycloakEvent = (event: string, error: any) => {
    console.log('Keycloak event:', event, error);
  };

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
        checkLoginIframe: false,
        pkceMethod: 'S256'
      }}
    >
      {children}
    </ReactKeycloakProvider>
  );
};

export default KeycloakProvider;
