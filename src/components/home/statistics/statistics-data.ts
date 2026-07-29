import type { LucideIcon } from "lucide-react";
import {
  BookOpenText,
  GraduationCap,
  School,
  BusFront,
} from "lucide-react";

export type StatisticId =
  | "academics"
  | "people"
  | "campus"
  | "transport";

export type StatisticItem = {
  id: StatisticId;
  index: string;
  category: string;

  value?: number;
  prefix?: string;
  suffix?: string;

  displayValue?: string;

  title: string;
  subtitle: string;
  description: string;

  highlights: string[];

  icon: LucideIcon;

  layout: "feature" | "portrait" | "compact" | "landscape";
};

export const statisticsData: StatisticItem[] = [
  {
    id: "academics",
    index: "01",
    category: "Academics",

    value: 100,
    suffix: "%",

    title: "CBSE Curriculum",
    subtitle: "A strong academic foundation",

    description:
      "A future-focused learning environment built around curiosity, communication and meaningful academic growth.",

    highlights: [
      "Smart Classrooms",
      "Digital Labs",
      "Activity-Based Learning",
      "English Communication",
      "STEM Learning",
    ],

    icon: BookOpenText,
    layout: "feature",
  },

  {
    id: "people",
    index: "02",
    category: "People",

    value: 1200,
    suffix: "+",

    title: "Students",
    subtitle: "A growing learning community",

    description:
      "Students learn with the guidance of experienced educators who encourage confidence, curiosity and personal growth.",

    highlights: [
      "1,200+ Students",
      "50+ Teachers",
      "35+ Staff Members",
      "Personal Attention",
      "Experienced Faculty",
      "Student-Centered Learning",
    ],

    icon: GraduationCap,
    layout: "portrait",
  },

  {
    id: "campus",
    index: "03",
    category: "Campus",

    value: 15,
    suffix: "+",

    title: "Years of Excellence",
    subtitle: "A place built for learning",

    description:
      "An established and evolving school environment designed for academic focus, exploration and everyday student life.",

    highlights: [
      "Library",
      "Sports Ground",
      "Computer Lab",
      "Science Lab",
      "Safe Campus",
      "Green Environment",
    ],

    icon: School,
    layout: "compact",
  },

  {
    id: "transport",
    index: "04",
    category: "Transport",

    displayValue: "School Transport",

    title: "Safe Journeys, Every Day",
    subtitle: "Dependable school transportation",

    description:
      "A dependable transport system designed around the safety, comfort and convenience of every child.",

    highlights: [
      "Safe Pickup & Drop",
      "Multiple Routes",
      "GPS Ready",
      "Professional Drivers",
      "Student Safety",
    ],

    icon: BusFront,
    layout: "landscape",
  },
];