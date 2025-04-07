
import { ReactNode, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuthenticated, initialized, login } = useAuth();

  useEffect(() => {
    console.log('PrivateRoute - Authentication state:', { initialized, isAuthenticated });
    
    if (initialized && !isAuthenticated) {
      console.log('User not authenticated, redirecting to login');
      // Give small delay to ensure proper redirect handling
      setTimeout(() => {
        login();
      }, 100);
    }
  }, [initialized, isAuthenticated, login]);

  // Si todavía se está inicializando, mostrar un indicador de carga
  if (!initialized) {
    console.log('Keycloak still initializing...');
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        <p className="ml-3 text-lg">Cargando...</p>
      </div>
    );
  }

  // Si no está autenticado, Keycloak redirigirá automáticamente
  if (!isAuthenticated) {
    console.log('Not authenticated, returning null to allow redirect');
    return null;
  }

  console.log('User is authenticated, rendering protected content');
  // Si está autenticado, renderizar los componentes hijos
  return <>{children}</>;
};

export default PrivateRoute;
