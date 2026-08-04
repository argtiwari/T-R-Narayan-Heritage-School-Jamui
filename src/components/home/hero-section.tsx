"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  CalendarDays,
  GraduationCap,
  Leaf,
  MapPin,
  MonitorUp,
  Sprout,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { HeroHighlights } from "@/components/home/hero/hero-highlights";
import { HeroStatisticsBridge } from "./hero/hero-statistics-bridge";


const EASE = [0.22, 1, 0.36, 1] as const;

const identityCards = [
  {
    title: "CBSE Affiliated",
    description: "Affiliation No. 330881",
    icon: BookOpen,
  },
  {
    title: "Smart Classrooms",
    description: "Technology-enabled learning spaces",
    icon: MonitorUp,
  },
  {
    title: "Holistic Education",
    description: "Academic excellence with life skills",
    icon: Sprout,
  },
  {
    title: "Experienced Faculty",
    description: "Guiding with care, inspiring growth",
    icon: Users,
  },
];

const reveal = {
  initial: {
    opacity: 0,
    y: 14,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

function BotanicalBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Paper grain */}
      <div
        className="absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.88' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.07'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Warm atmospheric depth */}
      <div className="absolute -left-40 top-[12%] size-[500px] rounded-full bg-[#8B963A]/[0.025] blur-[105px]" />

      <div className="absolute right-[2%] top-[4%] size-[640px] rounded-full bg-[#75462F]/[0.018] blur-[125px]" />

      <div className="absolute bottom-[-25%] left-[35%] h-[420px] w-[720px] rounded-full bg-[#9BA34A]/[0.018] blur-[120px]" />

      {/* Main heritage botanical drawing */}
      <svg
        viewBox="0 0 820 760"
        fill="none"
        className="absolute left-[20%] top-[-72px] hidden h-[760px] w-[760px] text-[#747D2C] opacity-[0.105] lg:block"
      >
        {/* main organic stem */}
        <path
          d="M421 -40C402 52 369 109 319 154C270 198 229 232 211 291C187 367 212 427 263 486C315 546 369 595 383 682C390 720 389 753 387 796"
          stroke="currentColor"
          strokeWidth="1.05"
          strokeLinecap="round"
        />

        {/* upper left branch */}
        <path
          d="M337 136C286 113 246 77 220 34"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
        />

        <path
          d="M293 177C239 162 194 129 160 84"
          stroke="currentColor"
          strokeWidth="0.85"
          strokeLinecap="round"
        />

        <path
          d="M253 219C199 214 148 190 107 153"
          stroke="currentColor"
          strokeWidth="0.85"
          strokeLinecap="round"
        />

        {/* upper right */}
        <path
          d="M341 135C389 106 428 70 451 27"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
        />

        <path
          d="M319 155C372 151 420 129 459 94"
          stroke="currentColor"
          strokeWidth="0.85"
          strokeLinecap="round"
        />

        {/* middle extension */}
        <path
          d="M211 291C153 273 107 239 72 194"
          stroke="currentColor"
          strokeWidth="0.85"
          strokeLinecap="round"
        />

        <path
          d="M225 411C170 400 120 373 83 332"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeLinecap="round"
        />

        {/* leaves */}
        <path
          d="M221 34C199 10 172 15 165 37C183 52 204 50 221 34Z"
          stroke="currentColor"
          strokeWidth="0.75"
        />

        <path
          d="M263 106C239 84 212 90 206 112C225 127 247 124 263 106Z"
          stroke="currentColor"
          strokeWidth="0.75"
        />

        <path
          d="M190 126C165 105 138 112 133 134C152 148 174 144 190 126Z"
          stroke="currentColor"
          strokeWidth="0.75"
        />

        <path
          d="M146 181C121 162 95 170 91 191C111 203 132 199 146 181Z"
          stroke="currentColor"
          strokeWidth="0.75"
        />

        <path
          d="M450 27C466 0 493 -1 504 19C491 40 470 44 450 27Z"
          stroke="currentColor"
          strokeWidth="0.75"
        />

        <path
          d="M411 118C430 92 457 95 467 116C452 135 430 137 411 118Z"
          stroke="currentColor"
          strokeWidth="0.75"
        />

        <path
          d="M110 154C83 137 58 146 56 168C77 179 97 173 110 154Z"
          stroke="currentColor"
          strokeWidth="0.75"
        />

        <path
          d="M101 347C75 328 49 336 46 358C66 370 88 365 101 347Z"
          stroke="currentColor"
          strokeWidth="0.75"
        />

        {/* editorial organic geometry */}
        <circle
          cx="243"
          cy="363"
          r="122"
          stroke="currentColor"
          strokeWidth="0.55"
          opacity="0.55"
        />

        <circle
          cx="243"
          cy="363"
          r="82"
          stroke="currentColor"
          strokeWidth="0.45"
          opacity="0.48"
        />

        <circle
          cx="243"
          cy="363"
          r="39"
          stroke="currentColor"
          strokeWidth="0.4"
          opacity="0.35"
        />
      </svg>

      {/* Fine left-edge botanical annotation */}
      <svg
        viewBox="0 0 220 360"
        fill="none"
        className="absolute -left-12 bottom-[-35px] hidden h-[340px] w-[220px] text-[#747D2C] opacity-[0.065] xl:block"
      >
        <path
          d="M8 342C58 296 80 244 88 184C96 126 122 76 183 17"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
        />

        <path
          d="M76 238C49 221 29 220 8 230"
          stroke="currentColor"
          strokeWidth="0.75"
        />

        <path
          d="M100 136C129 117 153 112 180 118"
          stroke="currentColor"
          strokeWidth="0.75"
        />
      </svg>

      {/* Mobile trace */}
      <svg
        viewBox="0 0 170 320"
        fill="none"
        className="absolute -right-6 top-20 h-[300px] w-[160px] text-[#747D2C] opacity-[0.055] lg:hidden"
      >
        <path
          d="M151 -15C126 58 98 101 84 165C74 215 87 260 107 332"
          stroke="currentColor"
          strokeWidth="0.8"
        />

        <path
          d="M97 105C67 85 42 84 17 94"
          stroke="currentColor"
          strokeWidth="0.7"
        />

        <path
          d="M85 164C116 145 139 142 161 148"
          stroke="currentColor"
          strokeWidth="0.7"
        />

        <circle
          cx="65"
          cy="194"
          r="55"
          stroke="currentColor"
          strokeWidth="0.45"
        />
      </svg>
    </div>
  );
}

