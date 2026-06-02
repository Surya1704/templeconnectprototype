export const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY ?? "";
export const GOOGLE_MAPS_MAP_ID = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID ?? "DEMO_MAP_ID";

export function hasGoogleMapsKey(): boolean {
  return GOOGLE_MAPS_API_KEY.length > 0;
}
