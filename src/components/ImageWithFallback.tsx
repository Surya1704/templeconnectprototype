
import { useState, useEffect } from 'react';

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
  fallbackSrc = "/placeholder.svg",
  className = "",
  onClick,
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    
    // Create a new image to test loading
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImgSrc(src);
      setIsLoading(false);
      console.log(`Image loaded successfully: ${src}`);
    };
    
    img.onerror = () => {
      console.log(`Image failed to load: ${src}, using fallback: ${fallbackSrc}`);
      setImgSrc(fallbackSrc);
      setHasError(true);
      setIsLoading(false);
    };
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, fallbackSrc]);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}
        onError={() => {
          if (!hasError) {
            setImgSrc(fallbackSrc);
            setHasError(true);
          }
        }}
        onClick={onClick}
      />
    </div>
  );
};

export default ImageWithFallback;
