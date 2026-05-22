
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, Target, Flag, Star } from "lucide-react";
import founderImg from "@/assets/founder.png";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-white to-spiritual-ivory min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-spiritual-maroon/5 bg-opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-cinzel font-bold text-spiritual-maroon mb-6">Our Spiritual Journey</h1>
            <p className="text-xl text-spiritual-maroon/80 mb-8">Connecting devotees with sacred temples across India through technology and tradition.</p>
          </motion.div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square rounded-xl overflow-hidden shadow-xl border-8 border-white bg-spiritual-saffron/10 flex items-center justify-center">
                <Target className="h-32 w-32 text-spiritual-saffron" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-spiritual-ivory p-8 rounded-xl">
                <div className="inline-block p-3 bg-spiritual-saffron/10 rounded-full mb-4">
                  <Target className="h-8 w-8 text-spiritual-saffron" />
                </div>
                <h2 className="text-3xl font-cinzel font-bold text-spiritual-maroon mb-4">Our Mission</h2>
                <p className="text-gray-700 mb-6">
                  TempleConnect aims to bridge the gap between technology and tradition, making temple visits 
                  accessible, organized, and enriching for devotees across the globe. Our platform simplifies the spiritual
                  journey by providing reliable information, seamless booking experiences, and digital solutions that respect
                  the sanctity of these sacred spaces.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-spiritual-saffron/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-spiritual-saffron text-sm">✓</span>
                    </div>
                    <p className="text-gray-700">Simplify temple visits with online darshan bookings and virtual queues</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-spiritual-saffron/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-spiritual-saffron text-sm">✓</span>
                    </div>
                    <p className="text-gray-700">Connect devotees to temples through prasad delivery and puja services</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-spiritual-saffron/20 flex items-center justify-center mr-3 mt-1">
                      <span className="text-spiritual-saffron text-sm">✓</span>
                    </div>
                    <p className="text-gray-700">Help temples embrace digital solutions while preserving traditions</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Vision & Values */}
      <section className="py-16 bg-spiritual-ivory/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <div className="inline-block p-3 bg-spiritual-saffron/10 rounded-full mb-4">
              <Flag className="h-8 w-8 text-spiritual-saffron mx-auto" />
            </div>
            <h2 className="text-3xl font-cinzel font-bold text-spiritual-maroon mb-4">Our Vision & Values</h2>
            <p className="text-gray-700">
              We envision a world where spiritual experiences are accessible to all, where technology enhances rather 
              than dilutes the sacred connection to our heritage, and where every temple visitor can focus on what 
              truly matters – their spiritual journey.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <div className="w-12 h-12 bg-spiritual-maroon/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-spiritual-maroon" />
              </div>
              <h3 className="text-xl font-bold text-spiritual-maroon mb-2">Preserving Tradition</h3>
              <p className="text-gray-700">
                We deeply respect the ancient traditions and customs of each temple, ensuring our digital solutions
                complement rather than compromise the spiritual experience.
              </p>
            </motion.div>
            
            {/* Value 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <div className="w-12 h-12 bg-spiritual-saffron/10 rounded-full flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-spiritual-saffron" />
              </div>
              <h3 className="text-xl font-bold text-spiritual-maroon mb-2">Innovation with Purpose</h3>
              <p className="text-gray-700">
                Every feature we develop serves to enhance the spiritual journey, making it more accessible
                without diluting its sanctity and cultural significance.
              </p>
            </motion.div>
            
            {/* Value 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <div className="w-12 h-12 bg-spiritual-ochre/10 rounded-full flex items-center justify-center mb-4">
                <Flag className="h-6 w-6 text-spiritual-ochre" />
              </div>
              <h3 className="text-xl font-bold text-spiritual-maroon mb-2">Community Empowerment</h3>
              <p className="text-gray-700">
                We believe in empowering both temples and devotees through technology, creating a harmonious
                ecosystem that benefits the entire spiritual community.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Fix the Founder image display in aboutUs page */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-cinzel font-bold text-spiritual-maroon mb-4">Meet Our Founder</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                The inspiration behind TempleConnect came from a young visionary who saw the need to blend 
                technology with tradition to enhance the temple experience for all.
              </p>
            </div>
            
            <div className="bg-spiritual-ivory p-8 rounded-2xl shadow-md">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3">
                  <div className="rounded-xl overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src={founderImg}
                      alt="Surya Rajesh - Founder" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-cinzel font-bold text-spiritual-maroon mb-2">Surya Rajesh</h3>
                  <p className="text-spiritual-saffron mb-4">Founder & CEO, Faith Connect</p>
                  <p className="text-gray-700 mb-4">
                    A student of Podar International School in Mumbai, Surya Rajesh founded Faith Connect after 
                    experiencing firsthand the challenges of temple visits during family pilgrimages. His vision
                    to make spiritual experiences more accessible through technology has transformed how devotees
                    connect with temples across India.
                  </p>
                  <Link to="/founder" className="inline-flex items-center text-spiritual-maroon hover:text-spiritual-saffron transition-colors">
                    <span>Read Surya's full story</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Join Our Journey CTA */}
      <section className="py-16 bg-gradient-to-r from-spiritual-maroon to-spiritual-saffron text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-cinzel font-bold mb-4">Join Our Spiritual Journey</h2>
            <p className="text-white/80 mb-8">
              Whether you're a temple seeking to embrace digital solutions or a devotee looking to enhance
              your spiritual journey, TempleConnect is here to serve as your trusted companion.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <button className="bg-white text-spiritual-maroon px-6 py-3 rounded-full font-medium hover:bg-spiritual-ivory transition-colors">
                  Contact Us
                </button>
              </Link>
              <Link to="/temples">
                <button className="bg-spiritual-maroon/30 text-white border border-white/30 px-6 py-3 rounded-full font-medium hover:bg-spiritual-maroon/50 transition-colors">
                  Explore Temples
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
