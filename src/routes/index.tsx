import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield, Sparkles, Leaf, Mountain, HeartHandshake, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/herochildren.jpeg";
import { SiteLayout } from "@/components/site/SiteLayout";
import { trips } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KIDENTURE — Journeys that transform every child" },
      {
        name: "description",
        content:
          "School-partnered learning journeys for children ages 4–12. Education, adventure and spirituality — delivered with zero-tolerance safety.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "KIDENTURE — Journeys that transform every child" },
      {
        property: "og:description",
        content: "School-partnered learning journeys for children ages 4–12, across India.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-soft">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pt-20">
          <div className="flex flex-col justify-center animate-fade-up">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-mint-deep" />
              Trusted by schools across India
            </span>
            <div className="mt-3 flex items-center gap-3">
              <div className="h-px w-8 flex-1 bg-gradient-to-r from-transparent via-muted-foreground/30 to-muted-foreground/30" />
              <span className="bg-gradient-to-r from-mint-deep via-lavender-deep to-sky bg-clip-text text-base font-medium tracking-wide text-transparent sm:text-lg">
                Jeevan Rang, Yatra Sang
              </span>
              <div className="h-px w-8 flex-1 bg-gradient-to-l from-transparent via-muted-foreground/30 to-muted-foreground/30" />
            </div>
            <h1 className="mt-5 font-display text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              Every child deserves a journey that{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">transforms them.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Curated learning adventures for ages 4–12, designed with your school — blending
              education, adventure and spirituality, with zero-tolerance safety.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/trips"
                className="inline-flex h-12 items-center rounded-full border-2 border-primary bg-transparent px-6 text-base font-semibold text-foreground transition-colors hover:bg-primary/40"
              >
                Learn More
              </Link>
            </div>

          </div>

          <div className="relative animate-fade-in lg:self-stretch">
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-peach/60 blur-2xl" aria-hidden />
            <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-lavender/60 blur-2xl" aria-hidden />
            <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-card shadow-card">
              <img
                src={heroImg}
                alt="Five smiling children in KIDENTURE camp t-shirts at a tented campsite"
                width={1536}
                height={1024}
                className="h-full min-h-[420px] w-full object-cover lg:min-h-[560px]"
              />
            </div>
            <div className="absolute bottom-6 left-6 hidden rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-soft backdrop-blur sm:block">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Shield className="h-4 w-4 text-mint-deep" />
                1:10 facilitator ratio
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-mint-deep">Three pillars</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">A journey built on what matters</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { icon: Leaf, title: "Education", body: "Hands-on, inquiry-led learning tied to NEP outcomes and grade-appropriate curiosity." },
            { icon: Mountain, title: "Adventure", body: "Age-appropriate physical challenges that build resilience, teamwork and confidence." },
            { icon: Sparkles, title: "Spirituality", body: "Mindfulness, gratitude and quiet reflection — gentle, secular, and welcoming of all faiths." },
          ].map((p) => (
            <article
              key={p.title}
              className="group rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-hero">
                <p.icon className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="mt-5 font-display text-xl">{p.title}</h3>
              <p className="mt-2 text-muted-foreground">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Featured trips */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-mint-deep">Featured journeys</p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl">Trips your school can offer</h2>
            </div>
            <Link to="/trips" className="hidden text-sm font-semibold text-foreground hover:underline sm:inline-flex">
              All trips →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {trips.map((t) => (
              <article key={t.id} className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={t.image} alt={t.title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {t.pillars.map((p) => (
                      <span key={p} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium">{p}</span>
                    ))}
                  </div>
                  <h3 className="mt-3 font-display text-xl">{t.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t.destination}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-sm">
                    <span className="text-muted-foreground">{t.ageGroup} · {t.duration}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Safety strip */}
      <section className="bg-gradient-hero">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-card/80 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
              <HeartHandshake className="h-3.5 w-3.5" />
              Zero-tolerance safety
            </div>
            <h2 className="mt-4 font-display text-3xl text-foreground sm:text-4xl">
              Transparency at every step.
            </h2>
            <p className="mt-4 max-w-xl text-foreground/80">
              Verified staff, RTO-approved vehicles, insurance on every child, mandatory consent, and
              real-time trip updates for parents.
            </p>
            <Link
              to="/safety"
              className="mt-6 inline-flex h-11 items-center rounded-full bg-foreground px-5 text-sm font-semibold text-background hover:opacity-90"
            >
              Explore our safety hub
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              "Background-checked facilitators",
              "First-aid trained on every trip",
              "Insurance for every child",
              "GPS-tracked vehicles",
              "Versioned digital consent",
              "DPDP-compliant data handling",
            ].map((i) => (
              <li key={i} className="flex items-center gap-3 rounded-2xl bg-card/80 px-4 py-3 text-sm backdrop-blur">
                <CheckCircle2 className="h-4 w-4 text-mint-deep" />
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <h2 className="font-display text-3xl sm:text-4xl">Stay close to the journey</h2>
        <p className="mt-3 text-muted-foreground">
          Monthly notes on safe, joyful, age-appropriate learning experiences. No spam, ever.
        </p>
        <form
          className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="info@kidenture.com"
            className="h-12 flex-1 rounded-full border border-input bg-card px-5 text-base outline-none focus:ring-2 focus:ring-ring focus:placeholder:text-transparent"
          />
          <button
            type="submit"
            className="h-12 rounded-full bg-primary px-6 text-base font-semibold text-primary-foreground hover:scale-[1.02]"
          >
            Subscribe
          </button>
        </form>
      </section>
    </SiteLayout>
  );
}
