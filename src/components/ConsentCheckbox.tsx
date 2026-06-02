import { Check } from "lucide-react";

interface ConsentCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: React.ReactNode;
  id?: string;
}

/** Accessible checkbox with a visible tick — native accent-color is unreliable across browsers. */
export function ConsentCheckbox({ checked, onChange, children, id }: ConsentCheckboxProps) {
  return (
    <label htmlFor={id} className="flex items-start gap-3 cursor-pointer group">
      <span
        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-colors duration-160 ${
          checked ? "border-accent bg-accent" : "border-line-soft bg-bg-card group-hover:border-accent/40"
        }`}
        aria-hidden
      >
        {checked && <Check size={13} className="text-bg-card" strokeWidth={3} />}
      </span>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />
      <span className="font-sans text-[13px] text-ink-secondary leading-[1.5]">{children}</span>
    </label>
  );
}
