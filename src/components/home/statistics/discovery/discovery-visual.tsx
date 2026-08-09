"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type DiscoveryVisualProps = {
  image?: string;
  imageAlt?: string;
  chapterNumber?: string;
  chapterLabel?: string;
  active?: boolean;
};

export default function DiscoveryVisual({
  image,
  imageAlt = "",
  chapterNumber = "01",
  chapterLabel = "Foundation",
  active = true,
}: DiscoveryVisualProps) {
  return (
    <div className="relative w-full">
      {/* =========================================
          EDITORIAL IMAGE FRAME
      ========================================= */}
      <motion.div
        initial={false}
        animate={{
          opacity: active ? 1 : 0.45,
          y: active ? 0 : 18,
        }}
        transition={{
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          aspect-[4/5]
          w-full
          overflow-hidden
          rounded-[32px]
          border border-[#B7C8AE]/35
          bg-[#F1F5EA]/60
          shadow-[0_30px_80px_rgba(73,91,61,0.10)]
          lg:aspect-[5/6]
        "
      >
        {/* =========================================
            REAL SCHOOL IMAGE
        ========================================= */}

        {image ? (
          <motion.div
            initial={false}
            animate={{
              scale: active ? 1 : 1.035,
            }}
            transition={{
              duration: 1.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0"
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority={false}
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </motion.div>
        ) : (
          /* =========================================
             TEMPORARY PLACEHOLDER

             Real school image aane ke baad automatically
             replace ho jayega.
          ========================================= */
          <div
            className="
              absolute inset-0
              bg-[radial-gradient(circle_at_35%_30%,rgba(205,221,193,0.65),transparent_35%),linear-gradient(145deg,#F8F7EF_0%,#E9F0E2_48%,#F5F1E6_100%)]
            "
          />
        )}

        {/* =========================================
            MINT / IVORY ATMOSPHERIC WASH
        ========================================= */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            bg-gradient-to-t
            from-[#F7F5EA]/50
            via-transparent
            to-[#EEF5E8]/15
          "
        />

        {/* =========================================
            SOFT LIGHT
        ========================================= */}
        <motion.div
          animate={{
            x: active ? ["-20%", "120%"] : "-20%",
          }}
          transition={{
            duration: 4.5,
            ease: "easeInOut",
            repeat: active ? Infinity : 0,
            repeatDelay: 5,
          }}
          className="
            pointer-events-none
            absolute -top-[20%]
            h-[140%] w-[18%]
            rotate-[12deg]
            bg-gradient-to-r
            from-transparent
            via-white/20
            to-transparent
            blur-2xl
          "
        />

        {/* =========================================
            PLACEHOLDER BOTANICAL ILLUSTRATION
        ========================================= */}

        {!image && (
          <svg
            viewBox="0 0 500 600"
            fill="none"
            aria-hidden="true"
            className="
              pointer-events-none
              absolute inset-0
              h-full w-full
              text-[#6E8962]
              opacity-[0.12]
            "
          >
            <motion.path
              d="M90 530C140 420 160 330 235 270C300 218 350 165 405 65"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: active ? 1 : 0 }}
              transition={{
                duration: 2,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            <motion.path
              d="M225 282C193 246 164 235 130 242C149 275 180 290 225 282Z"
              stroke="currentColor"
              strokeWidth="1.1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: active ? 1 : 0 }}
              transition={{
                duration: 1.2,
                delay: 0.45,
              }}
            />

            <motion.path
              d="M310 202C321 159 346 137 382 129C378 167 354 194 310 202Z"
              stroke="currentColor"
              strokeWidth="1.1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: active ? 1 : 0 }}
              transition={{
                duration: 1.2,
                delay: 0.7,
              }}
            />
          </svg>
        )}

        {/* =========================================
            CHAPTER LABEL
        ========================================= */}

        <div
          className="
            absolute
            left-6 top-6
            flex items-center gap-3
            rounded-full
            border border-white/50
            bg-[#F8F8F1]/70
            px-4 py-2
            backdrop-blur-md
          "
        >
          <span
            className="
              font-mono
              text-[9px]
              tracking-[0.22em]
              text-[#A08D49]
            "
          >
            {chapterNumber}
          </span>

          <span className="h-3 w-px bg-[#A6B79A]/60" />

          <span
            className="
              text-[9px]
              font-semibold uppercase
              tracking-[0.24em]
              text-[#607756]
            "
          >
            {chapterLabel}
          </span>
        </div>

        {/* =========================================
            BOTTOM PAPER GRADIENT
        ========================================= */}

        <div
          className="
            pointer-events-none
            absolute inset-x-0 bottom-0
            h-[34%]
            bg-gradient-to-t
            from-[#F8F7EF]/85
            via-[#F8F7EF]/25
            to-transparent
          "
        />

        {/* =========================================
            BOTTOM EDITORIAL DETAIL
        ========================================= */}

        <div
          className="
            absolute
            bottom-6 left-6 right-6
            flex items-end justify-between
            border-t border-[#879B78]/25
            pt-4
          "
        >
          <div>
            <p
              className="
                text-[9px]
                font-semibold uppercase
                tracking-[0.26em]
                text-[#788C6D]
              "
            >
              Discover
            </p>

            <p
              className="
                mt-1 text-sm
                text-[#3C4D35]
              "
            >
              TR Narayan Heritage School
            </p>
          </div>

          <span
            className="
              font-mono
              text-[9px]
              tracking-[0.2em]
              text-[#A18F50]
            "
          >
            JAMUI
          </span>
        </div>

        {/* =========================================
            PAPER EDGE
        ========================================= */}

        <div
          className="
            pointer-events-none
            absolute inset-[8px]
            rounded-[25px]
            border border-white/40
          "
        />
      </motion.div>

      {/* =========================================
          SHADOW / BOTANICAL GROUND
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-8 left-[12%]
          h-14 w-[76%]
          rounded-[100%]
          bg-[#AFC3A2]/15
          blur-2xl
      "
      />
    </div>
  );
}