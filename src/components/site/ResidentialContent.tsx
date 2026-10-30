import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { TripListing } from "@/components/site/TripListing";
import type { Trip } from "@/lib/site-data";

export function ResidentialContent({
  title,
  description,
  trips = [],
}: {
  title: string;
  description?: string;
  trips?: Trip[];
}) {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Programs" title={title} description={description} />

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl text-foreground sm:text-4xl">
          Away for the night, cared for every minute
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          A night away is a big deal at this age — often the first time a child packs their own bag,
          sleeps under a sky full of stars, and wakes up for a dawn trek. We build every overnight
          journey so the excitement comes with a safety net.
        </p>
        <p className="mt-4 text-lg text-muted-foreground">
          From a summit trek to a riverside retreat, each excursion is planned with your school:
          small groups, trained facilitators, verified transport, and parents who are never left
          wondering.
        </p>
      </section>

      {trips.length > 0 && (
        <>
          <h2 className="sr-only">Overnight journeys</h2>
          <TripListing items={trips} />
        </>
      )}
    </SiteLayout>
  );
}
