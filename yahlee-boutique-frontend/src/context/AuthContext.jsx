/**
 * Yahlee Boutique - Auth Context
 * Provides authentication state (user, login, register, logout) globally.
 */

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import * as api from '../services/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // checking stored token on mount
  const [error, setError] = useState(null);

  // ── On mount: restore session from stored token ──────────────────────────
  useEffect(() => {
    if (api.hasToken()) {
      api
        .getMe()
        .then((me) => setUser(me))
        .catch(() => {
          // Token expired or invalid — clear it
          api.removeToken();
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  // ── Login ─────────────────────────────────────────────────────────────────
  const login = useCallback(async (email, password) => {
    setError(null);
    const data = await api.login({ email, password });
    api.saveToken(data.access_token);
    const me = await api.getMe();
    setUser(me);
    return me;
  }, []);

  // ── Register ──────────────────────────────────────────────────────────────
  const register = useCallback(async (email, password, full_name) => {
    setError(null);
    await api.register({ email, password, full_name });
    // Auto-login after registration
    return login(email, password);
  }, [login]);

  // ── Logout ────────────────────────────────────────────────────────────────
  const logout = useCallback(() => {
    api.removeToken();
    setUser(null);
  }, []);

  // ── Update profile ────────────────────────────────────────────────────────
  const updateProfile = useCallback(async (data) => {
    const updated = await api.updateMe(data);
    setUser(updated);
    return updated;
  }, []);

  const value = {
    user,
    loading,
    error,
    setError,
    isAuthenticated: Boolean(user),
    login,
    register,
    logout,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/**
 * Hook to consume auth context.
 * Usage: const { user, login, logout, isAuthenticated } = useAuth();
 */
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used inside <AuthProvider>');
  }
  return ctx;
}
