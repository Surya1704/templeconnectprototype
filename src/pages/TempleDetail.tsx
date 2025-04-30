
import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Calendar, MapPin, Clock, AlertCircle } from "lucide-react";
import { temples, getTempleById } from "@/data/temples";

const TempleDetail = () => {
  const { id } = useParams();
  const temple = getTempleById(id || "");
  
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
                      
                      <Button className="bg-orange-500 hover:bg-orange-600 text-white self-center">
                        Book Now
                      </Button>
                    </div>
                  ))}
                </div>
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
                        variant={day === 3 ? "default" : "outline"} 
                        className={day === 3 ? "bg-orange-500 hover:bg-orange-600" : ""}
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
                        variant={time === "8:00 AM" ? "default" : "outline"}
                        className={time === "8:00 AM" ? "bg-orange-500 hover:bg-orange-600" : ""}
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
                
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Book Now
                </Button>
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
                <Button variant="outline" className="w-full mt-4">
                  Contact Temple
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
