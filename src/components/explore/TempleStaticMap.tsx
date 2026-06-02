import { useEffect, useRef, useState } from "react";
import type { Temple } from "@/lib/templeData";

interface TempleStaticMapProps {
  temples: Temple[];
  selectedId?: string;
  hoveredId?: string;
  onSelect?: (temple: Temple) => void;
  className?: string;
}

const MAP_CENTER = { lat: 22.5, lng: 79.0 };
const MAP_ZOOM = 5;

function templeKey(t: Temple): string {
  return `${t.source}-${t.osmId ?? t.slug ?? t.name}`;
}

function shortLabel(name: string): string {
  const words = name.split(/\s+/);
  if (words.length <= 2) return name.length > 14 ? `${name.slice(0, 12)}…` : name;
  return words[0].length > 10 ? `${words[0].slice(0, 9)}…` : words[0];
}

// Web Mercator — matches OSM static map tile math at a fixed zoom.
function latLngToWorldPixel(lat: number, lng: number, zoom: number) {
  const scale = 256 * 2 ** zoom;
  const x = ((lng + 180) / 360) * scale;
  const latRad = (lat * Math.PI) / 180;
  const y = ((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2) * scale;
  return { x, y };
}

function project(lat: number, lng: number, width: number, height: number) {
  const center = latLngToWorldPixel(MAP_CENTER.lat, MAP_CENTER.lng, MAP_ZOOM);
  const point = latLngToWorldPixel(lat, lng, MAP_ZOOM);
  return {
    x: width / 2 + (point.x - center.x),
    y: height / 2 + (point.y - center.y),
  };
}

function staticMapUrl(width: number, height: number): string {
  const w = Math.max(400, Math.min(1280, width));
  const h = Math.max(300, Math.min(960, height));
  const params = new URLSearchParams({
    center: `${MAP_CENTER.lat},${MAP_CENTER.lng}`,
    zoom: String(MAP_ZOOM),
    size: `${w}x${h}`,
    maptype: "mapnik",
  });
  return `https://staticmap.openstreetmap.de/staticmap.php?${params.toString()}`;
}

export function TempleStaticMap({ temples, selectedId, hoveredId, onSelect, className = "" }: TempleStaticMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 800, h: 600 });
  const [mapLoaded, setMapLoaded] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setSize({ w: Math.round(el.clientWidth), h: Math.round(el.clientHeight) });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const mapSrc = staticMapUrl(size.w, size.h);

  return (
    <div ref={containerRef} className={`relative overflow-hidden bg-bg-secondary ${className}`}>
      {!mapLoaded && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(185,122,87,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(185,122,87,0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      )}
      <img
        src={mapSrc}
        alt="Map of India showing temple locations"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${mapLoaded ? "opacity-100" : "opacity-0"}`}
        draggable={false}
        onLoad={() => setMapLoaded(true)}
        onError={() => setMapLoaded(false)}
      />

      {temples.map((t) => {
        const { x, y } = project(t.lat, t.lng, size.w, size.h);
        const key = templeKey(t);
        const highlighted = key === selectedId || key === hoveredId;
        // Skip markers that fall outside the visible frame
        if (x < -40 || y < -40 || x > size.w + 40 || y > size.h + 40) return null;

        return (
          <button
            key={key}
            type="button"
            aria-label={t.name}
            onClick={() => onSelect?.(t)}
            style={{ left: `${(x / size.w) * 100}%`, top: `${(y / size.h) * 100}%`, transform: "translate(-50%, -100%)" }}
            className={`absolute z-10 whitespace-nowrap rounded-full px-2.5 py-1.5 font-sans text-[11px] font-semibold shadow-md transition-all duration-160 ${
              highlighted
                ? "scale-110 bg-ink-primary text-bg-card"
                : "border border-line-soft bg-bg-card text-ink-primary hover:scale-105"
            }`}
          >
            {shortLabel(t.name)}
          </button>
        );
      })}

      <p className="pointer-events-none absolute bottom-2 right-2 rounded bg-bg-card/80 px-2 py-0.5 font-sans text-[9px] text-ink-tertiary backdrop-blur-sm">
        © OpenStreetMap
      </p>
    </div>
  );
}
