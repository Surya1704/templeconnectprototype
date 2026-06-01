
import { useState, useEffect, useRef } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  onClick?: () => void;
  loading?: "lazy" | "eager";
}

const ImageWithFallback = ({
  src,
  alt,
  fallbackSrc = "/placeholder.svg",
  className = "",
  onClick,
  loading,
}: ImageWithFallbackProps) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);
  
  // Reset states when src changes
  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    setCurrentSrc(src);
    
    // Create a new image to preload
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setIsLoading(false);
      console.log(`Image loaded successfully: ${src}`);
    };
    
    img.onerror = () => {
      console.log(`Image failed to load: ${src}, using fallback: ${fallbackSrc}`);
      setCurrentSrc(fallbackSrc);
      setHasError(true);
      setIsLoading(false);
    };
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, fallbackSrc]);

  const handleError = () => {
    console.log(`Handling error for image: ${currentSrc}`);
    if (!hasError && currentSrc !== fallbackSrc) {
      console.log(`Setting fallback image: ${fallbackSrc}`);
      setCurrentSrc(fallbackSrc);
      setHasError(true);
    }
  };

  // Fix the issue with the direct image rendering
  useEffect(() => {
    if (imgRef.current) {
      // Force reload the image if it's already in the DOM
      const imgElement = imgRef.current;
      imgElement.src = currentSrc;
    }
  }, [currentSrc]);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      <img
        ref={imgRef}
        src={currentSrc}
        alt={alt}
        loading={loading}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'} w-full h-full object-cover`}
        onError={handleError}
        onClick={onClick}
      />
    </div>
  );
};

export default ImageWithFallback;
