
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

const Founder = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Founder Image Section */}
            <div className="bg-gradient-to-br from-spiritual-maroon/10 to-spiritual-saffron/10 p-8 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="rounded-2xl overflow-hidden shadow-lg border-4 border-white"
              >
                <img
                  src="/lovable-uploads/79f0f7ee-07d3-44a6-a1b9-3e35e6530e64.png"
                  alt="Surya Rajesh - Founder of TempleConnect"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>

            {/* Founder Info Section */}
            <div className="p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h1 className="text-3xl md:text-4xl font-bold text-spiritual-maroon mb-4">Surya Rajesh</h1>
                <h2 className="text-lg text-spiritual-saffron font-medium mb-6">Founder & CEO, TempleConnect</h2>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    A student of Podar International School in Mumbai, Surya Rajesh is the visionary founder of TempleConnect. 
                    Growing up in India's bustling financial capital, Surya was deeply influenced by both tradition and technology from an early age.
                  </p>
                  
                  <p>
                    The inspiration behind TempleConnect came during spiritual trips with his parents—where they visited 10–12 temples across different 
                    cities in just 5 days. Amidst the devotion and rituals, Surya noticed a common pattern: long queues, lack of organized darshan 
                    timings, and a digital gap that made the entire experience overwhelming for families and pilgrims alike.
                  </p>
                  
                  <p>
                    That's when the idea struck—to build a platform that simplifies temple visits without compromising on the sacred experience.
                  </p>
                  
                  <p>
                    Under Surya's leadership, TempleConnect aims to make temples across India more accessible by offering online darshan 
                    bookings, puja services, donation portals, and prasad delivery—all in one place. His mission is simple: bring devotees 
                    closer to their faith through seamless, tech-enabled solutions, while helping temples embrace the digital age with grace.
                  </p>
                </div>
                
                <div className="mt-8 inline-block rounded-full bg-gradient-to-r from-spiritual-maroon to-spiritual-saffron p-[2px]">
                  <a href="/contact" className="block bg-white hover:bg-spiritual-ivory px-6 py-2 rounded-full text-spiritual-maroon font-medium transition-all">
                    Get in Touch
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-center mt-16 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-spiritual-maroon mb-4">Our Vision</h3>
          <p className="text-gray-700 mb-6">
            "To create a world where spiritual experiences are accessible to all, where technology enhances 
            rather than dilutes the sacred connection to our heritage, and where every temple visitor can focus 
            on what truly matters – their spiritual journey."
          </p>
          <div className="mt-6 text-spiritual-saffron font-bold">— Surya Rajesh</div>
        </motion.div>

        {/* Join Waitlist CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="bg-gradient-to-r from-spiritual-saffron/10 to-spiritual-maroon/10 rounded-2xl p-8 text-center border border-spiritual-saffron/20 mt-12"
        >
          <div className="w-16 h-16 mx-auto mb-4 bg-spiritual-saffron/20 rounded-full flex items-center justify-center">
            <Bell className="h-8 w-8 text-spiritual-saffron" />
          </div>
          <h3 className="text-xl font-bold text-spiritual-maroon mb-2">Join Our Mission</h3>
          <p className="text-gray-700 mb-4">
            Be part of our journey to digitally transform India's spiritual landscape.
          </p>
          <Button className="bg-spiritual-saffron hover:bg-spiritual-ochre text-white">
            <Bell className="h-4 w-4 mr-2" />
            Join the Waitlist
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Founder;
