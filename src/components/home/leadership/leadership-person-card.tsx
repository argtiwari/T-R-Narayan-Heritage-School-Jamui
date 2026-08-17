"use client";

import type { LeadershipPerson } from "./leadership-data";

type LeadershipPersonCardProps = {
  person: LeadershipPerson;
  className?: string;
};

export default function LeadershipPersonCard({
  person,
  className = "",
}: LeadershipPersonCardProps) {
  return (
    <article
      className={`leadership-person-card leadership-person-card--${person.id} leadership-person-card--${person.accent} ${className}`}
      data-person={person.id}
    >
      <div className="leadership-person-portrait">
        <img
          src={person.image}
          alt={`${person.name} - ${person.designation}`}
          draggable={false}
        />

        <div
          className="leadership-person-portrait-frame"
          aria-hidden="true"
        />

        <div
          className="leadership-person-leaf"
          aria-hidden="true"
        >
          ✦
        </div>
      </div>

      <div className="leadership-person-content">
        <span className="leadership-person-eyebrow">
          {person.eyebrow}
        </span>

        <h2>{person.name}</h2>

        <h3>{person.designation}</h3>

        <div
          className="leadership-person-quote"
          aria-hidden="true"
        >
          “
        </div>

        <p>{person.description}</p>

        <div className="leadership-person-points">
          {person.points.map((point) => {
            const Icon = point.icon;

            return (
              <span
                className="leadership-person-point"
                key={point.label}
              >
                <span className="leadership-person-point-icon">
                  <Icon
                    size={15}
                    strokeWidth={1.5}
                  />
                </span>

                <span>{point.label}</span>
              </span>
            );
          })}
        </div>

        <div
          className="leadership-person-accent-line"
          aria-hidden="true"
        >
          <i />
          <i />
          <i />
        </div>
      </div>
    </article>
  );
}