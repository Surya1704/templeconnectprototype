import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import ImageWithFallback from "./ImageWithFallback";

// Define the jyotirlinga data structure
interface JyotirlingsCollageItem {
  id: string;
  name: string;
  description: string;
  position: {
    top: string;
    left: string;
    width: string;
    height: string;
    zIndex: number;
    rotate?: string;
  };
  templeId: string; // Numeric ID to directly link to the correct temple
  imageSrc: string;
}

// Updated data for the 12 Jyotirlingas with correct temple IDs
const jyotirlingsData: JyotirlingsCollageItem[] = [
  {
    id: "jyotirlinga-1",
    name: "Somnath",
    description: "First among the twelve Jyotirlingas",
    position: {
      top: "5%",
      left: "10%",
      width: "25%",
      height: "35%",
      zIndex: 2,
      rotate: "-2deg"
    },
    templeId: "24", // Correct numeric ID for Somnath
    imageSrc: "/lovable-uploads/006968a1-560a-479d-8493-50f8639dce12.png"
  },
  {
    id: "jyotirlinga-2",
    name: "Rameshwaram",
    description: "Located at the southern tip of India with significant connection to Ramayana",
    position: {
      top: "15%",
      left: "38%",
      width: "30%",
      height: "40%",
      zIndex: 3,
    },
    templeId: "25", // Correct numeric ID for Rameshwaram
    imageSrc: "/lovable-uploads/c868ae47-1318-4239-9e0b-8e11ffd2ab53.png"
  },
  {
    id: "jyotirlinga-3",
    name: "Mahakaleshwar",
    description: "Situated in Ujjain, Madhya Pradesh",
    position: {
      top: "10%",
      left: "70%",
      width: "22%",
      height: "30%",
      zIndex: 1,
      rotate: "3deg"
    },
    templeId: "26", // Correct numeric ID for Mahakaleshwar
    imageSrc: "/lovable-uploads/b668b893-dac5-4d67-9be0-425045941429.png"
  },
  {
    id: "jyotirlinga-4",
    name: "Omkareshwar",
    description: "Located on an island in Narmada river",
    position: {
      top: "42%",
      left: "5%",
      width: "28%",
      height: "38%",
      zIndex: 4,
      rotate: "-1deg"
    },
    templeId: "27", // Correct numeric ID for Omkareshwar
    imageSrc: "/lovable-uploads/bff90acf-434f-4b5d-a02a-f8cd060e2ec9.png"
  },
  {
    id: "jyotirlinga-5",
    name: "Kedarnath",
    description: "Located in the Himalayan ranges",
    position: {
      top: "50%",
      left: "35%",
      width: "25%",
      height: "35%",
      zIndex: 2,
      rotate: "1deg"
    },
    templeId: "28", // Correct numeric ID for Kedarnath
    imageSrc: "/lovable-uploads/8a415d87-63d9-44f9-bb8e-583856ad0fa5.png"
  },
  {
    id: "jyotirlinga-6",
    name: "Bhimashankar",
    description: "Located in Maharashtra",
    position: {
      top: "45%",
      left: "65%",
      width: "30%",
      height: "42%",
      zIndex: 3,
      rotate: "-2deg"
    },
    templeId: "29", // Correct numeric ID for Bhimashankar
    imageSrc: "/lovable-uploads/bed64bd3-3688-44d2-9bad-a6918b67c9a6.png"
  },
  {
    id: "jyotirlinga-7",
    name: "Kashi Vishwanath",
    description: "Located in Varanasi",
    position: {
      top: "75%",
      left: "20%",
      width: "26%",
      height: "35%",
      zIndex: 5,
    },
    templeId: "30", // Correct numeric ID for Kashi Vishwanath
    imageSrc: "/lovable-uploads/ea8558eb-ef06-4c98-8f0c-23095bb29074.png"
  },
  {
    id: "jyotirlinga-8",
    name: "Trimbakeshwar",
    description: "Located near Nashik, Maharashtra",
    position: {
      top: "70%",
      left: "50%",
      width: "28%",
      height: "38%",
      zIndex: 1,
      rotate: "2deg"
    },
    templeId: "31", // Correct numeric ID for Trimbakeshwar
    imageSrc: "/lovable-uploads/3c73bbb4-d8d9-439c-bac6-16dfc1940d71.png"
  },
  {
    id: "jyotirlinga-9",
    name: "Vaidyanath",
    description: "Located in Deoghar, Jharkhand",
    position: {
      top: "25%",
      left: "20%",
      width: "24%",
      height: "33%",
      zIndex: 2,
      rotate: "1deg"
    },
    templeId: "32", // Correct numeric ID for Vaidyanath
    imageSrc: "/lovable-uploads/3e630441-b218-447f-a772-6d16110739b2.png"
  },
  {
    id: "jyotirlinga-10",
    name: "Nageshwar",
    description: "Located in Dwarka, Gujarat",
    position: {
      top: "30%",
      left: "55%",
      width: "25%",
      height: "34%",
      zIndex: 4,
      rotate: "-1.5deg"
    },
    templeId: "33", // Correct numeric ID for Nageshwar
    imageSrc: "/lovable-uploads/f6e17f2f-fd67-45c1-8f9b-bdd05ef346ce.png"
  },
  {
    id: "jyotirlinga-11",
    name: "Mallikarjuna",
    description: "Located on Sri Sailam mountain, one of the 12 Jyotirlingas",
    position: {
      top: "60%",
      left: "10%",
      width: "27%",
      height: "36%",
      zIndex: 3,
    },
    templeId: "34", // Correct numeric ID for Mallikarjuna
    imageSrc: "/lovable-uploads/b27d0b3a-4090-4b23-804a-b569ee1c971b.png"
  },
  {
    id: "jyotirlinga-12",
    name: "Grishneshwar",
    description: "Located near Ellora caves, Maharashtra",
    position: {
      top: "60%",
      left: "70%",
      width: "25%",
      height: "35%",
      zIndex: 2,
      rotate: "2deg"
    },
    templeId: "35", // Correct numeric ID for Grishneshwar
    imageSrc: "/lovable-uploads/55fb5f1f-b855-4295-a028-e2385fe97d48.png"
  }
];

