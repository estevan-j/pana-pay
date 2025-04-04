import { Info } from "lucide-react";
import DirectorioUnificado from "../../assets/DirectorioUnificado.webp";

const DirectorioUnificadoPage: React.FC = () => {
    return (
        <div className="full-width-padding">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                        <Info className="h-6 w-6 text-[#2c347c]" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-[#2c347c] mb-4">Directorio Unificado</h1>
                        <p className="text-gray-700 mb-6">
                            Es un repositorio común para todas las instituciones financieras integradas en la
                            plataforma transaccional. Este directorio almacena la asociación entre las credenciales
                            de los usuarios y su llave única, lo que facilita el procesamiento de transacciones
                            financieras.
                        </p>
                        <p className="text-gray-700 mb-6">
                            La llave única (IBAN) es un estándar internacional para la identificación de cuentas
                            bancarias, facilitando transacciones y reduciendo riesgo de errores por un formato
                            consistente y estructurado. La plataforma transaccional se encarga de generar dicha
                            llave para cada usuario afiliado, conformándola a partir de la información base del
                            usuario para identificarlo de manera exclusiva.
                        </p>
                        <p className="text-gray-700 mb-6">
                            La llave única es creada y gestionada por cada institución y registrado en el Directorio
                            Centralizado de Coonecta durante el proceso de incorporación. Este directorio unificado
                            permite gestionar de manera eficiente a los usuarios del sistema.
                        </p>
                        <p className="text-gray-700 mb-6">
                            La estructura interna de la llave única facilita el enrutamiento de las transacciones hacia
                            la institución correspondiente, permitiendo la identificación precisa de las cuentas o
                            productos donde se debitarán y acreditarán los fondos.
                        </p>
                        <p className="text-gray-700 mb-6">
                            La llave única (IBAN) está compuesta por:
                        </p>
                        <ol className="list-decimal list-inside text-gray-700 mb-6">
                            <li><strong>Código de País:</strong> Compuesto por 2 caracteres alfabéticos, que identifican el país al
                                que pertenece la cuenta. En el caso de Ecuador, se utiliza el código "EC".
                            </li>
                            <li><strong>Dígito de Control:</strong> Un número de 2 dígitos calculado según el estándar
                                internacional IBAN, utilizado para verificar la validez del identificador completo.
                            </li>
                            <li><strong>Código de la Institución Financiera:</strong> Un código de 4 dígitos asignado por
                                Coonecta para identificar a cada institución participante.
                            </li>
                            <li><strong>Tipo de Cuenta:</strong> Representado por un código de 2 dígito, que identifica el tipo de
                                producto financiero. Algunos ejemplos incluyen:
                                <ul className="list-disc list-inside ml-4">
                                    <li>10: Cuenta de Ahorro</li>
                                    <li>20: Cuenta Corriente</li>
                                </ul>
                            </li>
                            <li><strong>Número de Cuenta:</strong> Un identificador numérico de 14 dígitos que corresponde a
                                la cuenta del cliente en la institución financiera. En caso de ser menor a 14
                                dígitos, se completa con ceros a la izquierda.
                            </li>
                        </ol>
                        <p className="text-gray-700 mb-6">
                            En el Directorio Centralizado, cada llave única está asociada a la credencial que el cliente
                            elige en su institución financiera. Esta credencial se utiliza para identificar al cliente en
                            las transacciones. Por ejemplo, la credencial permitida será el número de teléfono
                            celular.
                        </p>
                        <p className="text-gray-700 mb-6">
                            Las transacciones se enrutan utilizando la llave única asociada, asegurando que las
                            instituciones financieras puedan gestionar correctamente los fondos en las cuentas de
                            origen y destino.
                        </p>
                        <h2 className="text-xl font-bold text-[#2c347c] mb-4">Algoritmo Módulo 97 para el dígito verificador</h2>
                        <p className="text-gray-700 mb-6">
                            El cálculo del dígito verificador utilizado por el estándar es realizado bajo el algoritmo de
                            módulo 97 y se realiza siguiendo los pasos detallados a continuación:
                        </p>
                        <p className="text-gray-700 mb-6">
                            Ejemplo de IBAN inicial, donde se coloca dígitos de control provisional “XX”:
                        </p>
                        <p className="text-gray-700 mb-6">
                            <strong>ECXX 8205 1678 91010 2345 6789</strong>
                        </p>
                        <p className="text-gray-700 mb-6">
                            Su desglose corresponde a:
                        </p>
                        <div className="table-container">
                            <div className="table-wrapper">
                                <table className="min-w-full bg-white border border-gray-200 text-sm mb-6">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2 border-b">Composición IBAN</th>
                                            <th className="px-4 py-2 border-b">Contenido</th>
                                            <th className="px-4 py-2 border-b">N° Caracteres</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Código de país</td>
                                            <td className="px-4 py-2 border-b">EC</td>
                                            <td className="px-4 py-2 border-b">2</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Dígitos verificadores</td>
                                            <td className="px-4 py-2 border-b">XX</td>
                                            <td className="px-4 py-2 border-b">2</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Código de la entidad financiera</td>
                                            <td className="px-4 py-2 border-b">8205</td>
                                            <td className="px-4 py-2 border-b">4</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Tipo de cuenta</td>
                                            <td className="px-4 py-2 border-b">10</td>
                                            <td className="px-4 py-2 border-b">2</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Número de cuenta</td>
                                            <td className="px-4 py-2 border-b">678910123456789</td>
                                            <td className="px-4 py-2 border-b">14</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <ol className="list-decimal list-inside text-gray-700 mb-6">
                            <li>Mover el código de país y los dígitos verificadores al final del IBAN:</li>
                            <ul className="list-disc list-inside ml-4">
                                <li><strong>820516789101234567890EC00</strong></li>
                            </ul>
                            <li>Sustituir caracteres alfabéticos por valores numéricos (A=10, B=11, etc.):</li>
                            <ul className="list-disc list-inside ml-4">
                                <li><strong>820516789101234567890141200</strong></li>
                            </ul>
                            <li>Calcular el módulo 97:</li>
                            <ul className="list-disc list-inside ml-4">
                                <li><strong>820516789101234567890141200 % 97 = 84</strong></li>
                            </ul>
                            <li>Restar el residuo de 98 para obtener el dígito verificador final:</li>
                            <ul className="list-disc list-inside ml-4">
                                <li><strong>98 - 84 = 14</strong></li>
                            </ul>
                        </ol>
                        <p className="text-gray-700 mb-6">
                            El IBAN completo con los dígitos verificadores sería:
                        </p>
                        <p className="text-gray-700 mb-6">
                            <ul className="list-disc list-inside ml-4">
                                <li><strong>EC14 8205 1678 9101 2345 67890</strong></li>
                            </ul>
                        </p>
                        <p className="text-gray-700 mb-6">
                            Este algoritmo asegura la unicidad y consistencia de cada identificador dentro de la
                            plataforma transaccional.
                        </p>
                        <h2 className="text-xl font-bold text-[#2c347c] mb-4">Componentes de la plataforma transaccional</h2>
                        <p className="text-gray-700 mb-6">
                            Se identifican los elementos clave del sistema de transaccionalidad. La tecnología
                            utilizada por Coonecta está diseñada para gestionar el intercambio de información
                            mediante servicios web RESTful, permitiendo la realización de operaciones
                            administrativas y financieras entre las instituciones participantes. El sistema implementa
                            reglas y procesos bien definidos para garantizar el correcto funcionamiento y la
                            seguridad de las transacciones.
                        </p>
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                            <p className="text-sm text-yellow-700">
                                Nota: Los usuarios acceden al sistema a través de los canales digitales de las instituciones
                                financieras, utilizando los métodos de autenticación y seguridad proporcionados por
                                cada entidad.
                            </p>
                        </div>
                        <div className="container-centered">
                            <img
                                src={DirectorioUnificado}
                                alt="Proceso de Desafiliación"
                                className="img-centered"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DirectorioUnificadoPage;