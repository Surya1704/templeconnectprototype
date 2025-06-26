
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import ImageWithFallback from "@/components/ImageWithFallback";

// Sample temple data
const sampleTemples = [
  {
    id: "1",
    name: "Tirupati Balaji",
    location: "Tirupati, Andhra Pradesh",
    state: "Andhra Pradesh",
    image: "/lovable-uploads/006968a1-560a-479d-8493-50f8639dce12.png",
    rating: 4.8,
    visitors: "50,000+ daily",
    timings: "5:30 AM - 9:00 PM",
    highlights: ["World's Richest Temple", "Ancient Architecture"]
  },
  {
    id: "2", 
    name: "Somnath Temple",
    location: "Somnath, Gujarat",
    state: "Gujarat",
    image: "/lovable-uploads/b27d0b3a-4090-4b23-804a-b569ee1c971b.png",
    rating: 4.7,
    visitors: "25,000+ daily",
    timings: "6:00 AM - 9:00 PM",
    highlights: ["First Jyotirlinga", "Sea-facing Temple"]
  },
  {
    id: "3",
    name: "Golden Temple",
    location: "Amritsar, Punjab", 
    state: "Punjab",
    image: "/lovable-uploads/b668b893-dac5-4d67-9be0-425045941429.png",
    rating: 4.9,
    visitors: "100,000+ daily",
    timings: "24 hours open",
    highlights: ["Golden Architecture", "Langar Service"]
  },
  {
    id: "4",
    name: "Kashi Vishwanath",
    location: "Varanasi, Uttar Pradesh",
    state: "Uttar Pradesh", 
    image: "/lovable-uploads/bff90acf-434f-4b5d-a02a-f8cd060e2ec9.png",
    rating: 4.6,
    visitors: "30,000+ daily",
    timings: "5:00 AM - 11:00 PM",
    highlights: ["Sacred Jyotirlinga", "Ancient City"]
  },
  {
    id: "5",
    name: "Jagannath Temple",
    location: "Puri, Odisha",
    state: "Odisha",
    image: "/lovable-uploads/8a415d87-63d9-44f9-bb8e-583856ad0fa5.png", 
    rating: 4.5,
    visitors: "20,000+ daily",
    timings: "5:00 AM - 10:00 PM",
    highlights: ["Rath Yatra Festival", "Jagannath Deity"]
  }
];

const AllTemples = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const states = ["All States", "Andhra Pradesh", "Gujarat", "Punjab", "Uttar Pradesh", "Odisha"];

  const filteredTemples = sampleTemples.filter(temple => {
    const matchesSearch = temple.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         temple.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = selectedState === "" || selectedState === "All States" || temple.state === selectedState;
    return matchesSearch && matchesState;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-spiritual-maroon mb-4">
            Discover Sacred Temples
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore temples across India, check timings, and plan your spiritual journey
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search temples by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-spiritual-saffron"
              />
            </div>
            <div className="md:w-48">
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-spiritual-saffron"
              >
                {states.map(state => (
                  <option key={state} value={state === "All States" ? "" : state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Temple Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredTemples.map((temple, index) => (
            <motion.div
              key={temple.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 relative">
                  <ImageWithFallback
                    src={temple.image}
                    alt={temple.name}
                    className="w-full h-full object-cover"
                    fallbackSrc="/placeholder.svg"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-full flex items-center gap-1">
                    <Star className="h-3 w-3 text-spiritual-saffron fill-current" />
                    <span className="text-xs font-medium">{temple.rating}</span>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg text-spiritual-maroon mb-2">{temple.name}</h3>
                  
                  <div className="flex items-center gap-1 mb-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{temple.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-1 mb-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{temple.timings}</span>
                  </div>
                  
                  <div className="flex items-center gap-1 mb-3">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{temple.visitors}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {temple.highlights.map((highlight, i) => (
                      <span key={i} className="text-xs bg-spiritual-saffron/10 text-spiritual-maroon px-2 py-1 rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Link 
                      to="/puja-timings" 
                      className="flex-1 bg-spiritual-saffron text-white text-center py-2 px-3 rounded-md text-sm hover:bg-spiritual-ochre transition-colors"
                    >
                      View Timings
                    </Link>
                    <Link 
                      to="/donations" 
                      className="flex-1 border border-spiritual-saffron text-spiritual-saffron text-center py-2 px-3 rounded-md text-sm hover:bg-spiritual-saffron hover:text-white transition-colors"
                    >
                      Donate
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Footer */}
        <div className="text-center bg-spiritual-saffron/10 rounded-lg p-8 border border-spiritual-saffron/20">
          <h3 className="text-xl font-semibold text-spiritual-maroon mb-2">More Temples Being Added Soon!</h3>
          <p className="text-gray-700 mb-4">
            We're continuously expanding our network of temples across India. 
            Check back regularly for new additions to your spiritual journey.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-spiritual-saffron text-white px-6 py-2 rounded-md hover:bg-spiritual-ochre transition-colors">
              Get Notified
            </button>
            <button className="border border-spiritual-saffron text-spiritual-maroon px-6 py-2 rounded-md hover:bg-spiritual-saffron hover:text-white transition-colors">
              Suggest a Temple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTemples;
