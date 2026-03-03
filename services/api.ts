import axios from 'axios';

/**
 * Centralized Axios instance for all API requests.
 * 
 * - `withCredentials: true` ensures cookies (httpOnly JWT) are sent with every request.
 * - The backend sets the token as an httpOnly cookie on login, so we never handle
 *   the raw token in JavaScript — it's always passed automatically via cookies.
 */
const api = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  withCredentials: true, // Always send cookies with requests
  headers: {
    'Content-Type': 'application/json',
  },
});

// ── Response Interceptor ──────────────────────────────────────────────
// Automatically handle 401 responses by redirecting to login
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // If we get a 401 and we're not already on the login page, redirect
      const isAuthPage =
        window.location.pathname === '/login' ||
        window.location.pathname === '/register';

      if (!isAuthPage) {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default api;
