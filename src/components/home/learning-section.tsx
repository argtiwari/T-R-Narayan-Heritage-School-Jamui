"use client";

import Image from "next/image";
import {
  Binary,
  BookOpenText,
  ChevronDown,
  FlaskConical,
  Languages,
} from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const learningAreas = [
  {
    verb: "Explore",
    title: "Science & Discovery",
    description:
      "Hands-on experiments and real-world exploration spark curiosity and deepen understanding.",
    icon: FlaskConical,
  },
  {
    verb: "Think",
    title: "Mathematics & Reasoning",
    description:
      "Logical thinking and problem solving build confidence to approach any challenge with clarity.",
    icon: Binary,
  },
  {
    verb: "Express",
    title: "Languages & Communication",
    description:
      "Strong language skills help children articulate ideas, listen with empathy and connect with the world.",
    icon: Languages,
  },
  {
    verb: "Create",
    title: "Technology & Arts",
    description:
      "Creativity and technology empower learners to imagine, design and bring ideas to life.",
    icon: BookOpenText,
  },
] as const;

/* -------------------------------------------------------------------------- */
/*                                  MOTION                                    */
/* -------------------------------------------------------------------------- */

const revealUp: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.68,
      ease: EASE,
    },
  },
};

const revealLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -16,
    y: 8,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.72,
      ease: EASE,
    },
  },
};

const revealRight: Variants = {
  hidden: {
    opacity: 0,
    x: 16,
    y: 8,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.72,
      ease: EASE,
    },
  },
};

const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.82,
      ease: EASE,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                              EDITORIAL LABEL                               */
/* -------------------------------------------------------------------------- */

function EditorialLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="font-serif text-[11px] font-semibold tracking-[0.18em] text-[#687322]">
        {number}
      </span>

      <span
        aria-hidden="true"
        className="h-px w-7 bg-gradient-to-r from-[#77812d]/55 to-transparent"
      />

      <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#697126] sm:text-[10px]">
        {children}
      </span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                           LIVING ORGANIC BRANCH                            */
/* -------------------------------------------------------------------------- */

function FlourishingBranch() {
  const shouldReduceMotion = useReducedMotion();

  const branchMotion = shouldReduceMotion
    ? {}
    : {
        initial: {
          pathLength: 0,
          opacity: 0,
        },
        whileInView: {
          pathLength: 1,
          opacity: 1,
        },
        viewport: {
          once: true,
          amount: 0.05,
        },
      };

  const leafMotion = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: {
            opacity: 0,
            scale: 0.96,
          },
          whileInView: {
            opacity: 1,
            scale: 1,
          },
          viewport: {
            once: true,
            amount: 0.1,
          },
          transition: {
            duration: 0.55,
            delay,
            ease: EASE,
          },
        };

  return (
    <>
      {/* Desktop living branch */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[5%] left-1/2 top-[7%] z-0 hidden w-[460px] -translate-x-1/2 lg:block xl:w-[520px]"
      >
        <svg
          viewBox="0 0 520 2050"
          preserveAspectRatio="none"
          fill="none"
          className="h-full w-full overflow-visible"
        >
          {/* Main stem */}
          <motion.path
            d="
              M260 -20
              C272 112 220 188 232 320
              C244 448 298 510 275 640
              C254 756 200 820 216 950
              C231 1074 298 1145 274 1276
              C253 1398 206 1464 222 1586
              C238 1704 291 1798 268 2070
            "
            stroke="#747D2C"
            strokeOpacity="0.19"
            strokeWidth="1.7"
            strokeLinecap="round"
            {...branchMotion}
            transition={{
              pathLength: {
                duration: 2.5,
                ease: EASE,
              },
              opacity: {
                duration: 0.45,
              },
            }}
          />

          {/* Wonder branch */}
          <motion.path
            d="
              M232 320
              C197 297 170 264 154 225
              C143 199 141 174 147 151
            "
            stroke="#747D2C"
            strokeOpacity="0.16"
            strokeWidth="1.25"
            strokeLinecap="round"
            {...branchMotion}
            transition={{
              duration: 0.85,
              delay: 0.42,
              ease: EASE,
            }}
          />

          <motion.path
            d="M176 258C153 247 135 230 124 207"
            stroke="#747D2C"
            strokeOpacity="0.1"
            strokeWidth="1"
            strokeLinecap="round"
            {...branchMotion}
            transition={{
              duration: 0.55,
              delay: 0.7,
              ease: EASE,
            }}
          />

          {/* Guidance branch */}
          <motion.path
            d="
              M275 640
              C316 611 346 575 360 530
              C367 507 367 485 363 464
            "
            stroke="#747D2C"
            strokeOpacity="0.17"
            strokeWidth="1.3"
            strokeLinecap="round"
            {...branchMotion}
            transition={{
              duration: 0.85,
              delay: 0.78,
              ease: EASE,
            }}
          />

          <motion.path
            d="M334 559C359 548 379 531 392 508"
            stroke="#747D2C"
            strokeOpacity="0.1"
            strokeWidth="1"
            strokeLinecap="round"
            {...branchMotion}
            transition={{
              duration: 0.55,
              delay: 1,
              ease: EASE,
            }}
          />

          {/* Mid growth */}
          <motion.path
            d="
              M216 950
              C177 924 147 890 131 848
              C122 824 121 802 126 780
            "
            stroke="#747D2C"
            strokeOpacity="0.16"
            strokeWidth="1.25"
            strokeLinecap="round"
            {...branchMotion}
            transition={{
              duration: 0.85,
              delay: 1.08,
              ease: EASE,
            }}
          />

          {/* Discovery branch */}
          <motion.path
            d="
              M274 1276
              C316 1245 346 1208 360 1162
              C368 1138 368 1115 364 1093
            "
            stroke="#747D2C"
            strokeOpacity="0.17"
            strokeWidth="1.3"
            strokeLinecap="round"
            {...branchMotion}
            transition={{
              duration: 0.85,
              delay: 1.32,
              ease: EASE,
            }}
          />

          {/* Lower flourishing branches */}
          <motion.path
            d="
              M222 1586
              C181 1558 150 1520 134 1475
              C126 1452 125 1430 129 1408
            "
            stroke="#747D2C"
            strokeOpacity="0.17"
            strokeWidth="1.25"
            strokeLinecap="round"
            {...branchMotion}
            transition={{
              duration: 0.85,
              delay: 1.58,
              ease: EASE,
            }}
          />

          <motion.path
            d="
              M268 1830
              C316 1802 357 1770 392 1725
              C412 1698 424 1670 428 1642
            "
            stroke="#747D2C"
            strokeOpacity="0.18"
            strokeWidth="1.3"
            strokeLinecap="round"
            {...branchMotion}
            transition={{
              duration: 0.9,
              delay: 1.75,
              ease: EASE,
            }}
          />

          {/* Leaves */}
          {[
            {
              d: "M147 151C123 134 120 106 139 89C159 106 162 133 147 151Z",
              origin: "147px 151px",
              delay: 0.76,
            },
            {
              d: "M124 207C104 191 82 197 77 219C97 230 116 224 124 207Z",
              origin: "124px 207px",
              delay: 0.9,
            },
            {
              d: "M363 464C386 445 412 453 419 477C397 490 375 485 363 464Z",
              origin: "363px 464px",
              delay: 1.05,
            },
            {
              d: "M392 508C411 492 433 497 439 518C420 530 402 526 392 508Z",
              origin: "392px 508px",
              delay: 1.18,
            },
            {
              d: "M126 780C104 763 80 770 75 794C97 806 117 800 126 780Z",
              origin: "126px 780px",
              delay: 1.32,
            },
            {
              d: "M364 1093C387 1075 413 1083 419 1107C397 1120 375 1114 364 1093Z",
              origin: "364px 1093px",
              delay: 1.55,
            },
            {
              d: "M129 1408C107 1391 83 1398 78 1422C100 1434 120 1428 129 1408Z",
              origin: "129px 1408px",
              delay: 1.78,
            },
            {
              d: "M428 1642C449 1624 473 1631 480 1654C459 1667 439 1661 428 1642Z",
              origin: "428px 1642px",
              delay: 1.98,
            },
          ].map((leaf) => (
            <motion.path
              key={leaf.d}
              d={leaf.d}
              fill="#E9ECD0"
              fillOpacity="0.66"
              stroke="#747D2C"
              strokeOpacity="0.34"
              strokeWidth="0.8"
              style={{
                transformOrigin: leaf.origin,
              }}
              {...leafMotion(leaf.delay)}
            />
          ))}

          {/* Tiny growth nodes */}
          {[
            [232, 320],
            [275, 640],
            [216, 950],
            [274, 1276],
            [222, 1586],
          ].map(([cx, cy]) => (
            <circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r="2.7"
              fill="#747D2C"
              fillOpacity="0.18"
            />
          ))}
        </svg>
      </div>

      {/* Mobile branch */}
      <svg
        aria-hidden="true"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        className="pointer-events-none absolute right-0 top-[15%] z-0 h-[68%] w-16 text-[#747D2C] opacity-[0.1] sm:w-20 lg:hidden"
        fill="none"
      >
        <path
          d="M95 0C66 130 92 228 70 345C51 447 73 542 57 650C46 734 58 840 28 1000"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
        />

        <path
          d="M70 345C48 330 33 307 26 280"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />

        <path
          d="M57 650C75 629 85 604 87 576"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />

        <path
          d="M26 280C12 270 5 254 4 237"
          stroke="currentColor"
          strokeWidth=".8"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*                           EDITORIAL PHOTO FRAME                            */
/* -------------------------------------------------------------------------- */

function LearningImage({
  src,
  alt,
  ratio,
  sizes,
  position = "object-center",
  className = "",
}: {
  src: string;
  alt: string;
  ratio: "3/2" | "4/3";
  sizes: string;
  position?: string;
  className?: string;
}) {
  return (
    <div className={`group relative ${className}`}>
      {/* Ambient paper depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-7 -z-10 rounded-[44px] bg-[radial-gradient(circle_at_center,rgba(126,137,53,0.07),rgba(126,137,53,0)_68%)] blur-2xl"
      />

      {/* Outer editorial paper */}
      <figure className="relative rounded-[25px] bg-[#fffdf7] p-[3px] shadow-[0_24px_60px_rgba(67,48,31,0.09),0_4px_14px_rgba(67,48,31,0.045)] sm:rounded-[29px]">
        {/* Olive hairline */}
        <div className="relative overflow-hidden rounded-[22px] border border-[#a8aa73]/40 bg-[#eee9df] p-[2px] sm:rounded-[26px]">
          {/* Inner ivory matte */}
          <div
            className={`relative w-full overflow-hidden rounded-[19px] bg-[#f5f0e5] sm:rounded-[23px] ${
              ratio === "3/2" ? "aspect-[3/2]" : "aspect-[4/3]"
            }`}
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes}
              className={`object-cover ${position} transition-transform duration-700 ease-out group-hover:scale-[1.008]`}
            />

            {/* Extremely light photographic warmth */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,250,238,0.015),rgba(65,43,28,0.025))]"
            />
          </div>
        </div>

        {/* Handcrafted corner */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[5px] right-8 h-px w-14 bg-gradient-to-r from-transparent via-[#7b8530]/30 to-transparent"
        />
      </figure>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                            ACADEMIC DIRECTIONS                             */
/* -------------------------------------------------------------------------- */

function AcademicAreas() {
  return (
    <div className="relative mx-auto max-w-[1180px]">
      <motion.div
        variants={revealUp}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.4,
        }}
        className="mx-auto max-w-[690px] text-center"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#6f7828] sm:text-[11px]">
          Learning takes many directions
        </p>

        <h3 className="mt-4 text-balance text-[31px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#21170f] sm:text-[38px] lg:text-[42px]">
          Different paths.{" "}
          <span className="text-[#68751c]">One love for learning.</span>
        </h3>
      </motion.div>

      <div className="relative mt-10 overflow-hidden rounded-[18px] border border-[#d9d4c0]/75 bg-[#fffdf8]/45 sm:mt-12 lg:rounded-[20px]">
        {/* Quiet branch passing behind academic areas */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1180 220"
          preserveAspectRatio="none"
          fill="none"
          className="pointer-events-none absolute inset-0 h-full w-full text-[#747D2C] opacity-[0.065]"
        >
          <path
            d="M-20 185C170 150 310 188 470 126C630 64 755 77 905 118C1008 146 1090 130 1210 72"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />

          <path
            d="M470 126C442 102 425 78 419 52"
            stroke="currentColor"
            strokeWidth="1"
          />

          <path
            d="M905 118C930 95 946 71 950 47"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {learningAreas.map(
            ({ verb, title, description, icon: Icon }, index) => (
              <motion.article
                key={verb}
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                  ease: EASE,
                }}
                className={[
                  "group relative min-h-[205px] px-5 py-7 sm:min-h-[220px] sm:px-6 lg:min-h-[235px] lg:px-7 lg:py-8",
                  index > 0
                    ? "border-t border-[#ded9ca]/70 sm:border-t-0"
                    : "",
                  index === 1
                    ? "sm:border-l sm:border-[#ded9ca]/70"
                    : "",
                  index === 2
                    ? "lg:border-l lg:border-[#ded9ca]/70"
                    : "",
                  index === 3
                    ? "sm:border-l sm:border-[#ded9ca]/70"
                    : "",
                ].join(" ")}
              >
                <div className="flex items-start gap-4">
                  <div className="relative flex size-11 shrink-0 items-center justify-center rounded-full border border-[#d8dcb8] bg-[#f5f6df]/85 text-[#6e7827] shadow-[0_5px_14px_rgba(89,92,39,0.035)] transition-all duration-300 group-hover:border-[#bec58b] group-hover:bg-[#f0f2d5]">
                    <Icon
                      size={18}
                      strokeWidth={1.45}
                      aria-hidden="true"
                    />

                    <span
                      aria-hidden="true"
                      className="absolute -right-1 top-0 size-[7px] scale-[0.96] rounded-full bg-[#7a8430]/0 transition-all duration-300 group-hover:scale-100 group-hover:bg-[#7a8430]/25"
                    />
                  </div>

                  <div className="pt-0.5">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.27em] text-[#707a28] sm:text-[10px]">
                      {verb}
                    </p>

                    <h4 className="mt-1.5 max-w-[190px] text-[14px] font-semibold leading-[1.55] text-[#3e342b]">
                      {title}
                    </h4>
                  </div>
                </div>

                <p className="mt-6 max-w-[235px] text-[12px] leading-[1.75] text-[#756a60] sm:text-[13px]">
                  {description}
                </p>

                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-5 h-px w-0 bg-gradient-to-r from-[#77812d]/50 to-transparent transition-all duration-500 group-hover:w-16 sm:left-6 lg:left-7"
                />
              </motion.article>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                        STUDENT LIFE TRANSITION                             */
/* -------------------------------------------------------------------------- */

function StudentLifeTransition() {
  return (
    <div className="relative mt-6 overflow-hidden pt-8 sm:mt-8 sm:pt-10 lg:mt-10 lg:pt-12">
      {/* Organic curved atmosphere */}
      <div
        aria-hidden="true"
        className="absolute inset-x-[-10%] bottom-[-120px] h-[260px] rounded-[50%] bg-[#eff1d8]/65 sm:bottom-[-150px] sm:h-[320px]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-[-15%] bottom-[-155px] h-[270px] rounded-[50%] border-t border-[#8b923c]/20 sm:bottom-[-190px] sm:h-[340px]"
      />

      {/* Flourishing exit branch */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 190"
        preserveAspectRatio="none"
        fill="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[150px] w-full sm:h-[180px]"
      >
        <path
          d="M-30 146C165 190 278 145 408 116C552 84 674 95 803 126C936 158 1062 159 1181 123C1287 91 1365 89 1470 120"
          stroke="#747D2C"
          strokeOpacity=".24"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <path
          d="M408 116C376 91 355 64 348 37"
          stroke="#747D2C"
          strokeOpacity=".2"
          strokeWidth="1.1"
          strokeLinecap="round"
        />

        <path
          d="M803 126C828 100 842 74 844 48"
          stroke="#747D2C"
          strokeOpacity=".2"
          strokeWidth="1.1"
          strokeLinecap="round"
        />

        <path
          d="M1181 123C1152 101 1133 76 1128 50"
          stroke="#747D2C"
          strokeOpacity=".2"
          strokeWidth="1.1"
          strokeLinecap="round"
        />

        {[
          "M348 38C325 20 300 28 295 51C317 63 338 58 348 38Z",
          "M844 48C867 29 893 36 900 60C878 73 856 68 844 48Z",
          "M1128 50C1105 32 1080 39 1075 62C1097 75 1118 69 1128 50Z",
          "M265 144C244 126 220 132 214 154C235 167 255 162 265 144Z",
          "M1280 105C1301 86 1325 91 1333 113C1313 127 1292 123 1280 105Z",
        ].map((d) => (
          <path
            key={d}
            d={d}
            fill="#E3E7BE"
            fillOpacity=".68"
            stroke="#747D2C"
            strokeOpacity=".32"
            strokeWidth=".8"
          />
        ))}
      </svg>

      <motion.div
        variants={revealUp}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.5,
        }}
        className="relative z-10 mx-auto flex max-w-[650px] flex-col items-center px-5 pb-9 text-center sm:pb-11"
      >
        <p className="text-[17px] font-semibold tracking-[-0.025em] text-[#5f6c1c] sm:text-[19px]">
          The journey of learning continues.
        </p>

        <p className="mt-2 text-[13px] leading-6 text-[#6f665c] sm:text-sm">
          Discover how students grow beyond the classroom.
        </p>

        <div
          aria-hidden="true"
          className="mt-5 flex size-8 items-center justify-center rounded-full border border-[#909744]/35 bg-[#faf9ef]/70 text-[#687322]"
        >
          <ChevronDown size={15} strokeWidth={1.5} />
        </div>
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              LEARNING SECTION                              */
/* -------------------------------------------------------------------------- */

export function LearningSection() {
  return (
    <section
      aria-labelledby="learning-heading"
      className="relative isolate overflow-hidden bg-[#fdfbf5]"
    >
      {/* WCU → Learning continuity */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(244,246,231,0.5)_0%,rgba(253,251,245,0)_100%)] sm:h-32"
      />

      {/* Calm atmospheric depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-[20%] top-[3%] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(126,137,53,0.05),transparent_69%)]" />

        <div className="absolute -right-[22%] top-[31%] h-[720px] w-[720px] rounded-full bg-[radial-gradient(circle,rgba(111,78,53,0.032),transparent_70%)]" />

        <div className="absolute left-[9%] top-[57%] h-[680px] w-[680px] rounded-full bg-[radial-gradient(circle,rgba(134,145,63,0.043),transparent_70%)]" />

        <div className="absolute inset-x-0 bottom-0 h-[540px] bg-[linear-gradient(180deg,rgba(248,246,235,0),rgba(241,244,224,0.34))]" />
      </div>

      <FlourishingBranch />

      <div className="relative z-10 mx-auto max-w-[1480px] px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8 lg:pt-1">
        {/* Intro */}
        <motion.header
          variants={revealUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.55,
          }}
          className="mx-auto max-w-[800px] text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#77812d]/45 sm:w-11" />

            <svg
              aria-hidden="true"
              viewBox="0 0 32 18"
              fill="none"
              className="h-[18px] w-8"
            >
              <path
                d="M2 15C9 14 13 10 16 4"
                stroke="#747D2C"
                strokeOpacity=".58"
                strokeWidth="1"
                strokeLinecap="round"
              />

              <path
                d="M15.5 4.4C18.2.8 22.8.8 25.3 4C22.4 7.4 18.4 7.3 15.5 4.4Z"
                fill="#E7EACD"
                stroke="#747D2C"
                strokeOpacity=".65"
                strokeWidth=".8"
              />
            </svg>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#77812d]/45 sm:w-11" />
          </div>

          <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#687322] sm:text-[11px]">
            Learning at TR Narayan
          </p>

          <h2
            id="learning-heading"
            className="mx-auto mt-5 max-w-[780px] text-balance text-[39px] font-semibold leading-[1.04] tracking-[-0.047em] text-[#21170f] sm:text-[50px] lg:text-[58px]"
          >
            Where curiosity becomes{" "}
            <span className="text-[#68751c]">understanding.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[610px] text-[15px] leading-[1.82] text-[#6d6258] sm:text-base">
            We create space for children to question, explore and discover,
            turning everyday curiosity into meaningful understanding.
          </p>
        </motion.header>

        {/* 01 — WONDER */}
        <article className="relative mx-auto mt-12 max-w-[1280px] sm:mt-14 lg:mt-16">
          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.22,
            }}
            className="relative ml-auto w-full lg:w-[84%]"
          >
            <LearningImage
              src="/images/learning/learning-wonder.webp"
              alt="TR Narayan students actively learning together during a classroom activity"
              ratio="3/2"
              sizes="(max-width: 1023px) 94vw, 1120px"
            />

            {/* Botanical annotation */}
            <svg
              aria-hidden="true"
              viewBox="0 0 80 80"
              fill="none"
              className="pointer-events-none absolute -left-7 -top-7 hidden size-20 text-[#747D2C] opacity-[0.12] sm:block"
            >
              <path
                d="M42 76C39 56 42 40 53 25"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path
                d="M52 26C36 17 34 5 43 1C57 7 61 18 52 26Z"
                fill="#E8EBCF"
                stroke="currentColor"
                strokeWidth=".7"
              />
            </svg>
          </motion.div>

          <motion.div
            variants={revealLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.35,
            }}
            className="relative z-20 -mt-7 ml-2 max-w-[490px] rounded-[20px] border border-[#d9d2b7]/85 bg-[#fffdf8]/95 p-6 shadow-[0_18px_50px_rgba(68,49,31,0.085)] sm:-mt-14 sm:ml-8 sm:p-8 lg:absolute lg:-bottom-10 lg:left-0 lg:ml-0 lg:p-9"
          >
            <EditorialLabel number="01">Wonder</EditorialLabel>

            <h3 className="text-[28px] font-semibold leading-[1.08] tracking-[-0.038em] text-[#21170f] sm:text-[34px]">
              Learning begins with a{" "}
              <span className="text-[#68751c]">question.</span>
            </h3>

            <p className="mt-4 max-w-[420px] text-[15px] leading-[1.82] text-[#6d6258] sm:text-base">
              Children learn deeply when they are free to ask why, test ideas
              and experience the joy of discovering something for themselves.
            </p>

            <span
              aria-hidden="true"
              className="absolute bottom-0 left-8 h-px w-16 bg-gradient-to-r from-[#77812d]/40 to-transparent"
            />
          </motion.div>
        </article>

        {/* 02 — GUIDANCE */}
        <article className="relative mx-auto mt-24 grid max-w-[1160px] items-center gap-9 sm:mt-28 lg:mt-32 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          <motion.div
            variants={revealLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className="order-2 max-w-[470px] lg:order-1 lg:pl-6"
          >
            <EditorialLabel number="02">Guidance</EditorialLabel>

            <h3 className="text-balance text-[30px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#21170f] sm:text-[36px] lg:text-[40px]">
              Guided with care,{" "}
              <span className="text-[#68751c]">never rushed.</span>
            </h3>

            <p className="mt-5 max-w-[430px] text-[15px] leading-[1.82] text-[#6d6258] sm:text-base">
              Our teachers listen, encourage and guide. Children gain the
              confidence to try, make mistakes, think again and gradually find
              their own way forward.
            </p>
          </motion.div>

          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.22,
            }}
            className="order-1 ml-auto w-full lg:order-2 lg:w-[91%]"
          >
            <LearningImage
              src="/images/learning/learning-guidance.webp"
              alt="Teacher guiding TR Narayan students during an engaging learning activity"
              ratio="4/3"
              sizes="(max-width: 1023px) 94vw, 680px"
            />
          </motion.div>
        </article>

        {/* 03 — DISCOVERY */}
        <article className="relative mx-auto mt-20 max-w-[1180px] sm:mt-24 lg:mt-28">
          <div className="grid items-end gap-8 lg:grid-cols-[1.14fr_0.86fr] lg:gap-14">
            <motion.div
              variants={imageReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.22,
              }}
              className="relative"
            >
              <LearningImage
                src="/images/learning/learning-discovery.webp"
                alt="TR Narayan students exploring a practical learning activity through observation and discovery"
                ratio="4/3"
                sizes="(max-width: 1023px) 94vw, 690px"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-7 -right-7 hidden size-28 rounded-full border border-[#7b8530]/[0.1] sm:block"
              />
            </motion.div>

            <motion.div
              variants={revealRight}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              className="max-w-[470px] pb-2 lg:pb-7"
            >
              <EditorialLabel number="03">Discovery</EditorialLabel>

              <h3 className="text-balance text-[30px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#21170f] sm:text-[36px] lg:text-[40px]">
                Understanding grows{" "}
                <span className="text-[#68751c]">through discovery.</span>
              </h3>

              <p className="mt-5 max-w-[430px] text-[15px] leading-[1.82] text-[#6d6258] sm:text-base">
                Through observation, experimentation, reading and
                collaboration, ideas move beyond the page and become knowledge
                children can truly understand and use.
              </p>
            </motion.div>
          </div>
        </article>

        {/* Academic pathways */}
        <div className="mt-20 sm:mt-24 lg:mt-28">
          <AcademicAreas />
        </div>
      </div>

      <StudentLifeTransition />
    </section>
  );
}