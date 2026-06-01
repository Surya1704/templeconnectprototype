import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionReveal } from "@/components/SectionReveal";
import { NumberStat } from "@/components/NumberStat";
import { EditorialRow } from "@/components/EditorialRow";
import { HeroOm3D } from "@/components/HeroOm3D";
import { JyotirlingsCollage } from "@/components/JyotirlingsCollage";
import { FloatingPanel } from "@/components/FloatingPanel";
import { ArrowRight } from "lucide-react";

const heroStagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const heroChild = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.64, ease: [0.22, 1, 0.36, 1] } } };

function Hero() {
  return (
    <section className="min-h-screen bg-bg-primary pt-16">
      <div className="max-w-container mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center min-h-[calc(100vh-64px)]">
        <motion.div className="w-full md:w-[46%] py-12 md:py-0" variants={heroStagger} initial="hidden" animate="show">
          <motion.div variants={heroChild}><Eyebrow>SPIRITUAL INFRASTRUCTURE FOR INDIA</Eyebrow></motion.div>
          <motion.h1 variants={heroChild} className="mt-6 font-serif text-[44px] md:text-[72px] font-normal leading-[1.05] tracking-[-0.02em] text-ink-primary">Every temple.<br />One quiet platform.</motion.h1>
          <motion.p variants={heroChild} className="mt-6 font-serif text-[19px] text-ink-secondary leading-[1.65] max-w-[460px]">Discover four million temples across India. Support the ones that move you. Help temple boards run with <em>the dignity they deserve</em>.</motion.p>
          <motion.div variants={heroChild} className="mt-8 flex flex-col items-start gap-3">
            <Link to="/explore" className="inline-flex items-center justify-center px-7 py-3.5 bg-accent text-bg-card font-sans text-[14px] font-medium rounded-pill hover:bg-accent-deep hover:-translate-y-0.5 transition-all duration-320 fc-out">Explore temples</Link>
            <Link to="/list-your-temple" className="font-sans text-[14px] text-ink-secondary hover:underline underline-offset-2 transition-colors duration-160">I run a temple →</Link>
          </motion.div>
        </motion.div>
        <div className="w-full md:w-[54%] h-[300px] md:h-full relative"><HeroOm3D /></div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (<SectionReveal><section className="bg-bg-secondary border-t border-b border-line-hair"><div className="max-w-container mx-auto px-5 md:px-8 h-[120px] flex items-center justify-center"><div className="grid grid-cols-2 md:grid-cols-4 w-full gap-4 md:gap-0 md:divide-x md:divide-line-hair"><NumberStat value="4,128" label="verified temples" /><NumberStat value="₹ 1.2 Cr" label="disbursed to temples" /><NumberStat value="48" label="temple trusts onboarded" /><NumberStat value="100%" label="every rupee tracked." italicLabel /></div></div></section></SectionReveal>);
}

function JyotirlingaSection() {
  return (<SectionReveal><section className="bg-bg-primary py-16 md:py-24"><div className="max-w-container mx-auto px-5 md:px-8"><Eyebrow>THE TWELVE JYOTIRLINGAS</Eyebrow><h2 className="mt-4 font-serif text-[36px] md:text-[48px] font-normal leading-[1.1] tracking-[-0.018em] text-ink-primary"><em>Twelve manifestations.</em> One thread of light.</h2><p className="mt-3 font-serif text-[17px] text-ink-secondary leading-[1.65] max-w-[560px]">Sacred Shiva sites mapped across India. Click any to explore.</p><div className="mt-10"><JyotirlingsCollage /></div><div className="mt-8 text-right"><Link to="/explore?tag=jyotirlinga" className="inline-flex items-center gap-1 font-sans text-[14px] font-medium text-accent hover:underline underline-offset-2 transition-colors duration-160">View all on the map <ArrowRight size={14} strokeWidth={1.5} /></Link></div></div></section></SectionReveal>);
}

function WhatWeDo() {
  return (<SectionReveal><section className="bg-bg-card py-16 md:py-24"><div className="max-w-container mx-auto px-5 md:px-8"><EditorialRow numeral="01" label="Discovery" body="An honest, mapped, well-photographed index of every Hindu temple in India. Verified by trusts. Searchable by deity, state, festival, and accessibility." linkText="Explore the index" linkHref="/explore" index={0} /><EditorialRow numeral="02" label="Devotion" body="Donate directly to a temple's trust, with full transparency on what your contribution funds and when it is released. Receipts are 80G-eligible, issued instantly." linkText="How donations work" linkHref="/donate" index={1} /><EditorialRow numeral="03" label="Infrastructure" body="A CRM and operations platform built for temple boards. Visitor flow, donation ledgers, priest scheduling, compliance — in one place." linkText="For temple boards" linkHref="/list-your-temple" index={2} /></div></section></SectionReveal>);
}

function DonationMoment() {
  return (<SectionReveal><section className="bg-bg-primary py-16 md:py-24"><div className="max-w-container mx-auto px-5 md:px-8"><div className="flex flex-col md:flex-row items-stretch gap-0"><div className="w-full md:w-1/2 relative"><img src="/lovable-uploads/3c73bbb4-d8d9-439c-bac6-16dfc1940d71.png" alt="Trimbakeshwar Temple" className="w-full h-full object-cover rounded-r-[16px] rounded-l-none min-h-[300px] md:min-h-[480px]" /></div><div className="w-full md:w-1/2 py-8 md:py-12 md:pl-12 flex flex-col justify-center"><Eyebrow>ONE TEMPLE, THIS MONTH</Eyebrow><h2 className="mt-4 font-serif text-[36px] md:text-[44px] font-normal leading-[1.1] tracking-[-0.018em] text-ink-primary">Help Trimbakeshwar restore <em>its 17th-century inner sanctum</em>.</h2><p className="mt-4 font-serif text-[17px] text-ink-secondary leading-[1.65] max-w-[480px]">We&apos;ve partnered with the Trimbakeshwar Devasthan Trust to fund conservation work on the garbhagriha walls. Every contribution is logged, audited, and reported back to you when the work is complete.</p><div className="mt-6 w-full h-1 bg-line-hair rounded-pill overflow-hidden"><div className="h-full bg-accent rounded-pill" style={{ width: "62%" }} /></div><p className="mt-2 font-sans text-[13px] text-ink-tertiary">₹ 7.4 Lakh raised of ₹ 12 Lakh goal · 248 contributors</p><div className="mt-6 flex flex-col items-start gap-3"><Link to="/donate?temple=trimbakeshwar" className="inline-flex items-center justify-center px-7 py-3.5 bg-accent text-bg-card font-sans text-[14px] font-medium rounded-pill hover:bg-accent-deep hover:-translate-y-0.5 transition-all duration-320 fc-out">Contribute</Link><a href="#" className="font-sans text-[13px] text-ink-secondary hover:underline underline-offset-2 transition-colors duration-160">Read the conservation brief →</a></div></div></div></div></section></SectionReveal>);
}

function ForTempleBoards() {
  return (<SectionReveal><section className="bg-bg-deep py-16 md:py-24"><div className="max-w-container mx-auto px-5 md:px-8"><div className="flex flex-col md:flex-row items-center gap-12 md:gap-16"><div className="w-full md:w-1/2"><Eyebrow className="text-accent-soft">FOR TEMPLE TRUSTS AND BOARDS</Eyebrow><h2 className="mt-4 font-serif text-[36px] md:text-[48px] font-normal leading-[1.1] tracking-[-0.018em] text-bg-card">Run your temple <em>like the institution it is.</em></h2><p className="mt-4 font-serif text-[17px] text-[#e8e1d2] leading-[1.65] max-w-[520px]">FaithConnect Operations is the first CRM built for temple boards, HR&amp;CE departments, and independent trusts. Donations, visitor flow, priest scheduling, compliance — one ledger, real-time.</p><ul className="mt-6 flex flex-col gap-3">{["Donation ledger with auto-reconciliation", "Visitor flow analytics and crowd forecasts", "Priest and seva scheduling", "80G / 12A / HR&CE compliance reporting"].map((item) => (<li key={item} className="flex items-start gap-3"><span className="block w-4 h-px bg-accent-soft mt-2.5 shrink-0" /><span className="font-sans text-[14px] text-[#e8e1d2]">{item}</span></li>))}</ul><div className="mt-8 flex flex-col items-start gap-3"><Link to="/list-your-temple" className="inline-flex items-center justify-center px-7 py-3.5 border border-accent-soft text-accent-soft font-sans text-[14px] font-medium rounded-pill hover:bg-accent-soft hover:text-bg-deep transition-all duration-320 fc-out">Start a free pilot</Link><a href="#" className="font-sans text-[13px] text-[#e8e1d2] hover:underline underline-offset-2 transition-colors duration-160">Book a 20-min walkthrough →</a></div></div><div className="w-full md:w-1/2 relative min-h-[400px] flex flex-col items-center justify-center gap-4"><div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(185,122,87,0.18)_0%,transparent_70%)]" /><FloatingPanel delay={0} className="relative z-10 w-full max-w-[280px]"><p className="font-sans text-[11px] uppercase tracking-[0.08em] text-bg-card/50">Donations · This week</p><p className="mt-1 font-serif text-[28px] text-bg-card">₹ 4,28,560</p><svg viewBox="0 0 100 24" className="w-full h-6 mt-1"><path d="M0,20 Q15,18 25,14 T50,10 T75,6 T100,8" fill="none" stroke="#c99175" strokeWidth="1.5" /></svg><p className="mt-1 font-sans text-[11px] text-accent-soft">+18.4% vs last week</p></FloatingPanel><FloatingPanel delay={2} className="relative z-10 w-full max-w-[280px]"><p className="font-sans text-[11px] uppercase tracking-[0.08em] text-bg-card/50">Today&apos;s footfall</p><p className="mt-1 font-serif text-[28px] text-bg-card">4,218 expected</p><div className="flex gap-1 mt-2">{[60, 45, 75, 35].map((w, i) => (<div key={i} className="flex-1 h-2 rounded-sm" style={{ width: `${w}%`, background: `rgba(185,122,87,${0.3 + i * 0.15})` }} />))}</div></FloatingPanel><FloatingPanel delay={4} className="relative z-10 w-full max-w-[280px]"><p className="font-sans text-[11px] uppercase tracking-[0.08em] text-bg-card/50">Priest schedule · today</p><div className="mt-2 flex flex-col gap-1.5">{["Pt. Ramesh · 6–10 AM", "Pt. Suresh · 10–2 PM", "Pt. Mahesh · 4–9 PM"].map((s) => (<div key={s} className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-accent-soft" /><span className="font-sans text-[12px] text-bg-card/70">{s}</span></div>))}</div></FloatingPanel></div></div></div></section></SectionReveal>);
}

