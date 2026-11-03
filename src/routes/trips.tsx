import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { trips } from "@/lib/site-data";
import { TripListing } from "@/components/site/TripListing";

export const Route = createFileRoute("/trips")({
  head: () => ({
    meta: [
      { title: "Trips — Curated learning journeys for ages 4–12" },
      { name: "description", content: "Explore KIDENTURE's curated learning journeys. Booked through your child's school." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "KIDENTURE Trips" },
      { property: "og:description", content: "Curated learning journeys for children ages 4–12." },
    ],
  }),
  component: TripsPage,
});

function TripsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Journeys"
        title="Trips your child will remember."
        description="All trips are booked through your child's school. Transport, meals, facilitation and the experience."
      />

      <TripListing items={trips} />
    </SiteLayout>
  );
}
