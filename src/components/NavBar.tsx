
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const NavBar = () => {
  const location = useLocation();

  return (
    <header className="border-b sticky top-0 z-50 w-full bg-white">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between">
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
        
        {/* Enhanced Search Bar */}
        <div className="my-4 md:my-0 w-full md:w-auto flex-1 max-w-xl mx-auto md:mx-0">
          <div className="flex items-center justify-center rounded-full border shadow-sm bg-white overflow-hidden">
            <div className="flex divide-x flex-1">
              <div className="flex-1 px-3 py-2">
                <Select>
                  <SelectTrigger className="border-0 shadow-none h-auto p-0 focus:ring-0">
                    <SelectValue placeholder="Any Temple" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Temple</SelectItem>
                    <SelectItem value="tirupati">Tirupati</SelectItem>
                    <SelectItem value="vaishno-devi">Vaishno Devi</SelectItem>
                    <SelectItem value="kedarnath">Kedarnath</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex-1 px-3 py-2">
                <Select>
                  <SelectTrigger className="border-0 shadow-none h-auto p-0 focus:ring-0">
                    <SelectValue placeholder="Any Date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Date</SelectItem>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="tomorrow">Tomorrow</SelectItem>
                    <SelectItem value="this-week">This Week</SelectItem>
                    <SelectItem value="this-month">This Month</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex-1 px-3 py-2">
                <Select>
                  <SelectTrigger className="border-0 shadow-none h-auto p-0 focus:ring-0">
                    <SelectValue placeholder="Darshan Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Type</SelectItem>
                    <SelectItem value="special">Special</SelectItem>
                    <SelectItem value="regular">Regular</SelectItem>
                    <SelectItem value="vip">VIP</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Button variant="default" size="icon" className="rounded-full h-10 w-10 m-1 bg-orange-500 hover:bg-orange-600">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Right side action button */}
        <div className="ml-4 hidden md:block">
          <Link to="/contact">
            <Button variant="outline" size="sm" className="border-orange-500 text-orange-500 hover:bg-orange-50">
              List Your Temple
            </Button>
          </Link>
        </div>
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
            <NavItem to="/donations" text="Donations" active={location.pathname === '/donations'} />
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
