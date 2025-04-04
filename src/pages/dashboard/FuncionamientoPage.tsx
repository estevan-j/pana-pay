import { Info } from "lucide-react";

const FuncionamientoPage: React.FC = () => {
    return (
        <div className="full-width-padding">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                        <Info className="h-6 w-6 text-[#2c347c]" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-[#2c347c] mb-4">Funcionamiento de la Plataforma Transaccional</h1>
                        <div className="text-gray-700 text-base mb-6">
                            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                                <h2 className="text-lg font-bold text-[#2c347c] mb-4">A. INTRODUCCIÓN</h2>
                                <p className="text-gray-700 mb-6">
                                    Este documento establece los lineamientos y requisitos técnicos necesarios para
                                    garantizar la transaccionalidad en los procesos financieros entre instituciones
                                    participantes. El contenido de este estándar está destinado al personal de Coonecta y a
                                    las entidades asociadas que operan dentro del ecosistema de transaccionalidad.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                                <h2 className="text-lg font-bold text-[#2c347c] mb-4">B. RESUMEN GENERAL</h2>
                                <p className="text-gray-700 mb-6">
                                    La plataforma transaccional de Coonecta se apoya en una tecnología de vanguardia que
                                    permite la ejecución de operaciones administrativas y financieras entre diferentes
                                    entidades en tiempo real. Estas operaciones pueden realizarse desde múltiples
                                    dispositivos y utilizan los recursos disponibles en las cuentas de los usuarios en cualquier
                                    institución del sistema financiero nacional.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                                <h2 className="text-lg font-bold text-[#2c347c] mb-4">C. DICCIONARIO</h2>
                                <p className="text-gray-700 mb-6">
                                    <strong>IBAN (International Bank Account Number):</strong> Identificador internacional de cuentas
                                    bancarias que facilita transacciones financieras y reduce errores por su formato
                                    estructurado.
                                </p>
                                <p className="text-gray-700 mb-6">
                                    <strong>Mutual TLS (mTLS):</strong> Protocolo de seguridad que asegura la autenticación bidireccional
                                    entre la plataforma transaccional y las instituciones financieras mediante certificados
                                    digitales.
                                </p>
                                <p className="text-gray-700 mb-6">
                                    <strong>OAuth 2.0 (Client Credentials Flow):</strong> Protocolo de autorización utilizado para autenticar
                                    las comunicaciones entre Coonecta y las instituciones financieras, sin intervención del
                                    usuario final.
                                </p>
                                <p className="text-gray-700 mb-6">
                                    <strong>SAF (Store and Forward):</strong> Mecanismo para almacenar temporalmente mensajes de
                                    transacción que no se pueden entregar inmediatamente, para reenviarlos
                                    posteriormente.
                                </p>
                                <p className="text-gray-700 mb-6">
                                    <strong>Algoritmo Módulo 97:</strong> Método utilizado para calcular el dígito verificador del IBAN,
                                    asegurando su unicidad y consistencia.
                                </p>
                                <p className="text-gray-700 mb-6">
                                    <strong>Encabezado del Mensaje (GrpHdr):</strong> Parte del mensaje transaccional que contiene
                                    información obligatoria y única para identificar el tipo de mensaje.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                                <h2 className="text-lg font-bold text-[#2c347c] mb-4">D. CATEGORÍAS DE TRANSACCIONES</h2>
                                <p className="text-gray-700 mb-6">
                                    <strong>Transacciones de Administración:</strong>
                                </p>
                                <ul className="list-disc list-inside text-gray-700 mb-6">
                                    <li><strong>Afiliación:</strong> Proceso que permite a las instituciones financieras registrar nuevos usuarios en la plataforma transaccional mediante la creación de credenciales vinculadas a su llave única (IBAN). Este mensaje también habilita la opción de actualizar los datos del usuario, permitiendo la modificación del nombre y el reemplazo de credenciales previas.</li>
                                    <li><strong>Desafiliación:</strong> Función que permite a las instituciones participantes eliminar a un usuario de la base de datos de la plataforma transaccional gestionada por Coonecta utilizando su llave única (IBAN).</li>
                                    <li><strong>Consulta de Cuenta:</strong> Herramienta que facilita la recuperación de los detalles asociados a un usuario específico mediante el número de cuenta.</li>
                                    <li><strong>Consulta de Credencial:</strong> Herramienta que permite obtener los detalles relacionados con un usuario mediante el uso de una credencial específica.</li>
                                    <li><strong>Consulta de Estatus de Transacción:</strong> Proceso que permite verificar el estado de una transacción específica utilizando identificadores clave para su localización.</li>
                                </ul>
                                <p className="text-gray-700 mb-6">
                                    <strong>Transacciones Financieras:</strong>
                                </p>
                                <ul className="list-disc list-inside text-gray-700 mb-6">
                                    <li><strong>Transferencia:</strong> Proceso que gestiona los mensajes financieros relacionados con operaciones de débito y crédito, garantizando la transferencia de pagos entre usuarios de las dos entidades involucradas en la transacción.</li>
                                    <li><strong>Débito:</strong> Proceso que deduce fondos de la cuenta origen del usuario pagador como parte inicial de una operación financiera en la plataforma. Este mensaje garantiza que los fondos estén disponibles para completar la transacción.</li>
                                    <li><strong>Reverso de Débito:</strong> Procedimiento automático que permite revertir un débito previamente realizado en caso de errores en la operación o fallos detectados en el proceso (time out al débito o error en el crédito).</li>
                                    <li><strong>Crédito:</strong> Proceso que transfiere los fondos deducidos hacia la cuenta del destinatario, completando la transacción financiera autorizada entre las partes.</li>
                                    <li><strong>Reverso de Crédito:</strong> Operación que revierte una transferencia de crédito exclusivamente en casos donde la transacción falla debido a un time out, asegurando la restitución de los fondos no confirmados. La respuesta exitosa de esta operación contempla que el mensaje de reverso de débito sea ejecutado de manera automática.</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                                <h2 className="text-lg font-bold text-[#2c347c] mb-4">E. ROLES Y FUNCIONES</h2>
                                <p className="text-gray-700 mb-6">
                                    Esta sección define los actores clave involucrados en la plataforma transaccional y
                                    describe las funciones que desempeñan en el sistema.
                                </p>
                                <p className="text-gray-700 mb-6">
                                    <strong>Consideraciones:</strong>
                                </p>
                                <ul className="list-disc list-inside text-gray-700 mb-6">
                                    <li>Las responsabilidades detalladas para cada rol son representativas, pero no excluyentes.</li>
                                    <li>Un rol consiste en un conjunto de tareas específicas.</li>
                                    <li>Las actividades deben completarse dentro de los plazos estipulados en las políticas del servicio.</li>
                                </ul>
                                <p className="text-gray-700 mb-6">
                                    <strong>Actores y sus Roles en la plataforma transaccional:</strong>
                                </p>
                                <p className="text-gray-700 mb-6">
                                    Dentro del marco de transaccionalidad se identifican los siguientes roles:
                                </p>
                                <ol className="list-decimal list-inside text-gray-700 mb-6 ml-4">
                                    <li>
                                        <strong>Entidad Participante:</strong>
                                        <ul className="list-disc list-inside ml-4">
                                            <li>Ordenante.</li>
                                            <li>Receptor.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>Proveedor del Servicio:</strong>
                                        <ul className="list-disc list-inside ml-4">
                                            <li>Coonecta.</li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                                <h2 className="text-lg font-bold text-[#2c347c] mb-4">Funciones de las Entidades Participantes:</h2>
                                <p className="text-gray-700 mb-6">
                                    Las entidades que establecen acuerdos con Coonecta para el uso del servicio
                                    transaccional asumen las siguientes funciones:
                                </p>
                                <ul className="list-disc list-inside text-gray-700 mb-6">
                                    <li>Realizar las adaptaciones necesarias en el Software de sus sistemas para implementar las especificaciones tecnológicas establecidas.</li>
                                    <li>Garantizar que sus interfaces transaccionales cumplan con las especificaciones técnicas documentadas.</li>
                                    <li>Gestionar e instalar los enlaces de comunicación hacia los centros principales y alternos de Coonecta, asegurando altos niveles de seguridad y disponibilidad.</li>
                                    <li>Registrar todas las transacciones realizadas y recibidas mediante el sistema.</li>
                                    <li>Implementar procesos de conciliación basados en los estándares descritos.</li>
                                    <li>Ejecutar controles transaccionales según las definiciones del servicio, en nivel adquiriente y autorizador.</li>
                                    <li>Asegurar la disponibilidad de sus sistemas conforme a los horarios operativos establecidos.</li>
                                </ul>
                                <h2 className="text-lg font-bold text-[#2c347c] mb-4">Funciones del Proveedor del Servicio (Coonecta):</h2>
                                <p className="text-gray-700 mb-6">
                                    Coonecta, como proveedor del servicio de la plataforma transaccional, es responsable
                                    de:
                                </p>
                                <ul className="list-disc list-inside text-gray-700 mb-6">
                                    <li>Operar el sistema de enrutamiento y conmutación transaccional de forma ininterrumpida (24/7).</li>
                                    <li>Facilitar el enrutamiento de solicitudes desde las entidades ordenantes hacia las entidades receptoras para su autorización.</li>
                                    <li>Procesar y registrar los mensajes provenientes de las entidades participantes.</li>
                                    <li>Realizar el procesamiento y registro de transacciones conforme a los acuerdos establecidos con las entidades participantes.</li>
                                    <li>Identificar la entidad receptora y asegurar el correcto registro y procesamiento de los mensajes.</li>
                                    <li>Generar y distribuir reportes y/o archivos de transacciones con corte diarios con el detalle de las transacciones realizadas a través del sistema.</li>
                                    <li>Recibir y registrar la respuesta que envió el host receptor.</li>
                                    <li>Proveer asistencia técnica y garantizar la continuidad del servicio según las especificaciones del Manual Operativo.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FuncionamientoPage;