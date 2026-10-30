import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { TripListing } from "@/components/site/TripListing";
import { picnicTrips } from "@/lib/site-data";

export const Route = createFileRoute("/programs/picnic")({
  head: () => ({ meta: [
    { title: "Picnic / Day Camp — KIDENTURE Programs" },
    { name: "description", content: "Explore KIDENTURE's day excursions around Jodhpur, booked through your child's school." },
    { property: "og:title", content: "Picnic / Day Camp — KIDENTURE" },
    { property: "og:description", content: "Lakeside lawns, a fort terrace, historic Mandore and the Rao Jodha desert trail — day excursions booked through your school." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: PicnicPage,
});

function PicnicPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Programs"
        title="Picnic / Day Camp"
        description="All trips are booked through your child's school."
      />

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl text-foreground sm:text-4xl">
          A day out that ends with stories
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          Some of the best learning happens away from a desk. A short excursion across Jodhpur — a
          lakeside lawn, a fort terrace, a historic garden, a desert trail — gives children something
          real to look at, ask about and remember.
        </p>
        <p className="mt-4 text-lg text-muted-foreground">
          Every excursion is planned together with your school: the age group, the timings, the
          learning outcome and the safety plan. Children travel in small groups with trained
          facilitators and come back at the usual school hour.
        </p>
      </section>

      <TripListing items={picnicTrips} />
    </SiteLayout>
  );
}
