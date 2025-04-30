
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Search } from "lucide-react";
import { temples } from "@/data/temples";

const PujaTiming = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Puja Timings</h1>
      <p className="text-gray-600 mb-8">
        Find detailed schedules of daily and special pujas at temples across India
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
            <select className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white">
              <option>Any Temple</option>
              {temples.map(temple => (
                <option key={temple.id}>{temple.name}</option>
              ))}
            </select>
            <select className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white">
              <option>Any Puja</option>
              <option>Morning Aarti</option>
              <option>Evening Aarti</option>
              <option>Abhishekam</option>
              <option>Special Puja</option>
            </select>
            <Button className="bg-orange-500 hover:bg-orange-600">
              Search
            </Button>
          </div>
        </div>
      </div>
      
      {/* Schedule Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {temples.slice(0, 4).map((temple) => (
          <Card key={temple.id} className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 h-full">
                <img
                  src={temple.image || `https://via.placeholder.com/300x300?text=${temple.name}`}
                  alt={temple.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <CardContent className="p-5 md:w-2/3">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-semibold">{temple.name}</h2>
                    <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                      <MapPin className="h-3 w-3" />
                      <span>{temple.location}</span>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-orange-500 text-orange-500 hover:bg-orange-50"
                    asChild
                  >
                    <a href={`/temple/${temple.id}`}>View Temple</a>
                  </Button>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-4 p-2 border-l-4 border-orange-500 bg-orange-50">
                    <Clock className="h-5 w-5 text-orange-500" />
                    <div>
                      <h3 className="font-medium">Morning Aarti</h3>
                      <p className="text-gray-600 text-sm">5:00 AM - 6:00 AM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-2 border-l-4 border-purple-500 bg-purple-50">
                    <Clock className="h-5 w-5 text-purple-500" />
                    <div>
                      <h3 className="font-medium">Abhishekam</h3>
                      <p className="text-gray-600 text-sm">8:00 AM - 9:30 AM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-2 border-l-4 border-amber-500 bg-amber-50">
                    <Clock className="h-5 w-5 text-amber-500" />
                    <div>
                      <h3 className="font-medium">Evening Aarti</h3>
                      <p className="text-gray-600 text-sm">6:30 PM - 7:30 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600" asChild>
                    <a href={`/temple/${temple.id}`}>Book Darshan</a>
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
      
      {/* Weekly Schedule Section */}
      <h2 className="text-2xl font-semibold mb-6">This Week's Special Pujas</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-sm rounded-lg overflow-hidden">
          <thead className="bg-orange-50 text-left text-orange-800">
            <tr>
              <th className="p-4">Temple</th>
              <th className="p-4">Puja Name</th>
              <th className="p-4">Date</th>
              <th className="p-4">Time</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {[1, 2, 3, 4, 5].map((item) => (
              <tr key={item} className="hover:bg-gray-50">
                <td className="p-4">
                  {temples[item % 4].name}
                </td>
                <td className="p-4">
                  {item % 3 === 0 ? "Maha Abhishekam" : 
                   item % 3 === 1 ? "Sahasranamam" : 
                   "Rudrabhishekam"}
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-orange-500" />
                    <span>May {item + 20}, 2025</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-orange-500" />
                    <span>
                      {item % 3 === 0 ? "6:00 AM - 8:00 AM" : 
                       item % 3 === 1 ? "10:00 AM - 11:30 AM" : 
                       "5:00 PM - 7:00 PM"}
                    </span>
                  </div>
                </td>
                <td className="p-4">
                  <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                    Book Now
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PujaTiming;
