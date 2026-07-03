import { Phone, Mail } from "lucide-react";
import { company } from "../../data/company";

export default function CTASection() {
  return (
    <section className="bg-[var(--color-mist)]">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-24 text-center">
        <span className="font-mono-data text-xs uppercase tracking-[0.25em] text-[var(--color-gold-600)]">
          Start Your Project
        </span>
        <h2 className="font-display mt-4 text-3xl md:text-4xl font-semibold text-[var(--color-navy-800)] max-w-2xl mx-auto">
          Planning a survey, a build, or both?
        </h2>
        <p className="mt-4 text-base text-[var(--color-slate)] max-w-xl mx-auto">
          Talk to {company.ownerName} directly about your site, timeline, and requirements.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`tel:${company.contact.phone}`}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-navy-800)] text-white text-sm font-semibold px-6 py-3.5 hover:bg-[var(--color-navy-700)] transition-colors"
          >
            <Phone size={16} />
            Call {company.contact.phoneDisplay}
          </a>
          <a
            href={`mailto:${company.contact.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-navy-800)]/20 text-[var(--color-navy-800)] text-sm font-medium px-6 py-3.5 hover:bg-white transition-colors"
          >
            <Mail size={16} />
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
