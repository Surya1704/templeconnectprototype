import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { allTemples as staticTemples } from "@/data/mergeTemples";
import type { Temple } from "@/data/temples";

/**
 * Loads temples from Lovable Cloud (Supabase) and merges with the static
 * dataset as a fallback for any IDs not yet migrated. DB rows always take
 * precedence when a matching ID exists.
 */
export function useTemples() {
  const [temples, setTemples] = useState<Temple[]>(staticTemples);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data, error } = await supabase.from("temples").select("*");
      if (cancelled) return;
      if (error || !data) {
        setLoading(false);
        return;
      }
      const byId = new Map<string, Temple>(staticTemples.map((t) => [t.id, t]));
      for (const row of data) {
        byId.set(row.id, {
          id: row.id,
          name: row.name,
          location: row.location,
          state: row.state,
          rating: Number(row.rating ?? 0),
          image: row.image ?? "",
          hours: row.hours ?? "",
          price: row.price ?? 0,
          tags: row.tags ?? [],
          description: row.description ?? "",
          congestion: (row.congestion as Temple["congestion"]) ?? undefined,
        });
      }
      setTemples(Array.from(byId.values()));
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return { temples, loading };
}
