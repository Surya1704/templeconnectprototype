import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getTempleById } from "@/data/mergeTemples";
import { CalendarDays, Clock, MapPin, Users, Info, Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Temple } from "@/data/temples";
import GuidedTourButton from "@/components/GuidedTourButton";
import TempleAttireInfo from "@/components/TempleAttireInfo";

const TempleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [temple, setTemple] = useState<Temple | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Reset state when ID changes
    setIsLoading(true);
    setNotFound(false);

    // Simulate API call
    setTimeout(() => {
      if (id) {
        const templeData = getTempleById(id);
        if (templeData) {
          setTemple(templeData);
        } else {
          console.error(`Temple with ID ${id} not found in the database`);
          setNotFound(true);
          toast({
            title: "Temple not found",
            description: `We couldn't find the temple with ID ${id}`,
            variant: "destructive"
          });
        }
      }
      setIsLoading(false);
    }, 500);
  }, [id, toast]);

  const handleBooking = () => {
    toast({
      title: "Booking initiated!",
      description: "You will soon be redirected to the booking page.",
    });
  };

  // Handle redirection to all temples if not found
  useEffect(() => {
    if (notFound && !isLoading) {
      // Optional: auto-redirect after a delay
      // const timeout = setTimeout(() => {
      //   navigate('/temples');
      // }, 5000);
      // return () => clearTimeout(timeout);
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
        <div className="container mx-auto px-4 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-cinzel font-bold">{temple.name}</h1>
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
            
            <div className="mt-8 flex flex-wrap gap-4">
              {temple.tags.map((tag) => (
                <span key={tag} className="bg-white/10 rounded-full px-4 py-1.5 text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="md:col-span-2">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden mb-8"
              >
                <div className="h-64 bg-spiritual-sandstone/30 relative">
                  {/* Temple Illustration */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-40 relative">
                      <div className="absolute inset-0 bg-spiritual-maroon/20 rounded-t-2xl"></div>
                      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-24 rounded-t-full bg-spiritual-ochre/30"></div>
                      <div className="absolute left-1/2 -translate-x-1/2 top-3 w-8 h-8 rounded-full bg-spiritual-gold/40"></div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-cinzel font-bold text-spiritual-maroon mb-4">About {temple.name}</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {temple.description || `${temple.name} is a beautiful religious site located in ${temple.location}. The temple attracts thousands of devotees every year who come to seek blessings and experience the spiritual ambiance of this sacred place.`}
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
                        <p className="text-sm text-gray-600">Early morning or during festivals</p>
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
                          <TempleAttireInfo templeName={temple.name} templeType={temple.tags[0] || "traditional"} />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-8 p-6 bg-white rounded-xl shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-cinzel font-bold text-spiritual-maroon">AI Features</h2>
                  <Link to="/ai" className="text-spiritual-ochre hover:text-spiritual-maroon text-sm">Learn more</Link>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <GuidedTourButton 
                    templeName={temple.name}
                    templeTags={temple.tags}
                    className="w-full"
                  />
                  <Link to="/trip-planner" className="w-full">
                    <Button variant="outline" className="w-full">
                      Plan a Trip Including This Temple
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
            
            {/* Right Column */}
            <div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden sticky top-24"
              >
                <div className="p-6">
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
                  >
                    Book Puja Service
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="w-full border-spiritual-ochre text-spiritual-ochre hover:bg-spiritual-ochre/5"
                  >
                    Order Prasad Online
                  </Button>
                  
                  <div className="mt-6 bg-spiritual-saffron/5 rounded-lg p-4 text-sm text-gray-600">
                    <p className="mb-2 font-medium text-spiritual-maroon">COVID-19 Information</p>
                    <p>Temperature checks and masks required. Please check current guidelines.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempleDetail;
