"use client";

import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  Languages,
  Snowflake,
} from "lucide-react";

import DiscoveryMilestone from "./discovery-milestone";
import DiscoveryVisual from "./discovery-visual";
import { discoveryChapters } from "./discovery-data";

export default function FoundationChapter() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [activeMilestone, setActiveMilestone] = useState(0);

  const foundation = discoveryChapters.find(
    (chapter) => chapter.id === "foundation"
  );

  if (!foundation) return null;

  const icons = [BookOpen, Languages, Snowflake];

  /*
   * Temporary scroll engine.
   *
   * GSAP ScrollTrigger will replace this once
   * the visual composition is approved.
   *
   * For now this lets us test:
   *
   * CBSE
   * ↓
   * English Medium
   * ↓
   * AC Classrooms
   */
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;

      if (!section) return;

      const rect = section.getBoundingClientRect();

      const viewportHeight = window.innerHeight;

      const totalScrollableDistance =
        rect.height - viewportHeight;

      if (totalScrollableDistance <= 0) return;

      const travelled = Math.min(
        Math.max(-rect.top, 0),
        totalScrollableDistance
      );

      const progress =
        travelled / totalScrollableDistance;

      if (progress < 0.33) {
        setActiveMilestone(0);
      } else if (progress < 0.66) {
        setActiveMilestone(1);
      } else {
        setActiveMilestone(2);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        min-h-[260vh]
        overflow-visible
        bg-[#F8F6EE]
      "
    >
      {/* =========================================
          AMBIENT CONTINUITY

          Same ivory / mint atmosphere coming
          from the Hero botanical bridge.
      ========================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          bg-[radial-gradient(circle_at_50%_4%,rgba(198,216,184,0.22),transparent_27%),radial-gradient(circle_at_14%_48%,rgba(219,227,203,0.18),transparent_30%)]
        "
      />

      {/* faint paper texture */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.16]
          [background-image:radial-gradient(rgba(78,96,65,0.18)_0.55px,transparent_0.55px)]
          [background-size:8px_8px]
        "
      />

      {/* =========================================
          STICKY DISCOVERY SCENE
      ========================================= */}

      <div
        className="
          sticky top-0
          flex min-h-screen
          items-center
          py-20
          lg:py-24
        "
      >
        <div
          className="
            relative z-10
            mx-auto grid
            w-full max-w-[1500px]
            grid-cols-1
            gap-12
            px-6
            sm:px-8
            lg:grid-cols-[0.92fr_1.08fr]
            lg:gap-16
            lg:px-12
            xl:px-16
          "
        >
          {/* =====================================
              LEFT — EDITORIAL VISUAL
          ====================================== */}

          <div
            className="
              relative
              mx-auto
              w-full max-w-[520px]
              lg:mx-0
            "
          >
            <DiscoveryVisual
              image={foundation.image}
              imageAlt={foundation.imageAlt}
              chapterNumber={foundation.number}
              chapterLabel={foundation.eyebrow}
              active
            />
          </div>

          {/* =====================================
              RIGHT — DISCOVERY STORY
          ====================================== */}

          <div
            className="
              relative
              flex min-h-[620px]
              flex-col
              justify-center
            "
          >
            {/* Chapter intro */}

            <div className="mb-10 lg:mb-14">
              <div
                className="
                  mb-5
                  flex items-center gap-4
                "
              >
                <span
                  className="
                    font-mono
                    text-[10px]
                    tracking-[0.3em]
                    text-[#A18C45]
                  "
                >
                  01
                </span>

                <span
                  className="
                    h-px w-10
                    bg-[#98A98A]/60
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-semibold uppercase
                    tracking-[0.32em]
                    text-[#718364]
                  "
                >
                  Foundation
                </span>
              </div>

              <h2
                className="
                  max-w-[620px]
                  font-serif
                  text-[38px]
                  leading-[1.05]
                  tracking-[-0.035em]
                  text-[#30221C]
                  sm:text-[46px]
                  lg:text-[52px]
                "
              >
                Strong beginnings shape{" "}
                <span className="text-[#647F43]">
                  everything that follows.
                </span>
              </h2>

              <p
                className="
                  mt-5 max-w-[570px]
                  text-[15px]
                  leading-7
                  text-[#6E7368]
                  sm:text-[16px]
                "
              >
                {foundation.description}
              </p>
            </div>

            {/* ===================================
                CENTRAL BOTANICAL SPINE
            ==================================== */}

            <div
              aria-hidden="true"
              className="
                absolute
                bottom-[8%]
                left-1/2
                top-[40%]
                hidden
                -translate-x-1/2
                lg:block
              "
            >
              <div
                className="
                  h-full w-px
                  bg-gradient-to-b
                  from-[#7D9870]/15
                  via-[#6F8A62]/55
                  to-[#C7B963]/30
                "
              />
            </div>

            {/* ===================================
                MILESTONES
            ==================================== */}

            <div className="relative space-y-2">
              {foundation.milestones.map(
                (milestone, index) => (
                  <DiscoveryMilestone
                    key={milestone.id}
                    number={milestone.number}
                    eyebrow={milestone.eyebrow}
                    title={milestone.title}
                    benefit={milestone.benefit}
                    icon={icons[index]}
                    side={
                      index % 2 === 0
                        ? "right"
                        : "left"
                    }
                    active={index <= activeMilestone}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          CONTINUATION MARKER

          Later this becomes the growing botanical
          path into Modern Learning.
      ========================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute bottom-0 left-1/2
          hidden h-28
          -translate-x-1/2
          lg:block
        "
      >
        <div
          className="
            h-full w-px
            bg-gradient-to-b
            from-[#728C64]/50
            to-transparent
          "
        />

        <span
          className="
            absolute left-1/2 top-7
            h-[7px] w-[7px]
            -translate-x-1/2
            rounded-full
            bg-[#D6C76F]
            shadow-[0_0_0_5px_rgba(214,199,111,0.10)]
          "
        />
      </div>
    </section>
  );
}