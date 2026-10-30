import { createFileRoute } from "@tanstack/react-router";
import { ResidentialContent } from "@/components/site/ResidentialContent";

export const Route = createFileRoute("/programs/winter-camp")({
  head: () => ({ meta: [
    { title: "Winter Camp — KIDENTURE Programs" },
    { name: "description", content: "KIDENTURE overnight winter camps near Jodhpur, booked through your child's school." },
    { property: "og:title", content: "Winter Camp — KIDENTURE" },
    { property: "og:description", content: "Overnight winter camps, booked through your school." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <ResidentialContent title="Winter Camp" description="Residential Camp / Overnight Camp" />,
});
