
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const Mooshak: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isStill, setIsStill] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  const [showMantra, setShowMantra] = useState(false);
  const stillTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const mantraTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const mooshakRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Sanskrit mantras to show when idle
  const mantras = [
    "ॐ गं गणपतये नमः", 
    "ॐ श्री गणेशाय नमः", 
    "वक्रतुण्ड महाकाय", 
    "गजाननम्", 
    "एकदन्ताय"
  ];

  // Track mouse position and stillness
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Reset the stillness timeout
      if (stillTimeoutRef.current) {
        clearTimeout(stillTimeoutRef.current);
        setIsStill(false);
        setShowLabel(false);
      }
      
      if (mantraTimeoutRef.current) {
        clearTimeout(mantraTimeoutRef.current);
        setShowMantra(false);
      }
      
      // Set a new timeout for stillness detection
      stillTimeoutRef.current = setTimeout(() => {
        setIsStill(true);
        setTimeout(() => {
          setShowLabel(true);
        }, 500); // Show label after 500ms of stillness
        
        // Show mantra after longer idle time
        mantraTimeoutRef.current = setTimeout(() => {
          setShowMantra(true);
        }, 4000);
      }, 1500); // Consider still after 1.5 seconds
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (stillTimeoutRef.current) {
        clearTimeout(stillTimeoutRef.current);
      }
      if (mantraTimeoutRef.current) {
        clearTimeout(mantraTimeoutRef.current);
      }
    };
  }, []);

  // Handle scroll to hide when scrolling past hero section
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".hero-section");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsVisible(heroBottom > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Track click for sparkle effects
  const [clickPosition, setClickPosition] = useState<{x: number, y: number} | null>(null);
  const [sparkles, setSparkles] = useState<Array<{id: number, x: number, y: number}>>([]);
  
  const handleClick = (e: MouseEvent) => {
    // Set click position for the main sparkle
    setClickPosition({ x: e.clientX, y: e.clientY });
    
    // Generate lotus sparkles
    const newSparkles = [];
    for (let i = 0; i < 3; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 60 + 20;
      newSparkles.push({
        id: Date.now() + i,
        x: e.clientX + Math.cos(angle) * distance,
        y: e.clientY + Math.sin(angle) * distance
      });
    }
    setSparkles(newSparkles);
    
    // Clear sparkles after animation
    setTimeout(() => {
      setClickPosition(null);
      setSparkles([]);
    }, 800);
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  // Get random mantra
  const getRandomMantra = () => {
    return mantras[Math.floor(Math.random() * mantras.length)];
  };
  
  // If on mobile, show static Mooshak with simpler animations
  if (isMobile) {
    return (
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
        <motion.div 
          className="w-16 h-16"
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 2, -2, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="w-full h-full relative">
            {/* Animated glow effect */}
            <motion.div 
              className="absolute -inset-4 rounded-full bg-gradient-radial from-spiritual-gold/40 to-transparent"
              animate={{ 
                opacity: [0.4, 0.7, 0.4],
                scale: [0.9, 1.1, 0.9]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            {/* Simple Golden Mouse SVG based on reference image */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full drop-shadow-[0_0_8px_rgba(255,215,0,0.7)]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="#F0B93A"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M35,30 C25,25 15,30 15,40 C15,50 25,55 35,55 C25,60 20,75 30,85 C40,95 55,90 65,80 C75,70 75,55 65,50 C75,45 75,30 65,25 C55,20 45,25 35,30 Z"
              />
              <path
                fill="none"
                stroke="#F0B93A"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M65,25 C75,15 85,20 85,30"
              />
              <path
                fill="none"
                stroke="#F0B93A"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M30,85 C20,95 10,90 10,80"
              />
              <path
                fill="none"
                stroke="#F0B93A"
                strokeWidth="2"
                strokeLinecap="round"
                d="M30,75 C30,80 35,80 35,75 M50,75 C50,80 55,80 55,75"
              />
              <circle cx="25" cy="40" r="3" fill="#F0B93A" />
              <path
                fill="none"
                stroke="#F0B93A"
                strokeWidth="2"
                strokeLinecap="round"
                d="M25,50 C30,52 35,50 40,48"
              />
            </svg>
          </div>
        </motion.div>

        {/* Mantra appears after long stillness on mobile too */}
        <AnimatePresence>
          {showMantra && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute top-16 left-1/2 -translate-x-1/2"
            >
              <div className="bg-spiritual-maroon/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <p className="text-spiritual-gold font-cinzel text-base">
                  {getRandomMantra()}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <>
      {/* Mooshak cursor follower */}
      <motion.div
        ref={mooshakRef}
        className="fixed z-10 pointer-events-none"
        animate={{
          x: mousePosition.x - 30, // Half the width of the mooshak
          y: mousePosition.y - 30, // Half the height of the mooshak
          opacity: isVisible ? 1 : 0,
          scale: isStill ? 1.1 : 1,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 120,
          mass: 0.6,
        }}
      >
        <motion.div
          className="w-16 h-16"
          animate={{ 
            rotate: [0, 3, -3, 0], 
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="w-full h-full relative">
            {/* Glow effect */}
            <motion.div 
              className="absolute -inset-4 rounded-full bg-gradient-radial from-spiritual-gold/40 to-transparent"
              animate={{ 
                opacity: [0.4, 0.7, 0.4],
                scale: [0.9, 1.1, 0.9]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <div className="absolute inset-0 animate-pulse rounded-full bg-spiritual-gold/20 opacity-75"></div>
            
            {/* Simple Golden Mouse SVG based on reference image */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full drop-shadow-[0_0_8px_rgba(255,215,0,0.7)]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="#F0B93A"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M35,30 C25,25 15,30 15,40 C15,50 25,55 35,55 C25,60 20,75 30,85 C40,95 55,90 65,80 C75,70 75,55 65,50 C75,45 75,30 65,25 C55,20 45,25 35,30 Z"
              />
              <motion.path
                fill="none"
                stroke="#F0B93A"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M65,25 C75,15 85,20 85,30"
                animate={{ 
                  d: [
                    "M65,25 C75,15 85,20 85,30",
                    "M65,25 C75,13 85,18 85,28", 
                    "M65,25 C75,15 85,20 85,30"
                  ] 
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut"
                }}
              />
              <motion.path
                fill="none"
                stroke="#F0B93A"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M30,85 C20,95 10,90 10,80"
                animate={{ 
                  d: [
                    "M30,85 C20,95 10,90 10,80",
                    "M30,85 C20,97 10,92 10,82", 
                    "M30,85 C20,95 10,90 10,80"
                  ] 
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut"
                }}
              />
              <path
                fill="none"
                stroke="#F0B93A"
                strokeWidth="2"
                strokeLinecap="round"
                d="M30,75 C30,80 35,80 35,75 M50,75 C50,80 55,80 55,75"
              />
              <circle cx="25" cy="40" r="3" fill="#F0B93A" />
              <motion.path
                fill="none"
                stroke="#F0B93A"
                strokeWidth="2"
                strokeLinecap="round"
                d="M25,50 C30,52 35,50 40,48"
                animate={{ 
                  d: [
                    "M25,50 C30,52 35,50 40,48",
                    "M25,50 C30,53 35,51 40,49",
                    "M25,50 C30,52 35,50 40,48"
                  ] 
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "mirror"
                }}
              />
            </svg>
          </div>
        </motion.div>

        {/* Label that appears when Mooshak is still */}
        <AnimatePresence>
          {showLabel && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap"
            >
              <div className="bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                <p className="text-spiritual-gold font-cinzel text-sm drop-shadow-[0_0_2px_rgba(255,255,255,0.7)]">
                  Mooshak: Lord Ganesha's Divine Companion
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mantra that appears on longer stillness */}
        <AnimatePresence>
          {showMantra && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute -bottom-12 left-1/2 -translate-x-1/2"
            >
              <div className="bg-spiritual-maroon/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <p className="text-spiritual-gold font-cinzel text-base">
                  {getRandomMantra()}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Sparkle effect on click with lotus motifs */}
      <AnimatePresence>
        {clickPosition && (
          <motion.div
            initial={{ scale: 0.5, opacity: 1 }}
            animate={{ scale: 1.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed pointer-events-none z-20"
            style={{ 
              left: clickPosition.x - 15, 
              top: clickPosition.y - 15,
            }}
          >
            <div className="w-10 h-10 bg-spiritual-gold/30 rounded-full blur-md"></div>
            <div className="absolute inset-0 w-6 h-6 left-2 top-2 bg-white/50 rounded-full blur-sm"></div>
          </motion.div>
        )}
        
        {/* Lotus sparkles */}
        {sparkles.map(sparkle => (
          <motion.div
            key={sparkle.id}
            initial={{ scale: 0.2, opacity: 1, rotate: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 0,
              rotate: 180
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed pointer-events-none z-20"
            style={{ 
              left: sparkle.x - 10, 
              top: sparkle.y - 10,
            }}
          >
            {/* Simple lotus shape */}
            <div className="w-8 h-8 relative">
              <div className="absolute inset-0 bg-spiritual-saffron/40 rounded-full"></div>
              {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => (
                <div 
                  key={angle}
                  className="absolute w-3 h-6 bg-spiritual-saffron/60 rounded-full left-[50%] top-[50%] -translate-x-[50%] origin-bottom"
                  style={{ 
                    transform: `translateX(-50%) translateY(-100%) rotate(${angle}deg)`,
                    transformOrigin: 'bottom center'
                  }}
                ></div>
              ))}
              <div className="absolute inset-[30%] bg-spiritual-gold/70 rounded-full"></div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
};

export default Mooshak;
