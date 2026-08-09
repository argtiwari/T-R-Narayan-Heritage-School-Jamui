import {
  MonitorUp,
  TabletSmartphone,
  Atom,
  Palette,
  type LucideIcon,
} from "lucide-react";

export type LearningItem = {
  id: string;
  label: string;
  benefit: string;
  image: string;
  alt: string;
  icon: LucideIcon;
  rotation: string;
};

export const learningData: LearningItem[] = [
  {
    id: "smart-classes",
    label: "SMART CLASSES",
    benefit: "Interactive classrooms that make learning engaging.",
    image: "/images/learning/smart-classes.webp",
    alt: "Students learning in a smart classroom",
    icon: MonitorUp,
    rotation: "-4deg",
  },
  {
    id: "digital-learning",
    label: "DIGITAL LEARNING",
    benefit: "Technology-supported learning for a connected future.",
    image: "/images/learning/digital-learning.webp",
    alt: "Student using digital learning technology",
    icon: TabletSmartphone,
    rotation: "3deg",
  },
  {
    id: "stem",
    label: "STEM ACTIVITIES",
    benefit: "Hands-on exploration that builds curiosity and problem solving.",
    image: "/images/learning/stem-activities.webp",
    alt: "Students working on a STEM activity",
    icon: Atom,
    rotation: "-3deg",
  },
  {
    id: "activity",
    label: "ACTIVITY BASED LEARNING",
    benefit: "Creative experiences that turn ideas into understanding.",
    image: "/images/learning/activity-learning.webp",
    alt: "Students participating in an activity based learning session",
    icon: Palette,
    rotation: "4deg",
  },
];