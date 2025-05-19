
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import TempleCollage from "@/components/TempleCollage";
import { allTemples } from "@/data/mergeTemples";

const Home = () => {
  const navigate = useNavigate();
  const featuredTemples = allTemples.slice(0, 6);
  
  // Temple data with proper image paths
  const templeData = [
    { name: "Golden Temple", image: "/public/assets/temples/golden-temple.png", slug: "golden-temple", location: "Amritsar, Punjab" },
    { name: "Meenakshi Temple", image: "/public/assets/temples/meenakshi-temple.png", slug: "meenakshi-temple", location: "Madurai, Tamil Nadu" },
    { name: "Kedarnath", image: "/public/assets/temples/kedarnath-temple.png", slug: "kedarnath", location: "Uttarakhand" },
    { name: "Jagannath Puri", image: "/public/assets/temples/jagannath-puri.png", slug: "jagannath-puri", location: "Odisha" },
    { name: "Kashi Vishwanath", image: "/public/assets/temples/kashi-vishwanath.png", slug: "kashi-vishwanath", location: "Varanasi, Uttar Pradesh" },
    { name: "Tirupati Balaji", image: "/public/assets/temples/tirupati-balaji.png", slug: "tirupati-balaji", location: "Andhra Pradesh" },
    { name: "Badrinath", image: "/public/assets/temples/badrinath-temple.png", slug: "badrinath", location: "Uttarakhand" },
    { name: "Brihadeeswara", image: "/public/assets/temples/brihadeeswara-temple.png", slug: "brihadeeswara", location: "Thanjavur, Tamil Nadu" },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero section */}
      <section className="relative bg-gradient-to-b from-spiritual-sandstone/20 to-spiritual-ivory/30 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTQgMjRjMCAxNC40LTExLjYgMjYtMjYgMjZTMiAzOC40IDIgMjRDMiA5LjYgMTMuNiAtMiAyOCAtMnMyNiAxMS42IDI2IDI2eiIgZmlsbD0iI2M3NWIxYiIgZmlsbC1vcGFjaXR5PSIwLjAzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] opacity-30" />
        </motion.div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-cinzel font-bold text-spiritual-maroon mb-6"
            >
              Connect with<br />
              <span className="text-spiritual-ochre">Sacred India</span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-spiritual-maroon/80 mb-8"
            >
              Discover temples, book darshan, order prasad, and<br className="hidden md:block" />
              connect with spiritual traditions seamlessly
            </motion.p>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Link to="/temples" className="px-8 py-3 bg-spiritual-saffron text-white rounded-lg font-medium shadow-lg hover:bg-spiritual-ochre transition-colors duration-300">
                Find Temples
              </Link>
              
              <Link to="/puja-booking" className="px-8 py-3 bg-white text-spiritual-maroon border border-spiritual-maroon/30 rounded-lg font-medium shadow-sm hover:bg-spiritual-maroon hover:text-white transition-colors duration-300">
                Book Puja Online
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Temple Collage Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-spiritual-ivory/10 to-spiritual-sandstone/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-spiritual-maroon">Discover Sacred Temples</h2>
            <p className="mt-3 text-spiritual-maroon/70">Explore India's divine destinations with our interactive temple gallery</p>
          </div>
          
          <div className="relative">
            <TempleCollage />
          </div>
        </div>
      </section>

      {/* Featured Temples Section with Real PNG Images */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-spiritual-maroon">Featured Temples</h2>
            <p className="mt-3 text-spiritual-maroon/70">Explore some of our most beloved spiritual destinations</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {templeData.map((temple, index) => (
              <motion.div
                key={temple.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
                className="bg-spiritual-ivory rounded-lg overflow-hidden shadow-md transition-all duration-300 cursor-pointer"
                onClick={() => navigate(`/temples/${temple.slug}`)}
              >
                <div className="h-56 relative overflow-hidden bg-spiritual-sandstone/30">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <img 
                      src={temple.image} 
                      alt={temple.name} 
                      className="object-contain max-h-full max-w-full"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-4 text-white">
                    <h3 className="font-cinzel font-bold text-xl">{temple.name}</h3>
                    <p className="text-sm opacity-90">{temple.location}</p>
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-spiritual-saffron/10 text-spiritual-maroon font-medium text-xs px-3 py-1 rounded-full">
                      Sacred Site
                    </span>
                  </div>
                  
                  <Link 
                    to={`/temples/${temple.slug}`}
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
                    <path d="M12 14C8.68629 14 6 11.3137 6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8C18 11.3137 15.3137 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 14V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 18H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
                title: "Temple Stay Bookings", 
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
      
      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-spiritual-maroon">Devotee Stories</h2>
            <p className="mt-3 text-spiritual-maroon/70">Hear from pilgrims who've used TempleConnect</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Radha Sharma",
                location: "Mumbai",
                quote: "TempleConnect made our family pilgrimage to Varanasi so much smoother. We booked all our temple visits in advance and avoided the long queues."
              },
              {
                name: "Karthik Iyer",
                location: "Bangalore",
                quote: "I was able to arrange a special puja for my parents' anniversary at Tirupati Temple from abroad. The service was excellent and they sent me videos of the ceremony."
              },
              {
                name: "Anjali Patel",
                location: "Ahmedabad",
                quote: "The prasad delivery service is a blessing for my elderly parents who can't travel easily. They receive authentic temple prasad regularly."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-spiritual-ivory p-6 rounded-lg"
              >
                <div className="text-spiritual-saffron mb-4">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 11H6C5.44772 11 5 10.5523 5 10V6C5 5.44772 5.44772 5 6 5H10C10.5523 5 11 5.44772 11 6V10C11 10.5523 10.5523 11 10 11Z" fill="currentColor"/>
                    <path d="M18 11H14C13.4477 11 13 10.5523 13 10V6C13 5.44772 13.4477 5 14 5H18C18.5523 5 19 5.44772 19 6V10C19 10.5523 18.5523 11 18 11Z" fill="currentColor"/>
                    <path d="M10 19H6C5.44772 19 5 18.5523 5 18V14C5 13.4477 5.44772 13 6 13H10C10.5523 13 11 13.4477 11 14V18C11 18.5523 10.5523 19 10 19Z" fill="currentColor"/>
                    <path d="M18 19H14C13.4477 19 13 18.5523 13 18V14C13 13.4477 13.4477 13 14 13H18C18.5523 13 19 13.4477 19 14V18C19 18.5523 18.5523 19 18 19Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="italic text-gray-600 mb-4">{testimonial.quote}</p>
                <div className="font-medium text-spiritual-maroon">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.location}</div>
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
          <Link to="/temples" className="px-8 py-3 bg-white text-spiritual-maroon rounded-lg font-medium shadow-lg hover:bg-spiritual-ivory transition-colors duration-300">
            Explore Temples
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
