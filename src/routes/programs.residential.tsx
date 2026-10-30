import { createFileRoute } from "@tanstack/react-router";
import { ResidentialContent } from "@/components/site/ResidentialContent";
import { residentialTrips } from "@/lib/site-data";

export const Route = createFileRoute("/programs/residential")({
  head: () => ({ meta: [
    { title: "Residential / Overnight Camp — KIDENTURE Programs" },
    { name: "description", content: "KIDENTURE overnight camps near Jodhpur, plus a Mount Abu summit trek and a Rishikesh mindfulness retreat, booked through your child's school." },
    { property: "og:title", content: "Residential / Overnight Camp — KIDENTURE" },
    { property: "og:description", content: "A Mount Abu summit trek and a Rishikesh mindfulness retreat — overnight journeys booked through your school." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => (
    <ResidentialContent
      title="Residential Camp / Overnight Camp"
      trips={residentialTrips}
    />
  ),
});
