import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

/**
 * Mooshak — refined per master prompt §7.4.
 *
 * A 32×32 copper SVG line drawing of a mouse acting as a cursor companion.
 * Leaves a faint copper trail that fades over ~2s. Visible only over the
 * `.hero-section` element on desktop. Hidden on mobile and when the user
 * prefers reduced motion. No mascot. No mantras. No labels.
 */

type TrailDot = { id: number; x: number; y: number };

const TRAIL_FADE_MS = 2000;
const TRAIL_MIN_SPACING = 24; // px between dots

const MooshakMark = ({ size = 32 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    stroke="hsl(var(--copper-500))"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    {/* Editorial line drawing of a small mouse silhouette */}
    <path d="M7 22c0-4 3-7 7-7h2c4 0 7 3 7 7" />
    <circle cx="9" cy="14" r="2.4" />
    <circle cx="22" cy="14" r="2.4" />
    <circle cx="15" cy="20" r="0.6" fill="hsl(var(--copper-500))" />
    <path d="M22 22c3 .5 5 2 5 4" />
  </svg>
);

const Mooshak: React.FC = () => {
  const isMobile = useIsMobile();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [trail, setTrail] = useState<TrailDot[]>([]);
  const lastDotRef = useRef({ x: -1000, y: -1000 });
  const dotIdRef = useRef(0);
  const reduced = useRef(false);

  // Honor prefers-reduced-motion.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduced.current = mq.matches;
    const onChange = () => (reduced.current = mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  // Track cursor position; only show when over the hero section.
  useEffect(() => {
    if (isMobile) return;
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = document.elementFromPoint(e.clientX, e.clientY);
      const overHero = !!target?.closest(".hero-section");
      setVisible(overHero);

      if (!overHero || reduced.current) return;

      const dx = e.clientX - lastDotRef.current.x;
      const dy = e.clientY - lastDotRef.current.y;
      if (Math.hypot(dx, dy) >= TRAIL_MIN_SPACING) {
        const id = ++dotIdRef.current;
        lastDotRef.current = { x: e.clientX, y: e.clientY };
        setTrail((prev) => [...prev.slice(-12), { id, x: e.clientX, y: e.clientY }]);
        window.setTimeout(() => {
          setTrail((prev) => prev.filter((d) => d.id !== id));
        }, TRAIL_FADE_MS);
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Trail */}
      <AnimatePresence>
        {trail.map((d) => (
          <motion.span
            key={d.id}
            initial={{ opacity: 0.55, scale: 1 }}
            animate={{ opacity: 0, scale: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: TRAIL_FADE_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
            className="fixed pointer-events-none z-[60]"
            style={{
              left: d.x - 3,
              top: d.y - 3,
              width: 6,
              height: 6,
              borderRadius: 9999,
              background: "hsl(var(--copper-500))",
              filter: "blur(0.4px)",
            }}
          />
        ))}
      </AnimatePresence>

      {/* Mark */}
      <motion.div
        className="fixed pointer-events-none z-[61]"
        animate={{
          x: pos.x + 14,
          y: pos.y + 10,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          x: { type: "spring", damping: 22, stiffness: 220, mass: 0.4 },
          y: { type: "spring", damping: 22, stiffness: 220, mass: 0.4 },
          opacity: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
        }}
        aria-hidden
      >
        <MooshakMark size={32} />
      </motion.div>
    </>
  );
};

export default Mooshak;
