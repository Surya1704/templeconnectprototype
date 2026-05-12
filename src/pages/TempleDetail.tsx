
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getTempleById, getTempleDetails } from "@/data/mergeTemples";
import { 
  CalendarDays, Clock, MapPin, Users, Shirt, 
  Landmark, Compass, Bus, Plane, Train 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Temple } from "@/data/temples";
import GuidedTourButton from "@/components/GuidedTourButton";
import TempleAttireInfo from "@/components/TempleAttireInfo";
import { TempleDetails } from "@/data/templeDetails";
import TempleImageGallery from "@/components/TempleImageGallery";
import MobileOptimizedLayout from "@/components/MobileOptimizedLayout";
import { useIsMobile } from "@/hooks/use-mobile";

const TempleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [temple, setTemple] = useState<Temple | undefined>(undefined);
  const [details, setDetails] = useState<TempleDetails | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  useEffect(() => {
    // Reset state when ID changes
    setIsLoading(true);
    setNotFound(false);
    setTemple(undefined);
    setDetails(undefined);

    // Simulate API call
    setTimeout(() => {
      if (id) {
        // Try to get the temple data
        try {
          const templeData = getTempleById(id);
          if (templeData) {
            setTemple(templeData);
            // Get extended temple details if available
            const detailedInfo = getTempleDetails(id);
            if (detailedInfo) {
              setDetails(detailedInfo);
            }
          } else {
            console.error(`Temple with ID ${id} not found in the database`);
            setNotFound(true);
            toast({
              title: "Temple not found",
              description: `We couldn't find the temple with ID ${id}`,
              variant: "destructive"
            });
          }
        } catch (error) {
          console.error(`Error loading temple with ID ${id}:`, error);
          setNotFound(true);
          toast({
            title: "Error loading temple",
            description: "There was an issue loading this temple's information",
            variant: "destructive"
          });
        }
      }
      setIsLoading(false);
    }, 500);
  }, [id, toast]);

  const handleBooking = () => {
    navigate('/coming-soon');
  };

  const handlePujaBooking = () => {
    navigate('/coming-soon');
  };

  const handlePrasadBooking = () => {
    navigate('/coming-soon');
  };

  // Handle redirection to all temples if not found
  useEffect(() => {
    if (notFound && !isLoading) {
      // Optional: auto-redirect after a delay
      const timeout = setTimeout(() => {
        navigate('/temples');
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [notFound, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-spiritual-saffron border-t-spiritual-maroon rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-spiritual-maroon">Loading temple information...</p>
        </div>
      </div>
    );
  }

  if (notFound || !temple) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <div className="text-5xl mb-6">🕉️</div>
          <h1 className="text-2xl font-bold text-spiritual-maroon mb-2">Temple Not Found</h1>
          <p className="text-gray-600 mb-6">
            We couldn't find the temple you're looking for. It may have been removed or you might have followed an incorrect link.
            Redirecting you to all temples...
          </p>
          <Link to="/temples">
            <Button className="bg-spiritual-saffron hover:bg-spiritual-ochre">
              Browse All Temples
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-spiritual-ivory/20 pb-16">
      {/* Temple Header */}
      <div className="bg-gradient-to-r from-spiritual-maroon to-spiritual-ochre text-white">
        <MobileOptimizedLayout className="py-8 md:py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6">
              <div>
                <h1 className="text-2xl md:text-4xl font-cinzel font-bold">{temple.name}</h1>
                <div className="flex items-center mt-3 text-white/80">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{temple.location}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 bg-white/20 rounded-full py-1.5 px-3">
                <span className="text-yellow-200">★</span>
                <span className="font-medium">{temple.rating}</span>
                <span className="text-sm text-white/70">(490+ ratings)</span>
              </div>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-2 md:gap-4">
              {temple.tags.map((tag) => (
                <span key={tag} className="bg-white/10 rounded-full px-3 py-1 text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </MobileOptimizedLayout>
      </div>
      
      {/* Main Content */}
      <MobileOptimizedLayout className="py-6 md:py-8">
        <div className="max-w-4xl mx-auto">
          {/* Temple Images Gallery */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <TempleImageGallery templeId={temple.id} />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Left Column */}
            <div className="md:col-span-2">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Tabs defaultValue="about" className="mb-8">
                  <TabsList className="grid grid-cols-2 sm:grid-cols-4 mb-4">
                    <TabsTrigger value="about">About</TabsTrigger>
                    <TabsTrigger value="history">History</TabsTrigger>
                    <TabsTrigger value="travel">Travel</TabsTrigger>
                    <TabsTrigger value="visit">Visiting Info</TabsTrigger>
                  </TabsList>
                  
                  {/* About Tab */}
                  <TabsContent value="about" className="bg-white rounded-xl shadow-sm p-4 md:p-6">
                    <h2 className="text-xl font-cinzel font-bold text-spiritual-maroon mb-4">About {temple.name}</h2>
                    <p className="text-gray-700 leading-relaxed">
                      {details?.significance || temple.description || `${temple.name} is a beautiful religious site located in ${temple.location}. The temple attracts thousands of devotees every year who come to seek blessings and experience the spiritual ambiance of this sacred place.`}
                    </p>
                    
                    <Separator className="my-6" />
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-spiritual-saffron/10 rounded-lg text-spiritual-saffron">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-medium text-spiritual-maroon">Opening Hours</h3>
                          <p className="text-sm text-gray-600">{temple.hours}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-spiritual-saffron/10 rounded-lg text-spiritual-saffron">
                          <CalendarDays className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-medium text-spiritual-maroon">Best Time to Visit</h3>
                          <p className="text-sm text-gray-600">
                            {details?.visitingInfo?.bestTimeToVisit || "Early morning or during festivals"}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-spiritual-saffron/10 rounded-lg text-spiritual-saffron">
                          <Users className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-medium text-spiritual-maroon">Rush Hours</h3>
                          <p className="text-sm text-gray-600">10 AM - 12 PM & 5 PM - 7 PM</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-spiritual-saffron/10 rounded-lg text-spiritual-saffron">
                          <Shirt className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-medium text-spiritual-maroon">Dress Code</h3>
                          <p className="text-sm text-gray-600">
                            {details?.visitingInfo?.dressCode || <TempleAttireInfo templeName={temple.name} templeType={temple.tags[0] || "traditional"} />}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-spiritual-saffron/10 rounded-lg text-spiritual-saffron">
                          <Landmark className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-medium text-spiritual-maroon">Architecture</h3>
                          <p className="text-sm text-gray-600">
                            {details?.architecture ? `${details.architecture.substring(0, 80)}...` : "Traditional Hindu temple architecture"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  {/* History Tab */}
                  <TabsContent value="history" className="bg-white rounded-xl shadow-sm p-4 md:p-6">
                    <h2 className="text-xl font-cinzel font-bold text-spiritual-maroon mb-4">History of {temple.name}</h2>
                    {details?.history ? (
                      <div className="text-gray-700 leading-relaxed space-y-4">
                        {details.history.split('. ').map((sentence, index) => 
                          sentence.trim() && <p key={index}>{sentence}.</p>
                        )}
                      </div>
                    ) : (
                      <p className="text-gray-700 leading-relaxed">
                        {temple.name} has a rich historical and cultural significance. Detailed historical information about this temple is being compiled. Please check back later for a comprehensive history of this sacred place.
                      </p>
                    )}
                    
                    <div className="mt-6">
                      <h3 className="font-cinzel font-bold text-spiritual-maroon mb-2">Architectural Significance</h3>
                      <p className="text-gray-700 leading-relaxed">
                        {details?.architecture || "The temple showcases traditional Hindu architectural elements with intricate carvings and symbolic religious motifs."}
                      </p>
                    </div>
                  </TabsContent>
                  
                  {/* Travel Tab */}
                  <TabsContent value="travel" className="bg-white rounded-xl shadow-sm p-4 md:p-6">
                    <h2 className="text-xl font-cinzel font-bold text-spiritual-maroon mb-4">How to Reach {temple.name}</h2>
                    
                    <div className="space-y-4">
                      {details?.travelInfo?.nearestAirport && (
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-spiritual-saffron/10 rounded-lg text-spiritual-saffron mt-1">
                            <Plane className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-medium text-spiritual-maroon">By Air</h3>
                            <p className="text-gray-700">{details.travelInfo.nearestAirport}</p>
                          </div>
                        </div>
                      )}
                      
                      {details?.travelInfo?.nearestRailway && (
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-spiritual-saffron/10 rounded-lg text-spiritual-saffron mt-1">
                            <Train className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-medium text-spiritual-maroon">By Train</h3>
                            <p className="text-gray-700">{details.travelInfo.nearestRailway}</p>
                          </div>
                        </div>
                      )}
                      
                      {details?.travelInfo?.roadAccess && (
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-spiritual-saffron/10 rounded-lg text-spiritual-saffron mt-1">
                            <Compass className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-medium text-spiritual-maroon">By Road</h3>
                            <p className="text-gray-700">{details.travelInfo.roadAccess}</p>
                          </div>
                        </div>
                      )}
                      
                      {details?.travelInfo?.localTransport && (
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-spiritual-saffron/10 rounded-lg text-spiritual-saffron mt-1">
                            <Bus className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-medium text-spiritual-maroon">Local Transport</h3>
                            <p className="text-gray-700">{details.travelInfo.localTransport}</p>
                          </div>
                        </div>
                      )}
                      
                      {!details?.travelInfo && (
                        <p className="text-gray-700">
                          Detailed travel information for {temple.name} is currently being compiled. Generally, the temple can be reached by road from nearby major cities, and local transport options are available.
                        </p>
                      )}
                      
                      {details?.accommodation && (
                        <div className="mt-6">
                          <h3 className="font-cinzel font-bold text-spiritual-maroon mb-2">Accommodation</h3>
                          <p className="text-gray-700">{details.accommodation}</p>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                  
                  {/* Visiting Info Tab */}
                  <TabsContent value="visit" className="bg-white rounded-xl shadow-sm p-4 md:p-6">
                    <h2 className="text-xl font-cinzel font-bold text-spiritual-maroon mb-4">Visiting Information</h2>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium text-spiritual-maroon">Best Time to Visit</h3>
                        <p className="text-gray-700">{details?.visitingInfo?.bestTimeToVisit || "October to March when the weather is pleasant, and during major festivals for a spiritual experience."}</p>
                      </div>
                      
                      {details?.visitingInfo?.festivals && details.visitingInfo.festivals.length > 0 && (
                        <div>
                          <h3 className="font-medium text-spiritual-maroon">Major Festivals</h3>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {details.visitingInfo.festivals.map((festival, index) => (
                              <li key={index}>{festival}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div>
                        <h3 className="font-medium text-spiritual-maroon">Dress Code</h3>
                        <p className="text-gray-700">{details?.visitingInfo?.dressCode || "Modest traditional attire is recommended for temple visits."}</p>
                      </div>
                      
                      {details?.visitingInfo?.photography && (
                        <div>
                          <h3 className="font-medium text-spiritual-maroon">Photography</h3>
                          <p className="text-gray-700">{details.visitingInfo.photography}</p>
                        </div>
                      )}
                      
                      {details?.visitingInfo?.timeTaken && (
                        <div>
                          <h3 className="font-medium text-spiritual-maroon">Time Required</h3>
                          <p className="text-gray-700">{details.visitingInfo.timeTaken}</p>
                        </div>
                      )}
                      
                      {details?.nearbyAttractions && details.nearbyAttractions.length > 0 && (
                        <div>
                          <h3 className="font-medium text-spiritual-maroon">Nearby Attractions</h3>
                          <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {details.nearbyAttractions.map((attraction, index) => (
                              <li key={index}>{attraction}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mb-8 p-4 md:p-6 bg-white rounded-xl shadow-sm"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-cinzel font-bold text-spiritual-maroon">AI Features</h2>
                    <Link to="/ai" className="text-spiritual-ochre hover:text-spiritual-maroon text-sm">Learn more</Link>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to="/coming-soon" className="w-full">
                      <Button variant="outline" className="w-full">
                        Plan a Trip Including This Temple
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Right Column */}
            <div className={`${isMobile ? "order-first mb-6" : ""}`}>
              <motion.div 
                initial={{ opacity: 0, x: isMobile ? 0 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden sticky top-24"
              >
                <div className="p-4 md:p-6">
                  <h2 className="text-xl font-cinzel font-bold text-spiritual-maroon mb-4">Book Your Visit</h2>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600">Entry Fee</span>
                    <span className="font-medium text-lg">
                      {temple.price === 0 ? "Free" : `₹${temple.price}`}
                    </span>
                  </div>
                  
                  <Button 
                    className="w-full bg-spiritual-saffron hover:bg-spiritual-ochre mb-4"
                    onClick={handleBooking}
                  >
                    Book Darshan
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="w-full border-spiritual-maroon text-spiritual-maroon hover:bg-spiritual-maroon/5 mb-4"
                    onClick={handlePujaBooking}
                  >
                    Book Puja Service
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="w-full border-spiritual-ochre text-spiritual-ochre hover:bg-spiritual-ochre/5"
                    onClick={handlePrasadBooking}
                  >
                    Order Prasad Online
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </MobileOptimizedLayout>
    </div>
  );
};

export default TempleDetail;
