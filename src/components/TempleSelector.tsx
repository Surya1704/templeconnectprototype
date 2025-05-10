
import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { getTempleById } from "@/data/mergeTemples";
import GuidedTourButton from "@/components/GuidedTourButton";
import { useToast } from "@/components/ui/use-toast";

// A few sample temple IDs to display
const FEATURED_TEMPLE_IDS = ["1", "2", "3", "4", "5"];

interface TempleSelectorProps {
  onSelectTemple?: (templeId: string, templeName: string) => void;
}

const TempleSelector = ({ onSelectTemple }: TempleSelectorProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();
  
  // Get featured temples
  const featuredTemples = FEATURED_TEMPLE_IDS.map(id => getTempleById(id)).filter(Boolean);
  
  // Filter temples based on search term
  const filteredTemples = searchTerm.trim() === "" 
    ? featuredTemples 
    : featuredTemples.filter(temple => 
        temple.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        temple.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
        temple.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
  
  const handleSelectTemple = (templeId: string, templeName: string) => {
    if (onSelectTemple) {
      onSelectTemple(templeId, templeName);
    } else {
      toast({
        title: "Temple Selected",
        description: `You've selected ${templeName}. Starting your guided tour...`,
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for temples..." 
          className="pl-10"
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredTemples.map(temple => (
          <Card key={temple.id} className="overflow-hidden">
            <div 
              className="h-36 bg-cover bg-center" 
              style={{ 
                backgroundImage: temple.image 
                  ? `url(${temple.image})` 
                  : `url(/lovable-uploads/${parseInt(temple.id) % 6 + 1}.png)` 
              }}
            >
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-spiritual-maroon mb-1">{temple.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{temple.location}, {temple.state}</p>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full"
                  onClick={() => handleSelectTemple(temple.id, temple.name)}
                >
                  Select
                </Button>
                <GuidedTourButton 
                  size="sm"
                  variant="secondary"
                  templeName={temple.name} 
                  templeTags={["Ancient", "Spiritual", temple.state]}
                  className="w-full"
                />
              </div>
            </CardContent>
          </Card>
        ))}
        
        {filteredTemples.length === 0 && (
          <div className="col-span-full text-center py-8 text-gray-500">
            No temples found matching your search criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default TempleSelector;
