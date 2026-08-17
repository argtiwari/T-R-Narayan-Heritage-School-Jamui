"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { leadershipPeople } from "./leadership-data";
import LeadershipBranch from "./leadership-branch";
import LeadershipPersonCard from "./leadership-person-card";

import "./leadership.css";

export default function LeadershipSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    let raf = 0;

    const update = () => {
      raf = 0;

      const rect = section.getBoundingClientRect();

      const travel = Math.max(
        1,
        section.offsetHeight - window.innerHeight,
      );

      const nextProgress = Math.min(
        1,
        Math.max(0, -rect.top / travel),
      );

      setProgress(nextProgress);
    };

    const requestUpdate = () => {
      if (!raf) {
        raf = window.requestAnimationFrame(update);
      }
    };

    update();

    window.addEventListener(
      "scroll",
      requestUpdate,
      { passive: true },
    );

    window.addEventListener(
      "resize",
      requestUpdate,
    );

    return () => {
      window.removeEventListener(
        "scroll",
        requestUpdate,
      );

      window.removeEventListener(
        "resize",
        requestUpdate,
      );

      if (raf) {
        window.cancelAnimationFrame(raf);
      }
    };
  }, []);

  const chairman = leadershipPeople[0];
  const director = leadershipPeople[1];
  const principal = leadershipPeople[2];
  const coordinator = leadershipPeople[3];

  /*
   * Stage 1:
   * 0 → 0.45
   *
   * Stage 2:
   * 0.45 → 1
   */

  const transition = Math.min(
    1,
    Math.max(
      0,
      (progress - 0.28) / 0.42,
    ),
  );

  return (
    <section
      ref={sectionRef}
      id="leadership"
      className="leadership-section"
    >
      <div className="leadership-sticky">
        <div className="leadership-background">
          <div className="leadership-background-image" />
          <div className="leadership-background-wash" />
          <div className="leadership-background-glow" />
        </div>

        <div className="leadership-header">
          <div className="leadership-number">
            <span />
            02
            <span />
          </div>

          <div className="leadership-eyebrow">
            OUR LEADERSHIP
          </div>

          <h2>
            People Behind the{" "}
            <em>Vision.</em>
          </h2>

          <p>
            Guided by wisdom, driven by purpose.
            <br />
            Our leadership is the strength behind
            every child&apos;s bright future.
          </p>
        </div>

        <LeadershipBranch progress={transition} />

        {/* FIRST STAGE */}
        <div
          className="leadership-stage leadership-stage-primary"
          style={{
            opacity: 1 - transition,
            transform: `
              translate3d(
                0,
                ${transition * -18}vh,
                0
              )
              scale(${1 - transition * 0.055})
            `,
          }}
        >
          <LeadershipPersonCard
            person={chairman}
            className="leadership-chairman"
          />

          <LeadershipPersonCard
            person={director}
            className="leadership-director"
          />
        </div>

        {/* SECOND STAGE */}
        <div
          className="leadership-stage leadership-stage-secondary"
          style={{
            opacity: transition,
            transform: `
              translate3d(
                0,
                ${(1 - transition) * -105}vh,
                0
              )
              scale(${0.94 + transition * 0.06})
            `,
          }}
        >
          <LeadershipPersonCard
            person={principal}
            className="leadership-principal"
          />

          <LeadershipPersonCard
            person={coordinator}
            className="leadership-coordinator"
          />
        </div>

        <div className="leadership-progress">
          <span>OUR LEADERSHIP</span>

          <div className="leadership-progress-line">
            <div
              style={{
                transform: `scaleX(${progress})`,
              }}
            />
          </div>

          <strong>
            {progress < 0.5 ? "01" : "02"} / 02
          </strong>
        </div>
      </div>
    </section>
  );
}