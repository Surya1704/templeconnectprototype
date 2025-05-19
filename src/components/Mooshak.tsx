
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
            <div className="absolute inset-0 animate-ping rounded-full bg-spiritual-gold/20 opacity-75"></div>
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-full h-full drop-shadow-[0_0_8px_rgba(255,215,0,0.7)]"
              >
                <path
                  fill="#f5e7d3"
                  d="M265.7 35.6c-27 2.7-49.9 17.1-62.4 39.2-6.3 11.1-8.8 20-9.4 33.2-.7 16.3 1.9 28.4 9.5 43.3 2.2 4.3 3.7 7.9 3.5 8-.3.1-3.7.9-7.6 1.9-45.8 11.2-76.8 38.9-87.1 77.8-3.3 12.7-3.9 36.3-1.2 48.5 4.2 18.9 12.6 34.5 26.2 48.6 13.3 13.8 30 24.4 48.3 30.5 8.1 2.7 22.5 6.1 25.5 6.1.8 0 1.8.6 2.2 1.4.9 1.6 4.3 21.6 5.8 34.6 1.3 11.3 1.3 40.4 0 53-2.6 25-8.8 52.8-15.7 70-4.1 10.3-11.5 23.8-15 27.5-3.6 3.7-3.4 5.9.8 7.7 3.1 1.4 5.4 1 9.3-1.6 12.6-8.3 22.2-27.7 28.7-57.9 1.1-5.1 2.3-9.6 2.7-10.1.5-.5 3.8-.7 9.3-.5l8.4.3 3.1 10.3c8.7 29.5 18.5 47.2 30.6 55.5 5.1 3.6 8.3 3.9 11.4 1.1 2.4-2.2 2.5-2.6 1.5-5.9-2.8-9-14.1-30.8-18.5-35.7-.7-.8-1.9-4.5-2.6-8.2-4-20.7-5.7-36-6.2-55-.6-19.1.6-33.3 4.3-51.7 1.4-7 2.8-13.4 3.1-14.2.3-.8 2.5-1.9 4.9-2.5 32-8.1 60.3-28.9 75.7-55.7 9.7-16.9 14.3-33.8 14.8-53.9.5-21.4-3.4-37.6-13.5-56.4-12.5-23.2-35-42.3-61.2-51.9-7.4-2.7-8.9-3.5-8.5-5.1.3-1 2.5-5.1 4.9-9 6.7-11.1 10.6-21.8 12.1-33.5 1.3-10.1.7-17.6-2.3-28.8-7.9-29.5-33.1-51.8-64.9-57.3-7.7-1.3-26.8-1.9-34.5-1z"
                />
                <path
                  fill="#de9e89"
                  d="M352 172.2c-2.5.5-6.1 2.1-8 3.5-3.2 2.3-3.5 3.1-3.8 8.8-.4 6.2.4 9.2 3.9 14 2.6 3.6 9.3 7.5 13.4 7.5 4.1 0 10.8-3.9 13.4-7.5 3.5-4.8 4.3-7.8 3.9-14-.3-5.7-.6-6.5-3.8-8.8-4.2-3.2-12.8-4.7-19-3.5zm-192 32c-2.5.5-6.1 2.1-8 3.5-3.2 2.3-3.5 3.1-3.8 8.8-.4 6.2.4 9.2 3.9 14 2.6 3.6 9.3 7.5 13.4 7.5 4.1 0 10.8-3.9 13.4-7.5 3.5-4.8 4.3-7.8 3.9-14-.3-5.7-.6-6.5-3.8-8.8-4.2-3.2-12.8-4.7-19-3.5z"
                />
                <path
                  fill="#000000"
                  d="M257.5 36.1c-5.2.5-12.2 1.9-15.5 3.1-25.9 9.3-43 31.9-45.4 59.8-.8 9.8.6 22 3.6 32.5 2.3 8.2 8.9 22.6 10.8 23.8 2.1 1.3 10.5-1.2 18-5.3 7.7-4.3 21.9-8.6 29.5-9 12.4-.6 26.2 3.2 37.1 10.2 5.8 3.8 15.1 12.8 18.9 18.3 1.6 2.3 3 4.2 3.3 4.2.6 0 4.8-8.6 7.2-14.7 7.8-20.5 6.6-42.1-3.4-59.5-11.3-19.7-32.1-34.2-53.8-37.3-5.9-.8-6.1-.8-13.8-27.1-.4-1.3-5.7-1-6.5.4-.3.5-1.9 6.2-3.5 12.7-1.7 6.5-3.3 12.4-3.6 13.1-.4.8 1.4 2.6 5.3 5.2 23.5 15.8 33.5 35.4 29.5 57.9-2.3 12.5-10 25.6-18.7 31.6-8 5.4-19.5 8.5-27.3 7.2-15.9-2.6-30.7-17.8-36-37-7.1-25.6 6.7-56.6 30.4-68.1 2-.9 3.6-2.2 3.6-2.8 0-.7-1.2-5.9-2.6-11.6s-3-11.7-3.5-13.5c-1-3.9-2-3.9-9.7-1.1-4.5 1.7-8.2 1.8-13.6.4-2.8-.7-4.1-.6-6.3.7-2.5 1.4-2.9 2.3-2.9 6 0 5.5 1.9 11.3 5.1 15.6 2.3 3 4.4 4.4 9.5 6.5l6.6 2.6 1.3 5.1c1.1 4.6 1 5.5-.8 10.4-4.4 11.5-6.2 23.7-5.5 36.4.8 15 4.1 25.7 12.7 41.8 5 9.4 5.9 10.5 12.7 16.7 6.8 6.3 8.2 7.2 15.9 11.2 8.8 4.4 24.7 10.4 29.3 11 1.2.1 2.2.6 2.2 1 0 .3.7 9.1 1.6 19.5 2.7 32.6.5 67-5.9 90.5-3.6 13.3-10.2 29-14.4 34l-3.8 4.5 3.5 3.5c8.6 8.8 18 4.4 27.4-12.7 5.6-10.3 10.1-22.9 13.8-38.8 2.6-11.1 2.7-11.3 5.7-11.9 1.7-.4 4.7-.3 6.8.1l3.6.7 2.7 10.8c5.9 23.3 12.1 38.6 19.5 48 9.6 12.3 21.3 13.9 29.5 4.3 2.1-2.5 2.4-3.6 2-7.3-.4-2.4-2-7.5-3.6-11.2-3.6-8.1-10.7-19.2-13.4-20.8-2.5-1.5-6.4-15.6-9.1-32.5-3.3-21.6-3.9-32.4-3.9-68 0-34.5 0-34.7 2.1-34.7.6 0 4.6-1.2 8.9-2.5 32-10.2 55.9-31 67.4-58.5 11.2-26.9 11-57.3-.7-82.9-11.6-25.5-35.3-46.1-62.2-54.1-6.6-2-12.2-3.6-12.4-3.7-.2 0-1.4-1.7-2.6-3.8-8-13.9-10.3-31.2-6.2-45.8 4.9-17 17.8-30.6 35-37 10.8-3.9 25.3-4.9 36.9-2.4 21 4.5 37.1 21.2 41.6 43.2 2.6 13.2.7 25.5-6 39.2-3 6.2-3.5 7.7-3.5 14.9 0 9.3 1.9 14.8 8.1 23.2 5.2 7 5.4 7.9 1.7 8.5-7.3 1.2-22.9 9.3-31.8 16.5-11.7 9.5-23 24-27.8 35.7-3.4 8-7.2 23.2-7.2 28.7 0 2.3.4 3.6 1.2 3.4 1.3-.2 9.3-11.2 14.8-20.2 8.8-14.5 17-23.2 31.2-32.7 15.2-10.2 26-14.5 44.8-17.7 8.3-1.3 35.9-.7 45 1.1 24.7 4.8 48.6 16.4 65.5 31.9 5.1 4.7 6.3 6.3 6.1 8.6-.3 2.8-8 12.6-15 19.1-3.9 3.7-3.4 4.3 2.1 2.3 14.7-5.3 28.5-20.9 32.7-36.8l1.7-6.4-3.8-5.7c-13.3-20-32.4-36.4-53.3-45.8-25.6-11.6-57.9-14.7-86.3-8.3-9.7 2.2-23.4 6.9-28.9 10-2.3 1.3-4.3 2.2-4.5 2-.2-.2 1.8-4.3 4.3-9.2 6.6-12.5 9.4-21.8 10.3-34.3 1.5-20-5.6-41.5-18.3-55.5-10.1-11-26.1-20.9-39.2-24-10.9-2.5-28.7-3.6-37.1-2.4zm94.5 139.3c8.8 1.8 16.4 9.6 18.4 19.1 1.5 7.3-1.6 17.1-7 22-7.9 7.2-23.7 7.3-31.9.2-6.3-5.5-9-15-6.9-24 2.1-9.4 10.1-16.8 19.8-18.4 2-.3 3.8-.7 4-.9.6-.5 2.1-.3 3.6.7.8.6 5.1 1.2 9.5 1.3zm-193.6 31.1c10.6 2.4 18.4 11.4 19.1 22 .5 8.8-3.2 16.2-10.6 21-5.2 3.4-6 3.6-14.4 3.9-7.9.3-9.3.1-13-2-5.5-3.1-9.5-7.6-11.7-13.5-3.8-9.9-1-20.9 7.2-28.1 5.7-5 14.4-6.6 23.4-4.3zm-28.2 47.6c3.8 3.2 3.4 5.4-2.2 11-7.9 7.9-8 12.2-.5 19.8l4.2 4.2 3.4-2.9c2.9-2.5 3.3-3.3 2.7-6-.9-4.4 1.5-7.9 6.2-9 8.6-2 12.7 2.2 14.8 15.3 1.4 8.3 1.4 9.9.1 13.5-1.7 4.4-6 9-8 8.5-.7-.1-4.7-.5-9-1l-7.6-.7-3.1 3.1c-2.7 2.6-3.4 3-4.5 2-2.1-1.9-1.6-4.3 1.5-7.9 3.8-4.4 3.8-5.9.2-13.3-3.2-6.6-8.2-10.7-12.9-10.7-3.4 0-8.5 4.5-8.5 7.5 0 1.1-1.6 3.5-3.5 5.4-1.9 1.9-3.5 3.9-3.5 4.5 0 1.7-2 .7-6.3-3.2-6.6-6.1-4.9-10.8 7.2-19.4 9.5-6.7 12.1-9.8 12.1-14.2 0-4.7 2.7-9.7 5.6-10 1.3-.1 3.8 1 5.7 2.6-.1.1 2.9 2.4 6.8 5.3 7.1 5.2 7.5 5.7 7.5 11.4 0 5.4-.3 6.2-3.5 9.4-2 2-4.1 3.6-4.8 3.6-2.2 0-2.1 3.3.1 4.8 2.3 1.6 9.2 1.6 9.2-.1 0-.6-1.1-2-2.5-3-2.3-1.7-2.4-2.1-1.3-5.2 1.7-4.4 5-7.6 8.2-7.9 3.7-.3 7.8 2.9 10.4 8.4 1.9 3.9 2.2 6.3 2.2 16.7 0 11.2-.1 12.1-2 12.8-2.1.8-7.8-2.9-11.1-7.2-2.5-3.3-6.9-3.8-9.7-1.1-1.6 1.6-1.6 2-.2 5 .9 1.9 1.8 5.3 2.2 7.7.5 4.3.8 4.6 5.9 6.8 4.2 1.9 5.8 2.1 7.8 1.3 4.8-1.8 11.9 1.2 15.6 6.8 2.1 3 2.5 4.9 2.5 10.5 0 5.9-.4 7.5-2.9 11.5-4.9 8-16.3 10.9-24.5 6.1-6.7-4-9.3-8.2-9.8-16.6-.4-7-.4-7-.4-1.9 0 5.1-.6 6.3-6.7 14-3.9 4.9-7.6 8.8-8.3 8.8-.7 0-2-1.2-3-2.7-1.6-2.6-1.6-3 .2-8.5 3.1-9.3 3.1-10.2-.3-14.3-2.7-3.3-3.3-3.5-8-3.5-2.8 0-5.9.4-6.8 1-1.5.9-2.3-.5-5.7-10.7-2.2-6.6-4-12.3-4-12.9 0-.6 1.7-1.9 3.7-3 7.2-3.9 10.8-10.9 8.6-16.9-.6-1.6-2.8-4.2-5.1-6l-4-2.9 3.6-3.7c7.9-8 15.7-8.6 24.9-2zm350.3 8.4c5.7 2.8 11.5 11.5 11.5 17.2 0 3.4-3.1 8.8-6.7 11.7-2.8 2.2-3.7 2.4-8.5 2-7.1-.6-11.4-3.1-14.8-8.5-6.9-10.9 1-24.9 13.2-23.6 1.7.2.3 0 5.3 1.2zm-30.2 2.1c6.5 3.3 10.7 10.5 10.7 18.5 0 7.2-3.4 13.5-9.5 17.4-5.5 3.6-13.7 3.7-20.5.2-13.2-6.8-14.9-26.3-3.2-35.1 6.7-5.1 15.5-5.5 22.5-1z"
                />
              </svg>

              {/* Ear wiggle animation */}
              <motion.div
                className="absolute top-[25%] right-[15%] w-[20%] h-[15%] origin-bottom"
                animate={{ 
                  rotateZ: [0, 15, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut"
                }}
              />
            </div>
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
            
            {/* Enhanced Mooshak SVG with expressions based on mood */}
            <div className="relative">
              {/* Base mouse SVG is the same */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-full h-full filter drop-shadow-[0_0_8px_rgba(255,215,0,0.7)]"
              >
                <path
                  fill="#f5e7d3"
                  d="M265.7 35.6c-27 2.7-49.9 17.1-62.4 39.2-6.3 11.1-8.8 20-9.4 33.2-.7 16.3 1.9 28.4 9.5 43.3 2.2 4.3 3.7 7.9 3.5 8-.3.1-3.7.9-7.6 1.9-45.8 11.2-76.8 38.9-87.1 77.8-3.3 12.7-3.9 36.3-1.2 48.5 4.2 18.9 12.6 34.5 26.2 48.6 13.3 13.8 30 24.4 48.3 30.5 8.1 2.7 22.5 6.1 25.5 6.1.8 0 1.8.6 2.2 1.4.9 1.6 4.3 21.6 5.8 34.6 1.3 11.3 1.3 40.4 0 53-2.6 25-8.8 52.8-15.7 70-4.1 10.3-11.5 23.8-15 27.5-3.6 3.7-3.4 5.9.8 7.7 3.1 1.4 5.4 1 9.3-1.6 12.6-8.3 22.2-27.7 28.7-57.9 1.1-5.1 2.3-9.6 2.7-10.1.5-.5 3.8-.7 9.3-.5l8.4.3 3.1 10.3c8.7 29.5 18.5 47.2 30.6 55.5 5.1 3.6 8.3 3.9 11.4 1.1 2.4-2.2 2.5-2.6 1.5-5.9-2.8-9-14.1-30.8-18.5-35.7-.7-.8-1.9-4.5-2.6-8.2-4-20.7-5.7-36-6.2-55-.6-19.1.6-33.3 4.3-51.7 1.4-7 2.8-13.4 3.1-14.2.3-.8 2.5-1.9 4.9-2.5 32-8.1 60.3-28.9 75.7-55.7 9.7-16.9 14.3-33.8 14.8-53.9.5-21.4-3.4-37.6-13.5-56.4-12.5-23.2-35-42.3-61.2-51.9-7.4-2.7-8.9-3.5-8.5-5.1.3-1 2.5-5.1 4.9-9 6.7-11.1 10.6-21.8 12.1-33.5 1.3-10.1.7-17.6-2.3-28.8-7.9-29.5-33.1-51.8-64.9-57.3-7.7-1.3-26.8-1.9-34.5-1z"
                />
                <path
                  fill="#de9e89"
                  d="M352 172.2c-2.5.5-6.1 2.1-8 3.5-3.2 2.3-3.5 3.1-3.8 8.8-.4 6.2.4 9.2 3.9 14 2.6 3.6 9.3 7.5 13.4 7.5 4.1 0 10.8-3.9 13.4-7.5 3.5-4.8 4.3-7.8 3.9-14-.3-5.7-.6-6.5-3.8-8.8-4.2-3.2-12.8-4.7-19-3.5zm-192 32c-2.5.5-6.1 2.1-8 3.5-3.2 2.3-3.5 3.1-3.8 8.8-.4 6.2.4 9.2 3.9 14 2.6 3.6 9.3 7.5 13.4 7.5 4.1 0 10.8-3.9 13.4-7.5 3.5-4.8 4.3-7.8 3.9-14-.3-5.7-.6-6.5-3.8-8.8-4.2-3.2-12.8-4.7-19-3.5z"
                />
                <path
                  fill="#000000"
                  d="M257.5 36.1c-5.2.5-12.2 1.9-15.5 3.1-25.9 9.3-43 31.9-45.4 59.8-.8 9.8.6 22 3.6 32.5 2.3 8.2 8.9 22.6 10.8 23.8 2.1 1.3 10.5-1.2 18-5.3 7.7-4.3 21.9-8.6 29.5-9 12.4-.6 26.2 3.2 37.1 10.2 5.8 3.8 15.1 12.8 18.9 18.3 1.6 2.3 3 4.2 3.3 4.2.6 0 4.8-8.6 7.2-14.7 7.8-20.5 6.6-42.1-3.4-59.5-11.3-19.7-32.1-34.2-53.8-37.3-5.9-.8-6.1-.8-13.8-27.1-.4-1.3-5.7-1-6.5.4-.3.5-1.9 6.2-3.5 12.7-1.7 6.5-3.3 12.4-3.6 13.1-.4.8 1.4 2.6 5.3 5.2 23.5 15.8 33.5 35.4 29.5 57.9-2.3 12.5-10 25.6-18.7 31.6-8 5.4-19.5 8.5-27.3 7.2-15.9-2.6-30.7-17.8-36-37-7.1-25.6 6.7-56.6 30.4-68.1 2-.9 3.6-2.2 3.6-2.8 0-.7-1.2-5.9-2.6-11.6s-3-11.7-3.5-13.5c-1-3.9-2-3.9-9.7-1.1-4.5 1.7-8.2 1.8-13.6.4-2.8-.7-4.1-.6-6.3.7-2.5 1.4-2.9 2.3-2.9 6 0 5.5 1.9 11.3 5.1 15.6 2.3 3 4.4 4.4 9.5 6.5l6.6 2.6 1.3 5.1c1.1 4.6 1 5.5-.8 10.4-4.4 11.5-6.2 23.7-5.5 36.4.8 15 4.1 25.7 12.7 41.8 5 9.4 5.9 10.5 12.7 16.7 6.8 6.3 8.2 7.2 15.9 11.2 8.8 4.4 24.7 10.4 29.3 11 1.2.1 2.2.6 2.2 1 0 .3.7 9.1 1.6 19.5 2.7 32.6.5 67-5.9 90.5-3.6 13.3-10.2 29-14.4 34l-3.8 4.5 3.5 3.5c8.6 8.8 18 4.4 27.4-12.7 5.6-10.3 10.1-22.9 13.8-38.8 2.6-11.1 2.7-11.3 5.7-11.9 1.7-.4 4.7-.3 6.8.1l3.6.7 2.7 10.8c5.9 23.3 12.1 38.6 19.5 48 9.6 12.3 21.3 13.9 29.5 4.3 2.1-2.5 2.4-3.6 2-7.3-.4-2.4-2-7.5-3.6-11.2-3.6-8.1-10.7-19.2-13.4-20.8-2.5-1.5-6.4-15.6-9.1-32.5-3.3-21.6-3.9-32.4-3.9-68 0-34.5 0-34.7 2.1-34.7.6 0 4.6-1.2 8.9-2.5 32-10.2 55.9-31 67.4-58.5 11.2-26.9 11-57.3-.7-82.9-11.6-25.5-35.3-46.1-62.2-54.1-6.6-2-12.2-3.6-12.4-3.7-.2 0-1.4-1.7-2.6-3.8-8-13.9-10.3-31.2-6.2-45.8 4.9-17 17.8-30.6 35-37 10.8-3.9 25.3-4.9 36.9-2.4 21 4.5 37.1 21.2 41.6 43.2 2.6 13.2.7 25.5-6 39.2-3 6.2-3.5 7.7-3.5 14.9 0 9.3 1.9 14.8 8.1 23.2 5.2 7 5.4 7.9 1.7 8.5-7.3 1.2-22.9 9.3-31.8 16.5-11.7 9.5-23 24-27.8 35.7-3.4 8-7.2 23.2-7.2 28.7 0 2.3.4 3.6 1.2 3.4 1.3-.2 9.3-11.2 14.8-20.2 8.8-14.5 17-23.2 31.2-32.7 15.2-10.2 26-14.5 44.8-17.7 8.3-1.3 35.9-.7 45 1.1 24.7 4.8 48.6 16.4 65.5 31.9 5.1 4.7 6.3 6.3 6.1 8.6-.3 2.8-8 12.6-15 19.1-3.9 3.7-3.4 4.3 2.1 2.3 14.7-5.3 28.5-20.9 32.7-36.8l1.7-6.4-3.8-5.7c-13.3-20-32.4-36.4-53.3-45.8-25.6-11.6-57.9-14.7-86.3-8.3-9.7 2.2-23.4 6.9-28.9 10-2.3 1.3-4.3 2.2-4.5 2-.2-.2 1.8-4.3 4.3-9.2 6.6-12.5 9.4-21.8 10.3-34.3 1.5-20-5.6-41.5-18.3-55.5-10.1-11-26.1-20.9-39.2-24-10.9-2.5-28.7-3.6-37.1-2.4zm94.5 139.3c8.8 1.8 16.4 9.6 18.4 19.1 1.5 7.3-1.6 17.1-7 22-7.9 7.2-23.7 7.3-31.9.2-6.3-5.5-9-15-6.9-24 2.1-9.4 10.1-16.8 19.8-18.4 2-.3 3.8-.7 4-.9.6-.5 2.1-.3 3.6.7.8.6 5.1 1.2 9.5 1.3zm-193.6 31.1c10.6 2.4 18.4 11.4 19.1 22 .5 8.8-3.2 16.2-10.6 21-5.2 3.4-6 3.6-14.4 3.9-7.9.3-9.3.1-13-2-5.5-3.1-9.5-7.6-11.7-13.5-3.8-9.9-1-20.9 7.2-28.1 5.7-5 14.4-6.6 23.4-4.3zm-28.2 47.6c3.8 3.2 3.4 5.4-2.2 11-7.9 7.9-8 12.2-.5 19.8l4.2 4.2 3.4-2.9c2.9-2.5 3.3-3.3 2.7-6-.9-4.4 1.5-7.9 6.2-9 8.6-2 12.7 2.2 14.8 15.3 1.4 8.3 1.4 9.9.1 13.5-1.7 4.4-6 9-8 8.5-.7-.1-4.7-.5-9-1l-7.6-.7-3.1 3.1c-2.7 2.6-3.4 3-4.5 2-2.1-1.9-1.6-4.3 1.5-7.9 3.8-4.4 3.8-5.9.2-13.3-3.2-6.6-8.2-10.7-12.9-10.7-3.4 0-8.5 4.5-8.5 7.5 0 1.1-1.6 3.5-3.5 5.4-1.9 1.9-3.5 3.9-3.5 4.5 0 1.7-2 .7-6.3-3.2-6.6-6.1-4.9-10.8 7.2-19.4 9.5-6.7 12.1-9.8 12.1-14.2 0-4.7 2.7-9.7 5.6-10 1.3-.1 3.8 1 5.7 2.6-.1.1 2.9 2.4 6.8 5.3 7.1 5.2 7.5 5.7 7.5 11.4 0 5.4-.3 6.2-3.5 9.4-2 2-4.1 3.6-4.8 3.6-2.2 0-2.1 3.3.1 4.8 2.3 1.6 9.2 1.6 9.2-.1 0-.6-1.1-2-2.5-3-2.3-1.7-2.4-2.1-1.3-5.2 1.7-4.4 5-7.6 8.2-7.9 3.7-.3 7.8 2.9 10.4 8.4 1.9 3.9 2.2 6.3 2.2 16.7 0 11.2-.1 12.1-2 12.8-2.1.8-7.8-2.9-11.1-7.2-2.5-3.3-6.9-3.8-9.7-1.1-1.6 1.6-1.6 2-.2 5 .9 1.9 1.8 5.3 2.2 7.7.5 4.3.8 4.6 5.9 6.8 4.2 1.9 5.8 2.1 7.8 1.3 4.8-1.8 11.9 1.2 15.6 6.8 2.1 3 2.5 4.9 2.5 10.5 0 5.9-.4 7.5-2.9 11.5-4.9 8-16.3 10.9-24.5 6.1-6.7-4-9.3-8.2-9.8-16.6-.4-7-.4-7-.4-1.9 0 5.1-.6 6.3-6.7 14-3.9 4.9-7.6 8.8-8.3 8.8-.7 0-2-1.2-3-2.7-1.6-2.6-1.6-3 .2-8.5 3.1-9.3 3.1-10.2-.3-14.3-2.7-3.3-3.3-3.5-8-3.5-2.8 0-5.9.4-6.8 1-1.5.9-2.3-.5-5.7-10.7-2.2-6.6-4-12.3-4-12.9 0-.6 1.7-1.9 3.7-3 7.2-3.9 10.8-10.9 8.6-16.9-.6-1.6-2.8-4.2-5.1-6l-4-2.9 3.6-3.7c7.9-8 15.7-8.6 24.9-2zm350.3 8.4c5.7 2.8 11.5 11.5 11.5 17.2 0 3.4-3.1 8.8-6.7 11.7-2.8 2.2-3.7 2.4-8.5 2-7.1-.6-11.4-3.1-14.8-8.5-6.9-10.9 1-24.9 13.2-23.6 1.7.2.3 0 5.3 1.2zm-30.2 2.1c6.5 3.3 10.7 10.5 10.7 18.5 0 7.2-3.4 13.5-9.5 17.4-5.5 3.6-13.7 3.7-20.5.2-13.2-6.8-14.9-26.3-3.2-35.1 6.7-5.1 15.5-5.5 22.5-1z"
                />
              </svg>

              {/* Eyes that change based on mood */}
              <motion.div 
                className="absolute top-[43%] left-[30%] w-2.5 h-3 bg-black rounded-full"
                animate={
                  mood === "happy" ? { scale: [1, 0.7, 1], y: [-1, 0, -1] } :
                  mood === "surprised" ? { scale: 1.3, y: -1 } :
                  { scale: 1, y: 0 }
                }
                transition={{ duration: 0.5 }}
              />
              <motion.div 
                className="absolute top-[43%] right-[30%] w-2.5 h-3 bg-black rounded-full"
                animate={
                  mood === "happy" ? { scale: [1, 0.7, 1], y: [-1, 0, -1] } :
                  mood === "surprised" ? { scale: 1.3, y: -1 } :
                  { scale: 1, y: 0 }
                }
                transition={{ duration: 0.5 }}
              />

              {/* Ear wiggle animation */}
              <motion.div
                className="absolute top-[25%] left-[15%] w-[20%] h-[15%] origin-bottom"
                animate={{ 
                  rotateZ: [0, -15, 5, 0],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute top-[25%] right-[15%] w-[20%] h-[15%] origin-bottom"
                animate={{ 
                  rotateZ: [0, 15, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut"
                }}
              />
            </div>

            {/* Enhanced "tail" with better animation */}
            <motion.div
              className="absolute bottom-0 left-[45%] w-1.5 h-14 origin-top bg-gradient-to-b from-black/80 to-black/20 rounded-full"
              animate={{ 
                rotateZ: [0, 15, -15, 0], 
                scaleY: [1, 0.9, 1.1, 1]
              }}
              transition={{ 
                duration: 1.2, 
                repeat: Infinity,
                repeatType: "mirror" 
              }}
            />
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

