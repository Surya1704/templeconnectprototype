
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Define the jyotirlinga data structure
interface JyotirlingaItem {
  id: string;
  name: string;
  location: string;
  position: {
    top: string;
    left: string;
    width: string;
    height: string;
    zIndex: number;
    rotate?: string;
  };
  path: string;
  image: string;
}

// Jyotirlinga data with closer positioning and more overlap
const jyotirlingsData: JyotirlingaItem[] = [
  // Center temple (was Rameshwaram)
  {
    id: "rameshwaram",
    name: "Rameshwaram",
    location: "Tamil Nadu",
    position: {
      top: "5%",
      left: "36%",
      width: "30%",
      height: "34%",
      zIndex: 10,
      rotate: "0deg"
    },
    path: "/jyotirlingas/rameshwaram",
    image: "/lovable-uploads/fb4b3306-65cb-4755-b087-ac2fa92e2f21.png"
  },
  // Left side top temple - moved closer to center
  {
    id: "mallikarjuna",
    name: "Mallikarjuna",
    location: "Andhra Pradesh",
    position: {
      top: "12%",
      left: "15%", 
      width: "25%",
      height: "28%",
      zIndex: 9,
      rotate: "-1deg"
    },
    path: "/jyotirlingas/mallikarjuna",
    image: "/lovable-uploads/0aa1be60-fc0f-45e0-9ec7-4a331f3dcee1.png"
  },
  // Right side temple - moved closer to center
  {
    id: "mahakaleshwar",
    name: "Mahakaleshwar",
    location: "Madhya Pradesh",
    position: {
      top: "8%",
      left: "62%",
      width: "26%",
      height: "30%",
      zIndex: 8,
      rotate: "1deg"
    },
    path: "/jyotirlingas/mahakaleshwar",
    image: "/lovable-uploads/4c3fd48a-4feb-4ae6-86e1-402971d9cbf8.png"
  },
  // Left-middle area - moved closer
  {
    id: "omkareshwar",
    name: "Omkareshwar",
    location: "Madhya Pradesh",
    position: {
      top: "35%",
      left: "8%",
      width: "22%",
      height: "26%",
      zIndex: 7,
      rotate: "-0.5deg"
    },
    path: "/jyotirlingas/omkareshwar",
    image: "/lovable-uploads/2719bcc9-3630-489d-97b4-8f4a9d1b2de5.png"
  },
  // Upper middle-right - moved closer
  {
    id: "nageshwar",
    name: "Nageshwar",
    location: "Gujarat",
    position: {
      top: "34%",
      left: "68%",
      width: "24%",
      height: "28%",
      zIndex: 9,
      rotate: "0deg"
    },
    path: "/jyotirlingas/nageshwar",
    image: "/lovable-uploads/db5bc89b-2553-46ff-a86e-4c0a629e319d.png"
  },
  // Middle-right area - moved closer
  {
    id: "baidyanath",
    name: "Baidyanath",
    location: "Jharkhand",
    position: {
      top: "36%",
      left: "43%",
      width: "26%",
      height: "32%",
      zIndex: 8,
      rotate: "0.5deg"
    },
    path: "/jyotirlingas/baidyanath",
    image: "/lovable-uploads/e4bc4fc3-559b-47cb-ab47-4804b7f32536.png"
  },
  // Bottom left grouping - starting left (moved closer)
  {
    id: "kashi-vishwanath",
    name: "Kashi Vishwanath",
    location: "Uttar Pradesh",
    position: {
      top: "60%",
      left: "10%",
      width: "20%",
      height: "25%",
      zIndex: 7,
      rotate: "-1deg"
    },
    path: "/jyotirlingas/kashi-vishwanath",
    image: "/lovable-uploads/7469bb49-3e14-45b3-b1fe-bd885af89c8a.png"
  },
  // Bottom left grouping - second from left (moved closer)
  {
    id: "trimbakeshwar",
    name: "Trimbakeshwar",
    location: "Maharashtra",
    position: {
      top: "62%",
      left: "28%",
      width: "20%",
      height: "28%",
      zIndex: 7,
      rotate: "1deg"
    },
    path: "/jyotirlingas/trimbakeshwar",
    image: "/lovable-uploads/2ebefee1-c630-49b1-a433-7a7ae77c6683.png"
  },
  // Bottom middle (moved closer) 
  {
    id: "bhimashankar",
    name: "Bhimashankar",
    location: "Maharashtra",
    position: {
      top: "62%",
      left: "42%",
      width: "22%",
      height: "30%",
      zIndex: 8,
      rotate: "-0.75deg"
    },
    path: "/jyotirlingas/bhimashankar",
    image: "/lovable-uploads/3e33b4bd-dd72-46c6-a56c-5ef6f9e88bad.png"
  },
  // Bottom right (moved closer)
  {
    id: "somnath",
    name: "Somnath",
    location: "Gujarat",
    position: {
      top: "60%",
      left: "62%",
      width: "22%",
      height: "29%",
      zIndex: 8,
      rotate: "0.75deg"
    },
    path: "/jyotirlingas/somnath",
    image: "/lovable-uploads/892016ae-9f94-43cc-bb89-eb3d1417f718.png"
  },
  // Bottom right corner (moved closer)
  {
    id: "kedarnath",
    name: "Kedarnath",
    location: "Uttarakhand",
    position: {
      top: "56%",
      left: "73%",
      width: "20%",
      height: "30%",
      zIndex: 9,
      rotate: "1.2deg"
    },
    path: "/jyotirlingas/kedarnath",
    image: "/lovable-uploads/e8b9989e-1fdb-419c-b37f-05581f37ee79.png"
  },
  // Bottom center (moved closer)
  {
    id: "grishneshwar",
    name: "Grishneshwar",
    location: "Maharashtra",
    position: {
      top: "70%",
      left: "35%",
      width: "24%",
      height: "28%",
      zIndex: 8,
      rotate: "0deg"
    },
    path: "/jyotirlingas/grishneshwar",
    image: "/lovable-uploads/d168a39e-e3c3-46d9-bc2b-ce2460e09c78.png"
  }
];

