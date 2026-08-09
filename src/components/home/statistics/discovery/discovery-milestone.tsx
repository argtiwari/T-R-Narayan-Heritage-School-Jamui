"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type DiscoveryMilestoneProps = {
  number: string;
  eyebrow: string;
  title: string;
  benefit: string;
  icon: LucideIcon;
  side?: "left" | "right";
  active?: boolean;
};

export default function DiscoveryMilestone({
  number,
  eyebrow,
  title,
  benefit,
  icon: Icon,
  side = "right",
  active = false,
}: DiscoveryMilestoneProps) {
  const isLeft = side === "left";

  return (
    <div
      className={`
        relative flex w-full
        ${isLeft ? "justify-start" : "justify-end"}
      `}
    >
      {/* =========================================
          JOURNEY NODE
      ========================================= */}
      <div
        className="
          absolute left-1/2 top-8 z-20
          hidden -translate-x-1/2
          lg:flex
          h-5 w-5
          items-center justify-center
        "
      >
        {/* outer botanical ring */}
        <motion.span
          animate={{
            opacity: active ? 1 : 0.35,
            scale: active ? 1 : 0.8,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute inset-0 rounded-full
            border border-[#91A77E]/40
            bg-[#F7F6EC]/80
            backdrop-blur-sm
          "
        />

        {/* gold milestone point */}
        <motion.span
          animate={{
            opacity: active ? 1 : 0.35,
          }}
          transition={{ duration: 0.45 }}
          className="
            relative h-2 w-2 rounded-full
            bg-[#D7C66A]
            shadow-[0_0_0_4px_rgba(215,198,106,0.10)]
          "
        />
      </div>

      {/* =========================================
          CONNECTING LINE
      ========================================= */}
      <motion.div
        initial={false}
        animate={{
          scaleX: active ? 1 : 0,
          opacity: active ? 1 : 0,
        }}
        transition={{
          duration: 0.85,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          transformOrigin: isLeft ? "right center" : "left center",
        }}
        className={`
          absolute top-[41px]
          hidden h-px
          w-[9%]
          bg-gradient-to-r
          from-[#8FA57C]/20
          via-[#728A62]/70
          to-[#D6C66A]/60
          lg:block

          ${
            isLeft
              ? "left-[41%]"
              : "right-[41%] rotate-180"
          }
        `}
      />

      {/* =========================================
          EDITORIAL CONTENT
      ========================================= */}
      <motion.article
        initial={false}
        animate={{
          opacity: active ? 1 : 0.18,
        }}
        transition={{
          duration: 0.75,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`
          group relative
          w-full max-w-[480px]
          py-6
          sm:py-8
          lg:w-[42%]

          ${isLeft ? "lg:pr-12" : "lg:pl-12"}
        `}
      >
        {/* faint paper wash */}
        <motion.div
          initial={false}
          animate={{
            opacity: active ? 1 : 0,
            scaleX: active ? 1 : 0.82,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            pointer-events-none
            absolute -inset-x-5 inset-y-0 -z-10
            rounded-[28px]
            border border-[#B8C7AE]/20
            bg-gradient-to-br
            from-white/45
            via-[#F4F8EE]/35
            to-[#E9F1E2]/25
            shadow-[0_18px_50px_rgba(66,83,52,0.035)]
            backdrop-blur-[2px]
          "
        />

        {/* top metadata */}
        <div className="mb-5 flex items-center gap-4">
          <span
            className="
              font-mono text-[10px]
              tracking-[0.22em]
              text-[#9C8C4B]
            "
          >
            {number}
          </span>

          <span className="h-px w-8 bg-[#A5B693]/60" />

          <span
            className="
              text-[9px] font-semibold uppercase
              tracking-[0.28em]
              text-[#78876B]
              sm:text-[10px]
            "
          >
            {eyebrow}
          </span>
        </div>

        {/* icon + heading */}
        <div className="flex items-start gap-5">
          <motion.div
            initial={false}
            animate={{
              opacity: active ? 1 : 0.3,
            }}
            transition={{
              duration: 0.65,
              delay: active ? 0.12 : 0,
            }}
            className="
              relative flex h-14 w-14
              shrink-0 items-center justify-center
              rounded-full
              border border-[#B7C7AE]/35
              bg-[#F3F7ED]/70
              shadow-[0_8px_24px_rgba(80,101,66,0.06)]
            "
          >
            <Icon
              strokeWidth={1.45}
              className="h-6 w-6 text-[#5F7A53]"
            />

            <span
              className="
                pointer-events-none
                absolute inset-[5px]
                rounded-full
                border border-white/60
              "
            />
          </motion.div>

          <div className="min-w-0 pt-1">
            {/* paper-mask style heading reveal */}
            <div className="overflow-hidden">
              <motion.h3
                initial={false}
                animate={{
                  y: active ? 0 : "105%",
                }}
                transition={{
                  duration: 0.75,
                  delay: active ? 0.08 : 0,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  text-[25px] font-medium
                  leading-[1.08]
                  tracking-[-0.035em]
                  text-[#2D201A]
                  sm:text-[29px]
                "
              >
                {title}
              </motion.h3>
            </div>

            {/* benefit */}
            <motion.p
              initial={false}
              animate={{
                opacity: active ? 1 : 0,
                y: active ? 0 : 8,
              }}
              transition={{
                duration: 0.65,
                delay: active ? 0.25 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-3 max-w-[340px]
                text-[14px] leading-6
                text-[#6D7765]
                sm:text-[15px]
              "
            >
              {benefit}
            </motion.p>
          </div>
        </div>

        {/* restrained botanical accent */}
        <motion.svg
          initial={false}
          animate={{
            opacity: active ? 0.16 : 0,
            pathLength: active ? 1 : 0,
          }}
          transition={{
            duration: 1.25,
            delay: active ? 0.25 : 0,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewBox="0 0 120 50"
          fill="none"
          aria-hidden="true"
          className={`
            pointer-events-none
            absolute -bottom-2
            h-12 w-28
            text-[#718B62]
            ${isLeft ? "right-2" : "left-2 -scale-x-100"}
          `}
        >
          <motion.path
            d="M5 43C30 42 49 35 65 23C76 15 89 10 114 8"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />

          <motion.path
            d="M65 23C63 15 67 9 74 6C76 14 73 20 65 23Z"
            stroke="currentColor"
            strokeWidth="0.9"
          />

          <motion.path
            d="M88 12C91 5 97 3 103 4C100 10 95 13 88 12Z"
            stroke="currentColor"
            strokeWidth="0.9"
          />
        </motion.svg>

        {/* bottom heritage line */}
        <motion.div
          initial={false}
          animate={{
            scaleX: active ? 1 : 0,
          }}
          transition={{
            duration: 0.9,
            delay: active ? 0.2 : 0,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            transformOrigin: isLeft ? "right center" : "left center",
          }}
          className="
            mt-7 h-px w-full
            bg-gradient-to-r
            from-transparent
            via-[#A5B693]/50
            to-transparent
          "
        />
      </motion.article>
    </div>
  );
}