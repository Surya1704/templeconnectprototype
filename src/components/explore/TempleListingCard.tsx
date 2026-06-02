import { Link } from "react-router-dom";
import { ExternalLink, Heart, MapPin } from "lucide-react";
import type { Temple } from "@/lib/templeData";

interface TempleListingCardProps {
  temple: Temple;
  selected?: boolean;
  onHover?: (temple: Temple | null) => void;
  onSelect?: (temple: Temple) => void;
}

export function TempleListingCard({ temple, selected, onHover, onSelect }: TempleListingCardProps) {
  const img = temple.imageUrl && !temple.imageUrl.endsWith("placeholder.svg") ? temple.imageUrl : "/placeholder.svg";

  return (
    <article
      className={`group cursor-pointer ${selected ? "ring-2 ring-accent ring-offset-2 rounded-[16px]" : ""}`}
      onMouseEnter={() => onHover?.(temple)}
      onMouseLeave={() => onHover?.(null)}
      onClick={() => onSelect?.(temple)}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[16px] bg-bg-secondary">
        <img
          src={img}
          alt={temple.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <button
          type="button"
          aria-label="Save temple"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-bg-card/90 text-ink-primary opacity-0 shadow-sm transition-opacity duration-160 group-hover:opacity-100"
          onClick={(e) => e.stopPropagation()}
        >
          <Heart size={16} strokeWidth={1.75} />
        </button>
        {temple.isOfficial && (
          <span className="absolute left-3 top-3 rounded-pill bg-bg-card/95 px-2.5 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.08em] text-accent shadow-sm">
            Official
          </span>
        )}
        {temple.isJyotirlinga && (
          <span className="absolute left-3 bottom-3 rounded-pill bg-bg-deep/80 px-2.5 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.08em] text-bg-card backdrop-blur-sm">
            Jyotirlinga
          </span>
        )}
      </div>

      <div className="mt-3 space-y-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-sans text-[15px] font-semibold leading-snug text-ink-primary line-clamp-1">
            {temple.name}
          </h3>
        </div>
        <p className="font-sans text-[14px] text-ink-secondary line-clamp-1">
          {temple.deity}
          {temple.state ? ` · ${temple.state}` : ""}
        </p>
        {temple.state && (
          <p className="flex items-center gap-1 font-sans text-[13px] text-ink-tertiary">
            <MapPin size={12} strokeWidth={1.5} />
            {temple.state}
          </p>
        )}

        {(temple.officialWebsite || temple.donationLink) && (
          <div className="flex flex-wrap items-center gap-2 pt-2" onClick={(e) => e.stopPropagation()}>
            {temple.officialWebsite && (
              <a
                href={temple.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-pill border border-line-soft px-3 py-1 font-sans text-[11px] font-medium text-ink-primary hover:border-accent/40 transition-colors duration-160"
              >
                Official site <ExternalLink size={10} />
              </a>
            )}
            {temple.donationLink && (
              <a
                href={temple.donationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-pill bg-accent/10 px-3 py-1 font-sans text-[11px] font-medium text-accent hover:bg-accent hover:text-bg-card transition-colors duration-160"
              >
                Donate <ExternalLink size={10} />
              </a>
            )}
          </div>
        )}

        {temple.slug && (
          <Link
            to={`/explore/${temple.slug}`}
            onClick={(e) => e.stopPropagation()}
            className="inline-block pt-1 font-sans text-[12px] text-ink-tertiary underline underline-offset-2 hover:text-accent"
          >
            View full profile
          </Link>
        )}
      </div>
    </article>
  );
}
