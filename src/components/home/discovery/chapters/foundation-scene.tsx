"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Languages,
  Snowflake,
  ArrowDown,
} from "lucide-react";

import { discoveryChapters } from "../discovery-data";

const EASE = [0.22, 1, 0.36, 1] as const;

const milestoneIcons = [
  BookOpen,
  Languages,
  Snowflake,
];

export default function FoundationScene() {
  const chapter = discoveryChapters.find(
    (item) => item.id === "foundation"
  );

  if (!chapter) return null;

  return (
    <section
      id="foundation"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#F8F6EE]
        text-[#30221C]
      "
    >
      {/* =====================================================
          ATMOSPHERE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          bg-[radial-gradient(circle_at_72%_30%,rgba(198,216,184,0.24),transparent_32%),radial-gradient(circle_at_8%_82%,rgba(215,224,199,0.18),transparent_30%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.13]
          [background-image:radial-gradient(rgba(75,91,63,0.2)_0.5px,transparent_0.5px)]
          [background-size:9px_9px]
        "
      />

      {/* =====================================================
          DECORATIVE BOTANICAL CONTOUR
      ====================================================== */}

      <svg
        aria-hidden="true"
        viewBox="0 0 700 900"
        className="
          pointer-events-none
          absolute
          -right-[190px]
          top-[6%]
          h-[90%]
          w-[52%]
          text-[#718963]
          opacity-[0.075]
          lg:-right-[100px]
        "
        fill="none"
      >
        <path
          d="
            M610 30
            C520 130 525 205 445 280
            C375 345 330 365 300 450
            C270 535 340 600 280 690
            C230 765 145 800 75 870
          "
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />

        <path
          d="
            M445 280
            C400 245 360 250 325 278
            C358 304 401 306 445 280Z
          "
          stroke="currentColor"
          strokeWidth="1"
        />

        <path
          d="
            M300 450
            C345 410 385 415 418 445
            C378 474 340 472 300 450Z
          "
          stroke="currentColor"
          strokeWidth="1"
        />

        <path
          d="
            M280 690
            C235 650 193 658 160 695
            C204 720 243 716 280 690Z
          "
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>

      {/* =====================================================
          MAIN COMPOSITION
      ====================================================== */}

      <div
        className="
          relative z-10
          mx-auto
          flex min-h-screen
          w-full max-w-[1540px]
          flex-col
          justify-center
          px-6
          py-20
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* ===================================================
            HEADER
        ==================================================== */}

        <div className="mb-12 max-w-[760px] lg:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              ease: EASE,
            }}
            className="
              mb-5
              flex items-center gap-4
            "
          >
            <span
              className="
                font-mono
                text-[10px]
                tracking-[0.28em]
                text-[#A08C49]
              "
            >
              {chapter.number}
            </span>

            <span className="h-px w-10 bg-[#8EA27F]/60" />

            <span
              className="
                text-[10px]
                font-semibold uppercase
                tracking-[0.3em]
                text-[#6F8064]
              "
            >
              {chapter.eyebrow}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.95,
              delay: 0.08,
              ease: EASE,
            }}
            className="
              max-w-[720px]
              font-serif
              text-[42px]
              leading-[1.02]
              tracking-[-0.045em]
              sm:text-[52px]
              lg:text-[64px]
              xl:text-[70px]
            "
          >
            Strong beginnings shape{" "}
            <span className="text-[#657E48]">
              everything that follows.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.22,
              ease: EASE,
            }}
            className="
              mt-6
              max-w-[610px]
              text-[15px]
              leading-7
              text-[#6E746A]
              sm:text-[16px]
            "
          >
            {chapter.description}
          </motion.p>
        </div>

        {/* ===================================================
            CONTENT GRID
        ==================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-10
            lg:grid-cols-[1.08fr_0.92fr]
            lg:items-end
            lg:gap-16
          "
        >
          {/* =================================================
              VISUAL / SCHOOL PHOTO PLACEHOLDER
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: EASE,
            }}
            className="
              relative
              overflow-hidden
              rounded-[34px]
              border
              border-[#B8C8AF]/40
              bg-[#EAF0E4]
              shadow-[0_30px_90px_rgba(68,85,56,0.10)]
              aspect-[16/10]
              lg:aspect-[1.25/1]
            "
          >
            {/* soft photo-like atmosphere */}
            <div
              className="
                absolute inset-0
                bg-[radial-gradient(circle_at_30%_30%,rgba(220,231,211,0.95),transparent_32%),linear-gradient(145deg,#EEF3E9_0%,#DDE8D7_48%,#F5F0E6_100%)]
              "
            />

            {/* architectural contour */}
            <svg
              aria-hidden="true"
              viewBox="0 0 900 650"
              className="
                absolute inset-0
                h-full w-full
                text-[#617957]
                opacity-[0.17]
              "
              fill="none"
            >
              <path
                d="
                  M95 525
                  L95 255
                  L270 145
                  L460 255
                  L460 525
                "
                stroke="currentColor"
                strokeWidth="2"
              />

              <path
                d="
                  M270 145
                  L270 525
                  M460 255
                  L640 160
                  L810 255
                  L810 525
                "
                stroke="currentColor"
                strokeWidth="1.3"
              />

              <path
                d="
                  M145 310
                  H225
                  V525

                  M310 310
                  H390
                  V525

                  M515 310
                  H595
                  V525

                  M680 310
                  H760
                  V525
                "
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>

            {/* subtle sunlight */}
            <motion.div
              initial={{ x: "-120%" }}
              animate={{ x: "120%" }}
              transition={{
                duration: 2.8,
                delay: 1,
                ease: "easeInOut",
              }}
              className="
                absolute
                -top-[30%]
                h-[170%]
                w-[22%]
                rotate-[16deg]
                bg-gradient-to-r
                from-transparent
                via-white/25
                to-transparent
                blur-2xl
              "
            />

            {/* editorial photo label */}
            <div
              className="
                absolute
                bottom-6
                left-6
                right-6
                flex
                items-end
                justify-between
                border-t
                border-white/45
                pt-4
              "
            >
              <div>
                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-[#687B5E]
                  "
                >
                  Foundation
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    text-[#34432F]
                  "
                >
                  A place to begin well.
                </p>
              </div>

              <span
                className="
                  font-mono
                  text-[9px]
                  tracking-[0.2em]
                  text-[#A08D4D]
                "
              >
                TRNHS
              </span>
            </div>
          </motion.div>

          {/* =================================================
              MILESTONE STORY
          ================================================== */}

          <div className="relative">
            {/* continuous vertical botanical stem */}
            <div
              aria-hidden="true"
              className="
                absolute
                bottom-8
                left-[11px]
                top-8
                w-px
                bg-gradient-to-b
                from-[#829A74]/10
                via-[#718B63]/55
                to-[#C8B85F]/20
              "
            />

            <div className="relative space-y-7">
              {chapter.milestones.map(
                (milestone, index) => {
                  const Icon =
                    milestoneIcons[index];

                  return (
                    <motion.article
                      key={milestone.id}
                      initial={{
                        opacity: 0,
                        x: 18,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.8,
                        delay:
                          0.45 + index * 0.14,
                        ease: EASE,
                      }}
                      className="
                        group
                        relative
                        pl-10
                        sm:pl-12
                      "
                    >
                      {/* botanical node */}
                      <span
                        className="
                          absolute
                          left-0
                          top-1
                          flex
                          h-[24px]
                          w-[24px]
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#91A67F]/50
                          bg-[#F8F6EE]
                        "
                      >
                        <span
                          className="
                            h-[7px]
                            w-[7px]
                            rounded-full
                            bg-[#D1BF64]
                            shadow-[0_0_0_4px_rgba(209,191,100,0.09)]
                          "
                        />
                      </span>

                      {/* number + eyebrow */}
                      <div
                        className="
                          flex
                          items-center
                          gap-3
                        "
                      >
                        <span
                          className="
                            font-mono
                            text-[9px]
                            tracking-[0.18em]
                            text-[#A08D4D]
                          "
                        >
                          {milestone.number}
                        </span>

                        <span
                          className="
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-[0.24em]
                            text-[#77866D]
                          "
                        >
                          {milestone.eyebrow}
                        </span>
                      </div>

                      {/* title */}
                      <div className="mt-2 flex items-center gap-3">
                        <Icon
                          aria-hidden="true"
                          className="
                            h-[18px]
                            w-[18px]
                            shrink-0
                            text-[#69815B]
                          "
                          strokeWidth={1.45}
                        />

                        <h3
                          className="
                            text-[24px]
                            font-medium
                            leading-tight
                            tracking-[-0.025em]
                            text-[#34251E]
                            sm:text-[27px]
                          "
                        >
                          {milestone.title}
                        </h3>
                      </div>

                      {/* benefit */}
                      <p
                        className="
                          mt-2
                          max-w-[470px]
                          text-[13px]
                          leading-6
                          text-[#73786F]
                          sm:text-[14px]
                        "
                      >
                        {milestone.benefit}
                      </p>

                      {/* editorial underline */}
                      <div
                        className="
                          mt-5
                          h-px
                          w-full
                          max-w-[420px]
                          bg-gradient-to-r
                          from-[#9CAF98]/35
                          via-[#C9C09A]/20
                          to-transparent
                        "
                      />
                    </motion.article>
                  );
                }
              )}
            </div>
          </div>
        </div>

        {/* ===================================================
            SCROLL CUE
        ==================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.2,
            duration: 0.8,
          }}
          className="
            mt-12
            flex
            items-center
            gap-3
            text-[#7A866F]
          "
        >
          <ArrowDown
            aria-hidden="true"
            size={14}
            strokeWidth={1.4}
          />

          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.28em]
            "
          >
            Continue the journey
          </span>
        </motion.div>
      </div>
    </section>
  );
}   