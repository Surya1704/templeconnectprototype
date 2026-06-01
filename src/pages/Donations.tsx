import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ExternalLink, ShieldCheck, ArrowUpRight, FileText } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionReveal } from "@/components/SectionReveal";
import { jyotirlingas } from "@/data/jyotirlingas";
import { fetchLatestTransparencyReport, type TransparencyReport } from "@/lib/supabase";

export default function Donations() {
  const [searchParams] = useSearchParams();
  const highlightSlug = searchParams.get("temple");
  const [report, setReport] = useState<TransparencyReport | null>(null);

  useEffect(() => {
    fetchLatestTransparencyReport().then(({ data }) => setReport(data));
  }, []);

  return (
    <div className="bg-bg-primary pb-24">
      <section className="pt-24 pb-16 md:pb-20 bg-bg-secondary border-b border-line-hair">
        <div className="max-w-container mx-auto px-5 md:px-8 max-w-3xl">
          <Eyebrow>DEVOTION</Eyebrow>
          <h1 className="mt-6 font-serif text-[40px] md:text-[56px] font-normal leading-[1.05] tracking-[-0.02em] text-ink-primary">
            We don&apos;t take a cent. <em className="italic">The temple does.</em>
          </h1>
          <p className="mt-6 font-serif text-[18px] text-ink-secondary leading-[1.65]">
            Every donation link routes to the temple board&apos;s official portal. FaithConnect is non-custodial,
            fee-free, and uninvolved in the transaction.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-5 md:px-8 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { icon: ShieldCheck, text: "Links resolve only to official board domains." },
            { icon: ArrowUpRight, text: "We never embed iframes or proxy payments." },
            { icon: FileText, text: "80G receipts are issued by the trust, not FaithConnect." },
            { icon: ExternalLink, text: "Verify the destination domain before you give." },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex gap-4 p-5 rounded-[16px] border border-line-hair bg-bg-card">
              <Icon className="shrink-0 text-accent" size={20} strokeWidth={1.5} />
              <p className="font-sans text-[14px] text-ink-secondary leading-[1.55]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionReveal>
        <section className="max-w-container mx-auto px-5 md:px-8 py-8">
          <Eyebrow>JYOTIRLINGAS</Eyebrow>
          <h2 className="mt-4 font-serif text-[32px] text-ink-primary">Donate directly to a sacred site</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {jyotirlingas.map((j) => (
              <div
                key={j.slug}
                className={`rounded-[16px] border p-5 bg-bg-card transition-colors duration-160 ${
                  highlightSlug === j.slug ? "border-accent/50 shadow-sm" : "border-line-hair"
                }`}
              >
                <h3 className="font-serif text-[20px] text-ink-primary">{j.name}</h3>
                <p className="font-sans text-[12px] text-ink-tertiary mt-1">{j.state}</p>
                <a
                  href={j.donationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-4 font-sans text-[13px] font-medium text-accent hover:underline"
                >
                  Official donation portal <ExternalLink size={12} />
                </a>
              </div>
            ))}
          </div>
        </section>
      </SectionReveal>

      <SectionReveal>
        <section id="transparency" className="max-w-container mx-auto px-5 md:px-8 py-16 scroll-mt-24">
          <Eyebrow>TRANSPARENCY</Eyebrow>
          <h2 className="mt-4 font-serif text-[32px] text-ink-primary">Where contributions go</h2>
          {report ? (
            <div className="mt-8 rounded-[20px] border border-line-hair bg-bg-card p-8 max-w-xl">
              <p className="font-sans text-[12px] uppercase tracking-wide text-ink-tertiary">{report.quarter}</p>
              <p className="mt-2 font-serif text-[36px] text-ink-primary">
                ₹ {(report.total_donations / 100000).toFixed(1)} Lakh tracked
              </p>
              <ul className="mt-6 space-y-2 font-sans text-[14px] text-ink-secondary">
                <li>Restoration & maintenance — {report.restoration_maintenance_pct}%</li>
                <li>Priest stipends — {report.priest_stipends_pct}%</li>
                <li>Festivals & seva — {report.festivals_seva_pct}%</li>
                <li>Community kitchens — {report.community_kitchens_pct}%</li>
                <li>Education — {report.education_pct}%</li>
              </ul>
              {report.report_url && (
                <a href={report.report_url} target="_blank" rel="noopener noreferrer" className="inline-block mt-6 font-sans text-[13px] text-accent hover:underline">
                  Read full report →
                </a>
              )}
            </div>
          ) : (
            <p className="mt-6 font-serif text-[17px] text-ink-secondary max-w-lg">
              Quarterly transparency reports appear here once your Supabase project is connected. Configure{" "}
              <code className="font-sans text-[13px] bg-bg-secondary px-1 rounded">VITE_SUPABASE_URL</code> in{" "}
              <code className="font-sans text-[13px] bg-bg-secondary px-1 rounded">.env</code>.
            </p>
          )}
        </section>
      </SectionReveal>

      <section id="tax" className="max-w-container mx-auto px-5 md:px-8 py-12 scroll-mt-24 border-t border-line-hair">
        <h2 className="font-serif text-[28px] text-ink-primary">Tax (80G) information</h2>
        <p className="mt-4 font-serif text-[16px] text-ink-secondary leading-[1.65] max-w-2xl">
          Eligibility and receipt formats vary by trust. Confirm 80G status on the official donation page before
          giving. FaithConnect does not issue tax certificates.
        </p>
      </section>
    </div>
  );
}
