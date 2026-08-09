// src/components/home/statistics/discovery/discovery-data.ts

export type DiscoveryChapterId =
  | "foundation"
  | "modern-learning"
  | "student-development"
  | "safety-care"
  | "achievement";

export type DiscoveryMilestone = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  benefit: string;
};

export type DiscoveryChapter = {
  id: DiscoveryChapterId;
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  milestones: DiscoveryMilestone[];

  /**
   * Real school photography will be connected later.
   * Keep this optional so the UI does not depend on
   * placeholder/stock imagery.
   */
  image?: string;
  imageAlt?: string;
};

/* =========================================================
   01 — FOUNDATION
========================================================= */

const foundationMilestones: DiscoveryMilestone[] = [
  {
    id: "cbse-affiliated",
    number: "01",
    eyebrow: "Academic Foundation",
    title: "CBSE Affiliated",
    benefit:
      "A structured national curriculum designed for consistent academic growth.",
  },
  {
    id: "english-medium",
    number: "02",
    eyebrow: "Communication",
    title: "English Medium",
    benefit:
      "Building confident communication alongside strong everyday learning.",
  },
  {
    id: "air-conditioned-classrooms",
    number: "03",
    eyebrow: "Learning Environment",
    title: "Air-Conditioned Classrooms",
    benefit:
      "Comfortable learning spaces designed to help students stay focused.",
  },
];

/* =========================================================
   02 — MODERN LEARNING
========================================================= */

const modernLearningMilestones: DiscoveryMilestone[] = [
  {
    id: "smart-classrooms",
    number: "04",
    eyebrow: "Interactive Learning",
    title: "Smart Classrooms",
    benefit:
      "Technology-supported classrooms that make everyday lessons more engaging.",
  },
  {
    id: "digital-learning",
    number: "05",
    eyebrow: "Digital Education",
    title: "Digital Learning",
    benefit:
      "Modern learning tools that extend understanding beyond traditional textbooks.",
  },
  {
    id: "stem-activities",
    number: "06",
    eyebrow: "Future Skills",
    title: "STEM Activities",
    benefit:
      "Hands-on experiences that encourage curiosity, reasoning and problem-solving.",
  },
  {
    id: "science-laboratories",
    number: "07",
    eyebrow: "Experiment & Discover",
    title: "Science Laboratories",
    benefit:
      "Dedicated spaces where concepts become clearer through observation and experimentation.",
  },
  {
    id: "computer-lab",
    number: "08",
    eyebrow: "Technology",
    title: "Computer Lab",
    benefit:
      "Practical digital exposure that helps students build confidence with technology.",
  },
  {
    id: "library",
    number: "09",
    eyebrow: "Knowledge",
    title: "Library",
    benefit:
      "A dedicated environment for reading, independent learning and discovery.",
  },
];

/* =========================================================
   03 — STUDENT DEVELOPMENT
========================================================= */

const studentDevelopmentMilestones: DiscoveryMilestone[] = [
  {
    id: "sports-facilities",
    number: "10",
    eyebrow: "Physical Development",
    title: "Sports Facilities",
    benefit:
      "Opportunities for movement, teamwork, discipline and healthy competition.",
  },
  {
    id: "music-dance",
    number: "11",
    eyebrow: "Creative Expression",
    title: "Music & Dance",
    benefit:
      "Creative opportunities that encourage confidence, expression and participation.",
  },
  {
    id: "hostel-facility",
    number: "12",
    eyebrow: "Residential Support",
    title: "Hostel Facility",
    benefit:
      "A structured residential environment supporting students beyond classroom hours.",
  },
];

/* =========================================================
   04 — SAFETY & CARE
========================================================= */

const safetyCareMilestones: DiscoveryMilestone[] = [
  {
    id: "gps-school-transport",
    number: "13",
    eyebrow: "Safer Journeys",
    title: "GPS-Enabled School Transport",
    benefit:
      "Technology-supported transport designed to provide greater reassurance during school journeys.",
  },
  {
    id: "cctv-campus",
    number: "14",
    eyebrow: "Campus Oversight",
    title: "CCTV Campus",
    benefit:
      "Continuous campus monitoring supporting a safer school environment.",
  },
  {
    id: "female-attendant",
    number: "15",
    eyebrow: "Student Care",
    title: "Female Attendant",
    benefit:
      "Additional care and assistance for students during their daily school experience.",
  },
  {
    id: "secure-entry",
    number: "16",
    eyebrow: "Campus Security",
    title: "Secure Entry",
    benefit:
      "Controlled access designed to help maintain a protected learning environment.",
  },
  {
    id: "medical-support",
    number: "17",
    eyebrow: "Wellbeing",
    title: "Medical Support",
    benefit:
      "Basic support and timely assistance when students need care during school hours.",
  },
];

