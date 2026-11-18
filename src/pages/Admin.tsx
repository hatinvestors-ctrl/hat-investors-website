import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";
import { usePresenter } from "@/lib/presenter";

const Admin = () => {
  const { active, login } = usePresenter();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (active) navigate("/our-projects", { replace: true });
  }, [active, navigate]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    const result = await login(password);
    setBusy(false);
    if (result === "ok") navigate("/our-projects");
    else setError(result === "wrong-password" ? "Incorrect password" : "Couldn't load the numbers, please try again");
  };

  return (
    <section className="bg-navy-deep min-h-screen flex items-center justify-center px-4 py-32">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm bg-[hsl(var(--navy-mid))] border border-white/10 rounded-2xl p-8 space-y-5"
      >
        <div className="flex items-center gap-2 text-[hsl(var(--gold))]">
          <Lock className="h-4 w-4" />
          <h1 className="text-sm font-bold uppercase tracking-widest">Private Mode</h1>
        </div>
        <input
          type="password"
          autoFocus
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[hsl(var(--gold))]/60"
        />
        {error && <p className="text-sm text-red-400">{error}</p>}
        <button type="submit" disabled={busy || !password} className="btn-gold w-full py-3 rounded-xl font-bold disabled:opacity-60">
          {busy ? "Checking…" : "Enter"}
        </button>
      </form>
    </section>
  );
};

export default Admin;
