
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const NavBar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled 
          ? "bg-white border-b shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link 
            to="/" 
            className="flex items-center text-spiritual-maroon font-bold transition-transform hover:scale-105"
          >
            {/* Temple outline logo */}
            <motion.div 
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 360 }}
              transition={{ duration: 2, repeatDelay: 5, repeat: Infinity, ease: "easeInOut" }}
              className="mr-2"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L4 9V21H20V9L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 21V12H15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 3V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
            <span className="text-xl font-cinzel">
              Temple<span className="text-spiritual-saffron">Connect</span>
            </span>
          </Link>
        </div>
        
        {/* Enhanced Search Bar */}
        <div className="my-4 md:my-0 w-full md:w-auto flex-1 max-w-xl mx-auto md:mx-0">
          <div className="hidden md:flex items-center justify-center rounded-full border shadow-sm bg-white overflow-hidden">
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
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Button variant="default" size="icon" className="rounded-full h-10 w-10 m-1 bg-spiritual-saffron hover:bg-spiritual-ochre">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-spiritual-maroon hover:bg-spiritual-maroon/5"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
        
        {/* Right side action buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/contact">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-spiritual-saffron text-spiritual-saffron hover:bg-spiritual-saffron/5 transition-all hover:shadow-md"
            >
              List Your Temple
            </Button>
          </Link>
          
          {/* Login Button */}
          <Link to="/login">
            <Button 
              variant="default" 
              size="sm"
              className="bg-spiritual-maroon text-white hover:bg-spiritual-maroon/90 transition-all flex items-center gap-2"
            >
              <User size={16} />
              Login
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className={cn(
        "hidden md:block border-t transition-colors",
        scrolled ? "border-gray-200" : "border-transparent"
      )}>
        <div className="container mx-auto px-4">
          <motion.ul 
            className="flex justify-center space-x-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <NavItem to="/" text="Home" active={location.pathname === '/'} />
            <NavItem to="/temples" text="Temples" active={location.pathname === '/temples'} />
            <NavItem to="/events" text="Events" active={location.pathname === '/events'} />
            <NavItem to="/puja-timings" text="Puja" active={location.pathname === '/puja-timings'} />
            <NavItem to="/prasad-booking" text="Prasad" active={location.pathname === '/prasad-booking'} />
            <NavItem to="/gallery" text="Gallery" active={location.pathname === '/gallery'} />
            <NavItem to="/astrology" text="Astrology" active={location.pathname === '/astrology'} />
            <NavItem to="/about-us" text="About Us" active={location.pathname === '/about-us'} />
            <NavItem to="/stay-bookings" text="Stay" active={location.pathname === '/stay-bookings'} />
            <NavItem to="/ai" text="AI" active={location.pathname === '/ai'} />
            <NavItem to="/donations" text="Donate" active={location.pathname === '/donations'} />
          </motion.ul>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t"
        >
          <div className="container mx-auto py-4 px-4">
            <ul className="flex flex-col space-y-2">
              <MobileNavItem to="/" text="Home" active={location.pathname === '/'} />
              <MobileNavItem to="/temples" text="Temples" active={location.pathname === '/temples'} />
              <MobileNavItem to="/events" text="Events" active={location.pathname === '/events'} />
              <MobileNavItem to="/puja-timings" text="Puja Timings" active={location.pathname === '/puja-timings'} />
              <MobileNavItem to="/prasad-booking" text="Prasad Booking" active={location.pathname === '/prasad-booking'} />
              <MobileNavItem to="/gallery" text="Gallery" active={location.pathname === '/gallery'} />
              <MobileNavItem to="/astrology" text="Astrology" active={location.pathname === '/astrology'} />
              <MobileNavItem to="/about-us" text="About Us" active={location.pathname === '/about-us'} />
              <MobileNavItem to="/stay-bookings" text="Stay Bookings" active={location.pathname === '/stay-bookings'} />
              <MobileNavItem to="/ai" text="AI" active={location.pathname === '/ai'} />
              <MobileNavItem to="/donations" text="Donations" active={location.pathname === '/donations'} />
              {/* Add Login to mobile menu */}
              <MobileNavItem to="/login" text="Login" active={location.pathname === '/login'} />
            </ul>
            
            <div className="mt-4 pt-4 border-t">
              <Input
                placeholder="Search temples..."
                className="mb-4"
              />
              <Button className="w-full bg-spiritual-saffron hover:bg-spiritual-ochre">Book Darshan</Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

const NavItem = ({ to, text, active = false }: { to: string; text: string; active?: boolean }) => {
  return (
    <li>
      <Link
        to={to}
        className={cn(
          "inline-block py-3 px-1 border-b-2 font-medium text-sm transition-colors",
          active
            ? "border-spiritual-saffron text-spiritual-maroon"
            : "border-transparent text-spiritual-maroon/70 hover:border-spiritual-saffron/50 hover:text-spiritual-maroon"
        )}
      >
        {text}
      </Link>
    </li>
  );
};

const MobileNavItem = ({ to, text, active = false }: { to: string; text: string; active?: boolean }) => {
  return (
    <li>
      <Link
        to={to}
        className={cn(
          "block py-2 px-3 rounded-md font-medium transition-colors",
          active
            ? "bg-spiritual-saffron/10 text-spiritual-saffron"
            : "text-spiritual-maroon hover:bg-spiritual-saffron/5"
        )}
      >
        {text}
      </Link>
    </li>
  );
};

export default NavBar;
