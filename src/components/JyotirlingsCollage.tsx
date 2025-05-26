import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import ImageWithFallback from "./ImageWithFallback";

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

const jyotirlingsData: JyotirlingsCollageItem[] = [
  // ...same data as you provided (unchanged)
  // Please keep all your jyotirlinga data entries here
];

const JyotirlingsCollage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-[120vh] overflow-visible bg-gradient-to-b from-spiritual-saffron/30 via-spiritual-ochre/30 to-spiritual-maroon/20 rounded-xl">
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
            boxSizing: "border-box",
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
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default JyotirlingsCollage;
