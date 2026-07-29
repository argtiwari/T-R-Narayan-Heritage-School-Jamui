"use client";

import { motion } from "framer-motion";
import { useStatisticsJourney } from "./statistics-journey";

const EASE = [0.22, 1, 0.36, 1] as const;

export function StatisticsBus() {
  const { progress } = useStatisticsJourney();

  /*
    Journey progress:
    0.00  Bus enters
    0.14  Academics
    0.32  People
    0.51  Campus
    0.70  Transport
    0.86  Exit begins
    1.00  Complete
  */

  const busX = `${-12 + progress * 124}%`;

  const busY =
    progress < 0.25
      ? 3
      : progress < 0.5
        ? -4
        : progress < 0.75
          ? 5
          : -2;

  return (
    <>
      {/* =====================================================
          DESKTOP JOURNEY
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 z-20 hidden h-[110px] -translate-y-1/2 overflow-visible lg:block"
      >
        {/* JOURNEY PATH */}

        <svg
          viewBox="0 0 1200 110"
          preserveAspectRatio="none"
          fill="none"
          className="absolute inset-0 h-full w-full overflow-visible"
        >
          {/* Base path */}

          <path
            d="M35 70C190 67 285 74 390 60C475 49 555 37 650 45C735 52 810 68 900 60C985 53 1060 38 1165 42"
            stroke="#7C833A"
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.1"
          />

          {/* Progress path */}

          <motion.path
            d="M35 70C190 67 285 74 390 60C475 49 555 37 650 45C735 52 810 68 900 60C985 53 1060 38 1165 42"
            stroke="#7C833A"
            strokeWidth="1.05"
            strokeLinecap="round"
            animate={{
              pathLength: progress,
              opacity: progress > 0 ? 0.3 : 0,
            }}
            transition={{
              duration: 0.08,
              ease: "linear",
            }}
          />

          {/* Milestones */}

          <g fill="#7C833A">
            <circle
              cx="215"
              cy="68"
              r="2.4"
              opacity={progress >= 0.14 ? 0.42 : 0.16}
            />

            <circle
              cx="500"
              cy="47"
              r="2.4"
              opacity={progress >= 0.32 ? 0.42 : 0.16}
            />

            <circle
              cx="788"
              cy="61"
              r="2.4"
              opacity={progress >= 0.51 ? 0.42 : 0.16}
            />

            <circle
              cx="1050"
              cy="44"
              r="2.4"
              opacity={progress >= 0.7 ? 0.42 : 0.16}
            />
          </g>
        </svg>

        {/* ===================================================
            BUS

            Uses the SAME progress as the cards.
        =================================================== */}

        <motion.div
          animate={{
            left: busX,
            y: busY,
            opacity:
              progress <= 0.02 || progress >= 0.98
                ? 0
                : 1,
          }}
          transition={{
            left: {
              duration: 0.08,
              ease: "linear",
            },
            y: {
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            },
            opacity: {
              duration: 0.35,
            },
          }}
          className="absolute top-[16px] will-change-[left,transform,opacity]"
        >
          <SchoolBus />
        </motion.div>

        {/* Quiet ground thread */}

        <div className="absolute bottom-[18px] left-[4%] right-[4%] h-px bg-[#7C833A]/[0.035]" />
      </div>

      {/* =====================================================
          MOBILE JOURNEY

          No tiny photographic/SVG bus on mobile.
          The same progress becomes a vertical story marker.
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-5 left-[17px] top-5 z-20 lg:hidden"
      >
        <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-[#7C833A]/10" />

        <motion.span
          animate={{
            top: `${4 + progress * 90}%`,
            opacity:
              progress <= 0.02 || progress >= 0.98
                ? 0
                : 0.55,
          }}
          transition={{
            top: {
              duration: 0.08,
              ease: "linear",
            },
            opacity: {
              duration: 0.3,
            },
          }}
          className="absolute left-1/2 block size-[6px] -translate-x-1/2 rounded-full border border-[#747E2A]/50 bg-[#F8F5EF]"
        />
      </div>
    </>
  );
}

/* =========================================================
   SCHOOL BUS
========================================================= */

function SchoolBus() {
    return (
        <svg
            viewBox="0 0 150 68"
            fill="none"
            className="h-[68px] w-[150px] xl:h-[74px] xl:w-[164px]"
        >
            <path
                d="M20 16C20 11 24 8 29 8H111C119 8 125 12 128 19L137 39V50H15V23C15 19 17 17 20 16Z"
                fill="#F3E9D5"
                fillOpacity="0.94"
            />

            <path
                d="M20 16C20 11 24 8 29 8H111C119 8 125 12 128 19L137 39V50H15V23C15 19 17 17 20 16Z"
                stroke="#765F2C"
                strokeWidth="1.15"
                strokeLinejoin="round"
            />

            <path
                d="M15 39H137V50H15V39Z"
                fill="#A58B48"
                fillOpacity="0.15"
            />

            <path
                d="M15 39H137"
                stroke="#765F2C"
                strokeWidth="0.8"
                opacity="0.7"
            />

            {/* Windows */}

            <path d="M29 15H45V31H29V15Z" stroke="#765F2C" strokeWidth="0.8" />
            <path d="M50 15H66V31H50V15Z" stroke="#765F2C" strokeWidth="0.8" />
            <path d="M71 15H87V31H71V15Z" stroke="#765F2C" strokeWidth="0.8" />
            <path d="M92 15H108V31H92V15Z" stroke="#765F2C" strokeWidth="0.8" />

            <path
                d="M113 15C119 16 122 20 124 25L127 31H113V15Z"
                stroke="#765F2C"
                strokeWidth="0.8"
            />

            {/* School name */}

           <text
  x="70"
  y="37"
  fill="#5A4027"
  fontSize="5.2"
  fontWeight="600"
  letterSpacing="0.45"
  textAnchor="middle"
>
  T.R. NARAYAN HERITAGE SCHOOL
</text>

 


            {/* Front */}

            <path
                d="M137 41H143V47H137"
                stroke="#765F2C"
                strokeWidth="0.8"
            />

            <circle
                cx="139"
                cy="35"
                r="1.6"
                fill="#A58B48"
                fillOpacity="0.65"
            />

            {/* Wheels */}

            <circle
                cx="40"
                cy="51"
                r="8"
                fill="#F8F5EF"
                stroke="#49392E"
                strokeWidth="1.2"
            />

            <circle
                cx="40"
                cy="51"
                r="3"
                stroke="#765F2C"
                strokeWidth="0.8"
            />

            <circle
                cx="113"
                cy="51"
                r="8"
                fill="#F8F5EF"
                stroke="#49392E"
                strokeWidth="1.2"
            />

            <circle
                cx="113"
                cy="51"
                r="3"
                stroke="#765F2C"
                strokeWidth="0.8"
            />
        </svg>
    );
}