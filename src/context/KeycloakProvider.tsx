
import React, { useState } from 'react';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloakInstance from '../config/KeycloakConfig';

const KeycloakProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [initialized, setInitialized] = useState(false);

  const onKeycloakEvent = (event: string, error: any) => {
    console.log('Keycloak event:', event, error);
    if (event === 'onReady') {
      setInitialized(true);
    }
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
        pkceMethod: 'S256',
        silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html'
      }}
    >
      {children}
    </ReactKeycloakProvider>
  );
};

export default KeycloakProvider;
