import { Toaster } from "sonner";
import { CursorProvider } from "@/context/CursorContext";
import { ScrollProvider } from "@/context/ScrollContext";

import Header from "@/features/header/Header";
import Hero from "@/features/hero/Hero";
import SkillsMarquee from "@/features/skills/SkillsMarquee";
import ProjectsSection from "@/features/projects/ProjectsSection";
import EyeTrackerSection from "@/features/eye-tracker/EyeTrackerSection";
import ExperienceSection from "@/features/experience/ExperienceSection";
import ContactSection from "@/features/contact/ContactSection";
import Footer from "@/features/footer/Footer";
import MotionPathLayer from "@/features/background-motion/MotionPathLayer";

export default function App() {
  return (
    <ScrollProvider>
      <CursorProvider>
        <MotionPathLayer />
        <Header />
        <main className="relative">
          <Hero />
          <SkillsMarquee />
          <ProjectsSection />
          <EyeTrackerSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
        <Toaster theme="dark" position="top-center" richColors />
      </CursorProvider>
    </ScrollProvider>
  );
}