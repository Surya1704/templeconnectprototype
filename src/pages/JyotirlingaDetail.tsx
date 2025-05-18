
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Jyotirlinga data
const jyotirlingaData = [
  {
    slug: "somnath",
    name: "Somnath Temple",
    location: "Gujarat",
    description: "Somnath Temple, also called Somanātha temple or Deo Patan, is a Hindu temple located in Prabhas Patan, Gujarat. It is one of the most sacred pilgrimage sites for Hindus and is believed to be the first among the twelve jyotirlinga shrines of Shiva.",
    image: "/assets/temples/somnath-temple.png"
  },
  {
    slug: "mallikarjuna",
    name: "Mallikarjuna Temple",
    location: "Andhra Pradesh",
    description: "Mallikarjuna Temple, also referred to as Srisailam Temple, is a Hindu temple dedicated to the deity Shiva located in Srisailam, Andhra Pradesh. It is significant as one of the twelve jyotirlingas, and one of the eighteen Maha Shakti Peethas.",
    image: "/assets/temples/mallikarjuna-temple.png"
  },
  {
    slug: "mahakaleshwar",
    name: "Mahakaleshwar Temple",
    location: "Madhya Pradesh",
    description: "Mahakaleshwar Jyotirlinga is one of the most famous Hindu temples dedicated to Lord Shiva and is one of the twelve Jyotirlingas. It is located in the ancient city of Ujjain in Madhya Pradesh.",
    image: "/assets/temples/mahakaleshwar-temple.png"
  },
  {
    slug: "omkareshwar",
    name: "Omkareshwar Temple",
    location: "Madhya Pradesh",
    description: "Omkareshwar is a Hindu temple dedicated to God Shiva. It is one of the 12 revered Jyotirlinga shrines of Shiva. It is on an island called Mandhata or Shivapuri in the Narmada river at Khandwa district in Madhya Pradesh.",
    image: "/assets/temples/omkareshwar-temple.png"
  },
  {
    slug: "kedarnath",
    name: "Kedarnath Temple",
    location: "Uttarakhand",
    description: "Kedarnath Temple is a Hindu temple dedicated to Lord Shiva. It is on the Garhwal Himalayan range near the Mandakini river, in the state of Uttarakhand. Due to extreme weather conditions, the temple is open to the general public only between the months of April and November.",
    image: "/assets/temples/kedarnath-temple.png"
  },
  {
    slug: "bhimashankar",
    name: "Bhimashankar Temple",
    location: "Maharashtra",
    description: "Bhimashankar Temple is a Jyotirlinga shrine located in the Sahyadri region of Maharashtra. It is situated in the village of Bhorgiri, 50 km northwest of Khed, in Pune district.",
    image: "/assets/temples/bhimashankar-temple.png"
  },
  {
    slug: "kashi-vishwanath",
    name: "Kashi Vishwanath Temple",
    location: "Uttar Pradesh",
    description: "The Kashi Vishwanath Temple is one of the most famous Hindu temples dedicated to Lord Shiva. It is located in Vishwanath Gali of Varanasi, Uttar Pradesh. The temple stands on the western bank of the holy river Ganga.",
    image: "/assets/temples/kashi-vishwanath.png"
  },
  {
    slug: "trimbakeshwar",
    name: "Trimbakeshwar Temple",
    location: "Maharashtra",
    description: "Trimbakeshwar Shiva Temple is an ancient Hindu temple in the town of Trimbak, in the Nashik District of Maharashtra. It is dedicated to the god Shiva and is one of the twelve Jyotirlingas where the Hindu genealogy registers at Trimbakeshwar, Maharashtra are kept.",
    image: "/assets/temples/trimbakeshwar-temple.png"
  },
  {
    slug: "vaidyanath",
    name: "Vaidyanath Temple",
    location: "Jharkhand",
    description: "Vaidyanath Temple, also known as Baba Baidyanath Dham, is one of the twelve Jyotirlingas, the most sacred abodes of Shiva. It is located in Deoghar in the Santhal Parganas division of Jharkhand.",
    image: "/assets/temples/vaidyanath-temple.png"
  },
  {
    slug: "nageshwar",
    name: "Nageshwar Temple",
    location: "Gujarat",
    description: "The Nageshwar Jyotirlinga Temple, also known as Nagnath Temple, is one of the 12 Jyotirlinga shrines mentioned in the Shiva Purana. It is located on the route between Gomati Dwarka and the Bait Dwarka Island in Gujarat.",
    image: "/assets/temples/nageshwar-temple.png"
  },
  {
    slug: "rameshwaram",
    name: "Rameshwaram Temple",
    location: "Tamil Nadu",
    description: "Ramanathaswamy Temple is a Hindu temple dedicated to the god Shiva located on Rameswaram island in the state of Tamil Nadu. It is also one of the twelve Jyotirlinga temples, and is thus one of the most sacred shrines of Shiva.",
    image: "/assets/temples/rameshwaram-temple.png"
  },
  {
    slug: "grishneshwar",
    name: "Grishneshwar Temple",
    location: "Maharashtra",
    description: "Grishneshwar, also known as Grushneshwar or Ghushmeshwar, is a revered shrine dedicated to Lord Shiva. It is one of the twelve Jyotirlinga shrines mentioned in the Shiva Purana. The temple is located near Ellora in Maharashtra.",
    image: "/assets/temples/grishneshwar-temple.png"
  }
];

const JyotirlingaDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const jyotirlinga = jyotirlingaData.find(j => j.slug === slug);
  
  if (!jyotirlinga) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-cinzel font-bold text-spiritual-maroon mb-6">Jyotirlinga Not Found</h1>
        <p className="mb-6">Sorry, the requested Jyotirlinga information could not be found.</p>
        <Button onClick={() => navigate('/')} className="bg-spiritual-saffron hover:bg-spiritual-ochre text-white">
          Return to Home
        </Button>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-spiritual-ivory/20 to-white">
      {/* Hero section */}
      <div className="relative h-[40vh] md:h-[50vh] bg-spiritual-maroon/80 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${jyotirlinga.image})` }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-spiritual-maroon/90 to-transparent"></div>
        
        <div className="container mx-auto px-4 h-full flex items-end pb-12 relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cinzel font-bold text-white mb-2">
              {jyotirlinga.name}
            </h1>
            <p className="text-xl text-white/90">
              {jyotirlinga.location}
            </p>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-md p-6 mb-6"
            >
              <h2 className="text-2xl font-cinzel font-bold text-spiritual-maroon mb-4">About {jyotirlinga.name}</h2>
              <p className="text-lg text-spiritual-maroon/80">{jyotirlinga.description}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h2 className="text-2xl font-cinzel font-bold text-spiritual-maroon mb-4">Religious Significance</h2>
              <p className="text-lg text-spiritual-maroon/80">
                As one of the twelve sacred Jyotirlingas, {jyotirlinga.name} holds immense religious significance for devotees of Lord Shiva.
                The Jyotirlinga represents the infinite nature of Shiva, described in the Shiva Purana.
                Pilgrims from across India and beyond visit this sacred site to seek blessings and spiritual enlightenment.
              </p>
            </motion.div>
          </div>
          
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-md p-6 mb-6"
            >
              <img 
                src={jyotirlinga.image} 
                alt={jyotirlinga.name} 
                className="w-full h-auto rounded-lg mb-4"
              />
              
              <div className="flex flex-col space-y-4">
                <Button className="bg-spiritual-saffron hover:bg-spiritual-ochre text-white">
                  Book Puja Online
                </Button>
                
                <Button variant="outline" className="border-spiritual-maroon text-spiritual-maroon hover:bg-spiritual-maroon/5">
                  Plan Your Visit
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-spiritual-ivory rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-cinzel font-bold text-spiritual-maroon mb-3">Visit Information</h3>
              
              <div className="space-y-3 text-spiritual-maroon/80">
                <div className="flex justify-between">
                  <span className="font-medium">Best Time to Visit:</span>
                  <span>October to March</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="font-medium">Daily Darshan:</span>
                  <span>5:00 AM - 9:00 PM</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="font-medium">Special Pujas:</span>
                  <span>Mondays & Festivals</span>
                </div>
                
                <div className="border-t border-spiritual-maroon/20 pt-3 mt-3">
                  <Button variant="link" className="p-0 h-auto text-spiritual-ochre hover:text-spiritual-maroon">
                    Download Complete Guide
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-cinzel font-bold text-spiritual-maroon mb-6">Explore Other Jyotirlingas</h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {jyotirlingaData
              .filter(j => j.slug !== slug)
              .slice(0, 6)
              .map((j) => (
                <motion.div
                  key={j.slug}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                  onClick={() => navigate(`/jyotirlingas/${j.slug}`)}
                >
                  <div className="bg-white rounded-full p-1 border-2 border-spiritual-saffron/30 shadow-md">
                    <img 
                      src={j.image} 
                      alt={j.name} 
                      className="w-16 h-16 object-cover rounded-full"
                    />
                  </div>
                  <div className="mt-2 text-sm font-medium text-spiritual-maroon">{j.name.split(' ')[0]}</div>
                </motion.div>
              ))
            }
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => navigate('/')}
            >
              <div className="bg-spiritual-saffron/10 rounded-full p-1 border-2 border-spiritual-saffron/30 shadow-md flex items-center justify-center w-[72px] h-[72px]">
                <span className="text-2xl text-spiritual-saffron">+</span>
              </div>
              <div className="mt-2 text-sm font-medium text-spiritual-maroon">View All</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JyotirlingaDetail;
