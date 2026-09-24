"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { apiFetch as fetch } from "../../lib/api";

const AuthContext = createContext({ user: null, loading: true, refresh: async () => {} });

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const refresh = async () => {
    try {
      const response = await fetch("/api/auth/me", { cache: "no-store" });
      const data = await response.json();
      setUser(response.ok && data.success ? data.user : null);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  return <AuthContext.Provider value={{ user, loading, refresh }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
