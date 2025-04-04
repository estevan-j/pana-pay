import React, { useState } from 'react';
import { Info } from 'lucide-react';
import { EntryForm, OutputForm } from '../../utils/Interfaces';
import EntryFormComponent from '../../components/EntryFormComponent';

const AfiliacionMasivaPage: React.FC = () => {
    // Initial entry form values
    const initialEntryEntrada: EntryForm = {
        MsgId: "0205202510210000000001",
        CreDtTm: "2025-01-20T10:15:30",
        NbOfTxs: "1",
        SttlmMtd: "INGA",
        InstgAgt: "0205",
        InstdAgt: "0000",
        Type: "acmt.998.211.01",
        ChnlId: "APP",
        Nm: "RIVADENEIRA BEJARANO KEVIN MAURICIO",
        DocTp: "CDI",
        DocId: "1752635263",
        AcctTp: "10",
        AcctId: "5678907890",
        Cred1: "CEL",
        Value1: "090655455",
        OperationType: "AFIL"
    };

    const initialEntrySalida: OutputForm = {
        MsgId: "0000202510210000000001",
        CreDtTm: "2025-01-20T11:25:45",
        NbOfTxs: "1",
        SttlmMtd: "INGA",
        InstgAgt: "0205",
        InstdAgt: "0000",
        Type: "acmt.998.212.01",
        ChnlId: "APP",
        OrgnlMsgId: "0205202510210000000001",
        OrgnlMgeType: "acmt.998.211.01",
        OrgnlCreDtTm: "2025-01-20T10:15:30",
        TxSts: "OK",
        RsnCd: "2030",
        AddtlInf: "Afiliación exitosa",
        IBAN: "EC1282055678907890",
        Cred1: "CDI",
        Value1: "1752635263",
        Cred2: "CQR",
        Value2: "ASDDS...354897",
        Cred3: "",
        Value3: "",
        SttlmDt: "2025-01-10"
    };

    // State for form entries
    const [entriesEntrada, setEntriesEntrada] = useState<EntryForm[]>([initialEntryEntrada]);
    const [entriesSalida, setEntriesSalida] = useState<OutputForm[]>([initialEntrySalida]);
    const [activeTab, setActiveTab] = useState<'entrada' | 'salida'>('entrada');

    const handleInputChange = (index: number, field: keyof EntryForm | keyof OutputForm, value: string) => {
        if (activeTab === 'entrada') {
            const newEntries = [...entriesEntrada];
            newEntries[index] = { ...newEntries[index], [field]: value };
            setEntriesEntrada(newEntries);
            console.log('Updated entriesEntrada:', newEntries);
        } else {
            const newEntries = [...entriesSalida];
            newEntries[index] = { ...newEntries[index], [field]: value };
            setEntriesSalida(newEntries);
            console.log('Updated entriesSalida:', newEntries);
        }
    };

    // Function to add new entry
    const addEntry = () => {
        if (activeTab === 'entrada') {
            const lastEntry = entriesEntrada[entriesEntrada.length - 1];
            const lastMsgId = lastEntry.MsgId;
            const newMsgIdNum = parseInt(lastMsgId.slice(-13)) + 1;
            const newMsgId = lastMsgId.slice(0, -13) + String(newMsgIdNum).padStart(13, '0');

            const newEntry = {
                ...initialEntryEntrada,
                MsgId: newMsgId,
                CreDtTm: new Date().toISOString().slice(0, 19),
                Nm: "",
                DocId: "",
                AcctId: "",
            };

            setEntriesEntrada([...entriesEntrada, newEntry]);
        } else {
            const lastEntry = entriesSalida[entriesSalida.length - 1];
            const lastMsgId = lastEntry.MsgId;
            const newMsgIdNum = parseInt(lastMsgId.slice(-13)) + 1;
            const newMsgId = lastMsgId.slice(0, -13) + String(newMsgIdNum).padStart(13, '0');

            const newEntry = {
                ...initialEntrySalida,
                MsgId: newMsgId,
                CreDtTm: new Date().toISOString().slice(0, 19),
                OrgnlMsgId: "",
                OrgnlMgeType: "",
                OrgnlCreDtTm: "",
                TxSts: "",
                RsnCd: "",
                AddtlInf: "",
                IBAN: "",
                CredId: "",
                Value: "",
                CredId2: "",
                Value2: "",
                SttlmDt: ""
            };

            setEntriesSalida([...entriesSalida, newEntry]);
        }
    };

    // Function to remove entry
    const removeEntry = (index: number) => {
        if (activeTab === 'entrada') {
            if (entriesEntrada.length > 1) {
                const newEntries = [...entriesEntrada];
                newEntries.splice(index, 1);
                setEntriesEntrada(newEntries);
            }
        } else {
            if (entriesSalida.length > 1) {
                const newEntries = [...entriesSalida];
                newEntries.splice(index, 1);
                setEntriesSalida(newEntries);
            }
        }
    };

    // Función para generar el CSV
    const generateCSV = () => {
        const headersEntrada = [
            "MsgId", "CreDtTm", "NbOfTxs", "SttlmMtd", "InstgAgt",
            "InstdAgt", "Type", "ChnlId", "Nm", "DocTp",
            "DocId", "AcctTp", "AcctId", "Cred1", "Value1", "OperationType"
        ];

        const headersSalida = [
            "MsgId", "CreDtTm", "NbOfTxs", "SttlmMtd", "InstgAgt",
            "InstdAgt", "Type", "ChnlId", "OrgnlMsgId", "OrgnlMgeType",
            "OrgnlCreDtTm", "TxSts", "RsnCd", "AddtlInf", "IBAN", "Cred1",
            "Value1", "Cred2", "Value2", "Cred3", "Value3", "SttlmDt"
        ];

        const headers = activeTab === 'entrada' ? headersEntrada : headersSalida;
        const entries = activeTab === 'entrada' ? entriesEntrada : entriesSalida;
        const separator = ';';
        // Convert entries to CSV rows
        const csvRows = entries.map(entry => {
            return headers.map(header => {
                // Obtener el valor
                const value = entry[header as keyof typeof entry];

                // Si el valor no existe, devolver cadena vacía
                if (value === undefined || value === null) {
                    return '""';
                }

                // Convertir a cadena y asegurarse de mantener el formato original
                const stringValue = String(value);

                // Poner TODOS los valores entre comillas para preservar su formato exacto
                // Escapar cualquier comilla existente duplicándola
                return `"${stringValue.replace(/"/g, '""')}"`;

            }).join(separator); // Usar el mismo separador para TODAS las filas
        });

        // Combine header and data rows
        const headerRow = headers.join(';');
        const csvContent = [headerRow, ...csvRows].join('\n');

        // Create download link with BOM para compatibilidad con Excel
        const BOM = '\uFEFF';
        const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', `afiliacion_masiva_${activeTab}_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                        <Info className="h-6 w-6 text-[#2c347c]" />
                    </div>
                    <div className="w-full">
                        <h2 className="text-xl font-bold text-[#2c347c] mb-4">Afiliación Masiva</h2>
                        <p className="text-gray-700 mb-6">
                            Para realizar una afiliación masiva, la Institución Financiera (IFI) debe ejecutar este procedimiento una sola vez.
                            Es necesario proporcionar un archivo con las características adecuadas para procesar múltiples afiliaciones.
                        </p>
                        <div className="mb-6 bg-gray-50 p-4 rounded-md">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Proceso propuesto</h3>
                            <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                <li>La cooperativa genera el archivo de cuentas a dar de alta en Panapay</li>
                                <li>Coonecta Recibe el archivo de la IFI, ejemplo correo</li>
                                <li>Coonecta entregaria el archivo resultante a la institucion financiera.</li>
                            </ol>
                        </div>

                        <div className="mb-6">
                            <div className="flex border-b border-gray-200">
                                <button
                                    className={`px-4 py-2 ${activeTab === 'entrada' ? 'border-b-2 border-indigo-500 text-indigo-600' : 'text-gray-500'}`}
                                    onClick={() => setActiveTab('entrada')}
                                >
                                    Archivo de Entrada
                                </button>
                                <button
                                    className={`px-4 py-2 ${activeTab === 'salida' ? 'border-b-2 border-indigo-500 text-indigo-600' : 'text-gray-500'}`}
                                    onClick={() => setActiveTab('salida')}
                                >
                                    Archivo de Salida
                                </button>
                            </div>

                            {activeTab === 'entrada' && (
                                <EntryFormComponent
                                    entries={entriesEntrada}
                                    handleInputChange={handleInputChange}
                                    addEntry={addEntry}
                                    removeEntry={removeEntry}
                                    generateCSV={generateCSV}
                                    title="Archivo de entrada"
                                    note="Complete los siguientes campos para cada registro que desee afiliar. Puede añadir múltiples registros y luego exportarlos a un archivo CSV para su procesamiento. Formato de archivo CSV con separador de campo : punto y coma."
                                />
                            )}

                            {activeTab === 'salida' && (
                                <EntryFormComponent
                                    entries={entriesSalida}
                                    handleInputChange={handleInputChange}
                                    addEntry={addEntry}
                                    removeEntry={removeEntry}
                                    generateCSV={generateCSV}
                                    title="Archivo de salida"
                                    note="Complete los siguientes campos para cada registro de salida. Puede añadir múltiples registros y luego exportarlos a un archivo CSV para su procesamiento. Formato de archivo CSV con separador de campo : punto y coma"
                                />
                            )}
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-md">
                            <h4 className="font-bold text-yellow-800 mb-2">Importante</h4>
                            <p className="text-yellow-700 text-sm mb-2">
                                • Las afiliaciones masivas se procesan en lotes, por lo que puede haber un tiempo de espera.
                            </p>
                            <p className="text-yellow-700 text-sm mb-2">
                                • Verifique que los datos estén correctos antes de generar el archivo CSV.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AfiliacionMasivaPage;