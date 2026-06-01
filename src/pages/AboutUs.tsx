import { Eyebrow } from "@/components/Eyebrow";
import { SectionReveal } from "@/components/SectionReveal";

export default function AboutUs() {
  return (
    <div className="bg-bg-primary pb-24">
      <section className="pt-24 pb-16 max-w-container mx-auto px-5 md:px-8 max-w-3xl">
        <SectionReveal>
          <Eyebrow>COMPANY</Eyebrow>
          <h1 className="mt-6 font-serif text-[40px] md:text-[56px] font-normal leading-[1.05] tracking-[-0.02em] text-ink-primary">
            FaithConnect exists to dignify public information about sacred places.
          </h1>
          <p className="mt-8 font-serif text-[18px] text-ink-secondary leading-[1.65]">
            We are building a calm, editorial-grade reference for India&apos;s temples — with verified outbound links,
            non-custodial donations, and infrastructure for the boards that steward these institutions.
          </p>
        </SectionReveal>
      </section>

      <section className="bg-bg-card border-y border-line-hair py-16">
        <div className="max-w-container mx-auto px-5 md:px-8 max-w-3xl">
          <SectionReveal>
            <h2 className="font-serif text-[32px] text-ink-primary">How we verify</h2>
            <ul className="mt-8 space-y-4 font-serif text-[16px] text-ink-secondary leading-[1.65] list-disc pl-5">
              <li>Primary sourcing from HR&amp;CE, Muzrai, endowment departments, and trust domains.</li>
              <li>Cross-check of donation URLs against board press notices where available.</li>
              <li>Clear labeling when information is provisional or awaiting board confirmation.</li>
            </ul>
          </SectionReveal>
        </div>
      </section>

      <section id="press" className="max-w-container mx-auto px-5 md:px-8 py-16 scroll-mt-24 max-w-3xl">
        <SectionReveal>
          <Eyebrow>PRESS</Eyebrow>
          <h2 className="mt-4 font-serif text-[32px] text-ink-primary">Media inquiries</h2>
          <p className="mt-4 font-serif text-[16px] text-ink-secondary leading-[1.65]">
            For press kits and founder interviews, email{" "}
            <a href="mailto:press@faithconnect.in" className="text-accent hover:underline">press@faithconnect.in</a>.
          </p>
        </SectionReveal>
      </section>

      <section id="privacy" className="max-w-container mx-auto px-5 md:px-8 py-16 scroll-mt-24">
        <div className="max-w-3xl">
        <SectionReveal>
          <Eyebrow>PRIVACY</Eyebrow>
          <h2 className="mt-4 font-serif text-[32px] text-ink-primary">Privacy policy</h2>
          <p className="mt-4 font-serif text-[16px] text-ink-secondary leading-[1.65]">
            FaithConnect does not sell personal data. Anonymous analytics may be used to understand aggregate traffic.
            When you leave this site for a temple portal, that destination&apos;s privacy policy applies. This notice
            follows the principles of India&apos;s Digital Personal Data Protection Act, 2023.
          </p>

          <h3 className="mt-8 font-serif text-[20px] text-ink-primary">What we collect</h3>
          <p className="mt-2 font-serif text-[16px] text-ink-secondary leading-[1.65]">
            When you submit an inquiry or join a waitlist, we collect the details you provide — typically your name,
            phone number, email, organisation, and state. We do not collect any payment or donation information.
          </p>

          <h3 className="mt-6 font-serif text-[20px] text-ink-primary">Why we collect it</h3>
          <p className="mt-2 font-serif text-[16px] text-ink-secondary leading-[1.65]">
            Solely to respond to your inquiry and to manage interest in our products (temple onboarding, CRM,
            donation software, and devotee waitlists). We process this data only with your explicit consent, which
            you give via the checkbox on each form.
          </p>

          <h3 className="mt-6 font-serif text-[20px] text-ink-primary">How long we keep it</h3>
          <p className="mt-2 font-serif text-[16px] text-ink-secondary leading-[1.65]">
            We retain contact details only as long as needed to respond to your request or until you ask us to erase
            them, after which they are deleted from our systems.
          </p>

          <h3 className="mt-6 font-serif text-[20px] text-ink-primary">Third-party links</h3>
          <p className="mt-2 font-serif text-[16px] text-ink-secondary leading-[1.65]">
            Outbound donation, WhatsApp, Telegram, and official-website links point to third parties. Once you follow
            them, those organisations&apos; own policies govern your data and any transaction.{" "}
            <strong className="text-ink-primary font-normal">FaithConnect never processes, holds, or routes donations</strong> —
            every contribution is made directly to the temple&apos;s own official channel.
          </p>

          <h3 className="mt-6 font-serif text-[20px] text-ink-primary">Grievance contact</h3>
          <p className="mt-2 font-serif text-[16px] text-ink-secondary leading-[1.65]">
            To access, correct, or erase your data, or to raise a grievance, contact our Grievance Officer at{" "}
            {/* TODO(owner): replace with the registered DPDP grievance email */}
            <a href="mailto:grievance@faithconnect.in" className="text-accent hover:underline">grievance@faithconnect.in</a>.
          </p>
        </SectionReveal>
        </div>
      </section>

      <section id="terms" className="bg-bg-card border-y border-line-hair py-16 scroll-mt-24">
        <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="max-w-3xl">
          <SectionReveal>
            <Eyebrow>TERMS</Eyebrow>
            <h2 className="mt-4 font-serif text-[32px] text-ink-primary">Terms of use</h2>
            <p className="mt-4 font-serif text-[16px] text-ink-secondary leading-[1.65]">
              FaithConnect provides informational links to third-party temple trusts. We are not a payment processor,
              booking agent, or religious authority. Content is provided as-is; verify schedules and policies with each board.
            </p>
          </SectionReveal>
        </div>
        </div>
      </section>

      <section id="contact" className="bg-bg-secondary py-16 scroll-mt-24">
        <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="max-w-3xl">
          <SectionReveal>
            <Eyebrow>CONTACT</Eyebrow>
            <h2 className="mt-4 font-serif text-[32px] text-ink-primary">Reach the team</h2>
            <p className="mt-4 font-serif text-[16px] text-ink-secondary leading-[1.65]">
              General:{" "}
              <a href="mailto:hello@faithconnect.in" className="text-accent hover:underline">hello@faithconnect.in</a>
              <br />
              Chennai, India · FaithConnect Pvt. Ltd.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <img src="/founder-surya.jpg" alt="Surya Rajesh" className="w-16 h-16 rounded-full object-cover border border-line-hair" />
              <div>
                <p className="font-serif text-[18px] text-ink-primary">Surya Rajesh</p>
                <p className="font-sans text-[13px] text-ink-tertiary">Founder</p>
              </div>
            </div>
          </SectionReveal>
        </div>
        </div>
      </section>
    </div>
  );
}
