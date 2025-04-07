
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import LogoBlanco from '../assets/LogoBlanco.webp';

const LoginPage = () => {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Si ya está autenticado, redirigir al dashboard
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = () => {
    login();
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
          Iniciar Sesión con Keycloak
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
