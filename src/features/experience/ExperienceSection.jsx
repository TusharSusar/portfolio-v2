import { experienceData } from './experience.data.js'
import TimelineNode from './TimelineNode.jsx'

export default function ExperienceSection() {
  return (
    <section className="experience-section" id="experience">
      <h2>Experience</h2>
      <ul className="timeline">
        {experienceData.map((item) => (
          <TimelineNode key={`${item.company}-${item.role}`} item={item} />
        ))}
      </ul>
    </section>
  )
}
