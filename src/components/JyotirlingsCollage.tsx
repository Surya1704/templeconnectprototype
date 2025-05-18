
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

// Corrected Jyotirlinga data with positions and proper image assignments
// Based on the user's file reference
const jyotirlingsData: JyotirlingaItem[] = [
  {
    id: "somnath",
    name: "Somnath",
    location: "Gujarat",
    position: {
      top: "2%",
      left: "5%",
      width: "32%",
      height: "36%",
      zIndex: 12,
      rotate: "-1deg"
    },
    path: "/jyotirlingas/somnath",
    image: "/lovable-uploads/adc13ff4-6e68-4df2-aa6c-ba386b70fcc9.png" // Updated to somnath image
  },
  {
    id: "rameshwaram",
    name: "Rameshwaram",
    location: "Tamil Nadu",
    position: {
      top: "4%",
      left: "38%",
      width: "30%",
      height: "38%",
      zIndex: 10,
      rotate: "1deg"
    },
    path: "/jyotirlingas/rameshwaram",
    image: "/lovable-uploads/28a331ad-d3c0-4157-8b9a-32af5d26e785.png" // Updated to rameshwaram image
  },
  {
    id: "mallikarjuna",
    name: "Mallikarjuna",
    location: "Andhra Pradesh",
    position: {
      top: "5%",
      left: "72%",
      width: "26%",
      height: "34%",
      zIndex: 9,
      rotate: "-1.5deg"
    },
    path: "/jyotirlingas/mallikarjuna",
    image: "/lovable-uploads/79f0f7ee-07d3-44a6-a1b9-3e35e6530e64.png" // Updated to mallikarjuna image
  },
  {
    id: "mahakaleshwar",
    name: "Mahakaleshwar",
    location: "Madhya Pradesh",
    position: {
      top: "35%",
      left: "5%",
      width: "28%",
      height: "34%",
      zIndex: 8,
      rotate: "1deg"
    },
    path: "/jyotirlingas/mahakaleshwar",
    image: "/lovable-uploads/8954a8b9-9631-4a12-8bbb-02d9615d4c76.png" // Updated to mahakaleshwar image
  },
  {
    id: "nageshwar",
    name: "Nageshwar",
    location: "Gujarat",
    position: {
      top: "32%",
      left: "38%",
      width: "27%",
      height: "33%",
      zIndex: 11,
      rotate: "-1deg"
    },
    path: "/jyotirlingas/nageshwar",
    image: "/lovable-uploads/ea3c8734-1903-4391-bad2-38836ad90d38.png" // Updated to nageshwar image
  },
  {
    id: "kedarnath",
    name: "Kedarnath",
    location: "Uttarakhand",
    position: {
      top: "28%",
      left: "70%",
      width: "28%",
      height: "36%",
      zIndex: 13,
      rotate: "1.5deg"
    },
    path: "/jyotirlingas/kedarnath",
    image: "/lovable-uploads/3da3fd53-32f9-4f5c-b8bf-c1bd7ce55182.png" // Updated to kedarnath image
  },
  {
    id: "omkareshwar",
    name: "Omkareshwar",
    location: "Madhya Pradesh",
    position: {
      top: "58%",
      left: "3%",
      width: "30%",
      height: "36%",
      zIndex: 7,
      rotate: "1deg"
    },
    path: "/jyotirlingas/omkareshwar",
    image: "/lovable-uploads/dc0a16f8-c635-404e-8e78-b77eb4b37792.png" // Updated to omkareshwar image
  },
  {
    id: "kashi-vishwanath",
    name: "Kashi Vishwanath",
    location: "Uttar Pradesh",
    position: {
      top: "58%",
      left: "34%",
      width: "28%",
      height: "38%",
      zIndex: 10,
      rotate: "-1deg"
    },
    path: "/jyotirlingas/kashi-vishwanath",
    image: "/lovable-uploads/3b0f9fb1-8f3e-40c1-973e-1ba67b15e7eb.png" // Updated to kashi vishwanath image
  },
  {
    id: "trimbakeshwar",
    name: "Trimbakeshwar",
    location: "Maharashtra",
    position: {
      top: "60%",
      left: "66%",
      width: "28%",
      height: "34%",
      zIndex: 9,
      rotate: "1.5deg"
    },
    path: "/jyotirlingas/trimbakeshwar",
    image: "/lovable-uploads/2ebefee1-c630-49b1-a433-7a7ae77c6683.png" // Updated to trimbakeshwar image
  },
  {
    id: "vaidyanath",
    name: "Baidyanath",
    location: "Jharkhand",
    position: {
      top: "38%",
      left: "45%",
      width: "26%",
      height: "32%",
      zIndex: 9,
      transform: "translateY(-5px)"
    },
    path: "/jyotirlingas/vaidyanath",
    image: "/lovable-uploads/9134455b-48bc-4ef2-a3aa-3d6d5349967b.png" // Updated to baidyanath image
  },
  {
    id: "bhimashankar",
    name: "Bhimashankar",
    location: "Maharashtra",
    position: {
      top: "68%",
      left: "18%",
      width: "28%",
      height: "34%",
      zIndex: 8,
      rotate: "-1deg"
    },
    path: "/jyotirlingas/bhimashankar",
    image: "/lovable-uploads/3e33b4bd-dd72-46c6-a56c-5ef6f9e88bad.png" // Bhimashankar image
  },
  {
    id: "grishneshwar",
    name: "Grishneshwar",
    location: "Maharashtra",
    position: {
      top: "72%",
      left: "48%",
      width: "26%",
      height: "30%",
      zIndex: 8,
      rotate: "1deg"
    },
    path: "/jyotirlingas/grishneshwar",
    image: "/lovable-uploads/dcb523bf-24f7-4125-8e87-b23cfd0fa61d.png" // Grishneshwar image
  }
];

