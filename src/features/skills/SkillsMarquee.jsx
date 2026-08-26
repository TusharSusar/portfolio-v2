import { skillsData } from './skills.data.js'

export default function SkillsMarquee() {
  return (
    <section className="skills-section" aria-label="Skills">
      <div className="marquee-track">
        {[...skillsData, ...skillsData].map((skill, index) => (
          <span className="skill-pill" key={`${skill}-${index}`}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
