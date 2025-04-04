
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import getKeycloakInstance from './config/KeycloakConfig';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';

function App() {
  // Obtenemos la instancia de Keycloak usando la función
  const keycloak = getKeycloakInstance();
  
  // Configuración para prevenir inicializaciones múltiples
  const initOptions = {
    onLoad: 'check-sso',
    silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
    checkLoginIframe: false,
    pkceMethod: 'S256'
  };

  // Manejar eventos de Keycloak para depuración
  const handleKeycloakEvent = (event: string, error?: any) => {
    console.log('Keycloak event:', event);
    if (error) {
      console.error('Keycloak error:', error);
    }
  };

  // Loading component to display while Keycloak is initializing
  const LoadingComponent = (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p>Cargando autenticación...</p>
      </div>
    </div>
  );

  return (
    <ReactKeycloakProvider 
      authClient={keycloak}
      initOptions={initOptions}
      onEvent={handleKeycloakEvent}
      LoadingComponent={LoadingComponent}
    >
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route
            path="/dashboard/*"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ReactKeycloakProvider>
  );
}

export default App;
