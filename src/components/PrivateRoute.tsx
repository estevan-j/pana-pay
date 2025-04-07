
import { ReactNode, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuthenticated, initialized, login } = useAuth();

  useEffect(() => {
    if (initialized && !isAuthenticated) {
      // Give small delay to ensure proper redirect handling
      setTimeout(() => {
        login();
      }, 100);
    }
  }, [initialized, isAuthenticated, login]);

  // Si todavía se está inicializando, mostrar un indicador de carga
  if (!initialized) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        <p className="ml-3 text-lg">Cargando...</p>
      </div>
    );
  }

  // Si no está autenticado, Keycloak redirigirá automáticamente
  if (!isAuthenticated) {
    return null;
  }
  // Si está autenticado, renderizar los componentes hijos
  return <>{children}</>;
};

export default PrivateRoute;
