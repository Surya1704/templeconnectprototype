
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Clock } from "lucide-react";
import ImageWithFallback from "@/components/ImageWithFallback";

const Events = () => {
  const [selectedMonth, setSelectedMonth] = useState("all");

  const events = [
    {
      id: 1,
      title: "Maha Shivaratri",
      temple: "Somnath Temple",
      date: "2024-03-08",
      month: "March",
      location: "Gujarat",
      description: "Grand celebration of Lord Shiva with special pujas and night-long celebrations.",
      image: "https://i.pinimg.com/736x/3c/e2/c3/3ce2c373003a51dc5589496554b7ce76.jpg"
    },
    {
      id: 2,
      title: "Diwali Celebration",
      temple: "Golden Temple",
      date: "2024-11-01",
      month: "November",
      location: "Punjab",
      description: "Temple illuminated with thousands of lights during the festival of lights.",
      image: "https://i.pinimg.com/736x/55/c8/30/55c8306e3a08e6df393a71a0acb11914.jpg"
    },
    {
      id: 3,
      title: "Brahmotsavam",
      temple: "Tirupati Balaji",
      date: "2024-09-15",
      month: "September",
      location: "Andhra Pradesh",
      description: "Nine-day annual festival with processions and special ceremonies.",
      image: "https://i.pinimg.com/736x/ec/43/cd/ec43cddd1f72b04b8743229b8ba815f8.jpg"
    },
    {
      id: 4,
      title: "Rath Yatra",
      temple: "Jagannath Temple",
      date: "2024-07-07",
      month: "July",
      location: "Odisha",
      description: "Grand chariot procession of Lord Jagannath through the streets.",
      image: "https://i.pinimg.com/736x/42/60/fb/4260fb49a4b1496eb18cc90f79b87185.jpg"
    },
    {
      id: 5,
      title: "Kedarnath Opening",
      temple: "Kedarnath Temple",
      date: "2024-05-10",
      month: "May",
      location: "Uttarakhand",
      description: "Annual opening of the sacred temple after winter closure.",
      image: "https://i.pinimg.com/736x/36/da/9d/36da9dea692a7f4b93d7705a824da3f1.jpg"
    },
    {
      id: 6,
      title: "Kartik Purnima",
      temple: "Kashi Vishwanath",
      date: "2024-11-15",
      month: "November",
      location: "Uttar Pradesh",
      description: "Sacred bathing festival with special Ganga Aarti ceremonies.",
      image: "https://i.pinimg.com/736x/bf/60/88/bf60886c58e4ffd17540c7f8e4f5d583.jpg"
    }
  ];

  const months = ["March", "May", "July", "September", "November"];
  
  const filteredEvents = selectedMonth === "all" 
    ? events 
    : events.filter(event => event.month === selectedMonth);

  const groupedEvents = filteredEvents.reduce((acc, event) => {
    if (!acc[event.month]) {
      acc[event.month] = [];
    }
    acc[event.month].push(event);
    return acc;
  }, {} as Record<string, typeof events>);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-cinzel font-bold text-spiritual-maroon mb-4">
          Temple Events & Festivals
        </h1>
        <p className="text-lg text-spiritual-maroon/70 max-w-2xl mx-auto">
          Discover upcoming festivals and celebrations across India's sacred temples
        </p>
      </div>

      {/* Month Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <Badge 
          variant={selectedMonth === "all" ? "default" : "outline"}
          className="cursor-pointer px-4 py-2"
          onClick={() => setSelectedMonth("all")}
        >
          All Events
        </Badge>
        {months.map(month => (
          <Badge 
            key={month}
            variant={selectedMonth === month ? "default" : "outline"}
            className="cursor-pointer px-4 py-2"
            onClick={() => setSelectedMonth(month)}
          >
            {month} 2024
          </Badge>
        ))}
      </div>

      {/* Events by Month */}
      {Object.entries(groupedEvents).map(([month, monthEvents]) => (
        <div key={month} className="mb-12">
          <h2 className="text-2xl font-cinzel font-bold text-spiritual-maroon mb-6 text-center">
            {month} 2024
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {monthEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                  <div className="h-48 relative">
                    <ImageWithFallback
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                      fallbackSrc="/placeholder.svg"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-spiritual-saffron text-white">
                        Festival
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lg text-spiritual-maroon">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{event.temple}, {event.location}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <CalendarDays className="h-4 w-4" />
                        <span>{new Date(event.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No events found for the selected month.</p>
        </div>
      )}
    </div>
  );
};

export default Events;
