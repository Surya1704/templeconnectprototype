
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin } from "lucide-react";
import ImageWithFallback from "@/components/ImageWithFallback";

const PujaTiming = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const temples = [
    {
      id: 1,
      name: "Tirupati Balaji Temple",
      location: "Tirupati, Andhra Pradesh",
      image: "https://i.pinimg.com/736x/3c/e2/c3/3ce2c373003a51dc5589496554b7ce76.jpg",
      pujas: [
        { name: "Suprabhatam", time: "04:30", duration: "30 min", status: "completed" },
        { name: "Thomala Seva", time: "06:30", duration: "45 min", status: "live" },
        { name: "Archana", time: "08:00", duration: "60 min", status: "upcoming" },
        { name: "Sahasra Deepalankara", time: "18:00", duration: "90 min", status: "upcoming" }
      ]
    },
    {
      id: 2,
      name: "Golden Temple",
      location: "Amritsar, Punjab",
      image: "https://i.pinimg.com/736x/55/c8/30/55c8306e3a08e6df393a71a0acb11914.jpg",
      pujas: [
        { name: "Morning Prayer", time: "03:00", duration: "60 min", status: "completed" },
        { name: "Rehras Sahib", time: "06:00", duration: "45 min", status: "live" },
        { name: "Evening Kirtan", time: "18:30", duration: "120 min", status: "upcoming" },
        { name: "Sohila Sahib", time: "22:00", duration: "30 min", status: "upcoming" }
      ]
    },
    {
      id: 3,
      name: "Somnath Temple",
      location: "Somnath, Gujarat",
      image: "https://i.pinimg.com/736x/cd/84/8d/cd848d413a478fa85d11e1068fb669f3.jpg",
      pujas: [
        { name: "Mangala Aarti", time: "06:00", duration: "30 min", status: "completed" },
        { name: "Rudrabhishek", time: "07:00", duration: "60 min", status: "live" },
        { name: "Sandhya Aarti", time: "19:00", duration: "45 min", status: "upcoming" },
        { name: "Shayan Aarti", time: "21:30", duration: "30 min", status: "upcoming" }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "live": return "bg-green-500";
      case "upcoming": return "bg-orange-500";
      case "completed": return "bg-gray-400";
      default: return "bg-gray-400";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "live": return "Live Now";
      case "upcoming": return "Upcoming";
      case "completed": return "Completed";
      default: return "Scheduled";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-cinzel font-bold text-spiritual-maroon mb-4">
          Daily Puja Timings
        </h1>
        <p className="text-lg text-spiritual-maroon/70 max-w-2xl mx-auto mb-4">
          Stay connected with daily temple rituals and ceremonies
        </p>
        
        {/* Current Time Display */}
        <div className="inline-flex items-center gap-2 bg-spiritual-saffron/10 px-4 py-2 rounded-full">
          <Clock className="h-5 w-5 text-spiritual-saffron" />
          <span className="font-medium text-spiritual-maroon">
            Current Time: {currentTime.toLocaleTimeString('en-IN', { hour12: true })}
          </span>
        </div>
      </div>

      <div className="space-y-8">
        {temples.map((temple) => (
          <Card key={temple.id} className="overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-24 h-24 rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src={temple.image}
                    alt={temple.name}
                    className="w-full h-full object-cover"
                    fallbackSrc="/placeholder.svg"
                  />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl font-cinzel text-spiritual-maroon mb-2">
                    {temple.name}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{temple.location}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {temple.pujas.map((puja, index) => (
                  <div key={index} className="bg-spiritual-ivory/30 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-spiritual-maroon">{puja.name}</h4>
                      <Badge className={`${getStatusColor(puja.status)} text-white text-xs`}>
                        {getStatusText(puja.status)}
                      </Badge>
                    </div>
                    
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3" />
                        <span>{puja.time} ({puja.duration})</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-8 bg-white rounded-lg p-6 shadow-sm">
        <h3 className="font-medium text-spiritual-maroon mb-4">Status Legend:</h3>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm">Live Now</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="text-sm">Starting Soon</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <span className="text-sm">Completed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PujaTiming;
