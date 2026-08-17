"use client";

import type { LeadershipPerson } from "./leadership-data";

type Props = {
  person: LeadershipPerson;
  className?: string;
};

export default function LeadershipPersonCard({
  person,
  className = "",
}: Props) {
  return (
    <article
      className={`leadership-person leadership-person-${person.size} leadership-accent-${person.accent} ${className}`}
    >
      <div className="leadership-portrait-wrap">
        <div className="leadership-portrait-ring" />

        <div className="leadership-portrait">
          <img
            src={person.image}
            alt={person.name}
            draggable={false}
          />
        </div>

        <span className="leadership-leaf leadership-leaf-one" />
        <span className="leadership-leaf leadership-leaf-two" />
      </div>

      <div className="leadership-person-info">
        <span className="leadership-designation">
          {person.designation}
        </span>

        <h3>{person.name}</h3>

        <div className="leadership-quote-mark">“</div>

        <p>{person.description}</p>

        <div className="leadership-mini-line">
          <span />
          <span />
          <span />
        </div>
      </div>
    </article>
  );
}