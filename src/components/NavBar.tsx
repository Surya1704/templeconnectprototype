import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/brand/Logo";

// Six routes only (master prompt §6).
const NAV_LINKS = [
  { to: "/explore", label: "Explore" },
  { to: "/donate", label: "Donate" },
  { to: "/list-your-temple", label: "List Your Temple" },
  { to: "/about", label: "About" },
];

const NavBar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-ground-ivory transition-[border-color] duration-300",
        scrolled
          ? "border-b border-[hsl(var(--line-hair))]"
          : "border-b border-transparent"
      )}
      style={{ height: 72 }}
    >
      <div className="container mx-auto h-full px-6 flex items-center justify-between">
        <Logo animated={isHome} size={32} />

        {/* Desktop nav — right-aligned, asymmetric (§14.1) */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <NavItem
              key={link.to}
              to={link.to}
              text={link.label}
              active={location.pathname === link.to || location.pathname.startsWith(link.to + "/")}
            />
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 text-ink-espresso"
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
        </button>
      </div>

      {/* Full-screen mobile drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-0 top-[72px] bg-ground-ivory z-40"
          >
            <ul className="flex flex-col items-start gap-6 px-8 pt-12">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-fraunces text-[32px] tracking-tight text-ink-espresso"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const NavItem = ({ to, text, active }: { to: string; text: string; active: boolean }) => (
  <Link
    to={to}
    className={cn(
      "relative font-sans text-[14px] font-normal transition-colors duration-200",
      active ? "text-ink-espresso" : "text-ink-walnut hover:text-ink-espresso"
    )}
  >
    {text}
    <span
      className={cn(
        "absolute left-0 -bottom-1 h-[2px] w-full bg-copper-500 origin-left transition-transform duration-300 ease-fc-out",
        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
      )}
      style={{ transformOrigin: "left center" }}
    />
  </Link>
);

export default NavBar;
