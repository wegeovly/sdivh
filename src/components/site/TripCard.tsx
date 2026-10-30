import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

export type TripCardRow = {
  icon: ReactNode;
  text: string;
  /** Extra classes for rows that need a taller box or a top-aligned icon. */
  rowClassName?: string;
};

/**
 * One card shape used by every pack on the site — journeys and camp locations —
 * so all cards line up in size, spacing and detail rows.
 */
export function TripCard({
  image,
  alt,
  tags,
  title,
  description,
  rows,
}: {
  image: string;
  alt: string;
  tags: string[];
  title: string;
  description: string;
  rows: TripCardRow[];
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex h-7 flex-wrap gap-2 overflow-hidden">
          {tags.map((t) => (
            <span key={t} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium">
              {t}
            </span>
          ))}
        </div>
        <h2 className="mt-3 min-h-14 font-display text-xl leading-7 line-clamp-2">{title}</h2>
        <p className="mt-2 min-h-15 text-sm leading-5 text-muted-foreground line-clamp-3">{description}</p>
        <dl className="mb-5 mt-5 grid gap-2 text-sm text-muted-foreground">
          {rows.map((r) => (
            <div key={r.text} className={r.rowClassName ?? "flex items-center gap-2"}>
              {r.icon}
              <span className="line-clamp-2">{r.text}</span>
            </div>
          ))}
        </dl>
        <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
          <Button
            asChild
            variant="outline"
            className="h-10 rounded-full border-2 border-primary px-4 text-sm font-semibold hover:bg-primary/40"
          >
            <Link to="/contact">Request via school</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
