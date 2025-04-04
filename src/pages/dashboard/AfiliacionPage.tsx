import { Info } from 'lucide-react';
import AfiliacionImage from '../../assets/Afiliacion.webp';
import { Link } from 'react-router-dom';

const AfiliacionPage: React.FC = () => {
  return (
    <div className="full-width-padding">
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <Info className="h-6 w-6 text-[#2c347c]" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#2c347c] mb-4">Afiliación</h2>
            <p className="text-gray-700 mb-6">
              Este procedimiento permite que las instituciones financieras registren la llave única y las
              credenciales de los usuarios para habilitar la recepción de transferencias dentro del
              sistema. La afiliación es un requisito indispensable para los usuarios receptores y
              ordenantes, por lo que es esencial para poder realizar cualquier transacción financiera
              en el esquema transaccional de la plataforma transaccional.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-sm text-yellow-700">
                <strong>Nota:</strong> El nombre solicitado debe corresponder a los 2 apellidos y 2 nombres en
                mayúscula, sin tildes. Además, se manejará una bandera por tipo de operación para
                afiliar un nuevo usuario o actualizar datos de un afiliado.
                En el caso de actualizar las credenciales, se eliminarán todas las registradas
                anteriormente y serán reemplazadas por las actuales.
              </p>
            </div>
            <div className="container-centered">
              <img
                src={AfiliacionImage}
                alt="Proceso de Afiliación"
                className="img-centered"
              />
            </div>
            <div className="table-container">
              <div className="table-wrapper">
                <table className="min-w-full bg-white border border-gray-200 text-sm">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border-b" colSpan={2}>DETALLE DEL FLUJO DE AFILIACIÓN</th>
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
                        los mecanismos de seguridad establecidos por la entidad, e inicia el proceso de afiliación, el
                        cual debe estar habilitado en dichos canales.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b">2</td>
                      <td className="px-4 py-2 border-b">
                        Utilizando el mensaje acmt.998.211.01, los sistemas centrales de la entidad financiera
                        remiten a la plataforma transaccional la información requerida para el registro, como la
                        credencial vinculada al número de celular, a través de una conexión segura mediante un
                        servicio web REST.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b">3</td>
                      <td className="px-4 py-2 border-b">
                        Una vez que la plataforma transaccional recibe los datos, realiza las siguientes verificaciones:
                        <ul className="list-disc list-inside">
                          <li>Confirma que la cuenta no se encuentre ya registrada.</li>
                          <li>Si las validaciones son satisfactorias, se procede al registro del usuario en el sistema.</li>
                          <li>Generará la llave única IBAN y la credencial QR, para que sea le responda al
                            adquiriente y pueda registrar los resultados en su sistema.</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b">4</td>
                      <td className="px-4 py-2 border-b">
                        Mediante el mensaje acmt.998.212.01, la plataforma transaccional responde a la entidad
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
                        AFILIACIÓN (Petición)
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
                      <td>AcctEnroll\Acct\Nm</td>
                      <td>Max140Text</td>
                      <td>140</td>
                      <td>Si</td>
                      <td>Nombre del titular</td>
                      <td>RIVADENEIRA BEJARANO KEVIN MAURICIO</td>
                      <td>Dos apellidos y dos nombres solo mayusculas sin tildes.</td>
                    </tr>
                    <tr>
                      <td>AcctEnroll\Acct\DocTp</td>
                      <td>Max3Text</td>
                      <td>3</td>
                      <td>SI</td>
                      <td>Tipo de documento</td>
                      <td>CDI</td>
                      <td><a href="#">Anexo 1 - DocTypes</a></td>
                    </tr>
                    <tr>
                      <td>AcctEnroll\Acct\DocId</td>
                      <td>Max35Text</td>
                      <td>35</td>
                      <td>SI</td>
                      <td>Número de documento</td>
                      <td>1752635263</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>AcctEnroll\Acct\AcctTp</td>
                      <td>Max2Text</td>
                      <td>2</td>
                      <td>SI</td>
                      <td>Tipo de cuenta</td>
                      <td>10</td>
                      <td><a href="#">Anexo 1 - AccountTypes</a></td>
                    </tr>
                    <tr>
                      <td>AcctEnroll\Acct\AcctId</td>
                      <td>Max35Text</td>
                      <td>35</td>
                      <td>SI</td>
                      <td>Número de cuenta</td>
                      <td>22244651321681300</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>AcctEnroll\Othr\Cred[*]</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>Se puede enviar todas las credenciales que requieran, con su identificacion y valor respectivo</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>AcctEnroll\Othr\Cred\Id*</td>
                      <td>Max8Text</td>
                      <td>8</td>
                      <td>Si</td>
                      <td>Identificador de credencial</td>
                      <td>CEL</td>
                      <td><a href="#">Anexo 1 - CredTp</a></td>
                    </tr>
                    <tr>
                      <td>AcctEnroll\Othr\Cred\Value*</td>
                      <td>Max70Text</td>
                      <td>70</td>
                      <td>Si</td>
                      <td>Valor de la credencial a crear</td>
                      <td>09#######</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>AcctEnroll\OperationType</td>
                      <td>Max70Text</td>
                      <td>70</td>
                      <td>Si</td>
                      <td>Indica si es una afiliación(Create) o una actualización(Update)</td>
                      <td>AFIL</td>
                      <td><a href="#">Anexo 1 - ActnEnrTp</a></td>
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
                        AFILIACIÓN (Respuesta)
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
                      <td>MsgTypeCode</td>
                      <td></td>
                      <td>Si</td>
                      <td>Contenido del campo Header del mensaje original (GrpHdr\Mge\Type)</td>
                      <td>acmt.998.211.01</td>
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
                      <td>####</td>
                      <td><a href="#">Anexo 1 - ReasonTypeCode</a></td>
                    </tr>
                    <tr>
                      <td>AcctEnroll\Rsn\AddtlInf</td>
                      <td>Max105Text</td>
                      <td>105</td>
                      <td>No</td>
                      <td>Detalle del estado de razón, puede ser usado para múltiples propósitos</td>
                      <td>Afiliación exitosa</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>AcctEnroll\Acct\IBAN</td>
                      <td>IBAN2007Identifier</td>
                      <td>24</td>
                      <td>SI</td>
                      <td>Llave única del usuario</td>
                      <td>EC1282055678901234567890</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>AcctEnroll\Othr\Cred[*]</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>Se devuelve el QR calculado</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>AcctEnroll\Othr\Cred\Id*</td>
                      <td>Max8Text</td>
                      <td>8</td>
                      <td>Si</td>
                      <td>Identificador de credencial</td>
                      <td>CQR</td>
                      <td><a href="#">Anexo 1 - CredTp</a></td>
                    </tr>
                    <tr>
                      <td>AcctEnroll\Othr\Cred\Value*</td>
                      <td>Max70Text</td>
                      <td>70</td>
                      <td>Si</td>
                      <td>Valor de la credencial</td>
                      <td>ASDDS6354831SAD5315SAD435AS4DAS356D354897</td>
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

export default AfiliacionPage;