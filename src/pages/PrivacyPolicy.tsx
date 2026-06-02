import { Link } from "react-router-dom";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionReveal } from "@/components/SectionReveal";

export default function PrivacyPolicy() {
  return (
    <div className="bg-bg-primary pb-24">
      <section className="pt-24 pb-12 max-w-container mx-auto px-5 md:px-8">
        <Eyebrow>LEGAL</Eyebrow>
        <h1 className="mt-6 font-serif text-[40px] md:text-[52px] font-normal leading-[1.08] tracking-[-0.02em] text-ink-primary max-w-3xl">
          Privacy Policy
        </h1>
        <p className="mt-4 font-sans text-[13px] text-ink-tertiary">
          Effective date: 1 June 2026 · Last updated: 2 June 2026
        </p>
        <p className="mt-6 font-serif text-[17px] text-ink-secondary leading-[1.65] max-w-3xl">
          FaithConnect Pvt. Ltd. (&quot;FaithConnect&quot;, &quot;we&quot;, &quot;us&quot;) operates the FaithConnect website and related
          services. This Privacy Policy explains how we collect, use, store, and protect personal data in accordance
          with the Digital Personal Data Protection Act, 2023 (DPDP Act) and applicable Indian law.
        </p>
      </section>

      <SectionReveal>
        <article className="max-w-container mx-auto px-5 md:px-8 max-w-3xl space-y-10 font-serif text-[16px] text-ink-secondary leading-[1.65]">
          <section>
            <h2 className="font-serif text-[24px] text-ink-primary">1. Data fiduciary</h2>
            <p className="mt-3">
              FaithConnect Pvt. Ltd., registered in Chennai, India, is the data fiduciary for personal data collected
              through this platform. For privacy-related requests, contact our Grievance Officer at{" "}
              <a href="mailto:grievance@faithconnect.in" className="text-accent hover:underline">
                grievance@faithconnect.in
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[24px] text-ink-primary">2. What we collect</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li>
                <strong className="font-normal text-ink-primary">Inquiry and waitlist forms:</strong> name, phone
                number, email address, organisation or temple trust name, state, role, and any notes you voluntarily
                provide.
              </li>
              <li>
                <strong className="font-normal text-ink-primary">Location (Explore map only):</strong> if you opt in
                via the consent checkbox, your browser may share approximate coordinates once per session to sort
                nearby temples. We do not persist location data on our servers or in browser storage.
              </li>
              <li>
                <strong className="font-normal text-ink-primary">Technical data:</strong> standard server and
                analytics logs (IP address, browser type, pages visited, timestamps) in aggregated or pseudonymised
                form where possible.
              </li>
            </ul>
            <p className="mt-3">
              We do <strong className="font-normal text-ink-primary">not</strong> collect payment card details,
              UPI credentials, donation amounts, or any financial transaction data. All donations are made directly
              on official temple trust portals.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[24px] text-ink-primary">3. Lawful purpose and consent</h2>
            <p className="mt-3">
              We process personal data only for specified, legitimate purposes and with your free, specific, informed,
              and unambiguous consent (DPDP Act, Section 6). Consent is obtained through explicit checkboxes on
              forms before submission. You may withdraw consent at any time by emailing{" "}
              <a href="mailto:grievance@faithconnect.in" className="text-accent hover:underline">
                grievance@faithconnect.in
              </a>
              ; withdrawal does not affect prior lawful processing.
            </p>
            <p className="mt-3">Purposes include:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Responding to temple onboarding inquiries and pilot requests</li>
              <li>Managing devotee and product waitlists</li>
              <li>Improving platform reliability and security</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-[24px] text-ink-primary">4. What we do not do</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li>We do not sell or rent personal data to third parties.</li>
              <li>We do not use location data without explicit, session-scoped consent.</li>
              <li>We do not embed payment iframes or proxy temple donations.</li>
              <li>We do not send unsolicited marketing without separate opt-in consent.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-[24px] text-ink-primary">5. Third-party links and services</h2>
            <p className="mt-3">
              Outbound links to official temple websites, donation portals, WhatsApp, Telegram, Google Maps
              directions, and social channels are operated by third parties. When you leave FaithConnect, that
              organisation&apos;s privacy policy and terms govern your interaction. Verify the destination domain
              (e.g. <code className="font-sans text-[13px] bg-bg-secondary px-1 rounded">somnath.org</code>,{" "}
              <code className="font-sans text-[13px] bg-bg-secondary px-1 rounded">hrce.tn.gov.in</code>) before
              sharing personal or financial information.
            </p>
            <p className="mt-3">
              If you configure Supabase or other backend services, those providers process data under their own
              terms. FaithConnect uses Supabase only when environment credentials are present.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[24px] text-ink-primary">6. Data retention</h2>
            <p className="mt-3">
              Contact and waitlist records are retained only as long as necessary to fulfil the purpose for which
              they were collected, or until you request erasure. Aggregated analytics may be retained in
              de-identified form for operational reporting.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[24px] text-ink-primary">7. Security</h2>
            <p className="mt-3">
              We apply reasonable technical and organisational measures — including encrypted transport (HTTPS),
              access controls, and vendor due diligence — to protect personal data. No method of transmission over
              the Internet is fully secure; we encourage you to use official temple portals for sensitive
              transactions.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[24px] text-ink-primary">8. Your rights (DPDP Act)</h2>
            <p className="mt-3">As a data principal, you have the right to:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Access a summary of personal data we hold about you</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Request erasure when consent is withdrawn or data is no longer needed</li>
              <li>Nominate another individual to exercise your rights in the event of death or incapacity</li>
              <li>Grieve to our Grievance Officer and, if unresolved, to the Data Protection Board of India</li>
            </ul>
            <p className="mt-3">
              Submit requests to{" "}
              <a href="mailto:grievance@faithconnect.in" className="text-accent hover:underline">
                grievance@faithconnect.in
              </a>
              . We will respond within the timelines prescribed under applicable law.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[24px] text-ink-primary">9. Children</h2>
            <p className="mt-3">
              FaithConnect is not directed at children under 18. We do not knowingly collect personal data from
              minors without verifiable parental consent. If you believe a minor has submitted data, contact us for
              prompt deletion.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-[24px] text-ink-primary">10. Changes to this policy</h2>
            <p className="mt-3">
              We may update this Privacy Policy to reflect legal, technical, or business changes. Material updates
              will be posted on this page with a revised effective date. Continued use after changes constitutes
              acknowledgement of the updated policy where permitted by law.
            </p>
          </section>

          <section className="pt-6 border-t border-line-hair">
            <p className="font-sans text-[14px] text-ink-tertiary">
              Questions?{" "}
              <Link to="/about#contact" className="text-accent hover:underline">
                Contact us
              </Link>{" "}
              or email{" "}
              <a href="mailto:hello@faithconnect.in" className="text-accent hover:underline">
                hello@faithconnect.in
              </a>
              .
            </p>
          </section>
        </article>
      </SectionReveal>
    </div>
  );
}
