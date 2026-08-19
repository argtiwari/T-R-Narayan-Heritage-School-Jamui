import {
  BookOpen,
  Monitor,
  FlaskConical,
  Trophy,
  HeartHandshake,
  ShieldCheck,
  BusFront,
  type LucideIcon,
} from "lucide-react";

export type DiscoveryFeature = {
  title: string;
  benefit: string;
  icon: LucideIcon;
  tone: "gold" | "olive" | "blue";
};

export type DiscoveryChapter = {
  id: string;
  number: string;
  label: string;
  title: string;
  description: string;
  features: DiscoveryFeature[];
};

export const discoveryChapters: DiscoveryChapter[] = [
  {
    id: "foundation",
    number: "01",
    label: "FOUNDATION",
    title: "Strong beginnings shape everything.",
    description:
      "A strong academic foundation gives every child the confidence to learn, grow and move forward.",
    features: [
      { title: "CBSE CURRICULUM", benefit: "A structured academic foundation for confident learning.", icon: BookOpen, tone: "gold" },
      { title: "ENGLISH MEDIUM", benefit: "Communication that grows with every learning experience.", icon: BookOpen, tone: "olive" },
      { title: "FULLY AC CLASSROOMS", benefit: "Comfortable environments designed for meaningful learning.", icon: Monitor, tone: "blue" },
    ],
  },
  {
    id: "modern-learning",
    number: "02",
    label: "MODERN LEARNING",
    title: "Learning meets technology.",
    description:
      "We blend modern tools with meaningful learning to prepare students for a future full of possibilities.",
    features: [
      { title: "SMART CLASSES", benefit: "Technology-supported classroom learning.", icon: Monitor, tone: "gold" },
      { title: "DIGITAL LEARNING", benefit: "Learning experiences supported by digital tools.", icon: Monitor, tone: "blue" },
      { title: "STEM ACTIVITIES", benefit: "Experiment, explore and discover.", icon: FlaskConical, tone: "olive" },
      { title: "ACTIVITY BASED LEARNING", benefit: "Learning through practical experiences.", icon: FlaskConical, tone: "gold" },
    ],
  },
  {
    id: "discovery",
    number: "03",
    label: "DISCOVERY",
    title: "Questions become discoveries.",
    description: "Spaces to experiment, explore and turn curiosity into deeper understanding.",
    features: [
      { title: "SCIENCE LABS", benefit: "Experiment. Explore. Discover.", icon: FlaskConical, tone: "olive" },
      { title: "COMPUTER LAB", benefit: "Building confidence with technology.", icon: Monitor, tone: "blue" },
      { title: "LIBRARY", benefit: "A space for reading and independent learning.", icon: BookOpen, tone: "gold" },
      { title: "OLYMPIAD PREPARATION", benefit: "Encouraging curiosity beyond the classroom.", icon: Trophy, tone: "olive" },
    ],
  },
  {
    id: "beyond-academics",
    number: "04",
    label: "BEYOND ACADEMICS",
    title: "Growth beyond the classroom.",
    description: "Children discover confidence, creativity and teamwork through experiences beyond academics.",
    features: [
      { title: "SPORTS FACILITIES", benefit: "Building confidence through active participation.", icon: Trophy, tone: "gold" },
      { title: "MUSIC & DANCE", benefit: "Creative expression and joyful learning.", icon: Trophy, tone: "olive" },
      { title: "STUDENT ACTIVITIES", benefit: "Opportunities to participate, create and grow.", icon: HeartHandshake, tone: "blue" },
    ],
  },
  {
    id: "care-campus",
    number: "05",
    label: "CARE & CAMPUS",
    title: "Growing well means being cared for.",
    description: "A supportive environment where wellbeing and everyday care remain part of the learning journey.",
    features: [
      { title: "HOSTEL", benefit: "A supportive environment beyond school hours.", icon: HeartHandshake, tone: "olive" },
      { title: "MEDICAL SUPPORT", benefit: "Support when students need it.", icon: HeartHandshake, tone: "blue" },
      { title: "FEMALE ATTENDANT", benefit: "Care throughout the student journey.", icon: HeartHandshake, tone: "gold" },
    ],
  },
  {
    id: "safe-journeys",
    number: "06",
    label: "SAFE JOURNEYS",
    title: "Every journey deserves to feel safe.",
    description: "Thoughtful systems that help students travel, arrive and learn with greater peace of mind.",
    features: [
      { title: "GPS TRANSPORT", benefit: "Safer, trackable journeys.", icon: BusFront, tone: "blue" },
      { title: "CCTV CAMPUS", benefit: "Continuous campus oversight.", icon: ShieldCheck, tone: "olive" },
      { title: "SECURE ENTRY", benefit: "Thoughtful access and arrival systems.", icon: ShieldCheck, tone: "gold" },
    ],
  },
];
