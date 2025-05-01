
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Calendar, MapPin, Clock, AlertCircle, ShoppingCart } from "lucide-react";
import { temples, getTempleById } from "@/data/temples";
import CongestionIndicator from "@/components/CongestionIndicator";
import { useToast } from "@/hooks/use-toast";

const TempleDetail = () => {
  const { id } = useParams();
  const temple = getTempleById(id || "");
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<number>(3);
  const [selectedTime, setSelectedTime] = useState<string>("8:00 AM");
  
  if (!temple) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Temple Not Found</h1>
        <p className="mb-6">The temple you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <a href="/">Return Home</a>
        </Button>
      </div>
    );
  }

  // Generate random congestion level for demo purposes
  const congestionLevels: ["low", "moderate", "high", "extreme"] = ["low", "moderate", "high", "extreme"];
  const currentCongestion = congestionLevels[Math.floor(Math.random() * congestionLevels.length)];

  const bookDarshan = () => {
    toast({
      title: "Darshan Booked",
      description: `Your darshan at ${temple.name} has been confirmed for May ${selectedDate + 10} at ${selectedTime}`,
    });
  };

  const bookPrasad = () => {
    toast({
      title: "Redirecting to Prasad Booking",
      description: "Please select your preferred prasad items",
    });
  };

  return (
    <div>
      <div className="relative h-[400px]">
        <img 
          src={temple.image || "https://via.placeholder.com/1200x400?text=Temple+Image"} 
          alt={temple.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="container mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{temple.name}</h1>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                <span>★</span>
                <span>{temple.rating}</span>
                <span className="text-white/80">(120+ reviews)</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{temple.location}</span>
              </div>
              
              {/* Real-time crowd congestion indicator */}
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                <CongestionIndicator level={currentCongestion} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-semibold mb-1">About</h2>
                    <p className="text-gray-500">Temple History & Significance</p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-1"
                  >
                    <Heart className="h-4 w-4" />
                    Save
                  </Button>
                </div>
                
                <div className="prose max-w-none">
                  <p>
                    {temple.description || `${temple.name} is one of the most sacred temples in India. 
                    Located in the heart of ${temple.location.split(',')[0]}, this ancient temple is dedicated 
                    to [Deity] and attracts thousands of devotees daily. The temple's architecture 
                    dates back several centuries and showcases the intricate craftsmanship of the era.`}
                  </p>
                  <p>
                    Visitors come to seek blessings, participate in rituals, and experience the 
                    divine atmosphere. The temple is particularly famous for its [special feature/ritual] 
                    and the annual [festival name] celebration.
                  </p>
                </div>

                <div className="mt-6 p-4 border rounded-lg bg-orange-50">
                  <h3 className="font-medium text-lg mb-2 flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Real-time Crowd Status
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <span>Current Crowd Level:</span>
                      <CongestionIndicator level={currentCongestion} />
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Estimated Wait Time:</span>
                      <span className="font-medium">
                        {currentCongestion === "low" ? "5-10 minutes" : 
                         currentCongestion === "moderate" ? "30-45 minutes" : 
                         currentCongestion === "high" ? "1-2 hours" : "3+ hours"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Best Time to Visit Today:</span>
                      <span className="font-medium">
                        {currentCongestion === "low" || currentCongestion === "moderate" ? "Now" : "After 6:00 PM"}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-6">Upcoming Events</h2>
                
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex gap-4 p-3 border rounded-lg hover:bg-gray-50">
                      <div className="min-w-16 h-16 bg-orange-100 text-orange-600 rounded-lg flex flex-col items-center justify-center text-center">
                        <span className="text-sm font-medium">May</span>
                        <span className="text-xl font-bold">{item + 10}</span>
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="font-medium">Special Puja Ceremony</h3>
                        <p className="text-gray-600 text-sm">Annual celebration with special rituals</p>
                        <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>6:00 AM - 8:00 AM</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>Main Temple Complex</span>
                          </div>
                        </div>
                      </div>
                      
                      <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white self-center">
                        <Link to="/pooja-booking">Book Now</Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-6">Temple Gallery</h2>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                      <img 
                        src={`https://images.unsplash.com/photo-${1500000000000 + item * 10000}?q=80&w=300&h=300&auto=format&fit=crop`} 
                        alt={`Temple image ${item}`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>
                
                <Button asChild variant="outline" className="mt-4 w-full">
                  <Link to="/gallery">View All Photos</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-6">Visitor Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Opening Hours</h3>
                    <p className="text-gray-600">{temple.hours}</p>
                    <p className="text-gray-600 mt-2">Special timings may apply during festivals.</p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Dress Code</h3>
                    <p className="text-gray-600">
                      Traditional and modest attire is recommended. Men should wear dhoti or pants, 
                      and women should wear sarees or salwar kameez.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Photography</h3>
                    <p className="text-gray-600">
                      Photography is restricted in certain areas. Please check with temple authorities.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Special Instructions</h3>
                    <p className="text-gray-600">
                      Electronic devices may need to be deposited at the entrance. Offerings like flowers 
                      and fruits are available near the temple.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:w-1/3 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Book Darshan</h2>
                
                <div className="border-b pb-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Darshan</span>
                    <span className="font-medium">₹{temple.price}</span>
                  </div>
                  <p className="text-sm text-gray-600">Regular entry for one person</p>
                </div>
                
                <div className="border-b pb-4 mb-4">
                  <h3 className="font-medium mb-2">Select Date</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3, 4, 5, 6].map((day) => (
                      <Button 
                        key={day} 
                        variant={day === selectedDate ? "default" : "outline"} 
                        className={day === selectedDate ? "bg-orange-500 hover:bg-orange-600" : ""}
                        onClick={() => setSelectedDate(day)}
                      >
                        May {day + 10}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="border-b pb-4 mb-4">
                  <h3 className="font-medium mb-2">Select Time Slot</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {["6:00 AM", "8:00 AM", "10:00 AM", "4:00 PM"].map((time) => (
                      <Button 
                        key={time} 
                        variant={time === selectedTime ? "default" : "outline"}
                        className={time === selectedTime ? "bg-orange-500 hover:bg-orange-600" : ""}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center font-medium mb-4">
                  <span>Total</span>
                  <span>₹{temple.price}</span>
                </div>
                
                <Button 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white mb-3"
                  onClick={bookDarshan}
                >
                  Book Now
                </Button>

                <div className="grid grid-cols-2 gap-3">
                  <Button 
                    variant="outline"
                    className="flex items-center justify-center gap-2"
                    asChild
                  >
                    <Link to="/prasad-booking">
                      <ShoppingCart className="h-4 w-4" />
                      Order Prasad
                    </Link>
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="flex items-center justify-center gap-2"
                    asChild
                  >
                    <Link to="/pooja-booking">
                      <Calendar className="h-4 w-4" />
                      Book Pooja
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Make a Donation</h2>
                <p className="text-gray-600 mb-4">
                  Support the temple's activities and maintenance with your contribution.
                </p>
                
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {["₹101", "₹501", "₹1,001", "₹2,001", "₹5,001", "₹10,001"].map((amount) => (
                    <Button 
                      key={amount} 
                      variant="outline"
                      className="border-orange-200 hover:border-orange-500"
                    >
                      {amount}
                    </Button>
                  ))}
                </div>
                
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Donate Now
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Need Help?</h2>
                <div className="flex items-center gap-3 text-gray-700">
                  <AlertCircle className="h-5 w-5 text-orange-500" />
                  <span>Have questions about visiting this temple?</span>
                </div>
                <Button asChild variant="outline" className="w-full mt-4">
                  <Link to="/contact">Contact Temple</Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* Live Congestion Updates Card */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Live Updates</h2>
                  <div className="animate-pulse h-2 w-2 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-3">
                  <div className="text-sm">
                    <span className="text-green-500 font-medium">10 min ago</span>
                    <p>Main temple hall is now {currentCongestion === "low" ? "easily accessible" : "getting crowded"}.</p>
                  </div>
                  <div className="text-sm">
                    <span className="text-amber-500 font-medium">45 min ago</span>
                    <p>Special puja preparations have started in the north wing.</p>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500 font-medium">2 hours ago</span>
                    <p>Temple grounds opened for early morning visitors.</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="w-full mt-4 text-orange-500">
                  See all updates
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempleDetail;
