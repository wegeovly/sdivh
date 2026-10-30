import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://kidenture.com";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/safety", changefreq: "monthly", priority: "0.9" },
          { path: "/trips", changefreq: "weekly", priority: "0.9" },
          { path: "/programs/picnic", changefreq: "weekly", priority: "0.8" },
    { path: "/programs/residential", changefreq: "weekly", priority: "0.8" },
    { path: "/programs/summer-camp", changefreq: "weekly", priority: "0.8" },
    { path: "/programs/winter-camp", changefreq: "weekly", priority: "0.8" },
          { path: "/programs/after-school", changefreq: "monthly", priority: "0.8" },
          { path: "/blog", changefreq: "weekly", priority: "0.7" },
          { path: "/faq", changefreq: "monthly", priority: "0.6" },
          { path: "/contact", changefreq: "monthly", priority: "0.6" },
          { path: "/privacy", changefreq: "monthly", priority: "0.3" },
          { path: "/terms", changefreq: "monthly", priority: "0.3" },
          { path: "/refund", changefreq: "monthly", priority: "0.3" },
          { path: "/cancellation", changefreq: "monthly", priority: "0.3" },
          { path: "/dpdp", changefreq: "monthly", priority: "0.4" },
        ];

        const urls = entries.map(
          (e) =>
            `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
        );

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
