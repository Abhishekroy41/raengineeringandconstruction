import { ShieldCheck, BadgeCheck } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { company } from "../../data/company";

function RegistrationCard({ icon: Icon, label, number, issuer }) {
  return (
    <div className="flex items-start gap-4 bg-white rounded-2xl border border-[var(--color-navy-800)]/8 shadow-sm p-6 md:p-7">
      <span className="flex items-center justify-center h-11 w-11 rounded-full bg-[var(--color-navy-800)] text-white shrink-0">
        <Icon size={20} />
      </span>
      <div>
        <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-slate)] mb-1">{issuer}</p>
        <p className="font-display text-base font-semibold text-[var(--color-navy-800)] mb-1">{label}</p>
        <p className="font-mono-data text-sm text-[var(--color-ink)] tracking-wide">{number}</p>
      </div>
    </div>
  );
}

export default function ComplianceBadges() {
  return (
    <section id="compliance" className="bg-[var(--color-navy-950)] text-white">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-24">
        <SectionHeading
          eyebrow="Registered & Verified"
          title="Government-recognised and fully compliant"
          description="R.A. Engineering & Construction operates as a registered MSME (Udyam) enterprise and is fully GST compliant — verified credentials, on every project."
          light
        />

        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl">
          <RegistrationCard
            icon={BadgeCheck}
            issuer="Government of India"
            label="Udyam (MSME) Registration"
            number={company.registrations.udyam}
          />
          <RegistrationCard
            icon={ShieldCheck}
            issuer="Goods & Services Tax"
            label="GST Registration"
            number={company.registrations.gst}
          />
        </div>
      </div>
    </section>
  );
}
