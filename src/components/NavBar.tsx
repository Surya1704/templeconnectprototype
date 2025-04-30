
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Globe, Menu, User } from "lucide-react";
import { cn } from "@/lib/utils";

const NavBar = () => {
  return (
    <header className="border-b sticky top-0 z-50 w-full bg-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center text-orange-500 font-bold">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 16V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 6V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 12H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xl">TempleConnect</span>
          </Link>
        </div>
        
        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-white border rounded-full p-2 px-4 shadow-sm">
          <Button variant="ghost" size="sm" className="rounded-full text-slate-500">Any Temple</Button>
          <div className="h-4 w-px bg-slate-200 mx-2"></div>
          <Button variant="ghost" size="sm" className="rounded-full text-slate-500">Any Date</Button>
          <div className="h-4 w-px bg-slate-200 mx-2"></div>
          <Button variant="ghost" size="sm" className="rounded-full text-slate-500">Darshan Type</Button>
          <Button size="icon" variant="default" className="ml-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white">
            <Search className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Right side nav items */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild className="hidden sm:flex text-orange-500 hover:text-orange-600">
            <Link to="/contact">Edit Content</Link>
          </Button>
          
          <Button variant="ghost" asChild className="hidden md:flex text-orange-500 hover:text-orange-600">
            <Link to="/contact">List Your Temple</Link>
          </Button>
          
          <Button variant="ghost" size="icon" className="rounded-full">
            <Globe className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center rounded-full border px-2 py-1 shadow-sm">
            <Menu className="h-4 w-4 mr-2" />
            <User className="h-4 w-4" />
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className="hidden md:block border-t">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center space-x-8">
            <NavItem to="/" text="Home" />
            <NavItem to="/events" text="Events" />
            <NavItem to="/puja-timings" text="Puja Timings" />
            <NavItem to="/stay-bookings" text="Stay Bookings" />
            <NavItem to="/gallery" text="Gallery" />
            <NavItem to="/contact" text="Contact" />
          </ul>
        </div>
      </nav>
    </header>
  );
};

const NavItem = ({ to, text, active = false }: { to: string; text: string; active?: boolean }) => {
  return (
    <li>
      <Link
        to={to}
        className={cn(
          "inline-block py-3 px-1 border-b-2 font-medium text-sm",
          active
            ? "border-orange-500 text-orange-500"
            : "border-transparent hover:border-orange-500 hover:text-orange-500"
        )}
      >
        {text}
      </Link>
    </li>
  );
};

export default NavBar;
