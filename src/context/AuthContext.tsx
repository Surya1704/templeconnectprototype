import { createContext, useCallback, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { auth, StoredUser } from "@/lib/storage";

interface AuthCtx {
  user: StoredUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
}

const Ctx = createContext<AuthCtx | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<StoredUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUser(auth.current());
    setLoading(false);
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const u = auth.login(email, password);
    setUser(u);
  }, []);

  const signup = useCallback(async (email: string, password: string, name: string) => {
    const u = auth.signup(email, password, name);
    setUser(u);
  }, []);

  const logout = useCallback(() => {
    auth.logout();
    setUser(null);
  }, []);

  const value = useMemo(() => ({ user, loading, login, signup, logout }), [user, loading, login, signup, logout]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAuth() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
