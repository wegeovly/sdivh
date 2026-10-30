import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/cancellation")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Cancellation Policy — KIDENTURE" },
      { property: "og:description", content: "How parents and schools can cancel a KIDENTURE booking." },
      { title: "Cancellation Policy — KIDENTURE" },
      { name: "description", content: "How parents and schools can cancel a KIDENTURE booking." },
    ],
  }),
  component: () => (
    <LegalPage eyebrow="Legal" title="Cancellation Policy" description="Cancel through your school portal or by writing to info@kidenture.com.">
      <h2>Parent cancellations</h2>
      <ul>
        <li>Free cancellation up to 7 days before the trip.</li>
        <li>50% refund between 3–7 days before the trip.</li>
        <li>No refund within 3 days of the trip.</li>
      </ul>
      <h2>School cancellations</h2>
      <p>Schools can cancel a confirmed group up to 5 days before the trip without penalty. Within 5 days, an operational fee may apply.</p>
      <h2>Medical exceptions</h2>
      <p>For documented medical emergencies, we offer a 100% credit toward a future trip regardless of the cancellation window.</p>
    </LegalPage>
  ),
});
