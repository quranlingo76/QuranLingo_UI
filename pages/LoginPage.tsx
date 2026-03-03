import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Logo from '../components/Logo';

const LoginPage: React.FC = () => {
    const { login, isAuthenticated, isLoading, error, clearError } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [localError, setLocalError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Where to go after login
    const from = (location.state as any)?.from || '/learning';

    // If already authenticated, redirect
    useEffect(() => {
        if (isAuthenticated) {
            navigate(from, { replace: true });
        }
    }, [isAuthenticated, navigate, from]);

    // Clear errors when inputs change
    useEffect(() => {
        if (localError) setLocalError('');
        if (error) clearError();
    }, [email, password]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLocalError('');

        if (!email.trim() || !password.trim()) {
            setLocalError('Please fill in all fields.');
            return;
        }

        setIsSubmitting(true);
        try {
            await login({ email: email.trim(), password });
            navigate(from, { replace: true });
        } catch (err: any) {
            setLocalError(err.message || 'Login failed.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const displayError = localError || error;

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-duo-green/10 via-white to-duo-blue/10 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-duo-green/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-duo-blue/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-duo-green/5 to-duo-blue/5 rounded-full blur-3xl" />
            </div>

            {/* Header */}
            <header className="relative z-10 flex items-center px-6 md:px-12 py-6">
                <Link to="/">
                    <Logo />
                </Link>
            </header>

            {/* Main content */}
            <main className="relative z-10 flex-1 flex items-center justify-center px-6 pb-12">
                <div className="w-full max-w-md">
                    {/* Card */}
                    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 md:p-10">
                        {/* Title */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-duo-blue to-duo-blue-dark rounded-2xl shadow-lg mb-4">
                                <span className="text-3xl">📖</span>
                            </div>
                            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800">
                                Welcome Back
                            </h1>
                            <p className="text-gray-500 mt-2 text-sm">
                                Continue your Quranic Arabic journey
                            </p>
                        </div>

                        {/* Error Display */}
                        {displayError && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3">
                                <span className="text-red-500 text-lg mt-0.5">⚠️</span>
                                <p className="text-red-600 text-sm font-medium">{displayError}</p>
                            </div>
                        )}

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Email */}
                            <div>
                                <label htmlFor="login-email" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                        ✉️
                                    </span>
                                    <input
                                        id="login-email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="you@example.com"
                                        className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-duo-blue focus:bg-white transition-all duration-200"
                                        autoComplete="email"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <label htmlFor="login-password" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                        🔒
                                    </span>
                                    <input
                                        id="login-password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        className="w-full pl-12 pr-12 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-duo-blue focus:bg-white transition-all duration-200"
                                        autoComplete="current-password"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                                    >
                                        {showPassword ? '🙈' : '👁️'}
                                    </button>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                id="login-submit"
                                type="submit"
                                disabled={isSubmitting || isLoading}
                                className="w-full py-4 bg-duo-blue text-white font-bold text-lg rounded-xl hover:bg-duo-blue-dark transition-all duration-200 shadow-lg border-b-4 border-duo-blue-dark active:border-b-0 active:mt-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:active:border-b-4 disabled:active:mt-0"
                            >
                                {isSubmitting ? (
                                    <span className="inline-flex items-center gap-2">
                                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        Signing In...
                                    </span>
                                ) : (
                                    'Sign In'
                                )}
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="flex items-center gap-4 my-6">
                            <div className="flex-1 h-px bg-gray-200" />
                            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">or</span>
                            <div className="flex-1 h-px bg-gray-200" />
                        </div>

                        {/* Register Link */}
                        <p className="text-center text-gray-600 text-sm">
                            Don't have an account?{' '}
                            <Link
                                to="/register"
                                className="text-duo-blue font-bold hover:underline transition-all"
                            >
                                Create Account
                            </Link>
                        </p>
                    </div>

                    {/* Bottom decoration */}
                    <div className="text-center mt-6">
                        <p className="text-xs text-gray-400">
                            🌙 Learn the language of the Quran
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LoginPage;
