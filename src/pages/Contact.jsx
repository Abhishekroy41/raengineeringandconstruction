import { useState } from "react";
import { MapPin, Phone, Mail, ExternalLink, Loader2, CheckCircle2 } from "lucide-react";
import SectionHeading from "../components/common/SectionHeading";
import { company } from "../data/company";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="bg-[var(--color-paper)] min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <SectionHeading 
            eyebrow="Get In Touch"
            title="Let's build something precise together."
            description="Whether you need a topographical survey or complete architectural design, we are here to help."
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Contact Details & Map */}
          <div className="w-full lg:w-5/12">
            <div className="bg-[var(--color-navy-950)] text-white p-8 md:p-10 rounded-2xl contour-bg shadow-xl">
              <h3 className="font-display text-2xl mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-[var(--color-gold-500)] shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-mono-data text-xs uppercase tracking-widest text-[var(--color-gold-500)] mb-1">Office Address</h4>
                    <p className="text-white/80 text-sm leading-relaxed mb-3">
                      {company.address.line1}<br />
                      {company.address.line2}<br />
                      {company.address.state} - {company.address.pin}
                    </p>
                    <a 
                      href={company.address.mapLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors"
                    >
                      <ExternalLink size={12} />
                      View on Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="text-[var(--color-gold-500)] shrink-0" size={24} />
                  <div>
                    <h4 className="font-mono-data text-xs uppercase tracking-widest text-[var(--color-gold-500)] mb-1">Phone</h4>
                    <a href={`tel:${company.contact.phone}`} className="text-white/90 hover:text-white transition-colors">
                      {company.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="text-[var(--color-gold-500)] shrink-0" size={24} />
                  <div>
                    <h4 className="font-mono-data text-xs uppercase tracking-widest text-[var(--color-gold-500)] mb-1">Email</h4>
                    <a href={`mailto:${company.contact.email}`} className="text-white/90 hover:text-white transition-colors text-sm">
                      {company.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-[var(--color-gold-500)] shrink-0"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  <div>
                    <h4 className="font-mono-data text-xs uppercase tracking-widest text-[var(--color-gold-500)] mb-1">Social</h4>
                    <a 
                      href={company.contact.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/90 hover:text-[var(--color-gold-500)] transition-colors text-sm font-medium"
                    >
                      @r_a_engineering_cwa
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-7/12 pt-4">
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-[var(--color-mist)] shadow-sm">
              <h3 className="font-display text-2xl text-[var(--color-navy-800)] mb-6">Send a Message</h3>
              
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="font-mono-data text-xs uppercase tracking-wider text-[var(--color-slate)]">Full Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-[var(--color-paper)] border border-[var(--color-mist)] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)] focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-mono-data text-xs uppercase tracking-wider text-[var(--color-slate)]">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full bg-[var(--color-paper)] border border-[var(--color-mist)] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)] focus:border-transparent transition-all"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label className="font-mono-data text-xs uppercase tracking-wider text-[var(--color-slate)]">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-[var(--color-paper)] border border-[var(--color-mist)] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)] focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono-data text-xs uppercase tracking-wider text-[var(--color-slate)]">Service Interested In</label>
                  <select required className="w-full bg-[var(--color-paper)] border border-[var(--color-mist)] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)] focus:border-transparent transition-all text-[var(--color-ink)]">
                    <option value="">Select a service...</option>
                    <option value="survey">Surveying & Mapping</option>
                    <option value="construction">Construction & Layout</option>
                    <option value="design">Architectural Design & 3D</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono-data text-xs uppercase tracking-wider text-[var(--color-slate)]">Message / Project Details</label>
                  <textarea 
                    rows="4" 
                    required
                    className="w-full bg-[var(--color-paper)] border border-[var(--color-mist)] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)] focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting || isSuccess}
                  className={
                    "w-full font-medium py-3.5 rounded-lg transition-colors mt-2 flex items-center justify-center gap-2 " +
                    (isSuccess ? "bg-green-500 text-white" : "bg-[var(--color-gold-500)] hover:bg-[var(--color-gold-600)] text-white")
                  }
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle2 size={20} />
                      Sent Successfully!
                    </>
                  ) : (
                    "Send Inquiry"
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
