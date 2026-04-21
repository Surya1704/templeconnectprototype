import logo from "@/assets/faithconnect-logo.jpg";

interface LogoProps {
  size?: number;
  showWordmark?: boolean;
  className?: string;
}

export default function Logo({ size = 32, showWordmark = true, className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src={logo}
        alt="FaithConnect logo"
        width={size}
        height={size}
        className="rounded-md"
        style={{ objectFit: "cover", mixBlendMode: "multiply" }}
      />
      {showWordmark && (
        <span className="font-serif text-xl font-semibold text-foreground tracking-tight">
          FaithConnect
        </span>
      )}
    </div>
  );
}
