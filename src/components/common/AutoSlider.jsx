import { useState, useEffect } from 'react';

export default function AutoSlider({ images, altBase = "Image", containerClassName = "", imageClassName = "" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Normalize input to an array
  const imgArray = Array.isArray(images) ? images : [images].filter(Boolean);

  useEffect(() => {
    // Only run interval if there are multiple images
    if (imgArray.length <= 1) return;
    
    // Change image every 3 seconds
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imgArray.length);
    }, 3000);
    
    return () => clearInterval(timer);
  }, [imgArray.length]);

  if (imgArray.length === 0) {
    return (
      <div className={`flex items-center justify-center bg-[var(--color-mist)] ${containerClassName}`}>
        <span className="font-mono-data text-[10px] text-[var(--color-slate)] uppercase tracking-widest opacity-60">
          Image Pending
        </span>
      </div>
    );
  }

  return (
    <div className={`relative ${containerClassName}`}>
      {imgArray.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`${altBase} - ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${imageClassName} ${
            idx === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
