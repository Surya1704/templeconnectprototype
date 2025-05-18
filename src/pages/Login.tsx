import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, ArrowLeft, Mail, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    const newErrors: { email?: string; password?: string } = {};
    
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!password) {
      newErrors.password = "Password is required";
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Reset errors if validation passes
    setErrors({});
    
    // Here you would typically handle the login logic
    console.log("Login attempt with:", { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-spiritual-ivory to-white flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-4 left-4">
        <Link to="/" className="flex items-center text-spiritual-maroon hover:text-spiritual-saffron transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span>Back to Home</span>
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
          <h2 className="mt-6 text-3xl font-bold font-cinzel text-spiritual-maroon">Welcome Back</h2>
          <p className="mt-2 text-sm text-spiritual-maroon/70">
            Sign in to access your spiritual journey
          </p>
        </div>
        
        {/* Login Form */}
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
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="flex items-center">
                <Lock className="w-4 h-4 mr-2 text-spiritual-saffron" />
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={cn(
                    "block w-full pr-10", 
                    errors.password && "border-red-500 focus-visible:ring-red-500"
                  )}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-spiritual-ochre focus:outline-none"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password}</p>
              )}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-spiritual-saffron focus:ring-spiritual-gold border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              
              <div className="text-sm">
                <Link to="/forgot-password" className="font-medium text-spiritual-ochre hover:text-spiritual-saffron">
                  Forgot password?
                </Link>
              </div>
            </div>
            
            <div>
              <Button 
                type="submit"
                className="w-full bg-spiritual-maroon hover:bg-spiritual-maroon/90 text-white py-2 px-4 rounded-md transition-colors"
              >
                Sign in
              </Button>
            </div>
          </form>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button 
                type="button" 
                variant="outline"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none">
                  <path d="M12 0C5.372 0 0 5.373 0 12C0 18.628 5.372 24 12 24C18.627 24 24 18.628 24 12C24 5.373 18.627 0 12 0ZM19.479 17.326C19.153 17.901 18.769 18.424 18.335 18.879C17.78 19.474 17.323 19.842 16.963 19.982C16.422 20.202 15.849 20.202 15.277 19.982C14.293 19.627 13.297 19.285 12.3 18.95C10.646 18.405 9.11 17.545 7.767 16.421C6.469 15.342 5.351 14.048 4.464 12.592C3.83 11.541 3.392 10.386 3.167 9.179C3.044 8.486 3.036 7.776 3.167 7.086C3.267 6.465 3.633 5.917 4.177 5.469C4.447 5.246 4.741 5.051 5.058 4.888C5.404 4.708 5.798 4.663 6.175 4.757C6.462 4.835 6.717 5.007 6.903 5.245C7.395 5.886 7.857 6.55 8.289 7.233C8.55 7.649 8.58 8.176 8.359 8.622C8.205 8.941 7.959 9.203 7.654 9.365C7.386 9.503 7.136 9.671 6.91 9.866C6.736 10.021 6.629 10.241 6.61 10.477C6.592 10.712 6.662 10.947 6.806 11.127C7.361 11.95 8.029 12.68 8.789 13.293C9.549 13.906 10.401 14.376 11.3 14.702C11.714 14.843 12.169 14.732 12.471 14.42C12.736 14.14 13.023 13.882 13.329 13.65C13.652 13.397 14.045 13.261 14.446 13.262C14.846 13.264 15.238 13.404 15.558 13.659C16.254 14.132 16.914 14.659 17.531 15.234C17.766 15.426 17.937 15.683 18.023 15.972C18.109 16.261 18.107 16.569 18.018 16.856C17.851 17.028 17.667 17.183 17.466 17.316L19.479 17.326Z" fill="#34B7F1"/>
                </svg>
                Google
              </Button>
              <Button 
                type="button" 
                variant="outline"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"/>
                </svg>
                Apple
              </Button>
            </div>
          </div>
        </motion.div>
        
        {/* Registration Link */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="font-medium text-spiritual-ochre hover:text-spiritual-saffron">
              Sign up
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

export default Login;
