
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
      login();
    }
  }, [initialized, isAuthenticated, login]);

  // Si todavía se está inicializando, mostrar un indicador de carga
  if (!initialized) {
    return <div className="flex justify-center items-center h-screen">Cargando...</div>;
  }

  // Si no está autenticado, Keycloak redirigirá automáticamente, pero añadimos esto como respaldo
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Si está autenticado, renderizar los componentes hijos
  return <>{children}</>;
};

export default PrivateRoute;
