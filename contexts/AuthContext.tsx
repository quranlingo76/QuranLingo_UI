import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import Cookies from 'js-cookie';
import * as authService from '../services/authService';
import type { User, RegisterPayload, LoginPayload } from '../services/authService';

// ── Context Types ─────────────────────────────────────────────────────

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
    login: (payload: LoginPayload) => Promise<void>;
    register: (payload: RegisterPayload) => Promise<void>;
    logout: () => Promise<void>;
    clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ── Cookie helpers ────────────────────────────────────────────────────
// We use a non-httpOnly cookie ('ql_user') to persist minimal user info
// on the client side. The actual auth token stays httpOnly (handled by
// the backend). This lets us restore user state on hard refresh without
// an extra API call.

const USER_COOKIE = 'ql_user';
const COOKIE_EXPIRY = 1; // 1 day (matches backend token expiry)

const saveUserToCookie = (user: User) => {
    Cookies.set(USER_COOKIE, JSON.stringify(user), {
        expires: COOKIE_EXPIRY,
        sameSite: 'strict',
        path: '/',
    });
};

const getUserFromCookie = (): User | null => {
    try {
        const raw = Cookies.get(USER_COOKIE);
        return raw ? JSON.parse(raw) : null;
    } catch {
        return null;
    }
};

const clearUserCookie = () => {
    Cookies.remove(USER_COOKIE, { path: '/' });
};

// ── Provider ──────────────────────────────────────────────────────────

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Restore session from cookie on mount
    useEffect(() => {
        const savedUser = getUserFromCookie();
        if (savedUser) {
            setUser(savedUser);
        }
        setIsLoading(false);
    }, []);

    const login = useCallback(async (payload: LoginPayload) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await authService.login(payload);
            if (response.success && response.data.user) {
                const userData = response.data.user;
                setUser(userData);
                saveUserToCookie(userData);
            }
        } catch (err: any) {
            const message = err.response?.data?.message || 'Login failed. Please try again.';
            setError(message);
            throw new Error(message);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const register = useCallback(async (payload: RegisterPayload) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await authService.register(payload);
            if (response.success) {
                // After registration, auto-login the user
                await login({ email: payload.email, password: payload.password });
            }
        } catch (err: any) {
            const message = err.response?.data?.message || 'Registration failed. Please try again.';
            setError(message);
            throw new Error(message);
        } finally {
            setIsLoading(false);
        }
    }, [login]);

    const logout = useCallback(async () => {
        setIsLoading(true);
        try {
            await authService.logout();
        } catch {
            // Even if API call fails, clear local state
        } finally {
            setUser(null);
            clearUserCookie();
            setIsLoading(false);
        }
    }, []);

    const clearError = useCallback(() => setError(null), []);

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: !!user,
                isLoading,
                error,
                login,
                register,
                logout,
                clearError,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// ── Hook ──────────────────────────────────────────────────────────────

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
