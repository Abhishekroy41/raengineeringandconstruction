import { Map, Compass, Box, Palette, Building2, CheckCircle } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import AutoSlider from "../common/AutoSlider";
import { motion } from "framer-motion";

const lifecycleSteps = [
  {
    id: "step-1",
    title: "Planning & Roadmap",
    description: "Every successful project begins with a clear vision. We establish the project roadmap, set key milestones, and define the technical scope of work.",
    images: [
      "./Images/Home_page_img/WhatsApp Image 2026-07-01 at 4.14.12 PM (2).jpeg",
      "./Images/Home_page_img/WhatsApp Image 2026-07-01 at 4.14.12 PM.jpeg"
    ],
    icon: Map
  },
  {
    id: "step-2",
    title: "Precision Surveying",
    description: "Our engineering team conducts highly accurate topographical and contour surveys to establish exact ground data using DGPS and Total Stations.",
    image: "./Images/machine1.jpeg",
    icon: Compass
  },
  {
    id: "step-3",
    title: "3D Structure & Modeling",
    description: "We translate field survey data into comprehensive 3D models and architectural blueprints, visualizing the structure perfectly before construction begins.",
    images: [
      "./Images/Home_page_img/WhatsApp Image 2026-07-01 at 4.14.13 PM.jpeg",
      "./Images/Home_page_img/WhatsApp Image 2026-07-01 at 4.14.13 PM (2).jpeg"
    ],
    icon: Box
  },
  {
    id: "step-4",
    title: "Color Selection & Aesthetics",
    description: "Collaborating with clients to select the right materials, textures, and color palettes to ensure the final build is visually stunning and modern.",
    image: "./Images/Home_page_img/WhatsApp Image 2026-07-01 at 4.14.12 PM (1).jpeg",
    icon: Palette
  },
  {
    id: "step-5",
    title: "Construction & Final Build",
    description: "The execution phase where precision meets craftsmanship. We construct and deliver the final project strictly adhering to engineering and safety standards.",
    images: [
      "./Images/Home_page_img/WhatsApp Image 2026-07-01 at 4.10.56 PM (1).jpeg",
      "./Images/Home_page_img/WhatsApp Image 2026-07-01 at 4.10.55 PM.jpeg"
    ],
    icon: Building2
  },
  {
    id: "step-6",
    title: "Final Ready Product",
    description: "The culmination of planning, engineering, and expert execution. A fully completed, high-quality structure ready for handover and utilization.",
    images: [
      "./Images/Home_page_img/WhatsApp Image 2026-07-01 at 4.14.14 PM.jpeg",
      "./Images/Home_page_img/WhatsApp Image 2026-07-01 at 4.10.57 PM.jpeg"
    ],
    icon: CheckCircle
  }
];

export default function TrackRecord() {
  return (
    <section className="bg-[var(--color-mist)] py-20 md:py-32 contour-bg-light relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        
        <div className="flex flex-col items-center justify-center text-center mb-20">
          <SectionHeading 
            eyebrow="Track Record"
            title="How We Build: From Vision to Reality"
            description="A step-by-step look at our engineering process — combining precision surveying with expert construction craft."
            align="center"
          />
        </div>
        
        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-[var(--color-gold-200)] -translate-x-1/2 opacity-50"></div>
          
          <div className="space-y-16 md:space-y-24">
            {lifecycleSteps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 !== 0; // Alternating layout
              
              return (
                <motion.div 
                  key={step.id} 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot (Desktop only) */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[var(--color-mist)] rounded-full border-[6px] border-white items-center justify-center shadow-sm z-10">
                    <div className="w-full h-full bg-[var(--color-navy-800)] rounded-full flex items-center justify-center">
                       <Icon size={16} className="text-[var(--color-gold-500)]" />
                    </div>
                  </div>

                  {/* Image Card Block */}
                  <div className="w-full md:w-1/2">
                    <div className="bg-white p-2 rounded-2xl shadow-md border border-[var(--color-navy-800)]/5 transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden bg-gray-100 group">
                        <AutoSlider 
                          images={step.images || step.image} 
                          altBase={step.title}
                          containerClassName="w-full h-full"
                          imageClassName="group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Block */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:text-right' : 'md:text-left'} text-center`}>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-gold-50)] text-[var(--color-gold-600)] mb-6 md:hidden shadow-inner">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-mono-data text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-gold-600)] mb-3">Step 0{idx + 1}</h3>
                    <h4 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-navy-800)] mb-4">{step.title}</h4>
                    <p className="text-[var(--color-slate)] leading-relaxed md:text-lg">{step.description}</p>
                  </div>
                  
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
