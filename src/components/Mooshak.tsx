
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
            
            {/* Golden Mouse SVG */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full drop-shadow-[0_0_8px_rgba(255,215,0,0.7)]"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Mouse body */}
              <path
                fill="none"
                stroke="#F0B93A"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M30,40 Q40,30 50,40 Q60,50 70,40 Q80,30 70,20 Q60,10 50,15 Q40,20 30,15 Q20,10 15,20 Q10,30 20,40 Q25,45 30,40 Z"
              />
              
              {/* Legs */}
              <path
                fill="none"
                stroke="#F0B93A"
                strokeWidth="2.5"
                strokeLinecap="round"
                d="M25,40 L20,50 M40,40 L35,50 M60,40 L65,50 M75,40 L80,50"
              />
              
              {/* Tail */}
              <path
                fill="none"
                stroke="#F0B93A"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15,25 Q5,35 10,45 Q15,50 20,45"
              />
              
              {/* Eyes */}
              <circle cx="30" cy="25" r="2" fill="#F0B93A" />
              <circle cx="45" cy="25" r="2" fill="#F0B93A" />
              
              {/* Nose */}
              <path
                fill="#F0B93A"
                d="M35,30 Q38,33 40,30 Q38,28 35,30 Z"
              />
              
              {/* Whiskers */}
              <path
                fill="none"
                stroke="#F0B93A"
                strokeWidth="1"
                strokeLinecap="round"
                d="M38,28 L45,26 M38,30 L45,30 M38,32 L45,34 M32,28 L25,26 M32,30 L25,30 M32,32 L25,34"
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
            
            {/* Golden Mouse SVG with running animation */}
            <motion.svg
              viewBox="0 0 100 100"
              className="w-full h-full drop-shadow-[0_0_8px_rgba(255,215,0,0.7)]"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Mouse body */}
              <path
                fill="none"
                stroke="#F0B93A"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M30,40 Q40,30 50,40 Q60,50 70,40 Q80,30 70,20 Q60,10 50,15 Q40,20 30,15 Q20,10 15,20 Q10,30 20,40 Q25,45 30,40 Z"
              />
              
              {/* Front left leg with running animation */}
              <motion.path
                fill="none"
                stroke="#F0B93A"
                strokeWidth="2.5"
                strokeLinecap="round"
                animate={isRunning ? {
                  d: [
                    "M25,40 L20,50", 
                    "M25,40 L20,45", 
                    "M25,40 L25,50", 
                    "M25,40 L20,50"
                  ]
                } : {}}
                transition={{ duration: 0.4, repeat: Infinity, repeatType: "loop" }}
                d="M25,40 L20,50"
              />
              
              {/* Front right leg with running animation */}
              <motion.path
                fill="none"
                stroke="#F0B93A"
                strokeWidth="2.5"
                strokeLinecap="round"
                animate={isRunning ? {
                  d: [
                    "M40,40 L35,50",
                    "M40,40 L40,50",
                    "M40,40 L35,45",
                    "M40,40 L35,50"
                  ]
                } : {}}
                transition={{ duration: 0.4, repeat: Infinity, repeatType: "loop", delay: 0.1 }}
                d="M40,40 L35,50"
              />
              
              {/* Back left leg with running animation */}
              <motion.path
                fill="none"
                stroke="#F0B93A"
                strokeWidth="2.5"
                strokeLinecap="round"
                animate={isRunning ? {
                  d: [
                    "M60,40 L65,50",
                    "M60,40 L60,50",
                    "M60,40 L65,45",
                    "M60,40 L65,50"
                  ]
                } : {}}
                transition={{ duration: 0.4, repeat: Infinity, repeatType: "loop", delay: 0.2 }}
                d="M60,40 L65,50"
              />
              
              {/* Back right leg with running animation */}
              <motion.path
                fill="none"
                stroke="#F0B93A"
                strokeWidth="2.5"
                strokeLinecap="round"
                animate={isRunning ? {
                  d: [
                    "M75,40 L80,50",
                    "M75,40 L75,50",
                    "M75,40 L80,45",
                    "M75,40 L80,50"
                  ]
                } : {}}
                transition={{ duration: 0.4, repeat: Infinity, repeatType: "loop", delay: 0.3 }}
                d="M75,40 L80,50"
              />
              
              {/* Animated tail */}
              <motion.path
                fill="none"
                stroke="#F0B93A"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={isRunning ? {
                  d: [
                    "M15,25 Q5,35 10,45 Q15,50 20,45", 
                    "M15,25 Q0,35 5,45 Q10,55 20,45",
                    "M15,25 Q5,40 15,45 Q20,50 20,45",
                    "M15,25 Q5,35 10,45 Q15,50 20,45"
                  ]
                } : {
                  d: [
                    "M15,25 Q5,35 10,45 Q15,50 20,45",
                    "M15,25 Q10,40 15,45 Q20,50 20,45",
                    "M15,25 Q5,35 10,45 Q15,50 20,45" 
                  ]
                }}
                transition={{ 
                  duration: isRunning ? 0.5 : 2,
                  repeat: Infinity, 
                  repeatType: "loop"
                }}
              />
              
              {/* Eyes */}
              <circle cx="30" cy="25" r="2" fill="#F0B93A" />
              <circle cx="45" cy="25" r="2" fill="#F0B93A" />
              
              {/* Nose */}
              <path
                fill="#F0B93A"
                d="M35,30 Q38,33 40,30 Q38,28 35,30 Z"
              />
              
              {/* Whiskers */}
              <motion.path
                fill="none"
                stroke="#F0B93A"
                strokeWidth="1"
                strokeLinecap="round"
                animate={isRunning ? {
                  d: [
                    "M38,28 L45,26 M38,30 L45,30 M38,32 L45,34 M32,28 L25,26 M32,30 L25,30 M32,32 L25,34",
                    "M38,28 L45,27 M38,30 L45,31 M38,32 L45,35 M32,28 L25,27 M32,30 L25,31 M32,32 L25,35",
                    "M38,28 L45,26 M38,30 L45,30 M38,32 L45,34 M32,28 L25,26 M32,30 L25,30 M32,32 L25,34"
                  ]
                } : {}}
                transition={{ 
                  duration: 0.3, 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                }}
                d="M38,28 L45,26 M38,30 L45,30 M38,32 L45,34 M32,28 L25,26 M32,30 L25,30 M32,32 L25,34"
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
