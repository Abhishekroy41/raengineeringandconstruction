import SectionHeading from "../common/SectionHeading";
import { company } from "../../data/company";
import { motion } from "framer-motion";

export default function Technology() {
  return (
    <section className="bg-[var(--color-paper)] relative py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8 xl:px-12 relative z-10 pb-20">
        
        <div className="flex flex-col items-center justify-center text-center">
          <SectionHeading 
            eyebrow="Our Technology"
            title="Instruments We Use"
            description="We deploy cutting-edge precision instruments to deliver accurate, reliable data on every project — no matter the scale or terrain."
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {company.equipment.map((eq, index) => (
            <motion.div 
              key={eq.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-shadow overflow-hidden border border-[var(--color-mist)] flex flex-col">
              
              {/* Image Container with Badge */}
              <div className="relative h-48 bg-[var(--color-mist)] flex flex-col items-center justify-center contour-bg-light">
                {eq.image ? (
                  <img src={eq.image} alt={eq.title} className={`w-full h-full object-cover ${eq.imageClass || ""}`} />
                ) : (
                  <span className="font-mono-data text-xs uppercase text-[var(--color-slate)]">Image Pending</span>
                )}
                
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-[var(--color-navy-950)] text-white font-mono-data text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-sm shadow-sm">
                  {eq.badge}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="font-display text-xl font-bold text-[var(--color-navy-800)] mb-1">{eq.title}</h4>
                <p className="font-mono-data text-[10px] font-bold text-[var(--color-gold-600)] uppercase tracking-wider mb-4">
                  {eq.subtitle}
                </p>
                <p className="text-[var(--color-slate)] text-sm leading-relaxed flex-grow">
                  {eq.description}
                </p>
              </div>
              
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* SVG Curve Divider to White */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-[1px]">
        <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-white"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-white"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
}
