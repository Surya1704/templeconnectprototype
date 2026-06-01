
import { ReactNode } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface MobileOptimizedLayoutProps {
  children: ReactNode;
  className?: string;
}

const MobileOptimizedLayout = ({ children, className = "" }: MobileOptimizedLayoutProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`${isMobile ? "px-4 py-2" : "container mx-auto px-4 py-4"} ${className}`}>
      {children}
    </div>
  );
};

export default MobileOptimizedLayout;
