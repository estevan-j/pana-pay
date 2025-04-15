import { Info } from 'lucide-react';

const HistorialCambiosPage: React.FC = () => {
  return (
    <div className="full-width-padding">
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <Info className="h-6 w-6 text-[#2c347c]" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#2c347c] mb-4">Historial de Cambios</h1>
            <div className="text-gray-700 text-base mb-6">
              <div className="table-container">
                <div className="table-wrapper">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Fecha</th>
                        <th>Nombre</th>
                        <th className='w-[60px] whitespace-nowrap'>Versión</th>
                        <th>Detalle</th>
                        <th>Hoja</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>6/1/2025</td>
                        <td>Leonardo Jácome</td>
                        <td>1.1</td>
                        <td>Cambios con las modificaciones de multi credencial</td>
                        <td>Todo el Archivo</td>
                      </tr>
                      <tr>
                        <td>27/1/2025</td>
                        <td>Kevin Rivadeneria</td>
                        <td>1.2</td>
                        <td>Cambios en los flujos transaccionales</td>
                        <td>Todo el Archivo</td>
                      </tr>
                      <tr>
                        <td>12/2/2025</td>
                        <td>Kevin Rivadeneria</td>
                        <td>1.3</td>
                        <td>Cambios Revisiones con proveedor Bytecq</td>
                        <td>Transferencia RS, Debito, Credito, Reverso Response</td>
                      </tr>
                      <tr>
                        <td>25/2/2025</td>
                        <td>Kevin Rivadeneria</td>
                        <td>1.4</td>
                        <td>Ejemplo de catálogo de entidades</td>
                        <td>Entidades, GrpHdr</td>
                      </tr>
                      <tr>
                        <td>13/3/2025</td>
                        <td>Esteban Bajaña</td>
                        <td>1.5</td>
                        <td>Afiliación Masiva</td>
                        <td>Creación de la Afiliación Masiva</td>
                      </tr>
                      <tr>
                        <td>20/3/2025</td>
                        <td>Esteban Bajaña</td>
                        <td>1.6</td>
                        <td>QR</td>
                        <td>Informacio QR</td>
                      </tr>
                      <tr>
                        <td>15//2025</td>
                        <td>Esteban Bajaña</td>
                        <td>1.7</td>
                        <td>Cambios en: desafiliacion por Número de cuenta y Tipo de cuenta, consulta status  se añadio en la respuesta el campo globalStatus(GlobalTxSts).</td>
                        <td>Desafiliación, Consulta Status</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistorialCambiosPage;