import { useState } from "react";
import SectionHeading from "../components/common/SectionHeading";
import ProjectCard from "../components/projects/ProjectCard";
import { projectsData, projectCategories } from "../data/projects";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? projectsData
    : projectsData.filter((project) => project.category === activeCategory);

  return (
    <div className="bg-[var(--color-paper)] min-h-screen pb-20">
      
      {/* Premium Dark Header with Advanced Curves & Graphics */}
      <div className="relative bg-[var(--color-navy-950)] pt-32 pb-40 overflow-hidden">
        {/* Background Gradients & Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] rounded-full bg-[var(--color-gold-500)]/10 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-[300px] h-[300px] rounded-full bg-blue-500/10 blur-[80px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-2xl">
            <SectionHeading 
              eyebrow="Our Portfolio"
              title="Featured Projects"
              description="Explore our recent survey, construction, and design work across Chhindwara and surrounding regions. We bring engineering precision to every site."
              align="left"
              light={true}
            />
          </div>

          {/* Right Side Decorative Element with Premium Logo Display */}
          <div className="hidden md:block w-1/3 relative">
            <div className="relative w-[300px] h-[300px] mx-auto flex items-center justify-center group">
              {/* Outer decorative orbits with glowing dots */}
              <div className="absolute inset-0 border border-[var(--color-gold-500)]/20 rounded-full animate-[spin_30s_linear_infinite] group-hover:border-[var(--color-gold-500)]/40 transition-colors duration-500">
                <div className="absolute -top-1.5 left-1/2 w-3 h-3 bg-[var(--color-gold-500)] rounded-full shadow-[0_0_15px_var(--color-gold-500)]"></div>
              </div>
              <div className="absolute inset-8 border border-blue-400/20 rounded-full animate-[spin_20s_linear_infinite_reverse]">
                <div className="absolute top-1/2 -left-1.5 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(96,165,250,0.8)]"></div>
              </div>

              {/* Glowing aura behind logo */}
              <div className="absolute inset-16 bg-gradient-to-tr from-[var(--color-gold-500)]/20 to-[var(--color-navy-700)]/40 rounded-full blur-2xl"></div>
              
              {/* Center Logo Plate (Glassmorphism) */}
              <div className="relative w-48 h-48 bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)] z-20 flex items-center justify-center p-3 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-12px_rgba(193,146,47,0.3)]">
                <div className="w-full h-full bg-white rounded-xl overflow-hidden shadow-inner flex items-center justify-center">
                  <img 
                    src="./Images/Home_page_img/logo.jpeg" 
                    alt="RA Engineering Logo" 
                    className="w-full h-full object-contain p-2 transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Double-layered Wavy SVG Curve transitioning to Paper */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[1px]">
          <svg className="relative block w-full h-[60px] md:h-[120px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,120 C400,20 800,100 1200,40 V120 Z" opacity="0.3" className="fill-[var(--color-paper)]"></path>
            <path d="M0,120 C400,60 800,40 1200,0 V120 Z" className="fill-[var(--color-paper)]"></path>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-8 relative z-20">

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full font-mono-data text-xs uppercase tracking-wider font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-[var(--color-navy-800)] text-white shadow-md"
                  : "bg-white text-[var(--color-slate)] border border-[var(--color-mist)] hover:border-[var(--color-gold-500)] hover:text-[var(--color-navy-800)]"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-[var(--color-slate)]">
              <p className="font-mono-data uppercase tracking-widest text-sm">No projects found in this category.</p>
            </div>
          )}
        </div>

        {/* Video Showcase Section */}
        <div className="mt-28 border-t border-[var(--color-mist)] pt-20">
          <SectionHeading 
            eyebrow="On-Site Operations"
            title="Real-Time Construction & Drilling"
            description="Watch our teams in action during road construction and heavy drilling operations."
            align="center"
          />
          
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] border-[4px] border-white bg-[var(--color-mist)] group relative">
              <video 
                src="./Videos/road_construct.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                controls
                preload="metadata"
                className="w-full h-[300px] md:h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div>
                  <p className="text-[var(--color-gold-500)] font-mono-data text-xs uppercase tracking-widest mb-2">Project Operation</p>
                  <p className="text-white font-display font-semibold text-2xl">Road Construction Progress</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] border-[4px] border-white bg-[var(--color-mist)] group relative">
              <video 
                src="./Videos/road_drill.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                controls
                preload="metadata"
                className="w-full h-[300px] md:h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div>
                  <p className="text-[var(--color-gold-500)] font-mono-data text-xs uppercase tracking-widest mb-2">Heavy Machinery</p>
                  <p className="text-white font-display font-semibold text-2xl">Precision Drilling Operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
