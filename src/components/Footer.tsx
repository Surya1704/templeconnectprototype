import { Link } from "react-router-dom";
import { Twitter, Instagram, Linkedin } from "lucide-react";
const FOOTER_LINKS = {
  Discover: [ { label: "Explore temples", href: "/explore" }, { label: "Jyotirlingas", href: "/explore?tag=jyotirlinga" }, { label: "Festivals", href: "/explore?type=festival" }, { label: "Pilgrimage routes", href: "/explore?type=pilgrimage" } ],
  Devotion: [ { label: "Donate", href: "/donate" }, { label: "Transparency report", href: "/donate#transparency" }, { label: "Tax (80G) info", href: "/donate#tax" } ],
  "For temples": [ { label: "List your temple", href: "/list-your-temple" }, { label: "CRM", href: "/list-your-temple#modules" }, { label: "Pilot programme", href: "/list-your-temple#pilot" }, { label: "Case studies", href: "/list-your-temple#cases" } ],
  Company: [ { label: "About", href: "/about" }, { label: "Press", href: "/about#press" }, { label: "Contact", href: "/about#contact" }, { label: "Privacy", href: "/privacy" }, { label: "Terms", href: "/terms" } ],
};

export function Footer() {
  return (
    <footer className="bg-bg-deep text-bg-card">
      <div className="max-w-container mx-auto px-5 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2"><img src="/faithconnect-logo.png" alt="FaithConnect" className="h-8 w-auto brightness-200" /></Link>
            <p className="mt-4 font-serif italic text-[15px] text-bg-card/80 leading-snug">One platform for faith.</p>
            <p className="mt-2 font-sans text-[12px] text-bg-card/50 leading-relaxed">Made in India. For India&apos;s temples.</p>
          </div>
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-bg-card/40 mb-4">{heading}</h4>
              <ul className="flex flex-col gap-2.5">{links.map((link) => (<li key={link.href}><Link to={link.href} className="font-sans text-[13px] text-bg-card/70 hover:text-bg-card transition-colors duration-160">{link.label}</Link></li>))}</ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t border-bg-card/12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[12px] text-bg-card/40">TM 2026 FaithConnect Pvt. Ltd. · Registered in Chennai</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-bg-card/40 hover:text-bg-card/80 transition-colors duration-160" aria-label="Twitter"><Twitter size={16} strokeWidth={1.5} /></a>
            <a href="#" className="text-bg-card/40 hover:text-bg-card/80 transition-colors duration-160" aria-label="Instagram"><Instagram size={16} strokeWidth={1.5} /></a>
            <a href="#" className="text-bg-card/40 hover:text-bg-card/80 transition-colors duration-160" aria-label="LinkedIn"><Linkedin size={16} strokeWidth={1.5} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
