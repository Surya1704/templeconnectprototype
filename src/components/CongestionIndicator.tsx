
import React from "react";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";

interface CongestionIndicatorProps {
  level: "low" | "moderate" | "high" | "extreme";
  showLabel?: boolean;
  className?: string;
}

const CongestionIndicator = ({ 
  level, 
  showLabel = true,
  className
}: CongestionIndicatorProps) => {
  const getColorForLevel = () => {
    switch (level) {
      case "low": return "text-green-500";
      case "moderate": return "text-yellow-500";
      case "high": return "text-orange-500";
      case "extreme": return "text-red-500";
      default: return "text-gray-500";
    }
  };

  const getLabelForLevel = () => {
    switch (level) {
      case "low": return "Low Crowd";
      case "moderate": return "Moderate Crowd";
      case "high": return "High Crowd";
      case "extreme": return "Extremely Crowded";
      default: return "Unknown";
    }
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex">
        <User className={cn("h-4 w-4", getColorForLevel())} />
        <User className={cn("h-4 w-4 -ml-1", level !== "low" ? getColorForLevel() : "text-gray-300")} />
        <User className={cn("h-4 w-4 -ml-1", level === "high" || level === "extreme" ? getColorForLevel() : "text-gray-300")} />
        <User className={cn("h-4 w-4 -ml-1", level === "extreme" ? getColorForLevel() : "text-gray-300")} />
      </div>
      {showLabel && <span className={cn("text-xs", getColorForLevel())}>{getLabelForLevel()}</span>}
    </div>
  );
};

export default CongestionIndicator;
