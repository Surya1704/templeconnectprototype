import { Link } from "react-router-dom";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionReveal } from "@/components/SectionReveal";

export default function TermsOfUse() {
  return (
    <div className="bg-bg-primary pb-24">
      <section className="pt-24 pb-12 max-w-container mx-auto px-5 md:px-8">
        <Eyebrow>LEGAL</Eyebrow>
        <h1 className="mt-6 font-serif text-[40px] md:text-[52px] font-normal leading-[1.08] tracking-[-0.02em] text-ink-primary max-w-3xl">
          Terms of Use
        </h1>
        <p className="mt-4 font-sans text-[13px] text-ink-tertiary">Effective date: 1 June 2026</p>
        <p className="mt-6 font-serif text-[17px] text-ink-secondary leading-[1.65] max-w-3xl">
          By accessing FaithConnect, you agree to these Terms of Use. If you do not agree, please do not use the
          platform.
        </p>
      </section>

      <SectionReveal>
        <article className="max-w-container mx-auto px-5 md:px-8 max-w-3xl space-y-8 font-serif text-[16px] text-ink-secondary leading-[1.65]">
          <section>
            <h2 className="font-serif text-[24px] text-ink-primary">1. Nature of service</h2>
            <p className="mt-3">
              FaithConnect is an informational directory and technology platform for India&apos;s temples. We provide
              verified outbound links to official temple trusts, boards, and government endowment departments. We are
              not a payment processor, booking agent, travel operator, or religious authority.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[24px] text-ink-primary">2. Donations and transactions</h2>
            <p className="mt-3">
              All donation links route to third-party official portals. FaithConnect does not receive, hold, or
              route funds. Verify the destination domain before making any payment. Tax receipts (including 80G
              certificates) are issued solely by the relevant trust or board.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[24px] text-ink-primary">3. Accuracy of information</h2>
            <p className="mt-3">
              Temple timings, festival schedules, transport details, and donation URLs are sourced from official
              publications where available and may change without notice. Content is provided &quot;as is&quot;. Always
              confirm with the temple board before travel or giving.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[24px] text-ink-primary">4. Acceptable use</h2>
            <p className="mt-3">You agree not to misuse the platform, including by attempting to scrape, reverse
              engineer, interfere with services, submit false information, or impersonate temple trusts.</p>
          </section>

          <section>
            <h2 className="font-serif text-[24px] text-ink-primary">5. Intellectual property</h2>
            <p className="mt-3">
              FaithConnect branding, design, and original content are owned by FaithConnect Pvt. Ltd. Temple
              photographs credited to Wikimedia Commons or official sources remain subject to their respective
              licences.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[24px] text-ink-primary">6. Limitation of liability</h2>
            <p className="mt-3">
              To the fullest extent permitted by law, FaithConnect is not liable for losses arising from third-party
              websites, donation portals, community channels, travel, or reliance on provisional listings.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[24px] text-ink-primary">7. Governing law</h2>
            <p className="mt-3">
              These terms are governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction
              of courts in Chennai, Tamil Nadu.
            </p>
          </section>

          <section className="pt-6 border-t border-line-hair">
            <p className="font-sans text-[14px] text-ink-tertiary">
              See also our{" "}
              <Link to="/privacy" className="text-accent hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>
        </article>
      </SectionReveal>
    </div>
  );
}
