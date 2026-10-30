import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Refund Policy — KIDENTURE" },
      { property: "og:description", content: "When and how we process refunds for KIDENTURE journeys." },
      { title: "Refund Policy — KIDENTURE" },
      { name: "description", content: "When and how we process refunds for KIDENTURE journeys." },
    ],
  }),
  component: () => (
    <LegalPage eyebrow="Legal" title="Refund Policy" description="Clear, predictable refunds — tied to our cancellation policy.">
      <h2>Refund windows</h2>
      <ul>
        <li><strong>7+ days before trip:</strong> 100% refund.</li>
        <li><strong>3–7 days before trip:</strong> 50% refund.</li>
        <li><strong>Within 3 days of trip:</strong> No refund.</li>
      </ul>
      <h2>How refunds are issued</h2>
      <p>Refunds are credited to the original payment method within 7 working days of approval.</p>
      <h2>Trip cancelled by KIDENTURE</h2>
      <p>If we cancel a trip (weather, safety, force majeure), parents receive a 100% refund or a credit toward a future trip.</p>
    </LegalPage>
  ),
});
