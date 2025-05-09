import { useState } from "react";
import { Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { generateAITour, AITourStep } from "@/utils/aiTourService";
import { useToast } from "@/components/ui/use-toast";

interface GuidedTourButtonProps {
  onClick?: () => void;
  variant?: "default" | "outline" | "secondary";
  className?: string;
  templeName?: string;
  templeTags?: string[];
}

const GuidedTourButton = ({ 
  onClick, 
  variant = "outline", 
  className = "",
  templeName = "Temple",
  templeTags = ["Ancient", "Spiritual"] 
}: GuidedTourButtonProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [tourSteps, setTourSteps] = useState<AITourStep[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleTourClick = async () => {
    // If there's a custom onClick handler, use it
    if (onClick) {
      onClick();
      return;
    }

    // Otherwise, handle the tour functionality here
    setIsLoading(true);
    setIsDialogOpen(true);

    try {
      const tourData = await generateAITour(templeName, templeTags);
      setTourSteps(tourData);
      setCurrentStep(0);
    } catch (error) {
      console.error("Error generating tour:", error);
      toast({
        title: "Error generating tour",
        description: "Could not generate the AI tour. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleNextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsDialogOpen(false);
      toast({
        title: "Tour Complete",
        description: "You've completed the guided tour!",
      });
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <>
      <Button
        variant={variant}
        className={`flex items-center gap-2 ${className}`}
        onClick={handleTourClick}
      >
        <Compass className="h-4 w-4" />
        <span>AI Guided Tour</span>
      </Button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-cinzel text-spiritual-maroon">
              {isLoading ? "Generating Tour..." : `${templeName} - Virtual Tour`}
            </DialogTitle>
            {!isLoading && tourSteps.length > 0 && (
              <DialogDescription>
                Step {currentStep + 1} of {tourSteps.length}
              </DialogDescription>
            )}
          </DialogHeader>
          
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-10">
              <div className="h-12 w-12 rounded-full border-4 border-spiritual-saffron/30 border-t-spiritual-saffron animate-spin mb-4"></div>
              <p className="text-gray-600">Our AI is creating your personalized tour...</p>
            </div>
          ) : (
            tourSteps.length > 0 && (
              <div className="py-4">
                <div className="bg-spiritual-ivory/30 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-spiritual-maroon mb-2">
                    {tourSteps[currentStep].title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {tourSteps[currentStep].description}
                  </p>
                </div>
                
                {/* Tour navigation */}
                <div className="mt-6 flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={handlePrevStep}
                    disabled={currentStep === 0}
                  >
                    Previous
                  </Button>
                  <div className="flex items-center gap-1">
                    {tourSteps.map((_, i) => (
                      <div 
                        key={i} 
                        className={`h-2 w-2 rounded-full ${currentStep === i ? 'bg-spiritual-maroon' : 'bg-gray-300'}`}
                      ></div>
                    ))}
                  </div>
                  <Button 
                    onClick={handleNextStep}
                    className="bg-spiritual-saffron hover:bg-spiritual-ochre"
                  >
                    {currentStep === tourSteps.length - 1 ? 'Finish Tour' : 'Next'}
                  </Button>
                </div>
              </div>
            )
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GuidedTourButton;
