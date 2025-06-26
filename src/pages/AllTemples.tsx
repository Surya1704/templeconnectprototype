
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Clock, ExternalLink, Search } from "lucide-react";
import ImageWithFallback from "@/components/ImageWithFallback";

const AllTemples = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("all");

  // Simplified temple data
  const temples = [
    {
      id: 1,
      name: "Tirupati Balaji Temple",
      city: "Tirupati",
      state: "Andhra Pradesh",
      image: "https://i.pinimg.com/736x/3c/e2/c3/3ce2c373003a51dc5589496554b7ce76.jpg",
      timings: "4:30 AM - 10:00 PM",
      donationLink: "https://ttdsevaonline.com"
    },
    {
      id: 2,
      name: "Golden Temple",
      city: "Amritsar",
      state: "Punjab",
      image: "https://i.pinimg.com/736x/55/c8/30/55c8306e3a08e6df393a71a0acb11914.jpg",
      timings: "3:00 AM - 12:00 AM",
      donationLink: "https://sgpc.net"
    },
    {
      id: 3,
      name: "Somnath Temple",
      city: "Somnath",
      state: "Gujarat",
      image: "https://i.pinimg.com/736x/cd/84/8d/cd848d413a478fa85d11e1068fb669f3.jpg",
      timings: "6:00 AM - 9:00 PM",
      donationLink: "https://somnath.org"
    },
    {
      id: 4,
      name: "Kashi Vishwanath Temple",
      city: "Varanasi",
      state: "Uttar Pradesh",
      image: "https://i.pinimg.com/736x/bf/60/88/bf60886c58e4ffd17540c7f8e4f5d583.jpg",
      timings: "3:00 AM - 11:00 PM",
      donationLink: "https://shrikashivishwanath.org"
    },
    {
      id: 5,
      name: "Jagannath Temple",
      city: "Puri",
      state: "Odisha",
      image: "https://i.pinimg.com/736x/42/60/fb/4260fb49a4b1496eb18cc90f79b87185.jpg",
      timings: "5:00 AM - 10:00 PM",
      donationLink: "https://jagannath.nic.in"
    },
    {
      id: 6,
      name: "Kedarnath Temple",
      city: "Kedarnath",
      state: "Uttarakhand",
      image: "https://i.pinimg.com/736x/36/da/9d/36da9dea692a7f4b93d7705a824da3f1.jpg",
      timings: "4:00 AM - 9:00 PM",
      donationLink: "https://badrinath-kedarnath.gov.in"
    }
  ];

  const states = [...new Set(temples.map(temple => temple.state))].sort();

  const filteredTemples = temples.filter(temple => {
    const matchesSearch = temple.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         temple.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = selectedState === "all" || temple.state === selectedState;
    return matchesSearch && matchesState;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-cinzel font-bold text-spiritual-maroon mb-4">
          Sacred Temples of India
        </h1>
        <p className="text-lg text-spiritual-maroon/70 max-w-2xl mx-auto">
          Discover divine temples across India with timings and donation information
        </p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search temples..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={selectedState} onValueChange={setSelectedState}>
            <SelectTrigger>
              <SelectValue placeholder="Select State" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All States</SelectItem>
              {states.map(state => (
                <SelectItem key={state} value={state}>{state}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Button className="bg-spiritual-saffron hover:bg-spiritual-ochre">
            Search Temples
          </Button>
        </div>
      </div>

      {/* Temple Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemples.map((temple, index) => (
          <motion.div
            key={temple.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <ImageWithFallback
                  src={temple.image}
                  alt={temple.name}
                  className="w-full h-full object-cover"
                  fallbackSrc="/placeholder.svg"
                />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-cinzel font-bold text-spiritual-maroon mb-2">
                  {temple.name}
                </h3>
                
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <MapPin className="h-4 w-4" />
                  <span>{temple.city}, {temple.state}</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Clock className="h-4 w-4" />
                  <span>{temple.timings}</span>
                </div>
                
                <div className="flex gap-2">
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <a href={`/puja-timings#${temple.name.toLowerCase().replace(/ /g, '-')}`}>
                      View Timings
                    </a>
                  </Button>
                  
                  <Button asChild size="sm" className="bg-spiritual-saffron hover:bg-spiritual-ochre">
                    <a href={temple.donationLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Donate
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredTemples.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No temples found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default AllTemples;
