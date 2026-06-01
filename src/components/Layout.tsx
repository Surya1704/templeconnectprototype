import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export function Layout() {
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
