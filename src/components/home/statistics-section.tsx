"use client";

import { motion, type Variants } from "framer-motion";
import { Award, BookOpen, Leaf, Trophy, Users } from "lucide-react";

const statistics = [
  {
    number: "15+",
    label: "Years of Excellence",
    icon: Award,
  },
  {
    number: "1200+",
    label: "Students Growing",
    icon: BookOpen,
  },
  {
    number: "50+",
    label: "Faculty Members",
    icon: Users,
  },
  {
    number: "25+",
    label: "Achievements",
    icon: Trophy,
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASE,
    },
  },
};

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.075,
      delayChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.992,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: EASE,
    },
  },
};

function FirstGrowthBranch() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1100 280"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      className="pointer-events-none absolute left-1/2 top-[47%] hidden w-[min(92vw,1100px)] -translate-x-1/2 -translate-y-1/2 lg:block"
    >
      {/* First main growth */}
      <motion.path
        d="M45 230C165 222 235 184 342 174C454 164 514 190 615 157C719 123 817 80 1050 68"
        stroke="#77812D"
        strokeOpacity="0.085"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{
          pathLength: 0,
          opacity: 0,
        }}
        whileInView={{
          pathLength: 1,
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          pathLength: {
            duration: 1.25,
            ease: EASE,
          },
          opacity: {
            duration: 0.45,
          },
        }}
      />

      {/* Early branch */}
      <motion.path
        d="M342 174C316 146 301 119 299 91"
        stroke="#77812D"
        strokeOpacity="0.07"
        strokeWidth="1.2"
        strokeLinecap="round"
        initial={{
          pathLength: 0,
          opacity: 0,
        }}
        whileInView={{
          pathLength: 1,
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          pathLength: {
            duration: 0.65,
            delay: 0.65,
            ease: EASE,
          },
          opacity: {
            duration: 0.3,
            delay: 0.65,
          },
        }}
      />

      {/* Second early branch */}
      <motion.path
        d="M615 157C645 137 662 114 668 88"
        stroke="#77812D"
        strokeOpacity="0.065"
        strokeWidth="1.15"
        strokeLinecap="round"
        initial={{
          pathLength: 0,
          opacity: 0,
        }}
        whileInView={{
          pathLength: 1,
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          pathLength: {
            duration: 0.6,
            delay: 0.82,
            ease: EASE,
          },
          opacity: {
            duration: 0.3,
            delay: 0.82,
          },
        }}
      />

      {/* Tiny first leaves */}
      <motion.path
        d="M299 92C284 76 286 58 300 48C314 61 314 78 299 92Z"
        fill="#A2AA5A"
        fillOpacity="0.075"
        initial={{
          opacity: 0,
          scale: 0.96,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          delay: 1.05,
          ease: EASE,
        }}
        style={{
          transformOrigin: "299px 92px",
        }}
      />

      <motion.path
        d="M668 89C682 72 700 73 710 87C697 101 680 101 668 89Z"
        fill="#A2AA5A"
        fillOpacity="0.07"
        initial={{
          opacity: 0,
          scale: 0.96,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          delay: 1.15,
          ease: EASE,
        }}
        style={{
          transformOrigin: "668px 89px",
        }}
      />
    </svg>
  );
}

function GrowthLeaf({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute opacity-0 transition-[opacity,transform] duration-300 ease-out group-hover:opacity-100 ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      <svg
        viewBox="0 0 18 14"
        fill="none"
        className="h-full w-full"
      >
        <path
          d="M2 12C6.5 11.2 9.3 8.6 11.1 4"
          stroke="#77812D"
          strokeOpacity="0.34"
          strokeWidth="0.9"
          strokeLinecap="round"
        />

        <path
          d="M10.7 4.3C12.4 1.2 15.8 1 17 3.2C15.2 6 12.5 6.3 10.7 4.3Z"
          fill="#E4E8C5"
          stroke="#77812D"
          strokeOpacity="0.38"
          strokeWidth="0.7"
        />
      </svg>
    </span>
  );
}

