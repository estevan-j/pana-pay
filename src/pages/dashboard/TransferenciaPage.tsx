import { Info } from 'lucide-react';
import TransferenciaImage from '../../assets/Transferencia.webp';
import { Link } from 'react-router-dom';

const TransferenciaPage: React.FC = () => {
  return (
    <div className="full-width-padding">
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <Info className="h-6 w-6 text-[#2c347c]" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#2c347c] mb-4">Transferencia</h2>
            <p className="text-gray-700 mb-6">
              Este procedimiento permite generar una transacción de transferencia que llamará a
              mensajes "pacs" de débito y crédito respectivamente, el cual manejará el traslado de
              fondos entre usuarios afiliados usando el acceso a la plataforma transaccional en los
              canales de cada entidad financiera.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-sm text-yellow-700">
                El siguiente diagrama vincula el proceso de débito y crédito como parte de la
                transferencia de fondos, se deberá configurar 9 segundos para el débito y 9 segundos
                para el crédito, el canal adquiriente deberá tener una espera superior a los 20 segundos.
              </p>
            </div>
            <div className="container-centered">
              <img
                src={TransferenciaImage}
                alt="Proceso de Transferencia"
                className="img-centered"
              />
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 text-sm">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border-b" colSpan={2}>DETALLE DEL FLUJO DE TRANSFERENCIA</th>
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
                      El usuario accede al canal de la entidad ordenante e ingresa los datos de la transferencia.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">2</td>
                    <td className="px-4 py-2 border-b">
                      Utilizando el mensaje acmt.998.321.01, los sistemas centrales de la entidad financiera
                      remiten a la plataforma transaccional la información requerida para la consulta, en este caso,
                      los datos del usuario a debitar y acreditar respectivamente, monto de la transacción y demás
                      datos necesarios.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">3</td>
                    <td className="px-4 py-2 border-b">
                      Una vez que la plataforma transaccional Coonecta recibe los datos, realiza las siguientes
                      verificaciones, confirmando si:
                      <ul className="list-disc list-inside">
                        <li>Validar que los usuarios existan y estén activos en el directorio (ordenante y receptor)</li>
                        <li>El código del ordenante (IBAN) no puede ser el mismo del receptor (IBAN)</li>
                        <li>Límites de montos por transacción (máximo y mínimo)</li>
                        <li>Límite por transacciones de usuario por número de transacciones y monto acumulado (diario y mensual)</li>
                        <li>Que el código “EndToEndId” sea único para el día y de la institución ordenante</li>
                        <li>Los datos son completos y correctos para ambos usuarios</li>
                        <li>Si la validación inicial es exitosa, se dividirá la operación en 2 etapas, débito y crédito con sus respectivos mensajes.</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">4</td>
                    <td className="px-4 py-2 border-b">
                      Mediante el mensaje pacs.008.040.01, la plataforma transaccional Coonecta envía la
                      solicitud de débito a la entidad ordenante indicando realizar el débito correspondiente en la
                      cuenta del usuario.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">5</td>
                    <td className="px-4 py-2 border-b">
                      La entidad ordenante ejecuta el débito en la cuenta del usuario que inició la transacción,
                      respondiendo a la plataforma transaccional Coonecta con el mensaje pacs.002.040.01
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">6</td>
                    <td className="px-4 py-2 border-b">
                      Si Coonecta recibió una respuesta exitosa de confirmación del débito, se utiliza el mensaje
                      pacs.008.020.01 para enviar una solicitud de crédito hacia la entidad receptora, enviando los
                      mismos datos que en el mensaje anterior con la información de las 2 partes que interactúan.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">7</td>
                    <td className="px-4 py-2 border-b">
                      La entidad receptora ejecuta el crédito y realiza a acreditación del monto correspondiente
                      en la cuenta del beneficiario, respondiendo a la plataforma transaccional Coonecta con el
                      mensaje pacs.002.020.01
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">8</td>
                    <td className="px-4 py-2 border-b">
                      Coonecta valida el estado final de la transacción para confirmar que el débito y crédito fueron
                      exitosos, haciendo uso del mensaje acmt.998.322.01 para responder el estado final de la
                      transferencia hacia la entidad ordenante.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">9</td>
                    <td className="px-4 py-2 border-b">
                      El sistema central de la entidad recibe la respuesta del estado de la transacción
                      correspondiente a transferencia.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">10</td>
                    <td className="px-4 py-2 border-b">
                      El canal de la entidad ordenante presenta el estado final de la transacción al usuario,
                      indicando si fue exitosa o no exitosa.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-container">
              <div className="table-wrapper">
                <table className="table">
                  <thead>
                    <tr>
                      <th colSpan={7}>
                        Transferencia (Petición)
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
                      <td>SI</td>
                      <td>Id de Referencia del sistema que inicia la operación</td>
                      <td>82050000000123</td>
                      <td>Secuencial adquiriente, único por día para transacciones financieras</td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\IntrBkSttlmAmt\Amt</td>
                      <td>DecimalNumber</td>
                      <td>11</td>
                      <td>SI</td>
                      <td>Monto de la transacción con separador de decimales con punto</td>
                      <td>22.5</td>
                      <td>Precición de 2 digitos para los decimales</td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\IntrBkSttlmAmt\Ccy</td>
                      <td>ActiveOrHistoricCurrencyCode</td>
                      <td>3</td>
                      <td>SI</td>
                      <td>Indicador de moneda</td>
                      <td>USD</td>
                      <td>Por defecto USD para dólares, código del estándar ISO 4217</td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\DbtrAcctId\IBAN</td>
                      <td>IBAN2007Identifier</td>
                      <td>24</td>
                      <td>SI</td>
                      <td>Llave única del debitado</td>
                      <td>EC1282055678901234567890</td>
                      <td>Formato IBAN, basado en el estándar ISO 13616</td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\CdtrAcctId\IBAN</td>
                      <td>IBAN2007Identifier</td>
                      <td>24</td>
                      <td>SI</td>
                      <td>Llave única del acreditado</td>
                      <td>EC1282060000000000222222</td>
                      <td>Formato IBAN, basado en el estándar ISO 13616</td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\Prtry\CustRef</td>
                      <td>Max35Text</td>
                      <td>35</td>
                      <td>SI</td>
                      <td>Información adicional introducida por el cliente</td>
                      <td>Pago menestras</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\Prtry\ChanRef</td>
                      <td>Max35Text</td>
                      <td>35</td>
                      <td>SI</td>
                      <td>Código del canal</td>
                      <td>TERM001</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\Prtry\AgtRef</td>
                      <td>Max35Text</td>
                      <td>35</td>
                      <td>SI</td>
                      <td>Código de la agencia</td>
                      <td>AGT0002</td>
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
                        Transferencia (Respuesta)
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
                      <td>CdtTrfTxInf\OrgnlGrpInf\OrgnlMsgId</td>
                      <td>Max35Text</td>
                      <td>35</td>
                      <td>Si</td>
                      <td>Punto de referencia con el mensaje original incluido en (GrpHdr\MsgId)</td>
                      <td>8205202510210000000059</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\OrgnlGrpInf\OrgnlMgeType</td>
                      <td>Max15Text</td>
                      <td>15</td>
                      <td>Si</td>
                      <td>Contenido del campo Header del mensaje original (GrpHdr\Mge\Type)</td>
                      <td>acmt.998.321.01</td>
                      <td>Anexo 1 - MsgTypeCode</td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\OrgnlGrpInf\OrgnlCreDtTm</td>
                      <td>ISODateTime</td>
                      <td>19</td>
                      <td>Si</td>
                      <td>Fecha y hora en la que el mensaje de request fue creado (GrpHdr\CreDtTm)</td>
                      <td>2017-12-15T10:35:00</td>
                      <td>YYYY-MM-DDTHH:mm:ss</td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\PmtId\EndToEndId</td>
                      <td>Max35Text</td>
                      <td>35</td>
                      <td>Si</td>
                      <td>Id de Referencia del sistema que inicia la operación</td>
                      <td>82050000000123</td>
                      <td>Secuencial adquiriente</td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\PmtId\TxId</td>
                      <td>Max12Text</td>
                      <td>12</td>
                      <td>Si</td>
                      <td>Id de Referencia del sistema central (Coonecta)</td>
                      <td>9876543210</td>
                      <td>Secuencial switch RTC</td>
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
                      <td>Razón del reporte de estatus</td>
                      <td>0000</td>
                      <td>Anexo 1 - ReasonTypeCode</td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\Rsn\AddtlInf</td>
                      <td>Max105Text</td>
                      <td>105</td>
                      <td>No</td>
                      <td>Detalle del estado de razón, puede ser usado para múltiples propósitos</td>
                      <td>Transaccion Exitosa</td>
                      <td>Anexo 1 - ReasonTypeCode</td>
                    </tr>
                    <tr>
                      <td>TxInfAndSts\Dbtr\AuthCode</td>
                      <td>Max35Text</td>
                      <td>35</td>
                      <td>Si</td>
                      <td>Código de autorización de la entidad ordenante</td>
                      <td>968574</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>TxInfAndSts\Cdtr\AuthCode</td>
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
                      <td>Fecha contable de la transacción, switch central (Coonecta)</td>
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

export default TransferenciaPage;