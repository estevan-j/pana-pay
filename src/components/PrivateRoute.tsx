import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuthLogs';

interface PrivateRouteProps {
    requiredRoles?: string[];
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ requiredRoles = [] }) => {
    const { isAuthenticated, hasRole } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (requiredRoles.length > 0 && !requiredRoles.some(role => hasRole(role))) {
        return <Navigate to="/unauthorized" replace />;
    }

    return <Outlet />;
};

export default PrivateRoute;