
import React from "react";
import { motion } from "framer-motion";
import { Heart, Users, MapPin } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-cinzel font-bold text-spiritual-maroon mb-6">
            About TempleConnect
          </h1>
          
          <div className="bg-spiritual-ivory/30 rounded-lg p-8 mb-8">
            <p className="text-lg text-spiritual-maroon/80 leading-relaxed">
              We're digitizing India's sacred network—starting with the temples that millions visit every day. 
              TempleConnect bridges the gap between devotees and sacred spaces through technology, 
              making spiritual journeys more accessible and meaningful for everyone.
            </p>
          </div>
        </motion.div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center p-6 bg-white rounded-lg shadow-md"
          >
            <Heart className="h-12 w-12 text-spiritual-saffron mx-auto mb-4" />
            <h3 className="text-xl font-cinzel font-bold text-spiritual-maroon mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To digitally connect India's sacred spaces with devotees worldwide, 
              preserving traditions while embracing modern accessibility.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center p-6 bg-white rounded-lg shadow-md"
          >
            <Users className="h-12 w-12 text-spiritual-saffron mx-auto mb-4" />
            <h3 className="text-xl font-cinzel font-bold text-spiritual-maroon mb-3">Our Vision</h3>
            <p className="text-gray-600">
              A world where every devotee can easily access temple information, 
              participate in rituals, and contribute to sacred spaces from anywhere.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center p-6 bg-white rounded-lg shadow-md"
          >
            <MapPin className="h-12 w-12 text-spiritual-saffron mx-auto mb-4" />
            <h3 className="text-xl font-cinzel font-bold text-spiritual-maroon mb-3">Our Impact</h3>
            <p className="text-gray-600">
              Connecting thousands of devotees with sacred temples across India, 
              facilitating spiritual journeys and preserving cultural heritage.
            </p>
          </motion.div>
        </div>

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-spiritual-maroon/5 to-spiritual-saffron/5 rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-cinzel font-bold text-spiritual-maroon mb-4">
            Founded with Purpose
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Founded by <strong>Surya Rajesh</strong> in Mumbai, TempleConnect was born from a vision 
            to make India's rich spiritual heritage accessible to everyone through technology.
          </p>
          <p className="text-gray-600">
            Starting with basic temple information and timings, we're building a comprehensive 
            platform that honors tradition while embracing digital innovation.
          </p>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h2 className="text-2xl font-cinzel font-bold text-spiritual-maroon mb-8">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-spiritual-saffron/20 rounded-lg">
              <h4 className="font-bold text-spiritual-maroon mb-2">Authenticity</h4>
              <p className="text-gray-600 text-sm">
                We work directly with temple trusts and verified sources to ensure accurate information
              </p>
            </div>
            
            <div className="p-6 border border-spiritual-saffron/20 rounded-lg">
              <h4 className="font-bold text-spiritual-maroon mb-2">Accessibility</h4>
              <p className="text-gray-600 text-sm">
                Making sacred spaces accessible to devotees regardless of location or physical limitations
              </p>
            </div>
            
            <div className="p-6 border border-spiritual-saffron/20 rounded-lg">
              <h4 className="font-bold text-spiritual-maroon mb-2">Respect</h4>
              <p className="text-gray-600 text-sm">
                Honoring ancient traditions while thoughtfully integrating modern technology
              </p>
            </div>
            
            <div className="p-6 border border-spiritual-saffron/20 rounded-lg">
              <h4 className="font-bold text-spiritual-maroon mb-2">Community</h4>
              <p className="text-gray-600 text-sm">
                Building connections between temples, devotees, and communities across India
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
