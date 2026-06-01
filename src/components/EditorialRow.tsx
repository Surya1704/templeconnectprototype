import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
interface EditorialRowProps { numeral: string; label: string; body: string; linkText: string; linkHref: string; index?: number; }
export function EditorialRow({ numeral, label, body, linkText, linkHref, index = 0 }: EditorialRowProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div initial={reduced ? {} : { opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
      transition={{ duration: 0.48, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }} className="flex items-start gap-8 py-12 border-b border-line-hair last:border-b-0">
      <div className="shrink-0 w-16 text-right"><span className="font-serif italic text-[14px] text-ink-tertiary">{numeral}</span></div>
      <div className="shrink-0 w-40 md:w-52"><h3 className="font-serif text-[32px] font-normal text-ink-primary leading-tight">{label}</h3></div>
      <div className="flex-1 max-w-[560px]">
        <p className="font-serif text-[17px] text-ink-secondary leading-[1.65]">{body}</p>
        <Link to={linkHref} className="inline-flex items-center gap-1 mt-3 font-sans text-[13px] text-accent hover:underline underline-offset-2 transition-colors duration-160">{linkText} <ArrowRight size={12} strokeWidth={1.5} /></Link>
      </div>
    </motion.div>
  );
}
