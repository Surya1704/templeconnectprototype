
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "You have been subscribed to our newsletter.",
      });
      setEmail("");
    }
  };

  return (
    <footer className="bg-orange-50 text-gray-700">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Support Column */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-orange-800">Support</h3>
            <ul className="space-y-2 text-sm">
              <FooterLink to="/contact" text="Help Center" />
              <FooterLink to="/contact" text="Temple Connect Support" />
              <FooterLink to="/contact" text="Safety information" />
              <FooterLink to="/contact" text="Supporting pilgrims with disabilities" />
              <FooterLink to="/contact" text="Cancellation options" />
            </ul>
          </div>
          
          {/* Community Column */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-orange-800">Community</h3>
            <ul className="space-y-2 text-sm">
              <FooterLink to="/contact" text="Temple Connect Foundation" />
              <FooterLink to="/contact" text="Temple preservation initiatives" />
              <FooterLink to="/contact" text="Cultural heritage programs" />
            </ul>
          </div>
          
          {/* Temple Management Column */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-orange-800">Temple Management</h3>
            <ul className="space-y-2 text-sm">
              <FooterLink to="/contact" text="List your temple" />
              <FooterLink to="/contact" text="Resources for temples" />
              <FooterLink to="/contact" text="Temple management tools" />
              <FooterLink to="/contact" text="Visit our community forum" />
              <FooterLink to="/contact" text="Responsible hosting" />
            </ul>
          </div>
          
          {/* TempleConnect Column */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-orange-800">TempleConnect</h3>
            <ul className="space-y-2 text-sm">
              <FooterLink to="/contact" text="Newsroom" />
              <FooterLink to="/contact" text="Learn about new features" />
              <FooterLink to="/contact" text="Letter from our founders" />
              <FooterLink to="/contact" text="Careers" />
              <FooterLink to="/contact" text="Investors" />
            </ul>
          </div>
        </div>
        
        <div className="border-t border-orange-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-start">
          {/* Newsletter Subscription */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold text-lg mb-4 text-orange-800">Subscribe to our newsletter</h3>
            <form onSubmit={handleSubscribe} className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="max-w-xs" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button 
                type="submit" 
                className="bg-orange-500 hover:bg-orange-600"
              >
                Subscribe
              </Button>
            </form>
          </div>
          
          {/* Social Media Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-orange-800">Connect with us</h3>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook size={20} />} label="Facebook" />
              <SocialLink href="#" icon={<Twitter size={20} />} label="Twitter" />
              <SocialLink href="#" icon={<Instagram size={20} />} label="Instagram" />
              <SocialLink href="#" icon={<Linkedin size={20} />} label="LinkedIn" />
            </div>
          </div>
        </div>
        
        <div className="text-sm text-center mt-8 pt-4 border-t border-orange-200">
          <p>© {new Date().getFullYear()} TempleConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, text }: { to: string; text: string }) => {
  return (
    <li>
      <Link to={to} className="text-gray-600 hover:text-orange-500">
        {text}
      </Link>
    </li>
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

