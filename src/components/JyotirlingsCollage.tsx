import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { jyotirlingas } from "@/data/jyotirlingas";

const GRID_AREAS = [ "a a b c", "a a d e", "f g h h", "i j k l" ] as const;
const SLUG_TO_AREA: Record<string, string> = { kedarnath: "a", somnath: "b", mallikarjuna: "c", mahakaleshwar: "d", omkareshwar: "e", bhimashankar: "f", "kashi-vishwanath": "g", trimbakeshwar: "h", vaidyanath: "i", nageshvara: "j", rameshwaram: "k", grishneshwar: "l" };

interface CollageCardProps { slug: string; name: string; state: string; imageUrl: string; area: string; isLarge?: boolean; }
function CollageCard({ slug, name, state, imageUrl, area, isLarge }: CollageCardProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link to={`/explore/${slug}`} style={{ gridArea: area }} className="relative overflow-hidden rounded-[16px] group cursor-pointer" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <motion.img src={imageUrl} alt={name} className="w-full h-full object-cover" animate={{ scale: hovered ? 1.04 : 1 }} transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }} loading="lazy" />
      <div className="absolute inset-0 bg-black/3 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[#1a1612]/80 to-transparent pointer-events-none" />
      <div className={`absolute inset-0 rounded-[16px] border border-accent/0 transition-all duration-320 pointer-events-none ${hovered ? "border-accent/40" : ""}`} />
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="font-serif text-bg-card leading-tight" style={{ fontSize: isLarge ? "24px" : "18px", textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>{name}</h3>
        <p className="font-sans text-[11px] uppercase tracking-[0.12em] text-bg-card/80 mt-0.5">{state}</p>
      </div>
    </Link>
  );
}

export function JyotirlingsCollage() {
  return (
    <div className="grid gap-3 w-full" style={{ gridTemplateAreas: GRID_AREAS.map((row) => `"${row}"`).join(" "), gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "repeat(4, 140px)", minHeight: "560px" }}>
      {jyotirlingas.map((j) => { const area = SLUG_TO_AREA[j.slug]; if (!area) return null; return <CollageCard key={j.slug} slug={j.slug} name={j.name} state={j.state} imageUrl={j.imageUrl} area={area} isLarge={area === "a" || area === "h"} />; })}
    </div>
  );
}
