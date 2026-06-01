
import { useState, useEffect } from "react";
import { getTempleImages } from "@/data/mergeTemples";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import ImageWithFallback from "./ImageWithFallback";
import { toast } from "@/components/ui/use-toast";

interface TempleImageGalleryProps {
  templeId: string;
}

const TempleImageGallery = ({ templeId }: TempleImageGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    try {
      const fetchedImages = getTempleImages(templeId);
      console.log(`Fetched images for temple ${templeId}:`, fetchedImages);
      setImages(fetchedImages);
      
      if (fetchedImages.length === 0) {
        console.warn(`No images found for temple ID: ${templeId}`);
      }
    } catch (error) {
      console.error(`Error fetching images for temple ${templeId}:`, error);
      toast({
        title: "Error",
        description: "Failed to load temple images",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [templeId]);
  
  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  
  // If loading, show loading state
  if (loading) {
    return (
      <div className="w-full h-72 md:h-96 bg-spiritual-sandstone/30 rounded-xl flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Loading images...</div>
      </div>
    );
  }
  
  // If no images, show placeholder
  if (!images || images.length === 0) {
    return (
      <div className="w-full h-72 md:h-96 bg-spiritual-sandstone/30 rounded-xl flex items-center justify-center">
        <div className="text-gray-500">No images available</div>
      </div>
    );
  }
  
  return (
    <div className="relative w-full h-72 md:h-96 overflow-hidden rounded-xl">
      {/* Main Image */}
      <ImageWithFallback
        src={images[currentImageIndex]}
        alt={`Temple Image ${currentImageIndex + 1}`}
        className="w-full h-full object-cover"
        fallbackSrc="/placeholder.svg"
      />
      
      {/* Navigation Arrows - Always Visible with better contrast */}
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <Button
          variant="ghost"
          onClick={handlePrevious}
          className="h-12 w-12 rounded-full bg-black/50 hover:bg-black/70 text-white pointer-events-auto"
        >
          <ChevronLeft size={24} />
        </Button>
        <Button
          variant="ghost"
          onClick={handleNext}
          className="h-12 w-12 rounded-full bg-black/50 hover:bg-black/70 text-white pointer-events-auto"
        >
          <ChevronRight size={24} />
        </Button>
      </div>
      
      {/* Image Counter */}
      <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
        {currentImageIndex + 1} / {images.length}
      </div>
      
      {/* Thumbnail Navigation - Only show on non-mobile */}
      {!isMobile && images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentImageIndex ? "bg-white scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TempleImageGallery;
