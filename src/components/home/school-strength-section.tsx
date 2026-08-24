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
} from "lucide-react";

import "./school-strength-section.css";

const peopleStats = [
  {
    value: "800+",
    label: "STUDENTS",
    icon: Users,
  },
  {
    value: "25",
    label: "TEACHING STAFF",
    icon: GraduationCap,
  },
  {
    value: "35",
    label: "NON-TEACHING STAFF",
    icon: UserRound,
  },
  {
    value: "9+",
    label: "YEARS OF GROWTH",
    icon: CalendarDays,
  },
];

const campusStats = [
  {
    value: "28",
    label: "CLASSROOMS",
    icon: Monitor,
  },
  {
    value: "15",
    label: "SCHOOL BUSES",
    icon: BusFront,
  },
  {
    value: "1",
    label: "LABORATORY",
    icon: FlaskConical,
  },
  {
    value: "1",
    label: "LIBRARY",
    icon: BookOpen,
  },
  {
    value: "45 / 80",
    label: "HOSTEL",
    icon: House,
  },
];

function StrengthCard({
  value,
  label,
  icon: Icon,
}: {
  value: string;
  label: string;
  icon: typeof Users;
}) {
  return (
    <article className="strength-card">
      <span className="strength-card-icon">
        <Icon size={17} strokeWidth={1.5} />
      </span>

      <strong>{value}</strong>

      <span className="strength-card-label">
        {label}
      </span>
    </article>
  );
}

export function SchoolStrengthSection() {
  return (
    <section
      className="school-strength"
      aria-labelledby="school-strength-title"
    >
      {/* =====================================================
          BACKGROUND GROWTH GRAPHIC
         ===================================================== */}

      <div
        className="strength-growth-graphic"
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      {/* =====================================================
          HEADER
         ===================================================== */}

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
      </div>

      {/* =====================================================
          PEOPLE — INFINITE ROW
         ===================================================== */}

      <div
        className="strength-marquee strength-marquee--forward"
        aria-label="School community statistics"
      >
        <div className="strength-marquee-track">
          {[...peopleStats, ...peopleStats].map(
            (stat, index) => (
              <StrengthCard
                key={`${stat.label}-${index}`}
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
              />
            ),
          )}
        </div>
      </div>

      {/* =====================================================
          CAMPUS — INFINITE ROW
         ===================================================== */}

      <div
        className="strength-marquee strength-marquee--reverse"
        aria-label="School infrastructure statistics"
      >
        <div className="strength-marquee-track">
          {[...campusStats, ...campusStats].map(
            (stat, index) => (
              <StrengthCard
                key={`${stat.label}-${index}`}
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
              />
            ),
          )}
        </div>
      </div>

      {/* =====================================================
          SUPPORTING LINE
         ===================================================== */}

      <div className="strength-footer-line">
        <span />
        <p>
          Growing together through learning, care and opportunity.
        </p>
        <span />
      </div>
    </section>
  );
}