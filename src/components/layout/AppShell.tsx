import { ReactNode } from "react";
import BottomNav from "./BottomNav";

interface AppShellProps {
  title?: string;
  children: ReactNode;
  showNav?: boolean;
}

export default function AppShell({ title = "Arogyam", children, showNav = true }: AppShellProps) {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 border-b bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="mx-auto max-w-screen-md px-4 py-3 flex items-center justify-between">
          <div className="font-semibold tracking-tight text-lg">{title}</div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="hidden sm:inline">Your Digital Health Partner</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-screen-md px-4 pb-24 pt-6">{children}</main>

      {showNav && <BottomNav />}
    </div>
  );
}
