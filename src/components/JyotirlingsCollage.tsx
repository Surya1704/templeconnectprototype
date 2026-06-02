import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { jyotirlingas, type Jyotirlinga } from "@/data/jyotirlingas";
import { useIsMobile } from "@/hooks/use-mobile";

interface ScatterSlot {
  top: string;
  left: string;
  width: string;
  height: string;
  rotate: number;
  z: number;
}

// Hand-tuned scattered collage (desktop). Percentages keep it fluid; the
// cards overlap via z-index with a gentle rotation, like the reference art.
const SCATTER: Record<string, ScatterSlot> = {
  somnath: { top: "0%", left: "0%", width: "27%", height: "300px", rotate: -3, z: 3 },
  mallikarjuna: { top: "6%", left: "24%", width: "25%", height: "270px", rotate: 2, z: 2 },
  mahakaleshwar: { top: "0%", left: "50%", width: "27%", height: "300px", rotate: -2, z: 4 },
  omkareshwar: { top: "8%", left: "76%", width: "24%", height: "260px", rotate: 2.5, z: 2 },
  kedarnath: { top: "30%", left: "8%", width: "26%", height: "290px", rotate: 1.5, z: 5 },
  bhimashankar: { top: "34%", left: "33%", width: "26%", height: "280px", rotate: -2, z: 3 },
  "kashi-vishwanath": { top: "28%", left: "58%", width: "27%", height: "300px", rotate: 2, z: 4 },
  trimbakeshwar: { top: "37%", left: "82%", width: "18%", height: "255px", rotate: -2.5, z: 2 },
  vaidyanath: { top: "62%", left: "2%", width: "24%", height: "275px", rotate: 2.5, z: 3 },
  nageshvara: { top: "66%", left: "26%", width: "24%", height: "265px", rotate: -1.5, z: 4 },
  rameshwaram: { top: "60%", left: "50%", width: "27%", height: "300px", rotate: 1.5, z: 5 },
  grishneshwar: { top: "67%", left: "78%", width: "22%", height: "260px", rotate: -3, z: 2 },
};

const NOTES: Record<string, string> = {
  somnath: "First among the twelve Jyotirlingas",
  mallikarjuna: "On the Srisailam hill",
  mahakaleshwar: "Situated in Ujjain, Madhya Pradesh",
  omkareshwar: "An island in the Narmada river",
  kedarnath: "High in the Himalayan ranges",
  bhimashankar: "In the Sahyadris of Maharashtra",
  "kashi-vishwanath": "On the ghats of Varanasi",
  trimbakeshwar: "Near Nashik, source of the Godavari",
  vaidyanath: "In Deoghar, Jharkhand",
  nageshvara: "Near Dwarka, Gujarat",
  rameshwaram: "Southern tip of India, tied to the Ramayana",
  grishneshwar: "Beside the Ellora caves, Maharashtra",
};

function Tile({ j }: { j: Jyotirlinga }) {
  return (
    <Link
      to={`/explore/${j.slug}`}
      aria-label={`Explore ${j.name} temple`}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-image bg-gradient-to-b from-bg-card to-bg-secondary shadow-[0_14px_34px_-16px_rgba(26,22,18,0.5)] ring-1 ring-inset ring-line-hair/60 transition-all duration-320 ease-fc-out hover:ring-2 hover:ring-accent/70 hover:shadow-[0_22px_44px_-18px_rgba(26,22,18,0.55)]"
    >
      <div className="relative min-h-0 flex-1">
        <img
          src={j.imageUrl}
          alt={`${j.name} temple`}
          loading="lazy"
          onError={(e) => {
            const el = e.currentTarget as HTMLImageElement;
            if (!el.src.endsWith("/placeholder.svg")) el.src = "/placeholder.svg";
          }}
          className="absolute inset-0 h-full w-full object-contain object-bottom p-3 drop-shadow-[0_10px_16px_rgba(26,22,18,0.2)] transition-transform duration-320 ease-fc-out group-hover:scale-[1.05]"
        />
      </div>
      <div className="relative px-4 pb-4 pt-1">
        <h3 className="font-serif text-[18px] leading-tight text-ink-primary">{j.name}</h3>
        <p className="mt-1 font-sans text-[11px] leading-snug text-ink-tertiary">{NOTES[j.slug] ?? j.state}</p>
        <span className="mt-2.5 inline-flex items-center rounded-pill bg-accent/10 px-3 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.12em] text-accent transition-colors duration-160 group-hover:bg-accent group-hover:text-bg-card">
          Explore now
        </span>
      </div>
    </Link>
  );
}

function ScatteredCollage() {
  const reduce = useReducedMotion();
  return (
    <div className="relative w-full" style={{ height: "880px" }}>
      {jyotirlingas.map((j, i) => {
        const slot = SCATTER[j.slug];
        if (!slot) return null;
        return (
          <motion.div
            key={j.slug}
            className="absolute"
            style={{ top: slot.top, left: slot.left, width: slot.width, height: slot.height, zIndex: slot.z }}
            initial={reduce ? false : { opacity: 0, y: 22, rotate: slot.rotate }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0, rotate: slot.rotate }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            whileHover={reduce ? undefined : { scale: 1.05, rotate: 0, zIndex: 30 }}
          >
            <Tile j={j} />
          </motion.div>
        );
      })}
    </div>
  );
}

function GridCollage() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {jyotirlingas.map((j) => (
        <div key={j.slug} className="aspect-[4/5]">
          <Tile j={j} />
        </div>
      ))}
    </div>
  );
}

export function JyotirlingsCollage() {
  const isMobile = useIsMobile();
  return isMobile ? <GridCollage /> : <ScatteredCollage />;
}
