import { MapPin, Users, Clock } from "lucide-react";
import { TripCard } from "@/components/site/TripCard";
import type { Trip } from "@/lib/site-data";

export function TripListing({ items }: { items: Trip[] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map((t) => (
          <TripCard
            key={t.id}
            image={t.image}
            alt={t.title}
            tags={t.pillars}
            title={t.title}
            description={t.description}
            rows={[
              {
                icon: <MapPin className="mt-0.5 h-4 w-4 shrink-0" />,
                text: t.destination,
                rowClassName: "flex min-h-10 items-start gap-2",
              },
              { icon: <Users className="h-4 w-4 shrink-0" />, text: `${t.ageGroup} · max 40` },
              {
                icon: <Clock className="h-4 w-4 shrink-0" />,
                text: t.duration,
              },
            ]}
          />
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-border bg-card p-6 text-sm text-muted-foreground shadow-soft sm:p-8">
        <p>
          <span className="font-semibold text-foreground">A note for parents:</span> KIDENTURE trips are
          sold only through partner schools. If your child's school isn't listed yet, ask them to write to{" "}
          <a className="text-foreground underline underline-offset-2" href="mailto:info@kidenture.com">
            info@kidenture.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
