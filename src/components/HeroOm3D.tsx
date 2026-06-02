import { motion, useReducedMotion } from "framer-motion";

// A calm, reliable hero mark: the Om glyph in our serif over a soft accent glow.
// (Replaces the previous WebGL torus-knot, which rendered as a dark blob.)
export function HeroOm3D() {
  const reduce = useReducedMotion();
  return (
    <div className="relative flex h-full w-full min-h-[260px] items-center justify-center">
      <div className="absolute aspect-square w-[70%] max-w-[420px] rounded-full bg-accent-glow opacity-70 blur-[90px]" />
      <motion.span
        aria-hidden="true"
        className="relative z-10 select-none font-serif leading-none text-accent"
        style={{ fontSize: "clamp(150px, 24vw, 340px)" }}
        animate={reduce ? undefined : { y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        ॐ
      </motion.span>
    </div>
  );
}
