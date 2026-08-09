"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FoundationScene from "./chapters/foundation-scene";
import ModernLearningScene from "./chapters/modern-learning-scene";

gsap.registerPlugin(ScrollTrigger);

export default function DiscoverySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const journeyRef = useRef<HTMLDivElement | null>(null);
  const branchRef = useRef<SVGPathElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const journey = journeyRef.current;
    const branch = branchRef.current;

    if (!section || !journey || !branch) return;

    const ctx = gsap.context(() => {
      const chapters = gsap.utils.toArray<HTMLElement>(
        "[data-discovery-chapter]"
      );

      if (!chapters.length) return;

      /* =====================================================
         BOTANICAL PATH SETUP
      ====================================================== */

      const pathLength = branch.getTotalLength();

      gsap.set(branch, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      /* =====================================================
         INITIAL CHAPTER STATE
      ====================================================== */

      gsap.set(chapters, {
        opacity: 0,
        y: 35,
        pointerEvents: "none",
      });

      gsap.set(chapters[0], {
        opacity: 1,
        y: 0,
        pointerEvents: "auto",
      });

      /* =====================================================
         MASTER DISCOVERY TIMELINE

         One timeline controls the entire journey.

         Future chapters will simply be registered here.
      ====================================================== */

      const masterTimeline = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      chapters.forEach((chapter, index) => {
        if (index === 0) {
          masterTimeline.to(
            {},
            {
              duration: 1,
            }
          );

          return;
        }

        /* -----------------------------------------------
           Previous chapter releases
        ----------------------------------------------- */

        masterTimeline.to(
          chapters[index - 1],
          {
            opacity: 0,
            y: -28,
            duration: 0.8,
            pointerEvents: "none",
          },
          "+=0.35"
        );

        /* -----------------------------------------------
           Botanical journey continues
        ----------------------------------------------- */

        masterTimeline.to(
          branch,
          {
            strokeDashoffset:
              pathLength -
              (pathLength / (chapters.length - 1)) *
                index,
            duration: 1,
          },
          "<0.15"
        );

        /* -----------------------------------------------
           New chapter enters
        ----------------------------------------------- */

        masterTimeline.fromTo(
          chapter,
          {
            opacity: 0,
            y: 35,
            pointerEvents: "none",
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            pointerEvents: "auto",
          },
          "<0.35"
        );
      });

      /* =====================================================
         SCROLLTRIGGER

         This is the ONLY master scroll controller.
      ====================================================== */

      ScrollTrigger.create({
        animation: masterTimeline,
        trigger: section,
        start: "top top",
        end: () =>
          `+=${Math.max(
            chapters.length * window.innerHeight * 1.15,
            window.innerHeight * 2.5
          )}`,
        pin: journey,
        scrub: 1.15,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });

      /* =====================================================
         REFRESH AFTER LAYOUT
      ====================================================== */

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="parent-discovery"
      className="
        relative
        overflow-hidden
        bg-[#F8F6EE]
      "
    >
      {/* ===================================================
          MASTER JOURNEY CANVAS
      ==================================================== */}

      <div
        ref={journeyRef}
        className="
          relative
          min-h-screen
          overflow-hidden
        "
      >
        {/* =================================================
            CONTINUOUS BOTANICAL PATH

            This SVG belongs to the journey,
            not to an individual chapter.
        ================================================== */}

        <svg
          aria-hidden="true"
          viewBox="0 0 1200 900"
          preserveAspectRatio="none"
          className="
            pointer-events-none
            absolute
            inset-0
            z-20
            h-full
            w-full
          "
        >
          <path
            ref={branchRef}
            d="
              M600 900
              C560 810 640 750 600 670
              C555 580 470 550 505 455
              C540 360 690 355 705 265
              C715 200 665 145 600 70
            "
            fill="none"
            stroke="#718963"
            strokeWidth="1.25"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            opacity="0.38"
          />

          {/* restrained botanical nodes */}

          <circle
            cx="600"
            cy="670"
            r="3"
            fill="#C9B85F"
            opacity="0.8"
          />

          <circle
            cx="505"
            cy="455"
            r="3"
            fill="#C9B85F"
            opacity="0.8"
          />

          <circle
            cx="705"
            cy="265"
            r="3"
            fill="#C9B85F"
            opacity="0.8"
          />
        </svg>

        {/* =================================================
            CHAPTERS

            Each chapter occupies the same visual canvas.
            GSAP controls which one is active.
        ================================================== */}

        <div className="absolute inset-0">
          <div
            data-discovery-chapter
            className="absolute inset-0"
          >
            <FoundationScene />
          </div>

          <div
            data-discovery-chapter
            className="absolute inset-0"
          >
            <ModernLearningScene />
          </div>
        </div>

        {/* =================================================
            JOURNEY LABEL
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-7
            left-1/2
            z-30
            -translate-x-1/2
            whitespace-nowrap
          "
        >
          <span
            className="
              rounded-full
              border
              border-[#91A488]/30
              bg-[#F8F6EE]/65
              px-4
              py-2
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-[#718166]
              backdrop-blur-md
            "
          >
            Parent Discovery Journey
          </span>
        </div>
      </div>
    </section>
  );
}