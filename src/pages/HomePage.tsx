
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import LogoBlanco from '../assets/LogoBlanco.webp';

const HomePage = () => {
  const { isAuthenticated, login, initialized } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('HomePage - Authentication state:', { initialized, isAuthenticated });
    
    // Si ya está autenticado, redirigir al dashboard
    if (isAuthenticated) {
      console.log('User is authenticated, redirecting to dashboard');
      navigate('/dashboard');
    }
    // Si está inicializado pero no autenticado, iniciar sesión automáticamente
    else if (initialized && !isAuthenticated) {
      console.log('User is not authenticated, initiating Keycloak login');
      // Give small delay to ensure proper redirect handling
      setTimeout(() => {
        login();
      }, 100);
    }
  }, [isAuthenticated, initialized, navigate, login]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <img src={LogoBlanco} alt="PanaPay Logo" className="h-16 mb-4" />
          <h1 className="text-2xl font-bold text-gray-800">PanaPay</h1>
          <p className="text-gray-600 text-center mt-2">
            Bienvenido a la plataforma de interoperabilidad de Coonecta
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        </div>
        <p className="text-center mt-4 text-gray-600">
          Iniciando sesión...
        </p>
      </div>
    </div>
  );
};

export default HomePage;
