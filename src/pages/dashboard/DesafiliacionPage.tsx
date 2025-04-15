import { Info } from 'lucide-react';
import DesafiliacionImage from '../../assets/Desafiliacion.webp';
import { Link } from 'react-router-dom';


const DesafiliacionPage: React.FC = () => {
  return (
    <div className="full-width-padding">
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <Info className="h-6 w-6 text-[#2c347c]" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#2c347c] mb-4">Desafiliación</h2>
            <p className="text-gray-700 mb-6">
              Permite remover a un usuario de una institución en la base de datos de la Plataforma
              transaccional, permitiendo dar de baja su llave única y credenciales asociadas al mismo
              en la plataforma transaccional Coonecta. Además, puede gestionar el bloqueo o
              desbloqueo de la cuenta del usuario para transaccionar.
            </p>
            <div className="container-centered">
              <img
                src={DesafiliacionImage}
                alt="Proceso de Desafiliación"
                className="img-centered"
              />
            </div>
            <div className="table-container">
              <div className="table-wrapper">
                <table className="min-w-full bg-white border border-gray-200 text-sm">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border-b" colSpan={2}>DETALLE DEL FLUJO DE DESAFILIACIÓN</th>
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
                        El usuario accede a los canales digitales de su institución financiera, se autentica mediante
                        los mecanismos de seguridad establecidos por la entidad, e inicia el proceso de desafiliación,
                        el cual debe estar habilitado en dichos canales.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b">2</td>
                      <td className="px-4 py-2 border-b">
                        Utilizando el mensaje acmt.998.311.01, los sistemas centrales de la entidad financiera
                        remiten a la plataforma transaccional la información requerida para dar de baja al usuario,
                        como llave única, a través de una conexión segura mediante un servicio web REST. Así como
                        el bloqueo y desbloqueo de este.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b">3</td>
                      <td className="px-4 py-2 border-b">
                        Una vez que la plataforma transaccional recibe los datos, realiza las siguientes verificaciones:
                        <ul className="list-disc list-inside">
                          <li>Validar que la llave única esté asociada a la entidad financiera.</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b">4</td>
                      <td className="px-4 py-2 border-b">
                        Mediante el mensaje acmt.998.312.01, la plataforma transaccional responde a la entidad
                        financiera, indicando el resultado del proceso con un código de respuesta.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b">5</td>
                      <td className="px-4 py-2 border-b">
                        Los sistemas centrales de la entidad financiera reciben la respuesta y presentan el resultado
                        al usuario final a través de sus aplicaciones.
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
                        DESAFILIACIÓN (Petición)
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
                      <td>BlkUser\acct\AcctId</td>
                      <td>Max35Text</td>
                      <td>35</td>
                      <td>SI</td>
                      <td>Número de Cuenta</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>BlkUser\acct\AcctTp</td>
                      <td>Max2Text</td>
                      <td>2</td>
                      <td>SI</td>
                      <td>TIpo de Cuenta</td>
                      <td>10</td>
                      <td>Anexo 1 - AccountTypes</td>
                    </tr>
                    <tr>
                      <td>BlkUser\CtrlInf\ActnTp</td>
                      <td>Max4Text</td>
                      <td>4</td>
                      <td>Si</td>
                      <td>Operación sobre la cuenta</td>
                      <td>DESAFILIACIÓN - BLOQUEO - DESBLOQUEO</td>
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
                        DESAFILIACIÓN (Respuesta)
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
                      <td>AcctEnroll\OrgnlGrpInf\OrgnlMsgId</td>
                      <td>Max35Text</td>
                      <td>35</td>
                      <td>Si</td>
                      <td>Punto de referencia con el mensaje original incluido en (GrpHdr\MsgId)</td>
                      <td>8205202510210000000059</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>AcctEnroll\OrgnlGrpInf\OrgnlMgeType</td>
                      <td>Max15Text</td>
                      <td>15</td>
                      <td>Si</td>
                      <td>Contenido del campo Header del mensaje original (GrpHdr\Mge\Type)</td>
                      <td>acmt.998.311.01</td>
                      <td><a href="#">Anexo 1 - MsgTypeCode</a></td>
                    </tr>
                    <tr>
                      <td>AcctEnroll\OrgnlGrpInf\OrgnlCreDtTm</td>
                      <td>ISODateTime</td>
                      <td>19</td>
                      <td>Si</td>
                      <td>Fecha y hora en la que el mensaje de request fue creado (GrpHdr\CreDtTm)</td>
                      <td>2017-12-15T10:35:00</td>
                      <td>YYYY-MM-DDTHH:mm:ss</td>
                    </tr>
                    <tr>
                      <td>AcctEnroll\TxSts</td>
                      <td>Max12Text</td>
                      <td>12</td>
                      <td>Si</td>
                      <td>Estatus de la transacción (OK - ERR)</td>
                      <td>OK</td>
                      <td><a href="#">Anexo 1 - StatusTypeCode</a></td>
                    </tr>
                    <tr>
                      <td>AcctEnroll\Rsn\RsnCd</td>
                      <td>Max4Text</td>
                      <td>4</td>
                      <td>Si</td>
                      <td>Razón del reporte de estatus</td>
                      <td>0000</td>
                      <td>Código de respuesta de la transacción</td>
                    </tr>
                    <tr>
                      <td>AcctEnroll\Rsn\AddtlInf</td>
                      <td>Max105Text</td>
                      <td>105</td>
                      <td>No</td>
                      <td>Detalle del estado de razón, puede ser usado para múltiples propósitos</td>
                      <td>TRANSACCION EXISTOSA</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>AcctEnroll\SttlmDt</td>
                      <td>ISODate</td>
                      <td>10</td>
                      <td>Si</td>
                      <td>Fecha contable de la transacción, switch central (Coonecta)</td>
                      <td>20225-01-10</td>
                      <td>YYYY-MM-DD</td>
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

export default DesafiliacionPage;