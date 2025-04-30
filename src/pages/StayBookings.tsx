
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, MapPin, Calendar, Users, Star } from "lucide-react";
import { temples } from "@/data/temples";

const StayBookings = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Temple Stay Bookings</h1>
      <p className="text-gray-600 mb-8">
        Find accommodations near temples for a spiritual stay experience
      </p>
      
      {/* Search & Filter */}
      <div className="bg-white rounded-lg shadow p-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search temple or location..."
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-1 border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white">
              <Calendar className="h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Check-in"
                className="border-none focus:outline-none text-sm"
              />
            </div>
            <div className="flex items-center gap-1 border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white">
              <Calendar className="h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Check-out"
                className="border-none focus:outline-none text-sm"
              />
            </div>
            <div className="flex items-center gap-1 border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white">
              <Users className="h-4 w-4 text-gray-400" />
              <select className="border-none focus:outline-none text-sm bg-transparent">
                <option>2 Guests</option>
                <option>1 Guest</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
                <option>5+ Guests</option>
              </select>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600">
              Search
            </Button>
          </div>
        </div>
        
        <div className="flex items-center gap-4 mt-4">
          <Button variant="outline" size="sm" className="rounded-full border-gray-300">
            Free cancellation
          </Button>
          <Button variant="outline" size="sm" className="rounded-full border-gray-300">
            AC rooms
          </Button>
          <Button variant="outline" size="sm" className="rounded-full border-gray-300">
            Temple view
          </Button>
          <Button variant="outline" size="sm" className="rounded-full border-gray-300">
            Meals included
          </Button>
          <Button variant="outline" size="sm" className="rounded-full border-gray-300">
            Transportation service
          </Button>
        </div>
      </div>
      
      {/* Featured Accommodations */}
      <h2 className="text-2xl font-semibold mb-6">Featured Accommodations</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        {temples.map((temple) => (
          <Card key={temple.id} className="overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="md:flex">
              <div className="md:w-2/5 relative">
                <img
                  src={temple.image || `https://via.placeholder.com/300x300?text=Accommodation`}
                  alt={`Accommodation near ${temple.name}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded text-xs">
                  Featured
                </div>
              </div>
              
              <CardContent className="p-5 md:w-3/5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">{temple.name} Pilgrim Lodge</h3>
                  <div className="flex items-center bg-orange-500 text-white px-2 py-1 rounded-full text-sm">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    <span>{temple.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 text-gray-600 text-sm mb-3">
                  <MapPin className="h-3 w-3" />
                  <span>300m from {temple.name}</span>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-600 text-sm mb-2">
                    Comfortable accommodations with temple views, daily shuttle service, 
                    and complimentary breakfast. Perfect for pilgrims seeking 
                    convenience and comfort during their spiritual journey.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-gray-100 rounded-full px-2 py-1">Free WiFi</span>
                    <span className="bg-gray-100 rounded-full px-2 py-1">Temple Shuttle</span>
                    <span className="bg-gray-100 rounded-full px-2 py-1">AC Rooms</span>
                    <span className="bg-gray-100 rounded-full px-2 py-1">Vegetarian Meals</span>
                  </div>
                </div>
                
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm text-gray-600">2 nights · Double room</p>
                    <p className="text-lg font-semibold">
                      ₹{1200 + temple.id * 300} <span className="text-sm font-normal text-gray-600">per night</span>
                    </p>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
      
      {/* Temple Homestays */}
      <h2 className="text-2xl font-semibold mb-6">Temple Homestays</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <Card key={item} className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative">
              <img
                src={`https://via.placeholder.com/300x200?text=Homestay+${item}`}
                alt={`Homestay ${item}`}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-white text-orange-500 p-1 rounded-full">
                <Star className="h-4 w-4 fill-current" />
              </div>
            </div>
            
            <CardContent className="p-4">
              <h3 className="font-semibold mb-1">Traditional Family Homestay {item}</h3>
              <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                <MapPin className="h-3 w-3" />
                <span>Near {temples[item % 4].name}</span>
              </div>
              
              <p className="text-gray-600 text-sm mb-3">
                Experience authentic local hospitality in a family home with traditional meals.
              </p>
              
              <div className="flex items-center justify-between">
                <p className="font-semibold">
                  ₹{800 + item * 200} <span className="text-xs font-normal text-gray-500">night</span>
                </p>
                <div className="flex items-center">
                  <Star className="h-3 w-3 fill-current text-amber-500" />
                  <span className="text-xs ml-1">{4.5 + (item % 5) / 10} ({10 + item * 5})</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StayBookings;