const JyotirlingsCollage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[85vh] md:h-[75vh] overflow-hidden rounded-xl">
      {/* Darker background with Sanskrit writing pattern */}
      <div 
        className="absolute inset-0 z-0 bg-[#221F26]"
      ></div>
      
      {/* Sanskrit pattern overlay */}
      <div 
        className="absolute inset-0 z-1"
        style={{
          backgroundImage: "url('/assets/patterns/sanskrit-bg.png')",
          backgroundSize: "cover",
          opacity: 0.15
        }}
      ></div>
      
      {/* Title */}
      <div className="absolute top-4 left-0 right-0 z-20 text-center">
        <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-spiritual-gold drop-shadow-sm">
          The 12 Jyotirlingas of India
        </h2>
      </div>
      
      {/* Temple images - without white border/card */}
      {jyotirlingsData.map((jyotirlinga) => (
        <motion.div
          key={jyotirlinga.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: Math.random() * 0.5 }}
          className="absolute cursor-pointer hover:z-50"
          style={{
            top: jyotirlinga.position.top,
            left: jyotirlinga.position.left,
            width: jyotirlinga.position.width,
            height: jyotirlinga.position.height,
            zIndex: jyotirlinga.position.zIndex,
            transform: jyotirlinga.position.rotate ? `rotate(${jyotirlinga.position.rotate})` : undefined
          }}
          onClick={() => navigate(jyotirlinga.path)}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          {/* Temple image - direct image without white border */}
          <img 
            src={jyotirlinga.image} 
            alt={jyotirlinga.name} 
            className="w-full h-full object-contain"
            title={`${jyotirlinga.name}, ${jyotirlinga.location}`}
          />
        </motion.div>
      ))}
      
      {/* Sanskrit particle effects - for more visual interest */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`sanskrit-particle-${i}`}
          className="absolute text-spiritual-gold/20 text-xs"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 5,
          }}
        >
          ॐ
        </motion.div>
      ))}
      
      {/* Golden border around the entire collage */}
      <div className="absolute inset-0 pointer-events-none border-2 border-spiritual-gold/60 rounded-xl"></div>
    </div>
  );
};

export default JyotirlingsCollage;
