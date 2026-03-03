import api from './api';

// ── Types ─────────────────────────────────────────────────────────────

export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  userID?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  data: {
    user?: User;
    _id?: string;
    name?: string;
    email?: string;
    role?: string;
  };
  message?: string;
}

// ── Auth API Calls ────────────────────────────────────────────────────

/**
 * Register a new user.
 * The backend returns user data but does NOT set a cookie on register.
 */
export const register = async (payload: RegisterPayload): Promise<AuthResponse> => {
  const { data } = await api.post<AuthResponse>('/users/register', payload);
  return data;
};

/**
 * Login a user.
 * The backend sets the JWT as an httpOnly cookie named 'token'.
 * We never touch the token directly — it's handled entirely via cookies.
 */
export const login = async (payload: LoginPayload): Promise<AuthResponse> => {
  const { data } = await api.post<AuthResponse>('/users/login', payload);
  return data;
};

/**
 * Logout the current user.
 * The backend clears the httpOnly cookie and bumps token version.
 */
export const logout = async (): Promise<void> => {
  await api.post('/users/logout');
};

/**
 * Get user profile by ID.
 * Used to validate the current session on app load.
 */
export const getUserProfile = async (userId: string): Promise<AuthResponse> => {
  const { data } = await api.get<AuthResponse>(`/users/${userId}`);
  return data;
};
