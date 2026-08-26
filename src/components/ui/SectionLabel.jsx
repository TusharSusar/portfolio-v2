export default function SectionLabel({ eyebrow, title, className = "" }) {
  return (
    <div className={`mb-16 ${className}`.trim()}>
      <span className="font-mono text-xs uppercase tracking-widest text-primary">
        {eyebrow}
      </span>
      <h2 className="font-heading text-4xl sm:text-5xl font-bold mt-3 text-foreground">
        {title}
      </h2>
    </div>
  );
}