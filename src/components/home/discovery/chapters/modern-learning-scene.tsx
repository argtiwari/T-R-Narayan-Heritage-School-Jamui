"use client";

import { motion } from "framer-motion";
import {
  MonitorPlay,
  Laptop,
  FlaskConical,
  Lightbulb,
} from "lucide-react";

import { discoveryChapters } from "../discovery-data";

const EASE = [0.22, 1, 0.36, 1] as const;

const milestoneIcons = [
  MonitorPlay,
  Laptop,
  FlaskConical,
  Lightbulb,
];

export default function ModernLearningScene() {
  const chapter = discoveryChapters.find(
    (item) => item.id === "modern-learning"
  );

  if (!chapter) return null;

  return (
    <section
      id="modern-learning"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#F6F7EF]
        text-[#30221C]
      "
    >
      {/* =====================================================
          CONTINUITY ATMOSPHERE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          bg-[radial-gradient(circle_at_78%_22%,rgba(187,215,185,0.28),transparent_31%),radial-gradient(circle_at_15%_78%,rgba(211,225,204,0.20),transparent_32%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.11]
          [background-image:radial-gradient(rgba(73,94,66,0.18)_0.5px,transparent_0.5px)]
          [background-size:9px_9px]
        "
      />

      {/* =====================================================
          DIGITAL / BOTANICAL CONTOUR
      ====================================================== */}

      <svg
        aria-hidden="true"
        viewBox="0 0 900 900"
        fill="none"
        className="
          pointer-events-none
          absolute
          -left-[180px]
          top-[8%]
          h-[86%]
          w-[58%]
          text-[#708B67]
          opacity-[0.075]
          lg:-left-[80px]
        "
      >
        <path
          d="
            M80 820
            C170 740 165 640 245 560
            C330 475 405 500 470 410
            C540 315 500 215 625 105
          "
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />

        <path
          d="
            M245 560
            C205 525 160 530 125 565
            C165 590 207 586 245 560Z
          "
          stroke="currentColor"
          strokeWidth="1"
        />

        <path
          d="
            M470 410
            C515 370 565 380 600 415
            C552 438 510 435 470 410Z
          "
          stroke="currentColor"
          strokeWidth="1"
        />

        {/* subtle digital nodes */}
        <circle
          cx="625"
          cy="105"
          r="4"
          stroke="currentColor"
          strokeWidth="1"
        />

        <circle
          cx="245"
          cy="560"
          r="3"
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

        <div className="mb-12 max-w-[820px] lg:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.95,
              delay: 0.08,
              ease: EASE,
            }}
            className="
              max-w-[820px]
              font-serif
              text-[40px]
              leading-[1.03]
              tracking-[-0.045em]
              sm:text-[50px]
              lg:text-[62px]
              xl:text-[68px]
            "
          >
            Learning becomes richer when{" "}
            <span className="text-[#627E59]">
              curiosity meets technology.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.75,
              delay: 0.22,
              ease: EASE,
            }}
            className="
              mt-6
              max-w-[650px]
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
            CONTENT
        ==================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-10
            lg:grid-cols-[0.82fr_1.18fr]
            lg:items-center
            lg:gap-16
          "
        >
          {/* =================================================
              MILESTONE STORY
          ================================================== */}

          <div className="relative order-2 lg:order-1">
            {/* botanical spine */}
            <div
              aria-hidden="true"
              className="
                absolute
                bottom-8
                left-[11px]
                top-8
                w-px
                bg-gradient-to-b
                from-[#78916C]/10
                via-[#6C8861]/55
                to-[#C8B85F]/20
              "
            />

            <div className="relative space-y-6">
              {chapter.milestones.map(
                (milestone, index) => {
                  const Icon =
                    milestoneIcons[index];

                  return (
                    <motion.article
                      key={milestone.id}
                      initial={{
                        opacity: 0,
                        x: -18,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.25,
                      }}
                      transition={{
                        duration: 0.8,
                        delay:
                          0.12 + index * 0.12,
                        ease: EASE,
                      }}
                      className="
                        group
                        relative
                        pl-10
                        sm:pl-12
                      "
                    >
                      {/* node */}
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
                          bg-[#F6F7EF]
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

                      <div className="mt-2 flex items-center gap-3">
                        <Icon
                          aria-hidden="true"
                          className="
                            h-[18px]
                            w-[18px]
                            shrink-0
                            text-[#66805C]
                          "
                          strokeWidth={1.45}
                        />

                        <h3
                          className="
                            text-[23px]
                            font-medium
                            leading-tight
                            tracking-[-0.025em]
                            text-[#34251E]
                            sm:text-[26px]
                          "
                        >
                          {milestone.title}
                        </h3>
                      </div>

                      <p
                        className="
                          mt-2
                          max-w-[450px]
                          text-[13px]
                          leading-6
                          text-[#73786F]
                          sm:text-[14px]
                        "
                      >
                        {milestone.benefit}
                      </p>

                      <div
                        className="
                          mt-5
                          h-px
                          max-w-[390px]
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

          {/* =================================================
              DIGITAL LEARNING VISUAL
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1,
              ease: EASE,
            }}
            className="
              order-1
              relative
              overflow-hidden
              rounded-[36px]
              border
              border-[#B5C8AF]/40
              bg-[#EAF1E7]
              shadow-[0_32px_90px_rgba(66,86,59,0.11)]
              aspect-[16/10]
              lg:order-2
              lg:aspect-[1.15/1]
            "
          >
            {/* digital atmosphere */}
            <div
              className="
                absolute inset-0
                bg-[radial-gradient(circle_at_65%_30%,rgba(219,235,211,0.96),transparent_28%),linear-gradient(145deg,#F0F5EC_0%,#DDEBDD_50%,#F4F0E5_100%)]
              "
            />

            {/* abstract screen panels */}
            <div
              className="
                absolute
                left-[12%]
                top-[17%]
                h-[45%]
                w-[76%]
                rounded-[18px]
                border
                border-white/65
                bg-white/30
                shadow-[0_20px_50px_rgba(74,96,65,0.08)]
                backdrop-blur-sm
              "
            />

            <div
              className="
                absolute
                left-[18%]
                top-[25%]
                h-[28%]
                w-[42%]
                rounded-[10px]
                border
                border-[#9CB39A]/35
                bg-[#EAF2E6]/60
              "
            />

            <div
              className="
                absolute
                right-[18%]
                top-[25%]
                h-[28%]
                w-[19%]
                rounded-[10px]
                border
                border-[#C5CFAE]/45
                bg-[#F3F5E9]/70
              "
            />

            {/* digital data lines */}
            <div
              aria-hidden="true"
              className="
                absolute
                left-[22%]
                top-[31%]
                h-px
                w-[32%]
                bg-[#76906B]/30
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                left-[22%]
                top-[39%]
                h-px
                w-[24%]
                bg-[#76906B]/20
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                left-[22%]
                top-[47%]
                h-px
                w-[30%]
                bg-[#76906B]/20
              "
            />

            {/* botanical / circuit path */}
            <svg
              aria-hidden="true"
              viewBox="0 0 700 500"
              fill="none"
              className="
                absolute inset-0
                h-full w-full
                text-[#65815D]
                opacity-[0.17]
              "
            >
              <path
                d="
                  M65 430
                  C150 410 175 340 245 320
                  C330 295 365 340 435 292
                  C500 248 510 150 620 92
                "
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />

              <circle
                cx="245"
                cy="320"
                r="4"
                fill="currentColor"
              />

              <circle
                cx="435"
                cy="292"
                r="4"
                fill="currentColor"
              />

              <circle
                cx="620"
                cy="92"
                r="4"
                fill="#C6B65E"
              />
            </svg>

            {/* light sweep */}
            <motion.div
              initial={{ x: "-130%" }}
              whileInView={{ x: "130%" }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 2.4,
                delay: 0.5,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                -top-[30%]
                h-[170%]
                w-[20%]
                rotate-[17deg]
                bg-gradient-to-r
                from-transparent
                via-white/25
                to-transparent
                blur-2xl
              "
            />

            {/* bottom editorial label */}
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
                border-white/50
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
                    text-[#687D61]
                  "
                >
                  Modern Learning
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    text-[#34432F]
                  "
                >
                  Curiosity meets technology.
                </p>
              </div>

              <span
                className="
                  font-mono
                  text-[9px]
                  tracking-[0.2em]
                  text-[#A18D4D]
                "
              >
                02 / 06
              </span>
            </div>

            {/* inner frame */}
            <div
              className="
                pointer-events-none
                absolute
                inset-[8px]
                rounded-[28px]
                border
                border-white/45
              "
            />
          </motion.div>
        </div>

        {/* ===================================================
            CHAPTER HANDOFF
        ==================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.8,
            duration: 0.7,
          }}
          className="
            mt-12
            flex
            items-center
            gap-4
            text-[#74836C]
          "
        >
          <span className="h-px w-12 bg-[#91A488]/40" />

          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.28em]
            "
          >
            02 / Modern Learning
          </span>

          <span className="h-px w-12 bg-[#91A488]/40" />
        </motion.div>
      </div>
    </section>
  );
}