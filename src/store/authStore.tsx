import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { baseURL, endpoints, version } from '@/api/api';
import { toast } from 'sonner';
import { logDebug, logError, logWarn } from '@/utils/logger';
import type { PersistedUserInfo, UserData } from '@/types/types';

interface AuthState {
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  userInfo: UserData | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  fetchUserInfo: () => Promise<void>;
  checkAuth: () => Promise<void>;
  clearError: () => void;
}

class AuthAPI {
  private static getHeaders() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  static async login(username: string, password: string) {
    const response = await fetch(`${baseURL}${endpoints.login}`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ username, password }),
      credentials: 'include',
    });

    const data = await response.json();
    return { response, data };
  }

  static async getCurrentUser() {
    const response = await fetch(`${baseURL}${endpoints.currentUser}`, {
      method: 'GET',
      headers: this.getHeaders(),
      credentials: 'include',
    });

    const data = await response.json();
    return { response, data };
  }


  static async logout() {
    const response = await fetch(`${baseURL}${endpoints.logout}`, {
      method: 'POST',
      headers: this.getHeaders(),
      credentials: 'include',
    });

    const data = await response.json();
    return { response, data };
  }
}

class CookieManager {
  static set(
    name: string,
    value: string,
    options: {
      expires?: number;
      secure?: boolean;
      sameSite?: 'Strict' | 'Lax' | 'None';
    } = {}
  ) {
    let cookieString = `${name}=${encodeURIComponent(value)}`;

    if (options.expires) {
      const date = new Date();
      date.setTime(date.getTime() + options.expires * 24 * 60 * 60 * 1000);
      cookieString += `; expires=${date.toUTCString()}`;
    }

    cookieString += '; path=/';

    if (options.secure && process.env.NODE_ENV === 'production')
      cookieString += '; Secure';

    if (options.sameSite) cookieString += `; SameSite=${options.sameSite}`;

    document.cookie = cookieString;
  }

  static delete(name: string) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; ${process.env.NODE_ENV === 'production' ? 'Secure;' : ''
      } SameSite=Lax;`;
  }

  static check(name: string): boolean {
    return document.cookie.includes(`${name}=true`);
  }
}

const handleAuthError = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  return 'An unknown error occurred';
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      loading: false,
      error: null,
      userInfo: null,

      clearError: () => set({ error: null }),


      login: async (username: string, password: string): Promise<boolean> => {
        try {
          set({ loading: true, error: null });

          const { response, data } = await AuthAPI.login(username, password);

          if (!response.ok) {
            if (response.status === 401 || response.status === 400) {
              throw new Error(
                'Incorrect login information, please check your account and password'
              );
            }
            throw new Error(data.message || 'Login failed');
          }

          if (data.status === 'success') {
            CookieManager.set('isAuthenticated', 'true', {
              expires: 7,
              secure: true,
              sameSite: 'Lax',
            });

            await get().checkAuth();
            logDebug('User info fetched successfully');
            toast.success('Login successful! Redirecting to home page..');
            return true;
          } else {
            throw new Error(data.message || 'Login failed');
          }
        } catch (error) {
          const errorMessage = handleAuthError(error);

          set({
            isAuthenticated: false,
            userInfo: null,
            loading: false,
            error: errorMessage,
          });

          CookieManager.delete('isAuthenticated');
          localStorage.removeItem('auth-storage');
          toast.error(errorMessage);
          return false;
        }
      },


      fetchUserInfo: async () => {
        if (!get().isAuthenticated) return;

        try {
          set({ loading: true });

          const { response, data } = await AuthAPI.getCurrentUser();

          if (!response.ok) {
            throw new Error('Failed to fetch user info');
          }

          if (data.status === 'success' && data.data) {
            set({ userInfo: data.data, loading: false });
          } else {
            throw new Error('Invalid user data received');
          }
        } catch (error) {
          const errorMessage = handleAuthError(error);
          set({ loading: false, error: errorMessage });
          toast.error(errorMessage);
        }
      },


      logout: async () => {
        try {
          set({ loading: true });

          try {
            const { response } = await AuthAPI.logout();

            if (!response.ok) {
              console.warn(
                'Server logout failed, continuing with local logout'
              );
            }
          } catch (error) {
            logWarn('Server logout error:', error);
          }

          CookieManager.delete('isAuthenticated');
          localStorage.removeItem('auth-storage');

          set({
            isAuthenticated: false,
            userInfo: null,
            loading: false,
            error: null,
          });

          toast.success('Log out successfully!');
          window.location.href = '/login';
        } catch (error) {
          logError('Catastrophic error during logout:', error);

          CookieManager.delete('isAuthenticated');
          localStorage.removeItem('auth-storage');

          set({
            isAuthenticated: false,
            userInfo: null,
            loading: false,
            error: handleAuthError(error),
          });

          window.location.href = '/login';
        }
      },

      checkAuth: async () => {
        if (!CookieManager.check('isAuthenticated')) {
          set({ isAuthenticated: false, userInfo: null, loading: false });
          localStorage.removeItem('auth-storage');
          return;
        }

        try {
          set((state) => ({ ...state, loading: true }));

          const { response, data } = await AuthAPI.getCurrentUser();

          if (!response.ok) {
            throw new Error('Failed to fetch user data');
          }

          if (data.status === 'success' && data.data) {
            const userRole = data.data.role;
            const allowedRoles = ['admin', 'client', 'freelancer'];

            if (!allowedRoles.includes(userRole)) {
              logWarn(`Unauthorized role: ${userRole}. Logging out...`);
              toast.error('You do not have access. Logging out...');

              CookieManager.delete('isAuthenticated');
              localStorage.removeItem('auth-storage');

              set({
                isAuthenticated: false,
                userInfo: null,
                loading: false,
                error: null,
              });

              window.location.href = '/login';
              return;
            }

            CookieManager.set('isAuthenticated', 'true', {
              expires: 7,
              secure: true,
              sameSite: 'Lax',
            });

            set({
              isAuthenticated: true,
              userInfo: data.data,
              loading: false,
            });
          } else {
            throw new Error('Invalid user data received');
          }
        } catch (error) {
          logError('checkAuth error:', error);

          CookieManager.delete('isAuthenticated');
          localStorage.removeItem('auth-storage');

          set({
            isAuthenticated: false,
            userInfo: null,
            loading: false,
            error: null,
          });

          window.location.href = '/login';
        }
      },
    }),
    {
      name: 'auth-storage',
      storage:
        typeof window !== 'undefined'
          ? createJSONStorage(() => localStorage)
          : undefined,
      partialize: (
        state: AuthState
      ): { isAuthenticated: boolean; userInfo: PersistedUserInfo | null } => ({
        isAuthenticated: state.isAuthenticated,
        userInfo: state.userInfo
          ? {
            _id: state.userInfo._id,
            role: state.userInfo.role,
            fullname: state.userInfo.fullname,
            email: state.userInfo.email,
            username: state.userInfo.username,
          }
          : null,
      }),
    }
  )
);

export const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
  const headers = new Headers(options.headers);

  // Add auth headers
  headers.append('Content-Type', 'application/json');
  headers.append('api-key', process.env.NEXT_PUBLIC_API_KEY || '');

  try {
    const response = await fetch(url, {
      ...options,
      headers,
      credentials: 'include',
    });

    if (response.status === 401) {
      useAuthStore.getState().logout();
      return null;
    }

    return response;
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
};
