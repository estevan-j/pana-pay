
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import LogoBlanco from '../assets/LogoBlanco.webp';

const LoginPage = () => {
  const { keycloak, initialized, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // If already authenticated, redirect to dashboard
    if (initialized && isAuthenticated) {
      navigate('/dashboard');
    }
  }, [initialized, isAuthenticated, navigate]);

  const handleLogin = () => {
    if (initialized) {
      keycloak.login();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <img src={LogoBlanco} alt="PanaPay Logo" className="h-16 mb-4" />
          <h1 className="text-2xl font-bold text-gray-800">PanaPay</h1>
          <p className="text-gray-600 text-center mt-2">
            La plataforma de interoperabilidad de Coonecta
          </p>
        </div>
        
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          Iniciar Sesión
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
