import { Link } from "react-router-dom";
import { Compass, Map, Building2, Ruler, Target, DraftingCompass, Mountain, LayoutDashboard } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import AutoSlider from "../common/AutoSlider";
import { surveyServices } from "../../data/services";

// Select top 8 services for the home page grid to match the 4-column layout vibe
const topServices = [
  { 
    ...surveyServices[0], 
    icon: Map,
    images: [
      "./Images/topogr__.png",
      "./Images/topograp_02.png",
      "./Images/topgra_03.png"
    ]
  }, // Topographical
  { 
    ...surveyServices[1], 
    icon: Mountain,
    images: ["./Images/tgdepmachine3.jpg"]
  }, // Contour
  { 
    ...surveyServices[7], 
    icon: Ruler,
    images: [
      "./Images/WhatsApp Image 2026-07-01 at 2.22.15 PM (1).jpeg",
      "./Images/WhatsApp Image 2026-07-01 at 2.22.15 PM.jpeg"
    ]
  }, // Land Demarcation
  { 
    ...surveyServices[5], 
    icon: LayoutDashboard,
    images: [
      "./Images/WhatsApp Image 2026-07-01 at 2.22.24 PM.jpeg",
      "./Images/WhatsApp Image 2026-07-01 at 3.32.47 PM.jpeg"
    ]
  }, // Earthwork Quantity
  { 
    ...surveyServices[2], 
    icon: Compass,
    images: [
      "./Images/watersupply (1).jpeg",
      "./Images/watersupply (2).jpeg",
      "./Images/watersupply (3).jpeg"
    ]
  }, // Water Supply
  { 
    ...surveyServices[11], 
    icon: Building2,
    images: ["./Images/as_built_img.jpeg"]
  }, // As-Built
  { 
    ...surveyServices[9], 
    icon: Target,
    images: ["./Images/WhatsApp Image 2026-07-01 at 2.22.23 PM.jpeg"]
  }, // DGPS
  { 
    ...surveyServices[10], 
    icon: DraftingCompass,
    images: [
      "./Gallery/Total_station_work/WhatsApp Image 2026-07-03 at 5.27.14 PM.jpeg",
      "./Gallery/Total_station_work/WhatsApp Image 2026-07-03 at 5.27.14 PM (1).jpeg",
      "./Gallery/Total_station_work/WhatsApp Image 2026-07-03 at 5.27.14 PM (2).jpeg"
    ]
  }, // Total Station
];

export default function ServicesOverview() {
  return (
    <section id="services" className="bg-white relative pt-16 md:pt-24 pb-20 md:pb-28 overflow-hidden">
      
      {/* Top SVG Curve Divider (Paper to White) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 drop-shadow-md">
        <svg className="relative block w-full h-[40px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C400,120 800,120 1200,0 Z" className="fill-[var(--color-paper)]"></path>
        </svg>
      </div>
      
      {/* Decorative Blueprint Grid from left and right margins */}
      <div className="absolute inset-y-0 left-0 w-32 md:w-80 bg-[linear-gradient(to_right,#0f172a1a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a1a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:linear-gradient(to_right,black,transparent)] pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 md:w-80 bg-[linear-gradient(to_right,#0f172a1a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a1a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:linear-gradient(to_left,black,transparent)] pointer-events-none"></div>
      
      {/* Topographic Map accents on the sides */}
      <div className="hidden lg:block absolute top-0 left-0 w-96 h-full contour-bg-light opacity-80 [mask-image:linear-gradient(to_right,black_20%,transparent)] pointer-events-none"></div>
      <div className="hidden lg:block absolute top-0 right-0 w-96 h-full contour-bg-light opacity-80 [mask-image:linear-gradient(to_left,black_20%,transparent)] pointer-events-none"></div>
      
      {/* Soft Glow Orbs */}
      <div className="absolute top-1/4 left-[-10%] w-[50%] h-[50%] bg-[var(--color-gold-500)]/15 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>
      <div className="absolute bottom-1/4 right-[-10%] w-[50%] h-[50%] bg-[var(--color-navy-800)]/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>
      
      <div className="max-w-7xl mx-auto px-5 md:px-8 xl:px-12 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-12">
          <SectionHeading
            eyebrow="What We Offer"
            title="Our Services"
            description="Comprehensive survey and engineering solutions powered by the latest DGPS and Total Station technology."
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topServices.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id} 
                className="group bg-white rounded-xl border border-[var(--color-mist)] overflow-hidden hover:border-[var(--color-gold-500)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col"
              >
                {/* Image Slider Layer */}
                <div className="h-44 bg-[var(--color-mist)] relative overflow-hidden contour-bg-light flex items-center justify-center group">
                  <AutoSlider 
                    images={service.images || []} 
                    altBase={service.title}
                    containerClassName="absolute inset-0 w-full h-full"
                    imageClassName={`object-cover group-hover:scale-110 ${service.imageClass || ""}`}
                  />
                  {/* Dark tint that disappears on hover */}
                  <div className="absolute inset-0 bg-[var(--color-navy-900)]/10 group-hover:bg-transparent transition-colors duration-500 z-20 pointer-events-none" />
                </div>
                
                {/* Content Block */}
                <div className="p-5 flex items-center gap-4 flex-grow border-t border-[var(--color-mist)] group-hover:bg-[var(--color-paper)] transition-colors">
                  <div className="w-10 h-10 rounded-md bg-[var(--color-paper)] border border-[var(--color-gold-200)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-gold-500)] group-hover:border-[var(--color-gold-500)] transition-colors duration-300">
                    <Icon size={18} className="text-[var(--color-gold-600)] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-[14px] text-[var(--color-navy-800)] leading-snug">
                      {service.title}
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center relative z-10 pb-16">
           <Link to="/services" className="inline-flex items-center justify-center px-8 py-3.5 bg-[var(--color-navy-800)] text-white font-mono-data text-xs uppercase tracking-widest font-bold rounded-sm hover:bg-[var(--color-gold-500)] hover:text-[var(--color-navy-900)] transition-colors shadow-md">
             View All Services
           </Link>
        </div>

      </div>
      
      {/* SVG Curve Divider to TrackRecord (Mist) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-[1px]">
        <svg className="relative block w-full h-[50px] md:h-[120px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-[var(--color-mist)]"></path>
        </svg>
      </div>
    </section>
  );
}
