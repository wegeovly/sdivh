import { createFileRoute } from "@tanstack/react-router";
import { ResidentialContent } from "@/components/site/ResidentialContent";

export const Route = createFileRoute("/programs/summer-camp")({
  head: () => ({ meta: [
    { title: "Summer Camp — KIDENTURE Programs" },
    { name: "description", content: "KIDENTURE overnight summer camps near Jodhpur, booked through your child's school." },
    { property: "og:title", content: "Summer Camp — KIDENTURE" },
    { property: "og:description", content: "Overnight summer camps, booked through your school." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <ResidentialContent title="Summer Camp" description="Residential Camp / Overnight Camp" />,
});
