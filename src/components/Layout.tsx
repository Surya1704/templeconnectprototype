
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useIsMobile } from "@/hooks/use-mobile";

const Layout = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className={`flex-grow ${isMobile ? 'pt-2 pb-16' : 'pt-4 pb-20'}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
