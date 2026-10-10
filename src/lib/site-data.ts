import hala from "@/assets/project-hala.jpg";
import prep from "@/assets/project-prep100.jpg";
import backlot from "@/assets/project-backlot.jpg";
import hero from "@/assets/hero-devices.jpg";

export const CONTACT = {
  email: "subrahmanyamkolipakula@gmail.com",
  phoneDisplay: "+91 7670815170",
  phoneTel: "+917670815170",
  whatsapp: "917670815170",
};

export const waLink = (text: string) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
export const mailLink = (subject: string, body = "") =>
  `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export type ProjectType =
  "Personal project" | "Experimental project" | "Client project" | "Agency project";

export interface Project {
  title: string;
  category: string;
  type: ProjectType;
  image: string;
  imageNote: string;
  description: string;
  tech: string[];
  demonstrates: string;
  liveUrl?: string;
  caseStudyUrl?: string;
}

// Only add liveUrl / caseStudyUrl when a real, public link exists.
export const PROJECTS: Project[] = [
  {
    title: "HALA",
    category: "AI-Powered Agriculture Platform",
    type: "Personal project",
    image: hala,
    imageNote: "Representative concept mockup",
    description:
      "An agriculture-focused AI concept combining voice-based assistance, computer vision, weather and market information, and AI-powered guidance.",
    tech: ["Voice assistance", "Computer vision", "Weather & market data", "AI guidance"],
    demonstrates: "Bringing several AI capabilities together into one practical assistant.",
  },
  {
    title: "Prep100",
    category: "AI Learning Platform",
    type: "Personal project",
    image: prep,
    imageNote: "Representative concept mockup",
    description:
      "An educational platform concept featuring AI-assisted learning, quizzes, mock tests, progress tracking, and analytics.",
    tech: ["AI-assisted learning", "Quizzes & mock tests", "Progress analytics"],
    demonstrates: "Designing data-driven dashboards and learner-focused product flows.",
  },
  {
    title: "BACKLOT",
    category: "R&D Proposal Evaluation Platform",
    type: "Experimental project",
    image: backlot,
    imageNote: "Representative concept mockup",
    description:
      "A technical platform involving evidence traceability, dependency analysis, knowledge retrieval, and observability.",
    tech: ["Evidence traceability", "Dependency analysis", "Knowledge retrieval", "Observability"],
    demonstrates: "Structuring complex technical information so decisions are traceable.",
  },
  {
    title: "Gupta's Agency Website",
    category: "Agency Website",
    type: "Agency project",
    image: hero,
    imageNote: "Illustrative design visual",
    description:
      "The website you're on now — an editorial, responsive site with restrained motion and honest, trust-first content.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demonstrates: "Responsive design, accessibility, and conversion-focused structure.",
  },
];

// Add verified figures here once available; leave empty to show commitments only.
export const VERIFIED_METRICS: { value: string; label: string }[] = [];
