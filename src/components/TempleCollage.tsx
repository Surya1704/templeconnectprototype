
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

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
  path: string;
}

// Sample temple data for the collage
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
    path: "/temple/golden-temple"
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
    path: "/temple/meenakshi"
  },
  {
    id: "temple-3",
    name: "Kedarnath Temple",
    description: "Ancient shrine in the Himalayas",
    position: {
      top: "10%",
      left: "70%",
      width: "22%",
      height: "30%",
      zIndex: 1,
      rotate: "3deg"
    },
    path: "/temple/kedarnath"
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
    path: "/temple/jagannath"
  },
  {
    id: "temple-5",
    name: "Kashi Vishwanath",
    description: "One of the most famous Hindu temples",
    position: {
      top: "50%",
      left: "35%",
      width: "25%",
      height: "35%",
      zIndex: 2,
      rotate: "1deg"
    },
    path: "/temple/kashi-vishwanath"
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
    path: "/temple/brihadeeswara"
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
    path: "/temple/tirupati"
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
    path: "/temple/badrinath"
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
          onClick={() => navigate(temple.path)}
          whileHover={{ scale: 1.05, zIndex: 10, transition: { duration: 0.3 } }}
        >
          <div className={cn(
            "w-full h-full rounded-lg overflow-hidden border-4 border-spiritual-gold/40 shadow-lg",
            "bg-gradient-to-br from-spiritual-sandstone to-spiritual-ivory",
            "transition-all duration-300 group-hover:border-spiritual-gold group-hover:shadow-2xl"
          )}>
            <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
              {/* Temple visual representation - using decorative elements since we can't use images */}
              <div className="w-16 h-20 mb-2 mx-auto relative">
                <div className="absolute inset-0 bg-spiritual-maroon/20 rounded-t-2xl"></div>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-12 h-12 rounded-t-full bg-spiritual-ochre/30"></div>
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-5 h-5 rounded-full bg-spiritual-gold/40"></div>
              </div>
              
              <h3 className="font-cinzel text-lg font-bold text-spiritual-maroon mb-1 drop-shadow-sm">
                {temple.name}
              </h3>
              
              <p className="text-xs font-sans text-spiritual-maroon/70">
                {temple.description}
              </p>
              
              <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs px-2 py-1 bg-spiritual-gold/20 rounded-full text-spiritual-maroon font-medium">
                  Explore Now
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
      
      {/* Overlapping decorative elements */}
      <div className="absolute top-5 left-5 w-40 h-40 rounded-full bg-spiritual-gold/5 blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-spiritual-maroon/5 blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-spiritual-ochre/5 blur-xl"></div>
      
      {/* Subtle animated particle effect for divine ambiance */}
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
