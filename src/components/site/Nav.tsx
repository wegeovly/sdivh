import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { programLinks } from "@/lib/programs";
import logoAsset from "@/assets/kidenture-logo.png.asset.json";

const links = [
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/safety", label: "Safety" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [desktopProgramsOpen, setDesktopProgramsOpen] = useState(false);
  const itemClass = "block px-5 py-4 text-base font-semibold leading-relaxed text-foreground transition-colors hover:bg-muted focus-visible:bg-muted focus-visible:outline-none";
  const programMenu = (close: () => void) => (
    <div className="py-2">
      {programLinks.map((p) => (
        <Link key={p.to} to={p.to} onClick={close} className={itemClass} activeProps={{ className: "bg-muted" }}>{p.label}</Link>
      ))}
    </div>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="relative inline-flex" aria-label="KIDENTURE home">
          <img src={logoAsset.url} alt="KIDENTURE logo" className="h-10 w-auto" width={118} height={40} />
          <span aria-hidden="true" className="pointer-events-none absolute select-none text-[0.5rem] font-semibold leading-none text-foreground" style={{ left: "95%", top: "10%" }}>™</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <div className="relative" onMouseEnter={() => setDesktopProgramsOpen(true)} onMouseLeave={() => setDesktopProgramsOpen(false)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setDesktopProgramsOpen(false); }} onKeyDown={(event) => { if (event.key === "Escape") setDesktopProgramsOpen(false); }}>
            <Button asChild variant="ghost" className={`h-16 rounded-none px-4 py-2 text-sm font-normal ${desktopProgramsOpen ? "bg-primary text-primary-foreground hover:bg-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}><Link to="/trips" aria-expanded={desktopProgramsOpen} aria-controls="desktop-programs" onFocus={() => setDesktopProgramsOpen(true)} onClick={() => setDesktopProgramsOpen(false)}>Programs <ChevronDown className={desktopProgramsOpen ? "rotate-180" : ""} /></Link></Button>
            {desktopProgramsOpen && <div id="desktop-programs" className="absolute left-0 top-full w-[22rem] max-h-[calc(100dvh-5rem)] overflow-y-auto border border-border bg-card shadow-card">{programMenu(() => setDesktopProgramsOpen(false))}</div>}
          </div>
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              activeProps={{ className: "bg-muted text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild><Link
            to="/contact"
            className="inline-flex h-10 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
          >
            Join Us
          </Link></Button>
        </div>

        <Button
          variant="ghost"
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full hover:bg-muted lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <nav className="mx-auto flex max-h-[calc(100dvh-4rem)] max-w-7xl flex-col gap-1 overflow-y-auto px-4 py-3" aria-label="Mobile">
            <Button variant="ghost" className={`h-12 shrink-0 justify-between rounded-none px-4 text-base font-normal ${programsOpen ? "bg-primary text-primary-foreground hover:bg-primary" : ""}`} aria-expanded={programsOpen} aria-controls="mobile-programs" onClick={() => setProgramsOpen((value) => !value)}>Programs <ChevronDown className={programsOpen ? "rotate-180" : ""} /></Button>
            {programsOpen && <div id="mobile-programs" className="border border-border bg-card">{programMenu(() => { setOpen(false); setProgramsOpen(false); })}</div>}
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base text-foreground hover:bg-muted"
                activeProps={{ className: "bg-muted" }}
              >
                {l.label}
              </Link>
            ))}
            <Button asChild><Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-primary px-5 text-base font-semibold text-primary-foreground"
            >
              Join Us
            </Link></Button>
          </nav>
        </div>
      )}
    </header>
  );
}
