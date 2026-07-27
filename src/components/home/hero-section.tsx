"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Leaf,
  School,
  Sprout,
} from "lucide-react";
import {
  motion,
  type Variants,
} from "framer-motion";

const trustBadges = [
  {
    label: "CBSE Affiliated",
    icon: BookOpen,
  },
  {
    label: "Smart Classrooms",
    icon: School,
  },
  {
    label: "Holistic Education",
    icon: Sprout,
  },
];

/* -------------------------------------------------------------------------- */
/*                                MOTION                                      */
/* -------------------------------------------------------------------------- */

const EASE = [0.22, 1, 0.36, 1] as const;

const contentContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.07,
    },
  },
};

const contentItem: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.48,
      ease: EASE,
    },
  },
};

const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    x: 24,
    y: 8,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      delay: 0.12,
      ease: EASE,
    },
  },
};

export function HeroSection() {


  return (
    <section className="relative overflow-hidden bg-[#FCFBF7]">
      {/* Subtle organic background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(122,134,31,0.055)_0%,rgba(122,134,31,0)_70%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-[8%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(75,36,20,0.04)_0%,rgba(75,36,20,0)_68%)]"
      />

      <div className="mx-auto grid max-w-[1580px] items-center gap-14 px-5 py-16 sm:px-7 sm:py-20 lg:min-h-[670px] lg:grid-cols-[0.82fr_1.18fr] lg:gap-10 lg:px-10 lg:py-20 xl:gap-12 xl:px-12 2xl:gap-14">
        {/* Left */}
        <motion.div
          variants={contentContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-[610px]"
        >
          {/* Motto */}
          <motion.div
            variants={contentItem}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#DDD8B9] bg-[#F6F1E5]/80 px-4 py-2 text-xs font-semibold tracking-[0.08em] text-[#4B2414]"
          >
            <Leaf
              size={14}
              strokeWidth={1.8}
              className="text-[#7A861F]"
              aria-hidden="true"
            />

            Growth Through Nurturing
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={contentItem}
            className="max-w-[600px] text-[43px] font-semibold leading-[1.04] tracking-[-0.045em] text-[#241C18] sm:text-[52px] lg:text-[56px] xl:text-[64px]"
          >
            Rooted in values.

            <span className="mt-1 block text-[#66751C]">
              Growing for tomorrow.
            </span>
          </motion.h1>

          {/* Growth accent */}
          <motion.div
            variants={contentItem}
            className="mt-6 flex items-center gap-2"
            aria-hidden="true"
          >
            <span className="h-px w-10 bg-[#4B2414]/40" />

            <Leaf
              size={13}
              strokeWidth={1.5}
              className="rotate-12 text-[#7A861F]"
            />

            <span className="h-px w-5 bg-[#7A861F]/35" />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={contentItem}
            className="mt-7 max-w-[560px] text-[16px] leading-[1.8] text-[#6F6862] sm:text-[17px]"
          >
            At TR Narayan Heritage School, Jamui, learning is nurtured with
            care, strong values and meaningful experiences—helping every child
            grow with knowledge, confidence and character.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={contentItem}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="/admissions"
              className="group inline-flex h-[52px] items-center justify-center gap-2.5 rounded-full bg-[#4B2414] px-7 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(75,36,20,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3D1D10] hover:shadow-[0_12px_28px_rgba(75,36,20,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A861F] focus-visible:ring-offset-2"
            >
              Explore Admissions

              <ArrowRight
                size={17}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/about"
              className="group inline-flex h-[52px] items-center justify-center gap-2 rounded-full border border-[#D9D4C8] bg-white/70 px-7 text-sm font-semibold text-[#241C18] shadow-[0_3px_12px_rgba(36,28,24,0.025)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B8B294] hover:bg-[#F6F1E5] hover:shadow-[0_7px_18px_rgba(36,28,24,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A861F] focus-visible:ring-offset-2"
            >
              Discover Our School
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={contentItem}
            className="mt-9 grid max-w-[570px] grid-cols-1 overflow-hidden rounded-[22px] border border-[#E7E2D6] bg-white/70 shadow-[0_10px_30px_rgba(75,36,20,0.04)] backdrop-blur-sm sm:grid-cols-3"
          >
            {trustBadges.map(({ label, icon: Icon }, index) => (
              <div
                key={label}
                className={`flex min-h-[72px] items-center gap-3 px-4 py-3 ${index !== 0
                  ? "border-t border-[#EEEAE1] sm:border-l sm:border-t-0"
                  : ""
                  }`}
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#EFF1D2] text-[#66751C]">
                  <Icon
                    size={18}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </span>

                <span className="text-[13px] font-medium leading-5 text-[#625C56]">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={imageReveal}
          initial="hidden"
          animate="visible"
          className="relative lg:-mr-5 xl:-mr-7 2xl:-mr-8"
        >
          {/* Ambient growth glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-14 top-[15%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(122,134,31,0.09)_0%,rgba(122,134,31,0)_68%)] blur-2xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 right-[8%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(75,36,20,0.055)_0%,rgba(75,36,20,0)_70%)] blur-2xl"
          />

          {/* Organic branch */}
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 300 180"
            fill="none"
            className="pointer-events-none absolute -right-8 -top-16 hidden h-44 w-72 text-[#7A861F] opacity-[0.07] lg:block"
          >
            <motion.path
              d="M20 160C75 135 95 94 137 65C174 39 218 32 282 20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              animate={{
                pathLength: 1,
                opacity: 1,
              }}
              transition={{
                pathLength: {
                  duration: 0.9,
                  delay: 0.35,
                  ease: EASE,
                },
                opacity: {
                  duration: 0.3,
                  delay: 0.35,
                },
              }}
            />

            <motion.path
              d="M108 87C91 67 81 50 79 31"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              animate={{
                pathLength: 1,
                opacity: 1,
              }}
              transition={{
                pathLength: {
                  duration: 0.45,
                  delay: 0.8,
                  ease: EASE,
                },
                opacity: {
                  duration: 0.2,
                  delay: 0.8,
                },
              }}
            />

            <motion.path
              d="M164 50C173 72 190 84 211 91"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              animate={{
                pathLength: 1,
                opacity: 1,
              }}
              transition={{
                pathLength: {
                  duration: 0.45,
                  delay: 0.92,
                  ease: EASE,
                },
                opacity: {
                  duration: 0.2,
                  delay: 0.92,
                },
              }}
            />
          </svg>

          {/* Campus Image */}
          <div className="group relative z-10 overflow-hidden rounded-[28px] border border-white/90 bg-[#F6F1E5] p-[2px] shadow-[0_30px_75px_rgba(75,36,20,0.13),0_8px_24px_rgba(36,28,24,0.06)]">
            <div className="relative aspect-[1280/733] overflow-hidden rounded-[26px] bg-[#F6F1E5]">
              <Image
                src="/images/home/school-campus-hero.png"
                alt="TR Narayan Heritage School campus building in Jamui"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, (max-width: 1440px) 58vw, 900px"
                className="object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.015]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}