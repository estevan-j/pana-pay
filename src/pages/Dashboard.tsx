
import { useKeycloak } from '@react-keycloak/web';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { keycloak } = useKeycloak();
  const navigate = useNavigate();

  const handleLogout = () => {
    keycloak.logout();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white py-1 px-4 rounded hover:bg-red-700 transition-colors"
            >
              Cerrar Sesión
            </button>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Información de usuario</h2>
            <p><strong>Usuario:</strong> {keycloak.tokenParsed?.preferred_username || 'No disponible'}</p>
            <p><strong>Nombre:</strong> {keycloak.tokenParsed?.name || 'No disponible'}</p>
            <p><strong>Email:</strong> {keycloak.tokenParsed?.email || 'No disponible'}</p>
          </div>
          
          <div className="mt-4">
            <button
              onClick={() => navigate('/')}
              className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors"
            >
              Volver a Inicio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
