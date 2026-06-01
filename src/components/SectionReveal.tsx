import { motion, useReducedMotion } from "framer-motion";
interface SectionRevealProps { children: React.ReactNode; className?: string; delay?: number; }
export function SectionReveal({ children, className = "", delay = 0 }: SectionRevealProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div initial={reduced ? { opacity: 1 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }} transition={{ duration: reduced ? 0 : 0.64, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}
