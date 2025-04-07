
import { useState, useEffect } from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import { Download, Upload } from 'lucide-react';
import { saveAs } from 'file-saver';
import { useAuth } from '../hooks/useAuth';

const ApiPage: React.FC = () => {
  const [jsonData, setJsonData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { isAdmin } = useAuth();

  useEffect(() => {
    const fetchJsonData = async () => {
      try {
        console.log('Fetching JSON file from /ApiPanaPay2.json');
        setLoading(true);
        const response = await fetch('/ApiPanaPay2.json');
        
        console.log('Response status:', response.status);
        if (!response.ok) {
          throw new Error(`Failed to fetch JSON: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log('JSON data loaded successfully', Object.keys(data));
        setJsonData(data);
        setError(null);
      } catch (error) {
        console.error('Error loading JSON:', error);
        setError('Error al cargar el archivo JSON. Por favor, verifica el formato.');
      } finally {
        setLoading(false);
      }
    };

    fetchJsonData();
  }, []);

  const handleExportJson = () => {
    if (!jsonData) {
      console.error('No JSON data to export');
      return;
    }
    const jsonString = JSON.stringify(jsonData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    saveAs(blob, 'panapay-api-spec.json');
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const content = e.target?.result as string;
          const parsedJson = JSON.parse(content);
          setJsonData(parsedJson);
          setError(null);
          console.log('Custom JSON uploaded successfully');
        } catch (error) {
          console.error('Error parsing JSON:', error);
          setError('Error al cargar el archivo JSON. Por favor, verifica el formato.');
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="min-h-screen bg-[#d2d4e0]">
      <div className="full-width-padding">
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6 md:mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-6 border-b">
            <h2 className="text-xl font-bold text-[#2c347c]">
              Documentación API
            </h2>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
              <button
                className="btn-secondary flex items-center text-sm md:text-base"
                onClick={handleExportJson}
                disabled={!jsonData}
              >
                <Download className="mr-2 h-4 w-4" />
                Exportar JSON
              </button>
              {isAdmin && (
                <label className="btn-primary flex items-center text-sm md:text-base cursor-pointer">
                  <Upload className="mr-2 h-4 w-4" />
                  Subir JSON
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          </div>

          <div className="swagger-container p-4">
            {loading && (
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#2c347c]"></div>
                <p className="ml-3">Cargando especificación API...</p>
              </div>
            )}
            
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                <p>{error}</p>
                <p className="text-sm mt-1">Asegúrate que el archivo JSON esté en el directorio correcto y tenga el formato adecuado de OpenAPI/Swagger.</p>
              </div>
            )}
            
            {!loading && !error && jsonData && <SwaggerUI spec={jsonData} />}
            
            {!loading && !error && !jsonData && (
              <div className="text-center py-8 text-gray-500">
                No se encontró la especificación de la API. Por favor, intenta subir un archivo JSON válido.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiPage;
