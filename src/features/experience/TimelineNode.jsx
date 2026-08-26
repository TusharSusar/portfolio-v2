import { Briefcase } from "lucide-react";

export default function TimelineNode({ item }) {
  return (
    <div className="timeline-item relative">
      <span className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-primary flex items-center justify-center">
        <span className="w-1.5 h-1.5 rounded-full bg-background" />
      </span>

      <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
        <Briefcase size={12} className="text-primary" />
        {item.duration.start} — {item.duration.end}
      </div>

      <h3 className="font-heading text-xl sm:text-2xl font-semibold text-foreground">
        {item.role}
      </h3>
      <p className="text-primary-muted text-sm mt-1">
        {item.company} / {item.location}
      </p>

      <ul className="mt-3 space-y-1.5">
        {item.bullets.map((b, i) => (
          <li key={i} className="text-sm text-muted-foreground leading-relaxed">
            — {b}
          </li>
        ))}
      </ul>

      {item.techUsed?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {item.techUsed.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2.5 py-1 rounded-md border border-primary-dim/30 text-primary-muted"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}