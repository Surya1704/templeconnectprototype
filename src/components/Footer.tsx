
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-orange-50 text-gray-700">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Media Links */}
          <div className="text-center">
            <h3 className="font-bold text-lg mb-4 text-orange-800">Connect with us</h3>
            <div className="flex space-x-4">
              <SocialLink href="https://facebook.com" icon={<Facebook size={20} />} label="Facebook" />
              <SocialLink href="https://twitter.com" icon={<Twitter size={20} />} label="Twitter" />
              <SocialLink href="https://instagram.com" icon={<Instagram size={20} />} label="Instagram" />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} label="LinkedIn" />
            </div>
          </div>
          
          {/* About Us Link */}
          <div className="text-center">
            <Link 
              to="/about-us" 
              className="text-gray-600 hover:text-orange-500 text-sm font-medium transition-colors"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => {
  return (
    <a 
      href={href} 
      className="w-10 h-10 rounded-full bg-white border border-orange-200 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default Footer;
