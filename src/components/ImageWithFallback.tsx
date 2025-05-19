
import { useState } from 'react';

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
  fallbackSrc = "/lovable-uploads/placeholder.svg",
  className = "",
  onClick,
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const onError = () => {
    if (!hasError) {
      console.log(`Image failed to load: ${src}, using fallback: ${fallbackSrc}`);
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  const onLoad = () => {
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
        src={imgSrc}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}
        onError={onError}
        onLoad={onLoad}
        onClick={onClick}
      />
    </div>
  );
};

export default ImageWithFallback;
