import { Github, ExternalLink } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-8 items-center bg-surface border border-primary-dim/20 rounded-md p-6 md:p-10 backdrop-blur-sm">
      <div>
        <span className="font-mono text-xs text-primary-muted">
          0{index + 1} — {project.category}
        </span>
        <h3 className="font-heading text-2xl md:text-3xl font-semibold mt-2 text-foreground">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
          {project.description}
        </p>

        <ul className="mt-5 space-y-2">
          {project.highlights.slice(0, 3).map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-3 py-1 rounded-md border border-primary-dim/30 text-primary-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-6">
          <a
            href={project.links.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-hover transition-colors"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={16} /> Source
          </a>
        </div>
      </div>

      <div className="rounded-md overflow-hidden border border-primary-dim/20 aspect-video bg-background/50">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
}