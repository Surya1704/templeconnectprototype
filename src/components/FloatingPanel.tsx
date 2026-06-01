import { motion, useReducedMotion } from "framer-motion";
interface FloatingPanelProps { children: React.ReactNode; delay?: number; className?: string; }
export function FloatingPanel({ children, delay = 0, className = "" }: FloatingPanelProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div animate={reduced ? {} : { y: [0, -4, 0] }} transition={{ duration: 6, delay, repeat: Infinity, ease: "easeInOut" }}
      className={`bg-white/8 backdrop-blur-md border border-white/12 rounded-[20px] p-5 ${className}`}>
      {children}
    </motion.div>
  );
}
