import React from 'react';
import { Plus, Trash, Download } from 'lucide-react';
import { EntryForm, OutputForm } from '../utils/Interfaces';

interface EntryFormComponentProps {
    entries: EntryForm[] | OutputForm[];
    handleInputChange: (index: number, field: keyof EntryForm, value: string) => void;
    addEntry: () => void;
    removeEntry: (index: number) => void;
    generateCSV: () => void;
    title: string;
    note: string;
}

const EntryFormComponent: React.FC<EntryFormComponentProps> = ({
    entries,
    handleInputChange,
    addEntry,
    removeEntry,
    generateCSV,
    title,
    note
}) => {
    return (
        <div className="mt-4">
            <h3 className="text-lg font-bold text-[#2c347c] mb-4">{title}</h3>

            <div className="mb-4 bg-blue-50 p-4 rounded-md">
                <p className="text-sm text-blue-700">
                    <span className="font-medium">Nota:</span> {note}
                </p>
            </div>

            {entries.map((entry, index) => (
                <div key={index} className="mb-8 p-4 border border-gray-200 rounded-md">
                    <div className="flex justify-between mb-4">
                        <h4 className="font-medium text-gray-800">Registro #{index + 1}</h4>
                        {entries.length > 1 && (
                            <button
                                onClick={() => removeEntry(index)}
                                className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded flex items-center"
                            >
                                <Trash className="h-4 w-4 mr-1" /> Eliminar
                            </button>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {/* Render form fields dynamically */}
                        {Object.keys(entry).map((key) => (
                            <div className="form-group" key={key}>
                                <label className="block text-sm font-medium text-gray-700 mb-1">{key}</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    value={'MgeType' in entry ? entry[key as keyof EntryForm] : entry[key as keyof OutputForm]}
                                    onChange={(e) => handleInputChange(index, key as keyof EntryForm, e.target.value)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <div className="flex justify-center mb-6">
                <button
                    onClick={addEntry}
                    className="px-4 py-2 bg-[--primary-bg-color] text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex items-center"
                >
                    <Plus className="h-4 w-4 mr-1" /> Añadir nuevo registro
                </button>
            </div>

            <div className="flex justify-end mb-6">
                <button
                    onClick={generateCSV}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 flex items-center"
                >
                    <Download className="h-4 w-4 mr-1" /> Generar archivo CSV
                </button>
            </div>
        </div>
    );
};

export default EntryFormComponent;