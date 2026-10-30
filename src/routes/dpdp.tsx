import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/dpdp")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "DPDP Compliance — KIDENTURE" },
      { property: "og:description", content: "How KIDENTURE complies with India's Digital Personal Data Protection Act, especially for child data." },
      { title: "DPDP Compliance — KIDENTURE" },
      { name: "description", content: "How KIDENTURE complies with India's Digital Personal Data Protection Act, especially for child data." },
    ],
  }),
  component: () => (
    <LegalPage eyebrow="Legal" title="DPDP Compliance" description="Our approach to India's Digital Personal Data Protection Act, 2023 — with extra care for child data.">
      <h2>Verifiable parental consent</h2>
      <p>We collect a versioned, digitally signed parental consent before processing any child's personal data. The consent text is preserved with the parent's signature and timestamp.</p>
      <h2>Purpose limitation</h2>
      <p>Child data is used only to safely deliver the trip and meet legal obligations. It is never used for advertising, profiling or behavioural tracking.</p>
      <h2>Data principal rights</h2>
      <ul>
        <li>Right to access and correction.</li>
        <li>Right to erasure of data after the trip's retention window.</li>
        <li>Right to grievance redressal via our Data Protection Officer.</li>
      </ul>
      <h2>Contact our DPO</h2>
      <p>Write to info@kidenture.com. We respond within 7 working days.</p>
    </LegalPage>
  ),
});
