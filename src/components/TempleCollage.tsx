
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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

// Rearranged temple data in a tighter diamond/pyramid shape
const templeData: TempleCollageItem[] = [
  // Top - large temple
  {
    id: "temple-1",
    name: "Golden Temple",
    description: "Sacred Sikh shrine in Amritsar",
    position: {
      top: "0%",
      left: "38%",
      width: "25%",
      height: "32%",
      zIndex: 5,
      rotate: "-0.5deg"
    },
    path: "/temple/24"
  },
  // Middle row - left side (medium)
  {
    id: "temple-2",
    name: "Meenakshi Temple",
    description: "Iconic temple with colorful gopurams",
    position: {
      top: "18%",
      left: "18%",
      width: "22%",
      height: "28%",
      zIndex: 3,
      rotate: "1deg"
    },
    path: "/temple/25"
  },
  // Middle row - center (detailed)
  {
    id: "temple-3",
    name: "Kedarnath Temple",
    description: "Ancient shrine in the Himalayas",
    position: {
      top: "20%",
      left: "42%",
      width: "18%",
      height: "24%",
      zIndex: 4,
    },
    path: "/temple/28"
  },
  // Middle row - right side (medium)
  {
    id: "temple-4",
    name: "Jagannath Puri",
    description: "Famous for its annual Rath Yatra",
    position: {
      top: "18%",
      left: "62%",
      width: "22%",
      height: "28%",
      zIndex: 3,
      rotate: "-1deg"
    },
    path: "/temple/29"
  },
  // Lower middle - left (detailed)
  {
    id: "temple-5",
    name: "Kashi Vishwanath",
    description: "One of the most famous Hindu temples",
    position: {
      top: "40%",
      left: "25%",
      width: "20%",
      height: "26%",
      zIndex: 4,
      rotate: "-0.5deg"
    },
    path: "/temple/72"
  },
  // Lower middle - right (detailed)
  {
    id: "temple-6",
    name: "Brihadeeswara Temple",
    description: "UNESCO World Heritage site in Thanjavur",
    position: {
      top: "40%",
      left: "56%",
      width: "20%",
      height: "26%",
      zIndex: 4,
      rotate: "0.5deg"
    },
    path: "/temple/34"
  },
  // Lower row - left (medium)
  {
    id: "temple-7",
    name: "Tirupati Balaji",
    description: "World's richest temple",
    position: {
      top: "55%",
      left: "18%",
      width: "22%",
      height: "28%",
      zIndex: 3,
      rotate: "1deg"
    },
    path: "/temple/93"
  },
  // Bottom - large temple
  {
    id: "temple-8",
    name: "Badrinath Temple",
    description: "Sacred to Lord Vishnu",
    position: {
      top: "50%",
      left: "40%",
      width: "25%",
      height: "32%",
      zIndex: 5,
      rotate: "-0.5deg"
    },
    path: "/temple/30"
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
          className="absolute cursor-pointer"
          style={{
            top: temple.position.top,
            left: temple.position.left,
            width: temple.position.width,
            height: temple.position.height,
            zIndex: temple.position.zIndex,
            transform: temple.position.rotate ? `rotate(${temple.position.rotate})` : 'none'
          }}
          onClick={() => navigate(temple.path)}
          whileHover={{ scale: 1.05, zIndex: 10, transition: { duration: 0.2 } }}
        >
          {/* Temple visual representation - using decorative elements since we use stylized graphics */}
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="w-16 h-20 mb-2 mx-auto relative">
              <div className="absolute inset-0 bg-spiritual-maroon/70 rounded-t-2xl"></div>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-12 h-12 rounded-t-full bg-spiritual-ochre/80"></div>
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-5 h-5 rounded-full bg-spiritual-gold/90"></div>
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
    </div>
  );
};

export default TempleCollage;
