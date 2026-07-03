import { MapPin, CheckCircle2, Image as ImageIcon } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="group flex flex-col bg-white border border-[var(--color-mist)] rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Image Container */}
      <div className="aspect-[4/3] bg-[var(--color-mist)] relative overflow-hidden flex items-center justify-center contour-bg-light">
        {project.imageUrl ? (
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-[var(--color-slate)]/50">
            <ImageIcon className="w-10 h-10 mb-2 stroke-[1.5]" />
            <span className="font-mono-data text-xs uppercase tracking-wider">Photo Pending</span>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-[var(--color-navy-800)] font-mono-data text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-display text-xl font-semibold text-[var(--color-navy-800)] mb-2 group-hover:text-[var(--color-gold-600)] transition-colors">
          {project.title}
        </h3>
        
        <div className="flex items-center text-[var(--color-slate)] text-sm mb-4">
          <MapPin className="w-4 h-4 mr-1.5 text-[var(--color-gold-500)]" />
          {project.location}
        </div>
        
        <p className="text-[var(--color-slate)] text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>
        
        {/* Metrics (if any) */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-auto pt-4 border-t border-[var(--color-mist)] flex flex-wrap gap-x-4 gap-y-2">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="flex items-center text-xs text-[var(--color-navy-700)] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-[var(--color-gold-500)]" />
                {metric}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
