import { Info } from "lucide-react";
import JsonFormat from "../../assets/jsonFormat.webp";
import RequestOauth from "../../assets/RequestOauth_1_41.webp";
import ResponseOauth from "../../assets/ResponseOuth_10_41.webp";
const SeguridadPage = () => {
    return (
        <div className="full-width-padding">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                        <Info className="h-6 w-6 text-[#2c347c]" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-[#2c347c] mb-4">Protocolo de Conexión</h1>
                        <p className="text-gray-700 mb-6">
                            El protocolo de interacción entre la plataforma transaccional y las instituciones
                            financieras, tanto en envío como en la recepción de datos, seguirá las siguientes pautas:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-6">
                            <li>Los servicios habilitados por Coonecta hacia las instituciones financieras estarán
                                disponibles mediante conexiones HTTPS, y todas las comunicaciones deberán
                                realizarse utilizando el método POST.
                            </li>
                            <li>Las entidades financieras deberán exponer sus servicios hacia Coonecta también
                                a través de HTTPS, empleando el método POST para el envío y recepción de
                                mensajes.
                            </li>
                            <li>Toda la información intercambiada entre Coonecta y las instituciones debe
                                utilizar codificación de caracteres UTF-8, con un tipo de contenido definido como
                                application/json.
                            </li>
                            <li>Es obligatorio que tanto Coonecta como las instituciones financieras
                                implementen certificados digitales (HTTPS) para las comunicaciones. Se
                                permitirá el uso de certificados auto-firmados.
                            </li>
                            <li>Las 2 partes deberán implementar conexiones con Mutual TLS, asegurando la
                                autenticación bidireccional entre los componentes.
                            </li>
                            <li>Todas las solicitudes y respuestas entre la plataforma y las instituciones
                                financieras deben estar protegidas mediante OAuth2.0, utilizando el flujo Client
                                Credentials para autenticar a los sistemas involucrados.
                            </li>
                        </ul>
                        <h2 className="text-xl font-bold text-[#2c347c] mb-4">Outh 2</h2>
                        <p className="text-gray-700 mb-6">
                            Solicitud OAuth 2.0 utiliza el flujo de "client credentials", donde una aplicación obtiene un token de acceso autenticándose con un ID de cliente y un secreto. El servidor de autenticación verifica las credenciales y devuelve un token. Para generar ese token se debe:    
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-6">
                            <li>Realizar un llamada a la dirección: https://129.153.159.120.nip.io/auth, con los parametros.</li>
                            <li><strong>grant_type:</strong> Especifica el tipo de autenticación, en este caso client_credentials.</li>
                            <li><strong>client_id:</strong> Identificador único de la aplicación cliente (0257sf).</li>
                            <li><strong>client_secret:</strong> Clave secreta de la aplicación (wQH1BL...).</li>
                        </ul>
                        <div className="centered-image-container" >
                            <img
                                src={RequestOauth}
                                alt="Formato JSON"
                            />
                        </div>
                        <p className="text-gray-700 mb-6">
                        Luego de obtener el token, ese token se usa para realizar otras solicitudes a diferentes servicios, el token deber ser enviado en la sección de autorización(type-token).
                        </p>
                        <div className="centered-image-container" >
                            <img
                                src={ResponseOauth}
                                alt="Formato JSON"
                                
                            />
                        </div>
                        <h2 className="text-xl font-bold text-[#2c347c] mb-4">Estructura de los Mensajes</h2>
                        <p className="text-gray-700 mb-6">
                            Los mensajes del sistema están formados por dos bloques principales: el Encabezado
                            (Header) y el Contenido (Body).
                        </p>
                        <ol className="list-decimal list-inside text-gray-700 mb-6">
                            <li><strong>Encabezado (GrpHdr):</strong> Este segmento, identificado como GRPHDR, es
                                obligatorio y aparece únicamente una vez en cada mensaje. Incluye una etiqueta
                                que define el tipo de mensaje enviado.
                            </li>
                            <li><strong>Contenido de la Transacción (Body):</strong> Este bloque es también obligatorio y
                                contiene los detalles específicos de la operación que se debe realizar.
                            </li>
                        </ol>
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                            <p className="text-sm text-yellow-700">
                                Nota: Para el caso de las transacciones con mensajes administrativos colocar 0000 como
                                representación a Coonecta en el campo de la entidad instruida en el “Group Header”.
                            </p>
                        </div>
                        <p className="text-gray-700 mb-6">
                            Los ejemplos prácticos de los mensajes Json están disponibles en el Anexo “Ejemplos
                            Json”.
                        </p>
                        <h2 className="text-xl font-bold text-[#2c347c] mb-4">URL y Formato JSON de los Mensajes</h2>
                        <p className="text-gray-700 mb-6">
                            A continuación, se detalla la URL y la estructura JSON utilizada para los mensajes.
                        </p>
                        <p className="text-gray-700 mb-6">
                            <strong>URL:</strong> /switchcentral/admin/enrollment
                        </p>
                        <p className="text-gray-700 mb-6">
                            <strong>Formato JSON:</strong>
                        </p>
                        <div className="container-centered">
                            <img
                                src={JsonFormat}
                                alt="Formato JSON"
                                style={{ width: '260px', height: '200px' }}
                            />
                        </div>
                        <h2 className="text-xl font-bold text-[#2c347c] mb-4">FLUJOS TRANSACCIONALES (ENTIDAD HACIA COONECTA)</h2>
                        <p className="text-gray-700 mb-6">
                            En esta sección se describen las transacciones que forman parte del esquema
                            transaccional en la plataforma, clasificadas en administrativas y financieras para el
                            esquema de la entidad financiera hacia Coonecta.
                        </p>
                        <h3 className="text-lg font-bold text-[#2c347c] mb-4">Transacciones Administrativas</h3>
                        <ul className="list-disc list-inside text-gray-700 mb-6">
                            <li>Afiliación</li>
                            <li>Desafiliación</li>
                            <li>Consulta por cuenta</li>
                            <li>Consulta por credencial</li>
                            <li>Consulta de estatus de transacción</li>
                        </ul>
                        <h3 className="text-lg font-bold text-[#2c347c] mb-4">Transacciones Financieras</h3>
                        <ul className="list-disc list-inside text-gray-700 mb-6">
                            <li>Transferencia</li>
                        </ul>
                        <h2 className="text-xl font-bold text-[#2c347c] mb-4">Operaciones y Mensajes ISO</h2>
                        <div className="table-container">
                            <div className="table-wrapper">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2 border-b">Operación</th>
                                            <th className="px-4 py-2 border-b">Mensaje ISO Requerimiento</th>
                                            <th className="px-4 py-2 border-b">Tipo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Afiliación</td>
                                            <td className="px-4 py-2 border-b">acmt.998.211.01</td>
                                            <td className="px-4 py-2 border-b">Administrativa</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Desafiliación</td>
                                            <td className="px-4 py-2 border-b">acmt.998.311.01</td>
                                            <td className="px-4 py-2 border-b">Administrativa</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Consulta por Cuenta</td>
                                            <td className="px-4 py-2 border-b">acmt.998.421.01</td>
                                            <td className="px-4 py-2 border-b">Administrativa</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Consulta por Credencial</td>
                                            <td className="px-4 py-2 border-b">acmt.998.441.01</td>
                                            <td className="px-4 py-2 border-b">Administrativa</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Transferencia</td>
                                            <td className="px-4 py-2 border-b">acmt.998.321.01</td>
                                            <td className="px-4 py-2 border-b">Financiera</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Consulta estatus transacción</td>
                                            <td className="px-4 py-2 border-b">acmt.998.511.01</td>
                                            <td className="px-4 py-2 border-b">Administrativa</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <h2 className="text-xl font-bold text-[#2c347c] mb-4 mt-4">FLUJOS TRANSACCIONALES (COONECTA HACIA ENTIDAD)</h2>
                        <p className="text-gray-700 mb-6">
                            En esta sección se describen las transacciones que forman parte del esquema
                            transaccional en la plataforma transaccional, clasificadas en financieras para el esquema
                            de Coonecta hacia la entidad financiera.
                        </p>
                        <h3 className="text-lg font-bold text-[#2c347c] mb-4">Tabla 2. Mensajes del esquema de transaccionalidad: Coonecta - Entidad</h3>
                        <div className="table-container">
                            <div className="table-wrapper">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2 border-b">Operación</th>
                                            <th className="px-4 py-2 border-b">Mensaje ISO Requerimiento</th>
                                            <th className="px-4 py-2 border-b">Mensaje ISO Respuesta</th>
                                            <th className="px-4 py-2 border-b">Tipo Transacción</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Débito</td>
                                            <td className="px-4 py-2 border-b">Pacs.008.040.04</td>
                                            <td className="px-4 py-2 border-b">Pacs.002.040.01</td>
                                            <td className="px-4 py-2 border-b">Financiera</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Reverso débito</td>
                                            <td className="px-4 py-2 border-b">Pacs.007.040.01</td>
                                            <td className="px-4 py-2 border-b">Pacs.002.041.01</td>
                                            <td className="px-4 py-2 border-b">Financiera</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Crédito</td>
                                            <td className="px-4 py-2 border-b">Pacs.008.020.01</td>
                                            <td className="px-4 py-2 border-b">Pacs.002.020.01</td>
                                            <td className="px-4 py-2 border-b">Financiera</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Reverso crédito</td>
                                            <td className="px-4 py-2 border-b">Pacs.007.020.01</td>
                                            <td className="px-4 py-2 border-b">Pacs.002.021.01</td>
                                            <td className="px-4 py-2 border-b">Financiera</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeguridadPage;