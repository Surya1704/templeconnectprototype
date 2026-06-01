import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MapPin, ExternalLink, ArrowLeft, Navigation, Plane, TrainFront, Bus, MessageCircle, Send } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionReveal } from "@/components/SectionReveal";
import { getJyotirlinga } from "@/data/jyotirlingas";
import { fetchTempleBySlug } from "@/lib/supabase";

export default function TempleDetail() {
  const { slug = "" } = useParams();
  const bundled = getJyotirlinga(slug);
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
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-bg-secondary" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/70 via-bg-deep/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-container mx-auto px-5 md:px-8 pb-10">
          <Link to="/explore" className="inline-flex items-center gap-1 font-sans text-[13px] text-bg-card/80 hover:text-bg-card mb-6">
            <ArrowLeft size={14} /> Explore
          </Link>
          {bundled && <Eyebrow className="text-accent-soft">Jyotirlinga</Eyebrow>}
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
          {remote?.opening_time && (
            <div className="mt-10 pt-8 border-t border-line-hair">
              <h2 className="font-serif text-[24px] text-ink-primary">Visiting hours</h2>
              <p className="mt-2 font-sans text-[14px] text-ink-secondary">
                {remote.opening_time} – {remote.closing_time ?? "—"}
              </p>
            </div>
          )}
          {remote?.accessibility_notes && (
            <div className="mt-8">
              <h2 className="font-serif text-[24px] text-ink-primary">Accessibility</h2>
              <p className="mt-2 font-serif text-[16px] text-ink-secondary leading-[1.65]">{remote.accessibility_notes}</p>
            </div>
          )}
          {hasGettingThere && (
            <div className="mt-10 pt-8 border-t border-line-hair">
              <h2 className="font-serif text-[24px] text-ink-primary">Getting there</h2>
              <ul className="mt-4 space-y-3">
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
            </div>
          )}
        </SectionReveal>

        <aside className="space-y-4">
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
                These are official community links provided by each temple.
              </p>
            </div>
          )}
        </aside>
      </div>
    </article>
  );
}
