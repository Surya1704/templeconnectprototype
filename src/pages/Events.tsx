
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Clock, Users, Star, Camera, Music } from "lucide-react";
import { temples } from "@/data/temples";
import ImageWithFallback from "@/components/ImageWithFallback";

const Events = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedTemple, setSelectedTemple] = useState("all");

  const events = [
    {
      id: 1,
      title: "Maha Shivaratri Celebration",
      temple: "Somnath Temple",
      date: "2024-03-08",
      time: "4:00 AM - 11:59 PM",
      location: "Gujarat",
      description: "Grand celebration of Lord Shiva with special pujas, abhishek, and cultural programs throughout the day.",
      category: "festival",
      attendees: 50000,
      rating: 4.8,
      image: "https://i.pinimg.com/736x/3c/e2/c3/3ce2c373003a51dc5589496554b7ce76.jpg",
      highlights: ["Special Abhishek", "Cultural Programs", "Prasad Distribution"]
    },
    {
      id: 2,
      title: "Diwali Festival Celebration",
      temple: "Golden Temple",
      date: "2024-11-01",
      time: "5:00 PM - 12:00 AM",
      location: "Amritsar, Punjab",
      description: "Experience the divine beauty of Golden Temple illuminated with thousands of lights during Diwali.",
      category: "festival",
      attendees: 100000,
      rating: 4.9,
      image: "https://i.pinimg.com/736x/55/c8/30/55c8306e3a08e6df393a71a0acb11914.jpg",
      highlights: ["Temple Illumination", "Fireworks", "Community Langar"]
    },
    {
      id: 3,
      title: "Brahmotsavam Festival",
      temple: "Tirupati Balaji",
      date: "2024-09-15",
      time: "6:00 AM - 10:00 PM",
      location: "Andhra Pradesh",
      description: "Nine-day annual festival with processions, special darshan, and traditional ceremonies.",
      category: "festival",
      attendees: 200000,
      rating: 4.7,
      image: "https://i.pinimg.com/736x/ec/43/cd/ec43cddd1f72b04b8743229b8ba815f8.jpg",
      highlights: ["Processions", "Special Darshan", "Cultural Events"]
    },
    {
      id: 4,
      title: "Kumbh Mela Gathering",
      temple: "Kashi Vishwanath",
      date: "2024-04-14",
      time: "All Day",
      location: "Varanasi, Uttar Pradesh",
      description: "Sacred gathering with holy dip in Ganges, spiritual discourses by saints and sadhus.",
      category: "pilgrimage",
      attendees: 1000000,
      rating: 4.9,
      image: "https://i.pinimg.com/736x/6d/a2/9e/6da29ed46946a91bbe050f045d3c8eee.jpg",
      highlights: ["Holy Dip", "Spiritual Discourses", "Sadhu Darshan"]
    },
    {
      id: 5,
      title: "Jagannath Rath Yatra",
      temple: "Jagannath Temple",
      date: "2024-07-07",
      time: "6:00 AM - 8:00 PM",
      location: "Puri, Odisha",
      description: "Grand chariot procession of Lord Jagannath with millions of devotees participating.",
      category: "festival",
      attendees: 1500000,
      rating: 4.8,
      image: "https://i.pinimg.com/736x/42/60/fb/4260fb49a4b1496eb18cc90f79b87185.jpg",
      highlights: ["Chariot Procession", "Mass Participation", "Traditional Music"]
    },
    {
      id: 6,
      title: "Meditation & Yoga Retreat",
      temple: "Kedarnath Temple",
      date: "2024-06-21",
      time: "5:00 AM - 7:00 PM",
      location: "Uttarakhand",
      description: "International Yoga Day celebration with meditation sessions in the Himalayan serenity.",
      category: "spiritual",
      attendees: 500,
      rating: 4.6,
      image: "https://i.pinimg.com/736x/f3/7f/61/f37f61c5a973d2c2cefa0d5a7aded906.jpg",
      highlights: ["Guided Meditation", "Yoga Sessions", "Himalayan Views"]
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesFilter = selectedFilter === "all" || event.category === selectedFilter;
    const matchesTemple = selectedTemple === "all" || event.temple.includes(selectedTemple);
    return matchesFilter && matchesTemple;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Temple Events & Festivals</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover and participate in sacred festivals, spiritual gatherings, and cultural celebrations across India's most revered temples.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Event Category</label>
            <select 
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="all">All Categories</option>
              <option value="festival">Festivals</option>
              <option value="pilgrimage">Pilgrimages</option>
              <option value="spiritual">Spiritual Events</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Temple Location</label>
            <select 
              value={selectedTemple}
              onChange={(e) => setSelectedTemple(e.target.value)}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="all">All Temples</option>
              <option value="Somnath">Somnath Temple</option>
              <option value="Golden">Golden Temple</option>
              <option value="Tirupati">Tirupati Balaji</option>
              <option value="Kashi">Kashi Vishwanath</option>
              <option value="Jagannath">Jagannath Temple</option>
              <option value="Kedarnath">Kedarnath</option>
            </select>
          </div>
          
          <div className="flex items-end">
            <Button className="w-full bg-orange-500 hover:bg-orange-600 border border-orange-400 shadow-md">
              Search Events
            </Button>
          </div>
        </div>
      </div>

      {/* Event Categories */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        <Badge 
          variant={selectedFilter === "all" ? "default" : "outline"}
          className="cursor-pointer px-4 py-2 border shadow-sm"
          onClick={() => setSelectedFilter("all")}
        >
          All Events
        </Badge>
        <Badge 
          variant={selectedFilter === "festival" ? "default" : "outline"}
          className="cursor-pointer px-4 py-2 border shadow-sm"
          onClick={() => setSelectedFilter("festival")}
        >
          🎉 Festivals
        </Badge>
        <Badge 
          variant={selectedFilter === "pilgrimage" ? "default" : "outline"}
          className="cursor-pointer px-4 py-2 border shadow-sm"
          onClick={() => setSelectedFilter("pilgrimage")}
        >
          🚶 Pilgrimages
        </Badge>
        <Badge 
          variant={selectedFilter === "spiritual" ? "default" : "outline"}
          className="cursor-pointer px-4 py-2 border shadow-sm"
          onClick={() => setSelectedFilter("spiritual")}
        >
          🧘 Spiritual Events
        </Badge>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredEvents.map((event) => (
          <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48">
              <ImageWithFallback
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
                fallbackSrc="/placeholder.svg"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-orange-500 text-white border border-orange-400">
                  {event.category}
                </Badge>
              </div>
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-80 text-white px-2 py-1 rounded flex items-center gap-1 border border-white/20">
                <Star className="h-3 w-3 fill-current" />
                <span className="text-sm">{event.rating}</span>
              </div>
            </div>
            
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{event.title}</CardTitle>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Users className="h-4 w-4" />
                  <span>{event.attendees.toLocaleString()}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>{event.temple}, {event.location}</span>
              </div>
            </CardHeader>
            
            <CardContent>
              <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <CalendarDays className="h-4 w-4 text-orange-500" />
                  <span>{new Date(event.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-orange-500" />
                  <span>{event.time}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2">Event Highlights:</h4>
                <div className="flex flex-wrap gap-1">
                  {event.highlights.map((highlight, index) => (
                    <Badge key={index} variant="outline" className="text-xs border shadow-sm">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button className="flex-1 bg-orange-500 hover:bg-orange-600 border border-orange-400 shadow-md">
                  Register Now
                </Button>
                <Button variant="outline" size="icon" className="border-2 shadow-sm">
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-8 text-center border border-orange-100">
        <h2 className="text-2xl font-bold mb-4">Don't Miss Out on Sacred Celebrations</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Join millions of devotees in experiencing the divine energy of temple festivals. 
          Get notified about upcoming events and special celebrations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-orange-500 hover:bg-orange-600 px-8 border border-orange-400 shadow-md">
            Subscribe to Notifications
          </Button>
          <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 border-2 shadow-md">
            View Calendar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Events;
