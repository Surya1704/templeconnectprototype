
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

// Define the temple data structure with position information
interface TemplePosition {
  id: string;
  name: string;
  location: string;
  image: string;
  position: {
    top: string;
    left: string;
    width: string;
    height: string;
    zIndex: number;
    rotate?: string;
  };
}

// Default initial temple positions
const initialTempleData: TemplePosition[] = [
  {
    id: "rameshwaram",
    name: "Rameshwaram",
    location: "Tamil Nadu",
    image: "/lovable-uploads/fb4b3306-65cb-4755-b087-ac2fa92e2f21.png",
    position: {
      top: "0%",
      left: "38%",
      width: "25%",
      height: "32%",
      zIndex: 10,
      rotate: "0deg"
    }
  },
  {
    id: "mallikarjuna",
    name: "Mallikarjuna",
    location: "Andhra Pradesh",
    image: "/lovable-uploads/0aa1be60-fc0f-45e0-9ec7-4a331f3dcee1.png",
    position: {
      top: "15%",
      left: "18%", 
      width: "22%",
      height: "28%",
      zIndex: 8,
      rotate: "-1deg"
    }
  },
  {
    id: "mahakaleshwar",
    name: "Mahakaleshwar",
    location: "Madhya Pradesh",
    image: "/lovable-uploads/4c3fd48a-4feb-4ae6-86e1-402971d9cbf8.png",
    position: {
      top: "15%",
      left: "60%",
      width: "22%",
      height: "28%",
      zIndex: 8,
      rotate: "1deg"
    }
  },
  {
    id: "omkareshwar",
    name: "Omkareshwar",
    location: "Madhya Pradesh",
    image: "/lovable-uploads/2719bcc9-3630-489d-97b4-8f4a9d1b2de5.png",
    position: {
      top: "30%",
      left: "25%",
      width: "20%",
      height: "26%",
      zIndex: 7,
      rotate: "-0.5deg"
    }
  },
  {
    id: "nageshwar",
    name: "Nageshwar",
    location: "Gujarat",
    image: "/lovable-uploads/db5bc89b-2553-46ff-a86e-4c0a629e319d.png",
    position: {
      top: "28%",
      left: "42%",
      width: "18%",
      height: "24%",
      zIndex: 9,
      rotate: "0deg"
    }
  },
  {
    id: "baidyanath",
    name: "Baidyanath",
    location: "Jharkhand",
    image: "/lovable-uploads/e4bc4fc3-559b-47cb-ab47-4804b7f32536.png",
    position: {
      top: "30%",
      left: "58%",
      width: "20%",
      height: "26%",
      zIndex: 7,
      rotate: "0.5deg"
    }
  },
  {
    id: "kashi-vishwanath",
    name: "Kashi Vishwanath",
    location: "Uttar Pradesh",
    image: "/lovable-uploads/7469bb49-3e14-45b3-b1fe-bd885af89c8a.png",
    position: {
      top: "45%",
      left: "28%",
      width: "19%",
      height: "25%",
      zIndex: 6,
      rotate: "-1deg"
    }
  },
  {
    id: "trimbakeshwar",
    name: "Trimbakeshwar",
    location: "Maharashtra",
    image: "/lovable-uploads/2ebefee1-c630-49b1-a433-7a7ae77c6683.png",
    position: {
      top: "45%",
      left: "55%",
      width: "19%",
      height: "25%",
      zIndex: 6,
      rotate: "1deg"
    }
  },
  {
    id: "bhimashankar",
    name: "Bhimashankar",
    location: "Maharashtra",
    image: "/lovable-uploads/3e33b4bd-dd72-46c6-a56c-5ef6f9e88bad.png",
    position: {
      top: "56%",
      left: "18%",
      width: "20%",
      height: "26%",
      zIndex: 8,
      rotate: "-0.75deg"
    }
  },
  {
    id: "somnath",
    name: "Somnath",
    location: "Gujarat",
    image: "/lovable-uploads/892016ae-9f94-43cc-bb89-eb3d1417f718.png",
    position: {
      top: "56%",
      left: "62%",
      width: "20%",
      height: "26%",
      zIndex: 8,
      rotate: "0.75deg"
    }
  },
  {
    id: "kedarnath",
    name: "Kedarnath",
    location: "Uttarakhand",
    image: "/lovable-uploads/e8b9989e-1fdb-419c-b37f-05581f37ee79.png",
    position: {
      top: "50%",
      left: "40%",
      width: "22%",
      height: "28%",
      zIndex: 9,
      rotate: "0deg"
    }
  },
  {
    id: "grishneshwar",
    name: "Grishneshwar",
    location: "Maharashtra",
    image: "/lovable-uploads/d168a39e-e3c3-46d9-bc2b-ce2460e09c78.png",
    position: {
      top: "65%",
      left: "40%",
      width: "20%",
      height: "26%",
      zIndex: 8,
      rotate: "0deg"
    }
  }
];

