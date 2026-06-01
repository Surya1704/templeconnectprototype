
import { useState } from "react";
import { Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface TempleAttireInfoProps {
  templeName: string;
  templeType?: string;
}

const TempleAttireInfo = ({ templeName, templeType = "traditional" }: TempleAttireInfoProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Generate dress code recommendations based on temple type
  const getDressRecommendations = () => {
    const baseRecommendations = {
      men: ["Shirts with sleeves", "Full-length pants or dhotis", "Avoid leather items inside the temple"],
      women: ["Sarees, salwar kameez, or long skirts", "Covered shoulders", "Covered head in some temples"],
      general: ["Remove footwear before entering", "Avoid revealing or tight clothing", "Dress modestly and respectfully"]
    };

    if (templeType.toLowerCase().includes("modern")) {
      return {
        men: ["Formal or smart casual attire", "Full-length pants", "Shirts with sleeves"],
        women: ["Modest dresses or pants", "Covered shoulders", "Scarves for head covering if needed"],
        general: ["Remove footwear before entering", "Avoid shorts and sleeveless tops", "Dress modestly"]
      };
    }

    return baseRecommendations;
  };

  const dressCode = getDressRecommendations();

  return (
    <>
      <Button 
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-1 text-xs bg-white border-spiritual-maroon/30 text-spiritual-maroon hover:bg-spiritual-maroon/5"
      >
        <Shirt className="h-3 w-3" />
        <span>What to Wear</span>
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-cinzel text-spiritual-maroon">
              Dress Code for {templeName}
            </DialogTitle>
          </DialogHeader>
          <div className="pt-2">
            <div className="mb-4 text-sm text-gray-600">
              Dressing appropriately is an important aspect of showing respect when visiting Hindu temples. 
              Here are the recommended clothing guidelines for your visit:
            </div>

            <h3 className="font-medium text-spiritual-maroon mb-2">For Men:</h3>
            <ul className="list-disc pl-6 mb-3 space-y-1 text-sm">
              {dressCode.men.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3 className="font-medium text-spiritual-maroon mb-2">For Women:</h3>
            <ul className="list-disc pl-6 mb-3 space-y-1 text-sm">
              {dressCode.women.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3 className="font-medium text-spiritual-maroon mb-2">General Guidelines:</h3>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              {dressCode.general.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TempleAttireInfo;
