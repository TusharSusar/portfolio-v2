import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import ContactForm from "./ContactForm";
import SectionLabel from "@/components/ui/SectionLabel";
import { profile } from "@/data/portfolio.config";
import DotGridBackground from "../hero/DotGridBackground";

export default function ContactSection() {
  return (
    <section id="contact" className="relative z-10 px-6 py-32">
      <DotGridBackground />
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <SectionLabel eyebrow="Get in Touch" title="Let's build something great." />
          <p className="text-muted-foreground mb-8 leading-relaxed -mt-10">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>

          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${profile.contact.email}`}
              className="flex items-center gap-3 text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              <Mail size={18} className="text-primary" /> {profile.contact.email}
            </a>
            {/* <span className="flex items-center gap-3 text-sm text-foreground/80">
              <Phone size={18} className="text-primary" /> {profile.contact.phone}
            </span> */}
            <span className="flex items-center gap-3 text-sm text-foreground/80">
              <MapPin size={18} className="text-primary" /> {profile.contact.location}
            </span>
          </div>

          <div className="flex gap-4 mt-8">
            <a
              href={profile.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-md border border-primary-dim/30 hover:border-primary hover:text-primary transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-md border border-primary-dim/30 hover:border-primary hover:text-primary transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="bg-surface border border-primary-dim/20 rounded-md p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}