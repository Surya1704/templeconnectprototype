
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Calendar, Heart } from "lucide-react";

const Home = () => {
  // Sample stats - these would come from your backend
  const stats = [
    { label: "Temples Onboarded", value: "150+", icon: MapPin },
    { label: "Events Listed", value: "500+", icon: Calendar },
    { label: "Prayers Served", value: "50K+", icon: Heart },
    { label: "Active Devotees", value: "10K+", icon: Users },
  ];

  // Sample temple locations for the map
  const templeLocations = [
    { name: "Tirupati Balaji", lat: 13.6288, lng: 79.4192, state: "Andhra Pradesh" },
    { name: "Golden Temple", lat: 31.6200, lng: 74.8765, state: "Punjab" },
    { name: "Somnath Temple", lat: 20.8880, lng: 70.4013, state: "Gujarat" },
    { name: "Kashi Vishwanath", lat: 25.3176, lng: 83.0099, state: "Uttar Pradesh" },
    { name: "Jagannath Puri", lat: 19.8135, lng: 85.8312, state: "Odisha" },
    { name: "Kedarnath", lat: 30.7346, lng: 79.0669, state: "Uttarakhand" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-spiritual-ivory via-spiritual-sandstone/30 to-spiritual-saffron/20 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-spiritual-maroon mb-6">
              Digitally connecting India's sacred spaces
            </h1>
            <p className="text-xl md:text-2xl text-spiritual-maroon/70 mb-8 max-w-3xl mx-auto">
              Discover temples, join events, and stay connected with your spiritual journey across India
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button asChild size="lg" className="bg-spiritual-saffron hover:bg-spiritual-ochre text-white font-medium px-8">
                <Link to="/temples">Explore Temples</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-spiritual-maroon text-spiritual-maroon hover:bg-spiritual-maroon/5 px-8">
                <Link to="/events">See Events</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-spiritual-saffron/10 rounded-full mb-4">
                  <stat.icon className="h-6 w-6 text-spiritual-saffron" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-spiritual-maroon mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-spiritual-ivory/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-spiritual-maroon mb-4">
              Temples Across India
            </h2>
            <p className="text-lg text-spiritual-maroon/70 max-w-2xl mx-auto">
              Discover sacred spaces near you. Click on any temple to view timings and donation options.
            </p>
          </div>

          {/* Map Placeholder - In production, this would be integrated with Google Maps API */}
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden" style={{ height: '500px' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-spiritual-saffron mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-spiritual-maroon mb-2">Interactive Temple Map</h3>
                <p className="text-gray-600 mb-4">Explore temples across India</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl">
                  {templeLocations.map((temple, index) => (
                    <div key={index} className="bg-white p-3 rounded-lg shadow-sm border hover:shadow-md transition-shadow cursor-pointer">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-spiritual-saffron" />
                        <div className="text-left">
                          <div className="font-medium text-sm text-spiritual-maroon">{temple.name}</div>
                          <div className="text-xs text-gray-500">{temple.state}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-spiritual-maroon to-spiritual-ochre text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold mb-6">
            Start Your Spiritual Journey
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
            Join thousands of devotees connecting with temples across India through TempleConnect
          </p>
          <Button asChild size="lg" className="bg-white text-spiritual-maroon hover:bg-spiritual-ivory">
            <Link to="/temples">Explore Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
