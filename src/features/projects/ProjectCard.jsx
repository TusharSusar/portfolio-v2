export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image" aria-hidden="true">
        {project.image || 'Project Visual'}
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ul>
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <a href={project.link}>View project</a>
      </div>
    </article>
  )
}
