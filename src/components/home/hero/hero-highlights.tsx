"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BookOpen,
  MonitorUp,
  Sprout,
  MapPin,
  type LucideIcon,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

type IdentityItem = {
  title: string;
  detail: string;
  icon: LucideIcon;
};

const identityItems: IdentityItem[] = [
  {
    title: "CBSE Affiliated",
    detail: "Affiliation No. 330881",
    icon: BookOpen,
  },
  {
    title: "Smart Classrooms",
    detail: "Technology-enabled learning",
    icon: MonitorUp,
  },
  {
    title: "Holistic Education",
    detail: "Academics, values & life skills",
    icon: Sprout,
  },
  {
    title: "Jamui, Bihar",
    detail: "A nurturing learning environment",
    icon: MapPin,
  },
];

export function HeroHighlights() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 14,
            }
      }
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.85,
        delay: 0.34,
        ease: EASE,
      }}
      className="
        relative z-30
        mx-auto
        mt-7
        w-full
        max-w-[1380px]

        sm:mt-8
        lg:mt-9
      "
    >
      {/* =====================================================
          ATMOSPHERIC MINT HALO
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -inset-x-5
          -bottom-7
          top-4

          rounded-[42px]

          bg-[#C9DCC1]/[0.16]
          blur-[30px]
        "
      />

      {/* Warm grounding shadow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-5
          left-[7%]
          right-[7%]

          h-14

          rounded-[50%]

          bg-[#4B3A2C]/[0.075]
          blur-[25px]
        "
      />

      {/* =====================================================
          FLOATING GLASS RIBBON
      ===================================================== */}

      <div
        className="
          relative
          overflow-hidden

          rounded-[26px]

          border
          border-[#BFCDB7]/75

          bg-[linear-gradient(115deg,rgba(255,254,249,0.94)_0%,rgba(241,248,237,0.90)_48%,rgba(255,253,247,0.94)_100%)]

          shadow-[0_22px_52px_rgba(74,91,64,0.11),0_5px_14px_rgba(62,43,30,0.045),inset_0_1px_0_rgba(255,255,255,0.96)]

          backdrop-blur-xl
        "
      >
        {/* Top glass reflection */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-[7%]
            right-[7%]
            top-0

            h-px

            bg-gradient-to-r
            from-transparent
            via-white
            to-transparent
          "
        />

        {/* Left warm reflection */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-16
            -top-24

            size-[260px]

            rounded-full

            bg-[#FFF9E9]/55
            blur-[62px]
          "
        />

        {/* Right mint light */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-28
            right-[4%]

            h-[220px]
            w-[360px]

            rounded-full

            bg-[#CFE0C4]/35
            blur-[65px]
          "
        />

        {/* =====================================================
            BOTANICAL EDGE — LEFT
        ===================================================== */}

        <BotanicalEdge side="left" />

        {/* =====================================================
            BOTANICAL EDGE — RIGHT
        ===================================================== */}

        <BotanicalEdge side="right" />

        {/* =====================================================
            ITEMS
        ===================================================== */}

        <div
          className="
            relative z-10

            grid
            grid-cols-1

            sm:grid-cols-2

            lg:grid-cols-4
          "
        >
          {identityItems.map(({ title, detail, icon: Icon }, index) => (
            <motion.div
              key={title}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -3,
                    }
              }
              transition={{
                duration: 0.32,
                ease: EASE,
              }}
              className={`
                group
                relative

                flex
                min-h-[106px]
                items-center
                gap-4

                px-6
                py-5

                sm:min-h-[118px]
                sm:px-7
                sm:py-6

                lg:min-h-[126px]
                lg:px-6

                xl:px-8

                ${
                  index > 0
                    ? "border-t border-[#D9E1D4]/65 sm:border-t-0"
                    : ""
                }

                ${
                  index % 2 === 1
                    ? "sm:border-l sm:border-[#D9E1D4]/65"
                    : ""
                }

                ${
                  index >= 2
                    ? "sm:border-t sm:border-[#D9E1D4]/65 lg:border-t-0"
                    : ""
                }

                ${
                  index > 0
                    ? "lg:border-l lg:border-[#D9E1D4]/55"
                    : ""
                }
              `}
            >
              {/* Hover material */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-[6px]

                  rounded-[19px]

                  bg-[#DCEBD5]/0

                  transition-all
                  duration-500
                  ease-out

                  group-hover:bg-[#DCEBD5]/24

                  group-hover:shadow-[inset_0_0_0_1px_rgba(112,142,99,0.07),0_8px_22px_rgba(76,99,65,0.045)]
                "
              />

              {/* muted gold hover light */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-[22%]
                  top-0

                  h-px
                  w-0

                  bg-gradient-to-r
                  from-transparent
                  via-[#B69A5E]/70
                  to-transparent

                  transition-all
                  duration-500

                  group-hover:w-[56%]
                "
              />

              {/* =================================================
                  ICON MEDALLION
              ================================================= */}

              <div
                className="
                  relative z-10

                  flex
                  size-[50px]
                  shrink-0
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-white/90

                  bg-[linear-gradient(145deg,rgba(251,253,247,0.96),rgba(232,242,225,0.90))]

                  text-[#607A55]

                  shadow-[0_8px_20px_rgba(68,92,58,0.09),inset_0_0_0_1px_rgba(112,140,99,0.09)]

                  transition-all
                  duration-500

                  group-hover:-translate-y-[1px]
                  group-hover:border-[#D6E3CE]
                  group-hover:text-[#486A42]

                  group-hover:shadow-[0_12px_26px_rgba(68,92,58,0.14),inset_0_0_0_1px_rgba(112,140,99,0.13)]

                  xl:size-[54px]
                "
              >
                <Icon
                  size={21}
                  strokeWidth={1.45}
                  aria-hidden="true"
                />

                {/* tiny gold reflection */}
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    right-[7px]
                    top-[6px]

                    size-[5px]

                    rounded-full

                    bg-[#B89C5D]/0

                    transition-colors
                    duration-500

                    group-hover:bg-[#B89C5D]/55
                  "
                />
              </div>

              {/* =================================================
                  COPY
              ================================================= */}

              <div className="relative z-10 min-w-0 flex-1">
                <h3
                  className="
                    text-[13px]
                    font-semibold
                    leading-[1.3]
                    tracking-[-0.018em]
                    text-[#342B25]

                    transition-colors
                    duration-300

                    group-hover:text-[#201914]

                    xl:text-[14px]
                  "
                >
                  {title}
                </h3>

                <p
                  className="
                    mt-1.5

                    max-w-[175px]

                    text-[10px]
                    leading-[1.55]
                    text-[#708169]

                    xl:text-[11px]
                  "
                >
                  {detail}
                </p>

                {/* Growing olive underline */}
                <div
                  aria-hidden="true"
                  className="
                    mt-3

                    h-px
                    w-[34px]

                    overflow-hidden

                    bg-[#D3DDD0]
                  "
                >
                  <span
                    className="
                      block
                      h-full
                      w-[45%]

                      bg-[#718C68]

                      transition-all
                      duration-500
                      ease-out

                      group-hover:w-full
                    "
                  />
                </div>
              </div>

              {/* =================================================
                  DESKTOP JOURNEY DOT
              ================================================= */}

              {index < identityItems.length - 1 && (
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    -right-[4px]
                    top-1/2
                    z-20

                    hidden
                    size-[8px]

                    -translate-y-1/2

                    rounded-full

                    border-2
                    border-[#F7FAF3]

                    bg-[#78906D]

                    shadow-[0_0_0_4px_rgba(120,144,109,0.055)]

                    lg:block
                  "
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom growth hairline */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-0
            left-[8%]
            right-[8%]

            h-px

            bg-gradient-to-r
            from-transparent
            via-[#78906D]/65
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          BRIDGE ORIGIN
          Next component starts EXACTLY here.
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          relative
          mx-auto

          h-[24px]
          w-[80px]
        "
      >
        <span
          className="
            absolute
            left-1/2
            top-0

            h-[17px]
            w-px

            -translate-x-1/2

            bg-gradient-to-b
            from-[#718C68]/80
            to-[#718C68]/25
          "
        />

        <span
          className="
            absolute
            bottom-[1px]
            left-1/2

            size-[7px]

            -translate-x-1/2

            rounded-full

            border
            border-[#B89C5D]/55

            bg-[#F5F7ED]

            shadow-[0_0_0_5px_rgba(190,205,173,0.12),0_0_14px_rgba(181,157,94,0.20)]
          "
        />
      </div>
    </motion.div>
  );
}

function BotanicalEdge({
  side,
}: {
  side: "left" | "right";
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 110 140"
      fill="none"
      className={`
        pointer-events-none
        absolute
        bottom-[-12px]

        h-[118px]
        w-[94px]

        text-[#B79B5D]
        opacity-[0.20]

        ${
          side === "left"
            ? "left-[-9px]"
            : "right-[-9px] -scale-x-100"
        }
      `}
    >
      <path
        d="M7 134C19 103 30 75 51 48C65 30 82 18 103 8"
        stroke="currentColor"
        strokeWidth="0.85"
        strokeLinecap="round"
      />

      <path
        d="M27 93C14 88 10 77 16 66C30 68 36 79 27 93Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M43 66C31 60 30 49 37 40C50 44 54 55 43 66Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M62 41C54 30 58 20 69 15C78 25 74 36 62 41Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M35 80C45 75 55 78 59 87C50 94 40 91 35 80Z"
        stroke="currentColor"
        strokeWidth="0.65"
      />
    </svg>
  );
}