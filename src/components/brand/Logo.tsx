import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
  /** Animate a single slow rotation (homepage only). */
  animated?: boolean;
  /** Mark size in pixels. */
  size?: number;
  /** Hide the wordmark — mark only. */
  markOnly?: boolean;
  className?: string;
}

/**
 * FaithConnect lockup — copper mark + Fraunces wordmark on ivory.
 * Spec: §1.1, §14.1.
 */
const Logo: React.FC<LogoProps> = ({
  animated = false,
  size = 32,
  markOnly = false,
  className,
}) => {
  return (
    <Link
      to="/"
      className={cn(
        "inline-flex items-center gap-3 group",
        className
      )}
      aria-label="FaithConnect — home"
    >
      <motion.img
        src="/faithconnect-mark.jpg"
        alt=""
        width={size}
        height={size}
        style={{ width: size, height: size }}
        className="object-contain mix-blend-multiply"
        initial={animated ? { rotate: 0 } : false}
        animate={animated ? { rotate: 360 } : undefined}
        transition={animated ? { duration: 8, ease: "linear", repeat: Infinity } : undefined}
      />
      {!markOnly && (
        <span
          className="font-fraunces font-medium text-ink-espresso tracking-tight"
          style={{ fontSize: Math.round(size * 0.58), lineHeight: 1 }}
        >
          FaithConnect
        </span>
      )}
    </Link>
  );
};

export default Logo;
