import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Monitor,
  FlaskConical,
  Trophy,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

export type ParentDiscoveryItem = {
  label: string;
  benefit: string;
  image?: string;
  icon: LucideIcon;
};

export type ParentDiscoveryChapter = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  items: ParentDiscoveryItem[];
};

export const parentDiscoveryChapters: ParentDiscoveryChapter[] = [
  {
    id: "foundation",
    number: "01",
    eyebrow: "FOUNDATION",
    title: "Strong beginnings shape everything.",
    description:
      "A strong academic foundation gives every child the confidence to learn, grow and move forward.",
    items: [
      {
        label: "CBSE AFFILIATED",
        benefit: "A structured academic foundation for confident learning.",
        icon: BookOpen,
        image: "/images/parent-discovery/cbse.webp",
      },
      {
        label: "ENGLISH MEDIUM",
        benefit: "Communication skills that grow with every learning experience.",
        icon: BookOpen,
        image: "/images/parent-discovery/english-medium.webp",
      },
      {
        label: "FULLY AC CLASSROOMS",
        benefit: "A comfortable environment designed around meaningful learning.",
        icon: BookOpen,
        image: "/images/parent-discovery/ac-classroom.webp",
      },
    ],
  },

  {
    id: "modern-learning",
    number: "02",
    eyebrow: "MODERN LEARNING",
    title: "Learning meets technology.",
    description:
      "We blend modern tools with meaningful learning to prepare students for a future full of possibilities.",
    items: [
      {
        label: "SMART CLASSES",
        benefit: "Visual and interactive tools make classroom learning more engaging.",
        icon: Monitor,
        image: "/images/parent-discovery/smart-class.webp",
      },
      {
        label: "DIGITAL LEARNING",
        benefit: "Students experience technology as part of everyday learning.",
        icon: Monitor,
        image: "/images/parent-discovery/digital-learning.webp",
      },
      {
        label: "STEM ACTIVITIES",
        benefit: "Hands-on exploration turns curiosity into practical understanding.",
        icon: FlaskConical,
        image: "/images/parent-discovery/stem.webp",
      },
      {
        label: "ACTIVITY BASED LEARNING",
        benefit: "Children learn by doing, creating, questioning and discovering.",
        icon: FlaskConical,
        image: "/images/parent-discovery/activity-learning.webp",
      },
    ],
  },

  {
    id: "discovery",
    number: "03",
    eyebrow: "DISCOVERY",
    title: "Questions become discoveries.",
    description:
      "Spaces to experiment, explore and turn curiosity into deeper understanding.",
    items: [
      {
        label: "SCIENCE LABS",
        benefit: "Experimentation helps children understand ideas beyond the textbook.",
        icon: FlaskConical,
        image: "/images/parent-discovery/science-lab.webp",
      },
      {
        label: "COMPUTER LAB",
        benefit: "Technology becomes a tool for exploration and creation.",
        icon: Monitor,
        image: "/images/parent-discovery/computer-lab.webp",
      },
      {
        label: "LIBRARY",
        benefit: "A quiet space where curiosity can turn into a lifelong habit of reading.",
        icon: BookOpen,
        image: "/images/parent-discovery/library.webp",
      },
    ],
  },

  {
    id: "beyond-academics",
    number: "04",
    eyebrow: "BEYOND ACADEMICS",
    title: "Growth beyond the classroom.",
    description:
      "Children discover confidence, creativity and teamwork through experiences beyond academics.",
    items: [
      {
        label: "SPORTS",
        benefit: "Teamwork, discipline and confidence grow through participation.",
        icon: Trophy,
        image: "/images/parent-discovery/sports.webp",
      },
      {
        label: "MUSIC & DANCE",
        benefit: "Creative expression gives every child room to find their voice.",
        icon: Trophy,
        image: "/images/parent-discovery/music-dance.webp",
      },
      {
        label: "ACTIVITIES",
        benefit: "Experiences outside academics help children become more confident.",
        icon: Trophy,
        image: "/images/parent-discovery/activities.webp",
      },
    ],
  },

  {
    id: "care-campus",
    number: "05",
    eyebrow: "CARE & CAMPUS",
    title: "Growing well means being cared for.",
    description:
      "A supportive environment where wellbeing and everyday care remain part of the learning journey.",
    items: [
      {
        label: "HOSTEL",
        benefit: "A supportive residential environment for students who need it.",
        icon: HeartHandshake,
        image: "/images/parent-discovery/hostel.webp",
      },
      {
        label: "MEDICAL SUPPORT",
        benefit: "Student wellbeing remains an important part of school life.",
        icon: HeartHandshake,
        image: "/images/parent-discovery/medical-support.webp",
      },
      {
        label: "FEMALE ATTENDANT",
        benefit: "Additional everyday support where students need care and guidance.",
        icon: HeartHandshake,
        image: "/images/parent-discovery/female-attendant.webp",
      },
    ],
  },

  {
    id: "safe-journeys",
    number: "06",
    eyebrow: "SAFE JOURNEYS",
    title: "Every journey deserves to feel safe.",
    description:
      "Thoughtful systems that help students travel, arrive and learn with greater peace of mind.",
    items: [
      {
        label: "GPS TRANSPORT",
        benefit: "Better visibility and confidence around student transportation.",
        icon: ShieldCheck,
        image: "/images/parent-discovery/gps-transport.webp",
      },
      {
        label: "CCTV",
        benefit: "Security systems help create a more monitored environment.",
        icon: ShieldCheck,
        image: "/images/parent-discovery/cctv.webp",
      },
      {
        label: "SECURE ENTRY",
        benefit: "Controlled access helps keep the campus environment secure.",
        icon: ShieldCheck,
        image: "/images/parent-discovery/secure-entry.webp",
      },
    ],
  },
];