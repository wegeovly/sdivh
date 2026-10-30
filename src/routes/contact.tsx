import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { contactRoles, contactSchema, contactMailto } from "@/lib/contact-schema";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Join Us — KIDENTURE" },
      { name: "description", content: "Get in touch with the KIDENTURE team — for schools, parents and press." },
      { property: "og:title", content: "Join Us — KIDENTURE" },
      { property: "og:description", content: "Reach our team for schools, parents and press." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [role, setRole] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [prepared, setPrepared] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPrepared(false);
    const form = new FormData(event.currentTarget);
    const result = contactSchema.safeParse({ name: form.get("name"), email: form.get("email"), phone: form.get("phone"), whatsapp: form.get("whatsapp") === "on", role: form.get("role"), otherRole: form.get("otherRole") || "", message: form.get("message") });
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) { const key = String(issue.path[0]); if (!next[key]) next[key] = issue.message; }
      setErrors(next);
      const first = event.currentTarget.elements.namedItem(result.error.issues[0]?.path[0]?.toString() || "name");
      if (first instanceof HTMLElement) first.focus();
      return;
    }
    setErrors({});
    window.location.href = contactMailto(result.data);
    setPrepared(true);
  }
  const error = (field: string) => errors[field] ? <p id={`${field}-error`} role="alert" className="mt-1 text-sm text-destructive">{errors[field]}</p> : null;
  const inputClass = "mt-1 h-12 w-full rounded-xl border border-input bg-background px-4 outline-none focus:ring-2 focus:ring-ring";
  return (
    <SiteLayout>
      <PageHeader eyebrow="Join Us" title="We'd love to hear from you." description="Whether you're a school exploring a partnership or a parent with a question — we usually reply within one working day." />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <form
          className="rounded-3xl border border-border bg-card p-7 shadow-soft"
          onSubmit={submit}
          noValidate
        >
          <div className="grid gap-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium">Your name</label>
              <input id="name" name="name" autoComplete="name" required maxLength={100} aria-invalid={!!errors.name} aria-describedby="name-error" className={inputClass} />
              {error("name")}
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">Email (optional)</label>
              <input id="email" name="email" type="email" autoComplete="email" maxLength={255} aria-invalid={!!errors.email} aria-describedby="email-error" className={inputClass} />
              {error("email")}
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" required maxLength={20} aria-invalid={!!errors.phone} aria-describedby="phone-error" className={inputClass} />
              {error("phone")}
              <label className="mt-3 flex items-start gap-2 text-sm"><input name="whatsapp" type="checkbox" className="mt-1 accent-primary" />This is also my WhatsApp number</label>
            </div>
            <div>
              <label htmlFor="role" className="text-sm font-medium">I am a…</label>
              <select id="role" name="role" required value={role} onChange={(event) => setRole(event.target.value)} aria-invalid={!!errors.role} aria-describedby="role-error" className={inputClass}>
                <option value="" disabled>Select your role</option>
                {contactRoles.map((item) => <option key={item}>{item}</option>)}
              </select>
              {error("role")}
            </div>
            {role === "Other" && <div><label htmlFor="otherRole" className="text-sm font-medium">Your role</label><input id="otherRole" name="otherRole" required maxLength={100} aria-invalid={!!errors.otherRole} aria-describedby="otherRole-error" className={inputClass} />{error("otherRole")}</div>}
            <div>
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea id="message" name="message" rows={5} required maxLength={1000} aria-invalid={!!errors.message} aria-describedby="message-error" className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring" />
              {error("message")}
            </div>
            <p className="flex items-center gap-2 rounded-xl border border-border bg-muted px-4 py-3 text-sm font-medium text-foreground"><Clock className="h-4 w-4 shrink-0" aria-hidden="true" />We’re available from 10 AM to 5 PM — leave us a message anytime.</p>
            <Button type="submit" className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-base font-semibold text-primary-foreground hover:scale-[1.02]">
              Send message
            </Button>
            {prepared && <p role="status" className="text-sm text-muted-foreground">Your message is ready in your email app. Send it there to contact KIDENTURE.</p>}
          </div>
        </form>

        <aside className="space-y-4">
          {[
            { icon: Mail, label: "Email", value: "hr@kidenture.com" },
            { icon: Phone, label: "Phone", value: "+91 9460007938" },
            { icon: MapPin, label: "Office", value: "Jodhpur, Rajasthan, India" },
          ].map((i) => (
            <div key={i.label} className="flex items-start gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-hero">
                <i.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{i.label}</p>
                <p className="text-lg font-semibold">{i.value}</p>
              </div>
            </div>
          ))}
          <p className="text-sm text-muted-foreground">{"\n"}</p>
        </aside>
      </section>
    </SiteLayout>
  );
}
