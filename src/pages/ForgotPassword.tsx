
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ email?: string }>({});
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email) {
      setErrors({ email: "Email is required" });
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors({ email: "Email is invalid" });
      return;
    }
    
    // Reset errors if validation passes
    setErrors({});
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Reset link sent",
        description: "If an account exists with this email, you'll receive a password reset link",
      });
    }, 1500);
    
    console.log("Password reset requested for:", email);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-spiritual-ivory to-white flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-4 left-4">
        <Link to="/login" className="flex items-center text-spiritual-maroon hover:text-spiritual-saffron transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span>Back to Login</span>
        </Link>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-md w-full space-y-8"
      >
        {/* Logo & Header */}
        <div className="text-center">
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-spiritual-maroon/5 rounded-full flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-spiritual-maroon">
                <path d="M12 3L4 9V21H20V9L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 21V12H15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 3V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold font-cinzel text-spiritual-maroon">Forgot Password</h2>
          <p className="mt-2 text-sm text-spiritual-maroon/70">
            Enter your email address to receive a password reset link
          </p>
        </div>
        
        {/* Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 bg-white p-8 rounded-xl shadow-sm border border-spiritual-gold/10"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-spiritual-saffron" />
                Email address
              </Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={cn(
                    "block w-full", 
                    errors.email && "border-red-500 focus-visible:ring-red-500"
                  )}
                  placeholder="Enter your email"
                  disabled={isSubmitting}
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            
            <div>
              <Button 
                type="submit"
                className="w-full bg-spiritual-maroon hover:bg-spiritual-maroon/90 text-white py-2 px-4 rounded-md transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Reset Password"}
              </Button>
            </div>
          </form>
        </motion.div>
        
        {/* Login Link */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Remembered your password?{" "}
            <Link to="/login" className="font-medium text-spiritual-ochre hover:text-spiritual-saffron">
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-spiritual-maroon/5 -z-10 overflow-hidden">
        <div className="absolute -bottom-8 left-1/4 w-40 h-40 bg-spiritual-saffron/5 rounded-full"></div>
        <div className="absolute -bottom-12 right-1/3 w-60 h-60 bg-spiritual-gold/5 rounded-full"></div>
      </div>
    </div>
  );
};

export default ForgotPassword;
