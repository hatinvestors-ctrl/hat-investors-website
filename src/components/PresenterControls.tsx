import { Eye, EyeOff, LogOut } from "lucide-react";
import { usePresenter } from "@/lib/presenter";

/** Floating controls, rendered only while Private Presentation Mode is on. */
export function PresenterControls() {
  const { active, showNumbers, toggleNumbers, logout } = usePresenter();
  if (!active) return null;

  const btn = "flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold transition-colors";
  return (
    <div className="fixed bottom-4 right-4 z-[60] flex items-center gap-1 p-1 rounded-full bg-[hsl(var(--navy-deep))]/95 border border-white/15 shadow-xl backdrop-blur">
      <button onClick={toggleNumbers} className={`${btn} text-white hover:bg-white/10`}>
        {showNumbers ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
        {showNumbers ? "Hide Numbers" : "Show Numbers"}
      </button>
      <button onClick={logout} className={`${btn} text-white/60 hover:text-white hover:bg-white/10`}>
        <LogOut className="h-3.5 w-3.5" />
        Exit Private Mode
      </button>
    </div>
  );
}
