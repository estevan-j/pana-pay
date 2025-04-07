import React, { useCallback, useState, useEffect } from 'react';
import { Info, AlertCircle, Map, Globe, Search, X, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import axios from 'axios';

interface FormatDateOptions {
    year: 'numeric';
    month: 'long';
    day: 'numeric';
    hour: '2-digit';
    minute: '2-digit';
    second: '2-digit';
    hour12: boolean;
}

interface AuthLog {
    id: string;
    time: number;
    type: string;
    realmId: string;
    clientId: string;
    userId: string;
    sessionId: string;
    ipAddress: string;
    error: string;
    details: {
        username?: string;
        auth_method?: string;
        auth_type?: string;
        register_method?: string;
        remember_me?: boolean;
        redirect_uri?: string;
        code_id?: string;
        consent?: string;
        identity_provider?: string;
        country?: string;
        [key: string]: any;
    };
    username?: string; // Campo calculado para mostrar
    country?: string; // Campo calculado para mostrar
    login_timestamp?: string; // Campo calculado para mostrar
}

// Componentes separados para mejor legibilidad
const LoadingState: React.FC = () => (
    <div className="text-center py-8">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#2c347c] border-r-transparent"></div>
        <p className="mt-2 text-gray-600">Cargando registros...</p>
    </div>
);

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
        <div className="flex items-center">
            <div className="flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-red-500" />
            </div>
            <div className="ml-3">
                <p className="text-sm text-red-700">
                    {message.includes('Acceso denegado')
                        ? 'No tienes permisos para ver estos registros. Se requiere rol de administrador.'
                        : message}
                </p>
            </div>
        </div>
    </div>
);

const EmptyState: React.FC = () => (
    <div className="text-center py-8 text-gray-500">
        No hay registros de inicio de sesión disponibles.
    </div>
);

interface FilterPanelProps {
    onFilter: (params: { username?: string; startDate?: string; endDate?: string }) => void;
    onClear: () => void;
    isFiltering: boolean;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ onFilter, onClear, isFiltering }) => {
    const [username, setUsername] = useState<string>('');
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onFilter({
            username: username.trim() || undefined,
            startDate: startDate || undefined,
            endDate: endDate || undefined
        });
    };

    const clearFilters = () => {
        setUsername('');
        setStartDate('');
        setEndDate('');
        onClear();
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6 border border-gray-200">
            <div className="flex flex-wrap items-center justify-between mb-4">
                <h3 className="text-md font-medium text-gray-700 flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtrar registros
                </h3>
                {isFiltering && (
                    <button
                        onClick={clearFilters}
                        className="text-sm text-red-600 hover:text-red-800 flex items-center mt-1 sm:mt-0"
                    >
                        <X className="h-4 w-4 mr-1" /> Limpiar filtros
                    </button>
                )}
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="w-full">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre de usuario
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="block w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            placeholder="Buscar por usuario"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                            <Search className="h-4 w-4 text-gray-400" />
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                        Fecha desde
                    </label>
                    <input
                        type="date"
                        id="startDate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="block w-full rounded-md border border-gray-300 py-2 pl-3 pr-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                </div>

                <div className="w-full">
                    <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
                        Fecha hasta
                    </label>
                    <input
                        type="date"
                        id="endDate"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="block w-full rounded-md border border-gray-300 py-2 pl-3 pr-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                </div>

                <div className="w-full flex items-end">
                    <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#2c347c] hover:bg-[#232a62] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2c347c]"
                    >
                        Aplicar filtros
                    </button>
                </div>
            </form>
        </div>
    );
};