const JyotirlingsCollage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[90vh] overflow-hidden bg-gradient-to-b from-spiritual-saffron/30 via-spiritual-ochre/30 to-spiritual-maroon/20 rounded-xl">
      {jyotirlingsData.map((jyotirlinga) => (
        <motion.div
          key={jyotirlinga.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: Math.random() * 0.5 }}
          className="absolute cursor-pointer group"
          style={{
            top: jyotirlinga.position.top,
            left: jyotirlinga.position.left,
            width: jyotirlinga.position.width,
            height: jyotirlinga.position.height,
            zIndex: jyotirlinga.position.zIndex,
            transform: jyotirlinga.position.rotate ? `rotate(${jyotirlinga.position.rotate})` : 'none'
          }}
          onClick={() => navigate(`/temple/${jyotirlinga.templeId}`)} // Use the correct templeId directly
          whileHover={{ scale: 1.05, zIndex: 10, transition: { duration: 0.3 } }}
        >
          <div className={cn(
            "w-full h-full rounded-lg overflow-hidden border-4 border-spiritual-gold/40 shadow-lg",
            "transition-all duration-300 group-hover:border-spiritual-gold group-hover:shadow-2xl"
          )}>
            {/* Temple image */}
            <div className="w-full h-full relative">
              {/* Fallback temple icon if image fails to load */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-spiritual-sandstone to-spiritual-ivory">
                <div className="w-16 h-20 relative">
                  <div className="absolute inset-0 bg-spiritual-ochre/50 rounded-t-2xl"></div>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-12 h-12 rounded-t-full bg-spiritual-maroon/40"></div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 w-5 h-5 rounded-full bg-spiritual-gold/60"></div>
                </div>
              </div>
              
              {/* Actual temple image */}
              <ImageWithFallback 
                src={jyotirlinga.imageSrc} 
                alt={`${jyotirlinga.name} Temple`} 
                className="absolute inset-0 w-full h-full object-cover"
                fallbackSrc="/placeholder.svg"
              />
              
              {/* Overlay with temple name */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-center justify-end p-3">
                <h3 className="font-cinzel text-lg font-bold text-white mb-1 drop-shadow-sm">
                  {jyotirlinga.name}
                </h3>
                
                <p className="text-xs font-sans text-white/90 mb-2">
                  {jyotirlinga.description}
                </p>
                
                <div className="opacity-100 transition-opacity duration-300">
                  <span className="text-xs px-2 py-1 bg-spiritual-gold/30 rounded-full text-white font-medium">
                    Explore Now
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
      
      {/* Decorative elements */}
      <div className="absolute top-5 left-5 w-40 h-40 rounded-full bg-spiritual-gold/5 blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-spiritual-maroon/5 blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-spiritual-ochre/5 blur-xl"></div>
      
      {/* Animated particle effect for divine ambiance */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-spiritual-gold/40"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center">
        <motion.p 
          className="text-spiritual-maroon/70 text-sm mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
        
        </motion.p>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5L12 19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-spiritual-maroon/60"/>
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default JyotirlingsCollage;
