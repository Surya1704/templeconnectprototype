
import React from "react";
import Layout from "@/components/Layout";
import JyotirlingsCollage from "@/components/JyotirlingsCollage";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Jyotirlingas: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-spiritual-ivory/20 to-white">
        {/* Hero section */}
        <div className="relative py-12 bg-spiritual-maroon/5">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-cinzel font-bold text-spiritual-maroon mb-4">
                The 12 Jyotirlingas
              </h1>
              <p className="text-xl text-spiritual-maroon/80 max-w-3xl mx-auto">
                Explore the sacred Jyotirlingas, the holiest shrines of Lord Shiva spread across India. Each Jyotirlinga has its own unique history, significance, and divine presence.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Main content */}
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 text-center">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg text-spiritual-maroon/80 max-w-4xl mx-auto"
            >
              According to Hindu mythology, Lord Shiva manifested himself in the form of Jyotirlingas (the radiant signs of The Infinite) at 12 different locations across India. These sacred sites are considered extremely holy and are important pilgrimage destinations for devotees of Lord Shiva.
            </motion.p>
          </div>
          
          {/* Interactive Jyotirlingas Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <JyotirlingsCollage />
          </motion.div>
          
          {/* CTA section */}
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-cinzel font-bold text-spiritual-maroon mb-6">
              Plan Your Spiritual Journey
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={() => navigate("/trip-planner")}
                className="bg-spiritual-saffron hover:bg-spiritual-ochre text-white"
              >
                Plan a Pilgrimage
              </Button>
              <Button 
                onClick={() => navigate("/pooja-booking")}
                variant="outline"
                className="border-spiritual-maroon text-spiritual-maroon hover:bg-spiritual-maroon/5"
              >
                Book Puja Online
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Jyotirlingas;
