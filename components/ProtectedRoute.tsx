import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

/**
 * Wraps routes that require authentication.
 * If the user is not signed in, they are redirected to /login
 * with the original URL preserved so they can be sent back after login.
 */
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { isAuthenticated, isLoading } = useAuth();
    const location = useLocation();

    // Show nothing while checking auth state (prevents flash of login page)
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-duo-green/10 via-white to-duo-blue/10">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-duo-blue border-t-transparent rounded-full animate-spin" />
                    <p className="text-gray-500 font-medium">Loading...</p>
                </div>
            </div>
        );
    }

    if (!isAuthenticated) {
        // Redirect to login, preserving the intended destination
        return <Navigate to="/login" state={{ from: location.pathname }} replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