/* =========================================================
   05 — ACHIEVEMENT
========================================================= */

const achievementMilestones: DiscoveryMilestone[] = [
  {
    id: "olympiad-preparation",
    number: "18",
    eyebrow: "Beyond The Classroom",
    title: "Olympiad Preparation",
    benefit:
      "Opportunities that encourage students to challenge themselves beyond everyday academics.",
  },
];

/* =========================================================
   DISCOVERY CHAPTERS

   IMPORTANT:
   These chapters control the STORY, not a visible card grid.
========================================================= */

export const discoveryChapters: DiscoveryChapter[] = [
  {
    id: "foundation",
    number: "01",
    eyebrow: "Foundation",
    title: "Strong beginnings shape everything that follows.",
    description:
      "A trusted academic foundation supported by communication, structure and a comfortable learning environment.",
    milestones: foundationMilestones,

    // Later:
    // image: "/images/discovery/foundation-classroom.webp",
    // imageAlt: "Students learning inside a TR Narayan Heritage School classroom",
  },

  {
    id: "modern-learning",
    number: "02",
    eyebrow: "Modern Learning",
    title: "Learning designed for the world students are growing into.",
    description:
      "Technology, experimentation and curiosity come together to make learning more meaningful.",
    milestones: modernLearningMilestones,

    // Later:
    // image: "/images/discovery/smart-learning.webp",
    // imageAlt: "Digital learning at TR Narayan Heritage School",
  },

  {
    id: "student-development",
    number: "03",
    eyebrow: "Development",
    title: "Education extends far beyond academics.",
    description:
      "Sports, creativity and student experiences help build confidence, discipline and individuality.",
    milestones: studentDevelopmentMilestones,

    // Later:
    // image: "/images/discovery/student-life.webp",
    // imageAlt: "Student activities at TR Narayan Heritage School",
  },

  {
    id: "safety-care",
    number: "04",
    eyebrow: "Safety & Care",
    title: "Because parents should feel reassured too.",
    description:
      "Thoughtful systems support student safety, wellbeing and everyday care across the campus and school journey.",
    milestones: safetyCareMilestones,

    // Later:
    // image: "/images/discovery/safety-transport.webp",
    // imageAlt: "School transport and campus safety at TR Narayan Heritage School",
  },

  {
    id: "achievement",
    number: "05",
    eyebrow: "Achievement",
    title: "Preparing students to reach beyond the expected.",
    description:
      "Opportunities beyond regular academics encourage ambition, confidence and continued growth.",
    milestones: achievementMilestones,

    // Later:
    // image: "/images/discovery/achievement.webp",
    // imageAlt: "Student achievement at TR Narayan Heritage School",
  },
];

/* =========================================================
   SECTION COPY
========================================================= */

export const discoveryIntro = {
  eyebrow: "Discover TR Narayan",

  title: "Everything parents expect.",

  highlightedTitle: "Everything students deserve.",

  description:
    "From strong academics and modern learning to student safety, creativity and care — discover the environment we have built around every child.",
};

/* =========================================================
   DISCOVERY → STATISTICS HANDOFF
========================================================= */

export const discoveryPromise = {
  lineOne: "Every promise...",
  lineTwo: "Backed by real achievements.",
};

/* =========================================================
   STATISTICS / PROOF

   IMPORTANT:
   Replace values here if the school's verified numbers change.
========================================================= */

export type SchoolStatistic = {
  id: string;
  value: number;
  suffix?: string;
  label: string;
  supportingText: string;
};

export const schoolStatistics: SchoolStatistic[] = [
  {
    id: "students",
    value: 1200,
    suffix: "+",
    label: "Students",
    supportingText: "Growing together",
  },
  {
    id: "faculty",
    value: 50,
    suffix: "+",
    label: "Faculty",
    supportingText: "Guiding every learner",
  },
  {
    id: "years",
    value: 15,
    suffix: "+",
    label: "Years",
    supportingText: "A growing legacy",
  },
  {
    id: "cbse",
    value: 100,
    suffix: "%",
    label: "CBSE Curriculum",
    supportingText: "Structured academic foundation",
  },
];