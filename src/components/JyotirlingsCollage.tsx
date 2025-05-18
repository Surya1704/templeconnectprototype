
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

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

// Jyotirlinga data for the collage
const jyotirlingsData: JyotirlingaItem[] = [
  {
    id: "somnath",
    name: "Somnath",
    location: "Gujarat",
    position: {
      top: "5%",
      left: "10%",
      width: "25%",
      height: "30%",
      zIndex: 5,
      rotate: "-2deg"
    },
    path: "/jyotirlingas/somnath",
    image: "/assets/temples/somnath-temple.png"
  },
  {
    id: "mallikarjuna",
    name: "Mallikarjuna",
    location: "Andhra Pradesh",
    position: {
      top: "15%",
      left: "38%",
      width: "30%",
      height: "35%",
      zIndex: 3,
    },
    path: "/jyotirlingas/mallikarjuna",
    image: "/assets/temples/mallikarjuna-temple.png"
  },
  {
    id: "mahakaleshwar",
    name: "Mahakaleshwar",
    location: "Madhya Pradesh",
    position: {
      top: "10%",
      left: "70%",
      width: "22%",
      height: "30%",
      zIndex: 6,
      rotate: "3deg"
    },
    path: "/jyotirlingas/mahakaleshwar",
    image: "/assets/temples/mahakaleshwar-temple.png"
  },
  {
    id: "omkareshwar",
    name: "Omkareshwar",
    location: "Madhya Pradesh",
    position: {
      top: "42%",
      left: "5%",
      width: "28%",
      height: "38%",
      zIndex: 4,
      rotate: "-1deg"
    },
    path: "/jyotirlingas/omkareshwar",
    image: "/assets/temples/omkareshwar-temple.png"
  },
  {
    id: "kedarnath",
    name: "Kedarnath",
    location: "Uttarakhand",
    position: {
      top: "25%",
      left: "55%",
      width: "25%",
      height: "35%",
      zIndex: 2,
      rotate: "1deg"
    },
    path: "/jyotirlingas/kedarnath",
    image: "/assets/temples/kedarnath-temple.png"
  },
  {
    id: "bhimashankar",
    name: "Bhimashankar",
    location: "Maharashtra",
    position: {
      top: "45%",
      left: "65%",
      width: "30%",
      height: "32%",
      zIndex: 3,
      rotate: "-2deg"
    },
    path: "/jyotirlingas/bhimashankar",
    image: "/assets/temples/bhimashankar-temple.png"
  },
  {
    id: "kashi-vishwanath",
    name: "Kashi Vishwanath",
    location: "Uttar Pradesh",
    position: {
      top: "75%",
      left: "10%",
      width: "26%",
      height: "35%",
      zIndex: 8,
    },
    path: "/jyotirlingas/kashi-vishwanath",
    image: "/assets/temples/kashi-vishwanath.png"
  },
  {
    id: "trimbakeshwar",
    name: "Trimbakeshwar",
    location: "Maharashtra",
    position: {
      top: "70%",
      left: "38%",
      width: "28%",
      height: "38%",
      zIndex: 7,
      rotate: "2deg"
    },
    path: "/jyotirlingas/trimbakeshwar",
    image: "/assets/temples/trimbakeshwar-temple.png"
  },
  {
    id: "vaidyanath",
    name: "Vaidyanath",
    location: "Jharkhand",
    position: {
      top: "50%",
      left: "35%",
      width: "28%",
      height: "30%",
      zIndex: 10,
    },
    path: "/jyotirlingas/vaidyanath",
    image: "/assets/temples/vaidyanath-temple.png"
  },
  {
    id: "nageshwar",
    name: "Nageshwar",
    location: "Gujarat",
    position: {
      top: "30%",
      left: "22%",
      width: "24%",
      height: "32%",
      zIndex: 9,
      rotate: "-1deg"
    },
    path: "/jyotirlingas/nageshwar",
    image: "/assets/temples/nageshwar-temple.png"
  },
  {
    id: "rameshwaram",
    name: "Rameshwaram",
    location: "Tamil Nadu",
    position: {
      top: "65%",
      left: "68%",
      width: "25%",
      height: "32%",
      zIndex: 8,
      rotate: "1deg"
    },
    path: "/jyotirlingas/rameshwaram",
    image: "/assets/temples/rameshwaram-temple.png"
  },
  {
    id: "grishneshwar",
    name: "Grishneshwar",
    location: "Maharashtra",
    position: {
      top: "60%",
      left: "5%",
      width: "22%",
      height: "30%",
      zIndex: 5,
      rotate: "2deg"
    },
    path: "/jyotirlingas/grishneshwar",
    image: "/assets/temples/grishneshwar-temple.png"
  }
];

const JyotirlingsCollage: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="relative w-full h-[90vh] md:h-[80vh] overflow-hidden rounded-xl">
      {/* Sanskrit background texture */}
      <div 
        className="absolute inset-0 z-0 opacity-10" 
        style={{ 
          backgroundImage: "url('/assets/patterns/sanskrit-bg.png')", 
          backgroundSize: "cover" 
        }}
      ></div>
      
      {/* Title */}
      <div className="absolute top-4 left-0 right-0 z-20 text-center">
        <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-spiritual-maroon">
          The 12 Jyotirlingas of India
        </h2>
      </div>
      
      {/* Jyotirlinga items */}
      {jyotirlingsData.map((jyotirlinga) => (
        <motion.div
          key={jyotirlinga.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: Math.random() * 0.5 }}
          className="absolute cursor-pointer group"
          style={{
            top: jyotirlinga.position.top,
            left: jyotirlinga.position.left,
            width: jyotirlinga.position.width,
            height: jyotirlinga.position.height,
            zIndex: jyotirlinga.position.zIndex,
            transform: jyotirlinga.position.rotate ? `rotate(${jyotirlinga.position.rotate})` : 'none'
          }}
          onClick={() => navigate(jyotirlinga.path)}
          onMouseEnter={() => setHoveredItem(jyotirlinga.id)}
          onMouseLeave={() => setHoveredItem(null)}
          whileHover={{ scale: 1.05, zIndex: 20, transition: { duration: 0.3 } }}
        >
          <div className="w-full h-full overflow-hidden" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}>
            {/* Temple image with torn paper effect border */}
            <div className="w-full h-full relative">
              <img 
                src={jyotirlinga.image} 
                alt={jyotirlinga.name} 
                className="w-full h-full object-cover"
                style={{ 
                  filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2))",
                  border: "2px solid white",
                }}
              />
              
              {/* Hover overlay with temple name and location */}
              <motion.div 
                className={cn(
                  "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white",
                  "transform transition-all duration-300",
                  hoveredItem === jyotirlinga.id ? "opacity-100" : "opacity-0"
                )}
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: hoveredItem === jyotirlinga.id ? 1 : 0,
                  y: hoveredItem === jyotirlinga.id ? 0 : 10
                }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="font-cinzel text-lg font-bold">{jyotirlinga.name}</h3>
                <p className="text-xs opacity-90">{jyotirlinga.location}</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
      
      {/* Decorative elements */}
      <div className="absolute top-5 left-5 w-40 h-40 rounded-full bg-spiritual-gold/5 blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-spiritual-maroon/5 blur-3xl"></div>
    </div>
  );
};

export default JyotirlingsCollage;
