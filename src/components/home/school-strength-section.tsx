

"use client";

import {
  Users,
  GraduationCap,
  UserRound,
  CalendarDays,
  Monitor,
  BusFront,
  FlaskConical,
  BookOpen,
  House,
  Trophy,
  Sparkles,
  Laptop,
} from "lucide-react";

import "./school-strength-section.css"; 

type StrengthCardData = {
  value: string;
  label: string;
  description: string;
  icon: typeof Users;
  tone: "olive" | "gold";
};

const communityStats: StrengthCardData[] = [
  {
    value: "800+",
    label: "STUDENTS",
    description: "A growing learning community",
    icon: Users,
    tone: "olive",
  },
  {
    value: "25",
    label: "TEACHING STAFF",
    description: "Dedicated educators",
    icon: GraduationCap,
    tone: "gold",
  },
  {
    value: "35",
    label: "NON-TEACHING STAFF",
    description: "Supporting every school day",
    icon: UserRound,
    tone: "olive",
  },
  {
    value: "9+",
    label: "YEARS OF GROWTH",
    description: "Growing with every generation",
    icon: CalendarDays,
    tone: "gold",
  },
  {
    value: "45 / 80",
    label: "HOSTEL",
    description: "Current residents / capacity",
    icon: House,
    tone: "olive",
  },
];

const campusStats: StrengthCardData[] = [
  {
    value: "28",
    label: "CLASSROOMS",
    description: "Spaces for everyday learning",
    icon: Monitor,
    tone: "gold",
  },
  {
    value: "15",
    label: "SCHOOL BUSES",
    description: "Supporting daily transport",
    icon: BusFront,
    tone: "olive",
  },
  {
    value: "1",
    label: "LABORATORY",
    description: "Practical learning and discovery",
    icon: FlaskConical,
    tone: "gold",
  },
  {
    value: "1",
    label: "LIBRARY",
    description: "Reading, knowledge and discovery",
    icon: BookOpen,
    tone: "olive",
  },
  {
    value: "SPORTS",
    label: "SPORTS FACILITIES",
    description: "Learning beyond the classroom",
    icon: Trophy,
    tone: "gold",
  },
  {
    value: "CO-CURRICULAR",
    label: "ACTIVITIES",
    description: "Creative and enriching experiences",
    icon: Sparkles,
    tone: "olive",
  },
  {
    value: "DIGITAL",
    label: "LEARNING",
    description: "Technology-supported education",
    icon: Laptop,
    tone: "gold",
  },
  {
    value: "STUDENT",
    label: "ACTIVITIES",
    description: "Participation, interests and experiences",
    icon: Sparkles,
    tone: "olive",
  },
];

function StrengthCard({
  value,
  label,
  description,
  icon: Icon,
  tone,
}: StrengthCardData) {
  return (
    <article className={`strength-card strength-card--${tone}`}>
      <span className="strength-card-icon">
        <Icon size={17} strokeWidth={1.5} />
      </span>

      {value === "SPORTS" ||
value === "CO-CURRICULAR" ||
value === "DIGITAL" ||
value === "STUDENT" ? (
  <>
    <strong className="strength-card-facility">
      {value}
    </strong>

    <span className="strength-card-label">
      {label}
    </span>
  </>
) : (
  <>
    <strong className="strength-card-value">
      {value}
    </strong>

    <span className="strength-card-label">
      {label}
    </span>
  </>
)}

      <span className="strength-card-description">
        {description}
      </span>

      <span
        className="strength-card-accent"
        aria-hidden="true"
      />
    </article>
  );
}

function InfiniteStrengthRow({
  items,
  direction,
  label,
}: {
  items: StrengthCardData[];
  direction: "forward" | "reverse";
  label: string;
}) {
  /*
   * 4 copies ensure the viewport is always filled.
   * The animation moves exactly one complete set.
   */
  const repeatedItems = [
    ...items,
    ...items,
    ...items,
    ...items,
  ];

  return (
    <div
      className={`strength-marquee strength-marquee--${direction}`}
      aria-label={label}
    >
      <div className="strength-marquee-track">
        {repeatedItems.map((stat, index) => (
          <StrengthCard
            key={`${stat.label}-${index}`}
            {...stat}
          />
        ))}
      </div>
    </div>
  );
}

export function SchoolStrengthSection() {
  return (
    <section
      className="school-strength"
      aria-labelledby="school-strength-title"
    >
      {/* Background graphic */}

      <div
        className="strength-background"
        aria-hidden="true"
      />

      {/* School logo watermark */}

      <div
        className="strength-logo-watermark"
        aria-hidden="true"
      >
        <img
          src="/images/logo.svg"
          alt=""
        />
      </div>

      {/* Subtle growth line */}

      <div
        className="strength-growth-line"
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
        <span />
      </div>

      {/* Header */}

      <div className="strength-header">
        <span className="strength-eyebrow">
          <i />
          THE TR NARAYAN DIFFERENCE
          <i />
        </span>

        <h2 id="school-strength-title">
          More than numbers.
          <span>A growing community.</span>
        </h2>

        <p>
          Every number represents a child, a teacher,
          a classroom and a growing journey of learning,
          care and opportunity.
        </p>
      </div>

      {/* Row 1 — Community */}

      <InfiniteStrengthRow
        items={communityStats}
        direction="forward"
        label="School community statistics"
      />

      {/* Divider */}

      <div
        className="strength-brand-divider"
        aria-hidden="true"
      >
        <span />
        <b>ROOTS • LEARNING • GROWTH</b>
        <span />
      </div>

      {/* Row 2 — Campus & Student Life */}

      <InfiniteStrengthRow
        items={campusStats}
        direction="reverse"
        label="School campus and student life"
      />

      {/* Footer */}

      <div className="strength-footer-line">
        <span />

        <p>
          Growing together through learning,
          care and opportunity.
        </p>

        <span />
      </div>
    </section>
  );
}

export default SchoolStrengthSection;