import { Info } from 'lucide-react';
import ConsultaCuentaImage from '../../assets/ConsultaCuenta.webp';
import { Link } from 'react-router-dom';

const ConsultaCuentaPage: React.FC = () => {
  return (
    <div className="full-width-padding">
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <Info className="h-6 w-6 text-[#2c347c]" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#2c347c] mb-4">Consulta por Cuenta</h2>
            <p className="text-gray-700 mb-6">
              Este procedimiento permitirá a la entidad financiera consultar los datos vinculados al
              usuario mediante el envío del número de cuenta, retornando la información del usuario
              afiliado y sus credenciales vinculadas.
            </p>
            <div className="container-centered">
              <img
                src={ConsultaCuentaImage}
                alt="Consulta de Cuenta"
                className="img-centered"
              />
            </div>
            <div className="table-container">
              <div className="table-wrapper">
                <table className="min-w-full bg-white border border-gray-200 text-sm">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border-b" colSpan={2}>DETALLE DEL FLUJO DE CONSULTA CUENTA</th>
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
                        La entidad financiera accede al canal e ingresa el número de cuenta vinculado al usuario que
                        se desea consultar para enviar la petición hacia Coonecta.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b">2</td>
                      <td className="px-4 py-2 border-b">
                        Utilizando el mensaje acmt.998.421.01, los sistemas centrales de la entidad financiera
                        remiten a la plataforma transaccional la información requerida para la consulta, en este caso,
                        la cuenta del usuario, a través de una conexión segura mediante un servicio web REST.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b">3</td>
                      <td className="px-4 py-2 border-b">
                        Una vez que la plataforma transaccional Coonecta recibe los datos, realiza las siguientes
                        verificaciones.
                        Validando que las cuentas sean solo de la misma institución.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b">4</td>
                      <td className="px-4 py-2 border-b">
                        Mediante el mensaje acmt.998.422.01, la plataforma financiera responde a la entidad
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
                        CONSULTA CUENTA (Petición)
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
                      <td>QryUsrByAcc\Acct\AcctId</td>
                      <td>Max35Text</td>
                      <td>35</td>
                      <td>SI</td>
                      <td>Número de cuenta</td>
                      <td>00051654132598</td>
                      <td>Usuario</td>
                    </tr>
                    <tr>
                      <td>QryUsrByAcc\Acct\AcctTp</td>
                      <td>Max2Text</td>
                      <td>2</td>
                      <td>SI</td>
                      <td>Tipo Cuenta</td>
                      <td>10</td>
                      <td>Anexo 1 - TypeAccount</td>
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
                        CONSULTA CUENTA (Respuesta)
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
                      <td>QryUsrByAcc\OrgnlGrpInf\OrgnlMsgId</td>
                      <td>Max35Text</td>
                      <td>35</td>
                      <td>Si</td>
                      <td>Punto de referencia con el mensaje original incluido en (GrpHdr\MsgIde)</td>
                      <td>8205202510210000000059</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>QryUsrByAcc\OrgnlGrpInf\OrgnlMgeType</td>
                      <td>Max15Text</td>
                      <td>15</td>
                      <td>Si</td>
                      <td>Contenido del campo Header del mensaje original ((GrpHdr\Mge\Type)</td>
                      <td>acmt.998.421.01</td>
                      <td>Anexo 1 - MsgTypeCode</td>
                    </tr>
                    <tr>
                      <td>QryUsrByAcc\OrgnlGrpInf\OrgnlCreDtTm</td>
                      <td>ISODateTime</td>
                      <td>19</td>
                      <td>Si</td>
                      <td>Fecha y hora en la que el mensaje de request fue creado (GrpHdr\CreDtTm)</td>
                      <td>2017-12-15T10:35:00</td>
                      <td>YYYY-MM-DDTHH:mm:ss</td>
                    </tr>
                    <tr>
                      <td>QryUsrByAcc\TxSts</td>
                      <td>Max12Text</td>
                      <td>12</td>
                      <td>Si</td>
                      <td>Estatus de la transacción (OK - ERR)</td>
                      <td>OK</td>
                      <td>Anexo 1 - StatusTypeCode</td>
                    </tr>
                    <tr>
                      <td>QryUsrByAcc\Rsn\RsnCd</td>
                      <td>Max4Text</td>
                      <td>4</td>
                      <td>Si</td>
                      <td>Razón del reporte de estatus</td>
                      <td>####</td>
                      <td>Anexo 1 - ReasonTypeCode</td>
                    </tr>
                    <tr>
                      <td>QryUsrByAcc\Rsn\AddtlInf</td>
                      <td>Max105Text</td>
                      <td>105</td>
                      <td>No</td>
                      <td>Detalle del estado de razón, puede ser usado para múltiples propósitos</td>
                      <td>Transacción Exitosa</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>QryUsrByAcc\Acct\Nm</td>
                      <td>Max140Text</td>
                      <td>140</td>
                      <td>Si</td>
                      <td>Nombre del titular</td>
                      <td>RIVADENEIRA BEJARANO KEVIN MAURICIO</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>QryUsrByAcc\Acct\DocTp</td>
                      <td>Max3Text</td>
                      <td>3</td>
                      <td>Si</td>
                      <td>Tipo de documento</td>
                      <td>CDI</td>
                      <td>Anexo 1 - DocTypes</td>
                    </tr>
                    <tr>
                      <td>QryUsrByAcc\Acct\DocId</td>
                      <td>Max35Text</td>
                      <td>140</td>
                      <td>SI</td>
                      <td>Número de documento</td>
                      <td>1724672728</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>QryUsrByAcc\Acct\IBAN</td>
                      <td>IBAN2007Identifier</td>
                      <td>24</td>
                      <td>SI</td>
                      <td>Llave única del usuario</td>
                      <td>EC1282055678901234567890</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>QryUsrByAcc\Acct\AcctTp</td>
                      <td>Max2Text</td>
                      <td>2</td>
                      <td>SI</td>
                      <td>Tipo de cuenta</td>
                      <td>10</td>
                      <td>Anexo 1 - TypeAccount</td>
                    </tr>
                    <tr>
                      <td>QryUsrByAcc\Acct\AcctId</td>
                      <td>Max35Text</td>
                      <td>35</td>
                      <td>SI</td>
                      <td>Número de cuenta</td>
                      <td>2654132598</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>QryUsrByAcc\Othr\Cred[*]</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>Se puede enviar todas las credenciales que requieran, con su identificación y valor respectivo</td>
                    </tr>
                    <tr>
                      <td>QryUsrByAcc\Othr\Cred\Id*</td>
                      <td>Max8Text</td>
                      <td>8</td>
                      <td>Si</td>
                      <td>Identificador de credencial</td>
                      <td>CEL</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>QryUsrByAcc\Othr\Cred\Value*</td>
                      <td>Max70Text</td>
                      <td>70</td>
                      <td>Si</td>
                      <td>Valor de la credencial</td>
                      <td>09#######</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>QryUsrByAcc\SttlmDt</td>
                      <td>String</td>
                      <td>10</td>
                      <td>Si</td>
                      <td>Fecha de la transacción</td>
                      <td>2017-12-20</td>
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

export default ConsultaCuentaPage;