// Enhanced Sanskrit characters for more density in the animation
const sanskritCharacters = "ॐ नमः शिवाय हर हर महादेव जय शिव शंकर पार्वती नंदन वृषभवाहन त्रिपुरारि पशुपति नटराज गंगाधर चंद्रशेखर दिगंबर कैलाशपति भोलेनाथ सोमनाथ विश्वनाथ महेश्वर नीलकंठ उमापति अर्धनारीश्वर कृष्ण राम हरे गणेश दुर्गा लक्ष्मी सरस्वती";

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

  // Sanskrit mantra for the rotating text
  const sanskritMantra = "यद् यद् यः करोति तत् तत् एव प्रतिपद्यते";

  return (
    <div className="relative w-full h-[85vh] md:h-[75vh] overflow-hidden rounded-xl">
      {/* Enhanced gold background inspired by the reference image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(135deg, #D4AF37 0%, #C5A028 50%, #B8860B 100%)",
          opacity: 0.15
        }}
      ></div>

      {/* Dark overlay background - adjusted to complement gold */}
      <div 
        className="absolute inset-0 z-1 bg-gradient-to-br from-[#221F26]/80 to-[#2A1E17]/75"
      ></div>
      
      {/* Increased density of moving Sanskrit letters animation - more rows and columns */}
      <div className="absolute inset-0 z-2 overflow-hidden">
        {Array.from({ length: 20 }).map((_, rowIndex) => (
          <motion.div
            key={`sanskrit-row-${rowIndex}`}
            className="absolute whitespace-nowrap text-[#D4AF37]/10 font-cinzel"
            style={{ 
              top: `${5 * rowIndex}%`, 
              fontSize: `${Math.max(10, Math.min(18, Math.random() * 16))}px`,
            }}
            initial={{ x: rowIndex % 2 === 0 ? "100%" : "-100%" }}
            animate={{ x: rowIndex % 2 === 0 ? "-100%" : "100%" }}
            transition={{
              repeat: Infinity,
              duration: 80 + (rowIndex * 5),
              ease: "linear",
            }}
          >
            {sanskritCharacters.repeat(10)}
          </motion.div>
        ))}
      </div>
      
      {/* Diagonal Sanskrit text rows for more coverage */}
      <div className="absolute inset-0 z-2 overflow-hidden">
        {Array.from({ length: 12 }).map((_, rowIndex) => (
          <motion.div
            key={`diagonal-sanskrit-${rowIndex}`}
            className="absolute whitespace-nowrap text-[#D4AF37]/8 font-cinzel"
            style={{ 
              top: `${8 * rowIndex + 2}%`, 
              left: `${8 * rowIndex}%`,
              fontSize: `${Math.max(10, Math.min(16, Math.random() * 14))}px`,
              transform: `rotate(${30 + (rowIndex * 5)}deg)`,
            }}
            initial={{ x: "100%" }}
            animate={{ x: "-200%" }}
            transition={{
              repeat: Infinity,
              duration: 100 - (rowIndex * 3),
              ease: "linear",
            }}
          >
            {sanskritCharacters.repeat(5)}
          </motion.div>
        ))}
      </div>
      
      {/* Title with Devanagari-inspired font */}
      <div className="absolute top-4 left-0 right-0 z-20 text-center">
        <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-spiritual-gold drop-shadow-sm">
          The 12 Jyotirlingas of India
        </h2>
      </div>
      
      {/* Central rotating mandala with Sanskrit text */}
      <div className="absolute inset-0 z-3 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 60, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="w-[300px] h-[300px] opacity-10"
          >
            <div className="relative w-full h-full">
              {/* Create a circular path for the text */}
              {Array.from({ length: sanskritMantra.length }).map((_, i) => {
                const angle = (i * 360) / sanskritMantra.length;
                const radian = (angle * Math.PI) / 180;
                const radius = 140; // Radius of the circle
                const x = radius * Math.cos(radian);
                const y = radius * Math.sin(radian);
                
                return (
                  <div 
                    key={i}
                    className="absolute text-xl font-cinzel text-spiritual-gold/70"
                    style={{
                      transformOrigin: "0 0",
                      transform: `translate(${x + 150}px, ${y + 150}px) rotate(${angle + 90}deg)`,
                    }}
                  >
                    {sanskritMantra[i]}
                  </div>
                );
              })}
            </div>
          </motion.div>
          
          {/* Central mandala */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-spiritual-gold/5 flex items-center justify-center">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5] 
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="w-16 h-16 rounded-full bg-spiritual-gold/10 flex items-center justify-center text-3xl"
            >
              ॐ
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Jyotirlinga items - with paper cutout effect and hover-only gold outline */}
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
          whileHover={{ 
            zIndex: 30,
            scale: 1.05,
            transition: { duration: 0.3 } 
          }}
        >
          {/* Image wrapper with paper cutout effect */}
          <div className="w-full h-full relative group">
            {/* Only show gold outline on hover */}
            <motion.div 
              className="absolute inset-0 rounded-md border-2 border-transparent transition-all duration-300"
              animate={{
                borderColor: hoveredItem === jyotirlinga.id ? "#D4AF37" : "transparent",
                boxShadow: hoveredItem === jyotirlinga.id ? "0 0 15px rgba(212, 175, 55, 0.6)" : "none"
              }}
            />
            
            {/* Paper cutout effect - subtle white border */}
            <div className="absolute inset-0 rounded-md bg-white opacity-10"></div>
            
            {/* The temple image itself */}
            <img 
              src={jyotirlinga.image} 
              alt={jyotirlinga.name} 
              className="w-full h-full object-contain relative z-10"
              style={{ 
                filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.3))"
              }}
            />
            
            {/* Divine glow effect - only on hover */}
            <motion.div 
              className="absolute inset-0 -m-2 rounded-full bg-spiritual-gold/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{ 
                scale: [0.9, 1, 0.9],
                opacity: hoveredItem === jyotirlinga.id ? [0.3, 0.5, 0.3] : 0
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </div>
          
          {/* Hover overlay with temple name and location */}
          <motion.div 
            className={cn(
              "absolute bottom-0 left-0 right-0 p-2 text-center",
              "bg-gradient-to-t from-black/70 to-transparent rounded-b-md backdrop-blur-sm",
              "transform transition-all duration-300 z-20"
            )}
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: hoveredItem === jyotirlinga.id ? 1 : 0,
              y: hoveredItem === jyotirlinga.id ? 0 : 10
            }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="font-cinzel text-lg font-bold text-white drop-shadow-md">{jyotirlinga.name}</h3>
            <p className="text-xs text-white/80 font-cinzel">{jyotirlinga.location}</p>
          </motion.div>
          
          {/* Subtle sparkle effect on hover */}
          {hoveredItem === jyotirlinga.id && (
            <motion.div
              className="absolute top-1 right-1 w-3 h-3 bg-spiritual-gold rounded-full blur-sm z-20"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          )}
        </motion.div>
      ))}
      
      {/* Decorative golden border around the canvas */}
      <div className="absolute inset-0 pointer-events-none border-2 border-spiritual-gold/60 rounded-xl"></div>
      
      {/* Additional particles/sparkles for divine effect */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-spiritual-gold/80"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default JyotirlingsCollage;
