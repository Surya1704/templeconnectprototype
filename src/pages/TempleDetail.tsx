import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Bookmark, MapPin, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getTempleById } from "@/data/temples";
import { useAuth } from "@/context/AuthContext";
import { savedTemples } from "@/lib/storage";
import { useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";

export default function TempleDetail() {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const temple = getTempleById(id);
  const { user } = useAuth();
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (user) setSaved(savedTemples.forUser(user.id).includes(id));
  }, [user, id]);

  if (!temple) {
    return (
      <div className="mx-auto max-w-md px-4 py-16 text-center">
        <h1 className="font-serif text-2xl">Temple not found</h1>
        <Link to="/" className="mt-4 inline-block text-primary underline">
          Back to discover
        </Link>
      </div>
    );
  }

  const toggleSave = () => {
    if (!user) {
      navigate("/login", { state: { from: `/temple/${id}` } });
      return;
    }
    const isNow = savedTemples.toggle(user.id, id);
    setSaved(isNow);
    toast({ title: isNow ? "Temple saved" : "Removed from saved" });
  };

  return (
    <div className="mx-auto max-w-3xl">
      {/* Hero image */}
      <div className="relative aspect-[16/10] sm:aspect-[16/8] overflow-hidden bg-muted">
        <img
          src={temple.image}
          alt={`${temple.name} in ${temple.location}`}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
          <button
            onClick={() => navigate(-1)}
            aria-label="Go back"
            className="grid h-10 w-10 place-items-center rounded-full bg-card/90 text-foreground shadow-sm backdrop-blur"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={toggleSave}
            aria-label={saved ? "Unsave temple" : "Save temple"}
            className="grid h-10 w-10 place-items-center rounded-full bg-card/90 text-foreground shadow-sm backdrop-blur"
          >
            <Bookmark className={`h-5 w-5 ${saved ? "fill-primary text-primary" : ""}`} />
          </button>
        </div>
      </div>

      <div className="px-4 sm:px-6 -mt-6 relative">
        <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] p-5 sm:p-6 animate-fade-in">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h1 className="font-serif text-2xl sm:text-3xl font-semibold leading-tight">
                {temple.name}
              </h1>
              <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {temple.location}, {temple.state}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-1 rounded-full bg-secondary px-3 py-1 text-sm font-semibold">
              <Star className="h-4 w-4 fill-accent text-accent" />
              {temple.rating}
            </div>
          </div>

          <p className="mt-5 text-foreground/80 leading-relaxed">
            {temple.description}
          </p>

          {/* Poojas */}
          <section className="mt-6">
            <h2 className="font-serif text-lg font-semibold mb-3">Available poojas</h2>
            <ul className="space-y-2">
              {temple.poojas.map((p) => (
                <li
                  key={p.id}
                  className="flex items-start justify-between gap-3 rounded-xl bg-secondary/60 p-3"
                >
                  <div className="min-w-0">
                    <p className="font-medium text-foreground">{p.name}</p>
                    <p className="text-sm text-muted-foreground">{p.description}</p>
                  </div>
                  <span className="shrink-0 inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    {p.duration}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <Button
            asChild
            size="lg"
            className="mt-6 w-full h-12 rounded-full text-base font-semibold"
          >
            <Link to={`/book/${temple.id}`}>Book Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
