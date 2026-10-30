import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Terms of Service — KIDENTURE" },
      { property: "og:description", content: "The terms under which KIDENTURE provides experiential learning journeys via partner schools." },
      { title: "Terms of Service — KIDENTURE" },
      { name: "description", content: "The terms under which KIDENTURE provides experiential learning journeys via partner schools." },
    ],
  }),
  component: () => (
    <LegalPage eyebrow="Legal" title="Terms of Service" description="These terms govern how parents and schools use KIDENTURE.">
      <h2>Eligibility</h2>
      <p>Trips are open to children ages 4–12 (1-day) and 6–12 (2-day) enrolled via a partner school. A signed parental consent is mandatory.</p>
      <h2>Bookings</h2>
      <p>All bookings are facilitated by the partner school. Direct-to-parent sales are not offered. Group size is 15–40 children per trip.</p>
      <h2>Pricing</h2>
      <p>Pricing is all-inclusive of transport, food, facilitation and the experience. Taxes, where applicable, are included.</p>
      <h2>Conduct</h2>
      <p>KIDENTURE may decline or end participation if a child or accompanying adult endangers others or the experience. Refunds in such cases are at our discretion.</p>
      <h2>Limitation of liability</h2>
      <p>To the extent permitted by Indian law, our liability is limited to the amount paid for the affected trip.</p>
    </LegalPage>
  ),
});
