import { projectsData } from './projects.data.js'
import ProjectCard from './ProjectCard.jsx'

export default function ProjectsSection() {
  return (
    <section className="projects-section" id="work">
      <h2>Selected Work</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
