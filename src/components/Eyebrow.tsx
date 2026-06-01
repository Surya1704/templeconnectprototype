interface EyebrowProps { children: React.ReactNode; className?: string; }
export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <p className={`font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-ink-tertiary flex items-center ${className}`}>
      <span className="inline-block w-6 h-px bg-accent mr-3 align-middle" />
      {children}
    </p>
  );
}
