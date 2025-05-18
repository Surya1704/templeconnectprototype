
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

// Updated Jyotirlinga data with the verified correct images
const jyotirlingsData: JyotirlingaItem[] = [
  {
    id: "rameshwaram",
    name: "Rameshwaram",
    location: "Tamil Nadu",
    position: {
      top: "4%",
      left: "35%",
      width: "30%",
      height: "38%",
      zIndex: 10,
      rotate: "1deg"
    },
    path: "/jyotirlingas/rameshwaram",
    image: "/lovable-uploads/fb4b3306-65cb-4755-b087-ac2fa92e2f21.png"
  },
  {
    id: "mallikarjuna",
    name: "Mallikarjuna",
    location: "Andhra Pradesh",
    position: {
      top: "5%",
      left: "64%",
      width: "30%",
      height: "36%",
      zIndex: 9,
      rotate: "-1.5deg"
    },
    path: "/jyotirlingas/mallikarjuna",
    image: "/lovable-uploads/0aa1be60-fc0f-45e0-9ec7-4a331f3dcee1.png"
  },
  {
    id: "mahakaleshwar",
    name: "Mahakaleshwar",
    location: "Madhya Pradesh",
    position: {
      top: "32%",
      left: "8%",
      width: "28%",
      height: "34%",
      zIndex: 8,
      rotate: "1deg"
    },
    path: "/jyotirlingas/mahakaleshwar",
    image: "/lovable-uploads/4c3fd48a-4feb-4ae6-86e1-402971d9cbf8.png"
  },
  {
    id: "trimbakeshwar",
    name: "Trimbakeshwar",
    location: "Maharashtra",
    position: {
      top: "56%",
      left: "62%",
      width: "28%",
      height: "34%",
      zIndex: 9,
      rotate: "1.5deg"
    },
    path: "/jyotirlingas/trimbakeshwar",
    image: "/lovable-uploads/2ebefee1-c630-49b1-a433-7a7ae77c6683.png"
  },
  {
    id: "bhimashankar",
    name: "Bhimashankar",
    location: "Maharashtra",
    position: {
      top: "60%",
      left: "22%",
      width: "28%",
      height: "34%",
      zIndex: 8,
      rotate: "-1deg"
    },
    path: "/jyotirlingas/bhimashankar",
    image: "/lovable-uploads/3e33b4bd-dd72-46c6-a56c-5ef6f9e88bad.png"
  },
  {
    id: "somnath",
    name: "Somnath",
    location: "Gujarat",
    position: {
      top: "30%",
      left: "40%",
      width: "28%",
      height: "34%",
      zIndex: 7,
      rotate: "0.5deg"
    },
    path: "/jyotirlingas/somnath",
    image: "/lovable-uploads/892016ae-9f94-43cc-bb89-eb3d1417f718.png"
  },
  {
    id: "kedarnath",
    name: "Kedarnath",
    location: "Uttarakhand",
    position: {
      top: "40%",
      left: "70%",
      width: "28%",
      height: "34%",
      zIndex: 6,
      rotate: "-0.5deg"
    },
    path: "/jyotirlingas/kedarnath",
    image: "/lovable-uploads/e8b9989e-1fdb-419c-b37f-05581f37ee79.png"
  },
  {
    id: "kashi-vishwanath",
    name: "Kashi Vishwanath",
    location: "Uttar Pradesh",
    position: {
      top: "15%",
      left: "10%",
      width: "28%",
      height: "34%",
      zIndex: 8,
      rotate: "1deg"
    },
    path: "/jyotirlingas/kashi-vishwanath",
    image: "/lovable-uploads/7469bb49-3e14-45b3-b1fe-bd885af89c8a.png"
  },
  {
    id: "omkareshwar",
    name: "Omkareshwar",
    location: "Madhya Pradesh",
    position: {
      top: "45%",
      left: "35%",
      width: "28%",
      height: "34%",
      zIndex: 7,
      rotate: "0.5deg"
    },
    path: "/jyotirlingas/omkareshwar",
    image: "/lovable-uploads/2719bcc9-3630-489d-97b4-8f4a9d1b2de5.png"
  },
  {
    id: "baidyanath",
    name: "Baidyanath",
    location: "Jharkhand",
    position: {
      top: "25%",
      left: "55%",
      width: "28%",
      height: "34%",
      zIndex: 8,
      rotate: "-0.75deg"
    },
    path: "/jyotirlingas/baidyanath",
    image: "/lovable-uploads/e4bc4fc3-559b-47cb-ab47-4804b7f32536.png"
  },
  {
    id: "nageshwar",
    name: "Nageshwar",
    location: "Gujarat",
    position: {
      top: "18%",
      left: "75%",
      width: "28%",
      height: "34%",
      zIndex: 7,
      rotate: "0.5deg"
    },
    path: "/jyotirlingas/nageshwar",
    image: "/lovable-uploads/db5bc89b-2553-46ff-a86e-4c0a629e319d.png"
  },
  {
    id: "grishneshwar",
    name: "Grishneshwar",
    location: "Maharashtra",
    position: {
      top: "75%",
      left: "70%",
      width: "28%",
      height: "34%",
      zIndex: 6,
      rotate: "-0.5deg"
    },
    path: "/jyotirlingas/grishneshwar",
    image: "/lovable-uploads/d168a39e-e3c3-46d9-bc2b-ce2460e09c78.png"
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

      {/* Dark overlay background - adjusted to complement gold and site theme */}
      <div 
        className="absolute inset-0 z-1 bg-gradient-to-br from-[#221F26]/75 to-[#2A1E17]/70"
      ></div>
      
      {/* Increased density of moving Sanskrit letters animation - more rows and columns */}
      <div className="absolute inset-0 z-2 overflow-hidden">
        {Array.from({ length: 20 }).map((_, rowIndex) => (
          <motion.div
            key={`sanskrit-row-${rowIndex}`}
            className="absolute whitespace-nowrap text-[#D4AF37]/10 font-cinzel"
            style={{ 
              top: `${5 * rowIndex}%`, 
              fontSize: `${Math.max(10, Math.min(20, Math.random() * 16))}px`
            }}
            initial={{ x: rowIndex % 2 === 0 ? "100%" : "-100%" }}
            animate={{ x: rowIndex % 2 === 0 ? "-100%" : "100%" }}
            transition={{
              repeat: Infinity,
              duration: 80 + (rowIndex * 5),
              ease: "linear"
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
              top: `${8 * rowIndex}%`, 
              left: `${8 * rowIndex}%`,
              fontSize: `${Math.max(10, Math.min(18, Math.random() * 14))}px`,
              transform: `rotate(${30 + (rowIndex * 5)}deg)`
            }}
            initial={{ x: "100%" }}
            animate={{ x: "-200%" }}
            transition={{
              repeat: Infinity,
              duration: 100 - (rowIndex * 3),
              ease: "linear"
            }}
          >
            {sanskritCharacters.repeat(5)}
          </motion.div>
        ))}
      </div>

      {/* Additional vertical Sanskrit text */}
      <div className="absolute inset-0 z-2 overflow-hidden">
        {Array.from({ length: 12 }).map((_, colIndex) => (
          <motion.div
            key={`vertical-sanskrit-${colIndex}`}
            className="absolute whitespace-nowrap text-[#D4AF37]/8 font-cinzel"
            style={{ 
              left: `${8 * colIndex}%`, 
              writingMode: "vertical-rl",
              fontSize: `${Math.max(10, Math.min(16, Math.random() * 12))}px`
            }}
            initial={{ y: "-100%" }}
            animate={{ y: "200%" }}
            transition={{
              repeat: Infinity,
              duration: 120 - (colIndex * 4),
              ease: "linear"
            }}
          >
            {sanskritCharacters.repeat(3)}
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
                      transform: `translate(${x + 150}px, ${y + 150}px) rotate(${angle + 90}deg)`
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
      
      {/* Jyotirlinga items - with enhanced styling and paper cutout effect */}
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
            transform: `rotate(${jyotirlinga.position.rotate || '0deg'}) ${jyotirlinga.position.transform || ''}`
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
              className="absolute inset-0 rounded-md border-2 border-transparent"
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
                opacity: [0.7, 1, 0.7]
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
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-spiritual-gold/80"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`
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
            delay: Math.random() * 2
          }}
        />
      ))}
      
      {/* Placeholder message for missing temples */}
      {jyotirlingsData.length < 12 && (
        <div className="absolute bottom-6 left-0 right-0 text-center z-20">
          <p className="text-spiritual-gold/80 text-sm">
            {`${jyotirlingsData.length} of 12 Jyotirlinga images verified. Awaiting remaining images.`}
          </p>
        </div>
      )}
    </div>
  );
};

export default JyotirlingsCollage;
