import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const OptimizedBackground = ({
  src,
  className = "",
  style = {},
  priority = false,
  quality = 80,
  ...props
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    if (priority) {
      // For priority images, load immediately
      setImageSrc(src);
    } else {
      // For non-priority images, use Intersection Observer or delay
      const timer = setTimeout(() => {
        setImageSrc(src);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [src, priority]);

  const handleLoad = () => {
    setImageLoaded(true);
  };

  // Generate optimized image URL
  const getOptimizedSrc = (originalSrc) => {
    if (!originalSrc) return "";

    // For Unsplash images, add optimization parameters
    if (originalSrc.includes("unsplash.com")) {
      const url = new URL(originalSrc);
      url.searchParams.set("auto", "format");
      url.searchParams.set("fit", "crop");
      url.searchParams.set("q", quality.toString());
      return url.toString();
    }

    return originalSrc;
  };

  const optimizedSrc = getOptimizedSrc(imageSrc);

  return (
    <div
      className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-300 ${
        imageLoaded ? "opacity-100" : "opacity-0"
      } ${className}`}
      style={{
        backgroundImage: optimizedSrc ? `url('${optimizedSrc}')` : "none",
        ...style,
      }}
      {...props}
    >
      {/* Preload the image */}
      {optimizedSrc && (
        <img
          src={optimizedSrc}
          alt=""
          className="hidden"
          onLoad={handleLoad}
          aria-hidden="true"
        />
      )}

      {/* Loading state */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse" />
      )}
    </div>
  );
};

OptimizedBackground.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  priority: PropTypes.bool,
  quality: PropTypes.number,
};

export default OptimizedBackground;
