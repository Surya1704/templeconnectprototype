
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

// Jyotirlinga data with the new numbered positioning
const jyotirlingsData: JyotirlingaItem[] = [
  // 1 - Rameshwaram (center top position)
  {
    id: "rameshwaram",
    name: "Rameshwaram",
    location: "Tamil Nadu",
    position: {
      top: "3%",
      left: "38%",
      width: "24%",
      height: "28%",
      zIndex: 12,
      rotate: "0deg"
    },
    path: "/jyotirlingas/rameshwaram",
    image: "/lovable-uploads/fb4b3306-65cb-4755-b087-ac2fa92e2f21.png"
  },
  // 2 - Mallikarjuna (top left position)
  {
    id: "mallikarjuna",
    name: "Mallikarjuna",
    location: "Andhra Pradesh",
    position: {
      top: "8%",
      left: "18%", 
      width: "20%",
      height: "24%",
      zIndex: 9,
      rotate: "-1deg"
    },
    path: "/jyotirlingas/mallikarjuna",
    image: "/lovable-uploads/0aa1be60-fc0f-45e0-9ec7-4a331f3dcee1.png"
  },
  // 3 - Kashi Vishwanath (far left position)
  {
    id: "kashi-vishwanath",
    name: "Kashi Vishwanath",
    location: "Uttar Pradesh",
    position: {
      top: "28%",
      left: "5%",
      width: "20%",
      height: "24%",
      zIndex: 8,
      rotate: "-1deg"
    },
    path: "/jyotirlingas/kashi-vishwanath",
    image: "/lovable-uploads/7469bb49-3e14-45b3-b1fe-bd885af89c8a.png"
  },
  // 4 - Mahakaleshwar (top right position)
  {
    id: "mahakaleshwar",
    name: "Mahakaleshwar",
    location: "Madhya Pradesh",
    position: {
      top: "8%",
      left: "62%",
      width: "21%",
      height: "25%",
      zIndex: 9,
      rotate: "1deg"
    },
    path: "/jyotirlingas/mahakaleshwar",
    image: "/lovable-uploads/4c3fd48a-4feb-4ae6-86e1-402971d9cbf8.png"
  },
  // 5 - Bhimashankar (center right position)
  {
    id: "bhimashankar",
    name: "Bhimashankar",
    location: "Maharashtra",
    position: {
      top: "28%",
      left: "75%",
      width: "20%",
      height: "25%",
      zIndex: 8,
      rotate: "0.75deg"
    },
    path: "/jyotirlingas/bhimashankar",
    image: "/lovable-uploads/3e33b4bd-dd72-46c6-a56c-5ef6f9e88bad.png"
  },
  // 6 - Baidyanath (center position)
  {
    id: "baidyanath",
    name: "Baidyanath",
    location: "Jharkhand",
    position: {
      top: "25%",
      left: "40%",
      width: "22%",
      height: "26%",
      zIndex: 10,
      rotate: "0deg"
    },
    path: "/jyotirlingas/baidyanath",
    image: "/lovable-uploads/e4bc4fc3-559b-47cb-ab47-4804b7f32536.png"
  },
  // 7 - Omkareshwar (middle left position)
  {
    id: "omkareshwar",
    name: "Omkareshwar",
    location: "Madhya Pradesh",
    position: {
      top: "45%",
      left: "12%",
      width: "20%",
      height: "24%",
      zIndex: 8,
      rotate: "-0.5deg"
    },
    path: "/jyotirlingas/omkareshwar",
    image: "/lovable-uploads/2719bcc9-3630-489d-97b4-8f4a9d1b2de5.png"
  },
  // 8 - Somnath (middle right position)
  {
    id: "somnath",
    name: "Somnath",
    location: "Gujarat",
    position: {
      top: "45%",
      left: "68%",
      width: "20%",
      height: "24%",
      zIndex: 8,
      rotate: "0.75deg"
    },
    path: "/jyotirlingas/somnath",
    image: "/lovable-uploads/892016ae-9f94-43cc-bb89-eb3d1417f718.png"
  },
  // 9 - Nageshwar (bottom left position)
  {
    id: "nageshwar",
    name: "Nageshwar",
    location: "Gujarat",
    position: {
      top: "63%",
      left: "18%",
      width: "20%",
      height: "24%",
      zIndex: 8,
      rotate: "0deg"
    },
    path: "/jyotirlingas/nageshwar",
    image: "/lovable-uploads/db5bc89b-2553-46ff-a86e-4c0a629e319d.png"
  },
  // 10 - Trimbakeshwar (bottom center-left position)
  {
    id: "trimbakeshwar",
    name: "Trimbakeshwar",
    location: "Maharashtra",
    position: {
      top: "60%",
      left: "36%",
      width: "20%",
      height: "25%",
      zIndex: 9,
      rotate: "1deg"
    },
    path: "/jyotirlingas/trimbakeshwar",
    image: "/lovable-uploads/2ebefee1-c630-49b1-a433-7a7ae77c6683.png"
  },
  // 11 - Kedarnath (bottom right position)
  {
    id: "kedarnath",
    name: "Kedarnath",
    location: "Uttarakhand",
    position: {
      top: "63%",
      left: "62%",
      width: "20%",
      height: "25%",
      zIndex: 8,
      rotate: "1.2deg"
    },
    path: "/jyotirlingas/kedarnath",
    image: "/lovable-uploads/e8b9989e-1fdb-419c-b37f-05581f37ee79.png"
  },
  // 12 - Grishneshwar (bottom center position)
  {
    id: "grishneshwar",
    name: "Grishneshwar",
    location: "Maharashtra",
    position: {
      top: "73%",
      left: "38%",
      width: "22%",
      height: "26%",
      zIndex: 9,
      rotate: "0deg"
    },
    path: "/jyotirlingas/grishneshwar",
    image: "/lovable-uploads/d168a39e-e3c3-46d9-bc2b-ce2460e09c78.png"
  }
];

