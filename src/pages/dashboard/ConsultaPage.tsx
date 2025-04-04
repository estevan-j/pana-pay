import { Info } from 'lucide-react';
import ConsultaCredencialImage from '../../assets/ConsultaCredencial.webp';
import { Link } from 'react-router-dom';

const ConsultaPage: React.FC = () => {
  return (
    <div className="full-width-padding">
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <Info className="h-6 w-6 text-[#2c347c]" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#2c347c] mb-4">Consulta por Credencial</h2>
            <p className="text-gray-700 mb-6">
              Este procedimiento permitirá que la entidad financiera consulte la información del
              usuario registrado a partir de su credencial, donde se mostrará las entidades vinculadas
              a los usuarios y sus llaves únicas (IBAN).
            </p>
            <div className="container-centered">
              <img
                src={ConsultaCredencialImage}
                alt="Consulta de Cuenta"
                className="img-centered"
              />
            </div>
            <div className="table-container">
              <div className="table-wrapper">
                <table className="min-w-full bg-white border border-gray-200 text-sm">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border-b" colSpan={2}>DETALLE DEL FLUJO DE CONSULTA POR CREDENCIAL</th>
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
                        La entidad financiera accede al canal e ingresa la credencial vinculada al usuario que se desea
                        consultar para enviar la petición hacia Coonecta.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b">2</td>
                      <td className="px-4 py-2 border-b">
                        Utilizando el mensaje acmt.998.441.01, los sistemas centrales de la entidad financiera
                        remiten a la plataforma transaccional la información requerida para la consulta, en este caso,
                        la credencial del usuario, a través de una conexión segura mediante un servicio web REST.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b">3</td>
                      <td className="px-4 py-2 border-b">
                        Una vez que la plataforma transaccional Coonecta recibe los datos, realiza las siguientes
                        verificaciones, confirmando si:
                        <ul className="list-disc list-inside">
                          <li>La credencial no existe.</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b">4</td>
                      <td className="px-4 py-2 border-b">
                        Mediante el mensaje acmt.998.442.01, la plataforma transaccional responde a la entidad
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
                        CONSULTA CREDENCIAL (Petición)
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
                      <td>QryAccByCred\Cred\Id</td>
                      <td>Max35Text</td>
                      <td>35</td>
                      <td>Si</td>
                      <td>ID de la credencial</td>
                      <td>CEL</td>
                      <td>CELULAR / QR / MAIL</td>
                    </tr>
                    <tr>
                      <td>QryAccByCred\Cred\Value</td>
                      <td>Max70Text</td>
                      <td>70</td>
                      <td>SI</td>
                      <td>Credencial del usuario</td>
                      <td>0985653214</td>
                      <td>Documento del usuario</td>
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
                        CONSULTA CREDENCIAL (Respuesta)
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
                      <td>QryAccByCred\OrgnlGrpInf\OrgnlMsgId</td>
                      <td>Max35Text</td>
                      <td>35</td>
                      <td>Si</td>
                      <td>Punto de referencia con el mensaje original incluido en (GrpHdr\MsgId)</td>
                      <td>8205202510210000000059</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>QryAccByCred\OrgnlGrpInf\OrgnlMgeType</td>
                      <td>Max15Text</td>
                      <td>15</td>
                      <td>Si</td>
                      <td>Contenido del campo Header del mensaje original (GrpHdr\Mge\Type)</td>
                      <td>acmt.998.441.01</td>
                      <td>Anexo 1 - MsgTypeCode</td>
                    </tr>
                    <tr>
                      <td>QryAccByCred\OrgnlGrpInf\OrgnlCreDtTm</td>
                      <td>ISODateTime</td>
                      <td>19</td>
                      <td>Si</td>
                      <td>Fecha y hora en la que el mensaje de request fue creado (GrpHdr\CreDtTm)</td>
                      <td>2017-12-15T10:35:00</td>
                      <td>YYYY-MM-DDTHH:mm:ss</td>
                    </tr>
                    <tr>
                      <td>QryAccByCred\TxSts</td>
                      <td>Max12Text</td>
                      <td>12</td>
                      <td>Si</td>
                      <td>Estatus de la transacción (OK - ERR)</td>
                      <td>OK</td>
                      <td>Anexo 1 - StatusTypeCode</td>
                    </tr>
                    <tr>
                      <td>QryAccByCred\Rsn\RsnCd</td>
                      <td>Max4Text</td>
                      <td>4</td>
                      <td>Si</td>
                      <td>Razón del reporte de estatus</td>
                      <td>####</td>
                      <td>Anexo 1 - ReasonTypeCode</td>
                    </tr>
                    <tr>
                      <td>QryAccByCred\Rsn\AddtlInf</td>
                      <td>Max105Text</td>
                      <td>105</td>
                      <td>No</td>
                      <td>Detalle del estado de razón, puede ser usado para múltiples propósitos</td>
                      <td>Consulta exitosa</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>QryAccByCred\Acct\Nm</td>
                      <td>Max140Text</td>
                      <td>140</td>
                      <td>Si</td>
                      <td>Nombre del titular</td>
                      <td>RIVADENEIRA BEJARANO KEVIN MAURICIO</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>QryAccByCred\Cred\Value</td>
                      <td>Max30Text</td>
                      <td>30</td>
                      <td>Si</td>
                      <td>Valor de la credencial del usuario</td>
                      <td>0984846831</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>QryAccByCred\InstAgt[*]</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>QryAccByCred\InstAgt\FinInstnId*</td>
                      <td>Max4Text</td>
                      <td>4</td>
                      <td>Si</td>
                      <td>Código de la entidad financiera</td>
                      <td>8266</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>QryAccByCred\InstAgt\FinInstnNm*</td>
                      <td>Max40Text</td>
                      <td>40</td>
                      <td>Si</td>
                      <td>Nombre de la entidad financiera</td>
                      <td>CACPECO</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>QryAccByCred\InstAgt\IBAN*</td>
                      <td>IBAN2007Identifier</td>
                      <td>24</td>
                      <td>Si</td>
                      <td>Llave única del usuario</td>
                      <td>EC1282055678901234567890</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>QryAccByCred\SttlmDt</td>
                      <td>ISODate</td>
                      <td>10</td>
                      <td>Si</td>
                      <td>Fecha contable de la transacción, switch central (Coonecta)</td>
                      <td>2025-01-10</td>
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

export default ConsultaPage;