import { useEffect } from "react";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import { isTelegram, ready as telegramReady } from "@/lib/telegram";

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    if (!isTelegram()) return;
    telegramReady();
    document.documentElement.setAttribute("data-tg", "1");
  }, []);

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-bg-primary">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
