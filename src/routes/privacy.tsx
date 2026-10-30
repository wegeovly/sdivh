import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Privacy Policy — KIDENTURE" },
      { property: "og:description", content: "How KIDENTURE collects, uses and protects information about parents, schools and children." },
      { title: "Privacy Policy — KIDENTURE" },
      { name: "description", content: "How KIDENTURE collects, uses and protects information about parents, schools and children." },
    ],
  }),
  component: () => (
    <LegalPage eyebrow="Legal" title="Privacy Policy" description="We treat data — especially data about children — as a duty of care, not just a compliance exercise.">
      <h2>Information we collect</h2>
      <p>We collect only the information needed to safely deliver a trip: parent and school contact details, child name, age, gender, allergies and medical notes, emergency contact, and consent records.</p>
      <h2>How we use it</h2>
      <ul>
        <li>To plan, deliver and document a safe trip.</li>
        <li>To communicate with parents and schools before, during and after a trip.</li>
        <li>To meet legal, insurance and audit obligations.</li>
      </ul>
      <h2>Child data</h2>
      <p>Child information is encrypted at rest, accessible only to authorised staff on a need-to-know basis, and never sold or shared with marketing partners. We delete child medical and emergency information 90 days after a trip ends, unless legally required to retain it.</p>
      <h2>Your rights</h2>
      <p>You may access, correct or request deletion of your data at any time by writing to info@kidenture.com.</p>
    </LegalPage>
  ),
});
