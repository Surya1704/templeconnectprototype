import { useCallback, useEffect, useMemo } from "react";
import { APIProvider, Map, AdvancedMarker, useMap } from "@vis.gl/react-google-maps";
import type { Temple } from "@/lib/templeData";
import { GOOGLE_MAPS_API_KEY, GOOGLE_MAPS_MAP_ID, hasGoogleMapsKey } from "@/lib/googleMaps";

interface TempleGoogleMapProps {
  temples: Temple[];
  selectedId?: string;
  hoveredId?: string;
  onSelect?: (temple: Temple) => void;
  onBoundsChange?: (bounds: google.maps.LatLngBounds) => void;
  className?: string;
}

function templeKey(t: Temple): string {
  return `${t.source}-${t.osmId ?? t.slug ?? t.name}`;
}

function shortLabel(name: string): string {
  const words = name.split(/\s+/);
  if (words.length <= 2) return name.length > 14 ? `${name.slice(0, 12)}…` : name;
  return words[0].length > 10 ? `${words[0].slice(0, 9)}…` : words[0];
}

function MapMarker({
  temple,
  active,
  hovered,
  onSelect,
}: {
  temple: Temple;
  active: boolean;
  hovered: boolean;
  onSelect?: (t: Temple) => void;
}) {
  const highlighted = active || hovered;
  return (
    <AdvancedMarker
      position={{ lat: temple.lat, lng: temple.lng }}
      onClick={() => onSelect?.(temple)}
      zIndex={highlighted ? 100 : temple.isJyotirlinga ? 20 : 10}
    >
      <div
        className={`whitespace-nowrap rounded-full px-2.5 py-1.5 font-sans text-[12px] font-semibold shadow-md transition-all duration-160 ${
          highlighted
            ? "scale-110 bg-ink-primary text-bg-card"
            : "bg-bg-card text-ink-primary border border-line-soft hover:scale-105"
        }`}
      >
        {shortLabel(temple.name)}
      </div>
    </AdvancedMarker>
  );
}

function MapBoundsSync({ temples, selectedId }: { temples: Temple[]; selectedId?: string }) {
  const map = useMap();
  const selected = temples.find((t) => templeKey(t) === selectedId);

  useEffect(() => {
    if (!map || !selected) return;
    map.panTo({ lat: selected.lat, lng: selected.lng });
  }, [map, selected]);

  return null;
}

function MapInner({
  temples,
  selectedId,
  hoveredId,
  onSelect,
  onBoundsChange,
}: Omit<TempleGoogleMapProps, "className">) {
  const handleIdle = useCallback(
    (ev: { map: google.maps.Map }) => {
      const b = ev.map.getBounds();
      if (b) onBoundsChange?.(b);
    },
    [onBoundsChange]
  );

  const center = useMemo(() => {
    if (temples.length === 0) return { lat: 22.5, lng: 79.0 };
    const lat = temples.reduce((s, t) => s + t.lat, 0) / temples.length;
    const lng = temples.reduce((s, t) => s + t.lng, 0) / temples.length;
    return { lat, lng };
  }, [temples]);

  return (
    <Map
      defaultCenter={center}
      defaultZoom={5}
      mapId={GOOGLE_MAPS_MAP_ID}
      gestureHandling="greedy"
      disableDefaultUI={false}
      fullscreenControl={false}
      streetViewControl={false}
      mapTypeControl={false}
      onIdle={handleIdle}
      className="h-full w-full"
      style={{ width: "100%", height: "100%" }}
    >
      <MapBoundsSync temples={temples} selectedId={selectedId} />
      {temples.map((t) => (
        <MapMarker
          key={templeKey(t)}
          temple={t}
          active={templeKey(t) === selectedId}
          hovered={templeKey(t) === hoveredId}
          onSelect={onSelect}
        />
      ))}
    </Map>
  );
}

export function TempleGoogleMap(props: TempleGoogleMapProps) {
  const { className = "" } = props;

  if (!hasGoogleMapsKey()) {
    return (
      <div className={`flex h-full flex-col items-center justify-center bg-bg-secondary px-8 text-center ${className}`}>
        <p className="font-serif text-[20px] text-ink-primary">Google Maps API key required</p>
        <p className="mt-2 max-w-sm font-sans text-[13px] text-ink-secondary leading-relaxed">
          Add <code className="text-accent">VITE_GOOGLE_MAPS_API_KEY</code> to your{" "}
          <code className="text-accent">.env</code> file to enable the interactive map.
        </p>
      </div>
    );
  }

  return (
    <div className={`h-full w-full ${className}`}>
      <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
        <MapInner {...props} />
      </APIProvider>
    </div>
  );
}
