import { Info } from 'lucide-react';
import ReversoCreditoImage from '../../assets/ReversoCredito.webp';
import { Link } from 'react-router-dom';

const ReversoCreditoPage: React.FC = () => {
  return (
    <div className="full-width-padding">
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <Info className="h-6 w-6 text-[#2c347c]" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#2c347c] mb-4">Reverso de Crédito</h2>
            <p className="text-gray-700 mb-6">
              El reverso de crédito se genera si la entidad receptora no responde dentro del tiempo
              establecido (Timeout) o si ocurre algún fallo en el procesamiento del crédito. Este
              reverso puede generar también un reverso automático del débito correspondiente,
              usando SAF para esto.
            </p>
            <div className="container-centered">
              <img
                src={ReversoCreditoImage}
                alt="Proceso de Reverso de Crédito"
                className="img-centered"
              />
            </div>
            <div className="table-container">
              <div className="table-wrapper">
                <table className="min-w-full bg-white border border-gray-200 text-sm">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border-b" colSpan={2}>DETALLE DEL FLUJO DE REVERSO DE CRÉDITO</th>
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
                        Utilizando el mensaje pacs.007.020.01, Coonecta emite hacia la entidad el inicio
                        de la transacción de reverso del crédito en caso de que la operación original falle,
                        por ejemplo, por timeout, etc.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b">2</td>
                      <td className="px-4 py-2 border-b">
                        Una vez que la entidad recibe los datos, realiza las verificaciones sobre la
                        transacción para posteriormente ejecutar el débito en la cuenta del usuario
                        afectado.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b">3</td>
                      <td className="px-4 py-2 border-b">
                        Mediante el mensaje pacs.002.021.01, el sistema de la entidad envía la
                        información del estado del reverso hacia la plataforma transaccional Coonecta.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b">4</td>
                      <td className="px-4 py-2 border-b">
                        La plataforma transaccional valida que la transacción reversada fue exitosa y
                        genera un reverso automático del débito original siguiendo el flujo del punto 2
                        (Reverso Débito).
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
                        REVERSO CRÉDITO - Solo Por time out (Petición)
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
                      <td>PmtRtr/OrgnlGrpInf/OrgnlMsgId</td>
                      <td>Max35Text</td>
                      <td>35</td>
                      <td>Si</td>
                      <td>Punto de referencia con el mensaje original (GrpHdr\MsgId)</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>PmtRtr/OrgnlGrpInf/OrgnlMsgNmId</td>
                      <td>Max35Text</td>
                      <td>35</td>
                      <td>Si</td>
                      <td>Identificador del mensaje original (GrpHdr\Mge\Type)</td>
                      <td>pacs.008.020.01</td>
                      <td>Anexo 1 - MsgTypeCode</td>
                    </tr>
                    <tr>
                      <td>PmtRtr/OrgnlGrpInf/OrgnlCreDtTm</td>
                      <td>ISODateTime</td>
                      <td>19</td>
                      <td>Si</td>
                      <td>Fecha y hora en la que el mensaje de request fue creado (GrpHdr\CreDtTm)</td>
                      <td>2017-12-15T10:35:00</td>
                      <td>YYYY-MM-DDTHH:mm:ss</td>
                    </tr>
                    <tr>
                      <td>PmtRtr/PmtId/OrgnlEndToEndId</td>
                      <td>Max35Text</td>
                      <td>35</td>
                      <td>Si</td>
                      <td>Id de Referencia del sistema que inicia la operación</td>
                      <td>82080000000653</td>
                      <td>Secuencial adquiriente</td>
                    </tr>
                    <tr>
                      <td>PmtRtr/PmtId/OrgnlTxId</td>
                      <td>Max35Text</td>
                      <td>12</td>
                      <td>Si</td>
                      <td>Secuencia generada por el switch central</td>
                      <td>6552364125</td>
                      <td>Secuencial SwitchRTC</td>
                    </tr>
                    <tr>
                      <td>PmtRtr/IntrBkSttlmAmt/Amt</td>
                      <td>DecimalNumber</td>
                      <td>11</td>
                      <td>Si</td>
                      <td>Monto de la transacción con separador de decimales con punto.</td>
                      <td>22,5</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>PmtRtr/IntrBkSttlmAmt/Ccy</td>
                      <td>Max3Text</td>
                      <td>3</td>
                      <td>Si</td>
                      <td>Moneda y Monto a reversar</td>
                      <td>USD</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>PmtRtr/RtrRsnInf/ReversalRsn</td>
                      <td>Max4Text</td>
                      <td>4</td>
                      <td>Si</td>
                      <td>Razón del reverso</td>
                      <td>###</td>
                      <td>Anexo 1 - ReasonReverse</td>
                    </tr>
                    <tr>
                      <td>PmtRtr/CdtrAcctId/IBAN</td>
                      <td>IBAN2007Identifier</td>
                      <td>24</td>
                      <td>Si</td>
                      <td>Llave única del usuario del crédito</td>
                      <td>EC128205000000000022222</td>
                      <td>Formato IBAN</td>
                    </tr>
                    <tr>
                      <td>PmtRtr/SttlmDt</td>
                      <td>ISODate</td>
                      <td>10</td>
                      <td>Si</td>
                      <td>Fecha contable de la transacción</td>
                      <td>12/10/2025</td>
                      <td>YYYY-MM-DD</td>
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
                        REVERSO CRÉDITO - Solo Por time out (Respuesta)
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
                      <td>TxInfAndSts\OrgnlGrpInf\OrgnlMsgId</td>
                      <td>Max35Text</td>
                      <td>35</td>
                      <td>Si</td>
                      <td>Punto de referencia con el mensaje original incluido en (GrpHdr\MsgId)</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>TxInfAndSts\OrgnlGrpInf\OrgnlMgeType</td>
                      <td>Max15Text</td>
                      <td>15</td>
                      <td>Si</td>
                      <td>Contenido del campo Header del mensaje original (GrpHdr\Mge\Type)</td>
                      <td>pacs.002.022.01</td>
                      <td>Anexo 1 - MsgTypeCode</td>
                    </tr>
                    <tr>
                      <td>TxInfAndSts\OrgnlGrpInf\OrgnlCreDtTm</td>
                      <td>ISODateTime</td>
                      <td>19</td>
                      <td>Si</td>
                      <td>Fecha y hora en la que el mensaje de request fue creado (GrpHdr\CreDtTm)</td>
                      <td>2017-12-15T10:35:00</td>
                      <td>YYYY-MM-DDTHH:mm:ss</td>
                    </tr>
                    <tr>
                      <td>TxInfAndSts\OrgnlGrpInf\OrgnlEndToEndId</td>
                      <td>Max35Text</td>
                      <td>35</td>
                      <td>Si</td>
                      <td>Id de Referencia del sistema que inicia la operación</td>
                      <td>82050000000123</td>
                      <td>Secuencial adquiriente</td>
                    </tr>
                    <tr>
                      <td>TxInfAndSts\OrgnlGrpInf\OrgnlTxId</td>
                      <td>Max12Text</td>
                      <td>12</td>
                      <td>Si</td>
                      <td>Id de Referencia del sistema central</td>
                      <td>9876543210</td>
                      <td>Secuencial SwitchRTC</td>
                    </tr>
                    <tr>
                      <td>TxInfAndSts\TxSts</td>
                      <td>Max12Text</td>
                      <td>12</td>
                      <td>Si</td>
                      <td>Estatus de la transacción (OK - ERR)</td>
                      <td>OK</td>
                      <td>Anexo 1 - StatusTypeCode</td>
                    </tr>
                    <tr>
                      <td>TxInfAndSts\Rsn\RsnCd</td>
                      <td>Max4Text</td>
                      <td>4</td>
                      <td>Si</td>
                      <td>Razón del reporte de estatus</td>
                      <td>000</td>
                      <td>Anexo 1 - ReasonTypeCode</td>
                    </tr>
                    <tr>
                      <td>TxInfAndSts\Rsn\AddtlInf</td>
                      <td>Max105Text</td>
                      <td>105</td>
                      <td>No</td>
                      <td>Detalle del estado de razón, puede ser usado para múltiples propósitos</td>
                      <td>Transacción Exitosa</td>
                      <td>Anexo 1 - ReasonTypeCode</td>
                    </tr>
                    <tr>
                      <td>TxInfAndSts\AcctSvcrRef</td>
                      <td>Max6Text</td>
                      <td>6*</td>
                      <td>Si</td>
                      <td>Referencia de la institución que procesa la transacción</td>
                      <td>086523</td>
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

export default ReversoCreditoPage;