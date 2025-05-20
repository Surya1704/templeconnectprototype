
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import ImageWithFallback from "./ImageWithFallback";

// Define the temple data structure
interface TempleCollageItem {
  id: string;
  name: string;
  description: string;
  position: {
    top: string;
    left: string;
    width: string;
    height: string;
    zIndex: number;
    rotate?: string;
  };
  templeId: string;
  imageSrc: string;
}

// Updated temple data for the collage with 8 selected temples (excluding jyotirlingas)
const templeData: TempleCollageItem[] = [
  {
    id: "temple-1",
    name: "Golden Temple",
    description: "Sacred Sikh shrine in Amritsar",
    position: {
      top: "5%",
      left: "10%",
      width: "25%",
      height: "35%",
      zIndex: 2,
      rotate: "-2deg"
    },
    templeId: "2", // ID for Golden Temple
    imageSrc: "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a69-goldentemple1.jpg"
  },
  {
    id: "temple-2",
    name: "Meenakshi Temple",
    description: "Iconic temple with colorful gopurams",
    position: {
      top: "15%",
      left: "38%",
      width: "30%",
      height: "40%",
      zIndex: 3,
    },
    templeId: "4", // ID for Meenakshi Temple
    imageSrc: "/lovable-uploads/adc13ff4-6e68-4df2-aa6c-ba386b70fcc9.png"
  },
  {
    id: "temple-4",
    name: "Jagannath Puri",
    description: "Famous for its annual Rath Yatra",
    position: {
      top: "42%",
      left: "5%",
      width: "28%",
      height: "38%",
      zIndex: 4,
      rotate: "-1deg"
    },
    templeId: "5", // ID for Jagannath Puri
    imageSrc: "/lovable-uploads/28a331ad-d3c0-4157-8b9a-32af5d26e785.png"
  },
  {
    id: "temple-6",
    name: "Brihadeeswara Temple",
    description: "UNESCO World Heritage site in Thanjavur",
    position: {
      top: "45%",
      left: "65%",
      width: "30%",
      height: "42%",
      zIndex: 3,
      rotate: "-2deg"
    },
    templeId: "9", // ID for Brihadeeswara Temple
    imageSrc: "/lovable-uploads/dc0a16f8-c635-404e-8e78-b77eb4b37792.png"
  },
  {
    id: "temple-7",
    name: "Tirupati Balaji",
    description: "World's richest temple",
    position: {
      top: "75%",
      left: "20%",
      width: "26%",
      height: "35%",
      zIndex: 5,
    },
    templeId: "1", // ID for Tirupati Balaji
    imageSrc: "/lovable-uploads/055b2680-dfaa-40c6-b314-04c7b4fe0a66-tirupatibalaji1.jpg"
  },
  {
    id: "temple-8",
    name: "Badrinath Temple",
    description: "Sacred to Lord Vishnu",
    position: {
      top: "70%",
      left: "50%",
      width: "28%",
      height: "38%",
      zIndex: 1,
      rotate: "2deg"
    },
    templeId: "7", // ID for Badrinath Temple
    imageSrc: "/lovable-uploads/ea3c8734-1903-4391-bad2-38836ad90d38.png"
  },
  {
    id: "temple-9",
    name: "Lotus Temple",
    description: "Iconic Bahá'í House of Worship",
    position: {
      top: "20%",
      left: "70%",
      width: "22%",
      height: "30%",
      zIndex: 2,
      rotate: "1deg"
    },
    templeId: "3", // ID for Lotus Temple
    imageSrc: "https://images.unsplash.com/photo-1587922546307-776227941871?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: "temple-10",
    name: "Shirdi Sai Baba Temple",
    description: "Shrine of the revered saint Sai Baba",
    position: {
      top: "8%",
      left: "55%",
      width: "24%",
      height: "28%",
      zIndex: 2,
      rotate: "-1deg"
    },
    templeId: "42", // ID for Shirdi Temple
    imageSrc: "https://images.unsplash.com/photo-1600516124918-79a230d1b66f?q=80&w=1974&auto=format&fit=crop"
  }
];

const TempleCollage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[90vh] overflow-hidden bg-gradient-to-b from-spiritual-maroon/30 via-spiritual-ochre/30 to-spiritual-saffron/20 rounded-xl">
      {templeData.map((temple) => (
        <motion.div
          key={temple.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: Math.random() * 0.5 }}
          className="absolute cursor-pointer group"
          style={{
            top: temple.position.top,
            left: temple.position.left,
            width: temple.position.width,
            height: temple.position.height,
            zIndex: temple.position.zIndex,
            transform: temple.position.rotate ? `rotate(${temple.position.rotate})` : 'none'
          }}
          onClick={() => navigate(`/temple/${temple.templeId}`)}
          whileHover={{ scale: 1.05, zIndex: 10, transition: { duration: 0.3 } }}
        >
          <div className={cn(
            "w-full h-full rounded-lg overflow-hidden border-4 border-spiritual-gold/40 shadow-lg",
            "transition-all duration-300 group-hover:border-spiritual-gold group-hover:shadow-2xl"
          )}>
            {/* Temple image */}
            <div className="w-full h-full relative">
              {/* Fallback temple icon if image fails to load */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-spiritual-sandstone to-spiritual-ivory">
                <div className="w-16 h-20 relative">
                  <div className="absolute inset-0 bg-spiritual-ochre/50 rounded-t-2xl"></div>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-12 h-12 rounded-t-full bg-spiritual-maroon/40"></div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 w-5 h-5 rounded-full bg-spiritual-gold/60"></div>
                </div>
              </div>
              
              {/* Actual temple image */}
              <ImageWithFallback 
                src={temple.imageSrc} 
                alt={`${temple.name} Temple`} 
                className="absolute inset-0 w-full h-full object-cover"
                fallbackSrc="/placeholder.svg"
              />
              
              {/* Overlay with temple name */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-center justify-end p-3">
                <h3 className="font-cinzel text-lg font-bold text-white mb-1 drop-shadow-sm">
                  {temple.name}
                </h3>
                
                <p className="text-xs font-sans text-white/90 mb-2">
                  {temple.description}
                </p>
                
                <div className="opacity-100 transition-opacity duration-300">
                  <span className="text-xs px-2 py-1 bg-spiritual-gold/30 rounded-full text-white font-medium">
                    Explore Now
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
      
      {/* Decorative elements */}
      <div className="absolute top-5 left-5 w-40 h-40 rounded-full bg-spiritual-gold/5 blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-spiritual-maroon/5 blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-spiritual-ochre/5 blur-xl"></div>
      
      {/* Animated particle effect for divine ambiance */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-spiritual-gold/40"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center">
        <motion.p 
          className="text-spiritual-maroon/70 text-sm mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Click on any temple to start your spiritual journey
        </motion.p>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5L12 19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-spiritual-maroon/60"/>
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default TempleCollage;
