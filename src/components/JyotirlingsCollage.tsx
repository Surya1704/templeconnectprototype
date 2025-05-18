
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

// Define the jyotirlinga data structure
interface JyotirlingaItem {
  id: string;
  name: string;
  location: string;
  position: {
    top: string;
    left: string;
    width: string;
    height: string;
    zIndex: number;
    rotate?: string;
    transform?: string;
  };
  path: string;
  image: string;
}

// Jyotirlinga data for the collage
const jyotirlingsData: JyotirlingaItem[] = [
  {
    id: "somnath",
    name: "Somnath",
    location: "Gujarat",
    position: {
      top: "5%",
      left: "10%",
      width: "25%",
      height: "30%",
      zIndex: 5,
      rotate: "-2deg"
    },
    path: "/jyotirlingas/somnath",
    image: "/lovable-uploads/127d558a-d34f-4432-858b-dd4edd79280e.png"
  },
  {
    id: "mallikarjuna",
    name: "Mallikarjuna",
    location: "Andhra Pradesh",
    position: {
      top: "15%",
      left: "38%",
      width: "25%",
      height: "35%",
      zIndex: 3,
      rotate: "1deg"
    },
    path: "/jyotirlingas/mallikarjuna",
    image: "/lovable-uploads/0aa1be60-fc0f-45e0-9ec7-4a331f3dcee1.png"
  },
  {
    id: "mahakaleshwar",
    name: "Mahakaleshwar",
    location: "Madhya Pradesh",
    position: {
      top: "10%",
      left: "70%",
      width: "22%",
      height: "30%",
      zIndex: 6,
      rotate: "3deg"
    },
    path: "/jyotirlingas/mahakaleshwar",
    image: "/lovable-uploads/4c3fd48a-4feb-4ae6-86e1-402971d9cbf8.png"
  },
  {
    id: "omkareshwar",
    name: "Omkareshwar",
    location: "Madhya Pradesh",
    position: {
      top: "42%",
      left: "5%",
      width: "24%",
      height: "28%",
      zIndex: 4,
      rotate: "-1deg"
    },
    path: "/jyotirlingas/omkareshwar",
    image: "/lovable-uploads/b5d1a6be-dfa2-40e6-8a33-4ec607278013.png"
  },
  {
    id: "kedarnath",
    name: "Kedarnath",
    location: "Uttarakhand",
    position: {
      top: "25%",
      left: "45%",
      width: "25%",
      height: "35%",
      zIndex: 2,
      rotate: "1deg"
    },
    path: "/jyotirlingas/kedarnath",
    image: "/lovable-uploads/3f5e1ac4-fefe-403b-989a-c8b9bc43f356.png"
  },
  {
    id: "bhimashankar",
    name: "Bhimashankar",
    location: "Maharashtra",
    position: {
      top: "42%",
      left: "65%",
      width: "30%",
      height: "30%",
      zIndex: 3,
      rotate: "-2deg"
    },
    path: "/jyotirlingas/bhimashankar",
    image: "/lovable-uploads/3e33b4bd-dd72-46c6-a56c-5ef6f9e88bad.png"
  },
  {
    id: "kashi-vishwanath",
    name: "Kashi Vishwanath",
    location: "Uttar Pradesh",
    position: {
      top: "65%",
      left: "10%",
      width: "26%",
      height: "35%",
      zIndex: 8,
    },
    path: "/jyotirlingas/kashi-vishwanath",
    image: "/lovable-uploads/e72f493c-9008-468f-9b12-90b58a945398.png"
  },
  {
    id: "trimbakeshwar",
    name: "Trimbakeshwar",
    location: "Maharashtra",
    position: {
      top: "70%",
      left: "38%",
      width: "24%",
      height: "28%",
      zIndex: 7,
      rotate: "2deg"
    },
    path: "/jyotirlingas/trimbakeshwar",
    image: "/lovable-uploads/2ebefee1-c630-49b1-a433-7a7ae77c6683.png"
  },
  {
    id: "vaidyanath",
    name: "Vaidyanath",
    location: "Jharkhand",
    position: {
      top: "50%",
      left: "35%",
      width: "22%",
      height: "25%",
      zIndex: 10,
      transform: "translateY(-10px)"
    },
    path: "/jyotirlingas/vaidyanath",
    image: "/lovable-uploads/3b0f9fb1-8f3e-40c1-973e-1ba67b15e7eb.png"
  },
  {
    id: "nageshwar",
    name: "Nageshwar",
    location: "Gujarat",
    position: {
      top: "30%",
      left: "22%",
      width: "24%",
      height: "32%",
      zIndex: 9,
      rotate: "-1deg"
    },
    path: "/jyotirlingas/nageshwar",
    image: "/lovable-uploads/9134455b-48bc-4ef2-a3aa-3d6d5349967b.png"
  },
  {
    id: "rameshwaram",
    name: "Rameshwaram",
    location: "Tamil Nadu",
    position: {
      top: "65%",
      left: "68%",
      width: "25%",
      height: "32%",
      zIndex: 8,
      rotate: "1deg"
    },
    path: "/jyotirlingas/rameshwaram",
    image: "/lovable-uploads/fb4b3306-65cb-4755-b087-ac2fa92e2f21.png"
  },
  {
    id: "grishneshwar",
    name: "Grishneshwar",
    location: "Maharashtra",
    position: {
      top: "58%",
      left: "5%",
      width: "22%",
      height: "30%",
      zIndex: 5,
      rotate: "2deg"
    },
    path: "/jyotirlingas/grishneshwar",
    image: "/lovable-uploads/dcb523bf-24f7-4125-8e87-b23cfd0fa61d.png"
  }
];

