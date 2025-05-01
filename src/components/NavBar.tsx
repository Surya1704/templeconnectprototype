
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const location = useLocation();

  return (
    <header className="border-b sticky top-0 z-50 w-full bg-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center text-orange-500 font-bold">
            {/* Updated temple outline logo */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
              <path d="M12 3L4 9V21H20V9L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 21V12H15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 3V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xl">TempleConnect</span>
          </Link>
        </div>
        
        {/* Search Bar */}
        <Link to="/temples" className="hidden md:flex items-center">
          <Button variant="default" size="sm" className="rounded-full bg-orange-500 hover:bg-orange-600 text-white">
            <Search className="h-4 w-4 mr-2" />
            <span>Search Temples</span>
          </Button>
        </Link>
      </div>
      
      {/* Main Navigation */}
      <nav className="hidden md:block border-t">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center space-x-8">
            <NavItem to="/" text="Home" active={location.pathname === '/'} />
            <NavItem to="/events" text="Events" active={location.pathname === '/events'} />
            <NavItem to="/puja-timings" text="Puja Timings" active={location.pathname === '/puja-timings'} />
            <NavItem to="/stay-bookings" text="Stay Bookings" active={location.pathname === '/stay-bookings'} />
            <NavItem to="/prasad-booking" text="Prasad Booking" active={location.pathname === '/prasad-booking'} />
            <NavItem to="/gallery" text="Gallery" active={location.pathname === '/gallery'} />
            <NavItem to="/astrology" text="Hindu Astrology" active={location.pathname === '/astrology'} />
            <NavItem to="/contact" text="Contact" active={location.pathname === '/contact'} />
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
