export default function SectionHeading({ eyebrow, title, description, align = "left", light = false }) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const bodyColor = light ? "text-white/70" : "text-[var(--color-slate)]";
  const titleColor = light ? "text-white" : "text-[var(--color-navy-800)]";
  const eyebrowColor = light ? "text-[var(--color-gold-500)]" : "text-[var(--color-gold-600)]";

  return (
    <div className={`max-w-2xl mb-10 md:mb-14 ${alignClass}`}>
      {eyebrow && (
        <span className={`block font-mono-data text-xs uppercase tracking-[0.25em] mb-3 ${eyebrowColor}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display text-3xl md:text-4xl font-semibold tracking-tight ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${bodyColor}`}>{description}</p>
      )}
    </div>
  );
}
