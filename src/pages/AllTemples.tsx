import { useMemo, useState, useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, Navigation, X, Loader2 } from "lucide-react";
import { TempleListingCard } from "@/components/explore/TempleListingCard";
import { ExploreMap } from "@/components/explore/ExploreMap";
import { ConsentCheckbox } from "@/components/ConsentCheckbox";
import {
  getAllBundledTemples,
  getBundledFilterOptions,
  searchBundledTemples,
  type Temple,
} from "@/lib/templeData";
import { distanceKm } from "@/lib/geo";

function templeKey(t: Temple): string {
  return `${t.source}-${t.osmId ?? t.slug ?? t.name}`;
}

type SortMode = "name" | "nearest";

export default function AllTemples() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const jyotirlingaOnlyParam = searchParams.get("tag") === "jyotirlinga";
  const pilgrimageParam = searchParams.get("type") === "pilgrimage";

  const { deities, states } = useMemo(() => getBundledFilterOptions(), []);

  const [searchQuery, setSearchQuery] = useState("");
  const [selected, setSelected] = useState<Temple | null>(null);
  const [hovered, setHovered] = useState<Temple | null>(null);
  const [officialOnly, setOfficialOnly] = useState(true);
  const [jyotirlingaOnly, setJyotirlingaOnly] = useState(jyotirlingaOnlyParam || pilgrimageParam);
  const [stateFilter, setStateFilter] = useState("");
  const [deityFilter, setDeityFilter] = useState("");
  const [donationOnly, setDonationOnly] = useState(false);
  const [sortMode, setSortMode] = useState<SortMode>("name");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locating, setLocating] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [locationConsent, setLocationConsent] = useState(false);

  const requestLocation = useCallback(() => {
    if (!locationConsent) {
      setLocationError("Please confirm location consent first.");
      return;
    }
    if (!navigator.geolocation) {
      setLocationError("Your browser does not support location services.");
      return;
    }
    setLocating(true);
    setLocationError(null);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setSortMode("nearest");
        setLocating(false);
      },
      (err) => {
        setLocating(false);
        setLocationError(
          err.code === err.PERMISSION_DENIED
            ? "Location access denied. Enable it in browser settings to find nearby temples."
            : "Could not determine your location. Try again."
        );
      },
      { enableHighAccuracy: false, timeout: 12000, maximumAge: 300000 }
    );
  }, [locationConsent]);

  const clearLocation = () => {
    setUserLocation(null);
    setLocationError(null);
    setSortMode("name");
  };

  const temples = useMemo(() => {
    let list = searchQuery.trim().length >= 2
      ? searchBundledTemples(searchQuery)
      : getAllBundledTemples();

    if (jyotirlingaOnly) list = list.filter((t) => t.isJyotirlinga);
    if (officialOnly) list = list.filter((t) => t.isOfficial);
    if (stateFilter) list = list.filter((t) => t.state === stateFilter);
    if (deityFilter) list = list.filter((t) => t.deity?.includes(deityFilter));
    if (donationOnly) list = list.filter((t) => Boolean(t.donationLink));

    if (userLocation) {
      list = list.map((t) => ({
        ...t,
        distanceKm: distanceKm(userLocation.lat, userLocation.lng, t.lat, t.lng),
      }));
      if (sortMode === "nearest") {
        list = [...list].sort((a, b) => (a.distanceKm ?? 0) - (b.distanceKm ?? 0));
      }
    }

    if (sortMode === "name") {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [searchQuery, jyotirlingaOnly, officialOnly, stateFilter, deityFilter, donationOnly, userLocation, sortMode]);

  const selectedId = selected ? templeKey(selected) : undefined;
  const hoveredId = hovered ? templeKey(hovered) : undefined;
  const activeFilterCount = [stateFilter, deityFilter, jyotirlingaOnly, donationOnly, !officialOnly].filter(Boolean).length;

  const title = jyotirlingaOnly ? "The twelve Jyotirlingas" : "Temples across India";

  const handleOpen = useCallback(
    (t: Temple) => {
      setSelected(t);
      if (t.slug) navigate(`/explore/${t.slug}`);
    },
    [navigate]
  );

  const mapPanel = (
    <ExploreMap
      temples={temples}
      selectedId={selectedId}
      hoveredId={hoveredId}
      userLocation={userLocation}
      onSelect={setSelected}
      className="h-full w-full"
    />
  );

  return (
    <div className="flex min-h-screen flex-col bg-bg-primary pt-16">
      <div className="sticky top-16 z-30 border-b border-line-hair bg-bg-card/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1760px] flex-col gap-3 px-5 py-4 md:px-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <div className="relative flex-1 max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-tertiary" size={16} strokeWidth={1.5} />
              <input
                type="search"
                placeholder="Search temples by name, deity, or state…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-line-soft bg-bg-card py-3 pl-11 pr-4 font-sans text-[14px] text-ink-primary shadow-sm placeholder:text-ink-muted focus:border-ink-primary focus:outline-none"
              />
            </div>
            <button
              type="button"
              onClick={() => setFiltersOpen((v) => !v)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line-soft bg-bg-card px-4 py-3 font-sans text-[13px] font-medium text-ink-primary hover:border-ink-primary/30"
            >
              <SlidersHorizontal size={14} />
              Filters{activeFilterCount > 0 ? ` (${activeFilterCount})` : ""}
            </button>
          </div>

          {filtersOpen && (
            <div className="grid grid-cols-1 gap-3 rounded-[16px] border border-line-hair bg-bg-secondary/50 p-4 sm:grid-cols-2 lg:grid-cols-4">
              <label className="flex flex-col gap-1.5">
                <span className="font-sans text-[11px] uppercase tracking-[0.08em] text-ink-tertiary">State</span>
                <select
                  value={stateFilter}
                  onChange={(e) => setStateFilter(e.target.value)}
                  className="rounded-pill border border-line-soft bg-bg-card px-3 py-2 font-sans text-[13px] text-ink-primary"
                >
                  <option value="">All states</option>
                  {states.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="font-sans text-[11px] uppercase tracking-[0.08em] text-ink-tertiary">Deity</span>
                <select
                  value={deityFilter}
                  onChange={(e) => setDeityFilter(e.target.value)}
                  className="rounded-pill border border-line-soft bg-bg-card px-3 py-2 font-sans text-[13px] text-ink-primary"
                >
                  <option value="">All deities</option>
                  {deities.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="font-sans text-[11px] uppercase tracking-[0.08em] text-ink-tertiary">Sort by</span>
                <select
                  value={sortMode}
                  onChange={(e) => setSortMode(e.target.value as SortMode)}
                  className="rounded-pill border border-line-soft bg-bg-card px-3 py-2 font-sans text-[13px] text-ink-primary"
                  disabled={!userLocation && sortMode === "nearest"}
                >
                  <option value="name">Name (A–Z)</option>
                  <option value="nearest" disabled={!userLocation}>Nearest first</option>
                </select>
              </label>
              <div className="flex flex-col gap-2 sm:col-span-2 lg:col-span-1">
                <span className="font-sans text-[11px] uppercase tracking-[0.08em] text-ink-tertiary">Show</span>
                <div className="flex flex-wrap gap-2">
                  <FilterChip active={officialOnly} onClick={() => setOfficialOnly((v) => !v)} label="Official only" />
                  <FilterChip active={jyotirlingaOnly} onClick={() => setJyotirlingaOnly((v) => !v)} label="Jyotirlingas" />
                  <FilterChip active={donationOnly} onClick={() => setDonationOnly((v) => !v)} label="Has donate link" />
                </div>
              </div>
            </div>
          )}

          {/* Nearby temples — opt-in only (DPDP: no auto location) */}
          <div className="rounded-[16px] border border-line-hair bg-bg-secondary/40 p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-sans text-[13px] font-medium text-ink-primary">Find temples near you</p>
                <p className="mt-0.5 font-sans text-[12px] text-ink-tertiary leading-snug">
                  Location is used only in this session to sort nearby temples. Never stored or shared.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {!userLocation ? (
                  <>
                    <ConsentCheckbox
                      id="location-consent"
                      checked={locationConsent}
                      onChange={setLocationConsent}
                    >
                      I consent to one-time location use
                    </ConsentCheckbox>
                    <button
                      type="button"
                      onClick={requestLocation}
                      disabled={locating || !locationConsent}
                      className="inline-flex items-center gap-1.5 rounded-full bg-ink-primary px-4 py-2 font-sans text-[12px] font-medium text-bg-card disabled:opacity-50"
                    >
                      {locating ? <Loader2 size={14} className="animate-spin" /> : <Navigation size={14} />}
                      Use my location
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={clearLocation}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line-soft px-4 py-2 font-sans text-[12px] text-ink-primary"
                  >
                    <X size={14} /> Clear location
                  </button>
                )}
              </div>
            </div>
            {locationError && (
              <p className="mt-2 font-sans text-[12px] text-accent">{locationError}</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col lg:flex-row">
        <div className="order-1 h-[42vh] min-h-[280px] w-full border-b border-line-hair lg:order-2 lg:sticky lg:top-[calc(4rem+73px)] lg:h-[calc(100vh-4rem-73px)] lg:w-[45%] lg:border-b-0 lg:border-l lg:xl:w-[42%]">
          {mapPanel}
        </div>

        <div className="order-2 w-full lg:order-1 lg:w-[55%] xl:w-[58%]">
          <div className="border-b border-line-hair px-5 py-4 md:px-8">
            <h1 className="font-serif text-[22px] font-normal text-ink-primary md:text-[26px]">{title}</h1>
            <p className="mt-1 font-sans text-[14px] text-ink-secondary">
              {temples.length} {temples.length === 1 ? "temple" : "temples"}
              {userLocation && sortMode === "nearest" ? " · sorted by distance" : ""}
            </p>
          </div>

          <div className="px-5 py-6 md:px-8">
            {temples.length === 0 ? (
              <p className="py-16 text-center font-serif text-ink-tertiary">No temples match your filters.</p>
            ) : (
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                {temples.map((t) => (
                  <TempleListingCard
                    key={templeKey(t)}
                    temple={t}
                    selected={selectedId === templeKey(t)}
                    onHover={setHovered}
                    onSelect={handleOpen}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterChip({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 font-sans text-[11px] font-medium transition-colors duration-160 ${
        active
          ? "border-ink-primary bg-ink-primary text-bg-card"
          : "border-line-soft bg-bg-card text-ink-primary hover:border-ink-primary/30"
      }`}
    >
      {label}
    </button>
  );
}
