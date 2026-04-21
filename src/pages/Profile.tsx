import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CalendarDays, Heart, Bookmark, LogOut, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { useAuth } from "@/context/AuthContext";
import { bookings as bookingsStore, likes as likesStore, saves as savesStore, savedTemples } from "@/lib/storage";
import { format } from "date-fns";
import { TEMPLES } from "@/data/temples";
import { REELS } from "@/data/reels";

export default function Profile() {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();

  const [tab, setTab] = useState<"bookings" | "temples" | "reels">("bookings");
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!loading && !user) navigate("/login", { state: { from: "/profile" } });
  }, [user, loading, navigate]);

  const myBookings = useMemo(() => (user ? bookingsStore.forUser(user.id) : []), [user, tick]);
  const mySavedTempleIds = useMemo(() => (user ? savedTemples.forUser(user.id) : []), [user, tick]);
  const myLikedIds = useMemo(() => (user ? likesStore.forUser(user.id) : []), [user, tick]);
  const mySavedReelIds = useMemo(() => (user ? savesStore.forUser(user.id) : []), [user, tick]);

  const savedTempleObjs = TEMPLES.filter((t) => mySavedTempleIds.includes(t.id));
  const reelObjs = REELS.filter((r) => myLikedIds.includes(r.id) || mySavedReelIds.includes(r.id));

  if (!user) return null;

  const refresh = () => setTick((n) => n + 1);

  return (
    <div className="mx-auto max-w-2xl px-4 pt-6 pb-8">
      <header className="flex items-center justify-between">
        <Logo />
        <button
          onClick={() => { logout(); refresh(); }}
          className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1.5 text-sm font-medium hover:bg-muted"
        >
          <LogOut className="h-4 w-4" /> Sign out
        </button>
      </header>

      <section className="mt-6 flex items-center gap-4">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-primary/15 text-2xl font-serif font-semibold text-primary">
          {user.name.trim().charAt(0).toUpperCase() || "U"}
        </div>
        <div className="min-w-0">
          <h1 className="font-serif text-2xl font-semibold leading-tight">{user.name || "Devotee"}</h1>
          <p className="truncate text-sm text-muted-foreground">{user.email}</p>
        </div>
      </section>

      {/* Tabs */}
      <div className="mt-6 grid grid-cols-3 rounded-full bg-secondary p-1">
        <TabBtn active={tab === "bookings"} onClick={() => setTab("bookings")} icon={CalendarDays} label="Bookings" />
        <TabBtn active={tab === "temples"} onClick={() => setTab("temples")} icon={Bookmark} label="Temples" />
        <TabBtn active={tab === "reels"} onClick={() => setTab("reels")} icon={Heart} label="Reels" />
      </div>

      <div className="mt-5 animate-fade-in">
        {tab === "bookings" && (
          myBookings.length === 0 ? (
            <Empty title="No bookings yet" cta={<Button asChild className="rounded-full"><Link to="/">Discover temples</Link></Button>} />
          ) : (
            <ul className="space-y-3">
              {myBookings.map((b) => (
                <li key={b.id}>
                  <Link to={`/temple/${b.templeId}`} className="fc-card flex items-center justify-between p-4">
                    <div className="min-w-0">
                      <p className="font-serif text-lg font-semibold truncate">{b.templeName}</p>
                      <p className="text-sm text-muted-foreground">
                        {b.poojaName} · {format(new Date(b.date), "PPP")}
                      </p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </Link>
                </li>
              ))}
            </ul>
          )
        )}

        {tab === "temples" && (
          savedTempleObjs.length === 0 ? (
            <Empty title="No saved temples yet" cta={<Button asChild className="rounded-full"><Link to="/">Browse temples</Link></Button>} />
          ) : (
            <ul className="space-y-3">
              {savedTempleObjs.map((t) => (
                <li key={t.id}>
                  <Link to={`/temple/${t.id}`} className="fc-card flex items-center gap-3 p-3">
                    <img src={t.image} alt="" className="h-16 w-20 shrink-0 rounded-lg object-cover" />
                    <div className="min-w-0">
                      <p className="font-serif text-base font-semibold truncate">{t.name}</p>
                      <p className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {t.location}, {t.state}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )
        )}

        {tab === "reels" && (
          reelObjs.length === 0 ? (
            <Empty title="No liked or saved reels yet" cta={<Button asChild className="rounded-full"><Link to="/reels">Watch reels</Link></Button>} />
          ) : (
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {reelObjs.map((r) => (
                <li key={r.id}>
                  <Link to="/reels" className="fc-card block">
                    <div className="relative aspect-[9/16] overflow-hidden bg-muted">
                      <img
                        src={`https://i.ytimg.com/vi/${r.youtubeId}/hqdefault.jpg`}
                        alt={r.title}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-2">
                      <p className="text-xs text-muted-foreground truncate">{r.templeName}</p>
                      <p className="text-sm font-medium leading-tight line-clamp-2">{r.title}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )
        )}
      </div>
    </div>
  );
}

function TabBtn({ active, onClick, icon: Icon, label }: { active: boolean; onClick: () => void; icon: React.ComponentType<{ className?: string }>; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium transition-colors ${
        active ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
      }`}
    >
      <Icon className="h-4 w-4" />
      {label}
    </button>
  );
}

function Empty({ title, cta }: { title: string; cta: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-card p-8 text-center shadow-[var(--shadow-soft)]">
      <p className="text-muted-foreground">{title}</p>
      <div className="mt-4">{cta}</div>
    </div>
  );
}
