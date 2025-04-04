
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { keycloak } = useKeycloak();

  // Check if the user is authenticated
  const isLoggedIn = keycloak.authenticated;

  // If not authenticated, redirect to the login page
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the child components
  return <>{children}</>;
};

export default PrivateRoute;
