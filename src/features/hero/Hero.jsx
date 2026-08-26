import { portfolioConfig } from '../../data/portfolio.config.js'

export default function Hero() {
  return (
    <section className="hero-section" id="about">
      <div className="hero-copy">
        <p className="eyebrow">Hi, I’m {portfolioConfig.name}</p>
        <h1>{portfolioConfig.role}</h1>
        <p>{portfolioConfig.bio}</p>
        <div className="hero-actions">
          <a href="#work" className="primary-btn">View Work</a>
          <a href={portfolioConfig.resumeLink} className="secondary-btn" target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
      </div>
    </section>
  )
}
