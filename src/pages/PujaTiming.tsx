
import React, { useState } from "react";
import { Calendar, Clock, MapPin, Bell, Calendar as CalendarIcon, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { temples } from "@/data/temples";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const PujaTiming = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  
  // Generate puja timings for temples
  const generateTimings = () => {
    const pujaTypes = [
      { name: "Mangala Aarti" },
      { name: "Abhishekam" },
      { name: "Shayan Aarti" },
      { name: "Bhog Offering" },
      { name: "Sandhya Aarti" },
    ];
    
    return temples.map(temple => {
      const morningPujas = [
        {
          id: `${temple.id}-m1`,
          name: "Mangala Aarti",
          time: "5:00 AM - 6:00 AM",
          temple: temple.name,
          location: temple.location,
          description: "Early morning ritual offering to the deity with lamps.",
          isPremium: false
        },
        {
          id: `${temple.id}-m2`,
          name: "Abhishekam",
          time: "8:00 AM - 9:30 AM",
          temple: temple.name,
          location: temple.location,
          description: "Ritual bathing of the deity with sacred substances.",
          isPremium: temple.id === "1" || temple.id === "3"
        }
      ];
      
      const eveningPujas = [
        {
          id: `${temple.id}-e1`,
          name: "Sandhya Aarti",
          time: "6:00 PM - 7:00 PM",
          temple: temple.name,
          location: temple.location,
          description: "Evening ritual offering to the deity with lamps and chanting.",
          isPremium: false
        },
        {
          id: `${temple.id}-e2`,
          name: "Shayan Aarti",
          time: "8:00 PM - 9:00 PM",
          temple: temple.name,
          location: temple.location,
          description: "Night ritual before the deity retires to sleep.",
          isPremium: temple.id === "2" || temple.id === "4"
        }
      ];
      
      return {
        temple,
        morningPujas,
        eveningPujas
      };
    });
  };

  const templeTimings = generateTimings();
  
  // Filter based on search
  const filteredTimings = searchQuery 
    ? templeTimings.filter(item => 
        item.temple.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.temple.location.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : templeTimings;
  
  const handleReminder = (pujaName: string, templeName: string) => {
    toast({
      title: "Reminder Set",
      description: `You'll be notified before the ${pujaName} at ${templeName}`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Temple Puja Timings</h1>
        <p className="text-gray-600 mb-8">
          Find daily puja schedules, special ceremonies, and festival timings across all temples
        </p>
        
        {/* Search and filter */}
        <div className="relative max-w-xl mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Search temples by name or location"
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {/* Featured puja schedule section without image */}
        <div className="relative rounded-lg overflow-hidden mb-10 bg-gradient-to-t from-black/80 via-black/40 to-orange-500/30 p-4">
          <div className="p-6">
            <span className="inline-block bg-orange-500 text-white text-sm font-medium px-3 py-1 rounded-full mb-3">
              Special Ceremony
            </span>
            <h2 className="text-3xl font-bold text-white mb-2">Kashi Vishwanath Shringar</h2>
            <div className="flex flex-wrap gap-4 mb-4 text-white/80">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Today</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>8:00 PM - 9:30 PM</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Varanasi, Uttar Pradesh</span>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                <Link to="/puja-booking">Book VIP Access</Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-white/70 text-white hover:bg-white/10"
                onClick={() => handleReminder("Shringar Ceremony", "Kashi Vishwanath")}
              >
                <Bell className="h-4 w-4 mr-2" />
                Set Reminder
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs for different temples */}
      <Tabs defaultValue="all" className="mb-6">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Temples</TabsTrigger>
          <TabsTrigger value="north">North India</TabsTrigger>
          <TabsTrigger value="south">South India</TabsTrigger>
          <TabsTrigger value="favorite">My Favorites</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <div className="space-y-8">
            {filteredTimings.map((item) => (
              <TempleTimingCard key={item.temple.id} data={item} onReminder={handleReminder} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="north">
          <div className="space-y-8">
            {filteredTimings
              .filter(item => ["Uttar Pradesh", "Punjab", "Uttarakhand", "Delhi"].includes(item.temple.state))
              .map((item) => (
                <TempleTimingCard key={item.temple.id} data={item} onReminder={handleReminder} />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="south">
          <div className="space-y-8">
            {filteredTimings
              .filter(item => ["Tamil Nadu", "Karnataka", "Andhra Pradesh", "Kerala"].includes(item.temple.state))
              .map((item) => (
                <TempleTimingCard key={item.temple.id} data={item} onReminder={handleReminder} />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="favorite">
          <div className="text-center py-16">
            <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Bell className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-medium mb-2">No favorites yet</h3>
            <p className="text-gray-500 mb-4">
              Add temples to your favorites to get quick access to their puja schedules
            </p>
            <Button asChild className="bg-orange-500 hover:bg-orange-600">
              <Link to="/temples">Browse Temples</Link>
            </Button>
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Calendar Integration */}
      <div className="bg-orange-50 border border-orange-100 rounded-lg p-6 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Sync Puja Timings to Your Calendar</h3>
            <p className="text-gray-600 mb-4">
              Never miss a temple ceremony or special puja with calendar notifications
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-orange-500 hover:bg-orange-600">
                <CalendarIcon className="h-4 w-4 mr-2" />
                Google Calendar
              </Button>
              <Button variant="outline">
                <CalendarIcon className="h-4 w-4 mr-2" />
                Apple Calendar
              </Button>
              <Button variant="outline">
                <Bell className="h-4 w-4 mr-2" />
                SMS Alerts
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Temple Timing Card Component
const TempleTimingCard = ({ 
  data, 
  onReminder
}: { 
  data: { 
    temple: any, 
    morningPujas: any[], 
    eveningPujas: any[] 
  },
  onReminder: (pujaName: string, templeName: string) => void
}) => {
  const { temple, morningPujas, eveningPujas } = data;
  
  return (
    <Card className="overflow-hidden border-none shadow-sm">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 bg-orange-100 flex items-center justify-center">
          <div className="p-8 text-orange-500 font-bold text-2xl">{temple.name.charAt(0)}</div>
        </div>
        <CardContent className="p-6 md:w-2/3">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold mb-1">
                <Link to={`/temple/${temple.id}`} className="hover:text-orange-500">
                  {temple.name}
                </Link>
              </h3>
              <p className="text-gray-600">{temple.location}</p>
            </div>
            <Button variant="outline" size="sm">
              Open Hours: {temple.hours.replace('Open ', '')}
            </Button>
          </div>
          
          <div className="mb-6">
            <h4 className="font-medium text-gray-800 mb-2">Morning Pujas</h4>
            <div className="space-y-3">
              {morningPujas.map((puja) => (
                <PujaRow key={puja.id} puja={puja} onReminder={onReminder} />
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Evening Pujas</h4>
            <div className="space-y-3">
              {eveningPujas.map((puja) => (
                <PujaRow key={puja.id} puja={puja} onReminder={onReminder} />
              ))}
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

// Individual Puja Row Component
const PujaRow = ({ 
  puja, 
  onReminder 
}: { 
  puja: any, 
  onReminder: (pujaName: string, templeName: string) => void 
}) => (
  <div className="flex justify-between items-center">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
        <Clock className="w-5 h-5 text-orange-500" />
      </div>
      <div>
        <div className="font-medium">
          {puja.name}
          {puja.isPremium && (
            <span className="ml-2 text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
              Premium
            </span>
          )}
        </div>
        <div className="text-sm text-gray-600">{puja.time}</div>
      </div>
    </div>
    <div className="flex gap-2">
      <Button 
        size="sm" 
        variant="ghost" 
        className="text-orange-500"
        onClick={() => onReminder(puja.name, puja.temple)}
      >
        <Bell className="h-4 w-4" />
      </Button>
      <Button 
        size="sm" 
        asChild 
        className={puja.isPremium ? "bg-amber-500 hover:bg-amber-600" : "bg-orange-500 hover:bg-orange-600"}
      >
        <Link to="/pooja-booking">
          {puja.isPremium ? "Book VIP" : "Book"}
        </Link>
      </Button>
    </div>
  </div>
);

export default PujaTiming;
