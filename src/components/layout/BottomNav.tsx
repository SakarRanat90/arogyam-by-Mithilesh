import { NavLink } from "react-router-dom";
import { Home, Bell, User } from "lucide-react";

const itemBase =
  "flex flex-col items-center justify-center gap-1 text-xs py-2 px-3 transition-smooth";

export default function BottomNav() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `${itemBase} ${isActive ? "text-primary" : "text-muted-foreground"}`;

  return (
    <nav
      className="fixed bottom-0 inset-x-0 border-t bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80"
      role="navigation"
      aria-label="Bottom Navigation"
    >
      <div className="mx-auto max-w-screen-md grid grid-cols-3">
        <NavLink to="/patient" className={linkClass}>
          <Home size={22} />
          <span>Home</span>
        </NavLink>
        <NavLink to="/notifications" className={linkClass}>
          <Bell size={22} />
          <span>Alerts</span>
        </NavLink>
        <NavLink to="/patient/profile" className={linkClass}>
          <User size={22} />
          <span>Profile</span>
        </NavLink>
      </div>
    </nav>
  );
}
