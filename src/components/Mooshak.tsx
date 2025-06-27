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
      
      // Only set running if moving fast enough (more than 4px in less than 80ms) - adjusted for faster response
      if (distance > 4 && timeDelta < 80) {
        setIsRunning(true);
        // Reset running state after a brief delay if no movement - reduced for faster response
        setTimeout(() => setIsRunning(false), 100);
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
            
            {/* More realistic mouse SVG */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full drop-shadow-[0_0_8px_rgba(255,215,0,0.7)]"
              xmlns="http://www.w3.org/2000/svg"
              fill="#F5BD1F"
            >
              {/* Mouse body - more mouse-shaped */}
              <path d="M35,50 C30,30 35,20 47,25 C55,15 70,20 75,35 C85,55 80,75 65,80 C50,85 30,70 35,50 Z" />
              
              {/* Eyes */}
              <circle cx="45" cy="38" r="2.5" fill="white" />
              <circle cx="55" cy="38" r="2" fill="white" />
              
              {/* Nose */}
              <ellipse cx="50" cy="45" rx="2" ry="1.5" fill="white" opacity="0.7" />
              
              {/* Ears */}
              <ellipse cx="40" cy="25" rx="5" ry="7" fill="#F5BD1F" stroke="white" strokeWidth="0.5" />
              <ellipse cx="60" cy="25" rx="5" ry="7" fill="#F5BD1F" stroke="white" strokeWidth="0.5" />
              
              {/* Tail */}
              <path d="M75,60 C85,65 88,75 85,80" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
              
              {/* Whiskers */}
              <path d="M45,45 C40,44 35,45 30,47" stroke="white" strokeWidth="0.7" fill="none" />
              <path d="M45,47 C40,47 35,49 30,52" stroke="white" strokeWidth="0.7" fill="none" />
              <path d="M55,45 C60,44 65,45 70,47" stroke="white" strokeWidth="0.7" fill="none" />
              <path d="M55,47 C60,47 65,49 70,52" stroke="white" strokeWidth="0.7" fill="none" />
            </svg>
          </div>
        </motion.div>

        {/* Label for Mooshak on mobile */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap"
        >
          <div className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
            <p className="text-spiritual-gold font-cinzel text-sm drop-shadow-[0_0_2px_rgba(255,255,255,0.7)]">
              Mooshak: Lord Ganesha's Divine Companion
            </p>
          </div>
        </motion.div>

        {/* Mantra appears on mobile too */}
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
          damping: 14, // Reduced from 25 for faster movement
          stiffness: 200, // Increased from 120 for more responsive follow
          mass: 0.1, // Reduced from 0.6 for lighter feel and faster movement
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
            {/* Glowing radial background */}
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
            
            {/* More realistic golden mouse SVG */}
            <motion.svg
              viewBox="0 0 100 100"
              className="w-full h-full drop-shadow-[0_0_8px_rgba(255,215,0,0.7)]"
              xmlns="http://www.w3.org/2000/svg"
              fill="#F5BD1F"
            >
              <motion.path
                d="M35,50 C30,30 35,20 47,25 C55,15 70,20 75,35 C85,55 80,75 65,80 C50,85 30,70 35,50 Z"
                animate={isRunning ? { 
                  d: [
                    "M35,50 C30,30 35,20 47,25 C55,15 70,20 75,35 C85,55 80,75 65,80 C50,85 30,70 35,50 Z",
                    "M35,48 C30,28 35,18 47,23 C55,13 70,18 75,33 C85,53 80,73 65,78 C50,83 30,68 35,48 Z",
                    "M35,52 C30,32 35,22 47,27 C55,17 70,22 75,37 C85,57 80,77 65,82 C50,87 30,72 35,52 Z",
                    "M35,50 C30,30 35,20 47,25 C55,15 70,20 75,35 C85,55 80,75 65,80 C50,85 30,70 35,50 Z"
                  ]
                } : {}}
                transition={{ duration: 0.4, repeat: Infinity }}
              />
              
              {/* Eyes - both eyes visible */}
              <motion.circle 
                cx="45" 
                cy="38" 
                r="2.5" 
                fill="white"
                animate={isRunning ? { cy: [38, 36, 40, 38] } : {}}
                transition={{ duration: 0.4, repeat: Infinity }} 
              />
              <motion.circle 
                cx="55" 
                cy="38" 
                r="2" 
                fill="white"
                animate={isRunning ? { cy: [38, 36, 40, 38] } : {}}
                transition={{ duration: 0.4, repeat: Infinity }} 
              />
              
              {/* Nose */}
              <motion.ellipse 
                cx="50" 
                cy="45" 
                rx="2" 
                ry="1.5" 
                fill="white" 
                opacity="0.7"
                animate={isRunning ? { cy: [45, 44, 46, 45] } : {}}
                transition={{ duration: 0.4, repeat: Infinity }}
              />
              
              {/* Ears */}
              <motion.ellipse 
                cx="40" 
                cy="25" 
                rx="5" 
                ry="7" 
                fill="#F5BD1F" 
                stroke="white" 
                strokeWidth="0.5"
                animate={isRunning ? { 
                  cy: [25, 23, 27, 25],
                  rx: [5, 4.5, 5.5, 5] 
                } : {}}
                transition={{ duration: 0.4, repeat: Infinity }}
              />
              <motion.ellipse 
                cx="60" 
                cy="25" 
                rx="5" 
                ry="7" 
                fill="#F5BD1F" 
                stroke="white" 
                strokeWidth="0.5"
                animate={isRunning ? { 
                  cy: [25, 23, 27, 25],
                  rx: [5, 4.5, 5.5, 5] 
                } : {}}
                transition={{ duration: 0.4, repeat: Infinity }}
              />
              
              {/* Tail */}
              <motion.path
                d="M75,60 C85,65 88,75 85,80"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                animate={isRunning ? {
                  d: [
                    "M75,60 C85,65 88,75 85,80",
                    "M75,60 C88,65 92,72 88,77",
                    "M75,60 C83,68 86,78 82,83",
                    "M75,60 C85,65 88,75 85,80"
                  ]
                } : {
                  d: [
                    "M75,60 C85,65 88,75 85,80",
                    "M75,60 C86,66 89,73 86,78",
                    "M75,60 C84,66 87,76 84,81",
                    "M75,60 C85,65 88,75 85,80"
                  ]
                }}
                transition={{ 
                  duration: isRunning ? 0.5 : 2,
                  repeat: Infinity, 
                  repeatType: "loop"
                }}
              />
              
              {/* Whiskers */}
              <motion.path 
                d="M45,45 C40,44 35,45 30,47" 
                stroke="white" 
                strokeWidth="0.7" 
                fill="none"
                animate={isRunning ? { 
                  d: [
                    "M45,45 C40,44 35,45 30,47",
                    "M45,44 C40,43 35,44 30,46",
                    "M45,46 C40,45 35,46 30,48",
                    "M45,45 C40,44 35,45 30,47"
                  ]
                } : {}}
                transition={{ duration: 0.4, repeat: Infinity }}
              />
              <motion.path 
                d="M45,47 C40,47 35,49 30,52" 
                stroke="white" 
                strokeWidth="0.7" 
                fill="none"
                animate={isRunning ? { 
                  d: [
                    "M45,47 C40,47 35,49 30,52",
                    "M45,46 C40,46 35,48 30,51",
                    "M45,48 C40,48 35,50 30,53",
                    "M45,47 C40,47 35,49 30,52"
                  ]
                } : {}}
                transition={{ duration: 0.4, repeat: Infinity }}
              />
              <motion.path 
                d="M55,45 C60,44 65,45 70,47" 
                stroke="white" 
                strokeWidth="0.7" 
                fill="none"
                animate={isRunning ? { 
                  d: [
                    "M55,45 C60,44 65,45 70,47",
                    "M55,44 C60,43 65,44 70,46",
                    "M55,46 C60,45 65,46 70,48",
                    "M55,45 C60,44 65,45 70,47"
                  ]
                } : {}}
                transition={{ duration: 0.4, repeat: Infinity }}
              />
              <motion.path 
                d="M55,47 C60,47 65,49 70,52" 
                stroke="white" 
                strokeWidth="0.7" 
                fill="none"
                animate={isRunning ? { 
                  d: [
                    "M55,47 C60,47 65,49 70,52",
                    "M55,46 C60,46 65,48 70,51",
                    "M55,48 C60,48 65,50 70,53",
                    "M55,47 C60,47 65,49 70,52"
                  ]
                } : {}}
                transition={{ duration: 0.4, repeat: Infinity }}
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

        {/* Fixed label that always shows regardless of stillness */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap"
        >
          <div className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
            <p className="text-spiritual-gold font-cinzel text-sm drop-shadow-[0_0_2px_rgba(255,255,255,0.7)]">
              Mooshak: Lord Ganesha's Divine Companion
            </p>
          </div>
        </motion.div>

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
