import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/kidenture-logo.png.asset.json";

const cols = [
  {
    links: [
      { to: "/blog", label: "Blog" },
      { to: "/faq", label: "FAQ" },
      { to: "/safety", label: "Safety" },
    ],
  },
  {
    links: [
      { to: "/privacy", label: "Privacy" },
      { to: "/terms", label: "Terms" },
      { to: "/refund", label: "Refund Policy" },
      { to: "/cancellation", label: "Cancellation" },
      { to: "/dpdp", label: "DPDP Compliance" },
    ],
  },
] as const;

const linkClass = "text-sm text-muted-foreground transition-colors hover:text-foreground";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-muted/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-[2fr_1fr_1fr_1.5fr] lg:px-8">
        <div>
          <Link to="/" className="relative inline-flex" aria-label="KIDENTURE home">
            <img src={logoAsset.url} alt="KIDENTURE logo" className="h-12 w-auto" width={141} height={48} />
            <span aria-hidden="true" className="pointer-events-none absolute select-none text-[0.5rem] font-semibold leading-none text-foreground" style={{ left: "95%", top: "10%" }}>™</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Every child deserves a journey that transforms them. Curated various learning programs built with schools.
          </p>
        </div>

        {cols.map((col, index) => (
          <div key={index}>
            <ul className="space-y-3">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={linkClass}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <ul className="space-y-3">
            <li><Link to="/about" className={linkClass}>About</Link></li>
          </ul>
          <address className="mt-3 space-y-3 text-sm not-italic text-muted-foreground">
            <p><a className="break-all hover:text-foreground" href="mailto:info@kidenture.com">info@kidenture.com</a></p>
            <p><a className="hover:text-foreground" href="tel:+919460007938">+91 9460007938</a></p>
          </address>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>© 2026 KIDENTURE<sup className="ml-0.5 text-[0.6rem] font-semibold align-super">™</sup></p>
        </div>
      </div>
    </footer>
  );
}
