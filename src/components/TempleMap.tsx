/**
 * Leaflet map using CARTO Voyager tiles (NOT raw tile.openstreetmap.org per OSM policy).
 */
import { useState, useCallback, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import L from "leaflet";
import { Link } from "react-router-dom";
import type { Temple } from "@/lib/templeData";
import { enrichTemple } from "@/lib/templeData";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

const copperIcon = new L.DivIcon({
  html: `<div style="width:12px;height:12px;border-radius:50%;background:#b97a57;box-shadow:0 0 8px rgba(185,122,87,0.35);"></div>`,
  className: "",
  iconSize: [12, 12],
  iconAnchor: [6, 6],
  popupAnchor: [0, -8],
});
const jyotirlingaIcon = new L.DivIcon({
  html: `<div style="width:16px;height:16px;border-radius:50%;background:#9e6342;box-shadow:0 0 12px rgba(158,99,66,0.4);border:1.5px solid #d4a98a;"></div>`,
  className: "",
  iconSize: [16, 16],
  iconAnchor: [8, 8],
  popupAnchor: [0, -10],
});
const CARTO_VOYAGER_URL = "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png";
const CARTO_LABELS_URL = "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png";
const CARTO_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

interface TempleMapProps {
  temples: Temple[];
  onViewportChange?: (bounds: [[number, number], [number, number]], zoom: number) => void;
  center?: [number, number];
  zoom?: number;
  className?: string;
  onTempleClick?: (temple: Temple) => void;
  minZoom?: number;
  maxZoom?: number;
}

function MapEventHandler({
  onViewportChange,
}: {
  onViewportChange: (bounds: [[number, number], [number, number]], zoom: number) => void;
}) {
  const map = useMapEvents({
    load: () => {
      const b = map.getBounds();
      onViewportChange([[b.getSouth(), b.getWest()], [b.getNorth(), b.getEast()]], map.getZoom());
    },
    moveend: () => {
      const b = map.getBounds();
      onViewportChange([[b.getSouth(), b.getWest()], [b.getNorth(), b.getEast()]], map.getZoom());
    },
  });
  return null;
}

function TempleMarker({ temple, onClick }: { temple: Temple; onClick?: (t: Temple) => void }) {
  const [enriched, setEnriched] = useState<Temple>(temple);
  const icon = temple.isJyotirlinga ? jyotirlingaIcon : copperIcon;
  const handleClick = useCallback(async () => {
    if (!temple.state && temple.source === "osm") {
      const e = await enrichTemple(temple);
      setEnriched(e);
    }
    onClick?.(temple);
  }, [temple, onClick]);
  return (
    <Marker position={[temple.lat, temple.lng]} icon={icon} eventHandlers={{ click: handleClick }}>
      <Popup>
        <div className="min-w-[180px]">
          <h3 className="font-serif text-[16px] text-ink-primary leading-snug">{temple.name}</h3>
          {temple.deity && (
            <p className="font-sans text-[11px] text-ink-tertiary uppercase tracking-wide mt-0.5">{temple.deity}</p>
          )}
          {(enriched.state || temple.state) && (
            <p className="font-sans text-[12px] text-ink-secondary mt-1">
              {enriched.state || temple.state}
              {enriched.district ? ` · ${enriched.district}` : ""}
            </p>
          )}
          {temple.slug && (
            <Link to={`/explore/${temple.slug}`} className="inline-block mt-2 font-sans text-[12px] text-accent hover:underline">
              View details →
            </Link>
          )}
          {temple.officialWebsite && (
            <a
              href={temple.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-1 font-sans text-[11px] text-ink-tertiary hover:underline"
            >
              Official website ↗
            </a>
          )}
        </div>
      </Popup>
    </Marker>
  );
}

export function TempleMap({
  temples,
  onViewportChange,
  center = [22.5, 79.0],
  zoom = 5,
  className = "",
  onTempleClick,
  minZoom = 4,
  maxZoom = 18,
}: TempleMapProps) {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  if (!ready) {
    return <div className={`bg-bg-secondary animate-pulse ${className}`} style={{ minHeight: "400px" }} />;
  }

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      className={className}
      style={{ minHeight: "400px", height: "100%", width: "100%" }}
      minZoom={minZoom}
      maxZoom={maxZoom}
      zoomControl={true}
    >
      <TileLayer url={CARTO_VOYAGER_URL} attribution={CARTO_ATTRIBUTION} />
      <TileLayer url={CARTO_LABELS_URL} />
      <MapEventHandler onViewportChange={onViewportChange || (() => {})} />
      <MarkerClusterGroup
        chunkedLoading
        maxClusterRadius={50}
        spiderfyOnMaxZoom
        showCoverageOnHover={false}
        iconCreateFunction={(cluster) => {
          const count = cluster.getChildCount();
          return L.divIcon({
            html: `<div style="width:36px;height:36px;border-radius:50%;background:rgba(185,122,87,0.15);border:1px solid rgba(185,122,87,0.3);display:flex;align-items:center;justify-content:center;font-family:Inter,sans-serif;font-size:11px;font-weight:500;color:#9e6342;">${count}</div>`,
            className: "",
            iconSize: [36, 36],
            iconAnchor: [18, 18],
          });
        }}
      >
        {temples.map((temple) => (
          <TempleMarker
            key={`${temple.source}-${temple.osmId ?? temple.slug ?? temple.name}`}
            temple={temple}
            onClick={onTempleClick}
          />
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
