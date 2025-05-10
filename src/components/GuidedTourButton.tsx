
import { useState } from "react";
import { Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { generateAITour, AITourStep, getTempleTourPoints } from "@/utils/aiTourService";
import { useToast } from "@/components/ui/use-toast";

interface GuidedTourButtonProps {
  onClick?: () => void;
  variant?: "default" | "outline" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  templeName?: string;
  templeTags?: string[];
}

const GuidedTourButton = ({ 
  onClick, 
  variant = "outline", 
  size = "default",
  className = "",
  templeName = "Temple",
  templeTags = ["Ancient", "Spiritual"] 
}: GuidedTourButtonProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [tourSteps, setTourSteps] = useState<AITourStep[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showPointSelector, setShowPointSelector] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState<string | undefined>();
  const { toast } = useToast();

  // Get temple-specific tour points
  const tourPoints = getTempleTourPoints(templeName);

  const handleTourClick = async () => {
    // If there's a custom onClick handler, use it
    if (onClick) {
      onClick();
      return;
    }

    // Otherwise, handle the tour functionality here
    setIsLoading(true);
    setIsDialogOpen(true);
    
    // Show point selector if there are specific points for this temple
    if (Object.keys(tourPoints).length > 0) {
      setShowPointSelector(true);
    } else {
      generateTour();
    }
  };

  const generateTour = async (specificPoint?: string) => {
    setIsLoading(true);
    setSelectedPoint(specificPoint);
    setShowPointSelector(false);
    
    try {
      const tourData = await generateAITour(templeName, templeTags, specificPoint);
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

  const handleBackToPoints = () => {
    setShowPointSelector(true);
    setTourSteps([]);
  };

  return (
    <>
      <Button
        variant={variant}
        size={size}
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
              {isLoading ? "Generating Tour..." : (
                showPointSelector 
                  ? `Select a point of interest in ${templeName}`
                  : `${templeName} ${selectedPoint ? `- ${selectedPoint}` : ''} Tour`
              )}
            </DialogTitle>
            {!isLoading && tourSteps.length > 0 && (
              <DialogDescription>
                Step {currentStep + 1} of {tourSteps.length}
              </DialogDescription>
            )}
          </DialogHeader>
          
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-10">
              <div className="h-12 w-12 rounded-full border-4 border-spiritual-saffron/30 border-t-spiritual-saffron animate-spin mb-4"></div>
              <p className="text-gray-600">Our AI is creating your personalized tour...</p>
            </div>
          )}
          
          {showPointSelector && !isLoading && (
            <>
              <div className="grid grid-cols-1 gap-2 py-4">
                <Button
                  variant="outline"
                  onClick={() => generateTour()}
                  className="justify-start h-auto py-3"
                >
                  <div className="text-left">
                    <div className="font-bold">Complete Temple Tour</div>
                    <div className="text-sm text-gray-500">Get a comprehensive tour of the entire temple</div>
                  </div>
                </Button>
                
                {Object.keys(tourPoints).map((point) => (
                  <Button
                    key={point}
                    variant="outline"
                    onClick={() => generateTour(point)}
                    className="justify-start h-auto py-3"
                  >
                    <div className="text-left">
                      <div className="font-bold">{point}</div>
                      <div className="text-sm text-gray-500">
                        {tourPoints[point].substring(0, 60)}...
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </>
          )}
          
          {!isLoading && tourSteps.length > 0 && !showPointSelector && (
            <div className="py-4">
              <div className="bg-spiritual-ivory/30 p-6 rounded-lg">
                <h3 className="font-bold text-lg text-spiritual-maroon mb-2">
                  {tourSteps[currentStep].title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {tourSteps[currentStep].description}
                </p>
                {tourSteps[currentStep].imageUrl && (
                  <div className="mt-4">
                    <img 
                      src={tourSteps[currentStep].imageUrl}
                      alt={tourSteps[currentStep].title}
                      className="rounded-lg w-full h-auto max-h-60 object-cover"
                    />
                  </div>
                )}
              </div>
              
              {/* Tour navigation */}
              <div className="mt-6 flex justify-between items-center">
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    onClick={handlePrevStep}
                    disabled={currentStep === 0}
                    size="sm"
                  >
                    Previous
                  </Button>
                  {selectedPoint && (
                    <Button 
                      variant="outline" 
                      onClick={handleBackToPoints}
                      size="sm"
                    >
                      All Points
                    </Button>
                  )}
                </div>
                
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
                  size="sm"
                >
                  {currentStep === tourSteps.length - 1 ? 'Finish Tour' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GuidedTourButton;
