import { useState } from "react";
import { Link } from "react-router-dom";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionReveal } from "@/components/SectionReveal";
import { WaitlistForm } from "@/components/WaitlistForm";
import { ConsentCheckbox } from "@/components/ConsentCheckbox";
import { submitInquiry } from "@/lib/supabase";
import { INDIAN_STATES } from "@/data/indianStates";

export default function OnboardTemple() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [consent, setConsent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) return;
    const fd = new FormData(e.currentTarget);
    setStatus("loading");
    setErrorMsg("");
    const { error } = await submitInquiry({
      temple_trust_name: String(fd.get("trust") ?? ""),
      contact_name: String(fd.get("contact") ?? ""),
      contact_role: String(fd.get("role") ?? "") || undefined,
      state: String(fd.get("state") ?? ""),
      annual_donation_volume: String(fd.get("volume") ?? "") || undefined,
      phone: String(fd.get("phone") ?? ""),
      notes: String(fd.get("notes") ?? "") || undefined,
    });
    if (error) {
      setStatus("error");
      setErrorMsg(error);
      return;
    }
    setStatus("success");
    e.currentTarget.reset();
    setConsent(false);
  }

  return (
    <div className="bg-bg-primary pb-24">
      <section className="pt-24 pb-12 max-w-container mx-auto px-5 md:px-8">
        <Eyebrow className="text-accent-soft">FOR TEMPLE TRUSTS</Eyebrow>
        <h1 className="mt-6 font-serif text-[40px] md:text-[52px] font-normal leading-[1.08] tracking-[-0.02em] text-ink-primary max-w-2xl">
          List your temple on FaithConnect.
        </h1>
        <p className="mt-6 font-serif text-[17px] text-ink-secondary leading-[1.65] max-w-xl">
          Operations CRM, donation transparency, and verified public profiles — built for boards and HR&amp;CE departments.
        </p>
      </section>

      <section id="modules" className="bg-bg-card border-y border-line-hair py-16 scroll-mt-24">
        <div className="max-w-container mx-auto px-5 md:px-8 grid md:grid-cols-3 gap-8">
          {[
            { title: "Donation ledger", body: "Auto-reconciliation with trust bank feeds and 80G receipt tracking." },
            { title: "Visitor analytics", body: "Footfall forecasts and crowd-safe scheduling for festivals." },
            { title: "Compliance", body: "HR&CE reporting templates and audit-ready exports." },
          ].map((m) => (
            <div key={m.title}>
              <h3 className="font-serif text-[22px] text-ink-primary">{m.title}</h3>
              <p className="mt-2 font-serif text-[15px] text-ink-secondary leading-[1.6]">{m.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pilot" className="max-w-container mx-auto px-5 md:px-8 py-16 scroll-mt-24">
        <SectionReveal>
          <h2 className="font-serif text-[32px] text-ink-primary">Start a free pilot</h2>
          <p className="mt-3 font-serif text-[16px] text-ink-secondary max-w-lg">
            Share your trust details. We respond within two business days from{" "}
            <a href="mailto:hello@faithconnect.in" className="text-accent hover:underline">hello@faithconnect.in</a>.
          </p>

          {status === "success" ? (
            <p className="mt-8 p-4 rounded-[12px] bg-bg-secondary border border-line-hair font-sans text-[14px] text-ink-primary">
              Thank you. Your inquiry was received.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 max-w-lg space-y-6">
              <div>
                <label htmlFor="trust" className="block font-sans text-[11px] uppercase tracking-[0.1em] text-ink-tertiary mb-2">Trust / board name</label>
                <input id="trust" name="trust" required className="w-full px-4 py-3 rounded-[12px] border border-line-soft bg-bg-card font-sans text-[14px]" />
              </div>
              <div>
                <label htmlFor="contact" className="block font-sans text-[11px] uppercase tracking-[0.1em] text-ink-tertiary mb-2">Contact name</label>
                <input id="contact" name="contact" required className="w-full px-4 py-3 rounded-[12px] border border-line-soft bg-bg-card font-sans text-[14px]" />
              </div>
              <div>
                <label htmlFor="role" className="block font-sans text-[11px] uppercase tracking-[0.1em] text-ink-tertiary mb-2">Role (optional)</label>
                <input id="role" name="role" className="w-full px-4 py-3 rounded-[12px] border border-line-soft bg-bg-card font-sans text-[14px]" />
              </div>
              <div>
                <label htmlFor="state" className="block font-sans text-[11px] uppercase tracking-[0.1em] text-ink-tertiary mb-2">State</label>
                <select id="state" name="state" required className="w-full px-4 py-3 rounded-[12px] border border-line-soft bg-bg-card font-sans text-[14px]">
                  <option value="">Select state</option>
                  {INDIAN_STATES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="phone" className="block font-sans text-[11px] uppercase tracking-[0.1em] text-ink-tertiary mb-2">Phone</label>
                <input id="phone" name="phone" type="tel" required className="w-full px-4 py-3 rounded-[12px] border border-line-soft bg-bg-card font-sans text-[14px]" />
              </div>
              <div>
                <label htmlFor="volume" className="block font-sans text-[11px] uppercase tracking-[0.1em] text-ink-tertiary mb-2">Annual donation volume (optional)</label>
                <input id="volume" name="volume" placeholder="e.g. ₹ 50 Lakh – 1 Cr" className="w-full px-4 py-3 rounded-[12px] border border-line-soft bg-bg-card font-sans text-[14px]" />
              </div>
              <div>
                <label htmlFor="notes" className="block font-sans text-[11px] uppercase tracking-[0.1em] text-ink-tertiary mb-2">Notes</label>
                <textarea id="notes" name="notes" rows={4} className="w-full px-4 py-3 rounded-[12px] border border-line-soft bg-bg-card font-sans text-[14px] resize-none" />
              </div>
              <ConsentCheckbox id="inquiry-consent" checked={consent} onChange={setConsent}>
                I agree to FaithConnect storing my contact details to respond to this request, per the{" "}
                <Link to="/privacy" className="text-accent hover:underline">
                  Privacy Policy
                </Link>
                .
              </ConsentCheckbox>
              {status === "error" && (
                <p className="font-sans text-[13px] text-red-700">{errorMsg || "Could not submit. Check Supabase configuration."}</p>
              )}
              <button
                type="submit"
                disabled={!consent || status === "loading"}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-accent text-bg-card font-sans text-[14px] font-medium rounded-pill hover:bg-accent-deep disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-320 fc-out"
              >
                {status === "loading" ? "Sending…" : "Submit inquiry"}
              </button>
            </form>
          )}
        </SectionReveal>
      </section>

      <section id="waitlist" className="bg-bg-secondary border-y border-line-hair py-16 scroll-mt-24">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <SectionReveal>
            <Eyebrow className="text-accent-soft">EARLY ACCESS</Eyebrow>
            <h2 className="mt-4 font-serif text-[32px] text-ink-primary">Join the waitlist</h2>
            <p className="mt-3 font-serif text-[16px] text-ink-secondary max-w-lg">
              Not ready for a full pilot? Tell us which product you want first and we&apos;ll keep you posted.
            </p>
            <div className="mt-8 max-w-lg">
              <WaitlistForm
                type="crm"
                title="Tell us what you need"
                blurb="We're rolling out access in stages across India."
                typeOptions={[
                  { value: "crm", label: "Operations CRM" },
                  { value: "donation_software", label: "Donation software" },
                  { value: "website", label: "Temple website / public profile" },
                ]}
              />
            </div>
          </SectionReveal>
        </div>
      </section>

      <section id="cases" className="bg-bg-deep py-16 scroll-mt-24">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <h2 className="font-serif text-[28px] text-bg-card">Case studies</h2>
          <p className="mt-4 font-serif text-[16px] text-bg-card/70 max-w-lg">
            Pilot partners receive white-glove onboarding. Published case studies will appear here after Q3 2026.
          </p>
        </div>
      </section>
    </div>
  );
}
