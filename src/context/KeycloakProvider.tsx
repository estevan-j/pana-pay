
import React, { useState } from 'react';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import getKeycloakInstance, { markAsInitialized } from '../config/KeycloakConfig';

const KeycloakProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [initialized, setInitialized] = useState(false);
  
  // Important: Get the actual Keycloak instance before rendering
  const keycloak = getKeycloakInstance();

  const onKeycloakEvent = (event: string, error: any) => {
    console.log('Keycloak event:', event, error);
    if (event === 'onReady') {
      setInitialized(true);
      markAsInitialized(); // Mark the singleton as initialized
    } else if (event === 'onInitError') {
      console.error('Keycloak initialization error:', error);
    }
  };

  const onKeycloakTokens = (tokens: any) => {
    console.log('Keycloak tokens:', tokens);
  };

  // Loading component to display while Keycloak is initializing
  const LoadingComponent = (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p>Loading authentication...</p>
      </div>
    </div>
  );

  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      onEvent={onKeycloakEvent}
      onTokens={onKeycloakTokens}
      initOptions={{
        onLoad: 'check-sso',
        checkLoginIframe: false,
        pkceMethod: 'S256',
        silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html'
      }}
      LoadingComponent={LoadingComponent}
    >
      {children}
    </ReactKeycloakProvider>
  );
};

export default KeycloakProvider;
