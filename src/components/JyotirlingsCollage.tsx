
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

// Define the jyotirlinga data structure
interface JyotirlingsCollageItem {
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

// Data for the 12 Jyotirlingas
const jyotirlingsData: JyotirlingsCollageItem[] = [
  {
    id: "jyotirlinga-1",
    name: "Somnath",
    description: "First among the twelve Jyotirlingas",
    position: {
      top: "5%",
      left: "10%",
      width: "25%",
      height: "35%",
      zIndex: 2,
      rotate: "-2deg"
    },
    path: "/temple/somnath"
  },
  {
    id: "jyotirlinga-2",
    name: "Mallikarjuna",
    description: "Located on Sri Sailam mountain",
    position: {
      top: "15%",
      left: "38%",
      width: "30%",
      height: "40%",
      zIndex: 3,
    },
    path: "/temple/mallikarjuna"
  },
  {
    id: "jyotirlinga-3",
    name: "Mahakaleshwar",
    description: "Situated in Ujjain, Madhya Pradesh",
    position: {
      top: "10%",
      left: "70%",
      width: "22%",
      height: "30%",
      zIndex: 1,
      rotate: "3deg"
    },
    path: "/temple/mahakaleshwar"
  },
  {
    id: "jyotirlinga-4",
    name: "Omkareshwar",
    description: "Located on an island in Narmada river",
    position: {
      top: "42%",
      left: "5%",
      width: "28%",
      height: "38%",
      zIndex: 4,
      rotate: "-1deg"
    },
    path: "/temple/omkareshwar"
  },
  {
    id: "jyotirlinga-5",
    name: "Kedarnath",
    description: "Located in the Himalayan ranges",
    position: {
      top: "50%",
      left: "35%",
      width: "25%",
      height: "35%",
      zIndex: 2,
      rotate: "1deg"
    },
    path: "/temple/kedarnath"
  },
  {
    id: "jyotirlinga-6",
    name: "Bhimashankar",
    description: "Located in Maharashtra",
    position: {
      top: "45%",
      left: "65%",
      width: "30%",
      height: "42%",
      zIndex: 3,
      rotate: "-2deg"
    },
    path: "/temple/bhimashankar"
  },
  {
    id: "jyotirlinga-7",
    name: "Kashi Vishwanath",
    description: "Located in Varanasi",
    position: {
      top: "75%",
      left: "20%",
      width: "26%",
      height: "35%",
      zIndex: 5,
    },
    path: "/temple/kashi-vishwanath"
  },
  {
    id: "jyotirlinga-8",
    name: "Trimbakeshwar",
    description: "Located near Nashik, Maharashtra",
    position: {
      top: "70%",
      left: "50%",
      width: "28%",
      height: "38%",
      zIndex: 1,
      rotate: "2deg"
    },
    path: "/temple/trimbakeshwar"
  },
  {
    id: "jyotirlinga-9",
    name: "Vaidyanath",
    description: "Located in Deoghar, Jharkhand",
    position: {
      top: "25%",
      left: "20%",
      width: "24%",
      height: "33%",
      zIndex: 2,
      rotate: "1deg"
    },
    path: "/temple/vaidyanath"
  },
  {
    id: "jyotirlinga-10",
    name: "Nageshwar",
    description: "Located in Dwarka, Gujarat",
    position: {
      top: "30%",
      left: "55%",
      width: "25%",
      height: "34%",
      zIndex: 4,
      rotate: "-1.5deg"
    },
    path: "/temple/nageshwar"
  },
  {
    id: "jyotirlinga-11",
    name: "Rameshwaram",
    description: "Located at the southern tip of India",
    position: {
      top: "60%",
      left: "10%",
      width: "27%",
      height: "36%",
      zIndex: 3,
    },
    path: "/temple/rameshwaram"
  },
  {
    id: "jyotirlinga-12",
    name: "Grishneshwar",
    description: "Located near Ellora caves, Maharashtra",
    position: {
      top: "60%",
      left: "70%",
      width: "25%",
      height: "35%",
      zIndex: 2,
      rotate: "2deg"
    },
    path: "/temple/grishneshwar"
  }
];

const JyotirlingsCollage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[90vh] overflow-hidden bg-gradient-to-b from-spiritual-saffron/30 via-spiritual-ochre/30 to-spiritual-maroon/20 rounded-xl">
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
          whileHover={{ scale: 1.05, zIndex: 10, transition: { duration: 0.3 } }}
        >
          <div className={cn(
            "w-full h-full rounded-lg overflow-hidden border-4 border-spiritual-gold/40 shadow-lg",
            "bg-gradient-to-br from-spiritual-sandstone to-spiritual-ivory",
            "transition-all duration-300 group-hover:border-spiritual-gold group-hover:shadow-2xl"
          )}>
            <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
              {/* Temple icon representation */}
              <div className="w-16 h-20 mb-2 mx-auto relative">
                <div className="absolute inset-0 bg-spiritual-ochre/50 rounded-t-2xl"></div>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-12 h-12 rounded-t-full bg-spiritual-maroon/40"></div>
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-5 h-5 rounded-full bg-spiritual-gold/60"></div>
              </div>
              
              <h3 className="font-cinzel text-lg font-bold text-spiritual-maroon mb-1 drop-shadow-sm">
                {jyotirlinga.name}
              </h3>
              
              <p className="text-xs font-sans text-spiritual-maroon/70">
                {jyotirlinga.description}
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
          Click on any Jyotirlinga to start your spiritual journey
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

export default JyotirlingsCollage;
