
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { filterTemples } from "@/data/mergeTemples";
import { indianStates } from "@/data/temples";
import { Map, CalendarRange, Clock, Route } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { generateAITripPlan, AITripPlan } from "@/utils/aiTourService";

const TripPlanner = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Form states
  const [step, setStep] = useState<number>(1);
  const [states, setStates] = useState<string[]>([]);
  const [duration, setDuration] = useState<string>("3");
  const [preferences, setPreferences] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [suggestedTrip, setSuggestedTrip] = useState<AITripPlan | null>(null);
  
  // Helper function to handle state selection
  const handleStateSelect = (state: string) => {
    if (states.includes(state)) {
      setStates(states.filter(s => s !== state));
    } else {
      setStates([...states, state]);
    }
  };
  
  // Generate AI trip plan
  const generateTripPlan = async () => {
    setIsLoading(true);
    
    try {
      const tripPlan = await generateAITripPlan(
        states,
        parseInt(duration),
        preferences
      );
      
      setSuggestedTrip(tripPlan);
      setStep(3);
      
      toast({
        title: "Trip Plan Generated",
        description: "Your personalized temple tour has been created!",
      });
    } catch (error) {
      console.error("Error generating trip plan:", error);
      toast({
        title: "Error",
        description: "Failed to generate your trip plan. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  // Navigate to temple details page safely
  const navigateToTemple = (templeId: string) => {
    if (!templeId) {
      toast({
        title: "Temple not found",
        description: "This temple information is not available",
        variant: "destructive",
      });
      return;
    }
    
    navigate(`/temple/${templeId}`);
  };
  
  const handlePlannerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      // Validate states selection
      if (states.length === 0) {
        toast({
          title: "Please select at least one state",
          description: "Select the states you plan to visit",
          variant: "destructive",
        });
        return;
      }
      setStep(2);
    } else if (step === 2) {
      // Generate the trip plan
      generateTripPlan();
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-cinzel font-bold text-spiritual-maroon">
          AI Temple Trip Planner
        </h1>
        <p className="text-gray-600 mt-2">
          Create a personalized temple itinerary based on your preferences
        </p>
      </div>
      
      {step < 3 && (
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 1 ? "bg-spiritual-saffron text-white" : "bg-gray-200"
            }`}>
              1
            </div>
            <div className={`h-1 w-12 ${
              step >= 2 ? "bg-spiritual-saffron" : "bg-gray-200"
            }`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 2 ? "bg-spiritual-saffron text-white" : "bg-gray-200"
            }`}>
              2
            </div>
            <div className={`h-1 w-12 ${
              step >= 3 ? "bg-spiritual-saffron" : "bg-gray-200"
            }`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 3 ? "bg-spiritual-saffron text-white" : "bg-gray-200"
            }`}>
              3
            </div>
          </div>
        </div>
      )}
      
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {step === 1 && (
              <>
                <Map className="h-5 w-5 text-spiritual-maroon" />
                Where are you planning to visit?
              </>
            )}
            {step === 2 && (
              <>
                <CalendarRange className="h-5 w-5 text-spiritual-maroon" />
                Trip Details
              </>
            )}
            {step === 3 && (
              <>
                <Route className="h-5 w-5 text-spiritual-maroon" />
                Your Personalized Temple Itinerary
              </>
            )}
          </CardTitle>
          <CardDescription>
            {step === 1 && "Select the states you plan to visit during your trip"}
            {step === 2 && "Tell us about your trip duration and preferences"}
            {step === 3 && "Here's your personalized temple itinerary"}
          </CardDescription>
        </CardHeader>
        
        <form onSubmit={handlePlannerSubmit}>
          <CardContent>
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <Label className="text-base font-medium mb-2 block">
                    Select states to visit:
                  </Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {indianStates.map((state) => (
                      <Button
                        key={state}
                        type="button"
                        variant={states.includes(state) ? "default" : "outline"}
                        className={`justify-start ${states.includes(state) ? "bg-spiritual-saffron hover:bg-spiritual-ochre" : ""}`}
                        onClick={() => handleStateSelect(state)}
                      >
                        {state}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="duration" className="text-base font-medium">
                    Trip Duration (days)
                  </Label>
                  <Select value={duration} onValueChange={setDuration}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 5, 7, 10, 14, 21].map((day) => (
                        <SelectItem key={day} value={day.toString()}>
                          {day} {day === 1 ? "day" : "days"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="preferences" className="text-base font-medium">
                    Specific Preferences (Optional)
                  </Label>
                  <Textarea
                    id="preferences"
                    placeholder="Any specific deities, architecture styles, or famous temples you'd like to visit?"
                    className="min-h-[100px]"
                    value={preferences}
                    onChange={(e) => setPreferences(e.target.value)}
                  />
                </div>
              </div>
            )}
            
            {step === 3 && suggestedTrip && (
              <div className="space-y-6">
                {suggestedTrip.days.map((day, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="font-bold text-lg text-spiritual-maroon flex items-center gap-2 mb-2">
                      <CalendarRange className="h-4 w-4" /> 
                      Day {day.day}
                    </h3>
                    <div className="border rounded-lg overflow-hidden">
                      {day.temples.map((temple, tIndex) => (
                        <div 
                          key={`${temple.id}-${tIndex}`} 
                          className={`p-4 flex justify-between items-center gap-4 ${
                            tIndex !== day.temples.length - 1 ? "border-b" : ""
                          }`}
                        >
                          <div>
                            <h4 className="font-medium text-spiritual-maroon">{temple.name}</h4>
                            <p className="text-sm text-gray-600">{temple.location}, {temple.state}</p>
                          </div>
                          <Button 
                            variant="outline" 
                            className="shrink-0"
                            onClick={() => navigateToTemple(temple.id)}
                          >
                            View
                          </Button>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
            
            {isLoading && (
              <div className="flex flex-col items-center justify-center py-10">
                <div className="h-12 w-12 rounded-full border-4 border-spiritual-saffron/30 border-t-spiritual-saffron animate-spin mb-4"></div>
                <p className="text-gray-600">Our AI is generating your personalized itinerary...</p>
              </div>
            )}
          </CardContent>
          
          <CardFooter className={step === 3 ? "justify-center" : "justify-between"}>
            {step === 1 && (
              <>
                <Button type="button" variant="outline" onClick={() => navigate("/")}>
                  Cancel
                </Button>
                <Button type="submit">
                  Next Step
                </Button>
              </>
            )}
            
            {step === 2 && (
              <>
                <Button type="button" variant="outline" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Generating..." : "Generate Trip Plan"}
                </Button>
              </>
            )}
            
            {step === 3 && (
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  type="button"
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() => setStep(1)}
                >
                  Start Over
                </Button>
                <Button
                  className="bg-spiritual-saffron hover:bg-spiritual-ochre"
                  onClick={() => {
                    toast({
                      title: "Itinerary Saved",
                      description: "Your trip plan has been saved successfully!",
                    });
                  }}
                >
                  Save Itinerary
                </Button>
              </div>
            )}
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default TripPlanner;
