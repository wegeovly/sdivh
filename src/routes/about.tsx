import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { GraduationCap, Compass, Heart, BookOpen, Bus, UtensilsCrossed, HandHeart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "About KIDENTURE — Our mission & founders" },
      { name: "description", content: "Founded by Pranav Nahar (MBA Tourism) and Dr. Sunil Nahar (PhD), KIDENTURE designs school-partnered learning journeys with safety, depth and joy." },
      { property: "og:title", content: "About KIDENTURE" },
      { property: "og:description", content: "Our mission, values and the team behind every journey." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About KIDENTURE"
        title="Built by educators. Trusted by schools. Loved by children."
        description="We design various types of learning that go beyond the classroom — combining inquiry, adventure and reflection — in deep partnership with India's schools."
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { icon: GraduationCap, title: "Education-led", body: "Outcomes mapped to NEP. Curiosity over content." },
            { icon: Compass, title: "Adventure-fit", body: "Age-appropriate challenge, never compromise on safety." },
            { icon: Heart, title: "Family-first", body: "Transparent communication with every parent." },
          ].map((v) => (
            <div key={v.title} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-hero">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl">{v.title}</h3>
              <p className="mt-2 text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl">Founders</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <div className="flex items-center gap-4">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-hero font-display text-2xl">PN</div>
                <div>
                  <h3 className="font-display text-xl">Pranav Nahar</h3>
                  <p className="text-sm text-muted-foreground">Founder & CEO · MBA, Tourism</p>
                </div>
              </div>
              <p className="mt-4 text-muted-foreground">
                A decade designing experiential journeys across India. Pranav leads operations, school
                partnerships and the safety playbook every KIDENTURE trip runs on.
              </p>
            </article>
            <article className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <div className="flex items-center gap-4">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-hero font-display text-2xl">SN</div>
                <div>
                  <h3 className="font-display text-xl">Dr. Sunil Nahar</h3>
                  <p className="text-sm text-muted-foreground">Co-founder & Chief Mentor · PhD, Academic Leadership</p>
                </div>
              </div>
              <p className="mt-4 text-muted-foreground">
                A respected educator and academic leader. Sunil shapes our pedagogy, NEP alignment and
                age-appropriate learning frameworks for every journey.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl">The team</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Trained facilitators, certified first-aid responders, RTO-approved drivers and an ops team
          whose only job is to make sure every child returns home glowing — and on time.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: BookOpen, title: "Professional Faculty", body: "Experienced and trained educators." },
            { icon: Bus, title: "Professional Drivers", body: "Experienced and trained professionals." },
            { icon: UtensilsCrossed, title: "Professional Catering Staff", body: "Experienced and trained professionals." },
            { icon: HandHeart, title: "Support Staff", body: "Experienced and trained professionals." },
          ].map((m) => (
            <div key={m.title} className="rounded-2xl border border-border bg-card p-5 text-center shadow-soft">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-hero">
                <m.icon className="h-6 w-6" />
              </div>
              <p className="mt-3 font-semibold">{m.title}</p>
              <p className="text-sm text-muted-foreground">{m.body}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
