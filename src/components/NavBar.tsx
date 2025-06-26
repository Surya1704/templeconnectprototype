
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const NavBar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { to: "/", text: "Home" },
    { to: "/temples", text: "Temples" },
    { to: "/jyotirlingas", text: "Jyotirlingas" },
    { to: "/events", text: "Events" },
    { to: "/puja-timings", text: "Puja Timings" },
    { to: "/donate", text: "Donate" },
    { to: "/about", text: "About" },
    { to: "/contact", text: "Contact" },
  ];

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled 
          ? "bg-white/95 backdrop-blur-sm border-b shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center text-spiritual-maroon font-bold transition-transform hover:scale-105"
          >
            <motion.div 
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 360 }}
              transition={{ duration: 2, repeatDelay: 5, repeat: Infinity, ease: "easeInOut" }}
              className="mr-2"
            >
              <img 
                src="/lovable-uploads/5ef6ad5e-6ea5-4e4f-b2da-57175381c635.png" 
                alt="Temple Icon" 
                className="w-8 h-8"
              />
            </motion.div>
            <span className="text-xl font-cinzel">
              Temple<span className="text-spiritual-saffron">Connect</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "font-medium text-sm transition-colors hover:text-spiritual-saffron",
                  location.pathname === item.to
                    ? "text-spiritual-saffron"
                    : "text-spiritual-maroon/70"
                )}
              >
                {item.text}
              </Link>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-spiritual-maroon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-spiritual-maroon/10"
          >
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "font-medium py-2 px-3 rounded-md transition-colors",
                    location.pathname === item.to
                      ? "bg-spiritual-saffron/10 text-spiritual-saffron"
                      : "text-spiritual-maroon hover:bg-spiritual-saffron/5"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
