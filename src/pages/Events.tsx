
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Search } from "lucide-react";

const Events = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Temple Events</h1>
      <p className="text-gray-600 mb-8">
        Discover and participate in spiritual events at temples across India
      </p>
      
      {/* Search & Filter */}
      <div className="bg-white rounded-lg shadow p-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search events..."
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <select className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white">
              <option>Any Event Type</option>
              <option>Festivals</option>
              <option>Special Pujas</option>
              <option>Cultural Programs</option>
              <option>Spiritual Talks</option>
            </select>
            <select className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white">
              <option>Any Date</option>
              <option>Today</option>
              <option>This Week</option>
              <option>This Month</option>
              <option>Next Month</option>
            </select>
            <Button className="bg-orange-500 hover:bg-orange-600">
              Search
            </Button>
          </div>
        </div>
      </div>
      
      {/* Featured Event */}
      <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-lg overflow-hidden mb-8">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img
              src="https://via.placeholder.com/600x400?text=Festival+Image"
              alt="Featured Event"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 md:w-2/3">
            <div className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
              Featured Event
            </div>
            <h2 className="text-2xl font-bold mb-2">Annual Karthikai Deepam Festival</h2>
            <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>May 15-20, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Tiruvannamalai Temple, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>5:00 PM onwards</span>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Experience the magnificent lighting of the sacred beacon on top of Arunachala hill, 
              symbolizing Lord Shiva as the infinite pillar of light. This five-day festival attracts 
              thousands of devotees and features special pujas, cultural programs, and the grand 
              deepam lighting ceremony.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600">
                Register to Attend
              </Button>
              <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                View Details
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Upcoming Events */}
      <h2 className="text-2xl font-semibold mb-6">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-white rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition-shadow">
            <img
              src={`https://via.placeholder.com/400x200?text=Event+${item}`}
              alt={`Event ${item}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <div className="flex justify-between items-start mb-3">
                <div className="min-w-16 h-16 bg-orange-100 text-orange-600 rounded-lg flex flex-col items-center justify-center text-center">
                  <span className="text-sm font-medium">May</span>
                  <span className="text-xl font-bold">{item + 15}</span>
                </div>
                <div className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                  {item % 3 === 0 ? "Festival" : item % 3 === 1 ? "Puja" : "Cultural"}
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">{
                item % 3 === 0 ? "Hanuman Jayanti Celebration" : 
                item % 3 === 1 ? "Sahasra Deepa Alankara" : 
                "Bhajan & Devotional Music Night"
              }</h3>
              <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
                <MapPin className="h-3 w-3" />
                <span>{
                  item % 4 === 0 ? "Jagannath Temple, Puri" : 
                  item % 4 === 1 ? "Meenakshi Temple, Madurai" : 
                  item % 4 === 2 ? "Kashi Vishwanath, Varanasi" :
                  "Tirupati Balaji Temple, Andhra Pradesh"
                }</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-500 mb-4">
                <Clock className="h-3 w-3" />
                <span>{
                  item % 3 === 0 ? "6:00 AM - 9:00 PM" : 
                  item % 3 === 1 ? "7:00 PM - 9:00 PM" : 
                  "5:00 PM - 8:00 PM"
                }</span>
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600">
                Register
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
