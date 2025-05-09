
import { Guide } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GuidedTourButtonProps {
  onClick: () => void;
  variant?: "default" | "outline" | "secondary";
  className?: string;
}

const GuidedTourButton = ({ 
  onClick, 
  variant = "outline", 
  className = "" 
}: GuidedTourButtonProps) => {
  return (
    <Button
      variant={variant}
      className={`flex items-center gap-2 ${className}`}
      onClick={onClick}
    >
      <Guide className="h-4 w-4" />
      <span>AI Guided Tour</span>
    </Button>
  );
};

export default GuidedTourButton;
