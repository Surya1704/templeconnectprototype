import { Link } from "react-router-dom";
import { MapPin, Star } from "lucide-react";
import { Temple } from "@/data/temples";

export default function TempleCard({ temple }: { temple: Temple }) {
  return (
    <Link to={`/temple/${temple.id}`} className="fc-card block group animate-fade-in">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={temple.image}
          alt={`${temple.name} in ${temple.location}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-card/95 px-2.5 py-1 text-xs font-semibold text-foreground shadow-sm backdrop-blur">
          <Star className="h-3 w-3 fill-accent text-accent" />
          {temple.rating}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-serif text-lg font-semibold leading-tight text-foreground line-clamp-1">
          {temple.name}
        </h3>
        <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          {temple.location}, {temple.state}
        </p>
      </div>
    </Link>
  );
}
