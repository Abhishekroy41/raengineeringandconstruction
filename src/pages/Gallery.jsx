import { useState } from "react";
import { galleryImages } from "../data/gallery";
import { Maximize2, X } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // We will use one of the images as the header background
  const headerBg = "./Images/drone_shot.jpg";

  return (
    <div className="bg-[var(--color-paper)] min-h-screen pb-0">
      
      {/* 1. Header Section with Background Image */}
      <div 
        className="relative pt-40 pb-32 overflow-hidden bg-black"
        style={{
          backgroundImage: `url('${headerBg}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="max-w-4xl mx-auto px-5 md:px-8 relative z-10 flex flex-col items-center text-center mt-6">
          {/* Eyebrow - "Gallery" */}
          <div className="inline-block px-6 py-2 rounded-full border border-white/30 bg-black/40 backdrop-blur-sm mb-6">
            <span className="font-mono-data text-sm uppercase tracking-[0.2em] text-[var(--color-gold-400)] font-bold">
              Gallery
            </span>
          </div>
          
          {/* Title - "Our Field Work" */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-xl">
            Our Field Work
          </h1>
        </div>
        
        {/* Smooth SVG Arch Curve transitioning to Paper */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[1px]">
          <svg className="relative block w-full h-[40px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,120 C400,0 800,0 1200,120 Z" className="fill-[var(--color-paper)]"></path>
          </svg>
        </div>
      </div>

      {/* 2. Masonry Gallery Grid Section */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-12 pb-16 relative z-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {galleryImages.map((img) => (
            <div 
              key={img.id} 
              className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[var(--color-mist)] bg-white cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img.src} 
                alt={img.title || img.category} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500" 
                loading="lazy"
              />
              
              {/* Overlay for Title and Description */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-900)]/90 via-[var(--color-navy-900)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 transform translate-y-2 group-hover:translate-y-0 text-white">
                  <Maximize2 size={16} />
                </div>
                
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-2.5 py-1 bg-[var(--color-gold-500)] text-[var(--color-navy-950)] text-[10px] font-mono-data font-bold uppercase tracking-wider rounded-sm mb-2">
                    {img.category}
                  </span>
                  {img.title && (
                    <h3 className="text-white font-display text-lg font-bold leading-tight mb-1">
                      {img.title}
                    </h3>
                  )}
                  {img.description && (
                    <p className="text-white/80 text-xs leading-relaxed line-clamp-2">
                      {img.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Infinite Marquee Scrolling Section */}
      <div className="overflow-hidden bg-[var(--color-navy-950)] py-16 md:py-24 relative mt-8">
        <div className="absolute inset-0 contour-bg opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-5 md:px-8 mb-12 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">More From The Field</h2>
          <div className="w-16 h-1 bg-[var(--color-gold-500)] mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="w-full overflow-hidden flex relative z-10">
          <div 
            className="flex w-max animate-marquee gap-4 md:gap-6 px-2 md:px-3"
            style={{ animationDuration: `${galleryImages.length * 3}s` }}
          >
            {/* Duplicate the array once to create the seamless infinite scroll */}
            {[...galleryImages, ...galleryImages].map((img, idx) => (
              <div 
                key={idx} 
                className="w-56 h-40 md:w-72 md:h-52 lg:w-80 lg:h-60 shrink-0 rounded-xl overflow-hidden shadow-lg group cursor-pointer border border-white/10"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img.src} 
                  alt="field work gallery" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                  loading="lazy" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8 animate-[fadeIn_0.2s_ease-out]">
          <button 
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[var(--color-gold-500)] hover:text-black transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>
          
          <div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title || "Gallery image"} 
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-white/10"
            />
            
            {(selectedImage.title || selectedImage.description) && (
              <div className="w-full mt-6 text-center">
                {selectedImage.title && (
                  <h3 className="text-white font-display text-2xl font-bold mb-2">{selectedImage.title}</h3>
                )}
                {selectedImage.description && (
                  <p className="text-white/70 text-sm max-w-2xl mx-auto">{selectedImage.description}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
