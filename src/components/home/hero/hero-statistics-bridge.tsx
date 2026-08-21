"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BookOpen,
  MonitorUp,
  Sprout,
  MapPin,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const identities = [
  {
    title: "CBSE CURRICULUM",
    detail: "Skill-Oriented Learning",
    icon: BookOpen,
  },
  {
    title: "Smart Classrooms",
    detail: "Technology-enabled learning",
    icon: MonitorUp,
  },
  {
    title: "Holistic Education",
    detail: "Learning beyond academics",
    icon: Sprout,
  },
  {
    title: "Jamui, Bihar",
    detail: "A nurturing learning environment",
    icon: MapPin,
  },
];

export function HeroStatisticsBridge() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative z-20 w-full">
      {/* atmospheric connection */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          left-1/2 top-[30px]
          h-[220px] w-[92%]
          -translate-x-1/2
          rounded-[50%]
          bg-[#b9cba7]/[0.13]
          blur-[42px]
        "
      />

      {/* =====================================================
          FLOATING IDENTITY RIBBON
      ===================================================== */}

      <motion.div
        initial={
          reducedMotion
            ? false
            : {
                opacity: 0,
                y: 14,
              }
        }
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          duration: 0.85,
          ease: EASE,
        }}
        className="
          relative mx-auto
          w-[calc(100%-32px)]
          max-w-[1460px]

          md:w-[calc(100%-64px)]
          xl:w-[calc(100%-96px)]
        "
      >
        {/* floating shadow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -bottom-5 left-[4%] right-[4%]
            h-16 rounded-[50%]
            bg-[#5e7251]/[0.13]
            blur-[26px]
          "
        />

        {/* mint atmospheric halo */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -inset-3
            rounded-[34px]
            bg-[#dbe8d1]/[0.20]
            blur-[20px]
          "
        />

        {/* ribbon surface */}
        <div
          className="
            relative overflow-hidden
            rounded-[26px]

            border border-[#b8c9ad]/70

            bg-[linear-gradient(115deg,rgba(255,254,249,0.94)_0%,rgba(244,249,239,0.90)_48%,rgba(255,253,247,0.95)_100%)]

            shadow-[0_24px_55px_rgba(70,83,59,0.12),0_5px_15px_rgba(62,47,35,0.045),inset_0_1px_0_rgba(255,255,255,0.95)]

            backdrop-blur-xl
          "
        >
          {/* top glass reflection */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              left-[5%] right-[5%] top-0
              h-px
              bg-gradient-to-r
              from-transparent via-white to-transparent
            "
          />

          {/* soft inner lighting */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              left-[18%] top-[-80px]
              h-[170px] w-[320px]
              rounded-full
              bg-white/60
              blur-[50px]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              right-[12%] bottom-[-90px]
              h-[180px] w-[300px]
              rounded-full
              bg-[#dce9cf]/35
              blur-[55px]
            "
          />

          {/* LEFT BOTANICAL CORNER */}
          <BotanicalCorner side="left" />

          {/* RIGHT BOTANICAL CORNER */}
          <BotanicalCorner side="right" />

          {/* =================================================
              IDENTITY CONTENT
          ================================================= */}

          <div
            className="
              relative z-10
              grid grid-cols-1

              sm:grid-cols-2

              xl:grid-cols-4
            "
          >
            {identities.map(({ title, detail, icon: Icon }, index) => (
              <motion.div
                key={title}
                whileHover={
                  reducedMotion
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
                  group relative
                  flex min-h-[118px]
                  items-center
                  gap-4
                  px-7 py-6

                  md:min-h-[126px]
                  md:px-8

                  xl:min-h-[136px]
                  xl:px-7

                  2xl:px-9

                  ${index > 0 ? "border-t border-[#d8e0d2]/60 sm:border-t-0" : ""}

                  ${
                    index % 2 === 1
                      ? "sm:border-l sm:border-[#d8e0d2]/60"
                      : ""
                  }

                  ${
                    index >= 2
                      ? "sm:border-t sm:border-[#d8e0d2]/60 xl:border-t-0"
                      : ""
                  }

                  ${
                    index > 0
                      ? "xl:border-l xl:border-[#d8e0d2]/45"
                      : ""
                  }
                `}
              >
                {/* premium hover wash */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute
                    inset-[6px]
                    rounded-[19px]

                    bg-[#dce9d0]/0

                    transition-all duration-500

                    group-hover:bg-[#dce9d0]/20
                    group-hover:shadow-[inset_0_0_0_1px_rgba(119,143,95,0.07)]
                  "
                />

                {/* ICON */}
                <div
                  className="
                    relative z-10
                    flex size-[56px]
                    shrink-0 items-center justify-center
                    rounded-full

                    border border-white/90

                    bg-[linear-gradient(145deg,#fbfcf6,#eef4e8)]

                    text-[#58754d]

                    shadow-[0_10px_24px_rgba(70,91,59,0.11),inset_0_0_0_1px_rgba(113,137,93,0.10)]

                    transition-all duration-500

                    group-hover:-translate-y-[1px]
                    group-hover:text-[#3f633b]
                    group-hover:shadow-[0_14px_28px_rgba(70,91,59,0.16),inset_0_0_0_1px_rgba(113,137,93,0.14)]
                  "
                >
                  <Icon
                    size={23}
                    strokeWidth={1.45}
                    aria-hidden="true"
                  />

                  <span
                    aria-hidden="true"
                    className="
                      absolute right-[8px] top-[7px]
                      size-[5px]
                      rounded-full
                      bg-[#c2a668]/0
                      transition-colors duration-500
                      group-hover:bg-[#c2a668]/55
                    "
                  />
                </div>

                {/* TEXT */}
                <div className="relative z-10 min-w-0">
                  <h3
                    className="
                      text-[14px]
                      font-semibold
                      leading-[1.25]
                      tracking-[-0.02em]
                      text-[#302820]

                      transition-colors duration-300

                      group-hover:text-[#172016]

                      md:text-[15px]
                    "
                  >
                    {title}
                  </h3>

                  <p
                    className="
                      mt-2
                      max-w-[170px]
                      text-[11px]
                      leading-[1.55]
                      text-[#71846a]

                      md:text-[12px]
                    "
                  >
                    {detail}
                  </p>
                </div>

                {/* separator dot */}
                {index !== identities.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="
                      absolute -right-[4px] top-1/2 z-30
                      hidden size-[7px]
                      -translate-y-1/2
                      rounded-full
                      border-2 border-[#f8faf3]
                      bg-[#6e9068]
                      shadow-[0_0_0_3px_rgba(110,144,104,0.05)]
                      xl:block
                    "
                  />
                )}

                {/* hover underline */}
                <span
                  aria-hidden="true"
                  className="
                    absolute bottom-[18px]
                    left-[84px]
                    h-px w-0
                    bg-[#78936b]

                    transition-all
                    duration-500
                    ease-out

                    group-hover:w-[54px]

                    md:left-[96px]
                  "
                />
              </motion.div>
            ))}
          </div>

          {/* bottom edge */}
          <div
            aria-hidden="true"
            className="
              absolute bottom-0
              left-[5%] right-[5%]
              h-px

              bg-gradient-to-r
              from-transparent
              via-[#73906a]/60
              to-transparent
            "
          />
        </div>
      </motion.div>

      {/* =====================================================
          HERO → STATISTICS BOTANICAL TRANSITION
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          relative mx-auto
          -mt-px
          h-[150px]
          w-full
          max-w-[1460px]
          overflow-visible
        "
      >
        {/* central glow */}
        <motion.span
          initial={
            reducedMotion
              ? false
              : {
                  opacity: 0,
                  scale: 0.6,
                }
          }
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.65,
            duration: 0.7,
            ease: EASE,
          }}
          className="
            absolute left-1/2 top-[63px]
            z-20 size-[7px]
            -translate-x-1/2
            rounded-full

            bg-[#e7d9a2]

            shadow-[0_0_0_5px_rgba(231,217,162,0.11),0_0_18px_rgba(192,168,95,0.35)]
          "
        />

        <svg
          viewBox="0 0 1200 150"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          {/* central stem */}
          <motion.path
            d="M600 0 C600 25 600 42 600 67"
            fill="none"
            stroke="#718C68"
            strokeWidth="1"
            strokeLinecap="round"
            initial={
              reducedMotion
                ? false
                : {
                    pathLength: 0,
                    opacity: 0,
                  }
            }
            whileInView={{
              pathLength: 1,
              opacity: 0.72,
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: 0.75,
              delay: 0.55,
              ease: EASE,
            }}
          />

          {/* LEFT BRANCH */}
          <motion.path
            d="
              M600 67
              C575 48 550 39 518 35
              C450 27 390 34 330 36
              C250 39 185 36 105 31
            "
            fill="none"
            stroke="#718C68"
            strokeWidth="1"
            strokeLinecap="round"
            initial={
              reducedMotion
                ? false
                : {
                    pathLength: 0,
                    opacity: 0,
                  }
            }
            whileInView={{
              pathLength: 1,
              opacity: 0.68,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.3,
              delay: 0.85,
              ease: EASE,
            }}
          />

          {/* RIGHT BRANCH */}
          <motion.path
            d="
              M600 67
              C625 48 650 39 682 35
              C750 27 810 34 870 36
              C950 39 1015 36 1095 31
            "
            fill="none"
            stroke="#718C68"
            strokeWidth="1"
            strokeLinecap="round"
            initial={
              reducedMotion
                ? false
                : {
                    pathLength: 0,
                    opacity: 0,
                  }
            }
            whileInView={{
              pathLength: 1,
              opacity: 0.68,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.3,
              delay: 0.85,
              ease: EASE,
            }}
          />

          {/* center leaf stem */}
          <motion.path
            d="M600 62 C592 49 588 38 590 26"
            fill="none"
            stroke="#68845F"
            strokeWidth="1"
            strokeLinecap="round"
            initial={
              reducedMotion
                ? false
                : {
                    pathLength: 0,
                  }
            }
            whileInView={{
              pathLength: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 1.15,
              ease: EASE,
            }}
          />

          {/* CENTER LEAF */}
          <motion.path
            d="M590 28 C579 24 575 16 579 10 C590 10 597 17 590 28Z"
            fill="#64835D"
            initial={
              reducedMotion
                ? false
                : {
                    opacity: 0,
                    scale: 0.5,
                  }
            }
            whileInView={{
              opacity: 0.92,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: 1.35,
              ease: EASE,
            }}
          />

          {/* tiny gold leaf */}
          <motion.path
            d="M665 82 C675 75 685 77 689 85 C681 92 672 91 665 82Z"
            fill="#D9C97E"
            initial={
              reducedMotion
                ? false
                : {
                    opacity: 0,
                  }
            }
            whileInView={{
              opacity: 0.55,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 1.65,
            }}
          />

          {/* second tiny leaf */}
          <motion.path
            d="M535 105 C526 99 518 102 515 109 C522 115 530 113 535 105Z"
            fill="#C7D29C"
            initial={
              reducedMotion
                ? false
                : {
                    opacity: 0,
                  }
            }
            whileInView={{
              opacity: 0.5,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 1.85,
            }}
          />
        </svg>

        {/* soft transition atmosphere */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2 top-[60px]
            h-[110px] w-[72%]
            -translate-x-1/2

            bg-[radial-gradient(ellipse_at_center,rgba(205,220,190,0.20),transparent_68%)]

            blur-xl
          "
        />
      </div>
    </div>
  );
}

function BotanicalCorner({
  side,
}: {
  side: "left" | "right";
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 110 130"
      fill="none"
      className={`
        pointer-events-none
        absolute bottom-[-8px]
        h-[110px] w-[92px]
        text-[#B89C5C]
        opacity-[0.22]

        ${side === "left" ? "left-[-7px]" : "right-[-7px] -scale-x-100"}
      `}
    >
      <path
        d="M8 124C20 96 28 68 50 43C65 26 80 16 102 8"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />

      <path
        d="M27 86C13 82 9 70 15 60C29 62 35 72 27 86Z"
        stroke="currentColor"
        strokeWidth="0.75"
      />

      <path
        d="M43 59C31 54 29 43 36 35C48 39 53 49 43 59Z"
        stroke="currentColor"
        strokeWidth="0.75"
      />

      <path
        d="M62 36C54 25 59 15 69 11C77 21 73 31 62 36Z"
        stroke="currentColor"
        strokeWidth="0.75"
      />

      <path
        d="M35 73C45 69 53 72 57 80C48 87 39 84 35 73Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />
    </svg>
  );
}