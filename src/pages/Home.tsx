
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Calendar as CalendarIcon } from "lucide-react";
import { temples, categories, getTemplesByState } from "@/data/temples";
import StateFilter from "@/components/StateFilter";
import CongestionIndicator from "@/components/CongestionIndicator";

const Home = () => {
  const [selectedState, setSelectedState] = useState("All States");
  const filteredTemples = getTemplesByState(selectedState);
  
  // Temple images
  const templeImages = {
    kashi: "public/lovable-uploads/28a331ad-d3c0-4157-8b9a-32af5d26e785.png",
    tirupati: "public/lovable-uploads/dc0a16f8-c635-404e-8e78-b77eb4b37792.png",
    golden: "public/lovable-uploads/ea3c8734-1903-4391-bad2-38836ad90d38.png",
    meenakshi: "public/lovable-uploads/adc13ff4-6e68-4df2-aa6c-ba386b70fcc9.png",
    jagannath: "https://images.unsplash.com/photo-1627894006066-b45796eba1cb?q=80&w=1176&auto=format&fit=crop",
    somnath: "https://images.unsplash.com/photo-1586132497247-32bdc8e1f52e?q=80&w=1180&auto=format&fit=crop"
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] bg-cover bg-center flex items-center justify-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-10"></div>
        <div className="container mx-auto px-4 relative z-20 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Connect with Divine Temples</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Book darshans, make donations, and order prasad from temples across India
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              <Link to="/pooja-booking">Book Pooja</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white">
              <Link to="/prasad-booking">Order Prasad</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Experience the Divine</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CalendarIcon className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Multi-Pooja Booking</h3>
              <p className="text-gray-600 mb-4">Book multiple pooja services across different temples in one go.</p>
              <Button asChild variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                <Link to="/pooja-booking">Book Now</Link>
              </Button>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Prasad Tracking</h3>
              <p className="text-gray-600 mb-4">Track your prasad orders in real-time from temples to your doorstep.</p>
              <Button asChild variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                <Link to="/prasad-booking">Order & Track</Link>
              </Button>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Hindu Astrology</h3>
              <p className="text-gray-600 mb-4">Get personalized astrological guidance based on Vedic principles.</p>
              <Button asChild variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                <Link to="/astrology">Check Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Browse by category</h2>
            <Button asChild variant="ghost" className="text-orange-500 hover:text-orange-600">
              <Link to="/temples">View All</Link>
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
            {filteredTemples.slice(0, 8).map((temple) => {
              // Get temple image based on temple name
              let templeImage = temple.image;
              if (temple.name.includes("Kashi") || temple.name.includes("Varanasi")) {
                templeImage = templeImages.kashi;
              } else if (temple.name.includes("Tirupati") || temple.name.includes("Balaji")) {
                templeImage = templeImages.tirupati;
              } else if (temple.name.includes("Golden") || temple.name.includes("Harmandir")) {
                templeImage = templeImages.golden;
              } else if (temple.name.includes("Meenakshi")) {
                templeImage = templeImages.meenakshi;
              } else if (temple.name.includes("Jagannath")) {
                templeImage = templeImages.jagannath;
              } else if (temple.name.includes("Somnath")) {
                templeImage = templeImages.somnath;
              }
              
              return (
                <Card key={temple.id} className="overflow-hidden border-none shadow-sm">
                  <div className="relative">
                    <Link to={`/temple/${temple.id}`}>
                      <img 
                        src={templeImage} 
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
                        <Button asChild size="sm" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                          <Link to={`/temple/${temple.id}`}>Book</Link>
                        </Button>
                        <Button asChild size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                          <Link to={`/temple/${temple.id}`}>Donate</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
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

      {/* Astrology Section */}
      <section className="py-12 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Hindu Astrology</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover your cosmic journey with personalized Vedic astrological readings based on ancient Hindu principles.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Janma Kundali</h3>
              <p className="text-gray-600 mb-4">Get your complete birth chart analysis based on Vedic astrology principles.</p>
              <Button asChild variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                <Link to="/astrology">Generate Chart</Link>
              </Button>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Muhurta</h3>
              <p className="text-gray-600 mb-4">Find the most auspicious time for important life events and ceremonies.</p>
              <Button asChild variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                <Link to="/astrology">Check Muhurta</Link>
              </Button>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Doshas & Remedies</h3>
              <p className="text-gray-600 mb-4">Discover potential planetary doshas and effective remedies to balance them.</p>
              <Button asChild variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                <Link to="/astrology">Find Remedies</Link>
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
              <Link to="/astrology">Explore Hindu Astrology</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the Complete Spiritual Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book poojas, arrange prasad delivery, and plan your temple visits all in one place.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
              <Link to="/pooja-booking">Book Multiple Poojas</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/prasad-booking">Track Your Prasad</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
