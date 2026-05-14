import React from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/brand/Logo";

/**
 * FaithConnect footer — three-row editorial spec (§7.6).
 */
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ground-ivory text-ink-espresso">
      <div className="container mx-auto px-6 pt-24 pb-12">
        {/* Row 1 — mark + statement */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <Logo size={56} />
          <p className="font-fraunces text-[clamp(28px,3.6vw,40px)] leading-tight tracking-tight text-ink-espresso max-w-xl md:text-right">
            Made with reverence.
          </p>
        </div>

        <div className="fc-hairline mt-16" />

        {/* Row 2 — link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-16">
          <FooterCol
            title="Product"
            links={[
              { to: "/explore", label: "Explore" },
              { to: "/donate", label: "Donate" },
              { to: "/list-your-temple", label: "List Your Temple" },
            ]}
          />
          <FooterCol
            title="Heritage"
            links={[
              { to: "/explore?tag=jyotirlinga", label: "Jyotirlingas" },
              { to: "/explore?style=dravidian", label: "Architecture" },
              { to: "/explore?tag=festival", label: "Festivals" },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { to: "/about", label: "About" },
            ]}
          />
          <FooterCol
            title="Contact"
            links={[
              { to: "mailto:team@faithconnect.in", label: "team@faithconnect.in", external: true },
              { to: "#", label: "Bhopal, India" },
            ]}
          />
        </div>

        <div className="fc-hairline mt-16" />

        {/* Row 3 — fine print */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-8">
          <p className="font-sans text-[12px] uppercase tracking-[0.12em] text-ink-stone">
            © {year} FaithConnect
          </p>
          <p className="font-sans text-[12px] text-ink-stone max-w-2xl md:text-right">
            FaithConnect is an independent platform. We do not process donations or pooja bookings.
            All transactions occur on temples' official portals.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterCol = ({
  title,
  links,
}: {
  title: string;
  links: { to: string; label: string; external?: boolean }[];
}) => (
  <div>
    <h4 className="font-sans uppercase text-[12px] tracking-[0.12em] text-ink-stone mb-4">
      {title}
    </h4>
    <ul className="flex flex-col gap-3">
      {links.map((l) =>
        l.external || l.to.startsWith("mailto:") || l.to === "#" ? (
          <li key={l.label}>
            <a
              href={l.to}
              className="font-sans text-[14px] text-ink-walnut hover:text-ink-espresso transition-colors"
            >
              {l.label}
            </a>
          </li>
        ) : (
          <li key={l.label}>
            <Link
              to={l.to}
              className="font-sans text-[14px] text-ink-walnut hover:text-ink-espresso transition-colors"
            >
              {l.label}
            </Link>
          </li>
        )
      )}
    </ul>
  </div>
);

export default Footer;
