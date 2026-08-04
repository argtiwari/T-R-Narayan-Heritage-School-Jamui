"use client";

import { motion, useReducedMotion } from "framer-motion";

import { StatisticsBackground } from "./statistics-background";
import { StatisticsGrid } from "./statistics-grid";

const EASE = [0.22, 1, 0.36, 1] as const;

export function StatisticsSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="statistics"
      aria-labelledby="statistics-heading"
      className="relative isolate overflow-hidden bg-[#F8F5EF]"
    >
      {/* =====================================================
          SHARED VISUAL FIELD
      ===================================================== */}

      <div className="absolute inset-0 -z-10">
        <StatisticsBackground />
      </div>

      {/* =====================================================
          TOP EDITORIAL DIVIDER
      ===================================================== */}

      {/* <div
        aria-hidden="true"
        className="mx-auto flex max-w-[1500px] items-center px-5 pt-14 sm:px-7 sm:pt-16 lg:px-10 lg:pt-20 xl:px-12"
      >
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#AAA47C]/30 to-[#AAA47C]/50" />

        <svg
          viewBox="0 0 116 32"
          fill="none"
          className="mx-5 h-8 w-[116px] text-[#7F8934] opacity-50"
        >
          <path
            d="M4 21C27 21 40 18 55 15C71 12 86 13 112 7"
            stroke="currentColor"
            strokeWidth="0.7"
            strokeLinecap="round"
          />

          <path
            d="M39 18C36 11 40 6 46 5C47 11 44 16 39 18Z"
            stroke="currentColor"
            strokeWidth="0.65"
          />

          <path
            d="M74 12C77 7 83 6 87 9C84 13 79 14 74 12Z"
            stroke="currentColor"
            strokeWidth="0.65"
          />
        </svg>

        <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#AAA47C]/30 to-[#AAA47C]/50" />
      </div> */}

      {/* =====================================================
          SECTION CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 pb-20 pt-14 sm:px-7 sm:pb-24 sm:pt-16 lg:px-10 lg:pb-28 lg:pt-20 xl:px-12 xl:pb-32">
        {/* ===================================================
            INTRO
        =================================================== */}

        <motion.header
          initial={{
            opacity: 0,
            y: 16,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.65,
          }}
          transition={{
            duration: reducedMotion ? 0 : 0.7,
            ease: EASE,
          }}
          className="mx-auto max-w-[780px] text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#747E28] sm:text-[11px]">
            Our Growth Journey
          </p>

          <h2
            id="statistics-heading"
            className="mt-6 font-serif text-[40px] leading-[1.02] tracking-[-0.04em] text-[#2D1E17] sm:text-[48px] lg:text-[58px] xl:text-[64px]"
          >
            Growth Through{" "}
            <span className="text-[#68751E]">Numbers</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[610px] text-[14px] leading-7 text-[#746A61] sm:text-[15px] lg:text-[16px]">
            Every milestone reflects years of trust, innovation, and nurturing
            future leaders.
          </p>
        </motion.header>

        {/* ===================================================
            EDITORIAL COMPOSITION
        =================================================== */}

        <div className="relative mt-14 sm:mt-16 lg:mt-20 xl:mt-24">
          <StatisticsGrid />
        </div>

        {/* ===================================================
            CLOSING NOTE
        =================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{
            once: true,
            amount: 0.8,
          }}
          transition={{
            duration: reducedMotion ? 0 : 0.65,
            delay: reducedMotion ? 0 : 0.15,
            ease: EASE,
          }}
          className="mt-16 flex items-center justify-center gap-4 sm:mt-20 lg:mt-24"
        >
          <span className="h-px w-10 bg-[#AAA47C]/40 sm:w-16 lg:w-24" />

          <p className="text-center text-[9px] font-semibold uppercase tracking-[0.27em] text-[#8A8177] sm:text-[10px]">
            Learning · Community · Excellence · Care
          </p>

          <span className="h-px w-10 bg-[#AAA47C]/40 sm:w-16 lg:w-24" />
        </motion.div>
      </div>
    </section>
  );
}