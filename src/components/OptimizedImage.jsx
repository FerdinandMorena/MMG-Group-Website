import { useState, useRef, useEffect } from 'react';

const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  placeholder = 'blur',
  blurDataURL,
  sizes = '100vw',
  quality = 75,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before the image enters viewport
        threshold: 0.1,
      }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [priority]);

  // Generate responsive image sources
  const generateSrcSet = (baseSrc) => {
    if (!baseSrc) return baseSrc;

    // For local images, generate responsive versions if they exist
    if (!baseSrc.startsWith('http') && baseSrc.startsWith('/')) {
      // For now, return the original - in production you'd have multiple sizes
      return baseSrc;
    }

    return baseSrc;
  };

  // Generate WebP version for local images
  const getWebPSrc = (baseSrc) => {
    if (!baseSrc || baseSrc.startsWith('http')) return null;

    // Convert local images to WebP if they exist
    return baseSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  // Generate WebP and fallback sources
  const webpSrc = getWebPSrc(src);
  const hasWebP = !!webpSrc;

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* Blur placeholder */}
      {placeholder === 'blur' && blurDataURL && !isLoaded && (
        <img
          src={blurDataURL}
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-110"
          aria-hidden="true"
        />
      )}

      {/* Loading skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
      )}

      {/* Main image */}
      {isInView && !hasError && (
        <picture>
          {/* WebP source for modern browsers */}
          {hasWebP && (
            <source
              srcSet={generateSrcSet(webpSrc)}
              sizes={sizes}
              type="image/webp"
            />
          )}

          {/* Fallback image */}
          <img
            src={generateSrcSet(src)}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onLoad={handleLoad}
            onError={handleError}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            sizes={sizes}
            {...props}
          />
        </picture>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-gray-400 text-sm text-center p-4">
            <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            Image unavailable
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;