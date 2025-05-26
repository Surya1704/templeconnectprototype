import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import ImageWithFallback from "./ImageWithFallback";

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
  templeId: string;
  imageSrc: string;
}

// Jyotirlingas data
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
    templeId: "24",
    imageSrc: "/lovable-uploads/006968a1-560a-479d-8493-50f8639dce12.png"
  },
  {
    id: "jyotirlinga-2",
    name: "Rameshwaram",
    description: "Located at the southern tip of India with significant connection to Ramayana",
    position: {
      top: "15%",
      left: "38%",
      width: "30%",
      height: "40%",
      zIndex: 3,
    },
    templeId: "25",
    imageSrc: "/lovable-uploads/c868ae47-1318-4239-9e0b-8e11ffd2ab53.png"
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
    templeId: "26",
    imageSrc: "/lovable-uploads/b668b893-dac5-4d67-9be0-425045941429.png"
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
    templeId: "27",
    imageSrc: "/lovable-uploads/bff90acf-434f-4b5d-a02a-f8cd060e2ec9.png"
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
    templeId: "28",
    imageSrc: "/lovable-uploads/8a415d87-63d9-44f9-bb8e-583856ad0fa5.png"
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
    templeId: "29",
    imageSrc: "/lovable-uploads/bed64bd3-3688-44d2-9bad-a6918b67c9a6.png"
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
    templeId: "30",
    imageSrc: "/lovable-uploads/ea8558eb-ef06-4c98-8f0c-23095bb29074.png"
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
    templeId: "31",
    imageSrc: "/lovable-uploads/3c73bbb4-d8d9-439c-bac6-16dfc1940d71.png"
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
    templeId: "32",
    imageSrc: "/lovable-uploads/3e630441-b218-447f-a772-6d16110739b2.png"
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
    templeId: "33",
    imageSrc: "/lovable-uploads/f6e17f2f-fd67-45c1-8f9b-bdd05ef346ce.png"
  },
  {
    id: "jyotirlinga-11",
    name: "Mallikarjuna",
    description: "Located on Sri Sailam mountain, one of the 12 Jyotirlingas",
    position: {
      top: "60%",
      left: "10%",
      width: "27%",
      height: "36%",
      zIndex: 3,
    },
    templeId: "34",
    imageSrc: "/lovable-uploads/b27d0b3a-4090-4b23-804a-b569ee1c971b.png"
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
    templeId: "35",
    imageSrc: "/lovable-uploads/55fb5f1f-b855-4295-a028-e2385fe97d48.png"
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
            transform: jyotirlinga.position.rotate ? `rotate(${jyotirlinga.position.rotate})` : "none",
          }}
          onClick={() => navigate(`/temple/${jyotirlinga.templeId}`)}
          whileHover={{ scale: 1.05, zIndex: 10, transition: { duration: 0.3 } }}
        >
          <div className={cn(
            "w-full h-full rounded-lg overflow-hidden border-4 border-spiritual-gold/40 shadow-lg",
            "transition-all duration-300 group-hover:border-spiritual-gold group-hover:shadow-2xl"
          )}>
            <div className="w-full h-full relative">
              <ImageWithFallback
                src={jyotirlinga.imageSrc}
                fallback={
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-spiritual-sandstone to-spiritual-ivory">
                    <div className="w-16 h-20 relative">
                      <div className="absolute inset-0 bg-spiritual-ochre/50 rounded-t-2xl"></div>
                      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-12 h-12 rounded-t-full bg-spiritual-maroon/40"></div>
                      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-5 h-5 rounded-full bg-spiritual-gold/60"></div>
                    </div>
                  </div>
                }
                alt={jyotirlinga.name}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default JyotirlingsCollage;
;
