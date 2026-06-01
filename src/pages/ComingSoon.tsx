import { Link } from "react-router-dom";
import { Eyebrow } from "@/components/Eyebrow";

interface ComingSoonProps {
  title?: string;
  subline?: string;
}

export default function ComingSoon({
  title = "Coming soon",
  subline = "We are building this with the same care as everything else on FaithConnect. Check back shortly.",
}: ComingSoonProps) {
  return (
    <section className="min-h-[70vh] bg-bg-primary flex items-center justify-center px-5 md:px-8 pt-16">
      <div className="max-w-xl text-center">
        <Eyebrow className="text-accent-soft">FAITHCONNECT</Eyebrow>
        <h1 className="mt-6 font-serif text-[40px] md:text-[56px] font-normal leading-[1.05] tracking-[-0.02em] text-ink-primary">
          {title}
        </h1>
        <p className="mt-6 font-serif text-[18px] text-ink-secondary leading-[1.65]">{subline}</p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-accent text-bg-card font-sans text-[14px] font-medium rounded-pill hover:bg-accent-deep hover:-translate-y-0.5 transition-all duration-320 fc-out"
          >
            Back to home
          </Link>
          <Link
            to="/explore"
            className="font-sans text-[14px] text-ink-secondary hover:underline underline-offset-2 transition-colors duration-160"
          >
            Explore temples →
          </Link>
        </div>
      </div>
    </section>
  );
}
