import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { jyotirlingas, type Jyotirlinga } from "@/data/jyotirlingas";
import { useIsMobile } from "@/hooks/use-mobile";
import ImageWithFallback from "./ImageWithFallback";

interface ScatterSlot {
  top: string;
  left: string;
  width: string;
  height: string;
  rotate: number;
  z: number;
}

// Deliberate, hand-tuned scattered editorial layout (desktop only).
// Percentages keep it fluid; rotations stay within ±3deg as specified.
const SCATTER: Record<string, ScatterSlot> = {
  somnath: { top: "1%", left: "1%", width: "24%", height: "240px", rotate: -2, z: 3 },
  mallikarjuna: { top: "0%", left: "28%", width: "22%", height: "205px", rotate: 1.5, z: 2 },
  mahakaleshwar: { top: "5%", left: "52%", width: "26%", height: "255px", rotate: -1.5, z: 4 },
  omkareshwar: { top: "2%", left: "80%", width: "19%", height: "195px", rotate: 2.5, z: 2 },
  kedarnath: { top: "34%", left: "0%", width: "26%", height: "265px", rotate: 1, z: 5 },
  bhimashankar: { top: "41%", left: "29%", width: "21%", height: "205px", rotate: -2.5, z: 3 },
  "kashi-vishwanath": { top: "31%", left: "52%", width: "25%", height: "245px", rotate: 2, z: 4 },
  trimbakeshwar: { top: "37%", left: "80%", width: "19%", height: "225px", rotate: -1, z: 3 },
  vaidyanath: { top: "71%", left: "5%", width: "23%", height: "215px", rotate: 2, z: 2 },
  nageshvara: { top: "74%", left: "31%", width: "19%", height: "190px", rotate: -1.5, z: 3 },
  rameshwaram: { top: "66%", left: "51%", width: "25%", height: "245px", rotate: 1.5, z: 5 },
  grishneshwar: { top: "73%", left: "80%", width: "19%", height: "200px", rotate: -2.5, z: 2 },
};

function TileInner({ j }: { j: Jyotirlinga }) {
  return (
    <>
      <ImageWithFallback
        src={j.imageUrl}
        alt={`${j.name} temple`}
        fallbackSrc="/placeholder.svg"
        loading="lazy"
        className="h-full w-full rounded-image"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] rounded-b-image bg-gradient-to-t from-bg-deep/85 via-bg-deep/25 to-transparent" />
      <div className="absolute inset-0 rounded-image ring-1 ring-inset ring-line-hair/40 transition-colors duration-320 ease-fc-out group-hover:ring-2 group-hover:ring-accent/70" />
      <div className="absolute inset-x-0 bottom-0 z-10 p-3 md:p-4">
        <h3 className="font-serif text-[17px] leading-tight text-bg-card md:text-[19px]" style={{ textShadow: "0 1px 10px rgba(0,0,0,0.45)" }}>
          {j.name}
        </h3>
        <p className="mt-0.5 font-sans text-[10px] uppercase tracking-[0.14em] text-bg-card/80">
          {j.state}
        </p>
      </div>
    </>
  );
}

function ScatteredCollage() {
  const reduce = useReducedMotion();
  // Any slug without a designed slot still appears in the fallback grid below.
  const placed = jyotirlingas.filter((j) => SCATTER[j.slug]);
  const unplaced = jyotirlingas.filter((j) => !SCATTER[j.slug]);

  return (
    <div>
      <div className="relative w-full" style={{ height: "780px" }}>
        {placed.map((j, i) => {
          const slot = SCATTER[j.slug];
          return (
            <motion.div
              key={j.slug}
              className="absolute"
              style={{
                top: slot.top,
                left: slot.left,
                width: slot.width,
                height: slot.height,
                zIndex: slot.z,
              }}
              initial={reduce ? false : { opacity: 0, y: 18, rotate: slot.rotate }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0, rotate: slot.rotate }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduce ? undefined : { scale: 1.04, zIndex: 20 }}
            >
              <Link
                to={`/explore/${j.slug}`}
                aria-label={`${j.name} temple`}
                className="group relative block h-full w-full overflow-hidden rounded-image shadow-[0_8px_24px_-12px_rgba(26,22,18,0.4)]"
              >
                <TileInner j={j} />
              </Link>
            </motion.div>
          );
        })}
      </div>

      {unplaced.length > 0 && (
        <div className="mt-4 grid grid-cols-3 gap-3">
          {unplaced.map((j) => (
            <Link
              key={j.slug}
              to={`/explore/${j.slug}`}
              aria-label={`${j.name} temple`}
              className="group relative block aspect-[4/5] overflow-hidden rounded-image"
            >
              <TileInner j={j} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function GridCollage() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {jyotirlingas.map((j) => (
        <Link
          key={j.slug}
          to={`/explore/${j.slug}`}
          aria-label={`${j.name} temple`}
          className="group relative block aspect-[4/5] overflow-hidden rounded-image"
        >
          <TileInner j={j} />
        </Link>
      ))}
    </div>
  );
}

export function JyotirlingsCollage() {
  const isMobile = useIsMobile();
  return isMobile ? <GridCollage /> : <ScatteredCollage />;
}
