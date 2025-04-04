import { Info } from 'lucide-react';
import ReversoDebitoImage from '../../assets/ReversoDebito.webp';
import { Link } from 'react-router-dom';


const DebitoPage: React.FC = () => {
  return (
    <div className="full-width-padding">
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <Info className="h-6 w-6 text-[#2c347c]" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#2c347c] mb-4">Débito</h2>
            <p className="text-gray-700 mb-6">
              Detallado en el flujo de la operación de transferencia desde la entidad hacia Coonecta.
              El débito es la operación inicial que realiza un cargo en la cuenta del usuario de la entidad
              ordenante. Esta transacción es el primer paso de una transferencia y asegura que los
              fondos estén disponibles para el envío.
            </p>
            <div className="container-centered">
              <img
                src={ReversoDebitoImage}
                alt="Proceso de Débito"
                className="img-centered"
              />
            </div>
            <div className="table-container">
              <div className="table-wrapper">
                <table className="min-w-full bg-white border border-gray-200 text-sm">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border-b" colSpan={2}>DETALLE DEL FLUJO DE REVERSO DE DÉBITO</th>
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
                        Utilizando el mensaje pacs.007.040.01, Coonecta emite el inicio de la transacción
                        de reverso del débito en caso de que falle, por ejemplo, por saldo insuficiente,
                        error en los datos, reverso automático por reverso del crédito, etc.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b">2</td>
                      <td className="px-4 py-2 border-b">
                        Una vez que la entidad recibe los datos, realiza las verificaciones sobre la
                        transacción para posteriormente ejecutar el crédito o devolución de montos en
                        la cuenta del usuario afectado.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b">3</td>
                      <td className="px-4 py-2 border-b">
                        Mediante el mensaje pacs.002.041.01, el sistema de la entidad envía la
                        información del estado del reverso hacia la plataforma transaccional Coonecta.
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
                        DÉBITO (Petición)
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
                      <td>Secuencial adquiriente</td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\PmtId\TxId</td>
                      <td>Max12Text</td>
                      <td>12</td>
                      <td>SI</td>
                      <td>Secuencia generada por el switch central (Coonecta)</td>
                      <td>9876543210</td>
                      <td>Secuencial switch RTC</td>
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
                      <td>Max3Text</td>
                      <td>3</td>
                      <td>SI</td>
                      <td>Indicador de moneda</td>
                      <td>USD</td>
                      <td>Por defecto USD para dólares</td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\Dbtr\Nm</td>
                      <td>Max140Text</td>
                      <td>140</td>
                      <td>No</td>
                      <td>Nombre del usuario debitado</td>
                      <td>RIVADENEIRA BEJARANO KEVIN MAURICIO</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\Dbtr\Id</td>
                      <td>Max20Text</td>
                      <td>20</td>
                      <td>No</td>
                      <td>Número de documento del usuario debitado</td>
                      <td>1724672728</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\Dbtr\SchmeNm</td>
                      <td>Max3Text</td>
                      <td>3</td>
                      <td>No</td>
                      <td>Tipo de documento del usuario debitado</td>
                      <td>CDI</td>
                      <td>Anexo 1 - Doctype</td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\DbtrAcctId\IBAN</td>
                      <td>IBAN2007Identifier</td>
                      <td>24</td>
                      <td>SI</td>
                      <td>Llave única del debitado</td>
                      <td>EC1282055678901234567890</td>
                      <td>Formato IBAN</td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\Cdtr\Nm</td>
                      <td>Max140Text</td>
                      <td>140</td>
                      <td>No</td>
                      <td>Nombre del usuario acreditado</td>
                      <td>DURAN DE LA ROSA ESTEBAN ANDRES</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\Cdtr\Id</td>
                      <td>Max20Text</td>
                      <td>20</td>
                      <td>No</td>
                      <td>Número de documento del usuario acreditado</td>
                      <td>1720406080</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\Cdtr\SchmeNm</td>
                      <td>Max3Text</td>
                      <td>3</td>
                      <td>Si</td>
                      <td>Tipo de documento del usuario acreditado</td>
                      <td>CDI</td>
                      <td>Anexo 1 - Doctype</td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\CdtrAcctId\IBAN</td>
                      <td>IBAN2007Identifier</td>
                      <td>24</td>
                      <td>SI</td>
                      <td>Llave única del acreditado</td>
                      <td>EC1282060000000000222222</td>
                      <td>Formato IBAN</td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\Prtry\CustRef</td>
                      <td>Max35Text</td>
                      <td>35</td>
                      <td>No</td>
                      <td>Información adicional introducida por el cliente</td>
                      <td>Pago menestras</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\Prtry\ChanRef</td>
                      <td>Max35Text</td>
                      <td>35</td>
                      <td>No</td>
                      <td>Referencia introducida por el canal</td>
                      <td>TERM001</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\Prtry\AgtRef</td>
                      <td>Max35Text</td>
                      <td>35</td>
                      <td>No</td>
                      <td>Referencia introducida por la agencia</td>
                      <td>AGT0002</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>CdtTrfTxInf\SttlmDt</td>
                      <td>ISODateTime</td>
                      <td>10</td>
                      <td>No</td>
                      <td>Fecha contable de la transacción, switch central (Coonecta)</td>
                      <td>2025-01-20</td>
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
                        DÉBITO (Respuesta)
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
                      <td>8205202510210000000059</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>TxInfAndSts\OrgnlGrpInf\OrgnlMgeType</td>
                      <td>Max15Text</td>
                      <td>15</td>
                      <td>Si</td>
                      <td>Contenido del campo Header del mensaje original (GrpHdr\Mge\Type)</td>
                      <td>pacs.008.040.01</td>
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
                      <td>SI</td>
                      <td>Id incluido en mensaje original que puede repetirse en varios mensajes pertenecientes a la misma trx  (CdtTrfTxInf\PmtId\EndToEndId )</td>
                      <td>82050000000123</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>TxInfAndSts\OrgnlGrpInf\OrgnlTxId</td>
                      <td>Max12Text</td>
                      <td>12</td>
                      <td>SI</td>
                      <td>Referencia al transacción Id Original (CdtTrfTxInf\PmtId\TxId)</td>
                      <td>635241789632</td>
                      <td>En la respuesta al Ordenante se envia el TxId generado por el sistema central</td>
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
                      <td>TxInfAndSts\AuthCode</td>
                      <td>Max35Text</td>
                      <td>35</td>
                      <td>Si</td>
                      <td>Código de autorización de la entidad</td>
                      <td>968574</td>
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

export default DebitoPage;