import React from 'react';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from '../config/KeycloakConfig';

interface KeycloakProviderProps {
    children: React.ReactNode;
}

const KeycloakProvider: React.FC<KeycloakProviderProps> = ({ children }) => {
    const onKeycloakEvent = (event: any, error: any) => {
        console.log('Keycloak event:', event, error);
    };

    const onTokens = (tokens: any) => {
        console.log('Keycloak tokens:', tokens);
    };

    return (
        <ReactKeycloakProvider
            authClient={keycloak}
            onEvent={onKeycloakEvent}
            onTokens={onTokens}
            initOptions={{
                onLoad: 'login-required',
                checkLoginIframe: false,
            }}
        >
            {children}
        </ReactKeycloakProvider>
    );
};

export default KeycloakProvider;