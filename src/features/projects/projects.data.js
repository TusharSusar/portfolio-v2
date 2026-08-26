// ⚠️ Add real image files inside: src/assets/
// Schema is stable — just append new objects to this array as projects come in.

import fencetrack from "@/assets/FenctrackOutput.png";
import cognito from "@/assets/cognito.png";
import whatsappClone from "@/assets/whatsapp-clone.png";

export const projects = [
  {
    id: 1,
    slug: "fencetrack-gps-tracking",
    title: "FenceTrack: Smart GPS Tracking",
    year: 2024,
    category: "Web App",
    featured: true,
    description:
      "Real-time GPS tracking dashboard with geofencing capabilities. Track multiple assets on interactive maps with historical data analytics and alert systems.",
    image: fencetrack,
    tech: ["React", "Tailwind CSS", "Google Maps API", "React Router"],
    links: {
      github: "https://github.com/RohitSharma/Fenctrack-Geofencing",
      demo: "https://fencetrack.netlify.app/",
    },
    highlights: [
      "Real-time GPS tracking on interactive maps",
      "Geofencing with instant alert triggers",
      "Historical data visualization & analytics",
      "Multi-device responsive support",
    ],
  },
  {
    id: 2,
    slug: "cognito-ai-quiz",
    title: "Cognito — AI Quiz Platform",
    year: 2024,
    category: "AI / Web App",
    featured: true,
    description:
      "Intelligent quiz generation platform powered by Gemini AI. Users can create customized quizzes instantly, with secure authentication and real-time data handling.",
    image: cognito,
    tech: ["React", "Firebase", "Tailwind CSS", "Gemini API"],
    links: {
      github: "https://github.com/RohitSharma/cognito",
      demo: "https://cognito-xi.netlify.app/",
    },
    highlights: [
      "AI-powered question & answer generation",
      "Firebase authentication & real-time database",
      "Performance optimization with lazy loading",
    ],
  },
  {
    id: 3,
    slug: "whatsapp-clone",
    title: "WhatsApp Clone",
    year: 2023,
    category: "Real-time Messaging",
    featured: false,
    description:
      "Full-featured messaging application with real-time chat, media sharing, and live presence indicators. Built with modern React hooks and Firebase's real-time database.",
    image: whatsappClone,
    tech: ["React", "Firebase", "Tailwind CSS", "Redux"],
    links: {
      github: "https://github.com/RohitSharma/whatsapp-clone",
      demo: "https://web-whaatsappp.netlify.app/",
    },
    highlights: [
      "Real-time messaging via Firestore",
      "Full authentication system",
      "Media file sharing support",
      "Live online/offline status indicators",
    ],
  },

  // 🔜 append future projects here — same shape
];