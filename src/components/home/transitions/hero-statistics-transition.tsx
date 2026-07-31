"use client";

import { motion } from "framer-motion";

export function HeroStatisticsTransition() {
  return (
    <section
      aria-hidden="true"
      className="relative overflow-hidden bg-[#F8F5EF]"
    >
      {/* Paper continuation */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(rgba(74,54,34,.14) 0.5px, transparent 0.5px)",
            backgroundSize: "8px 8px",
          }}
        />
      </div>

      {/* Hero fades into statistics */}
      <div className="mx-auto flex max-w-[1600px] flex-col items-center px-6 py-20">
        {/* Scroll */}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col items-center"
        >
          <p className="text-sm tracking-wide text-[#4B2414]">
            Scroll to Discover
          </p>

          <div className="mt-3 h-10 w-px bg-[#CFC6B3]" />

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
            className="mt-2 h-8 w-8 rounded-full border border-[#DDD3BE] bg-[#FBF8F2]"
          />
        </motion.div>

        {/* Botanical Divider */}

        <div className="relative flex w-full items-center justify-center">
          <div className="h-px flex-1 bg-[#D9D0BE]" />

          <svg
            width="110"
            height="22"
            viewBox="0 0 110 22"
            className="mx-6 text-[#8A8B42]"
            fill="none"
          >
            <path
              d="M5 12C22 11 35 8 52 12C69 16 83 10 105 8"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />

            <path
              d="M36 10C34 4 40 2 43 7C41 12 37 12 36 10Z"
              fill="currentColor"
              opacity=".45"
            />

            <path
              d="M64 13C63 7 69 6 72 10C69 15 65 15 64 13Z"
              fill="currentColor"
              opacity=".45"
            />
          </svg>

          <div className="h-px flex-1 bg-[#D9D0BE]" />
        </div>
      </div>
    </section>
  );
}