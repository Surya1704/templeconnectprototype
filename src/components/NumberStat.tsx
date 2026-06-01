interface NumberStatProps { value: string; label: string; italicLabel?: boolean; }
export function NumberStat({ value, label, italicLabel }: NumberStatProps) {
  return (
    <div className="text-center px-4">
      <div className="font-serif text-[44px] font-normal tracking-[-0.02em] text-ink-primary leading-none">{value}</div>
      <div className={italicLabel ? "mt-2 font-serif italic text-[13px] text-ink-tertiary leading-snug" : "mt-2 font-sans text-[12px] font-medium uppercase tracking-[0.08em] text-ink-tertiary"}>{label}</div>
    </div>
  );
}
