import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Monitor,
  FlaskConical,
  Trophy,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

export type DiscoveryMilestone = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  benefit: string;
  icon: LucideIcon;
  image?: string;
  imageAlt?: string;
};

export type DiscoveryChapter = {
  id: string;
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  emotionalLine: string;
  theme: {
    accent: string;
    accentSoft: string;
    gold: string;
  };
  milestones: DiscoveryMilestone[];
};

/**
 * Parent Discovery Experience
 *
 * The website is not presenting a list of facilities.
 * Each chapter is a small story.
 *
 * The master GSAP timeline will later control
 * the progression between these chapters.
 */

export const discoveryChapters: DiscoveryChapter[] = [
  // =====================================================
  // 01 — FOUNDATION
  // =====================================================

  {
    id: "foundation",
    number: "01",
    eyebrow: "Foundation",
    title: "Strong beginnings shape everything that follows.",
    description:
      "A trusted academic foundation supported by communication, structure and a comfortable learning environment.",
    emotionalLine: "Learning begins with trust.",

    theme: {
      accent: "#647F43",
      accentSoft: "#EAF1E4",
      gold: "#C7B45A",
    },

    milestones: [
      {
        id: "cbse",
        number: "01",
        eyebrow: "Academic Foundation",
        title: "CBSE Affiliated",
        shortTitle: "CBSE",
        description:
          "A structured national curriculum designed for consistent academic growth.",
        benefit:
          "Strong conceptual learning with a clear academic foundation.",
        icon: BookOpen,
      },

      {
        id: "english-medium",
        number: "02",
        eyebrow: "Communication",
        title: "English Medium",
        shortTitle: "English",
        description:
          "A learning environment that builds confidence through everyday communication.",
        benefit:
          "Helping students communicate clearly and grow with confidence.",
        icon: Monitor,
      },

      {
        id: "fully-ac",
        number: "03",
        eyebrow: "Learning Environment",
        title: "Fully AC Classrooms",
        shortTitle: "AC Classrooms",
        description:
          "Comfortable classrooms designed to help students stay focused throughout the learning day.",
        benefit:
          "A comfortable environment that supports concentration and better learning.",
        icon: HeartHandshake,
      },
    ],
  },

  // =====================================================
  // 02 — MODERN LEARNING
  // =====================================================

  {
    id: "modern-learning",
    number: "02",
    eyebrow: "Modern Learning",
    title: "Learning becomes richer when curiosity meets technology.",
    description:
      "Technology, experimentation and activity-based learning come together to make concepts more engaging.",
    emotionalLine: "Curiosity grows through exploration.",

    theme: {
      accent: "#607D5A",
      accentSoft: "#E8F0E4",
      gold: "#C8B85F",
    },

    milestones: [
      {
        id: "smart-classrooms",
        number: "01",
        eyebrow: "Technology",
        title: "Smart Classrooms",
        shortTitle: "Smart Classes",
        description:
          "Technology-enabled classrooms that make everyday lessons more interactive.",
        benefit:
          "Visual and interactive learning helps students understand concepts better.",
        icon: Monitor,
      },

      {
        id: "digital-learning",
        number: "02",
        eyebrow: "Digital Learning",
        title: "Digital Learning",
        shortTitle: "Digital",
        description:
          "Digital resources that complement classroom teaching and support modern learning.",
        benefit:
          "Students learn through multiple ways of seeing, exploring and understanding.",
        icon: Monitor,
      },

      {
        id: "stem",
        number: "03",
        eyebrow: "Innovation",
        title: "STEM Activities",
        shortTitle: "STEM",
        description:
          "Hands-on activities that encourage students to question, experiment and solve problems.",
        benefit:
          "Building curiosity, reasoning and practical problem-solving skills.",
        icon: FlaskConical,
      },

      {
        id: "activity-learning",
        number: "04",
        eyebrow: "Learning by Doing",
        title: "Activity Based Learning",
        shortTitle: "Activities",
        description:
          "Learning experiences that move beyond passive listening and encourage participation.",
        benefit:
          "Students engage with ideas instead of simply memorising them.",
        icon: BookOpen,
      },
    ],
  },

  // =====================================================
  // 03 — DISCOVERY
  // =====================================================

  {
    id: "discovery",
    number: "03",
    eyebrow: "Discovery",
    title: "Every question deserves a place to grow.",
    description:
      "Spaces and opportunities that encourage students to investigate, practise and discover beyond the textbook.",
    emotionalLine: "Questions become discoveries.",

    theme: {
      accent: "#6D815B",
      accentSoft: "#EBF0E5",
      gold: "#C8B65B",
    },

    milestones: [
      {
        id: "science-labs",
        number: "01",
        eyebrow: "Experiment",
        title: "Science Laboratories",
        shortTitle: "Science Labs",
        description:
          "Dedicated spaces where students can connect classroom concepts with practical exploration.",
        benefit:
          "Learning becomes something students can see, test and experience.",
        icon: FlaskConical,
      },

      {
        id: "computer-lab",
        number: "02",
        eyebrow: "Technology",
        title: "Computer Lab",
        shortTitle: "Computer Lab",
        description:
          "A dedicated technology learning space for building digital familiarity and skills.",
        benefit:
          "Preparing students for a world shaped by technology.",
        icon: Monitor,
      },

      {
        id: "library",
        number: "03",
        eyebrow: "Knowledge",
        title: "Library",
        shortTitle: "Library",
        description:
          "A space that encourages reading, exploration and independent learning.",
        benefit:
          "Giving students room to discover knowledge at their own pace.",
        icon: BookOpen,
      },

      {
        id: "olympiads",
        number: "04",
        eyebrow: "Challenge",
        title: "Olympiad Preparation",
        shortTitle: "Olympiads",
        description:
          "Opportunities that encourage students to challenge themselves beyond regular academics.",
        benefit:
          "Building confidence through healthy academic challenges.",
        icon: Trophy,
      },
    ],
  },

  // =====================================================
  // 04 — BEYOND ACADEMICS
  // =====================================================

  {
    id: "beyond-academics",
    number: "04",
    eyebrow: "Beyond Academics",
    title: "Confidence is built beyond textbooks.",
    description:
      "A balanced school experience gives children space to move, create, perform and discover their interests.",
    emotionalLine: "Growth happens in many forms.",

    theme: {
      accent: "#6B8057",
      accentSoft: "#EAF0E5",
      gold: "#C7B35A",
    },

    milestones: [
      {
        id: "sports",
        number: "01",
        eyebrow: "Physical Development",
        title: "Sports Facilities",
        shortTitle: "Sports",
        description:
          "Opportunities for physical activity, participation and teamwork.",
        benefit:
          "Encouraging discipline, confidence and a healthy active lifestyle.",
        icon: Trophy,
      },

      {
        id: "music-dance",
        number: "02",
        eyebrow: "Creative Expression",
        title: "Music & Dance",
        shortTitle: "Music & Dance",
        description:
          "Creative activities that give students space to express themselves.",
        benefit:
          "Helping children build confidence through creativity and performance.",
        icon: HeartHandshake,
      },

      {
        id: "activities",
        number: "03",
        eyebrow: "Student Life",
        title: "Student Activities",
        shortTitle: "Activities",
        description:
          "Experiences beyond routine classroom learning that encourage participation.",
        benefit:
          "Developing communication, teamwork and confidence.",
        icon: HeartHandshake,
      },
    ],
  },

  // =====================================================
  // 05 — CARE & CAMPUS
  // =====================================================

  {
    id: "care-campus",
    number: "05",
    eyebrow: "Care & Campus",
    title: "Every child deserves to feel cared for.",
    description:
      "A supportive campus experience that considers student wellbeing alongside learning and achievement.",
    emotionalLine: "Care creates confidence.",

    theme: {
      accent: "#66805B",
      accentSoft: "#EAF0E5",
      gold: "#C8B65D",
    },

    milestones: [
      {
        id: "hostel",
        number: "01",
        eyebrow: "Campus Life",
        title: "Hostel Facility",
        shortTitle: "Hostel",
        description:
          "A residential option designed to support students who need an on-campus living environment.",
        benefit:
          "A structured environment that supports learning and daily routines.",
        icon: HeartHandshake,
      },

      {
        id: "medical-support",
        number: "02",
        eyebrow: "Wellbeing",
        title: "Medical Support",
        shortTitle: "Medical",
        description:
          "Support for student wellbeing when health needs arise during the school day.",
        benefit:
          "Parents can feel reassured that student wellbeing is taken seriously.",
        icon: HeartHandshake,
      },

      {
        id: "female-attendant",
        number: "03",
        eyebrow: "Student Care",
        title: "Female Attendant",
        shortTitle: "Female Attendant",
        description:
          "Dedicated support that contributes to a more comfortable environment for students.",
        benefit:
          "An additional layer of care within the school environment.",
        icon: HeartHandshake,
      },
    ],
  },

  // =====================================================
  // 06 — SAFE JOURNEYS
  // =====================================================

  {
    id: "safe-journeys",
    number: "06",
    eyebrow: "Safe Journeys",
    title: "Peace of mind begins before the first bell.",
    description:
      "Safety and transport systems designed to help students move through their school day with greater confidence.",
    emotionalLine: "Every journey matters.",

    theme: {
      accent: "#617C58",
      accentSoft: "#E8F0E5",
      gold: "#C7B45B",
    },

    milestones: [
      {
        id: "gps-transport",
        number: "01",
        eyebrow: "Transport",
        title: "GPS School Transport",
        shortTitle: "GPS Transport",
        description:
          "GPS-enabled school transport designed to provide greater visibility around student journeys.",
        benefit:
          "Helping parents stay informed about school transportation.",
        icon: ShieldCheck,
      },

      {
        id: "cctv",
        number: "02",
        eyebrow: "Campus Safety",
        title: "CCTV Campus",
        shortTitle: "CCTV",
        description:
          "Campus surveillance that supports a more secure school environment.",
        benefit:
          "An added layer of awareness across the campus.",
        icon: ShieldCheck,
      },

      {
        id: "secure-entry",
        number: "03",
        eyebrow: "Security",
        title: "Secure Entry",
        shortTitle: "Secure Entry",
        description:
          "Controlled entry practices designed with campus safety in mind.",
        benefit:
          "Supporting a safer environment for students, staff and visitors.",
        icon: ShieldCheck,
      },
    ],
  },
];

export const discoveryChapterIds = discoveryChapters.map(
  (chapter) => chapter.id
);

export const discoveryMilestoneCount =
  discoveryChapters.reduce(
    (total, chapter) => total + chapter.milestones.length,
    0
  );