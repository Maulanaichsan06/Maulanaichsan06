import React, { useState, useEffect } from "react";

const LazyImage = ({ src, alt, className }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "0px 0px 50px 0px",
        threshold: 0.01,
      }
    );

    const element = document.querySelector(`img[data-src="${src}"]`);
    if (element) observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [src]);

  useEffect(() => {
    if (isVisible) {
      setImageSrc(src);
    }
  }, [isVisible, src]);

  return (
    <img
      data-src={src}
      src={imageSrc}
      alt={alt}
      className={`transition-opacity duration-500 ease-in-out ${
        imageSrc ? "opacity-100" : "opacity-0"
      } ${className}`}
    />
  );
};

export default LazyImage;
