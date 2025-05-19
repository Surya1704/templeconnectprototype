
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Define the temple data structure
interface TempleCollageItem {
  id: string;
  name: string;
  description: string;
  imageSrc: string; 
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

// Rearranged temple data with actual image sources
const templeData: TempleCollageItem[] = [
  // Top - large temple
  {
    id: "temple-1",
    name: "Golden Temple",
    description: "Sacred Sikh shrine in Amritsar",
    imageSrc: "/lovable-uploads/9134455b-48bc-4ef2-a3aa-3d6d5349967b.png",
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
    imageSrc: "/lovable-uploads/e72f493c-9008-468f-9b12-90b58a945398.png",
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
    imageSrc: "/lovable-uploads/fb4b3306-65cb-4755-b087-ac2fa92e2f21.png",
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
    imageSrc: "/lovable-uploads/db5bc89b-2553-46ff-a86e-4c0a629e319d.png",
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
    imageSrc: "/lovable-uploads/2ebefee1-c630-49b1-a433-7a7ae77c6683.png",
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
    imageSrc: "/lovable-uploads/adc13ff4-6e68-4df2-aa6c-ba386b70fcc9.png",
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
    imageSrc: "/lovable-uploads/e8b9989e-1fdb-419c-b37f-05581f37ee79.png",
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
    imageSrc: "/lovable-uploads/dcb523bf-24f7-4125-8e87-b23cfd0fa61d.png",
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
          className="absolute cursor-pointer hover:shadow-lg"
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
          {/* Temple image with overlay */}
          <div className="w-full h-full rounded-lg overflow-hidden shadow-md relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
            <img 
              src={temple.imageSrc} 
              alt={temple.name} 
              className="w-full h-full object-cover rounded-lg"
              onError={(e) => {
                // Fallback if image fails to load
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-3 text-white z-20">
              <h3 className="font-bold text-lg">{temple.name}</h3>
              <p className="text-sm text-white/80">{temple.description}</p>
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
