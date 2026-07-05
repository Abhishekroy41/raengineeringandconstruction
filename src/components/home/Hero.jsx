import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { company } from "../../data/company";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [firstImageLoaded, setFirstImageLoaded] = useState(false);

  const bgImages = [
    `${import.meta.env.BASE_URL}Images/Home_page_img/Home_img01 (1).jpg`,
    `${import.meta.env.BASE_URL}Images/Home_page_img/Home_img01 (2).jpg`,
    `${import.meta.env.BASE_URL}Images/Home_page_img/Home_img01 (3).jpg`,
    `${import.meta.env.BASE_URL}Images/Home_page_img/Home_img01 (4).jpg`,
    `${import.meta.env.BASE_URL}Images/Home_page_img/Home_img01 (5).jpg`,
    `${import.meta.env.BASE_URL}Images/Home_page_img/Home_img01 (6).jpg`,
  ];

  useEffect(() => {
    // Only start the carousel interval after the first image has fully loaded
    if (!firstImageLoaded) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [firstImageLoaded, bgImages.length]);

  return (
    <section className="relative overflow-hidden bg-[var(--color-navy-950)] text-white">
      {/* Background Image Carousel Layer */}
      {/* 1. Priority Loading for First Image (Gets 100% bandwidth immediately) */}
      <img
        src={bgImages[0]}
        alt="Background 1"
        onLoad={() => setFirstImageLoaded(true)}
        fetchpriority="high"
        className={`absolute inset-0 w-full h-full object-cover transform-gpu pointer-events-none transition-opacity duration-700 ease-in-out ${
          currentImageIndex === 0 ? "opacity-100" : "opacity-0"
        }`}
      />
      
      {/* 2. Sequential Injection of Remaining Heavy Images */}
      {firstImageLoaded && bgImages.slice(1).map((src, index) => (
        <img
          key={src}
          src={src}
          alt={`Background ${index + 2}`}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transform-gpu pointer-events-none transition-opacity duration-700 ease-in-out ${
            index + 1 === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Subtle Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/65 pointer-events-none" />
      
      {/* Faint contour-line texture watermark - Removed for performance (lag over video) */}

      <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-24 md:pt-28 md:pb-32">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block font-sans text-sm md:text-base uppercase tracking-widest text-[var(--color-gold-500)] font-bold drop-shadow-md">
          Precision &middot; Quality &middot; Trust
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-display mt-4 text-4xl sm:text-5xl md:text-7xl font-black leading-[1.15] max-w-4xl drop-shadow-xl tracking-tight text-transparent [-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:2px_white]">
          Building the Future with Unmatched Precision
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 max-w-xl text-lg md:text-xl text-white/95 font-medium leading-relaxed drop-shadow-lg">
          Your trusted partner for advanced Land Surveying, complete Construction services, and expert Design Consultancy.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-gold-500)] text-[var(--color-navy-950)] font-semibold text-sm px-6 py-3.5 hover:bg-[var(--color-gold-600)] transition-colors"
          >
            Request a Site Visit
            <ArrowRight size={16} />
          </Link>
          <a
            href={`tel:${company.contact.phone}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 text-white text-sm font-medium px-6 py-3.5 hover:bg-white/10 transition-colors"
          >
            <Phone size={15} />
            {company.contact.phoneDisplay}
          </a>
        </motion.div>

        {/* Founder credential strip */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center gap-x-10 gap-y-3 text-sm text-white/60 mb-8 md:mb-16">
          <span>
            <span className="text-white font-medium">{company.ownerName}</span> &mdash; {company.ownerTitle}
          </span>
        </div>
      </div>



      {/* Premium Double-Layered Corner Swoop transitioning to white */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[1px]">
        <svg className="relative block w-full h-[50px] md:h-[110px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120 H300 C800,120 1000,0 1200,0 V120 Z" opacity="0.3" className="fill-blue-50"></path>
          <path d="M0,120 H500 C900,120 1100,20 1200,20 V120 Z" className="fill-blue-50"></path>
        </svg>
      </div>
    </section>
  );
}
