import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart, Bookmark, X } from "lucide-react";
import { REELS, Reel } from "@/data/reels";
import { useAuth } from "@/context/AuthContext";
import { likes as likesStore, saves as savesStore } from "@/lib/storage";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export default function Reels() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeIdx, setActiveIdx] = useState(0);
  const [likedSet, setLikedSet] = useState<Set<string>>(new Set());
  const [savedSet, setSavedSet] = useState<Set<string>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (user) {
      setLikedSet(new Set(likesStore.forUser(user.id)));
      setSavedSet(new Set(savesStore.forUser(user.id)));
    } else {
      setLikedSet(new Set());
      setSavedSet(new Set());
    }
  }, [user]);

  // Track which reel is in view (for autoplay)
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const items = root.querySelectorAll<HTMLDivElement>("[data-reel-idx]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio > 0.6) {
            const idx = Number((e.target as HTMLElement).dataset.reelIdx);
            setActiveIdx(idx);
          }
        });
      },
      { root, threshold: [0.6] }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const requireAuth = () => {
    if (!user) {
      toast({ title: "Sign in to interact", description: "Like and save reels with a free account." });
      navigate("/login", { state: { from: "/reels" } });
      return false;
    }
    return true;
  };

  const toggleLike = (reelId: string) => {
    if (!requireAuth() || !user) return;
    const isNow = likesStore.toggle(user.id, reelId);
    setLikedSet((prev) => {
      const n = new Set(prev);
      isNow ? n.add(reelId) : n.delete(reelId);
      return n;
    });
  };

  const toggleSave = (reelId: string) => {
    if (!requireAuth() || !user) return;
    const isNow = savesStore.toggle(user.id, reelId);
    setSavedSet((prev) => {
      const n = new Set(prev);
      isNow ? n.add(reelId) : n.delete(reelId);
      return n;
    });
    toast({ title: isNow ? "Saved" : "Removed from saved" });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black">
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 pt-[calc(env(safe-area-inset-top)+0.75rem)] pb-3 bg-gradient-to-b from-black/60 to-transparent">
        <span className="font-serif text-lg font-semibold text-white">Reels</span>
        <Link to="/" aria-label="Close" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white backdrop-blur">
          <X className="h-5 w-5" />
        </Link>
      </div>

      <div
        ref={containerRef}
        className="h-full w-full snap-y snap-mandatory overflow-y-scroll no-scrollbar overscroll-contain"
      >
        {REELS.map((reel, idx) => (
          <ReelItem
            key={reel.id}
            reel={reel}
            index={idx}
            active={activeIdx === idx}
            liked={likedSet.has(reel.id)}
            saved={savedSet.has(reel.id)}
            onLike={() => toggleLike(reel.id)}
            onSave={() => toggleSave(reel.id)}
          />
        ))}
      </div>
    </div>
  );
}

function ReelItem({
  reel, index, active, liked, saved, onLike, onSave,
}: {
  reel: Reel;
  index: number;
  active: boolean;
  liked: boolean;
  saved: boolean;
  onLike: () => void;
  onSave: () => void;
}) {
  const src = `https://www.youtube-nocookie.com/embed/${reel.youtubeId}?rel=0&modestbranding=1&playsinline=1&controls=1&autoplay=${active ? 1 : 0}&mute=1`;

  return (
    <section
      data-reel-idx={index}
      className="relative h-[100svh] w-full snap-start snap-always flex items-center justify-center"
      aria-label={`${reel.title} — ${reel.templeName}`}
    >
      {/* Video */}
      <div className="absolute inset-0">
        <iframe
          key={src /* re-mount on active toggle for autoplay */}
          src={src}
          title={reel.title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>

      {/* Bottom info gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/80 to-transparent pt-16 pb-8 px-4">
        <div className="max-w-md">
          <p className="text-white/80 text-sm">{reel.templeName}</p>
          <h3 className="mt-1 font-serif text-xl font-semibold text-white">{reel.title}</h3>
        </div>
      </div>

      {/* Actions */}
      <div className="absolute right-3 bottom-28 z-10 flex flex-col gap-5">
        <button
          onClick={onLike}
          aria-pressed={liked}
          aria-label={liked ? "Unlike" : "Like"}
          className="grid place-items-center"
        >
          <span
            className={cn(
              "grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition",
              liked && "bg-primary/90 text-primary-foreground animate-pop"
            )}
          >
            <Heart className={cn("h-6 w-6", liked && "fill-current")} />
          </span>
          <span className="mt-1 text-xs text-white">Like</span>
        </button>
        <button
          onClick={onSave}
          aria-pressed={saved}
          aria-label={saved ? "Unsave" : "Save"}
          className="grid place-items-center"
        >
          <span
            className={cn(
              "grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition",
              saved && "bg-accent text-accent-foreground animate-pop"
            )}
          >
            <Bookmark className={cn("h-6 w-6", saved && "fill-current")} />
          </span>
          <span className="mt-1 text-xs text-white">Save</span>
        </button>
      </div>
    </section>
  );
}
