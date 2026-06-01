import { Link } from "react-router-dom";
import { Eyebrow } from "@/components/Eyebrow";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-5 pt-16 text-center">
      <Eyebrow>404</Eyebrow>
      <h1 className="mt-6 font-serif text-[40px] text-ink-primary">This path isn&apos;t on the map.</h1>
      <p className="mt-4 font-serif text-[17px] text-ink-secondary max-w-md">
        The page you requested may have moved. Explore temples or return home.
      </p>
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <Link
          to="/"
          className="inline-flex px-7 py-3.5 bg-accent text-bg-card font-sans text-[14px] font-medium rounded-pill hover:bg-accent-deep transition-all duration-320 fc-out"
        >
          Home
        </Link>
        <Link
          to="/explore"
          className="inline-flex px-7 py-3.5 border border-line-soft font-sans text-[14px] text-ink-primary rounded-pill hover:border-accent/40 transition-colors duration-160"
        >
          Explore temples
        </Link>
      </div>
    </div>
  );
}
