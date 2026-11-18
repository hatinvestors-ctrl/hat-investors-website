// Private Presentation Mode — client state.
// Public visitors never call the server: the API is only used when the
// "on" flag below has been set by a successful login at /admin.
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

type Financials = Record<string, Record<string, string>>;
export type LoginResult = "ok" | "wrong-password" | "error";

type PresenterState = {
  active: boolean;
  showNumbers: boolean;
  financials: Financials | null;
  login(password: string): Promise<LoginResult>;
  logout(): Promise<void>;
  toggleNumbers(): void;
};

const API = "/.netlify/functions/presenter";
const KEY_ON = "hat_presenter_on";
const KEY_LAST = "hat_presenter_last";
const KEY_SHOW = "hat_presenter_show";
const IDLE_MS = 60 * 60 * 1000;
const KEEPALIVE_MS = 10 * 60 * 1000;

const store = {
  get(key: string) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key: string, v: string) { try { localStorage.setItem(key, v); } catch { /* ignore */ } },
  del(key: string) { try { localStorage.removeItem(key); } catch { /* ignore */ } },
};

const PresenterContext = createContext<PresenterState | null>(null);

export function PresenterProvider({ children }: { children: React.ReactNode }) {
  const [financials, setFinancials] = useState<Financials | null>(null);
  const [showNumbers, setShowNumbers] = useState(store.get(KEY_SHOW) !== "0");
  const lastFetch = useRef(0);

  const clear = useCallback(() => {
    store.del(KEY_ON);
    store.del(KEY_LAST);
    setFinancials(null);
  }, []);

  const fetchFinancials = useCallback(async () => {
    try {
      const res = await fetch(`${API}/financials`, { credentials: "same-origin" });
      if (res.status === 401) { clear(); return false; } // session ended
      if (!res.ok) return false; // temporary server error: keep current state
      const body = await res.json();
      setFinancials(body.financials);
      lastFetch.current = Date.now();
      return true;
    } catch {
      return false; // network hiccup: keep current state
    }
  }, [clear]);

  const logout = useCallback(async () => {
    clear();
    // keepalive: finish clearing the server cookie even if the tab is closed right away
    try { await fetch(`${API}/logout`, { method: "POST", credentials: "same-origin", keepalive: true }); } catch { /* ignore */ }
  }, [clear]);

  const login = useCallback(async (password: string): Promise<LoginResult> => {
    try {
      const res = await fetch(`${API}/login`, {
        method: "POST",
        credentials: "same-origin",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.status === 401) return "wrong-password";
      if (!res.ok) return "error";
      store.set(KEY_ON, "1");
      store.set(KEY_LAST, String(Date.now()));
      return (await fetchFinancials()) ? "ok" : "error";
    } catch {
      return "error";
    }
  }, [fetchFinancials]);

  const toggleNumbers = useCallback(() => {
    setShowNumbers((s) => { store.set(KEY_SHOW, s ? "0" : "1"); return !s; });
  }, []);

  // Restore session on load (only if this browser logged in before).
  useEffect(() => {
    if (store.get(KEY_ON) !== "1") return;
    const last = Number(store.get(KEY_LAST) ?? 0);
    if (Date.now() - last > IDLE_MS) { logout(); return; }
    fetchFinancials();
  }, [fetchFinancials, logout]);

  // While logged in: track activity, expire after 60 idle minutes, keep server session alive.
  const active = financials !== null;
  useEffect(() => {
    if (!active) return;
    let throttle = 0;
    const onActivity = () => {
      const now = Date.now();
      if (now - throttle < 5000) return;
      throttle = now;
      store.set(KEY_LAST, String(now));
    };
    const events = ["pointerdown", "keydown", "scroll", "touchstart"] as const;
    events.forEach((e) => window.addEventListener(e, onActivity, { passive: true }));
    const timer = window.setInterval(() => {
      const now = Date.now();
      const idle = now - Number(store.get(KEY_LAST) ?? 0);
      if (idle > IDLE_MS) logout();
      else if (idle < KEEPALIVE_MS && now - lastFetch.current > KEEPALIVE_MS) fetchFinancials();
    }, 60 * 1000);
    return () => {
      events.forEach((e) => window.removeEventListener(e, onActivity));
      window.clearInterval(timer);
    };
  }, [active, fetchFinancials, logout]);

  return (
    <PresenterContext.Provider value={{ active, showNumbers, financials, login, logout, toggleNumbers }}>
      {children}
    </PresenterContext.Provider>
  );
}

export function usePresenter(): PresenterState {
  const ctx = useContext(PresenterContext);
  if (!ctx) throw new Error("usePresenter must be used inside PresenterProvider");
  return ctx;
}
