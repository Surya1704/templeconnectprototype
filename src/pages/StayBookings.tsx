
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
  Bath,
  Search,
  CheckCircle2,
  Star,
  ExternalLink,
  Clock
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const StayBookings = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(
    new Date(new Date().setDate(new Date().getDate() + 2))
  );
  const [guests, setGuests] = useState(2);
  const [searchQuery, setSearchQuery] = useState("");
  const [duration, setDuration] = useState("3");
  
  const accommodations = [
    {
      id: "1",
      name: "Kashi Guest House",
      location: "Varanasi, Uttar Pradesh",
      nearTemple: "Kashi Vishwanath",
      price: 1200,
      rating: 4.8,
      reviews: 124,
      amenities: ["Free Wifi", "Temple View", "Vegetarian Meals", "Airport Pickup"],
      distance: "0.2 km from temple",
      premium: true,
      bookingLinks: [
        { site: "Booking.com", price: 1200, url: "https://www.booking.com" },
        { site: "MakeMyTrip", price: 1100, url: "https://www.makemytrip.com" },
        { site: "Goibibo", price: 1150, url: "https://www.goibibo.com" }
      ]
    },
    {
      id: "2",
      name: "Tirupati Pilgrim Cottages",
      location: "Tirupati, Andhra Pradesh",
      nearTemple: "Tirupati Balaji",
      price: 1500,
      rating: 4.6,
      reviews: 89,
      amenities: ["Free Wifi", "Breakfast Included", "Shuttle Service", "AC Rooms"],
      distance: "0.5 km from temple",
      premium: false,
      bookingLinks: [
        { site: "Booking.com", price: 1500, url: "https://www.booking.com" },
        { site: "MakeMyTrip", price: 1400, url: "https://www.makemytrip.com" },
        { site: "Airbnb", price: 1550, url: "https://www.airbnb.com" }
      ]
    },
    {
      id: "3",
      name: "Amritsar Heritage Stay",
      location: "Amritsar, Punjab",
      nearTemple: "Golden Temple",
      price: 2000,
      rating: 4.9,
      reviews: 156,
      amenities: ["Free Wifi", "Traditional Decor", "Langar Service", "Guided Tours"],
      distance: "0.3 km from temple",
      premium: true,
      bookingLinks: [
        { site: "Booking.com", price: 2000, url: "https://www.booking.com" },
        { site: "MakeMyTrip", price: 1950, url: "https://www.makemytrip.com" },
        { site: "Agoda", price: 1900, url: "https://www.agoda.com" }
      ]
    },
    {
      id: "4",
      name: "Madurai Temple View Hotel",
      location: "Madurai, Tamil Nadu",
      nearTemple: "Meenakshi Amman Temple",
      price: 1800,
      rating: 4.7,
      reviews: 102,
      amenities: ["Temple View Rooms", "South Indian Breakfast", "Cultural Activities", "AC Rooms"],
      distance: "0.4 km from temple",
      premium: false,
      bookingLinks: [
        { site: "Booking.com", price: 1800, url: "https://www.booking.com" },
        { site: "MakeMyTrip", price: 1750, url: "https://www.makemytrip.com" },
        { site: "Yatra", price: 1780, url: "https://www.yatra.com" }
      ]
    },
    {
      id: "5",
      name: "Puri Beach Retreat",
      location: "Puri, Odisha",
      nearTemple: "Jagannath Temple",
      price: 2200,
      rating: 4.5,
      reviews: 78,
      amenities: ["Beach View", "Free Wifi", "Temple Drop Service", "Traditional Food"],
      distance: "0.6 km from temple",
      premium: false,
      bookingLinks: [
        { site: "Booking.com", price: 2200, url: "https://www.booking.com" },
        { site: "MakeMyTrip", price: 2100, url: "https://www.makemytrip.com" },
        { site: "Cleartrip", price: 2150, url: "https://www.cleartrip.com" }
      ]
    },
    {
      id: "6",
      name: "Somnath Pilgrim Center",
      location: "Veraval, Gujarat",
      nearTemple: "Somnath Temple",
      price: 1300,
      rating: 4.3,
      reviews: 62,
      amenities: ["Free Wifi", "Sea View", "Veg Food", "Temple History Tours"],
      distance: "0.3 km from temple",
      premium: false,
      bookingLinks: [
        { site: "Booking.com", price: 1300, url: "https://www.booking.com" },
        { site: "MakeMyTrip", price: 1200, url: "https://www.makemytrip.com" },
        { site: "Goibibo", price: 1250, url: "https://www.goibibo.com" }
      ]
    },
    {
      id: "7",
      name: "Kedarnath Pilgrim Cottages",
      location: "Kedarnath, Uttarakhand",
      nearTemple: "Kedarnath Temple",
      price: 3000,
      rating: 4.6,
      reviews: 48,
      amenities: ["Heating", "Mountain View", "Guided Treks", "Oxygen Support"],
      distance: "0.8 km from temple",
      premium: true,
      bookingLinks: [
        { site: "Booking.com", price: 3000, url: "https://www.booking.com" },
        { site: "MakeMyTrip", price: 2900, url: "https://www.makemytrip.com" },
        { site: "TripAdvisor", price: 2950, url: "https://www.tripadvisor.com" }
      ]
    },
    {
      id: "8",
      name: "Thanjavur Heritage Home",
      location: "Thanjavur, Tamil Nadu",
      nearTemple: "Brihadeeswara Temple",
      price: 1600,
      rating: 4.7,
      reviews: 86,
      amenities: ["Free Wifi", "Cultural Activities", "Traditional Decor", "AC Rooms"],
      distance: "0.5 km from temple",
      premium: false,
      bookingLinks: [
        { site: "Booking.com", price: 1600, url: "https://www.booking.com" },
        { site: "MakeMyTrip", price: 1550, url: "https://www.makemytrip.com" },
        { site: "Expedia", price: 1580, url: "https://www.expedia.com" }
      ]
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
  
  // Calculate nights from stay duration
  const calculateNights = () => {
    return parseInt(duration);
  };

  const handleExternalBooking = (site: string, accommodationName: string) => {
    toast({
      title: "Redirecting to External Booking",
      description: `You'll be redirected to ${site} to complete your booking for ${accommodationName}.`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Temple Stay Accommodations</h1>
        <p className="text-gray-600 mb-6">
          Find and compare comfortable stays near sacred temples for your pilgrimage journey
        </p>
        
        {/* Search and filter section */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="relative md:col-span-2">
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
              <Select value={duration} onValueChange={setDuration}>
                <SelectTrigger className="w-full">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{calculateNights()} nights</span>
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 night</SelectItem>
                  <SelectItem value="2">2 nights</SelectItem>
                  <SelectItem value="3">3 nights</SelectItem>
                  <SelectItem value="5">5 nights</SelectItem>
                  <SelectItem value="7">7 nights</SelectItem>
                  <SelectItem value="10">10 nights</SelectItem>
                  <SelectItem value="14">14 nights</SelectItem>
                </SelectContent>
              </Select>
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
              Compare Prices
            </Button>
          </div>
        </div>
      </div>
      
      {/* Featured stay - replaced image with colored bg */}
      <div className="relative rounded-lg overflow-hidden mb-10 bg-gradient-to-r from-orange-500 to-amber-500">
        <div className="p-8 md:p-12 flex flex-col md:flex-row items-center">
          <div className="bg-white/10 p-8 rounded-xl md:w-1/3 flex items-center justify-center mb-6 md:mb-0">
            <BedDouble className="h-16 w-16 text-white" />
          </div>
          <div className="md:pl-8 md:w-2/3">
            <span className="inline-block bg-white text-orange-500 text-sm font-medium px-3 py-1 rounded-full mb-3">
              Featured Property
            </span>
            <h2 className="text-3xl font-bold text-white mb-2">Premium Temple View Stays</h2>
            <p className="text-white/90 mb-4 max-w-2xl">
              Compare prices across multiple booking platforms and find the best deals for accommodations near sacred temples
            </p>
            
            <div className="flex flex-wrap gap-4 mb-4 text-white/80">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Multiple Locations</span>
              </div>
              <div className="flex items-center gap-1">
                <BedDouble className="h-4 w-4" />
                <span>All Room Types</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4" />
                <span>Best Prices Guaranteed</span>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button className="bg-white hover:bg-gray-100 text-orange-500">
                Browse Premium Stays
              </Button>
              <Button variant="outline" className="border-white/70 text-white hover:bg-white/10">
                View Benefits
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Accommodations Tabs */}
      <Tabs defaultValue="all" className="mb-6">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Stays</TabsTrigger>
          <TabsTrigger value="premium">Premium</TabsTrigger>
          <TabsTrigger value="budget">Budget Friendly</TabsTrigger>
          <TabsTrigger value="bookings">My Comparisons</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAccommodations.map((accommodation) => (
              <AccommodationCard 
                key={accommodation.id} 
                accommodation={accommodation} 
                duration={calculateNights()}
                onExternalBooking={handleExternalBooking} 
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
                  duration={calculateNights()}
                  onExternalBooking={handleExternalBooking} 
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
                  duration={calculateNights()}
                  onExternalBooking={handleExternalBooking} 
                />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="bookings">
          <div className="text-center py-16">
            <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <BedDouble className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-medium mb-2">No saved comparisons yet</h3>
            <p className="text-gray-500 mb-4">
              You haven't saved any accommodation comparisons yet. Browse our stays to find and compare prices across multiple booking platforms.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600">
              Start Comparing
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
              <h4 className="font-medium mb-1">Best Price Guarantee</h4>
              <p className="text-gray-600 text-sm">
                We compare prices across multiple booking platforms to find you the best deals
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="bg-orange-100 p-2 rounded-full">
              <UtensilsCrossed className="h-5 w-5 text-orange-500" />
            </div>
            <div>
              <h4 className="font-medium mb-1">Temple Proximity Filter</h4>
              <p className="text-gray-600 text-sm">
                Find accommodations closest to your temple of choice for convenience
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="bg-orange-100 p-2 rounded-full">
              <Bath className="h-5 w-5 text-orange-500" />
            </div>
            <div>
              <h4 className="font-medium mb-1">Flight + Stay Bundles</h4>
              <p className="text-gray-600 text-sm">
                Coming soon: Complete travel packages with flight and accommodation deals
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
  duration,
  onExternalBooking 
}: { 
  accommodation: any,
  duration: number,
  onExternalBooking: (site: string, accommodationName: string) => void 
}) => {
  // Sort booking links by price
  const sortedBookingLinks = [...accommodation.bookingLinks].sort((a, b) => a.price - b.price);
  const cheapestBooking = sortedBookingLinks[0];
  
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-52 bg-gradient-to-r from-amber-100 to-orange-100 flex items-center justify-center">
        <div className="absolute top-2 right-2">
          {accommodation.premium && (
            <div className="bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1 rounded">
              Premium
            </div>
          )}
        </div>
        <BedDouble className="h-16 w-16 text-orange-300" />
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
              {amenity === "AC Rooms" && <Bath className="h-3 w-3 text-orange-500" />}
              {amenity === "Breakfast Included" && <UtensilsCrossed className="h-3 w-3 text-orange-500" />}
              <span>{amenity}</span>
            </div>
          ))}
        </div>
        
        {/* Price Comparison Section */}
        <div className="bg-gray-50 p-3 rounded-lg mb-4">
          <div className="flex justify-between items-center mb-2">
            <div className="text-sm font-medium">Price Comparison</div>
            <div className="text-xs text-gray-500">for {duration} {duration === 1 ? 'night' : 'nights'}</div>
          </div>
          
          <div className="space-y-2">
            {sortedBookingLinks.map((link, index) => (
              <div 
                key={index} 
                className={`flex justify-between items-center p-2 rounded-md ${index === 0 ? 'bg-green-50 border border-green-100' : ''}`}
              >
                <span className="text-sm">{link.site}</span>
                <div className="flex items-center">
                  <span className={`font-semibold ${index === 0 ? 'text-green-600' : ''}`}>
                    ₹{link.price * duration}
                  </span>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      onExternalBooking(link.site, accommodation.name);
                      window.open(link.url, '_blank');
                    }}
                    className="ml-2 text-blue-500 hover:text-blue-700"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <a 
          href={cheapestBooking.url}
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault();
            onExternalBooking(cheapestBooking.site, accommodation.name);
            window.open(cheapestBooking.url, '_blank');
          }}
          className="block w-full"
        >
          <Button 
            className="bg-orange-500 hover:bg-orange-600 w-full"
          >
            Book at Best Price (₹{cheapestBooking.price * duration})
            <ExternalLink className="h-4 w-4 ml-2" />
          </Button>
        </a>
      </CardContent>
    </Card>
  );
};

export default StayBookings;
