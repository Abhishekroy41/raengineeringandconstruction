import { Target, Building2, PencilRuler, Users, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import { valueProps } from "../../data/services";

const ICONS = {
  target: Target,
  "building-2": Building2,
  "pencil-ruler": PencilRuler,
  users: Users,
  handshake: Handshake,
};

export default function WhyChooseUs() {
  return (
    <section className="bg-blue-50 relative border-t border-[var(--color-navy-800)]/8">
      <div className="max-w-6xl mx-auto px-5 md:px-8 pt-12 pb-24 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {valueProps.map((vp, index) => {
            const Icon = ICONS[vp.icon];
            return (
              <motion.div 
                key={vp.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center gap-3 group">
                <span className="flex items-center justify-center h-16 w-16 rounded-full bg-[var(--color-mist)] text-[var(--color-navy-800)] border-2 border-white shadow-sm group-hover:scale-110 group-hover:bg-[var(--color-gold-500)] group-hover:text-white transition-all duration-300">
                  <Icon size={28} />
                </span>
                <span className="text-xs md:text-sm font-medium text-[var(--color-ink)] leading-snug group-hover:text-[var(--color-gold-600)] transition-colors">
                  {vp.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Multi-layered wave transitioning to var(--color-paper) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-[1px]">
        <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[var(--color-paper)]"></path>
        </svg>
      </div>
    </section>
  );
}
