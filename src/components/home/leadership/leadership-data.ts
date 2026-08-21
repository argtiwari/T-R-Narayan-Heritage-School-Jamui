import type { LucideIcon } from "lucide-react";
import {
  Eye,
  Gem,
  Users,
  TrendingUp,
  Lightbulb,
  BookOpen,
  GraduationCap,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export type LeadershipPoint = {
  label: string;
  icon: LucideIcon;
};

export type LeadershipPerson = {
  id: "chairman" | "director" | "principal" | "coordinator";
  name: string;
  designation: string;
  eyebrow: string;
  description: string;
  image: string;
  accent: "gold" | "olive";
  points: LeadershipPoint[];
};

export const leadershipPeople: LeadershipPerson[] = [
  {
    id: "chairman",
    name: "CHAIRMAN",
    designation: "Vision & Values",
    eyebrow: "VISION • VALUES • LEGACY",
    description:
      "Guiding the institution with wisdom, strong principles and a long-term commitment to building a brighter future for every child.",
    image: "/images/leadership/chairman.jpg",
    accent: "gold",
    points: [
      {
        label: "Vision",
        icon: Eye,
      },
      {
        label: "Values",
        icon: Gem,
      },
      {
        label: "Legacy",
        icon: Users,
      },
    ],
  },

  {
    id: "director",
    name: "DIRECTOR",
    designation: "Growth & Direction",
    eyebrow: "GROWTH • DEVELOPMENT • INNOVATION",
    description:
      "Driving academic excellence through thoughtful planning, innovation and continuous institutional growth.",
    image: "/images/leadership/Director.jpg",
    accent: "olive",
    points: [
      {
        label: "Growth",
        icon: TrendingUp,
      },
      {
        label: "Development",
        icon: Lightbulb,
      },
      {
        label: "Innovation",
        icon: Sparkles,
      },
    ],
  },

  {
    id: "principal",
    name: "PRINCIPAL",
    designation: "Academic Leadership",
    eyebrow: "LEARNING • DISCIPLINE • STUDENT GROWTH",
    description:
      "Guiding learning, discipline and student development while creating a nurturing environment where every child can learn and excel.",
    image: "/images/leadership/principal.jpg",
    accent: "gold",
    points: [
      {
        label: "Learning",
        icon: BookOpen,
      },
      {
        label: "Discipline",
        icon: GraduationCap,
      },
      {
        label: "Growth",
        icon: TrendingUp,
      },
    ],
  },

  {
    id: "coordinator",
    name: "COORDINATOR",
    designation: "Student Experience",
    eyebrow: "ACTIVITIES • COMMUNICATION • STUDENT EXPERIENCE",
    description:
      "Connecting students, activities and opportunities to create a vibrant, supportive and enriching school experience.",
    image: "/images/leadership/coordinator.jpg",
    accent: "olive",
    points: [
      {
        label: "Activities",
        icon: Users,
      },
      {
        label: "Communication",
        icon: MessageCircle,
      },
      {
        label: "Experience",
        icon: Eye,
      },
    ],
  },
];

export const chairman = leadershipPeople[0];
export const director = leadershipPeople[1];
export const principal = leadershipPeople[2];
export const coordinator = leadershipPeople[3];