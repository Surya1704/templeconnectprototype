
import React from "react";
import Layout from "../components/Layout";
import TempleCollage from "../components/TempleCollage";
import JyotirlingsCollage from "../components/JyotirlingsCollage";
import PrimaryActionButtons from "../components/PrimaryActionButtons";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-cinzel font-bold text-spiritual-maroon mb-6"
              >
                Discover India's Sacred Temples
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-gray-700 mb-8"
              >
                Explore ancient spiritual destinations, book ceremonies, and connect with centuries of divine heritage through our comprehensive platform.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <PrimaryActionButtons className="mt-6" />
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <img 
                src="/lovable-uploads/e4bc4fc3-559b-47cb-ab47-4804b7f32536.png"
                alt="Temple Illustration" 
                className="w-full rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </section>
        
        {/* Temple Collage Section */}
        <section className="py-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-cinzel font-bold text-spiritual-maroon mb-4">Featured Temples</h2>
            <p className="text-gray-600">Discover some of India's most revered and beautiful temples</p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg">
            <TempleCollage />
          </div>
        </section>
        
        {/* Jyotirlings Section */}
        <section className="py-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-cinzel font-bold text-spiritual-maroon mb-4">Sacred Jyotirlingas</h2>
            <p className="text-gray-600">The twelve divine manifestations of Lord Shiva across India</p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg">
            <JyotirlingsCollage />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
