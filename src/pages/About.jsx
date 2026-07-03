import { CheckCircle2, ChevronRight, User, Users, Compass, ShieldCheck } from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";
import AboutIntro from "../components/about/AboutIntro";
import { company } from "../data/company";

export default function About() {
  return (
    <div className="bg-[var(--color-paper)] min-h-screen pt-24 pb-20">
      
      {/* Introduction Section */}
      <div id="who-we-are" className="max-w-6xl mx-auto px-5 md:px-8 mb-20">
        
        {/* Subtle Heading Container */}
        <div className="bg-white rounded-[2.5rem] p-6 md:p-8 lg:p-10 shadow-sm border border-gray-100 mb-10 relative overflow-hidden">
          {/* Subtle contour pattern in the corner */}
          <div className="absolute top-0 right-0 w-40 h-40 contour-bg-light opacity-40 rounded-bl-full pointer-events-none"></div>
          
          <div className="relative z-10 [&>div]:mb-0">
            <SectionHeading 
              eyebrow="Who We Are"
              title="Building with Precision & Trust"
              description={company.tagline}
            />
          </div>
        </div>
        
        <div className="bg-white border border-[var(--color-mist)] rounded-2xl p-8 md:p-10 shadow-sm mt-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 contour-bg-light opacity-50 rounded-bl-full pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start">
            <div className="w-full md:w-1/3">
              <div className="aspect-square rounded-xl overflow-hidden mb-6 border-2 border-white shadow-lg relative group">
                <img 
                  src="./Images/profile_pic.png" 
                  alt={company.ownerName} 
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-900)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="font-display text-2xl font-semibold text-[var(--color-navy-800)]">{company.ownerName}</h3>
              <p className="text-[var(--color-gold-600)] font-medium text-sm mt-1">{company.ownerTitle}</p>
              
              <div className="flex items-center gap-2 mt-4 text-[var(--color-slate)] text-sm">
                <Users size={18} className="text-[var(--color-navy-700)]" />
                <span className="font-medium">{company.team.size}</span>
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <h4 className="font-display text-xl text-[var(--color-navy-800)] mb-4">The Visionary Behind the Firm</h4>
              <p className="text-[var(--color-slate)] leading-relaxed mb-8">
                {company.team.founderBio}
              </p>
              
              <h5 className="font-mono-data text-xs uppercase tracking-widest text-[var(--color-navy-700)] mb-4 font-semibold">Key Roles & Responsibilities</h5>
              <ul className="space-y-3">
                {company.team.founderRoles.map((role, idx) => (
                  <li key={idx} className="flex items-start text-sm text-[var(--color-ink)]">
                    <ChevronRight size={16} className="shrink-0 text-[var(--color-gold-500)] mt-0.5 mr-2" />
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome / Intro Section */}
      <AboutIntro />

      {/* Specializations & Strengths */}
      <div className="bg-[var(--color-mist)] py-20 contour-bg-light relative">
        <div className="max-w-6xl mx-auto px-5 md:px-8 relative z-10 pb-10">
          <SectionHeading 
            eyebrow="Our Edge"
            title="Specializations & Strengths"
            description="What sets us apart in the field of engineering and surveying."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {company.specializations.map((spec, idx) => (
              <div key={idx} className="group bg-white p-6 rounded-xl border border-[var(--color-mist)] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-navy-700)] to-[var(--color-gold-500)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="w-12 h-12 flex items-center justify-center bg-[var(--color-mist)] rounded-lg text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {spec.emoji}
                </div>
                <h4 className="font-display text-lg font-bold text-[var(--color-navy-800)] mb-2 group-hover:text-[var(--color-gold-600)] transition-colors duration-300">
                  {spec.title}
                </h4>
                <p className="text-[var(--color-slate)] text-sm leading-relaxed">
                  {spec.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SVG Single Left Corner Curve Divider transitioning to Paper */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[1px]">
          <svg className="relative block w-full h-[40px] md:h-[90px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200,120 H300 C150,120 50,0 0,0 V120 Z" className="fill-[var(--color-paper)]"></path>
          </svg>
        </div>
      </div>

      {/* Equipment Profile */}
      <div className="max-w-6xl mx-auto px-5 md:px-8 pt-20">
        <SectionHeading 
          eyebrow="Our Tech"
          title="Advanced Equipment"
          description="We utilize state-of-the-art surveying machinery to guarantee precision in every measurement."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {company.equipment.map((eq) => (
            <div key={eq.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-[var(--color-mist)] flex flex-col">
              
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
              
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
