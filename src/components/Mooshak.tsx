
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
    "ॐ गं गणपतये नमः", 
    "ॐ श्री गणेशाय नमः", 
    "वक्रतुण्ड महाकाय", 
    "गजाननम्", 
    "एकदन्ताय"
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
            
            {/* Golden Mouse SVG - Improved design */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full drop-shadow-[0_0_8px_rgba(255,215,0,0.7)]"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Mouse body - more realistic curved shape */}
              <ellipse cx="50" cy="50" rx="25" ry="18" fill="none" stroke="#D4AF37" strokeWidth="4" />
              
              {/* Head */}
              <ellipse cx="75" cy="46" rx="10" ry="8" fill="none" stroke="#D4AF37" strokeWidth="3" />
              
              {/* Ears */}
              <ellipse cx="72" cy="36" rx="5" ry="4" fill="none" stroke="#D4AF37" strokeWidth="2" transform="rotate(-10)" />
              <ellipse cx="82" cy="38" rx="5" ry="4" fill="none" stroke="#D4AF37" strokeWidth="2" transform="rotate(10)" />
              
              {/* Legs */}
              <path d="M35,65 L32,75" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
              <path d="M45,65 L48,75" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
              <path d="M55,65 L52,75" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
              <path d="M65,65 L68,75" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
              
              {/* Tail */}
              <path d="M25,50 Q15,40 20,30" fill="none" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              
              {/* Eyes */}
              <circle cx="78" cy="44" r="1.5" fill="#D4AF37" />
              <circle cx="72" cy="44" r="1.5" fill="#D4AF37" />
              
              {/* Nose */}
              <ellipse cx="82" cy="46" rx="2" ry="1.5" fill="#D4AF37" />
              
              {/* Whiskers */}
              <path d="M80,48 L90,46 M80,47 L89,47 M80,49 L88,50" fill="none" stroke="#D4AF37" strokeWidth="0.8" strokeLinecap="round" />
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
            
            {/* Golden Mouse SVG - Improved realistic design with running animation */}
            <motion.svg
              viewBox="0 0 100 100"
              className="w-full h-full drop-shadow-[0_0_8px_rgba(255,215,0,0.7)]"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Mouse body - more realistic curved shape */}
              <ellipse cx="50" cy="50" rx="25" ry="18" fill="none" stroke="#D4AF37" strokeWidth="4" />
              
              {/* Head */}
              <ellipse cx="75" cy="46" rx="10" ry="8" fill="none" stroke="#D4AF37" strokeWidth="3" />
              
              {/* Ears with animation */}
              <motion.ellipse 
                cx="72" cy="36" rx="5" ry="4" 
                fill="none" stroke="#D4AF37" strokeWidth="2"
                animate={isRunning ? { ry: [4, 3.5, 4] } : {}}
                transition={{ duration: 0.3, repeat: Infinity }}
                transform="rotate(-10)"
              />
              <motion.ellipse 
                cx="82" cy="38" rx="5" ry="4" 
                fill="none" stroke="#D4AF37" strokeWidth="2"
                animate={isRunning ? { ry: [4, 3.5, 4] } : {}}
                transition={{ duration: 0.3, repeat: Infinity, delay: 0.15 }}
                transform="rotate(10)"
              />
              
              {/* Front left leg with running animation */}
              <motion.path
                fill="none"
                stroke="#D4AF37"
                strokeWidth="2"
                strokeLinecap="round"
                animate={isRunning ? {
                  d: [
                    "M35,65 L32,75", 
                    "M35,65 L34,73", 
                    "M35,65 L36,75", 
                    "M35,65 L32,75"
                  ]
                } : {}}
                transition={{ duration: 0.4, repeat: Infinity, repeatType: "loop" }}
                d="M35,65 L32,75"
              />
              
              {/* Front right leg with running animation */}
              <motion.path
                fill="none"
                stroke="#D4AF37"
                strokeWidth="2"
                strokeLinecap="round"
                animate={isRunning ? {
                  d: [
                    "M45,65 L48,75",
                    "M45,65 L45,75",
                    "M45,65 L42,75",
                    "M45,65 L48,75"
                  ]
                } : {}}
                transition={{ duration: 0.4, repeat: Infinity, repeatType: "loop", delay: 0.1 }}
                d="M45,65 L48,75"
              />
              
              {/* Back left leg with running animation */}
              <motion.path
                fill="none"
                stroke="#D4AF37"
                strokeWidth="2"
                strokeLinecap="round"
                animate={isRunning ? {
                  d: [
                    "M55,65 L52,75",
                    "M55,65 L55,75",
                    "M55,65 L58,75",
                    "M55,65 L52,75"
                  ]
                } : {}}
                transition={{ duration: 0.4, repeat: Infinity, repeatType: "loop", delay: 0.2 }}
                d="M55,65 L52,75"
              />
              
              {/* Back right leg with running animation */}
              <motion.path
                fill="none"
                stroke="#D4AF37"
                strokeWidth="2"
                strokeLinecap="round"
                animate={isRunning ? {
                  d: [
                    "M65,65 L68,75",
                    "M65,65 L65,75",
                    "M65,65 L62,75",
                    "M65,65 L68,75"
                  ]
                } : {}}
                transition={{ duration: 0.4, repeat: Infinity, repeatType: "loop", delay: 0.3 }}
                d="M65,65 L68,75"
              />
              
              {/* Animated tail */}
              <motion.path
                fill="none"
                stroke="#D4AF37"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={isRunning ? {
                  d: [
                    "M25,50 Q15,40 20,30", 
                    "M25,50 Q10,45 15,30",
                    "M25,50 Q20,35 25,30",
                    "M25,50 Q15,40 20,30"
                  ]
                } : {
                  d: [
                    "M25,50 Q15,40 20,30",
                    "M25,50 Q18,42 23,32",
                    "M25,50 Q15,40 20,30" 
                  ]
                }}
                transition={{ 
                  duration: isRunning ? 0.5 : 2,
                  repeat: Infinity, 
                  repeatType: "loop"
                }}
              />
              
              {/* Eyes */}
              <circle cx="78" cy="44" r="1.5" fill="#D4AF37" />
              <circle cx="72" cy="44" r="1.5" fill="#D4AF37" />
              
              {/* Nose */}
              <ellipse cx="82" cy="46" rx="2" ry="1.5" fill="#D4AF37" />
              
              {/* Whiskers with subtle animation */}
              <motion.path
                fill="none"
                stroke="#D4AF37"
                strokeWidth="0.8"
                strokeLinecap="round"
                animate={isRunning ? {
                  d: [
                    "M80,48 L90,46 M80,47 L89,47 M80,49 L88,50",
                    "M80,48 L90,47 M80,47 L89,48 M80,49 L88,51",
                    "M80,48 L90,46 M80,47 L89,47 M80,49 L88,50"
                  ]
                } : {}}
                transition={{ 
                  duration: 0.3, 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                }}
                d="M80,48 L90,46 M80,47 L89,47 M80,49 L88,50"
              />
            </motion.svg>
          </div>
        </motion.div>

        {/* Label that appears when Mooshak is still - FIXED */}
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
