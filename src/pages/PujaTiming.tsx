
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Bell, Calendar, Star, Camera } from "lucide-react";
import { temples } from "@/data/temples";
import { useToast } from "@/hooks/use-toast";
import ImageWithFallback from "@/components/ImageWithFallback";

const PujaTiming = () => {
  const { toast } = useToast();
  const [selectedTemple, setSelectedTemple] = useState("all");
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pujaSchedules = [
    {
      id: 1,
      temple: "Tirupati Balaji",
      location: "Tirumala, Andhra Pradesh",
      image: "https://www.citybit.in/wp-content/uploads/2023/08/Tirupati-Balaji-Temple.jpg",
      pujas: [
        {
          name: "Suprabhatam",
          time: "03:00 AM",
          duration: "45 min",
          description: "Morning awakening prayers to Lord Venkateswara",
          type: "daily",
          importance: "high"
        },
        {
          name: "Thomala Seva",
          time: "04:00 AM",
          duration: "30 min",
          description: "Decoration with flowers and ornaments",
          type: "daily",
          importance: "medium"
        },
        {
          name: "Archana",
          time: "06:30 AM",
          duration: "2 hours",
          description: "General darshan and prayers",
          type: "daily",
          importance: "high"
        },
        {
          name: "Sahasra Namarchana",
          time: "11:00 AM",
          duration: "1 hour",
          description: "Chanting of 1000 names of Lord Vishnu",
          type: "special",
          importance: "high"
        }
      ]
    },
    {
      id: 2,
      temple: "Somnath Temple",
      location: "Gujarat",
      image: "https://i.pinimg.com/736x/cd/84/8d/cd848d413a478fa85d11e1068fb669f3.jpg",
      pujas: [
        {
          name: "Mangla Aarti",
          time: "06:00 AM",
          duration: "30 min",
          description: "Morning prayers to Lord Shiva",
          type: "daily",
          importance: "high"
        },
        {
          name: "Madhyan Aarti",
          time: "12:00 PM",
          duration: "20 min",
          description: "Midday worship ceremony",
          type: "daily",
          importance: "medium"
        },
        {
          name: "Sandhya Aarti",
          time: "07:00 PM",
          duration: "45 min",
          description: "Evening prayer ceremony with lamps",
          type: "daily",
          importance: "high"
        },
        {
          name: "Shayan Aarti",
          time: "10:30 PM",
          duration: "15 min",
          description: "Night prayer before temple closure",
          type: "daily",
          importance: "medium"
        }
      ]
    },
    {
      id: 3,
      temple: "Golden Temple",
      location: "Amritsar, Punjab",
      image: "https://i.pinimg.com/736x/b5/8f/90/b58f9075a821f2a6d87c816da131d806.jpg",
      pujas: [
        {
          name: "Asa di Var",
          time: "04:00 AM",
          duration: "2 hours",
          description: "Morning hymns and prayers",
          type: "daily",
          importance: "high"
        },
        {
          name: "Rehras Sahib",
          time: "06:00 PM",
          duration: "1 hour",
          description: "Evening prayers and kirtan",
          type: "daily",
          importance: "high"
        },
        {
          name: "Kirtan Darbar",
          time: "08:00 PM",
          duration: "2 hours",
          description: "Devotional singing and prayers",
          type: "daily",
          importance: "medium"
        }
      ]
    },
    {
      id: 4,
      temple: "Kashi Vishwanath",
      location: "Varanasi, Uttar Pradesh",
      image: "https://i.pinimg.com/736x/bf/60/88/bf60886c58e4ffd17540c7f8e4f5d583.jpg",
      pujas: [
        {
          name: "Mangla Aarti",
          time: "03:30 AM",
          duration: "45 min",
          description: "Pre-dawn prayers to Lord Shiva",
          type: "daily",
          importance: "high"
        },
        {
          name: "Bhog Aarti",
          time: "11:15 AM",
          duration: "30 min",
          description: "Offering of food to the deity",
          type: "daily",
          importance: "medium"
        },
        {
          name: "Sandhya Aarti",
          time: "07:00 PM",
          duration: "1 hour",
          description: "Grand evening ceremony with Ganga Aarti",
          type: "daily",
          importance: "high"
        },
        {
          name: "Shringaar Aarti",
          time: "09:00 PM",
          duration: "20 min",
          description: "Decoration ceremony before rest",
          type: "daily",
          importance: "medium"
        }
      ]
    },
    {
      id: 5,
      temple: "Jagannath Temple",
      location: "Puri, Odisha",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/sri-jagannath-temple-puri-odisha-1-attr-hero?qlt=82&ts=1726663747217",
      pujas: [
        {
          name: "Mangala Alati",
          time: "05:00 AM",
          duration: "30 min",
          description: "Morning awakening of Lord Jagannath",
          type: "daily",
          importance: "high"
        },
        {
          name: "Gopala Ballava Bhog",
          time: "08:00 AM",
          duration: "45 min",
          description: "Morning food offering",
          type: "daily",
          importance: "medium"
        },
        {
          name: "Sandhya Alati",
          time: "06:30 PM",
          duration: "40 min",
          description: "Evening prayer ceremony",
          type: "daily",
          importance: "high"
        },
        {
          name: "Bada Singhar Alati",
          time: "08:00 PM",
          duration: "30 min",
          description: "Grand decoration ceremony",
          type: "special",
          importance: "high"
        }
      ]
    },
    {
      id: 6,
      temple: "Kedarnath Temple",
      location: "Uttarakhand",
      image: "https://i.pinimg.com/736x/36/da/9d/36da9dea692a7f4b93d7705a824da3f1.jpg",
      pujas: [
        {
          name: "Abhishek",
          time: "04:00 AM",
          duration: "1 hour",
          description: "Sacred bathing of Shiva Lingam",
          type: "daily",
          importance: "high"
        },
        {
          name: "Madhyan Aarti",
          time: "12:00 PM",
          duration: "30 min",
          description: "Midday prayers in Himalayan serenity",
          type: "daily",
          importance: "medium"
        },
        {
          name: "Sandhya Aarti",
          time: "06:30 PM",
          duration: "45 min",
          description: "Evening prayers with mountain backdrop",
          type: "daily",
          importance: "high"
        }
      ]
    }
  ];

  const filteredSchedules = selectedTemple === "all" 
    ? pujaSchedules 
    : pujaSchedules.filter(schedule => schedule.temple.toLowerCase().includes(selectedTemple.toLowerCase()));

  const getCurrentPujaStatus = (time: string) => {
    const pujaTime = new Date();
    const [hours, minutes] = time.split(':');
    const period = time.includes('AM') || time.includes('PM') ? time.slice(-2) : '';
    
    let hour24 = parseInt(hours);
    if (period === 'PM' && hour24 !== 12) hour24 += 12;
    if (period === 'AM' && hour24 === 12) hour24 = 0;
    
    pujaTime.setHours(hour24, parseInt(minutes.replace(/[AP]M/, '')), 0, 0);
    
    const now = currentTime;
    const diffMs = pujaTime.getTime() - now.getTime();
    const diffHours = diffMs / (1000 * 60 * 60);
    
    if (Math.abs(diffHours) < 1) return "ongoing";
    if (diffHours > 0 && diffHours < 2) return "upcoming";
    return "scheduled";
  };

  const setReminder = (temple: string, puja: string) => {
    toast({
      title: "Reminder Set",
      description: `You'll be notified before ${puja} at ${temple}`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Temple Puja Timings</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay connected with divine schedules. Never miss the sacred moments of worship at India's most revered temples.
        </p>
        <div className="mt-4 flex justify-center">
          <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full flex items-center gap-2 border border-orange-200">
            <Clock className="h-4 w-4" />
            <span className="font-medium">
              Current Time: {currentTime.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit',
                hour12: true 
              })}
            </span>
          </div>
        </div>
      </div>

      {/* Temple Filter */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <label className="font-medium">Select Temple:</label>
          <select 
            value={selectedTemple}
            onChange={(e) => setSelectedTemple(e.target.value)}
            className="flex-grow border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="all">All Temples</option>
            <option value="tirupati">Tirupati Balaji</option>
            <option value="somnath">Somnath Temple</option>
            <option value="golden">Golden Temple</option>
            <option value="kashi">Kashi Vishwanath</option>
            <option value="jagannath">Jagannath Temple</option>
            <option value="kedarnath">Kedarnath Temple</option>
          </select>
          <Button className="bg-orange-500 hover:bg-orange-600 border border-orange-400 shadow-md">
            View Schedule
          </Button>
        </div>
      </div>

      {/* Puja Schedules */}
      <div className="space-y-8">
        {filteredSchedules.map((schedule) => (
          <Card key={schedule.id} className="overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-48 h-32 rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src={schedule.image}
                    alt={schedule.temple}
                    className="w-full h-full object-cover"
                    fallbackSrc="/placeholder.svg"
                  />
                </div>
                <div className="flex-grow">
                  <CardTitle className="text-2xl mb-2">{schedule.temple}</CardTitle>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <MapPin className="h-4 w-4" />
                    <span>{schedule.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border shadow-sm">Live Schedule</Badge>
                    <Badge variant="outline" className="border shadow-sm">{schedule.pujas.length} Daily Pujas</Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {schedule.pujas.map((puja, index) => {
                  const status = getCurrentPujaStatus(puja.time);
                  return (
                    <div 
                      key={index}
                      className={`border-2 rounded-lg p-4 transition-all duration-300 ${
                        status === "ongoing" 
                          ? "border-green-500 bg-green-50" 
                          : status === "upcoming"
                          ? "border-orange-500 bg-orange-50"
                          : "border-gray-200 hover:border-orange-300"
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg">{puja.name}</h3>
                        <div className="flex items-center gap-2">
                          {status === "ongoing" && (
                            <Badge className="bg-green-500 border border-green-400">Live Now</Badge>
                          )}
                          {status === "upcoming" && (
                            <Badge className="bg-orange-500 border border-orange-400">Starting Soon</Badge>
                          )}
                          {puja.importance === "high" && (
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          )}
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-3">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-orange-500" />
                          <span className="font-medium">{puja.time}</span>
                          <span className="text-gray-500">({puja.duration})</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-blue-500" />
                          <span className="capitalize">{puja.type}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4">{puja.description}</p>
                      
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => setReminder(schedule.temple, puja.name)}
                          className="flex items-center gap-1 border-2 shadow-sm"
                        >
                          <Bell className="h-3 w-3" />
                          Set Reminder
                        </Button>
                        <Button size="sm" variant="outline" className="border-2 shadow-sm">
                          <Camera className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Information Section */}
      <div className="mt-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-8 border border-orange-100">
        <h2 className="text-2xl font-bold text-center mb-6">Important Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <Clock className="h-8 w-8 text-orange-500 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Timing Accuracy</h3>
            <p className="text-sm text-gray-600">
              Timings may vary during festivals and special occasions. Please verify before visiting.
            </p>
          </div>
          <div className="text-center">
            <Bell className="h-8 w-8 text-orange-500 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Reminder Service</h3>
            <p className="text-sm text-gray-600">
              Set reminders to never miss your favorite puja ceremonies and spiritual moments.
            </p>
          </div>
          <div className="text-center">
            <Camera className="h-8 w-8 text-orange-500 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Live Darshan</h3>
            <p className="text-sm text-gray-600">
              Experience live darshan from the comfort of your home during scheduled puja times.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PujaTiming;
