
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-spiritual-ivory border-t border-spiritual-sandstone/40 text-spiritual-maroon">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center space-y-6">
          <Link to="/" className="flex items-center gap-2 font-fraunces text-2xl tracking-tight">
            <img src="/faithconnect-logo.jpg" alt="" className="w-8 h-8 object-contain mix-blend-multiply" />
            Faith<span className="text-spiritual-saffron">Connect</span>
          </Link>

          <p className="text-sm text-spiritual-maroon/70 max-w-md text-center">
            India's premium temple discovery platform — explore sacred heritage with reverence and clarity.
          </p>

          <div className="flex space-x-3">
            <SocialLink href="https://facebook.com" icon={<Facebook size={18} />} label="Facebook" />
            <SocialLink href="https://twitter.com" icon={<Twitter size={18} />} label="Twitter" />
            <SocialLink href="https://instagram.com" icon={<Instagram size={18} />} label="Instagram" />
            <SocialLink href="https://linkedin.com" icon={<Linkedin size={18} />} label="LinkedIn" />
          </div>

          <div className="flex items-center gap-6 text-sm">
            <Link to="/about-us" className="text-spiritual-maroon/70 hover:text-spiritual-saffron transition-colors">
              About
            </Link>
            <Link to="/temples" className="text-spiritual-maroon/70 hover:text-spiritual-saffron transition-colors">
              Explore
            </Link>
            <Link to="/donations" className="text-spiritual-maroon/70 hover:text-spiritual-saffron transition-colors">
              Donate
            </Link>
            <Link to="/onboard-temple" className="text-spiritual-maroon/70 hover:text-spiritual-saffron transition-colors">
              List Your Temple
            </Link>
          </div>

          <p className="text-xs text-spiritual-maroon/50 pt-2">
            © {new Date().getFullYear()} Faith Connect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    className="w-10 h-10 rounded-full bg-white border border-spiritual-sandstone flex items-center justify-center text-spiritual-saffron hover:bg-spiritual-saffron hover:text-white hover:border-spiritual-saffron transition-colors"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Footer;
