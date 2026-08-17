export type LeadershipPerson = {
  id: string;
  name: string;
  designation: string;
  description: string;
  image: string;
  size: "large" | "medium";
  accent: "gold" | "olive";
};

export const leadershipPeople: LeadershipPerson[] = [
  {
    id: "chairman",
    name: "Chairman",
    designation: "VISION • VALUES • LEGACY",
    description:
      "Guiding the institution with wisdom, strong principles and a commitment to building a brighter tomorrow.",
    image: "/images/leadership/chairman.jpg",
    size: "large",
    accent: "gold",
  },

  {
    id: "director",
    name: "Director",
    designation: "GROWTH • DEVELOPMENT • INNOVATION",
    description:
      "Driving academic excellence through innovation, thoughtful planning and continuous institutional growth.",
    image: "/images/leadership/director.jpg",
    size: "large",
    accent: "olive",
  },

  {
    id: "principal",
    name: "Principal",
    designation: "LEARNING • DISCIPLINE • STUDENT GROWTH",
    description:
      "Ensuring a nurturing and disciplined environment where every child learns, grows and excels.",
    image: "/images/leadership/principal.jpg",
    size: "medium",
    accent: "gold",
  },

  {
    id: "coordinator",
    name: "Coordinator",
    designation: "ACTIVITIES • COMMUNICATION • STUDENT EXPERIENCE",
    description:
      "Connecting students, activities and opportunities to create a vibrant and enriching school life.",
    image: "/images/leadership/coordinator.jpg",
    size: "medium",
    accent: "olive",
  },
];