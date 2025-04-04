import { Info } from 'lucide-react';
import QR from '../../assets/QR.png';
import QRSinLogo from '../../assets/QR_sin_Logo.png';

const QRPage = () => {
    return (
        <div className="full-width-padding">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-6">
                <div className="flex flex-col md:flex-row md:items-start md:space-x-4">
                    <div className="flex-shrink-0 mb-3 md:mb-0">
                        <Info className="h-6 w-6 text-[#2c347c]" />
                    </div>
                    <div className="w-full">
                        <h2 className="text-xl font-bold text-[#2c347c] mb-4">QR Code</h2>
                        <p className="text-gray-700 mb-6">
                            Para la generación del QR se empleará el estándar EMV QR CODE.
                            <a
                                href="https://www.emvco.com/specifications/?tax%5Bspecifications_categories%5D%5B32%5D%5B%5D=81"
                                className="text-blue-500 hover:underline inline-block max-w-full overflow-hidden text-ellipsis"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://www.emvco.com/specifications/?tax%5Bspecifications_categories%5D%5B32%5D%5B%5D=81
                            </a>
                            , A continuación, se detalla el ejemplo de la trama de un QR,
                            así como los tags que deben estar incluidos para la generación.
                        </p>

                        <h3 className="text-lg font-semibold text-[#2c347c] mb-3">TRAMA DE EJEMPLO EMV QR CODE para instituciones</h3>
                        <div className="bg-gray-100 p-4 rounded-md mb-6 overflow-x-auto">
                            <p className="font-semibold mb-2 text-[#2c347c]">Trama:</p>
                            <p className="font-mono text-sm break-all">
                                0002010102113944jtNuykKu3O9+1xcCq7wntlA9BNBqkTADr60XYRiI31A=5204482953038405802EC5907BIBLIAN6007BIBLIAN6304E08A
                            </p>
                        </div>
                        <div className="container-centered mb-6">
                            <p className="text-sm text-center text-gray-500 mt-2">
                                QRs generados, izquierda con logo y derecha el normal. El logo será proporcionado por RTC.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
                            <div className="flex-1 text-center">
                                <img
                                    src={QR}
                                    alt="QR con logo"
                                    className="max-w-full h-auto mx-auto"
                                />
                                <p className="text-sm text-gray-500 mt-2">QR con logo</p>
                            </div>
                            <div className="flex-1 text-center">
                                <img
                                    src={QRSinLogo}
                                    alt="QR normal"
                                    className="max-w-full h-auto mx-auto"
                                />
                                <p className="text-sm text-gray-500 mt-2">QR normal</p>
                            </div>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-md mb-6 overflow-x-auto">
                            <p className="font-mono text-sm">
                                00 02 01<br />
                                01 02 11<br />
                                39 44 jtNuykKu3O9+1xcCq7wntlA9BNBqkTADr60XYRiI31A=<br />
                                52 04 4829<br />
                                53 03 840<br />
                                58 02 EC<br />
                                59 07 BIBLIAN<br />
                                60 07 BIBLIAN<br />
                                63 04 E08A
                            </p>
                        </div>

                        <h3 className="text-lg font-semibold text-[#2c347c] mb-3">Explicación de cada TAG:</h3>

                        <div className="table-container overflow-x-auto">
                            <div className="table-wrapper mb-6">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2 border-b">TAG</th>
                                            <th className="px-4 py-2 border-b">DESCRIPCIÓN</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Tag 00 - Versión del Formato</td>
                                            <td className="px-4 py-2 border-b">
                                                Indica la versión del estándar EMV QR. En este caso, 01
                                                corresponde a la versión actual.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Tag 01 - Modo de Transacción</td>
                                            <td className="px-4 py-2 border-b">
                                                11 indica que se trata de una transacción dinámica, lo que significa
                                                que el contenido del QR puede cambiar según las circunstancias del
                                                pago.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Tag 39 – Merchant Account Information</td>
                                            <td className="px-4 py-2 border-b">
                                                Contiene un valor codificado
                                                (Ni65q2CEX8lF7296wzmx61aqn5QPPY72ESq536XPiI8=). Este
                                                valor es el ID usuario único que identifica al usuario en el DE RTC,
                                                puede ser el valor que se comparte con todos los sistemas.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Tag 52 - Código de Categoría del Negocio</td>
                                            <td className="px-4 py-2 border-b">
                                                5611 es el Merchant Category Code (MCC), que identifica el tipo de
                                                comercio o servicio.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Tag 53 - Moneda</td>
                                            <td className="px-4 py-2 border-b">
                                                840 corresponde al dólar americano, según el estándar ISO 4217.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Tag 58 - Código de País</td>
                                            <td className="px-4 py-2 border-b">
                                                EC representa a Ecuador, siguiendo el estándar ISO 3166.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Tag 59 - Nombre del Beneficiario</td>
                                            <td className="px-4 py-2 border-b">
                                                COONECTA es el nombre o alias del beneficiario del pago o el
                                                identificador de la red.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Tag 60 - Ciudad del Beneficiario</td>
                                            <td className="px-4 py-2 border-b">
                                                QUITO indica la ciudad donde reside el beneficiario.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Tag 63 - Código CRC</td>
                                            <td className="px-4 py-2 border-b">
                                                9711 es un Checksum CRC-16/IBM 3740 para validar la integridad
                                                de los datos del QR.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <h3 className="text-lg font-semibold text-[#2c347c] mt-6 mb-3">TAGS del 2 al 51 (Merchant account information)</h3>
                        <p className="text-gray-700 mb-4">
                            El merchant account information es un bloque de tags del EMV CODE QR
                            reservados para IDs de templates u otro fin destinado para el uso de sistemas de
                            pago.
                        </p>
                        <p className="text-gray-700 mb-6">
                            Dependiendo de los usos que se pueda dar la red, puede usar más de un tag de
                            este intervalo, pero considerando los reservados como se muestra en la siguiente
                            imagen.
                        </p>
                        <h4 className="text-md font-semibold text-[#2c347c] mb-3">6.2 Merchant Account Information</h4>
                        <p className="text-gray-700 mb-4">
                            The Merchant Account Information Template has specific requirements for the Industry Standard MPM QR requirements described in the specifications paragraph. It concerns the reservation of Template IDs. Chapter 7 further explains the use of fixed and dynamic IDs.
                        </p>

                        <h4 className="text-md font-semibold text-[#2c347c] mb-3">6.2.1 Merchant Account Information table</h4>
                        <div className="overflow-x-auto mb-6">
                            <div className="table-wrapper">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2 border-b">Name ID</th>
                                            <th className="px-4 py-2 border-b">ID</th>
                                            <th className="px-4 py-2 border-b">Format</th>
                                            <th className="px-4 py-2 border-b">Length</th>
                                            <th className="px-4 py-2 border-b">Value</th>
                                            <th className="px-4 py-2 border-b">Presence</th>
                                            <th className="px-4 py-2 border-b">Comments</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Reserved for Visa</td>
                                            <td className="px-4 py-2 border-b">"02"-"03"</td>
                                            <td className="px-4 py-2 border-b">ans</td>
                                            <td className="px-4 py-2 border-b">var, up to "99"</td>
                                            <td className="px-4 py-2 border-b">Defined by payment systems</td>
                                            <td className="px-4 py-2 border-b">M</td>
                                            <td className="px-4 py-2 border-b">At least one Merchant Account Information data object shall be present for "02"-"47"</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Reserved for Mastercard</td>
                                            <td className="px-4 py-2 border-b">"04"-"05"</td>
                                            <td className="px-4 py-2 border-b"></td>
                                            <td className="px-4 py-2 border-b"></td>
                                            <td className="px-4 py-2 border-b"></td>
                                            <td className="px-4 py-2 border-b"></td>
                                            <td className="px-4 py-2 border-b"></td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Reserved by EMVCo</td>
                                            <td className="px-4 py-2 border-b">"06"-"08"</td>
                                            <td className="px-4 py-2 border-b"></td>
                                            <td className="px-4 py-2 border-b"></td>
                                            <td className="px-4 py-2 border-b"></td>
                                            <td className="px-4 py-2 border-b"></td>
                                            <td className="px-4 py-2 border-b"></td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Reserved for Discover</td>
                                            <td className="px-4 py-2 border-b">"09"-"10"</td>
                                            <td className="px-4 py-2 border-b"></td>
                                            <td className="px-4 py-2 border-b"></td>
                                            <td className="px-4 py-2 border-b"></td>
                                            <td className="px-4 py-2 border-b"></td>
                                            <td className="px-4 py-2 border-b"></td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Reserved for Amex</td>
                                            <td className="px-4 py-2 border-b">"11"-"12"</td>
                                            <td className="px-4 py-2 border-b"></td>
                                            <td className="px-4 py-2 border-b"></td>
                                            <td className="px-4 py-2 border-b"></td>
                                            <td className="px-4 py-2 border-b"></td>
                                            <td className="px-4 py-2 border-b"></td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Reserved for JCB</td>
                                            <td className="px-4 py-2 border-b">"13"-"14"</td>
                                            <td className="px-4 py-2 border-b"></td>
                                            <td className="px-4 py-2 border-b"></td>
                                            <td className="px-4 py-2 border-b"></td>
                                            <td className="px-4 py-2 border-b"></td>
                                            <td className="px-4 py-2 border-b"></td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Reserved for UnionPay</td>
                                            <td className="px-4 py-2 border-b">"15"-"16"</td>
                                            <td className="px-4 py-2 border-b"></td>
                                            <td className="px-4 py-2 border-b"></td>
                                            <td className="px-4 py-2 border-b"></td>
                                            <td className="px-4 py-2 border-b"></td>
                                            <td className="px-4 py-2 border-b"></td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Reserved by EMVCo</td>
                                            <td className="px-4 py-2 border-b">"17"-"25"</td>
                                            <td className="px-4 py-2 border-b"></td>
                                            <td className="px-4 py-2 border-b"></td>
                                            <td className="px-4 py-2 border-b"></td>
                                            <td className="px-4 py-2 border-b"></td>
                                            <td className="px-4 py-2 border-b"></td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Reserved for Payment Systems</td>
                                            <td className="px-4 py-2 border-b">"26"-"47"</td>
                                            <td className="px-4 py-2 border-b"></td>
                                            <td className="px-4 py-2 border-b"></td>
                                            <td className="px-4 py-2 border-b"></td>
                                            <td className="px-4 py-2 border-b"></td>
                                            <td className="px-4 py-2 border-b">Used dynamically by Payment Systems</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b">Reserved by AusPayNet</td>
                                            <td className="px-4 py-2 border-b">"48"-"51"</td>
                                            <td className="px-4 py-2 border-b"></td>
                                            <td className="px-4 py-2 border-b"></td>
                                            <td className="px-4 py-2 border-b"></td>
                                            <td className="px-4 py-2 border-b"></td>
                                            <td className="px-4 py-2 border-b">Reserved by AusPayNet for Future Use</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <h3 className="text-lg font-semibold text-[#2c347c] mt-6 mb-3">GENERACIÓN DEL TAG 39</h3>
                        <p className="text-gray-700 mb-4">
                            El tag 39 (o cualquier otro tag entre el 26 y 47) es el valor codificado del ID del
                            usuario dueño de la billetera, el cual será generado de la siguiente forma:
                        </p>

                        <div className="overflow-x-auto mb-6">
                            <div className="table-wrapper">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td className="px-4 py-2 border-b font-semibold">Tipo Documento:</td>
                                            <td className="px-4 py-2 border-b">2ANS</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b font-semibold">Numero documento:</td>
                                            <td className="px-4 py-2 border-b">variable</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 border-b font-semibold">Fecha creación:</td>
                                            <td className="px-4 py-2 border-b">yyyyMMdd</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <p className="text-gray-700 mb-4">Entonces la estructura sería:</p>
                        <div className="mb-4">
                            <p className="font-semibold">Paso 1: concatenar</p>
                            <div className="bg-gray-100 p-2 rounded overflow-x-auto">
                                <p className="font-mono">Tipo documento:numerodocumento:fechacreacion</p>
                            </div>
                        </div>
                        <div className="mb-6">
                            <p className="font-semibold">Paso 2:</p>
                            <div className="bg-gray-100 p-2 rounded">
                                <p>Sacar un hash SHA-256 en base 64</p>
                            </div>
                        </div>

                        <div className="bg-gray-100 p-4 rounded-md mb-6">
                            <p className="font-semibold mb-2">Ejemplo:</p>
                            <div className="overflow-x-auto">
                                <p className="mb-2">Dato: <span className="font-mono">01:1234567890:20241212</span></p>
                                <p className="mb-2 break-all">Resultado: <span className="font-mono">zl0QG6+a7JzPtj1AEat1hzNw08bNcqfzsLHoV9kIMlU=</span></p>
                            </div>
                            <p>El resultado es el ID de usuario que irá en el TAG 39 para identificar la billetera en la aplicación</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QRPage;