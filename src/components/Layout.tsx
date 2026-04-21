import { Outlet, useLocation } from "react-router-dom";
import BottomNav from "./BottomNav";

export default function Layout() {
  const location = useLocation();
  // Hide bottom nav on auth pages and reels (reels is fullscreen)
  const hideNav = ["/login", "/signup"].includes(location.pathname) || location.pathname.startsWith("/reels");

  return (
    <div className="min-h-screen bg-background">
      <main className={hideNav ? "" : "pb-20"}>
        <Outlet />
      </main>
      {!hideNav && <BottomNav />}
    </div>
  );
}
