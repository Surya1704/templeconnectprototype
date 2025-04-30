
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { temples, categories, getTemplesByState } from "@/data/temples";
import StateFilter from "@/components/StateFilter";
import CongestionIndicator from "@/components/CongestionIndicator";

const Home = () => {
  const [selectedState, setSelectedState] = useState("All States");
  const filteredTemples = getTemplesByState(selectedState);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] bg-cover bg-center flex items-center justify-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598977054780-2dc700fdc103?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-10"></div>
        <div className="container mx-auto px-4 relative z-20 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Connect with Divine Temples</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Book darshans, make donations, and order prasad from temples across India
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              <Link to="/events">Book Darshan</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white">
              <Link to="/prasad-booking">Order Prasad</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Browse by category</h2>
            <Button variant="ghost" className="text-orange-500 hover:text-orange-600">
              View All
            </Button>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-11 gap-4">
            {categories.map((category) => (
              <Link 
                key={category.name} 
                to="/temples" 
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full border flex items-center justify-center mb-2 group-hover:border-orange-500 group-hover:text-orange-500">
                  <category.icon className="h-6 w-6" />
                </div>
                <span className="text-sm">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Temples Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <h2 className="text-2xl font-bold text-gray-800">Sacred Destinations</h2>
            <div className="flex items-center gap-4">
              <StateFilter 
                selectedState={selectedState} 
                onStateChange={setSelectedState}
              />
              <Button asChild variant="ghost" className="text-orange-500 hover:text-orange-600">
                <Link to="/temples" className="flex items-center">
                  View All Temples
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTemples.slice(0, 8).map((temple) => (
              <Card key={temple.id} className="overflow-hidden border-none shadow-sm">
                <div className="relative">
                  <Link to={`/temple/${temple.id}`}>
                    <img 
                      src={temple.image} 
                      alt={temple.name} 
                      className="w-full h-48 object-cover transition-transform hover:scale-105"
                    />
                  </Link>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-2 right-2 bg-white/80 rounded-full hover:bg-white"
                  >
                    <Heart className="h-5 w-5 text-orange-500" />
                  </Button>
                </div>
                
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Link 
                      to={`/temple/${temple.id}`}
                      className="text-lg font-semibold hover:text-orange-500"
                    >
                      {temple.name}
                    </Link>
                    <div className="flex items-center text-amber-500">
                      <span>★</span>
                      <span className="ml-1 text-sm text-gray-700">{temple.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-gray-600">{temple.location}</p>
                    <CongestionIndicator level={["low", "moderate", "high", "extreme"][Math.floor(Math.random() * 4)] as any} />
                  </div>

                  <p className="text-gray-600 text-sm mb-3">{temple.hours}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {temple.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs rounded-full px-2 py-1 bg-orange-50 text-orange-800 border border-orange-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-semibold">₹{temple.price}</span>
                      <span className="text-gray-500 text-sm ml-1">darshan</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                        Book
                      </Button>
                      <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                        Donate
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredTemples.length > 8 && (
            <div className="flex justify-center mt-8">
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                <Link to="/temples">View All Temples</Link>
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
