
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ActionButtonProps {
  variant: "dark" | "light";
  label: string;
  to: string;
}

const ActionButton = ({ variant, label, to }: ActionButtonProps) => {
  const isDark = variant === "dark";
  
  return (
    <Link to={to} className="w-full sm:w-auto">
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={`
          ${isDark ? "bg-spiritual-maroon text-white" : "bg-white text-spiritual-maroon"} 
          py-4 px-8 text-xl font-cinzel font-medium rounded-lg w-full sm:w-auto
          border-2 ${isDark ? "border-spiritual-saffron" : "border-spiritual-maroon"}
          shadow-lg hover:shadow-xl transition-all duration-300
        `}
      >
        {label}
      </motion.button>
    </Link>
  );
};

interface PrimaryActionButtonsProps {
  dark?: boolean;
  className?: string;
}

const PrimaryActionButtons: React.FC<PrimaryActionButtonsProps> = ({ 
  dark = false,
  className = ""
}) => {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <ActionButton 
        variant={dark ? "dark" : "light"} 
        label="Book Pooja" 
        to="/pooja-booking" 
      />
      <ActionButton 
        variant={dark ? "dark" : "light"} 
        label="Explore Temples" 
        to="/all-temples" 
      />
    </div>
  );
};

export default PrimaryActionButtons;
