
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <section 
        ref={heroRef}
        className="relative min-h-screen bg-gradient-to-b from-spiritual-maroon via-spiritual-ochre to-spiritual-saffron overflow-hidden"
      >
        {/* Temple silhouette */}
        <div className="absolute inset-0 bg-[url('/temple-silhouette.svg')] bg-bottom bg-no-repeat opacity-20"></div>
        
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-6 py-24 text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl mx-auto"
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
                className="text-5xl md:text-7xl font-cinzel font-bold text-white mb-6 drop-shadow-lg"
              >
                Temple<span className="text-spiritual-gold">Connect</span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl md:text-2xl text-spiritual-ivory/90 mb-10 max-w-3xl mx-auto"
              >
                Your sacred journey to India's divine temples begins here. Explore, worship, and connect with centuries of spiritual heritage.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-spiritual-maroon hover:bg-spiritual-ivory font-cinzel text-lg px-8">
                  <Link to="/temples">Explore Temples</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-cinzel text-lg px-8">
                  <Link to="/pooja-booking">Book Pooja</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Animated elements */}
        <div className="absolute bottom-20 left-20 w-32 h-32 opacity-30 animate-rotate-slow">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" stroke="#FFF" strokeWidth="1"/>
            <circle cx="50" cy="50" r="35" stroke="#FFF" strokeWidth="1"/>
            <circle cx="50" cy="50" r="25" stroke="#FFF" strokeWidth="1"/>
            <path d="M50 5 L50 95 M5 50 L95 50 M15 15 L85 85 M85 15 L15 85" stroke="#FFF" strokeWidth="1"/>
          </svg>
        </div>
        
        <div className="absolute top-40 right-20 w-40 h-40 opacity-20 animate-float">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,10 L90,90 L10,90 Z" fill="#FFFFFF"/>
            <path d="M50,20 L80,80 L20,80 Z" fill="none" stroke="#FFFFFF"/>
          </svg>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll to explore</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-6 temple-pattern">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-spiritual-maroon mb-8">
              A Digital Sanctuary for Spiritual Seekers
            </h2>
            
            <p className="text-lg text-spiritual-maroon/80 mb-10">
              TempleConnect bridges ancient traditions with modern technology, bringing the sacred
              experience of India's temples to devotees worldwide. Our platform offers virtual darshans,
              prasad ordering, donation services, and comprehensive guides to temple history and rituals.
            </p>
            
            <div className="relative">
              <div className="h-0.5 bg-gradient-to-r from-transparent via-spiritual-gold to-transparent w-full absolute top-1/2 -translate-y-1/2"></div>
              <div className="relative inline-block bg-spiritual-ivory px-10 py-2">
                <span className="font-cinzel text-xl text-spiritual-gold">॥ नमः शिवाय ॥</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-spiritual-ivory to-spiritual-sandstone/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-cinzel font-bold text-spiritual-maroon mb-4"
            >
              Discover Sacred Experiences
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-0.5 w-24 mx-auto bg-spiritual-gold mb-8"
            ></motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Darshan Booking",
                description: "Schedule your temple visits and bypass long queues with our seamless booking system",
                icon: "🕉️",
                link: "/temples"
              },
              {
                title: "Pooja Services",
                description: "Arrange ceremonial rituals conducted by temple priests on your behalf",
                icon: "🪔",
                link: "/pooja-booking"
              },
              {
                title: "Sacred Prasad",
                description: "Order blessed offerings from temples across India delivered to your doorstep",
                icon: "🍯",
                link: "/prasad-booking"
              },
              {
                title: "Virtual Tours",
                description: "Experience immersive 3D tours of ancient temples from the comfort of your home",
                icon: "🏯",
                link: "/gallery"
              },
              {
                title: "Spiritual Guidance",
                description: "Connect with knowledgeable priests for personalized religious consultations",
                icon: "📜",
                link: "/astrology"
              },
              {
                title: "Divine Donations",
                description: "Contribute to temple maintenance and charitable initiatives with secure transactions",
                icon: "🙏",
                link: "/donations"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg divine-glow"
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
                    <Button asChild variant="outline" className="divine-btn-outline">
                      <Link to={feature.link}>Explore</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Visual Sacred Journey */}
      <section className="py-20 px-6 overflow-hidden bg-spiritual-maroon/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-cinzel font-bold text-spiritual-maroon mb-4"
            >
              Embark on a Sacred Journey
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-0.5 w-24 mx-auto bg-spiritual-gold mb-8"
            ></motion.div>
          </div>
          
          <div className="relative">
            {/* Temple journey path */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-spiritual-gold/30 -translate-y-1/2 hidden md:block"></div>
            
            {/* Journey steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {[
                {
                  title: "Discover & Choose",
                  description: "Browse our curated collection of temples across India based on location, deity, or significance",
                  icon: "🔍"
                },
                {
                  title: "Connect & Experience",
                  description: "Book visits, participate in rituals, and immerse yourself in temple traditions",
                  icon: "✨"
                },
                {
                  title: "Reflect & Return",
                  description: "Share your experiences, build your spiritual journey, and plan future temple visits",
                  icon: "🧘‍♀️"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  <div className="bg-white rounded-lg p-8 shadow-md divine-glow h-full">
                    <div className="w-16 h-16 rounded-full bg-spiritual-gold/10 flex items-center justify-center mb-6 mx-auto">
                      <span className="text-3xl">{step.icon}</span>
                    </div>
                    
                    <h3 className="font-cinzel text-xl font-bold text-spiritual-maroon mb-4 text-center">
                      {step.title}
                    </h3>
                    
                    <p className="text-spiritual-maroon/70 text-center">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Number indicator */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-spiritual-saffron text-white flex items-center justify-center font-bold z-20">
                    {index + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Button asChild className="divine-btn px-8 py-6 text-lg font-cinzel">
              <Link to="/temples">Begin Your Journey</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 px-6 bg-spiritual-maroon relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/mandala-pattern.svg')] opacity-10"></div>
        
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

export default Index;
