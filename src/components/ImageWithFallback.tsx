import { useEffect, useState, useRef } from "react";

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

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    setCurrentSrc(src);

    const img = new Image();
    img.referrerPolicy = "no-referrer";
    img.src = src;

    img.onload = () => setIsLoading(false);
    img.onerror = () => {
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
    if (!hasError && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setHasError(true);
      setIsLoading(false);
    }
  };

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-bg-secondary animate-pulse">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      <img
        ref={imgRef}
        src={currentSrc}
        alt={alt}
        loading={loading}
        referrerPolicy="no-referrer"
        className={`${className} ${isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-300"} w-full h-full object-cover`}
        onError={handleError}
        onClick={onClick}
      />
    </div>
  );
};

export default ImageWithFallback;
