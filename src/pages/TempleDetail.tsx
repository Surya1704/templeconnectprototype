import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  MapPin,
  ExternalLink,
  ArrowLeft,
  Navigation,
  Plane,
  TrainFront,
  Bus,
  MessageCircle,
  Send,
  Shirt,
  Sparkles,
  Calendar,
  Clock,
  Camera,
  Landmark,
  BookOpen,
} from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionReveal } from "@/components/SectionReveal";
import ImageWithFallback from "@/components/ImageWithFallback";
import { getBundledTemple } from "@/data/temples";
import { getTempleProfile } from "@/data/templeProfiles";
import { fetchTempleBySlug } from "@/lib/supabase";

function InfoBlock({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-10 pt-8 border-t border-line-hair first:mt-0 first:pt-0 first:border-0">
      <h2 className="flex items-center gap-2 font-serif text-[24px] text-ink-primary">
        <Icon size={18} className="text-accent" strokeWidth={1.5} />
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function TagList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-pill border border-line-soft bg-bg-secondary/60 px-3 py-1.5 font-sans text-[13px] text-ink-secondary"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function TempleDetail() {
  const { slug = "" } = useParams();
  const bundled = getBundledTemple(slug);
  const [remote, setRemote] = useState<Awaited<ReturnType<typeof fetchTempleBySlug>>["data"]>(null);
  const [loading, setLoading] = useState(!bundled);

  useEffect(() => {
    if (bundled) return;
    setLoading(true);
    fetchTempleBySlug(slug).then(({ data }) => {
      setRemote(data);
      setLoading(false);
    });
  }, [slug, bundled]);

  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center pt-16">
        <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
      </div>
    );
  }

  const name = bundled?.name ?? remote?.name;
  const state = bundled?.state ?? remote?.state;
  const deity = bundled?.deity ?? remote?.deity;
  const blurb = bundled?.blurb ?? remote?.blurb ?? remote?.description;
  const imageUrl = bundled?.imageUrl ?? remote?.hero_image ?? remote?.image_urls?.[0];
  const donationLink = bundled?.donationLink ?? remote?.donation_link;
  const officialWebsite = bundled?.officialWebsite ?? remote?.official_website;
  const lat = bundled?.lat ?? remote?.lat;
  const lng = bundled?.lng ?? remote?.lng;
  const nearestAirport = bundled?.nearestAirport ?? remote?.nearest_airport ?? undefined;
  const nearestRailway = bundled?.nearestRailway ?? remote?.nearest_railway ?? undefined;
  const localTransport = bundled?.localTransport ?? remote?.local_transport ?? undefined;
  const whatsappLink = bundled?.whatsappLink ?? remote?.whatsapp_link ?? undefined;
  const telegramLink = bundled?.telegramLink ?? remote?.telegram_link ?? undefined;
  const hasCommunity = Boolean(whatsappLink || telegramLink);
  const hasGettingThere = Boolean(nearestAirport || nearestRailway || localTransport);
  const directionsUrl =
    typeof lat === "number" && typeof lng === "number"
      ? `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
      : null;

  const profile = getTempleProfile(
    slug,
    name && deity && blurb && state
      ? { name, deity, blurb, state }
      : undefined
  );

  if (!name) {
    return (
      <div className="max-w-container mx-auto px-5 md:px-8 pt-28 pb-24 text-center">
        <h1 className="font-serif text-[32px] text-ink-primary">Temple not found</h1>
        <Link to="/explore" className="inline-block mt-6 font-sans text-[14px] text-accent hover:underline">
          ← Back to explore
        </Link>
      </div>
    );
  }

  return (
    <article className="bg-bg-primary pb-24">
      <div className="relative h-[min(48vh,480px)] w-full overflow-hidden bg-bg-secondary">
        <ImageWithFallback
          src={imageUrl ?? "/placeholder.svg"}
          alt={name}
          fallbackSrc="/placeholder.svg"
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/70 via-bg-deep/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-container mx-auto px-5 md:px-8 pb-10">
          <Link to="/explore" className="inline-flex items-center gap-1 font-sans text-[13px] text-bg-card/80 hover:text-bg-card mb-6">
            <ArrowLeft size={14} /> Explore
          </Link>
          {bundled?.isJyotirlinga && <Eyebrow className="text-accent-soft">Jyotirlinga</Eyebrow>}
          <h1 className="mt-4 font-serif text-[clamp(32px,5vw,56px)] font-normal leading-[1.05] tracking-[-0.02em] text-bg-card">
            {name}
          </h1>
          {state && (
            <p className="mt-3 flex items-center gap-2 font-sans text-[14px] text-bg-card/85">
              <MapPin size={14} /> {state}
              {remote?.district ? ` · ${remote.district}` : ""}
            </p>
          )}
        </div>
      </div>

      <div className="max-w-container mx-auto px-5 md:px-8 mt-12 grid gap-12 lg:grid-cols-[1fr_320px]">
        <SectionReveal>
          {deity && (
            <p className="font-sans text-[12px] uppercase tracking-[0.1em] text-ink-tertiary">{deity}</p>
          )}
          {blurb && (
            <p className="mt-6 font-serif text-[19px] text-ink-secondary leading-[1.65] max-w-2xl dropcap">
              {blurb}
            </p>
          )}

          {profile && (
            <>
              <InfoBlock icon={Landmark} title="Significance">
                <p className="font-serif text-[16px] text-ink-secondary leading-[1.65] max-w-2xl">
                  {profile.significance}
                </p>
              </InfoBlock>

              {profile.history && (
                <InfoBlock icon={BookOpen} title="History">
                  <p className="font-serif text-[16px] text-ink-secondary leading-[1.65] max-w-2xl">
                    {profile.history}
                  </p>
                </InfoBlock>
              )}

              {profile.architecture && (
                <InfoBlock icon={Landmark} title="Architecture">
                  <p className="font-serif text-[16px] text-ink-secondary leading-[1.65] max-w-2xl">
                    {profile.architecture}
                  </p>
                </InfoBlock>
              )}

              <InfoBlock icon={Shirt} title="Temple attire">
                <p className="font-serif text-[16px] text-ink-secondary leading-[1.65] max-w-2xl">
                  {profile.templeAttire}
                </p>
              </InfoBlock>

              <InfoBlock icon={Sparkles} title="Poojas & sevas">
                <TagList items={profile.poojas} />
                <p className="mt-3 font-sans text-[12px] text-ink-tertiary">
                  Book arjitha sevas on the official temple portal where online booking is available.
                </p>
              </InfoBlock>

              <InfoBlock icon={Calendar} title="Events & festivals">
                <TagList items={profile.events} />
              </InfoBlock>

              {(profile.visitingHours || profile.bestTimeToVisit) && (
                <InfoBlock icon={Clock} title="When to visit">
                  {profile.visitingHours && (
                    <p className="font-sans text-[14px] text-ink-secondary">
                      <span className="font-medium text-ink-primary">Hours: </span>
                      {profile.visitingHours}
                    </p>
                  )}
                  {profile.bestTimeToVisit && (
                    <p className={`font-sans text-[14px] text-ink-secondary ${profile.visitingHours ? "mt-2" : ""}`}>
                      <span className="font-medium text-ink-primary">Best season: </span>
                      {profile.bestTimeToVisit}
                    </p>
                  )}
                </InfoBlock>
              )}

              {profile.photography && (
                <InfoBlock icon={Camera} title="Photography">
                  <p className="font-serif text-[16px] text-ink-secondary leading-[1.65] max-w-2xl">
                    {profile.photography}
                  </p>
                </InfoBlock>
              )}

              {profile.nearbyAttractions && profile.nearbyAttractions.length > 0 && (
                <InfoBlock icon={MapPin} title="Nearby">
                  <ul className="space-y-2">
                    {profile.nearbyAttractions.map((place) => (
                      <li key={place} className="font-sans text-[14px] text-ink-secondary">
                        · {place}
                      </li>
                    ))}
                  </ul>
                </InfoBlock>
              )}
            </>
          )}

          {remote?.opening_time && (
            <InfoBlock icon={Clock} title="Visiting hours (official)">
              <p className="font-sans text-[14px] text-ink-secondary">
                {remote.opening_time} – {remote.closing_time ?? "—"}
              </p>
            </InfoBlock>
          )}

          {remote?.accessibility_notes && (
            <InfoBlock icon={MapPin} title="Accessibility">
              <p className="font-serif text-[16px] text-ink-secondary leading-[1.65]">{remote.accessibility_notes}</p>
            </InfoBlock>
          )}

          {hasGettingThere && (
            <InfoBlock icon={Navigation} title="Getting there">
              <ul className="space-y-3">
                {nearestAirport && (
                  <li className="flex items-start gap-3">
                    <Plane size={16} className="mt-0.5 shrink-0 text-accent" strokeWidth={1.5} />
                    <span className="font-sans text-[14px] text-ink-secondary">{nearestAirport}</span>
                  </li>
                )}
                {nearestRailway && (
                  <li className="flex items-start gap-3">
                    <TrainFront size={16} className="mt-0.5 shrink-0 text-accent" strokeWidth={1.5} />
                    <span className="font-sans text-[14px] text-ink-secondary">{nearestRailway}</span>
                  </li>
                )}
                {localTransport && (
                  <li className="flex items-start gap-3">
                    <Bus size={16} className="mt-0.5 shrink-0 text-accent" strokeWidth={1.5} />
                    <span className="font-sans text-[14px] text-ink-secondary">{localTransport}</span>
                  </li>
                )}
              </ul>
            </InfoBlock>
          )}
        </SectionReveal>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          {directionsUrl && (
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-6 py-3.5 border border-line-soft font-sans text-[14px] text-ink-primary rounded-pill hover:border-accent/40 transition-colors duration-160"
            >
              <Navigation size={14} strokeWidth={1.5} /> Get directions
            </a>
          )}
          {donationLink && (
            <a
              href={donationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-accent text-bg-card font-sans text-[14px] font-medium rounded-pill hover:bg-accent-deep transition-all duration-320 fc-out"
            >
              Donate via official trust <ExternalLink size={14} />
            </a>
          )}
          {officialWebsite && (
            <a
              href={officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-6 py-3.5 border border-line-soft font-sans text-[14px] text-ink-primary rounded-pill hover:border-accent/40 transition-colors duration-160"
            >
              Official website <ExternalLink size={14} />
            </a>
          )}
          {remote?.hrce_managed && (
            <p className="font-sans text-[12px] text-ink-tertiary text-center">
              Managed by {remote.hrce_department ?? "HR&CE"}
            </p>
          )}

          {hasCommunity && (
            <div className="pt-2 space-y-3">
              {whatsappLink && (
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 font-sans text-[14px] font-medium rounded-pill transition-opacity duration-160 hover:opacity-90"
                  style={{ backgroundColor: "#25D366", color: "#ffffff" }}
                >
                  <MessageCircle size={15} strokeWidth={1.75} /> Join WhatsApp community
                </a>
              )}
              {telegramLink && (
                <a
                  href={telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 border border-line-soft font-sans text-[14px] text-ink-primary rounded-pill hover:border-accent/40 transition-colors duration-160"
                >
                  <Send size={14} strokeWidth={1.5} /> Join Telegram channel
                </a>
              )}
              <p className="font-sans text-[11px] text-ink-tertiary text-center leading-[1.5]">
                Official community links provided by the temple trust.
              </p>
            </div>
          )}
        </aside>
      </div>
    </article>
  );
}
