
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Calendar as CalendarIcon, 
  MapPin, 
  Users, 
  BedDouble, 
  Wifi, 
  UtensilsCrossed, 
  Shower,
  Search,
  CheckCircle2,
  Star
} from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { temples } from "@/data/temples";
import { useToast } from "@/hooks/use-toast";

const StayBookings = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(
    new Date(new Date().setDate(new Date().getDate() + 2))
  );
  const [guests, setGuests] = useState(2);
  const [searchQuery, setSearchQuery] = useState("");
  
  const accommodations = [
    {
      id: "1",
      name: "Kashi Guest House",
      location: "Varanasi, Uttar Pradesh",
      nearTemple: "Kashi Vishwanath",
      price: 1200,
      rating: 4.8,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28f17?q=80&w=2121&auto=format&fit=crop",
      amenities: ["Free Wifi", "Temple View", "Vegetarian Meals", "Airport Pickup"],
      distance: "0.2 km from temple",
      premium: true
    },
    {
      id: "2",
      name: "Tirupati Pilgrim Cottages",
      location: "Tirupati, Andhra Pradesh",
      nearTemple: "Tirupati Balaji",
      price: 1500,
      rating: 4.6,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
      amenities: ["Free Wifi", "Breakfast Included", "Shuttle Service", "AC Rooms"],
      distance: "0.5 km from temple",
      premium: false
    },
    {
      id: "3",
      name: "Amritsar Heritage Stay",
      location: "Amritsar, Punjab",
      nearTemple: "Golden Temple",
      price: 2000,
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop",
      amenities: ["Free Wifi", "Traditional Decor", "Langar Service", "Guided Tours"],
      distance: "0.3 km from temple",
      premium: true
    },
    {
      id: "4",
      name: "Madurai Temple View Hotel",
      location: "Madurai, Tamil Nadu",
      nearTemple: "Meenakshi Amman Temple",
      price: 1800,
      rating: 4.7,
      reviews: 102,
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop",
      amenities: ["Temple View Rooms", "South Indian Breakfast", "Cultural Activities", "AC Rooms"],
      distance: "0.4 km from temple",
      premium: false
    },
    {
      id: "5",
      name: "Puri Beach Retreat",
      location: "Puri, Odisha",
      nearTemple: "Jagannath Temple",
      price: 2200,
      rating: 4.5,
      reviews: 78,
      image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=2070&auto=format&fit=crop",
      amenities: ["Beach View", "Free Wifi", "Temple Drop Service", "Traditional Food"],
      distance: "0.6 km from temple",
      premium: false
    },
    {
      id: "6",
      name: "Somnath Pilgrim Center",
      location: "Veraval, Gujarat",
      nearTemple: "Somnath Temple",
      price: 1300,
      rating: 4.3,
      reviews: 62,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      amenities: ["Free Wifi", "Sea View", "Veg Food", "Temple History Tours"],
      distance: "0.3 km from temple",
      premium: false
    },
    {
      id: "7",
      name: "Kedarnath Pilgrim Cottages",
      location: "Kedarnath, Uttarakhand",
      nearTemple: "Kedarnath Temple",
      price: 3000,
      rating: 4.6,
      reviews: 48,
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop",
      amenities: ["Heating", "Mountain View", "Guided Treks", "Oxygen Support"],
      distance: "0.8 km from temple",
      premium: true
    },
    {
      id: "8",
      name: "Thanjavur Heritage Home",
      location: "Thanjavur, Tamil Nadu",
      nearTemple: "Brihadeeswara Temple",
      price: 1600,
      rating: 4.7,
      reviews: 86,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      amenities: ["Free Wifi", "Cultural Activities", "Traditional Decor", "AC Rooms"],
      distance: "0.5 km from temple",
      premium: false
    },
  ];

  // Filter accommodations based on search
  const filteredAccommodations = searchQuery 
    ? accommodations.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.nearTemple.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : accommodations;
  
  const handleBooking = (accommodationName: string) => {
    toast({
      title: "Booking Request Sent",
      description: `Your stay at ${accommodationName} is being processed. You'll receive confirmation shortly.`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Temple Stay Accommodations</h1>
        <p className="text-gray-600 mb-6">
          Book comfortable stays near sacred temples for your pilgrimage journey
        </p>
        
        {/* Search and filter section */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search stays, locations, temples..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Check in"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "PPP") : "Check out"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    initialFocus
                    disabled={(date) => {
                      return date < new Date();
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setGuests(Math.max(1, guests - 1))}
              >
                -
              </Button>
              <div className="flex items-center gap-2 flex-grow px-3 py-2 border rounded-md">
                <Users className="h-4 w-4 text-gray-400" />
                <span>{guests} Guest{guests !== 1 ? "s" : ""}</span>
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setGuests(guests + 1)}
              >
                +
              </Button>
            </div>
          </div>
          
          <div className="flex justify-end mt-4">
            <Button className="bg-orange-500 hover:bg-orange-600">
              Search Stays
            </Button>
          </div>
        </div>
      </div>
      
      {/* Featured stay with image */}
      <div className="relative rounded-lg overflow-hidden mb-10">
        <img 
          src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop" 
          alt="Featured Stay"
          className="w-full h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <span className="inline-block bg-orange-500 text-white text-sm font-medium px-3 py-1 rounded-full mb-3">
            Featured Property
          </span>
          <h2 className="text-3xl font-bold text-white mb-2">Premium Temple View Suites</h2>
          <p className="text-white/90 mb-4 max-w-2xl">
            Luxury accommodations with direct views of sacred temples and special pilgrim benefits
          </p>
          
          <div className="flex flex-wrap gap-4 mb-4 text-white/80">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>Multiple Locations</span>
            </div>
            <div className="flex items-center gap-1">
              <BedDouble className="h-4 w-4" />
              <span>Premium Rooms</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              <span>4.8+ Rated</span>
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Browse Premium Stays
            </Button>
            <Button variant="outline" className="border-white/70 text-white hover:bg-white/10">
              View Benefits
            </Button>
          </div>
        </div>
      </div>
      
      {/* Accommodations Tabs */}
      <Tabs defaultValue="all" className="mb-6">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Stays</TabsTrigger>
          <TabsTrigger value="premium">Premium</TabsTrigger>
          <TabsTrigger value="budget">Budget Friendly</TabsTrigger>
          <TabsTrigger value="bookings">My Bookings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAccommodations.map((accommodation) => (
              <AccommodationCard 
                key={accommodation.id} 
                accommodation={accommodation} 
                onBooking={handleBooking} 
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="premium">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAccommodations
              .filter(item => item.premium)
              .map((accommodation) => (
                <AccommodationCard 
                  key={accommodation.id} 
                  accommodation={accommodation} 
                  onBooking={handleBooking} 
                />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="budget">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAccommodations
              .filter(item => item.price < 1800)
              .map((accommodation) => (
                <AccommodationCard 
                  key={accommodation.id} 
                  accommodation={accommodation} 
                  onBooking={handleBooking} 
                />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="bookings">
          <div className="text-center py-16">
            <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <BedDouble className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-medium mb-2">No bookings yet</h3>
            <p className="text-gray-500 mb-4">
              You haven't booked any accommodations yet. Browse our stays to find the perfect place for your temple visit.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600">
              Find Stays
            </Button>
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Special benefits */}
      <div className="bg-orange-50 rounded-lg p-6 mt-12">
        <h3 className="text-xl font-bold mb-4">Special Benefits for Temple Visitors</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <div className="bg-orange-100 p-2 rounded-full">
              <CheckCircle2 className="h-5 w-5 text-orange-500" />
            </div>
            <div>
              <h4 className="font-medium mb-1">Early Darshan Access</h4>
              <p className="text-gray-600 text-sm">
                Get priority entry for morning temple rituals with our accommodation booking
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="bg-orange-100 p-2 rounded-full">
              <UtensilsCrossed className="h-5 w-5 text-orange-500" />
            </div>
            <div>
              <h4 className="font-medium mb-1">Complimentary Prasad</h4>
              <p className="text-gray-600 text-sm">
                Enjoy free prasad delivery to your room after temple ceremonies
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="bg-orange-100 p-2 rounded-full">
              <Shower className="h-5 w-5 text-orange-500" />
            </div>
            <div>
              <h4 className="font-medium mb-1">Traditional Experience</h4>
              <p className="text-gray-600 text-sm">
                Authentic accommodations with special pre-temple ritual facilities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Accommodation Card Component
const AccommodationCard = ({ 
  accommodation, 
  onBooking 
}: { 
  accommodation: any, 
  onBooking: (accommodationName: string) => void 
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={accommodation.image} 
          alt={accommodation.name} 
          className="w-full h-52 object-cover"
        />
        {accommodation.premium && (
          <div className="absolute top-2 right-2 bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1 rounded">
            Premium
          </div>
        )}
      </div>
      
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg">{accommodation.name}</h3>
          <div className="flex items-center text-amber-500">
            <Star className="fill-amber-400 stroke-amber-400 h-4 w-4 mr-1" />
            <span className="text-sm font-medium">{accommodation.rating}</span>
            <span className="text-xs text-gray-500 ml-1">({accommodation.reviews})</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
          <MapPin className="h-4 w-4 text-orange-500 flex-shrink-0" />
          <span>{accommodation.location}</span>
        </div>
        
        <div className="text-sm text-blue-600 mb-3">
          {accommodation.distance} • Near {accommodation.nearTemple}
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-4">
          {accommodation.amenities.slice(0, 4).map((amenity: string, index: number) => (
            <div key={index} className="flex items-center gap-1 text-xs text-gray-600">
              {amenity === "Free Wifi" && <Wifi className="h-3 w-3 text-orange-500" />}
              {amenity === "Temple View" && <MapPin className="h-3 w-3 text-orange-500" />}
              {amenity === "Vegetarian Meals" && <UtensilsCrossed className="h-3 w-3 text-orange-500" />}
              {amenity === "AC Rooms" && <Shower className="h-3 w-3 text-orange-500" />}
              {amenity === "Breakfast Included" && <UtensilsCrossed className="h-3 w-3 text-orange-500" />}
              <span>{amenity}</span>
            </div>
          ))}
        </div>
        
        <div className="flex justify-between items-end">
          <div>
            <span className="text-lg font-semibold">₹{accommodation.price}</span>
            <span className="text-gray-500 text-sm"> / night</span>
          </div>
          
          <Button 
            onClick={() => onBooking(accommodation.name)}
            className="bg-orange-500 hover:bg-orange-600"
          >
            Book Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default StayBookings;
