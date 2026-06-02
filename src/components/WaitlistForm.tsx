import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { submitWaitlist, type WaitlistType } from "@/lib/supabase";
import { INDIAN_STATES } from "@/data/indianStates";
import { ConsentCheckbox } from "@/components/ConsentCheckbox";

interface WaitlistTypeOption {
  value: WaitlistType;
  label: string;
}

interface WaitlistFormProps {
  type: WaitlistType;
  title: string;
  blurb?: string;
  /** When provided, renders a product selector and uses the chosen value as the type. */
  typeOptions?: WaitlistTypeOption[];
  /** Show the optional organization field (default: true). */
  showOrganization?: boolean;
}

type Status = "idle" | "loading" | "success" | "error";

const FIELD_CLASS =
  "w-full px-4 py-3 rounded-[12px] border border-line-soft bg-bg-card font-sans text-[14px] text-ink-primary focus:outline-none focus:border-accent/50";
const LABEL_CLASS = "block font-sans text-[11px] uppercase tracking-[0.1em] text-ink-tertiary mb-2";

export function WaitlistForm({ type, title, blurb, typeOptions, showOrganization = true }: WaitlistFormProps) {
  const location = useLocation();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [consent, setConsent] = useState(false);

  const [selectedType, setSelectedType] = useState<WaitlistType>(type);
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [stateVal, setStateVal] = useState("");
  const [notes, setNotes] = useState("");

  function resetInputs() {
    setName("");
    setOrganization("");
    setEmail("");
    setPhone("");
    setStateVal("");
    setNotes("");
    setConsent(false);
    setSelectedType(type);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent || status === "loading") return;
    setStatus("loading");
    setErrorMsg("");
    const { error } = await submitWaitlist({
      type: selectedType,
      name: name || undefined,
      organization: organization || undefined,
      email: email || undefined,
      phone: phone || undefined,
      state: stateVal || undefined,
      notes: notes || undefined,
      source: location.pathname,
    });
    if (error) {
      setStatus("error");
      setErrorMsg(error);
      return;
    }
    setStatus("success");
    resetInputs();
  }

  if (status === "success") {
    return (
      <div className="rounded-[16px] border border-line-hair bg-bg-secondary p-6">
        <h3 className="font-serif text-[22px] text-ink-primary">Thank you.</h3>
        <p className="mt-2 font-sans text-[14px] text-ink-secondary leading-[1.6]">
          You&apos;re on the list. We&apos;ll reach out at the contact details you shared.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 font-sans text-[13px] text-accent hover:underline"
        >
          Add another →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[16px] border border-line-hair bg-bg-card p-6">
      <h3 className="font-serif text-[24px] text-ink-primary">{title}</h3>
      {blurb && <p className="mt-2 font-serif text-[15px] text-ink-secondary leading-[1.6]">{blurb}</p>}

      <div className="mt-6 space-y-5">
        {typeOptions && typeOptions.length > 0 && (
          <div>
            <label htmlFor="wl-type" className={LABEL_CLASS}>I&apos;m interested in</label>
            <select
              id="wl-type"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as WaitlistType)}
              className={FIELD_CLASS}
            >
              {typeOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label htmlFor="wl-name" className={LABEL_CLASS}>Name</label>
          <input id="wl-name" value={name} onChange={(e) => setName(e.target.value)} className={FIELD_CLASS} autoComplete="name" />
        </div>

        {showOrganization && (
          <div>
            <label htmlFor="wl-org" className={LABEL_CLASS}>Organization (optional)</label>
            <input id="wl-org" value={organization} onChange={(e) => setOrganization(e.target.value)} className={FIELD_CLASS} autoComplete="organization" />
          </div>
        )}

        <div>
          <label htmlFor="wl-email" className={LABEL_CLASS}>Email</label>
          <input id="wl-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={FIELD_CLASS} autoComplete="email" />
        </div>

        <div>
          <label htmlFor="wl-phone" className={LABEL_CLASS}>Phone</label>
          <input id="wl-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={FIELD_CLASS} autoComplete="tel" />
        </div>

        <div>
          <label htmlFor="wl-state" className={LABEL_CLASS}>State</label>
          <select id="wl-state" value={stateVal} onChange={(e) => setStateVal(e.target.value)} className={FIELD_CLASS}>
            <option value="">Select state</option>
            {INDIAN_STATES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="wl-notes" className={LABEL_CLASS}>Notes (optional)</label>
          <textarea id="wl-notes" rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} className={`${FIELD_CLASS} resize-none`} />
        </div>

        <ConsentCheckbox id="wl-consent" checked={consent} onChange={setConsent}>
          I agree to FaithConnect storing my contact details to respond to this request, per the{" "}
          <Link to="/privacy" className="text-accent hover:underline">
            Privacy Policy
          </Link>
          .
        </ConsentCheckbox>

        {status === "error" && (
          <p className="font-sans text-[13px] text-red-700">{errorMsg || "Could not submit. Please try again."}</p>
        )}

        <button
          type="submit"
          disabled={!consent || status === "loading"}
          className="inline-flex items-center justify-center px-7 py-3.5 bg-accent text-bg-card font-sans text-[14px] font-medium rounded-pill hover:bg-accent-deep disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-320 fc-out"
        >
          {status === "loading" ? "Joining…" : "Join the waitlist"}
        </button>
      </div>
    </form>
  );
}

export default WaitlistForm;
