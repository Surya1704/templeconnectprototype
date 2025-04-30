
import React from "react";
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import { indianStates } from "@/data/temples";

interface StateFilterProps {
  selectedState: string;
  onStateChange: (state: string) => void;
  className?: string;
  showLabel?: boolean;
}

const StateFilter = ({ 
  selectedState, 
  onStateChange, 
  className = "", 
  showLabel = true 
}: StateFilterProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {showLabel && (
        <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Filter by state:</span>
      )}
      <Select value={selectedState} onValueChange={onStateChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select state" />
        </SelectTrigger>
        <SelectContent className="max-h-[300px]">
          <SelectGroup>
            {indianStates.map((state) => (
              <SelectItem key={state} value={state}>
                {state}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default StateFilter;
