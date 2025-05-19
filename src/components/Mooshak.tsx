
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const Mooshak: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isStill, setIsStill] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  const [mood, setMood] = useState<"default" | "happy" | "surprised">("default");
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

  // Track click for sparkle effects and mood changes
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
    
    // Change mood to happy
    setMood("happy");
    setTimeout(() => {
      setMood("default");
    }, 1500);
    
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

  // Randomly change mood occasionally for extra charm
  useEffect(() => {
    const moodInterval = setInterval(() => {
      if (Math.random() > 0.7 && isStill) {
        const moods: Array<"happy" | "surprised"> = ["happy", "surprised"];
        const newMood = moods[Math.floor(Math.random() * moods.length)];
        setMood(newMood);
        setTimeout(() => setMood("default"), 2000);
      }
    }, 5000);
    
    return () => clearInterval(moodInterval);
  }, [isStill]);

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
            {/* Animated glow effect resembling a diya light */}
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
            
            {/* Ornate Golden Mooshak SVG based on reference image */}
            <svg
              viewBox="0 0 800 800"
              className="w-full h-full drop-shadow-[0_0_8px_rgba(255,215,0,0.7)]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="#D4AF37"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M400,180 C380,130 320,120 280,140 C240,160 220,200 220,240 C220,280 240,320 280,340 C240,360 200,400 180,460 C160,520 180,600 240,660 C300,720 380,740 460,700 C540,660 580,580 560,500 C540,420 480,380 420,360 C460,340 480,300 480,260 C480,220 460,180 420,160 C380,140 340,150 320,180 Z"
              />
              
              {/* Crown/headpiece */}
              <path
                fill="none"
                stroke="#D4AF37"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M380,180 C380,140 400,120 420,100 C440,80 460,60 480,80 C500,100 520,120 540,100 C560,80 580,60 600,80 C620,100 640,120 660,100"
              />
              
              {/* Eye */}
              <circle cx="300" cy="240" r="15" fill="#D4AF37" />
              
              {/* Ear */}
              <path
                fill="none"
                stroke="#D4AF37"
                strokeWidth="10"
                strokeLinecap="round"
                d="M480,260 C520,240 560,260 600,220"
              />
              
              {/* Smile */}
              <path
                fill="none"
                stroke="#D4AF37"
                strokeWidth="8"
                strokeLinecap="round"
                d="M280,280 C300,300 340,300 360,280"
              />
              
              {/* Decorative collar */}
              <path
                fill="none"
                stroke="#D4AF37"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray="5,10"
                d="M240,340 C280,380 360,400 420,360"
              />
              
              {/* Body pattern dots */}
              <circle cx="360" cy="460" r="8" fill="#D4AF37" />
              <circle cx="400" cy="520" r="8" fill="#D4AF37" />
              <circle cx="460" cy="480" r="8" fill="#D4AF37" />
              <circle cx="320" cy="500" r="8" fill="#D4AF37" />
              <circle cx="380" cy="560" r="8" fill="#D4AF37" />
              
              {/* Decorative patterns on the body */}
              <path
                fill="none"
                stroke="#D4AF37"
                strokeWidth="8"
                strokeLinecap="round"
                d="M320,440 C340,420 380,420 400,440 C420,460 440,460 460,440"
              />
              
              {/* Tail */}
              <path
                fill="none"
                stroke="#D4AF37"
                strokeWidth="10"
                strokeLinecap="round"
                d="M240,660 C180,700 140,680 120,640 C100,600 120,560 160,540"
              />
              
              {/* Paws/feet */}
              <path
                fill="none"
                stroke="#D4AF37"
                strokeWidth="8"
                strokeLinecap="round"
                d="M260,640 C260,660 270,670 290,670 M340,670 C340,690 350,700 370,700 M420,660 C420,680 430,690 450,690"
              />
              
              {/* Ornate decorative patterns */}
              <path
                fill="none"
                stroke="#D4AF37"
                strokeWidth="6"
                strokeDasharray="4,8"
                d="M340,380 C360,400 400,400 420,380"
              />
              <path
                fill="none"
                stroke="#D4AF37"
                strokeWidth="6"
                strokeDasharray="4,8"
                d="M280,520 C300,540 340,540 360,520"
              />
              <path
                fill="none"
                stroke="#D4AF37"
                strokeWidth="6"
                strokeDasharray="4,8"
                d="M380,580 C400,600 440,600 460,580"
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
      {/* Mooshak cursor follower with enhanced animations */}
      <motion.div
        ref={mooshakRef}
        className="fixed z-10 pointer-events-none"
        animate={{
          x: mousePosition.x - 40, // Half the width of the mooshak
          y: mousePosition.y - 40, // Half the height of the mooshak
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
          className="w-20 h-20"
          animate={{ 
            rotate: [0, 5, -5, 0], 
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="w-full h-full relative">
            {/* Enhanced diya-like glow effect */}
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
            <div className="absolute inset-0 animate-pulse rounded-full bg-spiritual-saffron/20 opacity-75"></div>
            <div className="absolute w-[130%] h-[130%] -left-[15%] -top-[15%] rounded-full bg-spiritual-gold/30 blur-md animate-pulse"></div>
            <div className="absolute w-[110%] h-[110%] -left-[5%] -top-[5%] rounded-full bg-spiritual-gold/40 blur-sm"></div>
            
            {/* Ornate Golden Mooshak SVG based on reference image */}
            <svg
              viewBox="0 0 800 800"
              className="w-full h-full filter drop-shadow-[0_0_8px_rgba(255,215,0,0.7)]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="#D4AF37"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M400,180 C380,130 320,120 280,140 C240,160 220,200 220,240 C220,280 240,320 280,340 C240,360 200,400 180,460 C160,520 180,600 240,660 C300,720 380,740 460,700 C540,660 580,580 560,500 C540,420 480,380 420,360 C460,340 480,300 480,260 C480,220 460,180 420,160 C380,140 340,150 320,180 Z"
              />
              
              {/* Crown/headpiece */}
              <path
                fill="none"
                stroke="#D4AF37"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M380,180 C380,140 400,120 420,100 C440,80 460,60 480,80 C500,100 520,120 540,100 C560,80 580,60 600,80 C620,100 640,120 660,100"
              />
              
              {/* Eye - animating based on mood */}
              <motion.circle 
                cx="300" 
                cy="240" 
                r="15" 
                fill="#D4AF37"
                animate={
                  mood === "happy" ? { cy: [240, 235, 240] } :
                  mood === "surprised" ? { r: 20 } :
                  {}
                }
                transition={{ duration: 0.5 }}
              />
              
              {/* Ear with wiggle animation */}
              <motion.path
                fill="none"
                stroke="#D4AF37"
                strokeWidth="10"
                strokeLinecap="round"
                d="M480,260 C520,240 560,260 600,220"
                animate={{ 
                  d: [
                    "M480,260 C520,240 560,260 600,220",
                    "M480,260 C520,235 565,255 600,215", 
                    "M480,260 C520,240 560,260 600,220"
                  ] 
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut"
                }}
              />
              
              {/* Smile - changes with mood */}
              <motion.path
                fill="none"
                stroke="#D4AF37"
                strokeWidth="8"
                strokeLinecap="round"
                d="M280,280 C300,300 340,300 360,280"
                animate={
                  mood === "happy" ? { d: "M280,280 C300,310 340,310 360,280" } :
                  mood === "surprised" ? { d: "M280,290 C300,300 340,300 360,290" } :
                  { d: "M280,280 C300,300 340,300 360,280" }
                }
                transition={{ duration: 0.5 }}
              />
              
              {/* Decorative collar */}
              <path
                fill="none"
                stroke="#D4AF37"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray="5,10"
                d="M240,340 C280,380 360,400 420,360"
              />
              
              {/* Body pattern dots */}
              <circle cx="360" cy="460" r="8" fill="#D4AF37" />
              <circle cx="400" cy="520" r="8" fill="#D4AF37" />
              <circle cx="460" cy="480" r="8" fill="#D4AF37" />
              <circle cx="320" cy="500" r="8" fill="#D4AF37" />
              <circle cx="380" cy="560" r="8" fill="#D4AF37" />
              
              {/* Decorative patterns on the body */}
              <path
                fill="none"
                stroke="#D4AF37"
                strokeWidth="8"
                strokeLinecap="round"
                d="M320,440 C340,420 380,420 400,440 C420,460 440,460 460,440"
              />
              
              {/* Tail with animation */}
              <motion.path
                fill="none"
                stroke="#D4AF37"
                strokeWidth="10"
                strokeLinecap="round"
                d="M240,660 C180,700 140,680 120,640 C100,600 120,560 160,540"
                animate={{ 
                  d: [
                    "M240,660 C180,700 140,680 120,640 C100,600 120,560 160,540",
                    "M240,660 C190,710 145,685 125,635 C105,595 125,550 165,535",
                    "M240,660 C180,700 140,680 120,640 C100,600 120,560 160,540"
                  ] 
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut"
                }}
              />
              
              {/* Paws/feet */}
              <path
                fill="none"
                stroke="#D4AF37"
                strokeWidth="8"
                strokeLinecap="round"
                d="M260,640 C260,660 270,670 290,670 M340,670 C340,690 350,700 370,700 M420,660 C420,680 430,690 450,690"
              />
              
              {/* Ornate decorative patterns */}
              <path
                fill="none"
                stroke="#D4AF37"
                strokeWidth="6"
                strokeDasharray="4,8"
                d="M340,380 C360,400 400,400 420,380"
              />
              <path
                fill="none"
                stroke="#D4AF37"
                strokeWidth="6"
                strokeDasharray="4,8"
                d="M280,520 C300,540 340,540 360,520"
              />
              <path
                fill="none"
                stroke="#D4AF37"
                strokeWidth="6"
                strokeDasharray="4,8"
                d="M380,580 C400,600 440,600 460,580"
              />
              
              {/* Extra embellishments to match reference image */}
              <path
                fill="none"
                stroke="#D4AF37"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="2,6"
                d="M300,400 C320,420 350,420 370,400"
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
