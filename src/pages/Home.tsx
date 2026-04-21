import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Logo from "@/components/Logo";
import TempleCard from "@/components/TempleCard";
import { TEMPLES } from "@/data/temples";
import { useAuth } from "@/context/AuthContext";
import { Link } from "react-router-dom";

export default function Home() {
  const [q, setQ] = useState("");
  const { user } = useAuth();

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return TEMPLES;
    return TEMPLES.filter(
      (t) =>
        t.name.toLowerCase().includes(s) ||
        t.location.toLowerCase().includes(s) ||
        t.state.toLowerCase().includes(s)
    );
  }, [q]);

  return (
    <div className="mx-auto max-w-5xl px-4 pt-6 pb-8">
      {/* Header */}
      <header className="flex items-center justify-between">
        <Logo />
        {!user && (
          <Link
            to="/login"
            className="text-sm font-medium text-primary hover:underline"
          >
            Sign in
          </Link>
        )}
      </header>

      {/* Hero */}
      <section className="mt-8 mb-6">
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold leading-tight text-foreground">
          One platform <br className="sm:hidden" />
          <span className="text-primary">for faith.</span>
        </h1>
        <p className="mt-2 text-muted-foreground">
          Discover. Connect. Belong.
        </p>
      </section>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search temples, cities, states…"
          className="pl-9 h-11 rounded-full bg-card"
          aria-label="Search temples"
        />
      </div>

      {/* Listings */}
      <section aria-label="Temple listings">
        <h2 className="sr-only">Temples</h2>
        {filtered.length === 0 ? (
          <p className="py-12 text-center text-muted-foreground">
            No temples match “{q}”.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((t) => (
              <TempleCard key={t.id} temple={t} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