const TemplePositionEditor: React.FC = () => {
  // State to hold the current temple positions
  const [temples, setTemples] = useState<TemplePosition[]>(initialTempleData);
  // Currently selected temple for editing
  const [selectedTemple, setSelectedTemple] = useState<string>(initialTempleData[0].id);
  
  // Find the currently selected temple object
  const temple = temples.find(t => t.id === selectedTemple);

  // Handle drag end to update position values
  const handleDragEnd = (info: any, id: string) => {
    const { x, y } = info.point;
    const container = document.getElementById("temple-playground");
    
    if (!container) return;
    
    // Convert pixel values to percentages based on container dimensions
    const containerRect = container.getBoundingClientRect();
    const leftPercent = `${(x / containerRect.width) * 100}%`;
    const topPercent = `${(y / containerRect.height) * 100}%`;
    
    setTemples(temples.map(temple => 
      temple.id === id ? {
        ...temple,
        position: {
          ...temple.position,
          top: topPercent,
          left: leftPercent,
        }
      } : temple
    ));
  };

  // Handle manual position adjustments
  const handlePositionChange = (property: string, value: number) => {
    if (!temple) return;
    
    const newValue = property === 'zIndex' ? value : `${value}%`;
    const newRotate = property === 'rotate' ? `${value}deg` : temple.position.rotate;
    
    setTemples(temples.map(t => 
      t.id === selectedTemple ? {
        ...t,
        position: {
          ...t.position,
          [property]: property === 'rotate' ? newRotate : newValue
        }
      } : t
    ));
  };
  
  // Handle size adjustments
  const handleSizeChange = (property: string, value: number) => {
    if (!temple) return;
    
    setTemples(temples.map(t => 
      t.id === selectedTemple ? {
        ...t,
        position: {
          ...t.position,
          [property]: `${value}%`
        }
      } : t
    ));
  };

  // Generate code for the current positions
  const generatePositionCode = () => {
    const positionCode = temples.map(temple => {
      return `
  {
    id: "${temple.id}",
    name: "${temple.name}",
    location: "${temple.location}",
    position: {
      top: "${temple.position.top}",
      left: "${temple.position.left}",
      width: "${temple.position.width}",
      height: "${temple.position.height}",
      zIndex: ${temple.position.zIndex},
      ${temple.position.rotate ? `rotate: "${temple.position.rotate}"` : ''}
    },
    path: "/jyotirlingas/${temple.id}",
    image: "${temple.image}"
  }`;
    }).join(',');
    
    return `const jyotirlingsData = [${positionCode}\n];`;
  };

  // Copy position code to clipboard
  const copyPositionCode = () => {
    const code = generatePositionCode();
    navigator.clipboard.writeText(code)
      .then(() => {
        toast.success("Position code copied to clipboard!");
      })
      .catch(() => {
        toast.error("Failed to copy code. Please try again.");
      });
  };
  
  if (!temple) {
    return <div>No temple selected</div>;
  }
  
  // Extract numeric values for sliders
  const topValue = parseFloat(temple.position.top);
  const leftValue = parseFloat(temple.position.left);
  const widthValue = parseFloat(temple.position.width);
  const heightValue = parseFloat(temple.position.height);
  const rotateValue = temple.position.rotate 
    ? parseFloat(temple.position.rotate) 
    : 0;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-spiritual-maroon">
        Temple Position Editor
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left panel - Controls */}
        <Card className="p-4 shadow-md">
          <h3 className="font-semibold text-lg mb-4">Select Temple</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {temples.map((t) => (
              <Button
                key={t.id}
                variant={selectedTemple === t.id ? "default" : "outline"}
                onClick={() => setSelectedTemple(t.id)}
                className={selectedTemple === t.id ? "bg-spiritual-maroon" : ""}
                size="sm"
              >
                {t.name.split(" ")[0]}
              </Button>
            ))}
          </div>
          
          <h3 className="font-semibold text-lg mb-2">Position</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm mb-1 block">Top: {temple.position.top}</label>
              <Slider 
                value={[isNaN(topValue) ? 50 : topValue]} 
                min={0} 
                max={100} 
                step={1} 
                onValueChange={(value) => handlePositionChange('top', value[0])} 
              />
            </div>
            
            <div>
              <label className="text-sm mb-1 block">Left: {temple.position.left}</label>
              <Slider 
                value={[isNaN(leftValue) ? 50 : leftValue]} 
                min={0} 
                max={100} 
                step={1} 
                onValueChange={(value) => handlePositionChange('left', value[0])} 
              />
            </div>
            
            <div>
              <label className="text-sm mb-1 block">Z-Index: {temple.position.zIndex}</label>
              <Slider 
                value={[temple.position.zIndex]} 
                min={1} 
                max={20} 
                step={1} 
                onValueChange={(value) => handlePositionChange('zIndex', value[0])} 
              />
            </div>
            
            <div>
              <label className="text-sm mb-1 block">Rotate: {temple.position.rotate || "0deg"}</label>
              <Slider 
                value={[rotateValue]} 
                min={-10} 
                max={10} 
                step={0.5} 
                onValueChange={(value) => handlePositionChange('rotate', value[0])} 
              />
            </div>
          </div>
          
          <Separator className="my-4" />
          
          <h3 className="font-semibold text-lg mb-2">Size</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm mb-1 block">Width: {temple.position.width}</label>
              <Slider 
                value={[isNaN(widthValue) ? 20 : widthValue]} 
                min={10} 
                max={50} 
                step={1} 
                onValueChange={(value) => handleSizeChange('width', value[0])} 
              />
            </div>
            
            <div>
              <label className="text-sm mb-1 block">Height: {temple.position.height}</label>
              <Slider 
                value={[isNaN(heightValue) ? 20 : heightValue]} 
                min={10} 
                max={50} 
                step={1} 
                onValueChange={(value) => handleSizeChange('height', value[0])} 
              />
            </div>
          </div>
          
          <Separator className="my-4" />
          
          <Button 
            onClick={copyPositionCode} 
            className="w-full bg-spiritual-gold hover:bg-spiritual-gold/80"
          >
            Copy Position Code
          </Button>
        </Card>
        
        {/* Right panel - Visual playground */}
        <div className="col-span-1 lg:col-span-2">
          <div 
            id="temple-playground"
            className="relative w-full h-[600px] bg-gradient-to-br from-[#221F26]/75 to-[#2A1E17]/70 rounded-xl border-2 border-spiritual-gold/60 overflow-hidden"
          >
            {temples.map((temple) => (
              <motion.div
                key={temple.id}
                drag
                dragMomentum={false}
                onDragEnd={(e, info) => handleDragEnd(info, temple.id)}
                className={`absolute cursor-grab active:cursor-grabbing ${temple.id === selectedTemple ? 'ring-2 ring-spiritual-gold ring-offset-2' : ''}`}
                style={{
                  top: temple.position.top,
                  left: temple.position.left,
                  width: temple.position.width,
                  height: temple.position.height,
                  zIndex: temple.position.zIndex,
                  transform: temple.position.rotate ? `rotate(${temple.position.rotate})` : 'none'
                }}
                onClick={() => setSelectedTemple(temple.id)}
              >
                <img 
                  src={temple.image} 
                  alt={temple.name} 
                  className="w-full h-full object-contain"
                />
                {temple.id === selectedTemple && (
                  <div className="absolute inset-0 bg-spiritual-gold/20 flex items-end justify-center">
                    <span className="bg-spiritual-maroon text-white px-2 py-0.5 text-xs rounded mb-1">
                      {temple.name}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            <p className="font-medium">Instructions:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Click on a temple name to select it</li>
              <li>Drag temples directly in the playground area</li>
              <li>Use the sliders to fine-tune position, size and rotation</li>
              <li>Click "Copy Position Code" to get the code for your arrangement</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplePositionEditor;
