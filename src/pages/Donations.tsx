
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ExternalLink, MapPin, Building, Heart } from "lucide-react";
import ImageWithFallback from "@/components/ImageWithFallback";

const Donations = () => {
  const [selectedState, setSelectedState] = useState("all");

  const temples = [
    {
      id: 1,
      name: "Tirupati Balaji Temple",
      location: "Tirupati, Andhra Pradesh",
      state: "Andhra Pradesh",
      image: "https://i.pinimg.com/736x/3c/e2/c3/3ce2c373003a51dc5589496554b7ce76.jpg",
      donationLink: "https://ttdsevaonline.com",
      description: "Support the daily sevas and maintenance of this sacred abode of Lord Venkateswara."
    },
    {
      id: 2,
      name: "Golden Temple",
      location: "Amritsar, Punjab",
      state: "Punjab",
      image: "https://i.pinimg.com/736x/55/c8/30/55c8306e3a08e6df393a71a0acb11914.jpg",
      donationLink: "https://sgpc.net",
      description: "Contribute to the community kitchen (langar) and temple maintenance."
    },
    {
      id: 3,
      name: "Somnath Temple",
      location: "Somnath, Gujarat",
      state: "Gujarat",
      image: "https://i.pinimg.com/736x/cd/84/8d/cd848d413a478fa85d11e1068fb669f3.jpg",
      donationLink: "https://somnath.org",
      description: "Help preserve this first Jyotirlinga and its ancient traditions."
    },
    {
      id: 4,
      name: "Kashi Vishwanath Temple",
      location: "Varanasi, Uttar Pradesh",
      state: "Uttar Pradesh",
      image: "https://i.pinimg.com/736x/bf/60/88/bf60886c58e4ffd17540c7f8e4f5d583.jpg",
      donationLink: "https://shrikashivishwanath.org",
      description: "Support the holy rituals and services at this sacred Jyotirlinga."
    },
    {
      id: 5,
      name: "Jagannath Temple",
      location: "Puri, Odisha",
      state: "Odisha",
      image: "https://i.pinimg.com/736x/42/60/fb/4260fb49a4b1496eb18cc90f79b87185.jpg",
      donationLink: "https://jagannath.nic.in",
      description: "Contribute to the daily bhoga and festival celebrations of Lord Jagannath."
    },
    {
      id: 6,
      name: "Kedarnath Temple",
      location: "Kedarnath, Uttarakhand",
      state: "Uttarakhand",
      image: "https://i.pinimg.com/736x/36/da/9d/36da9dea692a7f4b93d7705a824da3f1.jpg",
      donationLink: "https://badrinath-kedarnath.gov.in",
      description: "Support this Himalayan temple and its restoration efforts."
    }
  ];

  const states = [...new Set(temples.map(temple => temple.state))].sort();

  const filteredTemples = selectedState === "all" 
    ? temples 
    : temples.filter(temple => temple.state === selectedState);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-cinzel font-bold text-spiritual-maroon mb-4">
          Support Sacred Temples
        </h1>
        <p className="text-lg text-spiritual-maroon/70 max-w-2xl mx-auto">
          Make donations directly to temple trusts and official websites to support maintenance, rituals, and community services
        </p>
      </div>

      {/* Why Donate Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="text-center p-6 bg-spiritual-ivory/30 rounded-lg">
          <Building className="h-12 w-12 text-spiritual-saffron mx-auto mb-4" />
          <h3 className="font-cinzel font-bold text-spiritual-maroon mb-2">Temple Maintenance</h3>
          <p className="text-gray-600 text-sm">Help preserve ancient architecture and sacred spaces</p>
        </div>
        
        <div className="text-center p-6 bg-spiritual-ivory/30 rounded-lg">
          <Heart className="h-12 w-12 text-spiritual-saffron mx-auto mb-4" />
          <h3 className="font-cinzel font-bold text-spiritual-maroon mb-2">Daily Rituals</h3>
          <p className="text-gray-600 text-sm">Support priests and daily puja ceremonies</p>
        </div>
        
        <div className="text-center p-6 bg-spiritual-ivory/30 rounded-lg">
          <MapPin className="h-12 w-12 text-spiritual-saffron mx-auto mb-4" />
          <h3 className="font-cinzel font-bold text-spiritual-maroon mb-2">Community Service</h3>
          <p className="text-gray-600 text-sm">Fund educational programs and free meals</p>
        </div>
      </div>

      {/* State Filter */}
      <div className="mb-8">
        <div className="max-w-md mx-auto">
          <Select value={selectedState} onValueChange={setSelectedState}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by State" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All States</SelectItem>
              {states.map(state => (
                <SelectItem key={state} value={state}>{state}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Temple Donation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredTemples.map((temple) => (
          <Card key={temple.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 relative">
              <ImageWithFallback
                src={temple.image}
                alt={temple.name}
                className="w-full h-full object-cover"
                fallbackSrc="/placeholder.svg"
              />
            </div>
            
            <CardHeader>
              <CardTitle className="text-lg font-cinzel text-spiritual-maroon">
                {temple.name}
              </CardTitle>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{temple.location}</span>
              </div>
            </CardHeader>
            
            <CardContent>
              <p className="text-gray-600 text-sm mb-4">
                {temple.description}
              </p>
              
              <Button asChild className="w-full bg-spiritual-saffron hover:bg-spiritual-ochre">
                <a href={temple.donationLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Donate on Official Website
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Important Notice */}
      <div className="bg-spiritual-saffron/10 border border-spiritual-saffron/20 rounded-lg p-6 text-center">
        <h3 className="font-cinzel font-bold text-spiritual-maroon mb-2">
          Direct Temple Donations
        </h3>
        <p className="text-gray-700">
          All donation links redirect to official temple websites and trusts. 
          TempleConnect does not process payments - we simply connect you with authenticated temple donation portals.
          Your contributions go directly to the temples for their sacred work.
        </p>
      </div>
    </div>
  );
};

export default Donations;
