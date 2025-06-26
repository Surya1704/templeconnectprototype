
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageWithFallback from "@/components/ImageWithFallback";

const sampleEvents = [
  {
    id: "1",
    title: "Maha Shivaratri",
    temple: "Somnath Temple",
    location: "Gujarat",
    date: "2024-03-08",
    time: "All Day",
    category: "festival",
    description: "Grand celebration of Lord Shiva with night-long prayers and abhishekam",
    image: "/lovable-uploads/006968a1-560a-479d-8493-50f8639dce12.png",
    attendees: "100,000+",
    rating: 4.9,
    highlights: ["Night Vigil", "Special Abhishekam", "Cultural Programs"]
  },
  {
    id: "2", 
    title: "Diwali Celebrations",
    temple: "Golden Temple",
    location: "Punjab",
    date: "2024-11-01",
    time: "Evening",
    category: "festival",
    description: "Festival of lights with spectacular illumination and community prayers",
    image: "/lovable-uploads/b27d0b3a-4090-4b23-804a-b569ee1c971b.png",
    attendees: "200,000+",
    rating: 4.8,
    highlights: ["Temple Illumination", "Langar Service", "Fireworks"]
  },
  {
    id: "3",
    title: "Brahmotsavam",
    temple: "Tirupati Balaji",
    location: "Andhra Pradesh", 
    date: "2024-09-15",
    time: "9 Days",
    category: "festival",
    description: "Annual 9-day festival with grand processions and special darshan",
    image: "/lovable-uploads/b668b893-dac5-4d67-9be0-425045941429.png",
    attendees: "500,000+",
    rating: 4.9,
    highlights: ["Grand Processions", "Special Darshan", "Cultural Events"]
  },
  {
    id: "4",
    title: "Kedarnath Yatra",
    temple: "Kedarnath Temple",
    location: "Uttarakhand",
    date: "2024-05-15",
    time: "Season Opening",
    category: "pilgrimage",
    description: "Sacred pilgrimage to one of the holiest Jyotirlingas in the Himalayas",
    image: "/lovable-uploads/bff90acf-434f-4b5d-a02a-f8cd060e2ec9.png",
    attendees: "50,000+",
    rating: 4.7,
    highlights: ["Himalayan Trek", "Sacred Darshan", "Mountain Views"]
  },
  {
    id: "5",
    title: "Rath Yatra",
    temple: "Jagannath Temple",
    location: "Odisha",
    date: "2024-07-07",
    time: "Morning",
    category: "festival",
    description: "World-famous chariot festival with Lord Jagannath's grand procession",
    image: "/lovable-uploads/8a415d87-63d9-44f9-bb8e-583856ad0fa5.png",
    attendees: "1,000,000+",
    rating: 5.0,
    highlights: ["Chariot Procession", "Street Festival", "Community Participation"]
  },
  {
    id: "6",
    title: "Yoga & Meditation Retreat",
    temple: "Rishikesh Ashram",
    location: "Uttarakhand",
    date: "2024-06-21",
    time: "3 Days",
    category: "spiritual",
    description: "International Yoga Day special retreat with meditation and spiritual practices",
    image: "/lovable-uploads/bed64bd3-3688-44d2-9bad-a6918b67c9a6.png",
    attendees: "5,000+",
    rating: 4.6,
    highlights: ["Yoga Sessions", "Meditation", "Spiritual Talks"]
  }
];

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "All Events", emoji: "🎉" },
    { id: "festival", name: "Festivals", emoji: "🎊" },
    { id: "pilgrimage", name: "Pilgrimage", emoji: "🚶" },
    { id: "spiritual", name: "Spiritual", emoji: "🧘" }
  ];

  const filteredEvents = sampleEvents.filter(event => {
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.temple.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'long', 
      day: 'numeric',
      year: 'numeric' 
    });
  };

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
            Temple Events & Festivals
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover upcoming festivals, pilgrimages, and spiritual events at temples across India
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search events by name, temple, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-spiritual-saffron"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-spiritual-saffron text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.emoji} {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="h-48 relative">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    fallbackSrc="/placeholder.svg"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-full flex items-center gap-1">
                    <Star className="h-3 w-3 text-spiritual-saffron fill-current" />
                    <span className="text-xs font-medium">{event.rating}</span>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-spiritual-saffron text-white text-xs px-2 py-1 rounded-full capitalize">
                      {event.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-4 flex flex-col h-full">
                  <div className="flex-grow">
                    <h3 className="font-bold text-lg text-spiritual-maroon mb-2">{event.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{event.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{formatDate(event.date)}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{event.time}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{event.temple}, {event.location}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{event.attendees} expected attendees</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {event.highlights.map((highlight, i) => (
                        <span key={i} className="text-xs bg-spiritual-saffron/10 text-spiritual-maroon px-2 py-1 rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <Button 
                      disabled 
                      className="w-full bg-gray-300 text-gray-500 cursor-not-allowed"
                    >
                      Bookings Opening Soon
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <div className="text-center bg-spiritual-saffron/10 rounded-lg p-8 border border-spiritual-saffron/20">
          <h3 className="text-xl font-semibold text-spiritual-maroon mb-2">Event Registration Coming Soon!</h3>
          <p className="text-gray-700 mb-4">
            We're working on enabling event registrations and ticket bookings. 
            Soon you'll be able to register for festivals and book your spot at spiritual events.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-spiritual-saffron hover:bg-spiritual-ochre text-white">
              Get Notified
            </Button>
            <Button variant="outline" className="border-spiritual-saffron text-spiritual-saffron hover:bg-spiritual-saffron hover:text-white">
              Join Early Access
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
