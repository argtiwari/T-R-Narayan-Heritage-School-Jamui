"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  chairman,
  coordinator,
  director,
  principal,
} from "./leadership-data";

import LeadershipBranch from "./leadership-branch";
import LeadershipPersonCard from "./leadership-person-card";

import "./leadership.css";

export default function LeadershipSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    let raf = 0;

    const updateProgress = () => {
      raf = 0;

      const rect = section.getBoundingClientRect();

      const scrollDistance = Math.max(
        1,
        section.offsetHeight - window.innerHeight,
      );

      const nextProgress = Math.min(
        1,
        Math.max(
          0,
          -rect.top / scrollDistance,
        ),
      );

      setProgress(nextProgress);

      section.style.setProperty(
        "--leadership-progress",
        String(nextProgress),
      );
    };

    const handleScroll = () => {
      if (!raf) {
        raf = window.requestAnimationFrame(
          updateProgress,
        );
      }
    };

    const handleResize = () => {
      updateProgress();
    };

    updateProgress();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true },
    );

    window.addEventListener(
      "resize",
      handleResize,
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );

      window.removeEventListener(
        "resize",
        handleResize,
      );

      if (raf) {
        window.cancelAnimationFrame(raf);
      }
    };
  }, []);

  /*
   * The transition deliberately starts
   * after the hero has had enough time
   * to breathe.
   */
  const transitionProgress = Math.min(
    1,
    Math.max(
      0,
      (progress - 0.32) / 0.42,
    ),
  );

  return (
    <section
      ref={sectionRef}
      id="leadership"
      className="leadership-section"
      aria-label="Our Leadership"
    >
      <div className="leadership-viewport">

        {/* =================================================
            BACKGROUND
            ================================================= */}

        <div
          className="leadership-background"
          aria-hidden="true"
        >
          <div className="leadership-background-image" />

          <div className="leadership-background-wash" />

          <div className="leadership-background-vignette" />
        </div>


        {/* =================================================
            HEADER
            Static — it never participates in the
            Chairman → Director → Principal transition.
            ================================================= */}

        <header className="leadership-header">
          <div className="leadership-number">
            <span />
            02
            <span />
          </div>

          <div className="leadership-label">
            OUR LEADERSHIP
          </div>

          <h1>
            People Behind the{" "}
            <em>Vision.</em>
          </h1>

          <p>
            Guided by wisdom, driven by purpose.
            <br />
            Our leadership is the strength behind
            every child&apos;s bright future.
          </p>
        </header>


        {/* =================================================
            BOTANICAL CONNECTION
            ================================================= */}

        <LeadershipBranch
          progress={transitionProgress}
        />


        {/* =================================================
            HERO STAGE
            Chairman + Director
            ================================================= */}

        <div
          className="leadership-scene leadership-scene-primary"
          aria-label="Chairman and Director"
          style={{
            "--leadership-stage-progress":
              transitionProgress,
          } as React.CSSProperties}
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


        {/* =================================================
            SECOND STAGE
            Principal + Coordinator
            ================================================= */}

        <div
          className="leadership-scene leadership-scene-secondary"
          aria-label="Principal and Coordinator"
          style={{
            "--leadership-stage-progress":
              transitionProgress,
          } as React.CSSProperties}
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


        {/* =================================================
            TRANSITION MESSAGE
            ================================================= */}

        <div
          className="leadership-transition-copy"
          aria-hidden="true"
        >
          <span>
            ONE SHARED VISION
          </span>

          <strong>
            Different roles.
            <br />
            One shared purpose.
          </strong>
        </div>


        {/* =================================================
            JOURNEY PROGRESS
            ================================================= */}

        <div className="leadership-progress">
          <span>
            LEADERSHIP JOURNEY
          </span>

          <div className="leadership-progress-line">
            <i
              style={{
                transform:
                  `scaleX(${progress})`,
              }}
            />
          </div>

          <strong>
            {progress < 0.5
              ? "01"
              : "02"}{" "}
            / 02
          </strong>
        </div>
      </div>
    </section>
  );
}