export function StatisticsSection() {
  return (
    <section className="relative overflow-hidden bg-[#fffdf8] py-14 sm:py-16 lg:py-20">
      {/* Warm atmospheric depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(154,163,66,0.045)_0%,rgba(154,163,66,0)_70%)] blur-[80px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(107,53,31,0.032)_0%,rgba(107,53,31,0)_70%)] blur-[85px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[34%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(135,145,58,0.025)_0%,rgba(135,145,58,0)_72%)]"
      />

      {/* Growth Journey: First Growth */}
      <FirstGrowthBranch />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.4,
          }}
          className="mb-9 text-center sm:mb-11"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#7b8530]/35" />

            <motion.span
              aria-hidden="true"
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: 0.15,
                ease: EASE,
              }}
            >
              <Leaf
                size={15}
                strokeWidth={1.6}
                className="-rotate-[18deg] text-[#7b8530]"
              />
            </motion.span>

            <span className="h-px w-9 bg-[#7b8530]/35" />
          </div>

          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#747d2c]">
            Growing Together
          </p>

          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#20150f] sm:text-4xl">
            Our Growth in Numbers
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#756a62] sm:text-[15px]">
            Nurturing progress, learning and excellence year after year.
          </p>
        </motion.div>

        {/* Statistics cards */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.18,
          }}
          className="relative grid grid-cols-2 gap-3.5 sm:gap-5 lg:grid-cols-4 lg:gap-6"
        >
          {statistics.map((stat) => {
            const Icon = stat.icon;

            return (
              <motion.article
                key={stat.label}
                variants={cardVariants}
                whileHover={{
                  y: -3,
                  transition: {
                    duration: 0.25,
                    ease: EASE,
                  },
                }}
                className="group relative min-h-[172px] overflow-hidden rounded-[22px] border border-[#ded9ca]/80 bg-[#fffefb]/95 p-5 shadow-[0_10px_35px_rgba(72,52,35,0.045)] transition-[border-color,box-shadow] duration-300 hover:border-[#a7ad68]/55 hover:shadow-[0_18px_45px_rgba(75,48,29,0.085)] sm:min-h-[190px] sm:p-6 lg:p-7"
              >
                {/* Organic corner */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-14 h-28 w-28 rounded-full border border-[#939b43]/[0.09] transition-[transform,border-color] duration-300 ease-out group-hover:scale-[1.035] group-hover:border-[#939b43]/[0.15]"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-7 -top-8 h-20 w-20 rounded-full bg-[#a6ad52]/[0.04] blur-xl transition-opacity duration-300 group-hover:opacity-90"
                />

                {/* Small organic growth on hover */}
                <GrowthLeaf
                  className="right-[18px] top-[17px] h-[14px] w-[18px] translate-x-1 scale-[0.96] group-hover:translate-x-0 group-hover:scale-100"
                />

                <GrowthLeaf
                  delay={55}
                  className="right-[38px] top-[31px] h-[11px] w-[14px] translate-x-1 translate-y-0.5 scale-[0.96] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100"
                />

                <div className="relative flex h-full flex-col">
                  {/* Icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-[15px] border border-[#dfe2bd]/90 bg-[#f5f6df] text-[#737c29] transition-[transform,border-color,background-color,box-shadow] duration-300 ease-out group-hover:scale-[1.03] group-hover:border-[#ccd18f] group-hover:bg-[#f2f4d4] group-hover:shadow-[0_5px_14px_rgba(115,124,41,0.07)]">
                    <Icon
                      size={20}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Number */}
                  <div className="mt-auto pt-7 sm:pt-8">
                    <p className="text-[31px] font-semibold leading-none tracking-[-0.05em] text-[#201712] sm:text-[38px]">
                      {stat.number}
                    </p>

                    <p className="mt-2 text-xs font-medium leading-5 text-[#70665e] sm:text-[13px]">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Growth continues into the next chapter */}
        <div
          aria-hidden="true"
          className="mt-12 flex items-center justify-center gap-3 opacity-55 sm:mt-14"
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#858e35]/45" />

          <Leaf
            size={13}
            strokeWidth={1.5}
            className="-rotate-12 text-[#737c29]"
          />

          <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#858e35]/45" />
        </div>
      </div>
    </section>
  );
}