function Voices() {
  const quotes = [{ text: "For the first time, our trustees can see donations land in real time. The auditing alone has saved us three weeks per year.", attribution: "Shri R. Subramaniam · Trustee · Meenakshi Amman Devasthanam" }, { text: "I found a temple in my hometown I'd never heard of. I walked in last Tuesday. It was the most still hour of my year.", attribution: "Ananya Iyer · Devotee · Bengaluru" }];
  return (<SectionReveal><section className="bg-bg-primary py-16 md:py-24"><div className="max-w-container mx-auto px-5 md:px-8"><div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">{quotes.map((q, i) => (<div key={i} className="relative"><span className="absolute -top-4 -left-2 font-serif text-[96px] text-accent/30 leading-none select-none pointer-events-none">&ldquo;</span><blockquote className="font-serif italic text-[22px] text-ink-primary leading-[1.45] max-w-[440px] pt-8">{q.text}</blockquote><div className="mt-4 h-px w-12 bg-line-hair" /><p className="mt-3 font-sans text-[13px] text-ink-tertiary">{q.attribution}</p></div>))}</div></div></section></SectionReveal>);
}

export default function Home() { return (<><Hero /><TrustStrip /><JyotirlingaSection /><WhatWeDo /><DonationMoment /><ForTempleBoards /><Voices /></>); }
