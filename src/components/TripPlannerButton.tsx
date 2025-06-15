
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Map } from "lucide-react";

interface TripPlannerButtonProps {
  variant?: "default" | "outline" | "secondary";
  className?: string;
}

const TripPlannerButton = ({ 
  variant = "default", 
  className = "" 
}: TripPlannerButtonProps) => {
  const navigate = useNavigate();
  
  return (
    <Button
      variant={variant}
      className={`flex items-center gap-2 ${className}`}
      onClick={() => navigate("/trip-planner")}
    >
      <Map className="h-4 w-4" />
      <span>Plan Temple Trip</span>
    </Button>
  );
};

export default TripPlannerButton;
