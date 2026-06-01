import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const NAV_ITEMS = [ { label: "Explore temples", href: "/explore" }, { label: "Donate", href: "/donate" }, { label: "List your temple", href: "/list-your-temple" }, { label: "About", href: "/about" } ];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false); const [mobileOpen, setMobileOpen] = useState(false); const location = useLocation();
  useEffect(() => { const handler = () => setScrolled(window.scrollY > 80); window.addEventListener("scroll", handler, { passive: true }); return () => window.removeEventListener("scroll", handler); }, []);
  useEffect(() => { setMobileOpen(false); }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-320 fc-out ${scrolled ? "bg-bg-primary/88 backdrop-blur-md border-b border-line-hair" : "bg-transparent border-b border-transparent"}`}>
      <nav className="max-w-container mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src="/faithconnect-logo.png" alt="FaithConnect" className="h-8 w-auto" />
          <span className="font-serif text-[18px] text-ink-primary tracking-tight">FaithConnect</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const active = item.href === "/explore" ? location.pathname.startsWith("/explore") : location.pathname === item.href;
            return (<Link key={item.href} to={item.href} className={`font-sans text-[14px] font-medium transition-colors duration-160 fc-out ${active ? "text-accent" : "text-ink-primary hover:text-accent"}`}>{item.label}</Link>);
          })}
        </div>
        <button className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[4px]" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close menu" : "Open menu"}>
          <span className={`block w-4 h-[1.5px] bg-ink-primary transition-transform duration-320 fc-out origin-center ${mobileOpen ? "rotate-45 translate-y-[5.5px]" : ""}`} />
          <span className={`block w-4 h-[1.5px] bg-ink-primary transition-opacity duration-160 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-4 h-[1.5px] bg-ink-primary transition-transform duration-320 fc-out origin-center ${mobileOpen ? "-rotate-45 -translate-y-[5.5px]" : ""}`} />
        </button>
      </nav>
      <div className={`md:hidden overflow-hidden transition-all duration-480 fc-out ${mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-bg-primary/95 backdrop-blur-md border-t border-line-hair px-5 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => {
            const active = item.href === "/explore" ? location.pathname.startsWith("/explore") : location.pathname === item.href;
            return (<Link key={item.href} to={item.href} className={`font-sans text-[14px] font-medium py-1 ${active ? "text-accent" : "text-ink-primary"}`}>{item.label}</Link>);
          })}
        </div>
      </div>
    </header>
  );
}