function CTALeaves() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -right-8 bottom-[-2px] hidden h-16 w-20 text-[#7A861F] sm:block"
    >
      <svg viewBox="0 0 80 64" fill="none" className="h-full w-full">
        <path
          d="M5 58C26 49 34 32 42 9"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
          className="origin-bottom-left scale-[0.82] opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-55"
        />

        <path
          d="M28 41C16 31 9 34 7 43C14 50 22 49 28 41Z"
          fill="currentColor"
          className="origin-bottom scale-[0.82] opacity-0 transition-all delay-75 duration-500 group-hover:scale-100 group-hover:opacity-55"
        />

        <path
          d="M39 22C48 10 58 12 61 21C55 29 47 29 39 22Z"
          fill="currentColor"
          className="origin-bottom scale-[0.82] opacity-0 transition-all delay-100 duration-500 group-hover:scale-100 group-hover:opacity-55"
        />
      </svg>
    </span>
  );
}

function SecondaryCTAAccent() {
  return (
    <span
      aria-hidden="true"
      className="flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-0.5"
    >
      <span className="h-px w-5 bg-[#7A861F]/45 transition-all duration-300 group-hover:w-7" />
      <Leaf
        size={12}
        strokeWidth={1.5}
        className="-rotate-12 text-[#747D2C] transition-transform duration-300 group-hover:rotate-6"
      />
    </span>
  );
}

