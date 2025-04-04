import { Info } from 'lucide-react';
import ConsultaStatusImage from '../../assets/ConsultaStatus.webp';
import { Link } from 'react-router-dom';

const ConsultaStatusPage: React.FC = () => {
  return (
    <div className="full-width-padding">
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <Info className="h-6 w-6 text-[#2c347c]" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#2c347c] mb-4">Consulta Estado de Transacción</h2>
            <p className="text-gray-700 mb-6">
              Este procedimiento permite consultar el estado de una transacción realizada por el
              usuario de la entidad a partir de su identificador sus campos clave para identificar la
              transacción. Para esto, cada entidad debe garantizar que el registro de transacciones con
              el campo "EndToEndId" debe ser único en el día.
            </p>
            <div className="container-centered">
              <img
                src={ConsultaStatusImage}
                alt="Consulta de Estado"
                className="img-centered"
              />
            </div>
            <div className="table-container">
              <div className="table-wrapper">
                <table className="min-w-full bg-white border border-gray-200 text-sm">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border-b" colSpan={2}>DETALLE DEL FLUJO DE CONSULTA DE ESTATUS DE TRANSACCIÓN</th>
                    </tr>
                    <tr>
                      <th className="px-4 py-2 border-b">ETAPA</th>
                      <th className="px-4 py-2 border-b">DESCRIPCIÓN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border-b">1</td>
                      <td className="px-4 py-2 border-b">
                        Utilizando el mensaje acmt.998.511.01, los sistemas centrales de la entidad financiera
                        remiten a la plataforma transaccional la información requerida para la consulta de estado,
                        en este caso, el identificador de la transacción a consultar.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b">2</td>
                      <td className="px-4 py-2 border-b">
                        Una vez que la plataforma transaccional Coonecta recibe los datos, realiza las
                        verificaciones sobre la transacción para posteriormente consultar.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b">3</td>
                      <td className="px-4 py-2 border-b">
                        Mediante el mensaje acmt.988.512.01, la plataforma transaccional Coonecta envía la
                        información del estado de la transacción al sistema central de la entidad ordenante.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="table-container">
              <div className="table-wrapper">
                <table className="table">
                  <thead>
                    <tr>
                      <th colSpan={7}>
                        CONSULTA STATUS TRANSACCIÓN (Petición)
                      </th>
                    </tr>
                    <tr>
                      <th>CAMPO</th>
                      <th>TIPO DATO</th>
                      <th>LONG. MAX</th>
                      <th>MANDATORIO</th>
                      <th>DESCRIPCION</th>
                      <th>EJEMPLO</th>
                      <th>OBSERVACIÓN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>GrpHdr</td>
                      <td></td>
                      <td></td>
                      <td>SI</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\PmtId\EndToEndId</td>
                      <td>Max35Text</td>
                      <td></td>
                      <td>SI</td>
                      <td>Id de Referencia del sistema que inicia la operación</td>
                      <td>82050000000123</td>
                      <td>Solo se consulta el ID de la institución Ordenante</td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\PmtId\CreDtTm</td>
                      <td>ISODate</td>
                      <td>10</td>
                      <td>Si</td>
                      <td>Fecha de la transacción</td>
                      <td>2025-01-20</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="table-container">
              <div className="table-wrapper">
                <table className="table">
                  <thead>
                    <tr>
                      <th colSpan={7}>
                        CONSULTA STATUS TRANSACCIÓN (Respuesta)
                      </th>
                    </tr>
                    <tr>
                      <th>CAMPO</th>
                      <th>TIPO DATO</th>
                      <th>LONG. MAX</th>
                      <th>MANDATORIO</th>
                      <th>DESCRIPCION</th>
                      <th>EJEMPLO</th>
                      <th>OBSERVACIÓN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>GrpHdr</td>
                      <td></td>
                      <td></td>
                      <td>SI</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\PmtId\EndToEndId</td>
                      <td>Max35Text</td>
                      <td>35</td>
                      <td>Si</td>
                      <td>Id de Referencia del sistema que inicia la operación</td>
                      <td>82050000000123</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\PmtId\TxId</td>
                      <td>Max35Text</td>
                      <td>35</td>
                      <td>Si</td>
                      <td>Id de la transacción original</td>
                      <td>9876543210</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\IntrBkSttlmAmt\Amt</td>
                      <td>DecimalNumber</td>
                      <td>11</td>
                      <td>SI</td>
                      <td>Monto de la transacción con separador de decimales con punto</td>
                      <td>22.5</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\IntrBkSttlmAmt\Ccy</td>
                      <td>ActiveOrHistoricCurrencyCode</td>
                      <td>3</td>
                      <td>SI</td>
                      <td>Indicador de moneda</td>
                      <td>USD</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\TxSts</td>
                      <td>Max12Text</td>
                      <td>12</td>
                      <td>Si</td>
                      <td>Estatus de la transacción (OK - ERR)</td>
                      <td>OK</td>
                      <td>Anexo 1 - StatusTypeCode</td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\Rsn\RsnCd</td>
                      <td>Max4Text</td>
                      <td>4</td>
                      <td>Si</td>
                      <td>Razón del reporte de estatus la transacción financiera</td>
                      <td>####</td>
                      <td>Anexo 1 - ReasonTypeCode</td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\Rsn\AddtlInf</td>
                      <td>Max105Text</td>
                      <td>105</td>
                      <td>No</td>
                      <td>Detalle del estado de razón, puede ser usado para múltiples propósitos</td>
                      <td>Consulta exitosa</td>
                      <td>Anexo 1 - ReasonTypeCode</td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\Dbtr\AuthCode</td>
                      <td>Max35Text</td>
                      <td>35</td>
                      <td>Si</td>
                      <td>Código de autorización de la entidad ordenante</td>
                      <td>968574</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\Cdtr\AuthCode</td>
                      <td>Max35Text</td>
                      <td>35</td>
                      <td>Si</td>
                      <td>Código de autorización de la entidad receptora</td>
                      <td>227789</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\SttlmDt</td>
                      <td>ISODate</td>
                      <td>10</td>
                      <td>Si</td>
                      <td>Fecha contable de la transacción, Switch central (Coonecta)</td>
                      <td>2025-01-20</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-6 p-4 border-l-4 border-[#28367B] rounded-lg">
              <p className="text-sm text-primary">
                <strong>Nota:</strong> Para mayor información, visita nuestra sección de <Link to="/dashboard/api" className="text-highlight underline cursor-pointer">documentación de la API</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultaStatusPage;