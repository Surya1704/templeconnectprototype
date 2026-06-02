import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal } from "lucide-react";
import { TempleListingCard } from "@/components/explore/TempleListingCard";
import { TempleGoogleMap } from "@/components/explore/TempleGoogleMap";
import {
  getAllBundledTemples,
  searchBundledTemples,
  type Temple,
} from "@/lib/templeData";

function templeKey(t: Temple): string {
  return `${t.source}-${t.osmId ?? t.slug ?? t.name}`;
}

export default function AllTemples() {
  const [searchParams] = useSearchParams();
  const jyotirlingaOnly = searchParams.get("tag") === "jyotirlinga";

  const [searchQuery, setSearchQuery] = useState("");
  const [selected, setSelected] = useState<Temple | null>(null);
  const [hovered, setHovered] = useState<Temple | null>(null);
  const [officialOnly, setOfficialOnly] = useState(true);

  const temples = useMemo(() => {
    let list = searchQuery.trim().length >= 2
      ? searchBundledTemples(searchQuery)
      : getAllBundledTemples();
    if (jyotirlingaOnly) list = list.filter((t) => t.isJyotirlinga);
    if (officialOnly) list = list.filter((t) => t.isOfficial);
    return list;
  }, [searchQuery, jyotirlingaOnly, officialOnly]);

  const selectedId = selected ? templeKey(selected) : undefined;
  const hoveredId = hovered ? templeKey(hovered) : undefined;

  const title = jyotirlingaOnly ? "The twelve Jyotirlingas" : "Temples across India";

  return (
    <div className="flex min-h-screen flex-col bg-bg-primary pt-16">
      {/* Airbnb-style compact search header */}
      <div className="sticky top-16 z-30 border-b border-line-hair bg-bg-card/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1760px] flex-col gap-3 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-8">
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
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setOfficialOnly((v) => !v)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 font-sans text-[13px] font-medium transition-colors duration-160 ${
                officialOnly
                  ? "border-ink-primary bg-ink-primary text-bg-card"
                  : "border-line-soft bg-bg-card text-ink-primary hover:border-ink-primary/30"
              }`}
            >
              <SlidersHorizontal size={14} />
              Official only
            </button>
          </div>
        </div>
      </div>

      {/* Split view: scrollable grid + sticky map */}
      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Mobile map — pinned above the list */}
        <div className="order-1 h-[42vh] min-h-[280px] w-full border-b border-line-hair lg:hidden">
          <TempleGoogleMap
            temples={temples}
            selectedId={selectedId}
            hoveredId={hoveredId}
            onSelect={setSelected}
            className="h-full"
          />
        </div>

        {/* Left — listings */}
        <div className="order-2 w-full lg:order-1 lg:w-[55%] xl:w-[58%]">
          <div className="border-b border-line-hair px-5 py-4 md:px-8">
            <h1 className="font-serif text-[22px] font-normal text-ink-primary md:text-[26px]">{title}</h1>
            <p className="mt-1 font-sans text-[14px] text-ink-secondary">
              {temples.length} {temples.length === 1 ? "temple" : "temples"}
              {officialOnly ? " with official trust links" : ""}
            </p>
          </div>

          <div className="px-5 py-6 md:px-8">
            {temples.length === 0 ? (
              <p className="py-16 text-center font-serif text-ink-tertiary">No temples match your search.</p>
            ) : (
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                {temples.map((t) => (
                  <TempleListingCard
                    key={templeKey(t)}
                    temple={t}
                    selected={selectedId === templeKey(t)}
                    onHover={setHovered}
                    onSelect={setSelected}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right — map (sticky on desktop) */}
        <div className="sticky top-[calc(4rem+73px)] order-3 hidden h-[calc(100vh-4rem-73px)] w-full border-l border-line-hair lg:block lg:w-[45%] xl:w-[42%]">
          <TempleGoogleMap
            temples={temples}
            selectedId={selectedId}
            hoveredId={hoveredId}
            onSelect={setSelected}
            className="h-full"
          />
        </div>
      </div>
    </div>
  );
}
