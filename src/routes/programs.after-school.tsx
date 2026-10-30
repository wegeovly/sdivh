import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Leaf, Mountain, Sparkles, CheckCircle2, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/programs/after-school")({
  head: () => ({ meta: [
    { title: "After School — KIDENTURE Programs" },
    { name: "description", content: "KIDENTURE After School — guided learning, play and mindfulness for children ages 4–12, run together with your school after the last bell." },
    { property: "og:title", content: "After School — KIDENTURE" },
    { property: "og:description", content: "The best part of the day is what comes next. After School built with schools, for children ages 4–12." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: AfterSchoolPage,
});

const pillars = [
  {
    icon: Leaf,
    title: "Education",
    body: "Because the best answers are the ones children find themselves. Hands-on, inquiry-led learning, tied to NEP outcomes.",
  },
  {
    icon: Mountain,
    title: "Adventure",
    body: "Because confidence grows one brave try at a time. Age-appropriate challenges that build resilience and teamwork.",
  },
  {
    icon: Sparkles,
    title: "Spirituality",
    body: "Because a calm heart learns better. A little mindfulness and gratitude, gentle, secular and welcoming of all faiths.",
  },
];

const safetyItems = [
  "Background-checked facilitators",
  "First-aid trained team",
  "Mandatory digital consent",
  "DPDP-compliant data handling",
];

function AfterSchoolPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Programs"
        title="After School"
        description="For children ages 4–12, made together with your school."
      />

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl text-foreground sm:text-4xl">
          The best part of the day is what comes next
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          When the last bell rings, a child's day isn't over. It's the part where they get to be
          curious, silly, brave and fully themselves. KIDENTURE After School is built for that moment.
        </p>
        <p className="mt-4 text-lg text-muted-foreground">
          Children walk out of class carrying a day's worth of questions. Here, those questions get
          somewhere. They build, move, wonder, laugh and, for a few quiet minutes, pause to be
          grateful. Guided by trained facilitators, in a program made together with their school, for
          children ages 4–12.
        </p>
      </section>

      {/* Pillars */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((item) => (
              <article key={item.title} className="rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-hero">
                  <item.icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="mt-5 font-display text-xl">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="bg-gradient-hero">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-card/80 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
              <HeartHandshake className="h-3.5 w-3.5" />
              Safety first, always
            </div>
            <h2 className="mt-4 font-display text-3xl text-foreground sm:text-4xl">
              Your child's safety is where we start
            </h2>
            <p className="mt-4 max-w-xl text-foreground/80">
              You trust us with the most important person in your day. That's a responsibility we take
              seriously.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {safetyItems.map((i) => (
              <li key={i} className="flex items-center gap-3 rounded-2xl bg-card/80 px-4 py-3 text-sm backdrop-blur">
                <CheckCircle2 className="h-4 w-4 text-mint-deep" />
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Families */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl text-foreground sm:text-4xl">
          Made for children. Built around families.
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          You shouldn't have to wonder. You'll know who is with your child, what the plan is, and
          exactly where to ask.
        </p>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 bg-gradient-soft">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-foreground sm:text-4xl">
            Let their day end with a smile
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Bring KIDENTURE After School to your school, and give every child something to look
            forward to after the bell.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center rounded-full border-2 border-primary bg-transparent px-6 text-base font-semibold text-foreground transition-colors hover:bg-primary/40"
            >
              Join Us
            </Link>
          </div>
          <div className="mx-auto mt-10 flex max-w-md items-center gap-3">
            <div className="h-px w-8 flex-1 bg-gradient-to-r from-transparent via-muted-foreground/30 to-muted-foreground/30" />
            <span className="bg-gradient-to-r from-mint-deep via-lavender-deep to-sky bg-clip-text text-base font-medium tracking-wide text-transparent">
              Jeevan Rang, Yatra Sang
            </span>
            <div className="h-px w-8 flex-1 bg-gradient-to-l from-transparent via-muted-foreground/30 to-muted-foreground/30" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
