
import { ReactNode, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuthenticated, initialized, login } = useAuth();

  useEffect(() => {
    if (initialized && !isAuthenticated) {
      // Redirige automáticamente a Keycloak si no está autenticado
      login();
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
