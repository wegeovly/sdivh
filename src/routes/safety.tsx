import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Shield, Users, Car, HeartPulse, FileCheck2, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/safety")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Safety at KIDENTURE — Zero-tolerance, full transparency" },
      { name: "description", content: "Verified staff, RTO-approved vehicles, first-aid on every trip, insurance for every child, and real-time updates for parents." },
      { property: "og:title", content: "Safety at KIDENTURE" },
      { property: "og:description", content: "Zero-tolerance safety with full transparency for parents and schools." },
    ],
  }),
  component: SafetyPage,
});

const pillars = [
  { icon: Users, title: "1:10 staff ratio", body: "One trained facilitator per ten children, on every trip — no exceptions." },
  { icon: Car, title: "Verified vehicles", body: "RTO-approved and GPS-tracked, with CCTV monitoring on board." },
  { icon: HeartPulse, title: "Medical readiness", body: "Certified first-aid on every trip. Local hospital tie-ups along every route." },
  { icon: FileCheck2, title: "Background checks", body: "Police verification and reference checks for every staff member." },
  { icon: Shield, title: "Insurance", body: "Every enrolled child is covered by a child-specific accident policy." },
  { icon: AlertTriangle, title: "Incident protocol", body: "Documented escalation. Parents informed within 15 minutes of any incident." },
];

const docs = [
  { label: "Vehicle Registration", status: "Verified" },
  { label: "Fitness Certificate", status: "Verified" },
  { label: "Driver License & PSV Badge", status: "Verified" },
  { label: "Insurance Policy", status: "Active" },
  { label: "Police Verification — Staff", status: "Active" },
  { label: "First-Aid Certification", status: "Renewed Apr 2026" },
];

export function SafetyPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Safety hub"
        title="Zero-tolerance safety. Full transparency."
        description="Safety is not a checklist for us — it's our license to operate. Here is how we earn your trust on every journey."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <article key={p.title} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-hero">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl">{p.title}</h3>
              <p className="mt-2 text-muted-foreground">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl">Documents on file</h2>
          <p className="mt-2 text-muted-foreground">Available for school administrators on request.</p>
          <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted/60 text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-6 py-3">Document</th>
                  <th className="px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {docs.map((d) => (
                  <tr key={d.label} className="border-t border-border">
                    <td className="px-6 py-4 font-medium">{d.label}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-mint/60 px-2.5 py-0.5 text-xs font-semibold">
                        <span className="h-1.5 w-1.5 rounded-full bg-mint-deep" />
                        {d.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl">Emergency procedures</h2>
        <ol className="mt-6 space-y-4 text-muted-foreground">
          <li><span className="font-semibold text-foreground">1. Immediate care.</span> Trained first-aider stabilises and assesses on-site.</li>
          <li><span className="font-semibold text-foreground">2. Escalation.</span> Trip lead notifies the operations team within 5 minutes; route hospital activated if needed.</li>
          <li><span className="font-semibold text-foreground">3. Parent notification.</span> Designated parent contact called within 15 minutes with status and next step.</li>
          <li><span className="font-semibold text-foreground">4. Post-incident.</span> Written report shared with school and parent within 24 hours.</li>
        </ol>
      </section>
    </SiteLayout>
  );
}
