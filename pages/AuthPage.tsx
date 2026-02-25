import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { BookOpen, Mail, Lock, User, ArrowRight, AlertCircle, Loader2, Sparkles } from 'lucide-react';

const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const { login, register } = useAuth();

  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      let result;
      if (mode === 'register') {
        if (!name.trim()) {
          setError('Please enter your name');
          setIsSubmitting(false);
          return;
        }
        result = await register(name.trim(), email.trim(), password);
      } else {
        result = await login(email.trim(), password);
      }

      if (result.success) {
        navigate('/learning');
      } else {
        setError(result.message || 'Something went wrong');
      }
    } catch {
      setError('An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleMode = () => {
    setMode(mode === 'login' ? 'register' : 'login');
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-duo-green/10 via-white to-duo-blue/10 relative overflow-hidden flex items-center justify-center p-4">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-duo-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-duo-blue/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-duo-yellow/5 rounded-full blur-3xl" />

      <div className="w-full max-w-md relative z-10">
        {/* Logo & Title */}
        <div className="text-center mb-8 animate-fade-up">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md px-6 py-3 rounded-2xl shadow-sm border border-gray-100 mb-6">
            <BookOpen className="w-8 h-8 text-duo-green" />
            <span className="text-2xl font-black text-gray-800 tracking-tight">QuranLingo</span>
          </div>

          <h1 className="text-3xl font-kufic font-bold text-gray-800 mb-2">
            {mode === 'login' ? 'Welcome Back!' : 'Join QuranLingo'}
          </h1>
          <p className="text-gray-500 text-base">
            {mode === 'login'
              ? 'Continue your Quranic Arabic journey'
              : 'Start learning Quranic Arabic today'}
          </p>
        </div>

        {/* Auth Card */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-gray-100 p-8 animate-fade-up" style={{ animationDelay: '100ms' }}>
          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border-2 border-red-100 rounded-2xl flex items-start gap-3 animate-pop">
              <AlertCircle className="w-5 h-5 text-duo-red flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700 font-medium">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name (Register only) */}
            {mode === 'register' && (
              <div className="animate-fade-up">
                <label className="block text-sm font-bold text-gray-600 uppercase tracking-widest mb-2">Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl text-gray-800 font-semibold placeholder-gray-400 focus:outline-none focus:border-duo-blue focus:bg-white transition-all text-base"
                    required
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm font-bold text-gray-600 uppercase tracking-widest mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl text-gray-800 font-semibold placeholder-gray-400 focus:outline-none focus:border-duo-blue focus:bg-white transition-all text-base"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-bold text-gray-600 uppercase tracking-widest mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl text-gray-800 font-semibold placeholder-gray-400 focus:outline-none focus:border-duo-blue focus:bg-white transition-all text-base"
                  required
                  minLength={6}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-duo-green hover:bg-duo-green-hover text-white rounded-2xl font-bold text-lg shadow-[0_4px_0_0_var(--color-primary-dark)] active:shadow-none active:translate-y-[4px] transition-all flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>{mode === 'login' ? 'Logging in...' : 'Creating account...'}</span>
                </>
              ) : (
                <>
                  <span>{mode === 'login' ? 'Login' : 'Create Account'}</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Toggle Mode */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}
              <button
                onClick={toggleMode}
                className="ml-2 text-duo-blue font-bold hover:underline transition-all"
              >
                {mode === 'login' ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </div>
        </div>

        {/* Guest Access */}
        <div className="mt-6 text-center animate-fade-up" style={{ animationDelay: '200ms' }}>
          <button
            onClick={() => navigate('/learning')}
            className="text-gray-400 text-sm font-semibold hover:text-gray-600 transition-all flex items-center justify-center gap-2 mx-auto"
          >
            <Sparkles className="w-4 h-4" />
            <span>Continue as Guest (offline mode)</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
