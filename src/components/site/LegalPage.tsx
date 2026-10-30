import type { ReactNode } from "react";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";

export function LegalPage({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <SiteLayout>
      <PageHeader eyebrow={eyebrow} title={title} description={description} />
      <article className="prose-legal mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="space-y-6 text-muted-foreground [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-foreground [&_h3]:mt-6 [&_h3]:font-semibold [&_h3]:text-foreground [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
          {children}
        </div>
        <p className="mt-12 text-xs text-muted-foreground">{"\n"}</p>
      </article>
    </SiteLayout>
  );
}
