import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import JyotirlingsCollage from "@/components/JyotirlingsCollage";
import Mooshak from "@/components/Mooshak";

const Home = () => {
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Jyotirlinga data for the featured section with correct IDs
  const jyotirlingsData = [
    { name: "Somnath", image: "/public/assets/temples/golden-temple.png", templeId: "24", location: "Gujarat" },
    { name: "Mallikarjuna", image: "/public/assets/temples/meenakshi-temple.png", templeId: "34", location: "Andhra Pradesh" },
    { name: "Mahakaleshwar", image: "/public/assets/temples/kedarnath-temple.png", templeId: "26", location: "Madhya Pradesh" },
    { name: "Omkareshwar", image: "/public/assets/temples/jagannath-puri.png", templeId: "27", location: "Madhya Pradesh" },
    { name: "Kedarnath", image: "/public/assets/temples/kashi-vishwanath.png", templeId: "28", location: "Uttarakhand" },
    { name: "Bhimashankar", image: "/public/assets/temples/tirupati-balaji.png", templeId: "29", location: "Maharashtra" },
    { name: "Kashi Vishwanath", image: "/public/assets/temples/badrinath-temple.png", templeId: "30", location: "Uttar Pradesh" },
    { name: "Trimbakeshwar", image: "/public/assets/temples/brihadeeswara-temple.png", templeId: "31", location: "Maharashtra" },
  ];

  // Sanskrit texts for animation
  const sanskritTexts = [
    'ॐ', 'नमः शिवाय', 'शिव', 'हर हर महादेव', 'जय भोलेनाथ', 'त्र्यम्बकम्', 
    'महादेव', 'रुद्र', 'शंकर', 'विश्वनाथ', 'केदारनाथ', 'सोमनाथ', 'वैद्यनाथ'
  ];

  // Initialize Sanskrit text particles animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      size: number;
      speed: number;
      text: string;
      opacity: number;
      color: string;
    }[] = [];

    // Create particles
    const createParticles = () => {
      for (let i = 0; i < 35; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 20 + 10,
          speed: Math.random() * 1 + 0.2,
          text: sanskritTexts[Math.floor(Math.random() * sanskritTexts.length)],
          opacity: Math.random() * 0.5 + 0.1,
          color: `rgba(212, 175, 55, ${Math.random() * 0.3 + 0.1})`
        });
      }
    };

    createParticles();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.fillStyle = particle.color;
        ctx.font = `${particle.size}px 'Arial'`;
        ctx.globalAlpha = particle.opacity;
        ctx.fillText(particle.text, particle.x, particle.y);
        
        particle.x += particle.speed;
        
        if (particle.x > canvas.width) {
          particle.x = -50;
          particle.y = Math.random() * canvas.height;
        }
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero section */}
      <section className="relative min-h-screen bg-gradient-to-b from-spiritual-maroon via-spiritual-ochre to-spiritual-saffron overflow-hidden hero-section">
        {/* Sanskrit text animation canvas */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 z-0 w-full h-full"
        />

        {/* Mooshak cursor follower */}
        <Mooshak />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="container mx-auto px-6 py-24 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="max-w-4xl mx-auto"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
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
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-cinzel font-bold text-white mb-6 drop-shadow-lg"
              >
                Temple<span className="text-spiritual-gold">Connect</span>
              </motion.h1>
              
              <motion.p 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl md:text-2xl text-spiritual-ivory/90 mb-10 max-w-3xl mx-auto"
              >
                Your sacred journey to India's divine temples begins here.
                Explore, worship, and connect with centuries of spiritual heritage.
              </motion.p>
              
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <Button asChild size="lg" className="bg-white text-spiritual-maroon hover:bg-spiritual-ivory font-cinzel text-lg px-8">
                  <Link to="/temples">Explore Temples</Link>
                </Button>
                <Button asChild size="lg" className="bg-white/80 text-spiritual-maroon hover:bg-white font-cinzel text-lg px-8 transition-all">
                  <Link to="/puja-booking">Book Pooja</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll to explore</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Jyotirlings Collage Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-spiritual-ivory/10 to-spiritual-sandstone/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-cinzel font-bold text-spiritual-maroon mb-4"
            >
              The 12 Sacred Jyotirlingas
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-3 text-spiritual-maroon/70 max-w-3xl mx-auto"
            >
              Discover the divine manifestations of Lord Shiva across India
            </motion.p>
          </div>
          
          <div className="relative">
            <JyotirlingsCollage />
          </div>
          
          <div className="text-center mt-8">
            <Button asChild className="bg-spiritual-maroon hover:bg-spiritual-maroon/90 transition-all">
              <Link to="/jyotirlingas">Learn More About Jyotirlingas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Jyotirlingas Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-spiritual-maroon">Featured Jyotirlingas</h2>
            <p className="mt-3 text-spiritual-maroon/70">Explore some of the most revered Jyotirlingas in India</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {jyotirlingsData.map((jyotirlinga, index) => (
              <motion.div
                key={jyotirlinga.templeId}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
                className="bg-spiritual-ivory rounded-lg overflow-hidden shadow-md transition-all duration-300 cursor-pointer"
                onClick={() => navigate(`/temple/${jyotirlinga.templeId}`)}
              >
                <div className="h-56 relative overflow-hidden bg-spiritual-maroon/10">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="relative w-24 h-32">
                      {/* Stylized temple icon */}
                      <div className="absolute inset-0 bg-spiritual-gold/30 rounded-t-xl"></div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-t-full bg-spiritual-ochre/40"></div>
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-spiritual-maroon/30"></div>
                      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center text-spiritual-maroon font-bold">
                        ॐ
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-4 text-white">
                    <h3 className="font-cinzel font-bold text-xl">{jyotirlinga.name}</h3>
                    <p className="text-sm opacity-90">{jyotirlinga.location}</p>
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-spiritual-saffron/10 text-spiritual-maroon font-medium text-xs px-3 py-1 rounded-full">
                      Jyotirlinga
                    </span>
                  </div>
                  
                  <Link 
                    to={`/temple/${jyotirlinga.templeId}`}
                    className="mt-2 inline-flex items-center text-spiritual-ochre hover:text-spiritual-saffron"
                  >
                    <span>Explore</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-spiritual-maroon/5 to-spiritual-saffron/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-spiritual-maroon">Our Services</h2>
            <p className="mt-3 text-spiritual-maroon/70">Enhancing your spiritual journey with convenient solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Online Darshan Booking", 
                description: "Skip the queues with pre-booked temple visits",
                link: "/temples",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 10V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 10H3L12 3L21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: "Puja & Archana Services", 
                description: "Arrange religious ceremonies remotely",
                link: "/puja-booking",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 7.5C12 9.5 10.5 11 8.5 11C6.5 11 5 9.5 5 7.5C5 5.5 6.5 4 8.5 4C10.5 4 12 5.5 12 7.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.5 14C5.46243 14 3 16.4624 3 19.5V20H14V19.5C14 16.4624 11.5376 14 8.5 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 11L19 13L21 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 13V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: "Prasad Delivery", 
                description: "Receive blessed offerings at your doorstep",
                link: "/prasad-booking",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: "Stay Bookings", 
                description: "Find accommodations near spiritual sites",
                link: "/stay-bookings",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 21V7L13 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13 21V12H19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 9H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 13H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 17H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-spiritual-saffron mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-cinzel font-bold text-spiritual-maroon mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to={service.link} className="text-spiritual-ochre hover:text-spiritual-maroon transition-colors font-medium">
                  Learn more →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call To Action */}
      <section className="py-16 bg-gradient-to-r from-spiritual-maroon to-spiritual-ochre text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold mb-6">Begin Your Spiritual Journey Today</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">TempleConnect brings ancient traditions and modern convenience together, making your spiritual journey seamless and memorable.</p>
          <Link to="/jyotirlingas" className="px-8 py-3 bg-white text-spiritual-maroon rounded-lg font-medium shadow-lg hover:bg-spiritual-ivory transition-colors duration-300">
            Explore Jyotirlingas
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