// Mandala decoration positions
const mandalaPositions = [
  { top: "5%", left: "5%", size: "100px", opacity: 0.15, rotate: "0deg" },
  { top: "5%", left: "85%", size: "120px", opacity: 0.15, rotate: "30deg" },
  { top: "85%", left: "5%", size: "90px", opacity: 0.15, rotate: "45deg" },
  { top: "85%", left: "85%", size: "110px", opacity: 0.15, rotate: "15deg" },
  { top: "45%", left: "20%", size: "70px", opacity: 0.1, rotate: "60deg" },
  { top: "45%", left: "75%", size: "80px", opacity: 0.1, rotate: "10deg" }
];

// Sanskrit texts for background
const sanskritTexts = [
  "ॐ", "नमः शिवाय", "हरे हर", "शिव शंभो", "महादेव", "त्र्यम्बकम्", 
  "शिव शक्ति", "भोलेनाथ", "जय शिव शंकर", "ॐ नमः शिवाय"
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
      
      {/* Decorative mandalas */}
      {mandalaPositions.map((mandala, i) => (
        <motion.div
          key={`mandala-${i}`}
          className="absolute rounded-full"
          style={{
            top: mandala.top,
            left: mandala.left,
            width: mandala.size,
            height: mandala.size,
            opacity: mandala.opacity,
            background: "radial-gradient(circle, rgba(212,175,55,0.3) 0%, rgba(212,175,55,0.1) 50%, rgba(212,175,55,0) 70%)",
            transform: `rotate(${mandala.rotate})`,
            zIndex: 2
          }}
          animate={{
            rotate: [mandala.rotate, `calc(${mandala.rotate} + 360deg)`],
          }}
          transition={{
            duration: 100 + Math.random() * 50,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
      
      {/* Large Om symbol at the top */}
      <motion.div
        className="absolute top-[3%] left-[49%] transform -translate-x-1/2 text-spiritual-gold/40 text-6xl font-bold z-3"
        animate={{
          opacity: [0.4, 0.6, 0.4],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        ॐ
      </motion.div>
      
      {/* Title */}
      <div className="absolute top-4 left-0 right-0 z-20 text-center">
        <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-spiritual-gold drop-shadow-sm">
          The 12 Jyotirlingas of India
        </h2>
      </div>
      
      {/* Temple images */}
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
          whileHover={{ 
            scale: 1.05, 
            transition: { duration: 0.2 },
            filter: "brightness(1.2)"
          }}
        >
          {/* Temple image */}
          <img 
            src={jyotirlinga.image} 
            alt={jyotirlinga.name} 
            className="w-full h-full object-contain"
            title={`${jyotirlinga.name}, ${jyotirlinga.location}`}
          />
          
          {/* Temple name tooltip on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute bottom-0 left-0 right-0 bg-spiritual-maroon/70 text-white text-center py-1 px-2 text-sm rounded-b-lg pointer-events-none"
          >
            {jyotirlinga.name}
          </motion.div>
        </motion.div>
      ))}
      
      {/* Sanskrit texts floating randomly */}
      {sanskritTexts.map((text, i) => (
        <motion.div
          key={`sanskrit-${i}`}
          className="absolute text-spiritual-gold/20 pointer-events-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 16 + 14}px`,
            transform: `rotate(${Math.random() * 360}deg)`,
            zIndex: 2
          }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 5,
          }}
        >
          {text}
        </motion.div>
      ))}
      
      {/* Particle effect - small golden dots */}
      {Array.from({ length: 24 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full bg-spiritual-gold/30 pointer-events-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            zIndex: 2
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 5,
          }}
        />
      ))}
      
      {/* Golden border around the entire collage */}
      <div className="absolute inset-0 pointer-events-none border-2 border-spiritual-gold/60 rounded-xl z-30"></div>
    </div>
  );
};

export default JyotirlingsCollage;
