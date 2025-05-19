
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HighlightedButtonProps {
  to: string;
  label: string;
  color?: "maroon" | "saffron" | "white";
  className?: string;
  showArrow?: boolean;
}

const HighlightedButton: React.FC<HighlightedButtonProps> = ({
  to,
  label,
  color = "maroon",
  className,
  showArrow = true
}) => {
  const colorClasses = {
    maroon: "bg-spiritual-maroon text-white hover:bg-spiritual-maroon/90",
    saffron: "bg-spiritual-saffron text-white hover:bg-spiritual-saffron/90",
    white: "bg-white text-spiritual-maroon hover:bg-spiritual-ivory/90"
  };

  return (
    <Link to={to}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium shadow-md transition-all",
          colorClasses[color],
          "border-2", 
          color === "white" ? "border-spiritual-gold" : "border-transparent",
          className
        )}
      >
        <span>{label}</span>
        {showArrow && (
          <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        )}
      </motion.div>
    </Link>
  );
};

export default HighlightedButton;
