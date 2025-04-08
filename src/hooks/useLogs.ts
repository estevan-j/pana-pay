
import { useState, useEffect, useMemo } from 'react';
import supabase from '../lib/supabase';

export interface AuthLog {
    id: number;
    email: string;
    login_timestamp: string;
    ip_address: string | null;
    country: string | null;
}

interface FilterParams {
    username?: string;
    startDate?: string;
    endDate?: string;
}

interface UseAuthLogsResult {
    logs: AuthLog[];
    loading: boolean;
    error: string | null;
    refetch: () => Promise<void>;
    filteredLogs: AuthLog[];
    filterLogs: (params: FilterParams) => void;
    clearFilters: () => void;
}

export const useAuthLogs = (username: string | null): UseAuthLogsResult => {
    const [logs, setLogs] = useState<AuthLog[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [filters, setFilters] = useState<FilterParams>({});

    const fetchAuthLogs = async () => {
        try {
            setLoading(true);
            
            // Fetch logs from the auth_logs table
            const { data, error } = await supabase
                .from('auth_logs')
                .select('*')
                .order('login_timestamp', { ascending: false });
            
            if (error) throw new Error(error.message);

            setLogs(data || []);
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error al cargar los registros');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        let isMounted = true;
        
        fetchAuthLogs();

        return () => {
            isMounted = false;
        };
    }, [username]);

    // Apply filters locally
    const filteredLogs = useMemo(() => {
        return logs.filter(log => {
            // Filter by email (not username)
            if (filters.username && !log.email.toLowerCase().includes(filters.username.toLowerCase())) {
                return false;
            }
            
            // Filter by date
            if (filters.startDate || filters.endDate) {
                const logDate = new Date(log.login_timestamp);
                
                if (filters.startDate) {
                    const startDate = new Date(filters.startDate);
                    if (logDate < startDate) return false;
                }
                
                if (filters.endDate) {
                    const endDate = new Date(filters.endDate);
                    // Adjust to end of day
                    endDate.setHours(23, 59, 59, 999);
                    if (logDate > endDate) return false;
                }
            }
            
            return true;
        });
    }, [logs, filters]);

    // Function to apply filters
    const filterLogs = (params: FilterParams) => {
        setFilters(params);
    };

    // Function to clear filters
    const clearFilters = () => {
        setFilters({});
    };

    return { 
        logs, 
        loading, 
        error, 
        refetch: fetchAuthLogs,
        filteredLogs,
        filterLogs,
        clearFilters
    };
};
