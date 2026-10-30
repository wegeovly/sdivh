import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { posts } from "@/lib/site-data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Blog — Experiential learning, safety & wellness" },
      { name: "description", content: "Trip recaps, parenting notes, safety guides and mindfulness for children." },
      { property: "og:title", content: "KIDENTURE Blog" },
      { property: "og:description", content: "Notes on experiential learning, safety and wellness for children." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Journal"
        title="Notes from the journey."
        description="Trip recaps, parenting guides, safety deep-dives and gentle wellness practices for children."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.slug} className="group rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="rounded-full bg-secondary px-2.5 py-0.5 font-medium text-foreground">{p.category}</span>
                <span>·</span>
                <span>{p.date}</span>
              </div>
              <h2 className="mt-4 font-display text-xl leading-snug group-hover:text-mint-deep">{p.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
