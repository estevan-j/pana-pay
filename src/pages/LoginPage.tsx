import React from 'react';
import { useAuth } from '../hooks/useAuthLogs';

const LoginPage: React.FC = () => {
  const { isAuthenticated, login, logout, getUserInfo } = useAuth();

  return (
    <div className="login-container">
      {isAuthenticated ? (
        <div>
          <h2>Bienvenido, {getUserInfo()?.name}!</h2>
          <button onClick={() => logout()}>Cerrar sesión</button>
        </div>
      ) : (
        <div>
          <h2>Por favor inicia sesión</h2>
          <button onClick={() => login()}>Iniciar sesión con Keycloak</button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;