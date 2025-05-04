
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TempleCollage from "@/components/TempleCollage";

const Home = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 px-6 bg-gradient-to-b from-spiritual-ivory via-spiritual-sandstone/20 to-spiritual-ivory overflow-hidden">
        <div className="container mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <div className="w-24 h-24 mx-auto mb-6">
                <div className="w-full h-full rounded-full bg-spiritual-gold/20 p-4 animate-glow">
                  <div className="w-full h-full rounded-full bg-spiritual-gold/30 p-3">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <span className="font-cinzel text-2xl text-spiritual-maroon">ॐ</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-cinzel font-bold text-spiritual-maroon mb-6"
            >
              Temple<span className="text-spiritual-gold">Connect</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-spiritual-maroon/80 mb-10"
            >
              Your sacred journey to India's divine temples begins here. Explore, worship, and connect with centuries of spiritual heritage.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-spiritual-maroon text-white hover:bg-spiritual-maroon/90 font-cinzel text-lg px-8">
                <Link to="/temples">Explore Temples</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-spiritual-maroon text-spiritual-maroon hover:bg-spiritual-maroon/10 font-cinzel text-lg px-8">
                <Link to="/pooja-booking">Book Pooja</Link>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Interactive Temple Collage */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-cinzel font-bold text-spiritual-maroon mb-6 text-center">
              Discover Sacred Temples
            </h2>
            <TempleCollage />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-spiritual-ivory via-white to-spiritual-ivory">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-cinzel font-bold text-spiritual-maroon mb-4"
            >
              Experience Divine Services
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-0.5 w-24 mx-auto bg-spiritual-gold mb-8"
            ></motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Darshan Booking",
                description: "Schedule your temple visits and bypass long queues with our seamless booking system",
                icon: "🕉️",
                link: "/temples"
              },
              {
                title: "Prasad Ordering",
                description: "Order blessed offerings from temples across India delivered to your doorstep",
                icon: "🍯",
                link: "/prasad-booking"
              },
              {
                title: "Virtual Temple Tours",
                description: "Experience immersive tours of ancient temples from the comfort of your home",
                icon: "🏯",
                link: "/gallery"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-spiritual-ivory rounded-lg overflow-hidden shadow-md hover:shadow-lg divine-glow"
              >
                <div className="p-8">
                  <div className="w-16 h-16 rounded-full bg-spiritual-saffron/10 flex items-center justify-center mb-6 mx-auto">
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                  
                  <h3 className="font-cinzel text-xl font-bold text-spiritual-maroon mb-4 text-center">
                    {feature.title}
                  </h3>
                  
                  <p className="text-spiritual-maroon/70 mb-6 text-center">
                    {feature.description}
                  </p>
                  
                  <div className="text-center">
                    <Button asChild variant="outline" className="border-spiritual-saffron text-spiritual-saffron hover:bg-spiritual-saffron/5">
                      <Link to={feature.link}>Explore</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 px-6 bg-spiritual-maroon relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"60\" height=\"60\" viewBox=\"0 0 60 60\"><path d=\"M30 5l5 15h14l-11 9 4 16-12-9-12 9 4-16-11-9h14z\" fill=\"white\" opacity=\"0.05\"/></svg>')] bg-repeat opacity-20"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-cinzel font-bold text-white mb-6"
            >
              Begin Your Spiritual Journey Today
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-white/80 mb-10"
            >
              Connect with India's divine heritage through our comprehensive platform. 
              Discover sacred spaces, participate in ancient rituals, and deepen your spiritual practice.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button asChild size="lg" className="bg-white text-spiritual-maroon hover:bg-spiritual-ivory font-cinzel text-lg px-8">
                <Link to="/temples">Explore Temples</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-cinzel text-lg px-8">
                <Link to="/pooja-booking">Book Pooja</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
