
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

// Jyotirlinga data for the collage - same data with slight position adjustments
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
      top: "12%",
      left: "40%",
      width: "25%",
      height: "35%",
      zIndex: 8,
      rotate: "1deg",
      transform: "translateY(-5px)"
    },
    path: "/jyotirlingas/mallikarjuna",
    image: "/lovable-uploads/0aa1be60-fc0f-45e0-9ec7-4a331f3dcee1.png"
  },
  {
    id: "mahakaleshwar",
    name: "Mahakaleshwar",
    location: "Madhya Pradesh",
    position: {
      top: "8%",
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
      top: "38%",
      left: "5%",
      width: "24%",
      height: "28%",
      zIndex: 7,
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
      top: "20%",
      left: "45%",
      width: "25%",
      height: "35%",
      zIndex: 9,
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
      top: "35%",
      left: "68%",
      width: "30%",
      height: "30%",
      zIndex: 4,
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
      top: "60%",
      left: "13%",
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
      top: "65%",
      left: "40%",
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
      top: "47%",
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
      top: "27%",
      left: "25%",
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
      top: "60%",
      left: "70%",
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
      top: "55%",
      left: "8%",
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

  // Sanskrit mantra for the rotating text
  const sanskritMantra = "यद् यद् यः करोति तत् तत् एव प्रतिपद्यते";

  return (
    <div className="relative w-full h-[90vh] md:h-[80vh] overflow-hidden rounded-xl">
      {/* Rich gold textured background */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          background: "linear-gradient(to right bottom, #D4AF37/10, #B8860B/10, #FFC300/10, #B87333/10)",
          opacity: 0.4
        }}
      ></div>
      
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
      
      {/* Central rotating mandala with Sanskrit text */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 60, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="w-[400px] h-[400px] opacity-10"
          >
            <div className="relative w-full h-full">
              {/* Create a circular path for the text */}
              {Array.from({ length: sanskritMantra.length }).map((_, i) => {
                const angle = (i * 360) / sanskritMantra.length;
                const radian = (angle * Math.PI) / 180;
                const radius = 180; // Radius of the circle
                const x = radius * Math.cos(radian);
                const y = radius * Math.sin(radian);
                
                return (
                  <div 
                    key={i}
                    className="absolute text-2xl font-cinzel text-spiritual-gold/70"
                    style={{
                      transformOrigin: "0 0",
                      transform: `translate(${x + 200}px, ${y + 200}px) rotate(${angle + 90}deg)`,
                    }}
                  >
                    {sanskritMantra[i]}
                  </div>
                );
              })}
            </div>
          </motion.div>
          
          {/* Central mandala */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-spiritual-gold/5 flex items-center justify-center">
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
              className="w-20 h-20 rounded-full bg-spiritual-gold/10 flex items-center justify-center text-4xl"
            >
              ॐ
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Title with Devanagari-inspired font */}
      <div className="absolute top-4 left-0 right-0 z-20 text-center">
        <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-spiritual-maroon drop-shadow-sm">
          The 12 Jyotirlingas of India
        </h2>
      </div>
      
      {/* Jyotirlinga items - now with enhanced styling and effects */}
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
          {/* Temple image with divine glow effect */}
          <div className="w-full h-full relative z-10">
            {/* Divine glow/halo effect behind the image */}
            <motion.div 
              className="absolute inset-0 -m-3 rounded-full bg-spiritual-gold/30 blur-xl"
              animate={{ 
                opacity: [0.2, 0.4, 0.2],
                scale: [0.9, 1, 0.9] 
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            {/* The temple image itself */}
            <img 
              src={jyotirlinga.image} 
              alt={jyotirlinga.name} 
              className="w-full h-full object-contain relative z-10"
              style={{ filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2))" }}
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
            <h3 className="font-cinzel text-lg font-bold text-white drop-shadow-md">{jyotirlinga.name}</h3>
            <p className="text-xs text-white/80 font-cinzel">{jyotirlinga.location}</p>
          </motion.div>
          
          {/* Subtle sparkle effect */}
          {hoveredItem === jyotirlinga.id && (
            <motion.div
              className="absolute top-0 right-0 w-4 h-4 bg-spiritual-gold rounded-full blur-sm"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0.8, 0.5],
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
      <div className="absolute inset-0 pointer-events-none border-2 border-spiritual-gold/30 rounded-xl"></div>
      
      {/* Additional decorative elements for divine atmosphere */}
      <div className="absolute top-5 left-5 w-40 h-40 rounded-full bg-spiritual-gold/5 blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-spiritual-maroon/5 blur-3xl"></div>
      
      {/* Particles/sparkles for divine effect */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-spiritual-gold/60"
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
