
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import logo from "@/assets/faithconnect-logo.jpg";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/temples", label: "Explore Temples" },
  { to: "/donations", label: "Donate" },
  { to: "/onboard-temple", label: "List Your Temple" },
  { to: "/about-us", label: "About" },
];

const NavBar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-spiritual-ivory/90 backdrop-blur-md border-b border-spiritual-sandstone/40 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center text-spiritual-maroon font-semibold transition-transform hover:scale-[1.02]"
        >
          <img
            src={logo}
            alt="Faith Connect"
            className="w-9 h-9 mr-2.5 object-contain mix-blend-multiply"
          />
          <span className="text-xl font-fraunces tracking-tight">
            Faith<span className="text-spiritual-saffron">Connect</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center">
          <motion.ul
            className="flex items-center space-x-8"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            {NAV_LINKS.map((link) => (
              <NavItem
                key={link.to}
                to={link.to}
                text={link.label}
                active={location.pathname === link.to}
              />
            ))}
          </motion.ul>
        </nav>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-spiritual-maroon hover:bg-spiritual-maroon/5"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-spiritual-ivory border-t border-spiritual-sandstone/40"
        >
          <div className="container mx-auto py-4 px-4">
            <ul className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => (
                <MobileNavItem
                  key={link.to}
                  to={link.to}
                  text={link.label}
                  active={location.pathname === link.to}
                  onClick={() => setMobileMenuOpen(false)}
                />
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </header>
  );
};

const NavItem = ({ to, text, active = false }: { to: string; text: string; active?: boolean }) => (
  <li>
    <Link
      to={to}
      className={cn(
        "inline-block py-2 text-sm font-medium tracking-wide transition-colors relative",
        active
          ? "text-spiritual-maroon after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-spiritual-saffron"
          : "text-spiritual-maroon/70 hover:text-spiritual-maroon"
      )}
    >
      {text}
    </Link>
  </li>
);

const MobileNavItem = ({
  to,
  text,
  active = false,
  onClick,
}: {
  to: string;
  text: string;
  active?: boolean;
  onClick?: () => void;
}) => (
  <li>
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        "block py-2.5 px-3 rounded-md font-medium transition-colors",
        active
          ? "bg-spiritual-saffron/10 text-spiritual-saffron"
          : "text-spiritual-maroon hover:bg-spiritual-saffron/5"
      )}
    >
      {text}
    </Link>
  </li>
);

export default NavBar;
