
import { useState, useEffect, useRef } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  onClick?: () => void;
}

const ImageWithFallback = ({
  src,
  alt,
  fallbackSrc = "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1974&auto=format&fit=crop",
  className = "",
  onClick,
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
    
    // Only preload if src is valid
    if (!src || src.trim() === '') {
      console.log(`Empty src provided, using fallback: ${fallbackSrc}`);
      setCurrentSrc(fallbackSrc);
      setHasError(true);
      setIsLoading(false);
      return;
    }
    
    // Create a new image to preload
    const img = new Image();
    img.crossOrigin = "anonymous"; // Handle CORS issues
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

  const handleLoad = () => {
    setIsLoading(false);
  };

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
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'} w-full h-full object-cover`}
        onError={handleError}
        onLoad={handleLoad}
        onClick={onClick}
        loading="lazy"
      />
    </div>
  );
};

export default ImageWithFallback;
