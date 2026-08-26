import Header from './features/header/Header.jsx'
import Hero from './features/hero/Hero.jsx'
import MotionPathLayer from './features/background-motion/MotionPathLayer.jsx'
import SkillsMarquee from './features/skills/SkillsMarquee.jsx'
import ProjectsSection from './features/projects/ProjectsSection.jsx'
import EyeTrackerSection from './features/eye-tracker/EyeTrackerSection.jsx'
import ExperienceSection from './features/experience/ExperienceSection.jsx'
import ContactSection from './features/contact/ContactSection.jsx'
import Footer from './features/footer/Footer.jsx'

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />
        <MotionPathLayer />
        <SkillsMarquee />
        <ProjectsSection />
        <EyeTrackerSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
