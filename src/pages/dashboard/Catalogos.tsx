import React from 'react';

const Catalogos: React.FC = () => {
    return (
        <div className="full-width-padding">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-bold text-[#2c347c] mb-4">CATALOGO TÉCNICO - COONECTA</h2>
                <div className="table-container">
                    <div className="table-wrapper">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className='w-[60px] whitespace-nowrap'>No</th>
                                    <th>TIPO CATALOGO</th>
                                    <th>DESCRIPCION</th>
                                    <th>CÓDIGO</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={3}>1</td>
                                    <td rowSpan={3}>DocTypes</td>
                                    <td className="border-black">Cédula de ciudadanía</td>
                                    <td>CDI</td>
                                </tr>
                                <tr>
                                    <td className="border-black">Pasaporte</td>
                                    <td>PAS</td>
                                </tr>
                                <tr>
                                    <td className="border-black">Comercio (RUC)</td>
                                    <td>RUC</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>2</td>
                                    <td rowSpan={2}>StatusTypeCode</td>
                                    <td className="border-black">Estado correcto</td>
                                    <td>OK</td>
                                </tr>
                                <tr>
                                    <td className="border-black">Estado de error</td>
                                    <td>ERR</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>TransCode</td>
                                    <td className="border-black">Transacción de pago</td>
                                    <td>PAGO</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>4</td>
                                    <td rowSpan={2}>ChrgBr</td>
                                    <td className="border-black">Debitado</td>
                                    <td>DEBT</td>
                                </tr>
                                <tr>
                                    <td className="border-black">Acreditado</td>
                                    <td>CRDT</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>5</td>
                                    <td rowSpan={2}>TypeAccount</td>
                                    <td className="border-black">Cuenta Ahorros</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td className="border-black">Cuenta Corriente</td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <td rowSpan={4}>6</td>
                                    <td rowSpan={4}>SttlmMtd</td>
                                    <td className="border-black">Agente Instruido</td>
                                    <td>INDA</td>
                                </tr>
                                <tr>
                                    <td className="border-black">Agente Instructor</td>
                                    <td>INGA</td>
                                </tr>
                                <tr>
                                    <td className="border-black">Cobertura</td>
                                    <td>COVE</td>
                                </tr>
                                <tr>
                                    <td className="border-black">Sistema Clearing</td>
                                    <td>CLRG</td>
                                </tr>
                                <tr>
                                    <td rowSpan={3}>7</td>
                                    <td rowSpan={3}>ActnTp</td>
                                    <td className="border-black">Desafiliación</td>
                                    <td>DESA</td>
                                </tr>
                                <tr>
                                    <td className="border-black">Bloqueo</td>
                                    <td>BLOQ</td>
                                </tr>
                                <tr>
                                    <td className="border-black">Desbloqueo</td>
                                    <td>DBLQ</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>8</td>
                                    <td rowSpan={2}>ActnEnrTp</td>
                                    <td className="border-black">Afiliar</td>
                                    <td>AFIL</td>
                                </tr>
                                <tr>
                                    <td className="border-black">Actualizar</td>
                                    <td>UPDT</td>
                                </tr>
                                <tr>
                                    <td rowSpan={3}>9</td>
                                    <td rowSpan={3}>CredTp</td>
                                    <td className="border-black">Celular</td>
                                    <td>CEL</td>
                                </tr>
                                <tr>
                                    <td className="border-black">Mail</td>
                                    <td>EMA</td>
                                </tr>
                                <tr>
                                    <td className="border-black">QR</td>
                                    <td>CQR</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2}>10</td>
                                    <td rowSpan={2}>ChannelID</td>
                                    <td className="border-black">APP</td>
                                    <td>APP</td>
                                </tr>
                                <tr>
                                    <td className="border-black">WEB</td>
                                    <td>WEB</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>CcyType</td>
                                    <td className="border-black">Referencia en ISO 4217</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td rowSpan={3}>12</td>
                                    <td rowSpan={3}>ReasonReverse</td>
                                    <td className="border-black">TimeOut Deb</td>
                                    <td>AB06</td>
                                </tr>
                                <tr>
                                    <td className="border-black">TimeOut Cre</td>
                                    <td>AB05</td>
                                </tr>
                                <tr>
                                    <td className="border-black">Error Cred</td>
                                    <td>MS03</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <h2 className="text-xl font-bold text-[#2c347c] mb-4 mt-4">CATALOGO CODIGOS DE ERROR</h2>
                <div className="table-container">
                    <div className="table-wrapper">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className='w-[60px] whitespace-nowrap'>CODIGO</th>
                                    <th>DESCRIPCION</th>
                                    <th>TIPO</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0000</td>
                                    <td>TRANSACCION EXITOSA</td>
                                    <td>RED, DEBITO, CREDITO</td>
                                </tr>
                                <tr>
                                    <td>AC02</td>
                                    <td>InvalidDebtorAccountNumber</td>
                                    <td>DEBITO</td>
                                </tr>
                                <tr>
                                    <td>AC04</td>
                                    <td>ClosedAccountNumber</td>
                                    <td>DEBITO</td>
                                </tr>
                                <tr>
                                    <td>AB06</td>
                                    <td>TimeoutInstructedAgent</td>
                                    <td>DEBITO</td>
                                </tr>
                                <tr>
                                    <td>AB07</td>
                                    <td>OfflineAgent</td>
                                    <td>DEBITO</td>
                                </tr>
                                <tr>
                                    <td>AB10</td>
                                    <td>ErrorInstructedAgent</td>
                                    <td>DEBITO</td>
                                </tr>
                                <tr>
                                    <td>AM04</td>
                                    <td>Fondos insuficientes</td>
                                    <td>DEBITO</td>
                                </tr>
                                <tr>
                                    <td>AM05</td>
                                    <td>Duplication</td>
                                    <td>DEBITO</td>
                                </tr>
                                <tr>
                                    <td>AC03</td>
                                    <td>InvalidCreditorAccountNumber</td>
                                    <td>CREDITO</td>
                                </tr>
                                <tr>
                                    <td>AC05</td>
                                    <td>ClosedDebtorAccountNumber</td>
                                    <td>CREDITO</td>
                                </tr>
                                <tr>
                                    <td>AB05</td>
                                    <td>TimeoutCreditorAgent</td>
                                    <td>CREDITO</td>
                                </tr>
                                <tr>
                                    <td>AB08</td>
                                    <td>OfflineCreditorAgent</td>
                                    <td>CREDITO</td>
                                </tr>
                                <tr>
                                    <td>AB09</td>
                                    <td>ErrorCreditorAgent</td>
                                    <td>CREDITO</td>
                                </tr>
                                <tr>
                                    <td>AM05</td>
                                    <td>Duplication</td>
                                    <td>CREDITO</td>
                                </tr>
                                <tr>
                                    <td>AM02</td>
                                    <td>NotAllowedAmount</td>
                                    <td>RED, DEBITO, CREDITO</td>
                                </tr>
                                <tr>
                                    <td>AM06</td>
                                    <td>TooLowAmount</td>
                                    <td>RED, DEBITO, CREDITO</td>
                                </tr>
                                <tr>
                                    <td>AM14</td>
                                    <td>AmountExceedsAgreedLimit</td>
                                    <td>RED, DEBITO, CREDITO</td>
                                </tr>
                                <tr>
                                    <td>AM13</td>
                                    <td>AmountExceedsClearingSystemLimit</td>
                                    <td>RED, DEBITO, CREDITO</td>
                                </tr>
                                <tr>
                                    <td>AM21</td>
                                    <td>LimitExceeded</td>
                                    <td>RED, DEBITO, CREDITO</td>
                                </tr>
                                <tr>
                                    <td>AM23</td>
                                    <td>AmountExceedsSettlementLimit</td>
                                    <td>RED, DEBITO, CREDITO</td>
                                </tr>
                                <tr>
                                    <td>BE01</td>
                                    <td>InconsistenWithEndCustomer</td>
                                    <td>RED, DEBITO, CREDITO</td>
                                </tr>
                                <tr>
                                    <td>BE06</td>
                                    <td>UnknownEndCustomer</td>
                                    <td>RED, DEBITO, CREDITO</td>
                                </tr>
                                <tr>
                                    <td>BE08</td>
                                    <td>BankError</td>
                                    <td>RED</td>
                                </tr>
                                <tr>
                                    <td>DU04</td>
                                    <td>DuplicateEndToEndID</td>
                                    <td>RED</td>
                                </tr>
                                <tr>
                                    <td>FF01</td>
                                    <td>InvalidFileFormat</td>
                                    <td>RED</td>
                                </tr>
                                <tr>
                                    <td>RC03</td>
                                    <td>InvalidDebtorBankIdentifier</td>
                                    <td>RED</td>
                                </tr>
                                <tr>
                                    <td>RC04</td>
                                    <td>InvalidCreditorBankIdentifier</td>
                                    <td>RED</td>
                                </tr>
                                <tr>
                                    <td>RC16</td>
                                    <td>ParticipantNotActiveMemberofSADCRTGS</td>
                                    <td>RED</td>
                                </tr>
                                <tr>
                                    <td>TRJT</td>
                                    <td>TechnicalRejection</td>
                                    <td>RED</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h2 className="text-xl font-bold text-[#2c347c] mb-4 mt-4">CATALOGO DE ENTIDADES</h2>
                <div className="table-container">
                    <div className="table-wrapper">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className='w-[60px] whitespace-nowrap'>No</th>
                                    <th>CÓDIGO COOPERATIVA</th>
                                    <th>NOMBRE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>0205</td>
                                    <td>Cooperativa Biblián</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>0257</td>
                                    <td>San Francisco</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>0209</td>
                                    <td>Cacpeco</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <h2 className="text-xl font-bold text-[#2c347c] mb-4 mt-4">LISTADO DE MENSAJES - (ENTIDAD FINANCIERA HACIA COONECTA)</h2>
                <div className="table-container">
                    <div className="table-wrapper">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className='w-[60px] whitespace-nowrap'>No</th>
                                    <th>Operación</th>
                                    <th>Mensaje ISO Requerimiento</th>
                                    <th>Mensaje ISO Respuesta</th>
                                    <th>URL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Afiliación</td>
                                    <td>acmt.998.211.01</td>
                                    <td>acmt.998.212.01</td>
                                    <td>switchcentral/admin/afiliacion</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Desafiliación</td>
                                    <td>acmt.998.311.01</td>
                                    <td>acmt.998.312.01</td>
                                    <td>switchcentral/admin/desafiliacion</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Consulta Cuenta</td>
                                    <td>acmt.998.421.01</td>
                                    <td>acmt.998.422.01</td>
                                    <td>switchcentral/admin/consulta_cuenta</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Consulta Credencial</td>
                                    <td>acmt.998.441.01</td>
                                    <td>acmt.998.442.01</td>
                                    <td>switchcentral/admin/consulta_credencial</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Transferencia</td>
                                    <td>acmt.998.321.01</td>
                                    <td>acmt.998.322.01</td>
                                    <td>switchcentral/finan/transferencia</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Consulta Status Transacción</td>
                                    <td>acmt.998.511.01</td>
                                    <td>acmt.998.512.01</td>
                                    <td>switchcentral/admin/consulta_status</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <h2 className="text-xl font-bold text-[#2c347c] mb-4 mt-4">LISTADO DE MENSAJES - (COONECTA HACIA ENTIDAD FINANCIERA)</h2>
                <div className="table-container">
                    <div className="table-wrapper">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className='w-[60px] whitespace-nowrap'>No</th>
                                    <th>Operación</th>
                                    <th>Mensaje ISO Requerimiento</th>
                                    <th>Mensaje ISO Respuesta</th>
                                    <th>URL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>7</td>
                                    <td>Debito</td>
                                    <td>pacs.008.040.01</td>
                                    <td>pacs.002.040.01</td>
                                    <td>/finan/debito</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Reverso Débito (solo reverso automático)</td>
                                    <td>pacs.007.040.01</td>
                                    <td>pacs.002.041.01</td>
                                    <td>/finan/reverso_debito</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>Crédito</td>
                                    <td>pacs.008.020.01</td>
                                    <td>pacs.002.020.01</td>
                                    <td>/finan/credito</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Reverso Crédito (solo por time out)</td>
                                    <td>pacs.007.020.01</td>
                                    <td>pacs.002.021.01</td>
                                    <td>/finan/reverso_credito</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalogos;