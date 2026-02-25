/**
 * API Service Layer
 * 
 * Centralized HTTP client for communicating with the QuranLingo backend.
 * All API calls go through this service.
 * 
 * The backend uses httpOnly cookies for auth, so we need credentials: 'include'.
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api/v1';

interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
}

class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

async function request<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
  const url = `${API_BASE_URL}${endpoint}`;

  const config: RequestInit = {
    ...options,
    credentials: 'include', // Required for httpOnly cookies
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new ApiError(data.message || 'Something went wrong', response.status);
    }

    return data;
  } catch (error) {
    if (error instanceof ApiError) throw error;
    throw new ApiError('Network error — please check your connection', 0);
  }
}

// ─── Auth APIs ────────────────────────────────────────────────────

export const authApi = {
  register: (name: string, email: string, password: string) =>
    request<any>('/users/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    }),

  login: (email: string, password: string) =>
    request<{ user: any }>('/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),

  getProfile: (id: string) =>
    request<any>(`/users/${id}`),

  logout: () =>
    request<any>('/users/logout', { method: 'POST' }),
};

// ─── Curriculum APIs ──────────────────────────────────────────────

export interface ApiPhase {
  phaseId: string;
  name: string;
  description: string;
  chapters: ApiChapter[];
}

export interface ApiChapter {
  chapterId: string;
  name: string;
  description: string;
  wordCount: number;
}

export interface ApiWord {
  wordId: string;
  arabic: string;
  transliteration: string;
  translations: {
    en: string;
    ur?: string;
    ur_en?: string;
  };
  gender?: 'male' | 'female' | 'plural';
  examples: {
    arabic: string;
    translation: string;
    translations?: {
      en: string;
      ur?: string;
      ur_en?: string;
    };
    ref: string;
  }[];
}

export interface ApiChapterDetail {
  phaseId: string;
  chapterId: string;
  name: string;
  description: string;
  words: ApiWord[];
}

export const curriculumApi = {
  /** Get all phases with chapters (no words) */
  getOverview: () =>
    request<ApiPhase[]>('/curriculum'),

  /** Get a specific chapter with all its words */
  getChapterWords: (phaseId: string, chapterId: string) =>
    request<ApiChapterDetail>(`/curriculum/${phaseId}/${chapterId}`),
};

// ─── Progress APIs ────────────────────────────────────────────────

export interface MasteryDataApi {
  strength: number;
  lastTested: number;
  markedHard?: boolean;
}

export interface UserProgressData {
  completedLevels: string[];
  wordMastery: Record<string, MasteryDataApi>;
  streak: number;
  lastActiveDate: string;
}

export const progressApi = {
  /** Record that a word was read */
  recordWordRead: (wordId: string) =>
    request<any>('/progress/read-word', {
      method: 'POST',
      body: JSON.stringify({ wordId }),
    }),

  /** Get full word history */
  getHistory: () =>
    request<any[]>('/progress/history'),

  /** Get progress summary */
  getSummary: () =>
    request<{ currentWordId: string; totalWordsRead: number }>('/progress/summary'),

  /** Get full user progress (completedLevels, wordMastery, streak) */
  getUserProgress: () =>
    request<UserProgressData>('/progress/user-progress'),

  /** Save full user progress */
  saveUserProgress: (data: Partial<UserProgressData>) =>
    request<UserProgressData>('/progress/user-progress', {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
};

export { ApiError };
export default { authApi, curriculumApi, progressApi };

