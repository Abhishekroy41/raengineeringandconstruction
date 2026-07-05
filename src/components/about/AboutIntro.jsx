import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AutoSlider from "../common/AutoSlider";
import { company } from "../../data/company";

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const YoutubeIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


export default function AboutIntro() {
  const base = import.meta.env.BASE_URL;
  // Placeholder images - user will provide actual ones later
  const introImages = [
    `${base}Images/machine1.jpeg`,
    `${base}Images/total_stat (1).jpeg`,
    `${base}Images/project_building_const.jpg`,
    `${base}Images/total_station_survey.jpeg`
  ];

  return (
    <section className="relative bg-white py-16 md:py-24 border-b border-[var(--color-mist)]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 xl:px-12">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[var(--color-mist)] rounded-full mb-6 border border-[var(--color-navy-800)]/5 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-gold-500)] animate-pulse"></span>
              <span className="font-mono-data text-xs font-bold uppercase tracking-widest text-[var(--color-navy-800)]">
                Established Since 2024
              </span>
            </div>
            
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-navy-900)] leading-tight mb-4">
              Welcome to R.A. Engineering <br className="hidden lg:block"/> & Construction
            </h1>
            
            <h2 className="text-xl md:text-2xl text-[var(--color-gold-600)] font-medium mb-6">
              We Are the Best Land Survey Company in India
            </h2>
            
            <p className="text-[var(--color-slate)] text-lg leading-relaxed mb-8">
              Where we design your visions using precision, innovation, and unwavering commitment. Our main objective is to assist our clients in meeting their specialized needs in structural designing and construction engineering through innovative and cost-effective solutions.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 mt-10">
              <Link to="/services" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--color-navy-800)] text-white font-mono-data text-xs uppercase tracking-widest font-bold rounded-sm hover:bg-[var(--color-gold-500)] hover:text-[var(--color-navy-900)] transition-colors shadow-md group">
                Know More
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              {/* Social Media Links */}
              <div className="flex items-center gap-4 border-l-2 border-[var(--color-mist)] pl-6">
                <a href={company.contact.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-[var(--color-paper)] flex items-center justify-center text-[var(--color-navy-700)] hover:bg-[#1877F2] hover:text-white transition-colors shadow-sm">
                  <FacebookIcon size={18} />
                </a>
                <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-[var(--color-paper)] flex items-center justify-center text-[var(--color-navy-700)] hover:bg-[#1DA1F2] hover:text-white transition-colors shadow-sm">
                  <TwitterIcon size={18} />
                </a>
                <a href="#" aria-label="Youtube" className="w-10 h-10 rounded-full bg-[var(--color-paper)] flex items-center justify-center text-[var(--color-navy-700)] hover:bg-[#FF0000] hover:text-white transition-colors shadow-sm">
                  <YoutubeIcon size={18} />
                </a>
                <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-[var(--color-paper)] flex items-center justify-center text-[var(--color-navy-700)] hover:bg-[#0A66C2] hover:text-white transition-colors shadow-sm">
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Images Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Decorative background elements */}
              <div className="absolute -inset-4 bg-[var(--color-mist)] rounded-[2rem] transform rotate-3 -z-10"></div>
              <div className="absolute -inset-4 bg-white rounded-[2rem] shadow-xl border border-[var(--color-navy-800)]/5 transform -rotate-1 -z-10"></div>
              
              {/* AutoSlider for up to 3 images */}
              <div className="rounded-[1.5rem] overflow-hidden h-[400px] md:h-[500px] w-full shadow-lg relative group">
                <AutoSlider 
                  images={introImages}
                  altBase="About RA Engineering"
                  containerClassName="w-full h-full"
                  imageClassName="group-hover:scale-105"
                />
                
                {/* Floating Experience Badge on Image */}
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-12 h-12 bg-[var(--color-gold-50)] rounded-full flex items-center justify-center">
                    <span className="text-[var(--color-gold-600)] font-bold text-xl">100+</span>
                  </div>
                  <div>
                    <p className="text-[var(--color-navy-900)] font-bold text-sm">Projects</p>
                    <p className="text-[var(--color-slate)] text-xs">Successfully Delivered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* SVG Arrow/Triangle Pointing Up Divider transitioning to Mist */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[1px]">
        <svg className="relative block w-full h-[30px] md:h-[60px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M600,0 L1200,120 H0 Z" className="fill-[var(--color-mist)]"></path>
        </svg>
      </div>
    </section>
  );
}
