
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const Mooshak: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isStill, setIsStill] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  const [showMantra, setShowMantra] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [lastMoveTime, setLastMoveTime] = useState(0);
  const stillTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const mantraTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const mooshakRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const prevPositionRef = useRef({ x: 0, y: 0 });

  // Sanskrit mantras to show when idle
  const mantras = [
    "ॐ नमः शिवाय", 
    "ॐ श्री गणेशाय नमः", 
    "हर हर महादेव", 
    "जय भोलेनाथ", 
    "त्र्यम्बकम्", 
    "रुद्र", 
    "शंकर", 
    "विश्वनाथ"
  ];

  // Track mouse position, stillness and running state
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const currentPosition = { x: e.clientX, y: e.clientY };
      const prevPosition = prevPositionRef.current;
      
      // Calculate distance moved
      const deltaX = currentPosition.x - prevPosition.x;
      const deltaY = currentPosition.y - prevPosition.y;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      // Update mouse position
      setMousePosition(currentPosition);
      prevPositionRef.current = currentPosition;
      
      // Determine if mouse is running based on speed
      const now = Date.now();
      const timeDelta = now - lastMoveTime;
      setLastMoveTime(now);
      
      // Only set running if moving fast enough (more than 5px in less than 100ms)
      if (distance > 5 && timeDelta < 100) {
        setIsRunning(true);
        // Reset running state after a brief delay if no movement
        setTimeout(() => setIsRunning(false), 150);
      }
      
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
  }, [lastMoveTime]);

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
            
            {/* Simple gold outline mouse (like reference image) */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full drop-shadow-[0_0_8px_rgba(255,215,0,0.7)]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#F5BD1F"
              strokeWidth="2"
            >
              {/* Mouse body - simple outline like reference */}
              <path d="M40,50 C40,65 55,80 70,65 C85,50 75,20 60,25 C45,30 40,35 40,50 Z" />
              
              {/* Head and face */}
              <path d="M25,45 C15,35 20,25 30,30 C40,35 40,45 40,50" />
              
              {/* Ear */}
              <path d="M38,33 C40,25 45,25 47,30" />
              
              {/* Eye */}
              <circle cx="25" cy="40" r="1.5" fill="#F5BD1F" />
              
              {/* Nose */}
              <path d="M18,43 C20,42 22,43 20,45" />
              
              {/* Front leg */}
              <path d="M45,65 C45,70 45,75 48,80" />
              
              {/* Back leg */}
              <path d="M65,65 C65,70 65,75 68,80" />
              
              {/* Tail */}
              <path d="M70,55 C80,60 85,70 80,75" />
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
          x: mousePosition.x - 30,
          y: mousePosition.y - 30,
          opacity: isVisible ? 1 : 0,
          scale: isStill ? 1.1 : 1,
          rotateZ: isRunning ? [0, -5, 5, 0] : 0,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 120,
          mass: 0.6,
          rotateZ: {
            duration: 0.3,
            repeat: isRunning ? Infinity : 0,
            repeatType: "loop"
          }
        }}
      >
        <motion.div
          className="w-16 h-16"
          animate={{ 
            rotate: isStill ? [0, 3, -3, 0] : 0, 
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
            
            {/* Simple gold outline mouse with animation */}
            <motion.svg
              viewBox="0 0 100 100"
              className="w-full h-full drop-shadow-[0_0_8px_rgba(255,215,0,0.7)]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#F5BD1F"
              strokeWidth="2.5"
            >
              {/* Mouse body */}
              <motion.path 
                d="M40,50 C40,65 55,80 70,65 C85,50 75,20 60,25 C45,30 40,35 40,50 Z" 
                animate={isRunning ? { 
                  d: [
                    "M40,50 C40,65 55,80 70,65 C85,50 75,20 60,25 C45,30 40,35 40,50 Z",
                    "M40,48 C40,63 55,78 70,63 C85,48 75,22 60,27 C45,32 40,33 40,48 Z",
                    "M40,52 C40,67 55,82 70,67 C85,52 75,18 60,23 C45,28 40,37 40,52 Z",
                    "M40,50 C40,65 55,80 70,65 C85,50 75,20 60,25 C45,30 40,35 40,50 Z"
                  ]
                } : {}}
                transition={{ duration: 0.4, repeat: Infinity }}
              />
              
              {/* Head and face */}
              <motion.path 
                d="M25,45 C15,35 20,25 30,30 C40,35 40,45 40,50" 
                animate={isRunning ? {
                  d: [
                    "M25,45 C15,35 20,25 30,30 C40,35 40,45 40,50",
                    "M25,43 C15,33 20,23 30,28 C40,33 40,43 40,48",
                    "M25,47 C15,37 20,27 30,32 C40,37 40,47 40,52",
                    "M25,45 C15,35 20,25 30,30 C40,35 40,45 40,50"
                  ]
                } : {}}
                transition={{ duration: 0.4, repeat: Infinity }}
              />
              
              {/* Ear with animation */}
              <motion.path 
                d="M38,33 C40,25 45,25 47,30"
                animate={isRunning ? {
                  d: [
                    "M38,33 C40,25 45,25 47,30",
                    "M38,31 C40,23 45,23 47,28",
                    "M38,35 C40,27 45,27 47,32",
                    "M38,33 C40,25 45,25 47,30"
                  ]
                } : {}}
                transition={{ duration: 0.4, repeat: Infinity }}
              />
              
              {/* Eye */}
              <circle cx="25" cy="40" r="1.5" fill="#F5BD1F" />
              
              {/* Nose */}
              <motion.path 
                d="M18,43 C20,42 22,43 20,45"
                animate={isRunning ? {
                  d: [
                    "M18,43 C20,42 22,43 20,45",
                    "M18,41 C20,40 22,41 20,43",
                    "M18,45 C20,44 22,45 20,47",
                    "M18,43 C20,42 22,43 20,45"
                  ]
                } : {}}
                transition={{ duration: 0.4, repeat: Infinity }}
              />
              
              {/* Front leg with running animation */}
              <motion.path
                d="M45,65 C45,70 45,75 48,80"
                animate={isRunning ? {
                  d: [
                    "M45,65 C45,70 45,75 48,80",
                    "M45,65 C48,68 50,70 52,75",
                    "M45,65 C42,70 40,75 43,80",
                    "M45,65 C45,70 45,75 48,80"
                  ]
                } : {}}
                transition={{ duration: 0.4, repeat: Infinity }}
              />
              
              {/* Back leg with running animation */}
              <motion.path
                d="M65,65 C65,70 65,75 68,80"
                animate={isRunning ? {
                  d: [
                    "M65,65 C65,70 65,75 68,80",
                    "M65,65 C68,68 70,70 72,75",
                    "M65,65 C62,70 60,75 63,80",
                    "M65,65 C65,70 65,75 68,80"
                  ]
                } : {}}
                transition={{ duration: 0.4, repeat: Infinity, delay: 0.2 }}
              />
              
              {/* Tail with wagging animation */}
              <motion.path
                d="M70,55 C80,60 85,70 80,75"
                animate={isRunning ? {
                  d: [
                    "M70,55 C80,60 85,70 80,75",
                    "M70,55 C80,55 90,65 85,75",
                    "M70,55 C75,65 80,75 75,80",
                    "M70,55 C80,60 85,70 80,75"
                  ]
                } : {
                  d: [
                    "M70,55 C80,60 85,70 80,75",
                    "M70,55 C82,62 87,68 82,73",
                    "M70,55 C78,58 83,72 78,77",
                    "M70,55 C80,60 85,70 80,75"
                  ]
                }}
                transition={{ 
                  duration: isRunning ? 0.5 : 2,
                  repeat: Infinity, 
                  repeatType: "loop"
                }}
              />
            </motion.svg>
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
              className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap"
            >
              <div className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
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
