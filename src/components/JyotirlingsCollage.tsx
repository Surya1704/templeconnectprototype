
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

// Jyotirlinga data arranged in a tighter formation
const jyotirlingsData: JyotirlingaItem[] = [
  // Top large temple
  {
    id: "rameshwaram",
    name: "Rameshwaram",
    location: "Tamil Nadu",
    position: {
      top: "0%",
      left: "38%",
      width: "25%",
      height: "32%",
      zIndex: 10,
    },
    path: "/jyotirlingas/rameshwaram",
    image: "/lovable-uploads/fb4b3306-65cb-4755-b087-ac2fa92e2f21.png"
  },
  // Upper row - left
  {
    id: "mallikarjuna",
    name: "Mallikarjuna",
    location: "Andhra Pradesh",
    position: {
      top: "15%",
      left: "18%",
      width: "22%",
      height: "28%",
      zIndex: 8,
      rotate: "-1deg"
    },
    path: "/jyotirlingas/mallikarjuna",
    image: "/lovable-uploads/0aa1be60-fc0f-45e0-9ec7-4a331f3dcee1.png"
  },
  // Upper row - right
  {
    id: "mahakaleshwar",
    name: "Mahakaleshwar",
    location: "Madhya Pradesh",
    position: {
      top: "15%",
      left: "60%",
      width: "22%",
      height: "28%",
      zIndex: 8,
      rotate: "1deg"
    },
    path: "/jyotirlingas/mahakaleshwar",
    image: "/lovable-uploads/4c3fd48a-4feb-4ae6-86e1-402971d9cbf8.png"
  },
  // Middle row - left
  {
    id: "omkareshwar",
    name: "Omkareshwar",
    location: "Madhya Pradesh",
    position: {
      top: "30%",
      left: "25%",
      width: "20%",
      height: "26%",
      zIndex: 7,
      rotate: "-0.5deg"
    },
    path: "/jyotirlingas/omkareshwar",
    image: "/lovable-uploads/2719bcc9-3630-489d-97b4-8f4a9d1b2de5.png"
  },
  // Middle row - center
  {
    id: "nageshwar",
    name: "Nageshwar",
    location: "Gujarat",
    position: {
      top: "28%",
      left: "42%",
      width: "18%",
      height: "24%",
      zIndex: 9,
    },
    path: "/jyotirlingas/nageshwar",
    image: "/lovable-uploads/db5bc89b-2553-46ff-a86e-4c0a629e319d.png"
  },
  // Middle row - right
  {
    id: "baidyanath",
    name: "Baidyanath",
    location: "Jharkhand",
    position: {
      top: "30%",
      left: "58%",
      width: "20%",
      height: "26%",
      zIndex: 7,
      rotate: "0.5deg"
    },
    path: "/jyotirlingas/baidyanath",
    image: "/lovable-uploads/e4bc4fc3-559b-47cb-ab47-4804b7f32536.png"
  },
  // Lower middle row - left
  {
    id: "kashi-vishwanath",
    name: "Kashi Vishwanath",
    location: "Uttar Pradesh",
    position: {
      top: "45%",
      left: "28%",
      width: "19%",
      height: "25%",
      zIndex: 6,
      rotate: "-1deg"
    },
    path: "/jyotirlingas/kashi-vishwanath",
    image: "/lovable-uploads/7469bb49-3e14-45b3-b1fe-bd885af89c8a.png"
  },
  // Lower middle row - right
  {
    id: "trimbakeshwar",
    name: "Trimbakeshwar",
    location: "Maharashtra",
    position: {
      top: "45%",
      left: "55%",
      width: "19%",
      height: "25%",
      zIndex: 6,
      rotate: "1deg"
    },
    path: "/jyotirlingas/trimbakeshwar",
    image: "/lovable-uploads/2ebefee1-c630-49b1-a433-7a7ae77c6683.png"
  },
  // Lower row - left
  {
    id: "bhimashankar",
    name: "Bhimashankar",
    location: "Maharashtra",
    position: {
      top: "56%",
      left: "18%",
      width: "20%",
      height: "26%",
      zIndex: 8,
      rotate: "-0.75deg"
    },
    path: "/jyotirlingas/bhimashankar",
    image: "/lovable-uploads/3e33b4bd-dd72-46c6-a56c-5ef6f9e88bad.png"
  },
  // Lower row - right
  {
    id: "somnath",
    name: "Somnath",
    location: "Gujarat",
    position: {
      top: "56%",
      left: "62%",
      width: "20%",
      height: "26%",
      zIndex: 8,
      rotate: "0.75deg"
    },
    path: "/jyotirlingas/somnath",
    image: "/lovable-uploads/892016ae-9f94-43cc-bb89-eb3d1417f718.png"
  },
  // Bottom row - kedarnath higher
  {
    id: "kedarnath",
    name: "Kedarnath",
    location: "Uttarakhand",
    position: {
      top: "50%",
      left: "40%",
      width: "22%",
      height: "28%",
      zIndex: 9,
    },
    path: "/jyotirlingas/kedarnath",
    image: "/lovable-uploads/e8b9989e-1fdb-419c-b37f-05581f37ee79.png"
  },
  // Bottom edge - grishneshwar higher
  {
    id: "grishneshwar",
    name: "Grishneshwar",
    location: "Maharashtra",
    position: {
      top: "65%",
      left: "40%",
      width: "20%",
      height: "26%",
      zIndex: 8,
    },
    path: "/jyotirlingas/grishneshwar",
    image: "/lovable-uploads/d168a39e-e3c3-46d9-bc2b-ce2460e09c78.png"
  }
];

const JyotirlingsCollage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[85vh] md:h-[75vh] overflow-hidden rounded-xl">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(135deg, #D4AF37 0%, #C5A028 50%, #B8860B 100%)",
          opacity: 0.15
        }}
      ></div>

      {/* Dark overlay background */}
      <div 
        className="absolute inset-0 z-1 bg-gradient-to-br from-[#221F26]/75 to-[#2A1E17]/70"
      ></div>
      
      {/* Title */}
      <div className="absolute top-4 left-0 right-0 z-20 text-center">
        <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-spiritual-gold drop-shadow-sm">
          The 12 Jyotirlingas of India
        </h2>
      </div>
      
      {/* Simple clickable images without cards or hover effects */}
      {jyotirlingsData.map((jyotirlinga) => (
        <motion.div
          key={jyotirlinga.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: Math.random() * 0.5 }}
          className="absolute cursor-pointer"
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
          <img 
            src={jyotirlinga.image} 
            alt={jyotirlinga.name} 
            className="w-full h-full object-contain"
          />
        </motion.div>
      ))}
      
      {/* Decorative golden border */}
      <div className="absolute inset-0 pointer-events-none border-2 border-spiritual-gold/60 rounded-xl"></div>
    </div>
  );
};

export default JyotirlingsCollage;