const JyotirlingsCollage: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const isMobile = useIsMobile();
  
  const handleInteraction = (id: string, action: 'enter' | 'leave') => {
    if (action === 'enter') {
      setHoveredItem(id);
    } else if (action === 'leave') {
      setHoveredItem(null);
    }
  };

  return (
    <div className="relative w-full h-[90vh] md:h-[80vh] overflow-hidden rounded-xl">
      {/* Full-page Sanskrit background texture - now applied evenly across the entire background */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundImage: "url('/assets/patterns/sanskrit-bg.png')", 
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
          opacity: 0.08  // Lowered opacity for subtle effect
        }}
      />
      
      {/* Sanskrit text overlay layer - maintains the text effect throughout the collage */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-x-32 gap-y-32 opacity-5">
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="text-7xl md:text-9xl font-cinzel text-spiritual-ochre font-bold transform rotate-12 select-none">
              ॐ नमः शिवाय
            </div>
          ))}
        </div>
      </div>
      
      {/* Title with Devanagari-inspired font */}
      <div className="absolute top-4 left-0 right-0 z-20 text-center">
        <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-spiritual-maroon">
          The 12 Jyotirlingas of India
        </h2>
      </div>
      
      {/* Jyotirlinga items - removed white card elements */}
      {jyotirlingsData.map((jyotirlinga) => (
        <motion.div
          key={jyotirlinga.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: Math.random() * 0.5 }}
          className="absolute cursor-pointer"
          style={{
            top: jyotirlinga.position.top,
            left: jyotirlinga.position.left,
            width: jyotirlinga.position.width,
            height: jyotirlinga.position.height,
            zIndex: jyotirlinga.position.zIndex,
            transform: `rotate(${jyotirlinga.position.rotate || '0deg'}) ${jyotirlinga.position.transform || ''}`,
          }}
          onClick={() => navigate(jyotirlinga.path)}
          onMouseEnter={() => !isMobile && handleInteraction(jyotirlinga.id, 'enter')}
          onMouseLeave={() => !isMobile && handleInteraction(jyotirlinga.id, 'leave')}
          onTouchStart={() => isMobile && handleInteraction(jyotirlinga.id, 'enter')}
          onTouchEnd={() => isMobile && setTimeout(() => handleInteraction(jyotirlinga.id, 'leave'), 1500)}
          whileHover={{ scale: 1.05, zIndex: 20, transition: { duration: 0.3 } }}
        >
          {/* Direct temple image without any card or border */}
          <div className="w-full h-full relative z-10 overflow-hidden">
            <img 
              src={jyotirlinga.image} 
              alt={jyotirlinga.name} 
              className="w-full h-full object-contain"
              style={{ filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2))" }} // Subtle shadow for depth
            />
          </div>
          
          {/* Hover overlay with temple name and location */}
          <motion.div 
            className={cn(
              "absolute bottom-0 left-0 right-0 p-3 text-center",
              "bg-gradient-to-t from-black/70 to-transparent rounded-md backdrop-blur-sm",
              "transform transition-all duration-300",
              hoveredItem === jyotirlinga.id ? "opacity-100" : "opacity-0"
            )}
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: hoveredItem === jyotirlinga.id ? 1 : 0,
              y: hoveredItem === jyotirlinga.id ? 0 : 10
            }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="font-cinzel text-lg font-bold text-white">{jyotirlinga.name}</h3>
            <p className="text-xs text-white/80 font-cinzel">{jyotirlinga.location}</p>
          </motion.div>
        </motion.div>
      ))}
      
      {/* Subtle decorative elements for depth and richness */}
      <div className="absolute top-5 left-5 w-40 h-40 rounded-full bg-spiritual-gold/5 blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-spiritual-maroon/5 blur-3xl"></div>
    </div>
  );
};

export default JyotirlingsCollage;
