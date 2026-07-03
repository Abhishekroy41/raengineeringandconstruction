import { CircleDot, CheckCircle2 } from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";
import { surveyServices, constructionServices, valueProps } from "../data/services";

export default function Services() {
  return (
    <div className="bg-[var(--color-paper)] min-h-screen pb-20">
      
      {/* Header with Slate Theme & Shadowed Curve */}
      <div className="relative bg-slate-200 pt-32 pb-40">
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10 flex flex-col items-center text-center">
          <SectionHeading 
            eyebrow="Our Expertise"
            title="Comprehensive Engineering Services"
            description="From high-precision topographical surveys to full-scale building construction and 3D architectural modeling."
            align="center"
          />
        </div>
        {/* SVG Curve Divider with Drop Shadow for high visibility */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-[1px]">
          <svg className="relative block w-full h-[80px] md:h-[140px] drop-shadow-[0_-4px_10px_rgba(14,44,80,0.08)]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-[var(--color-mist)]"></path>
          </svg>
        </div>
      </div>

      {/* Survey Services Section */}
      <div className="bg-[var(--color-mist)] contour-bg-light py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-10 w-2.5 bg-[var(--color-navy-700)] rounded-full"></div>
            <h2 className="font-display text-3xl font-semibold text-[var(--color-navy-800)]">Surveying & Mapping</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {surveyServices.map((service) => (
              <div key={service.id} className="group bg-white p-6 rounded-xl border border-[var(--color-navy-800)]/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-navy-700)] to-[var(--color-gold-500)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[var(--color-mist)] rounded-lg text-2xl group-hover:scale-110 transition-transform duration-300">
                    {service.emoji || "🔧"}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[var(--color-navy-800)] leading-tight mt-1 group-hover:text-[var(--color-gold-600)] transition-colors duration-300">{service.title}</h3>
                </div>
                <p className="text-[var(--color-slate)] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Construction & Design Section */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-20">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-10 w-2.5 bg-[var(--color-gold-500)] rounded-full"></div>
          <h2 className="font-display text-3xl font-semibold text-[var(--color-navy-800)]">Construction & Design</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {constructionServices.map((service) => (
            <div key={service.id} className="bg-[var(--color-mist)] p-6 rounded-xl border border-[var(--color-gold-500)]/20 shadow-sm">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="shrink-0 text-[var(--color-gold-500)]" />
                <h3 className="font-display text-lg font-medium text-[var(--color-navy-800)]">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Project Gallery */}
      <div className="py-16 bg-white overflow-hidden border-t border-[var(--color-navy-800)]/5">
        <div className="max-w-7xl mx-auto px-5 md:px-8 mb-10 text-center">
          <h2 className="font-display text-3xl font-semibold text-[var(--color-navy-800)]">Field Operations & Equipment</h2>
          <p className="text-[var(--color-slate)] mt-3">A glimpse into our high-precision on-site survey operations.</p>
        </div>
        
        {/* Marquee Container */}
        <div className="relative flex overflow-x-hidden group w-full bg-[var(--color-paper)] py-6 shadow-inner">
          <div className="flex animate-marquee whitespace-nowrap gap-6 pl-6 items-center">
            {/* Array is mapped twice to create the infinite seamless loop effect */}
            {[
              "./Images/drone_shot.jpg", 
              "./Images/lidar_cons.jpg", 
              "./Images/machine1.jpeg", 
              "./Images/machine2.jpeg", 
              "./Images/total_station_survey.jpeg", 
              "./Images/watersupply1.jpeg", 
              "./Images/tgdepmachine3.jpg", 
              "./Images/maptopographic.jpeg", 
              "./Images/WhatsApp Image 2026-07-01 at 2.22.15 PM.jpeg",
              "./Images/drone_shot.jpg", 
              "./Images/lidar_cons.jpg", 
              "./Images/machine1.jpeg", 
              "./Images/machine2.jpeg", 
              "./Images/total_station_survey.jpeg", 
              "./Images/watersupply1.jpeg", 
              "./Images/tgdepmachine3.jpg", 
              "./Images/maptopographic.jpeg", 
              "./Images/WhatsApp Image 2026-07-01 at 2.22.15 PM.jpeg"
            ].map((imgSrc, index) => (
              <div key={index} className="w-[350px] md:w-[450px] h-[250px] md:h-[300px] shrink-0 rounded-2xl overflow-hidden shadow-lg border-2 border-white relative cursor-pointer transform transition-transform duration-500 hover:scale-[1.03]">
                <img src={imgSrc} alt={`Field operation gallery ${index}`} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-[var(--color-navy-900)]/20 hover:bg-transparent transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Value Props Strip */}
      <div className="bg-[var(--color-navy-950)] py-12 contour-bg">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {valueProps.map((prop) => (
              <div key={prop.id} className="flex items-center gap-3 text-white">
                {/* For simplicity we use a generic check icon here instead of dynamic lucide imports, or map them if needed */}
                <span className="w-2 h-2 rounded-full bg-[var(--color-gold-500)]"></span>
                <span className="font-mono-data text-sm uppercase tracking-widest">{prop.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