export function HeroSection() {
  return (
    <>

      <section
        aria-labelledby="home-hero-heading"
        className="relative overflow-hidden bg-[#F8F5EF] pt-[88px]"
      >
        <BotanicalBackground />

        <div className="relative z-10 mx-auto max-w-[1580px] px-5 pb-7 pt-8 sm:px-7 sm:pb-9 sm:pt-10 lg:px-10 lg:pb-10 lg:pt-12 xl:px-12 xl:pt-14">
          <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-9 xl:gap-12 2xl:gap-14">
            {/* LEFT */}
            <motion.div
              initial="initial"
              animate="animate"
              transition={{
                staggerChildren: 0.065,
              }}
              className="relative max-w-[620px]"
            >
              <motion.div
                variants={reveal}
                transition={{ duration: 0.5, ease: EASE }}
                className="inline-flex min-h-9 items-center gap-2.5 rounded-full border border-[#DCD8B7]/80 bg-[#F1EEDB]/85 px-4 text-[11px] font-medium text-[#5B5926] shadow-[0_4px_14px_rgba(70,50,30,0.025)] sm:text-[12px]"
              >
                <Leaf
                  size={14}
                  strokeWidth={1.6}
                  className="text-[#78822D]"
                  aria-hidden="true"
                />
                Growth Through Nurturing
              </motion.div>

              <motion.h1
                id="home-hero-heading"
                variants={reveal}
                transition={{ duration: 0.55, ease: EASE }}
                className="mt-6 max-w-[610px] text-[44px] font-semibold leading-[1.01] tracking-[-0.047em] text-[#251A15] sm:text-[56px] lg:text-[54px] xl:text-[60px] 2xl:text-[64px]"
              >
                Rooted in values.
                <span className="mt-1 block text-[#66751C]">
                  Growing for tomorrow.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                transition={{ duration: 0.55, ease: EASE }}
                className="mt-5 max-w-[565px] text-[15px] leading-[1.75] text-[#6F665F] sm:text-[16px] xl:text-[16.5px]"
              >
                At TR Narayan Heritage School, Jamui, learning is nurtured with
                care, strong values and meaningful experiences—helping every
                child grow with knowledge, confidence and character.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={reveal}
                transition={{ duration: 0.55, ease: EASE }}
                className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
              >
                <Link
                  href="/admissions"
                  className="group relative inline-flex min-h-[50px] items-center justify-center gap-4 overflow-visible rounded-[15px] bg-[#4B2414] px-7 text-sm font-semibold text-white shadow-[0_9px_22px_rgba(75,36,20,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3E1D10] hover:shadow-[0_13px_27px_rgba(75,36,20,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A861F] focus-visible:ring-offset-2"
                >
                  <span>Explore Admissions</span>

                  <ArrowRight
                    size={17}
                    strokeWidth={1.7}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                  <CTALeaves />
                </Link>

                <Link
                  href="/about"
                  className="group relative inline-flex min-h-[50px] items-center justify-center gap-4 border-b border-[#A8A177]/55 px-3 text-sm font-medium text-[#352A24] transition-all duration-300 hover:border-[#747D2C] hover:text-[#4B2414] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A861F] focus-visible:ring-offset-3 sm:px-2"
                >
                  <span>Discover Our School</span>
                  <SecondaryCTAAccent />
                </Link>
              </motion.div>

             
              
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{
                opacity: 0,
                x: 16,
                scale: 0.99,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: EASE,
              }}
              className="relative lg:self-start"
            >
              {/* offset paper layer creates the subtle physical depth */}
              <div
                aria-hidden="true"
                className="absolute -bottom-[8px] left-[14px] right-[-8px] top-[14px] border border-[#C7BFAE]/40 bg-[#EEE8DA]/55 shadow-[0_28px_50px_rgba(62,43,30,0.12)]"
              />

              {/* outer editorial frame */}
              <div className="group relative border border-[#AFA783]/70 bg-[#F5EFE2] p-[5px] shadow-[0_18px_36px_rgba(62,43,30,0.08),0_5px_12px_rgba(62,43,30,0.05)]">
                {/* inner matte */}
                <div className="border border-[#D6CEBD] bg-[#FCF8EF] p-[7px] sm:p-[8px]">
                  <div className="relative aspect-[16/10.25] overflow-hidden border border-[#BDB596]/55 bg-[#EEE8DC]">
                    <Image
                      src="/images/home/school-campus-hero.png"
                      alt="TR Narayan Heritage School campus in Jamui, Bihar"
                      fill
                      priority
                      quality={95}
                      sizes="(max-width: 767px) 100vw, (max-width: 1024px) 55vw, 900px"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.012]"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[#8B6D4E]/[0.014]"
                    />
                  </div>

                  {/* Editorial caption */}
                  <div className="flex flex-col gap-1.5 px-1 pb-1 pt-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#737C29] sm:text-[9px]">
                      Nurturing Minds. Building Futures.
                    </p>

                    <p className="text-[8px] font-semibold uppercase tracking-[0.19em] text-[#6B5C51] sm:text-[9px]">
                      Jamui, Bihar
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust strip */}
              <div className="mx-auto mt-5 flex max-w-[96%] flex-col items-center justify-center gap-3 rounded-[12px] border border-[#D8D1C3] bg-[#FCFAF4]/88 px-5 py-3.5 text-center shadow-[0_6px_18px_rgba(60,43,29,0.03)] sm:flex-row sm:gap-5 sm:py-3">
                <span className="flex items-center gap-2 text-[11px] font-medium text-[#493D35] xl:text-xs">
                  <GraduationCap
                    size={16}
                    strokeWidth={1.45}
                    className="text-[#747D2C]"
                    aria-hidden="true"
                  />
                  CBSE Affiliated
                </span>

                <span
                  aria-hidden="true"
                  className="hidden size-1 rounded-full bg-[#8D9250]/45 sm:block"
                />

                {/* <span className="flex items-center gap-2 text-[11px] font-medium text-[#493D35] xl:text-xs">
                  <MapPin
                    size={16}
                    strokeWidth={1.45}
                    className="text-[#747D2C]"
                    aria-hidden="true"
                  />
                  Jamui, Bihar
                </span> */}

                <span
                  aria-hidden="true"
                  className="hidden size-1 rounded-full bg-[#8D9250]/45 sm:block"
                />

                <span className="flex items-center gap-2 text-[11px] font-medium text-[#493D35] xl:text-xs">
                  <CalendarDays
                    size={16}
                    strokeWidth={1.45}
                    className="text-[#747D2C]"
                    aria-hidden="true"
                  />
                  Admissions Open 2026–27
                </span>
              </div>
            </motion.div>
          </div>

          
        </div>


                 

          {/* ==================================================
              HERO IDENTITY → STATISTICS BRIDGE
          ================================================== */}

    

          <HeroStatisticsBridge /> 
      </section>
    </>
  );
}