import { useEffect } from "react";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import { isTelegram, ready as telegramReady } from "@/lib/telegram";

export function Layout() {
  useEffect(() => {
    if (!isTelegram()) return;
    telegramReady();
    document.documentElement.setAttribute("data-tg", "1");
  }, []);

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
