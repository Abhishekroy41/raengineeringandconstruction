import { Phone, Mail, MapPin } from "lucide-react";
import { company } from "../../data/company";

// lucide-react no longer ships brand icons, so Instagram's glyph
// is a small inline SVG kept local to this file.
function InstagramIcon({ size = 16, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy-950)] text-white/80">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img 
              src="./Images/Home_page_img/logo.jpeg" 
              alt="R.A. Engineering Logo" 
              className="w-14 h-14 object-contain rounded-sm" 
            />
            <div className="flex flex-col leading-tight">
              <p className="font-display text-xl md:text-2xl font-semibold text-white">R.A. Engineering</p>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[var(--color-gold-500)]">
                &amp; Construction
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-white/60">{company.tagline}</p>
        </div>

        {/* Contact */}
        <div>
          <p className="font-display text-sm uppercase tracking-[0.15em] text-white mb-4">
            Get in Touch
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-[var(--color-gold-500)]" />
              <span>{company.address.full}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="shrink-0 text-[var(--color-gold-500)]" />
              <a href={`tel:${company.contact.phone}`} className="hover:text-white">
                {company.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="shrink-0 text-[var(--color-gold-500)]" />
              <a href={`mailto:${company.contact.email}`} className="hover:text-white">
                {company.contact.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <InstagramIcon size={16} className="shrink-0 text-[var(--color-gold-500)]" />
              <a
                href={company.contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                @r_a_engineering_cwa
              </a>
            </li>
          </ul>
        </div>

        {/* Registrations */}
        <div>
          <p className="font-display text-sm uppercase tracking-[0.15em] text-white mb-4">
            Registered &amp; Compliant
          </p>
          <ul className="space-y-2 text-sm font-mono-data text-white/60">
            <li>GST: {company.registrations.gst}</li>
            <li>UDYAM: {company.registrations.udyam}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} {company.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
