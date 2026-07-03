import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { company } from "../../data/company";

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Some browsers block autoplay or sometimes leave the video blank on initial render.
    // Explicitly playing it via ref ensures it starts.
    if (videoRef.current) {
      videoRef.current.play().catch((e) => console.log("Autoplay prevented:", e));
    }
  }, []);

  return (
    <section className="relative overflow-hidden bg-[var(--color-navy-950)] text-white">
      {/* Background Video Layer */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover transform-gpu pointer-events-none"
      >
        <source src={`${import.meta.env.BASE_URL}Videos/Home_bg_01.mp4`} type="video/mp4" />
      </video>

      {/* Subtle Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/65 pointer-events-none" />
      
      {/* Faint contour-line texture watermark - Removed for performance (lag over video) */}

      <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-20 pb-24 md:pt-28 md:pb-32">
        <span className="font-sans text-sm md:text-base uppercase tracking-widest text-[var(--color-gold-500)] font-bold drop-shadow-md">
          Precision &middot; Quality &middot; Trust
        </span>

        <h1 className="font-display mt-4 text-4xl sm:text-5xl md:text-7xl font-black leading-[1.15] max-w-4xl drop-shadow-xl tracking-tight text-transparent [-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:2px_white]">
          Building the Future with Unmatched Precision
        </h1>

        <p className="mt-6 max-w-xl text-lg md:text-xl text-white/95 font-medium leading-relaxed drop-shadow-lg">
          Your trusted partner for advanced Land Surveying, complete Construction services, and expert Design Consultancy.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
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
        </div>

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
