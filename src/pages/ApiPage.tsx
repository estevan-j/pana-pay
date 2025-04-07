import { useState, useEffect } from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import { Download, Upload } from 'lucide-react';
import { saveAs } from 'file-saver';
import { useAuth } from '../hooks/useAuth';

const ApiPage: React.FC = () => {
  const [jsonData, setJsonData] = useState<any>(null);
  const { isAdmin } = useAuth();

  useEffect(() => {
    const fetchJsonData = async () => {
      try {
        const response = await fetch('/ApiPanaPay2.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        alert('Error al cargar el archivo JSON. Por favor, verifica el formato.');
      }
    };

    fetchJsonData();
  }, []);

  const handleExportJson = () => {
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
        } catch (error) {
          console.error('Error parsing JSON:', error);
          alert('Error al cargar el archivo JSON. Por favor, verifica el formato.');
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

          <div className="swagger-container">
            {jsonData && <SwaggerUI spec={jsonData} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiPage;