const LogsTable: React.FC<{ logs: AuthLog[], formatDate: (date: string) => string }> = ({ logs, formatDate }) => (
    <div className="overflow-x-auto border rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Usuario
                    </th>
                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Fecha y Hora
                    </th>
                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                        Dirección IP
                    </th>
                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                        País
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {logs.map((log) => (
                    <tr key={log.id} className="hover:bg-gray-50">
                        <td className="px-3 py-4">
                            <div className="text-sm font-medium text-gray-900 truncate max-w-[120px] sm:max-w-none">{log.username || 'Desconocido'}</div>
                        </td>
                        <td className="px-3 py-4">
                            <div className="text-sm text-gray-500 truncate max-w-[120px] sm:max-w-none">
                                {formatDate(log.login_timestamp || new Date(log.time).toISOString())}
                            </div>
                        </td>
                        <td className="px-3 py-4 hidden sm:table-cell">
                            <div className="text-sm text-gray-500 flex items-center">
                                <Map className="h-4 w-4 min-w-[16px] mr-2 text-gray-400" />
                                <span className="truncate">{log.ipAddress || 'No disponible'}</span>
                            </div>
                        </td>
                        <td className="px-3 py-4 hidden sm:table-cell">
                            <div className="text-sm text-gray-500 flex items-center">
                                <Globe className="h-4 w-4 min-w-[16px] mr-2 text-gray-400" />
                                <span className="truncate">{log.country || log.details?.country || 'Desconocido'}</span>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

// Componente de paginación
interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-200 bg-white px-2 py-3 sm:px-6 mt-4">
            <div className="flex justify-between w-full sm:hidden mb-3">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-1 text-sm font-medium ${currentPage === 1
                        ? 'text-gray-300 cursor-not-allowed'
                        : 'text-gray-700 hover:bg-gray-50'
                        }`}
                >
                    Anterior
                </button>
                <span className="text-sm text-gray-700">
                    Página {currentPage} de {totalPages}
                </span>
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`relative ml-2 inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-1 text-sm font-medium ${currentPage === totalPages
                        ? 'text-gray-300 cursor-not-allowed'
                        : 'text-gray-700 hover:bg-gray-50'
                        }`}
                >
                    Siguiente
                </button>
            </div>

            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Mostrando página <span className="font-medium">{currentPage}</span> de{' '}
                        <span className="font-medium">{totalPages}</span>
                    </p>
                </div>
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm overflow-x-auto" aria-label="Pagination">
                        <button
                            onClick={() => onPageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`relative inline-flex items-center rounded-l-md px-2 py-2 ${currentPage === 1
                                ? 'text-gray-300 cursor-not-allowed'
                                : 'text-gray-400 hover:bg-gray-50'
                                }`}
                        >
                            <span className="sr-only">Anterior</span>
                            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                        </button>

                        {/* Mostrar números de página - versión compacta para mejorar responsividad */}
                        {[...Array(totalPages)].map((_, index) => {
                            const pageNumber = index + 1;
                            // Mostrar menos páginas en pantallas más pequeñas
                            if (
                                pageNumber === 1 ||
                                pageNumber === totalPages ||
                                (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                            ) {
                                return (
                                    <button
                                        key={pageNumber}
                                        onClick={() => onPageChange(pageNumber)}
                                        className={`relative hidden sm:inline-flex items-center px-3 py-2 text-sm font-medium ${currentPage === pageNumber
                                            ? 'z-10 bg-[#2c347c] text-white'
                                            : 'text-gray-500 hover:bg-gray-50'
                                            }`}
                                    >
                                        {pageNumber}
                                    </button>
                                );
                            } else if (
                                (pageNumber === currentPage - 2 && currentPage > 3) ||
                                (pageNumber === currentPage + 2 && currentPage < totalPages - 2)
                            ) {
                                // Puntos suspensivos para indicar páginas ocultas
                                return (
                                    <span
                                        key={`ellipsis-${pageNumber}`}
                                        className="relative hidden sm:inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700"
                                    >
                                        ...
                                    </span>
                                );
                            }
                            return null;
                        })}

                        <button
                            onClick={() => onPageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`relative inline-flex items-center rounded-r-md px-2 py-2 ${currentPage === totalPages
                                ? 'text-gray-300 cursor-not-allowed'
                                : 'text-gray-400 hover:bg-gray-50'
                                }`}
                        >
                            <span className="sr-only">Siguiente</span>
                            <ChevronRight className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
};

// Hook para obtener los logs de Keycloak
const useKeycloakLogs = (user: string | null) => {
    const [logs, setLogs] = useState<AuthLog[]>([]);
    const [filteredLogs, setFilteredLogs] = useState<AuthLog[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { getToken, isAdmin } = useAuth();

    const fetchLogs = useCallback(async () => {
        if (!user) {
            setLoading(false);
            setError('Usuario no autenticado');
            return;
        }

        if (!isAdmin) {
            setLoading(false);
            setError('Acceso denegado. Solo los administradores pueden ver los registros.');
            return;
        }

        try {
            setLoading(true);
            
            // Obtener el token para la autenticación
            const token = getToken();
            if (!token) {
                throw new Error('No se pudo obtener el token de autenticación');
            }
            
            // Realizar la solicitud a la API de administración de Keycloak
            const keycloakBaseUrl = import.meta.env.VITE_APP_KEYCLOAK_URL; 
            const realm = import.meta.env.VITE_APP_KEYCLOAK_REALM;
            const apiUrl = `${keycloakBaseUrl}/admin/realms/${realm}/events?type=LOGIN`;
            
            const response = await axios.get(apiUrl, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            
            // Transformar los datos recibidos
            const processedLogs = response.data.map((event: any) => {
                return {
                    ...event,
                    username: event.details?.username || 'Desconocido',
                    login_timestamp: new Date(event.time).toISOString(),
                    country: event.details?.country || 'Desconocido'
                };
            });
            
            setLogs(processedLogs);
            setFilteredLogs(processedLogs);
            setLoading(false);
        } catch (err) {
            console.error('Error al obtener los eventos de Keycloak:', err);
            setError('No se pudieron cargar los registros. Verifique los permisos o inténtelo de nuevo más tarde.');
            setLoading(false);
        }
    }, [user, isAdmin, getToken]);

    useEffect(() => {
        fetchLogs();
    }, [fetchLogs]);

    const filterLogs = useCallback(
        (params: { username?: string; startDate?: string; endDate?: string }) => {
            let filtered = [...logs];

            if (params.username) {
                filtered = filtered.filter((log) => 
                    log.username?.toLowerCase().includes(params.username!.toLowerCase())
                );
            }

            if (params.startDate) {
                const startTimestamp = new Date(params.startDate).getTime();
                filtered = filtered.filter((log) => new Date(log.time).getTime() >= startTimestamp);
            }

            if (params.endDate) {
                const endTimestamp = new Date(params.endDate).setHours(23, 59, 59, 999);
                filtered = filtered.filter((log) => new Date(log.time).getTime() <= endTimestamp);
            }

            setFilteredLogs(filtered);
        },
        [logs]
    );

    const clearFilters = useCallback(() => {
        setFilteredLogs(logs);
    }, [logs]);

    return { logs, filteredLogs, loading, error, filterLogs, clearFilters };
};

const RegistrosPage: React.FC = () => {
    const { user } = useAuth();
    const { filteredLogs, loading, error, filterLogs, clearFilters } = useKeycloakLogs(user);
    const [isFiltering, setIsFiltering] = useState(false);

    // Estado para la paginación
    const [currentPage, setCurrentPage] = useState(1);
    const logsPerPage = 10; // Número de logs por página

    // Calcular el total de páginas
    const totalPages = Math.max(1, Math.ceil(filteredLogs.length / logsPerPage));

    // Asegurarse de que la página actual es válida
    React.useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(1);
        }
    }, [filteredLogs, totalPages, currentPage]);

    // Obtener logs para la página actual
    const indexOfLastLog = currentPage * logsPerPage;
    const indexOfFirstLog = indexOfLastLog - logsPerPage;
    const currentLogs = filteredLogs.slice(indexOfFirstLog, indexOfLastLog);

    // Función para cambiar de página
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        // Desplazar la vista hacia arriba
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Función para formatear fechas - memoizada para evitar recálculos
    const formatDate = useCallback((dateString: string) => {
        const options: FormatDateOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        return new Date(dateString).toLocaleDateString('es-ES', options);
    }, []);

    // Función para manejar el filtrado
    const handleFilter = useCallback((params: { username?: string; startDate?: string; endDate?: string }) => {
        filterLogs(params);
        setIsFiltering(true);
        setCurrentPage(1); // Reset a la primera página al aplicar filtros
    }, [filterLogs]);

    // Función para limpiar filtros
    const handleClearFilters = useCallback(() => {
        clearFilters();
        setIsFiltering(false);
        setCurrentPage(1); // Reset a la primera página al limpiar filtros
    }, [clearFilters]);

    return (
        <div className="px-2 sm:px-4 md:px-6">
            <div className="bg-white p-3 sm:p-6 rounded-lg shadow-md mb-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4">
                    <div className="flex-shrink-0 mb-3 sm:mb-0">
                        <Info className="h-6 w-6 text-[#2c347c]" />
                    </div>
                    <div className="w-full">
                        <h2 className="text-xl font-bold text-[#2c347c] mb-4">Registros de Inicio de Sesión</h2>
                        <p className="text-gray-700 mb-6">
                            Esta sección muestra los registros de inicio de sesión exitosos en el sistema,
                            incluyendo información sobre la ubicación y dirección IP desde la que se realizaron los accesos.
                        </p>

                        {/* Nota solo para móviles */}
                        <div className="block sm:hidden mb-4 p-3 bg-blue-50 rounded border border-blue-100">
                            <p className="text-xs text-blue-700">
                                <span className="font-medium">Nota:</span> Desliza horizontalmente para ver todos los detalles de los registros.
                            </p>
                        </div>

                        <FilterPanel
                            onFilter={handleFilter}
                            onClear={handleClearFilters}
                            isFiltering={isFiltering}
                        />

                        {loading ? (
                            <LoadingState />
                        ) : error ? (
                            <ErrorMessage message={error} />
                        ) : filteredLogs.length === 0 ? (
                            isFiltering ? (
                                <div className="text-center py-8 text-gray-500">
                                    No se encontraron registros que coincidan con los filtros aplicados.
                                </div>
                            ) : (
                                <EmptyState />
                            )
                        ) : (
                            <>
                                <div className="mb-4 text-sm text-gray-500">
                                    Mostrando {indexOfFirstLog + 1}-{Math.min(indexOfLastLog, filteredLogs.length)} de {filteredLogs.length} {filteredLogs.length === 1 ? 'registro' : 'registros'}
                                    {isFiltering ? ' (filtrados)' : ''}
                                </div>
                                <LogsTable logs={currentLogs} formatDate={formatDate} />

                                {/* Componente de paginación */}
                                {totalPages > 1 && (
                                    <Pagination
                                        currentPage={currentPage}
                                        totalPages={totalPages}
                                        onPageChange={handlePageChange}
                                    />
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrosPage;