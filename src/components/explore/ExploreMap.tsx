/**
 * Interactive explore map — Leaflet + CARTO Voyager (OpenStreetMap data, free, no API key).
 * Chosen over paid Google/Mapbox APIs for zero cost and smooth pan/zoom.
 */
import { useEffect, useMemo, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import type { Temple } from "@/lib/templeData";
import "leaflet/dist/leaflet.css";

const CARTO_VOYAGER = "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";
const ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>';

function templeKey(t: Temple): string {
  return `${t.source}-${t.osmId ?? t.slug ?? t.name}`;
}

function shortLabel(name: string): string {
  const w = name.split(/\s+/)[0];
  return w.length > 11 ? `${w.slice(0, 10)}…` : w;
}

function pillIcon(label: string, highlighted: boolean) {
  const bg = highlighted ? "#1a1612" : "#faf8f4";
  const color = highlighted ? "#faf8f4" : "#1a1612";
  const border = highlighted ? "#1a1612" : "rgba(185,122,87,0.35)";
  return L.divIcon({
    html: `<div style="white-space:nowrap;padding:5px 10px;border-radius:999px;font:600 11px/1 Inter,system-ui,sans-serif;background:${bg};color:${color};border:1px solid ${border};box-shadow:0 2px 8px rgba(26,22,18,0.18);transform:translate(-50%,-100%)">${label}</div>`,
    className: "",
    iconSize: [0, 0],
    iconAnchor: [0, 0],
  });
}

const userIcon = L.divIcon({
  html: `<div style="width:14px;height:14px;border-radius:50%;background:#2563eb;border:3px solid #fff;box-shadow:0 0 0 2px rgba(37,99,235,0.35)"></div>`,
  className: "",
  iconSize: [14, 14],
  iconAnchor: [7, 7],
});

function FlyTo({ lat, lng, zoom }: { lat: number; lng: number; zoom?: number }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo([lat, lng], zoom ?? map.getZoom(), { duration: 0.8 });
  }, [lat, lng, zoom, map]);
  return null;
}

interface ExploreMapProps {
  temples: Temple[];
  selectedId?: string;
  hoveredId?: string;
  userLocation?: { lat: number; lng: number } | null;
  onSelect?: (temple: Temple) => void;
  className?: string;
}

export function ExploreMap({
  temples,
  selectedId,
  hoveredId,
  userLocation,
  onSelect,
  className = "",
}: ExploreMapProps) {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  const selected = useMemo(
    () => temples.find((t) => templeKey(t) === selectedId),
    [temples, selectedId]
  );

  if (!ready) {
    return <div className={`animate-pulse bg-bg-secondary ${className}`} />;
  }

  return (
    <MapContainer
      center={[22.5, 79.0]}
      zoom={5}
      className={className}
      style={{ height: "100%", width: "100%", minHeight: 280 }}
      zoomControl
      scrollWheelZoom
    >
      <TileLayer url={CARTO_VOYAGER} attribution={ATTRIBUTION} />
      {selected ? (
        <FlyTo lat={selected.lat} lng={selected.lng} zoom={7} />
      ) : userLocation ? (
        <FlyTo lat={userLocation.lat} lng={userLocation.lng} zoom={8} />
      ) : null}
      {userLocation && (
        <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon} />
      )}
      {temples.map((t) => {
        const key = templeKey(t);
        const hi = key === selectedId || key === hoveredId;
        return (
          <Marker
            key={key}
            position={[t.lat, t.lng]}
            icon={pillIcon(shortLabel(t.name), hi)}
            zIndexOffset={hi ? 1000 : t.isJyotirlinga ? 100 : 0}
            eventHandlers={{ click: () => onSelect?.(t) }}
          />
        );
      })}
    </MapContainer>
  );
}
