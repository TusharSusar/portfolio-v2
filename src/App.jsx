import { Toaster } from "sonner";
import { CursorProvider } from "@/context/CursorContext";
import { ScrollProvider } from "@/context/ScrollContext";

import { lazy, Suspense } from "react";

import Header from "@/features/header/Header";
import Hero from "@/features/hero/Hero";
import Footer from "@/features/footer/Footer";
import Loader from "./components/ui/loader";

const ScrollProgress = lazy(() =>
  import("./components/ui/horizantal-scrollbar")
);
// Load below-the-fold / heavier sections lazily
const SkillsMarquee = lazy(() =>
  import("@/features/skills/SkillsMarquee")
);
const ProjectsSection = lazy(() =>
  import("@/features/projects/ProjectsSection")
);
const EyeTrackerSection = lazy(() =>
  import("@/features/eye-tracker/EyeTrackerSection")
);
const ExperienceSection = lazy(() =>
  import("@/features/experience/ExperienceSection")
);
const ContactSection = lazy(() =>
  import("@/features/contact/ContactSection")
);
const MotionPathLayer = lazy(() =>
  import("@/features/background-motion/MotionPathLayer")
);
// import CustomCursor from "./components/ui/custom-cursor";

export default function App() {
  return (
    <ScrollProvider>
      <CursorProvider>
        <Suspense fallback={<Loader />}>
          <MotionPathLayer />
        </Suspense>
        {/* <CustomCursor /> */}
        <ScrollProgress />
        <Header />
        <main className="relative">
          <Hero />
          <Suspense fallback={<Loader />}>
            <SkillsMarquee />
            <ProjectsSection />
            <EyeTrackerSection />
            <ExperienceSection />
            <ContactSection />
          </Suspense>
        </main>
        <Footer />
        <Toaster
          theme="dark"
          position="bottom-right"
          richColors
        />
      </CursorProvider>
    </ScrollProvider>
  );
}