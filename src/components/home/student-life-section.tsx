"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   MOTION SYSTEM
   Important:
   No useReducedMotion() branching inside rendered JSX.
   Server + client receive the exact same motion tree.
   App-level MotionConfig handles reduced-motion preference.
========================================================= */

const reveal: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease,
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
      duration: 0.75,
      ease,
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
      duration: 0.75,
      ease,
    },
  },
};

const photoReveal = {
  initial: {
    opacity: 0,
    y: 18,
    scale: 0.985,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

const photoRevealLeft = {
  initial: {
    opacity: 0,
    x: -16,
    y: 10,
    scale: 0.985,
  },
  whileInView: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
  },
};

const photoRevealRight = {
  initial: {
    opacity: 0,
    x: 16,
    y: 10,
    scale: 0.985,
  },
  whileInView: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
  },
};

/* =========================================================
   SMALL EDITORIAL ELEMENTS
========================================================= */

function BotanicalMark() {
  return (
    <div
      aria-hidden="true"
      className="flex items-center justify-center gap-3 text-[#7A861F]"
    >
      <span className="h-px w-10 bg-[#7A861F]/25" />

      <svg viewBox="0 0 28 18" className="h-[18px] w-7" fill="none">
        <path
          d="M2 15C8.5 13.5 12.4 9.5 16.2 4.5"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
        />

        <path
          d="M15.7 5C18.7 1.8 22.6 2.2 24.8 4.1C22.7 7.3 19.3 8.6 15.7 5Z"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>

      <span className="h-px w-10 bg-[#7A861F]/25" />
    </div>
  );
}

function MemoryCaption({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={reveal}
      className={`inline-flex items-center gap-2.5 ${className}`}
    >
      <span
        aria-hidden="true"
        className="h-px w-5 bg-[#7A861F]/40"
      />

      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#727B2D] sm:text-[11px]">
        {children}
      </span>
    </motion.div>
  );
}

/* =========================================================
   EDITORIAL IMAGE FRAME
========================================================= */

function EditorialFrame({
  src,
  alt,
  sizes,
  priority = false,
  className = "",
  imageClassName = "",
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[26px] border border-[#C8C79A]/45 bg-[#F5F0E4] p-[3px] shadow-[0_24px_60px_rgba(73,49,33,0.10),0_5px_16px_rgba(73,49,33,0.05)] ${className}`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[22px] border border-white/80 bg-[#EEE8DA]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={95}
          sizes={sizes}
          className={`object-cover ${imageClassName}`}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[#9A7B54]/[0.018]"
        />
      </div>
    </div>
  );
}

/* =========================================================
   LIVING CANOPY — DESKTOP
   Hydration-safe:
   identical SVG/motion structure on server and client.
========================================================= */

function LivingCanopy() {
  const pathAnimation = {
    initial: {
      pathLength: 0,
      opacity: 0,
    },
    whileInView: {
      pathLength: 1,
      opacity: 1,
    },
  };

  const leafAnimation = {
    initial: {
      opacity: 0,
      scale: 0.96,
    },
    whileInView: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1440 1700"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-x-0 top-0 hidden h-full w-full text-[#7A861F] lg:block"
    >
      {/* Main inherited branch */}
      <motion.path
        d="
          M716 -40
          C710 105 704 190 731 300
          C760 418 727 503 670 586
          C611 671 614 777 678 858
          C746 944 756 1040 715 1134
          C677 1220 678 1328 736 1432
          C772 1498 811 1560 850 1735
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
        className="opacity-[0.12]"
        {...pathAnimation}
        viewport={{ once: true, amount: 0.08 }}
        transition={{
          duration: 2.8,
          ease,
        }}
      />

      {/* Belonging branch */}
      <motion.path
        d="
          M724 294
          C620 250 511 239 397 270
          C309 294 234 330 155 374
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        className="opacity-[0.105]"
        {...pathAnimation}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 1.8,
          delay: 0.18,
          ease,
        }}
      />

      {/* Friendship branch */}
      <motion.path
        d="
          M669 585
          C760 536 853 516 956 529
          C1070 543 1168 587 1278 644
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        className="opacity-[0.13]"
        {...pathAnimation}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 1.9,
          delay: 0.2,
          ease,
        }}
      />

      {/* Expression split */}
      <motion.path
        d="
          M682 858
          C579 816 481 817 391 858
          C304 898 232 955 142 1002
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        className="opacity-[0.11]"
        {...pathAnimation}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 1.8,
          delay: 0.18,
          ease,
        }}
      />

      {/* Confidence / fuller canopy */}
      <motion.path
        d="
          M714 1134
          C819 1087 923 1082 1019 1118
          C1115 1154 1204 1214 1350 1227
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        className="opacity-[0.14]"
        {...pathAnimation}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 1.9,
          delay: 0.18,
          ease,
        }}
      />

      {/* Canopy exit left */}
      <motion.path
        d="
          M735 1431
          C607 1396 482 1404 358 1460
          C252 1507 156 1549 20 1557
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="1.05"
        strokeLinecap="round"
        className="opacity-[0.105]"
        {...pathAnimation}
        viewport={{ once: true, amount: 0.08 }}
        transition={{
          duration: 1.9,
          delay: 0.2,
          ease,
        }}
      />

      {/* Canopy exit right */}
      <motion.path
        d="
          M742 1435
          C861 1397 986 1407 1097 1463
          C1204 1517 1304 1552 1430 1558
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="1.05"
        strokeLinecap="round"
        className="opacity-[0.105]"
        {...pathAnimation}
        viewport={{ once: true, amount: 0.08 }}
        transition={{
          duration: 1.9,
          delay: 0.28,
          ease,
        }}
      />

      {/* Leaf clusters */}
      <motion.g
        className="opacity-[0.14]"
        {...leafAnimation}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.75,
          ease,
        }}
      >
        <path
          d="M396 270C376 247 347 249 334 268C352 285 376 288 396 270Z"
          fill="currentColor"
          fillOpacity="0.13"
          stroke="currentColor"
          strokeWidth="0.9"
        />

        <path
          d="M956 529C974 501 1003 500 1019 518C1004 540 980 547 956 529Z"
          fill="currentColor"
          fillOpacity="0.12"
          stroke="currentColor"
          strokeWidth="0.9"
        />

        <path
          d="M390 858C371 831 342 831 326 850C341 871 367 878 390 858Z"
          fill="currentColor"
          fillOpacity="0.12"
          stroke="currentColor"
          strokeWidth="0.9"
        />

        <path
          d="M1018 1118C1041 1090 1072 1094 1086 1115C1067 1135 1041 1139 1018 1118Z"
          fill="currentColor"
          fillOpacity="0.13"
          stroke="currentColor"
          strokeWidth="0.9"
        />

        <path
          d="M359 1460C337 1435 307 1439 294 1461C313 1478 339 1481 359 1460Z"
          fill="currentColor"
          fillOpacity="0.12"
          stroke="currentColor"
          strokeWidth="0.9"
        />

        <path
          d="M1097 1463C1116 1438 1145 1440 1159 1461C1141 1479 1117 1482 1097 1463Z"
          fill="currentColor"
          fillOpacity="0.12"
          stroke="currentColor"
          strokeWidth="0.9"
        />
      </motion.g>
    </svg>
  );
}

/* =========================================================
   MOBILE GROWTH LINE
========================================================= */

function MobileGrowthLine() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 100 900"
      preserveAspectRatio="none"
      className="pointer-events-none absolute right-1 top-80 h-[72%] w-16 text-[#7A861F] opacity-[0.105] lg:hidden"
    >
      <motion.path
        d="
          M65 0
          C38 100 72 185 48 274
          C29 348 63 428 46 510
          C29 593 67 673 43 752
          C35 788 39 838 56 900
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{
          duration: 2.5,
          ease,
        }}
      />

      <path
        d="M49 273C29 258 18 258 8 269"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />

      <path
        d="M46 510C65 494 77 491 92 498"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />

      <path
        d="M43 752C26 739 15 739 5 748"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

/* =========================================================
   STUDENT LIFE
========================================================= */

export function StudentLifeSection() {
  return (
    <section
      id="student-life"
      aria-labelledby="student-life-heading"
      className="relative isolate overflow-hidden bg-[#FCFAF4]"
    >
      {/* Atmospheric continuity from Learning */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#FCFAF4_0%,#FBF8EF_38%,#F7F4E6_74%,#F3F0D9_100%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-12%] top-[18%] h-[620px] w-[620px] rounded-full bg-[#A4AB58]/[0.035] blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-[48%] h-[680px] w-[680px] rounded-full bg-[#6A351F]/[0.025] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[5%] left-[30%] h-[520px] w-[720px] rounded-full bg-[#A8AE59]/[0.04] blur-[120px]"
      />

      <LivingCanopy />
      <MobileGrowthLine />

      <div className="relative z-10 mx-auto max-w-[1480px] px-5 pb-20 pt-20 sm:px-7 sm:pb-24 sm:pt-24 lg:px-10 lg:pb-28 lg:pt-28 xl:px-12">
        {/* =====================================================
            OPENING
        ====================================================== */}
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.09,
              },
            },
          }}
          className="mx-auto max-w-[850px] text-center"
        >
          <motion.div variants={reveal}>
            <BotanicalMark />
          </motion.div>

          <motion.p
            variants={reveal}
            className="mt-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#737C29] sm:text-[11px]"
          >
            Student Life
          </motion.p>

          <motion.h2
            id="student-life-heading"
            variants={reveal}
            className="mx-auto mt-5 max-w-[820px] text-[42px] font-semibold leading-[1.03] tracking-[-0.05em] text-[#211713] sm:text-[54px] lg:text-[66px]"
          >
            More than school.
            <span className="mt-1 block text-[#66751C]">
              A place to belong.
            </span>
          </motion.h2>

          <motion.p
            variants={reveal}
            className="mx-auto mt-6 max-w-[650px] text-[15px] leading-7 text-[#70665E] sm:text-[17px] sm:leading-8"
          >
            Childhood is shaped by the people beside us, the moments we share
            and the confidence we discover along the way.
          </motion.p>
        </motion.header>

        {/* =====================================================
            BELONGING
        ====================================================== */}
        <article className="relative mx-auto mt-14 max-w-[1250px] sm:mt-16 lg:mt-20">
          <motion.div
            initial={photoReveal.initial}
            whileInView={photoReveal.whileInView}
            viewport={{ once: true, amount: 0.18 }}
            transition={{
              duration: 0.8,
              ease,
            }}
            className="relative ml-auto w-full lg:w-[88%]"
          >
            <EditorialFrame
              src="/images/student-life/student-life-expression.webp"
              alt="TR Narayan students sharing a relaxed moment together during the school day"
              sizes="(max-width: 1024px) 100vw, 1180px"
              className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/8.8]"
              imageClassName="object-center"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={revealLeft}
            className="relative z-20 -mt-10 ml-3 max-w-[390px] sm:-mt-14 sm:ml-8 lg:absolute lg:-left-2 lg:bottom-10 lg:mt-0"
          >
            <div className="border border-[#CBC99B]/50 bg-[#FCFAF4]/95 px-6 py-6 shadow-[0_18px_45px_rgba(72,49,32,0.08)] backdrop-blur-[2px] sm:px-7 sm:py-7">
              <MemoryCaption>First Friendship</MemoryCaption>

              <h3 className="mt-4 text-[24px] font-semibold leading-[1.12] tracking-[-0.035em] text-[#241A15] sm:text-[28px]">
                Growing feels different
                <span className="block text-[#66751C]">
                  when you belong.
                </span>
              </h3>

              <p className="mt-4 max-w-[310px] text-[13px] leading-6 text-[#70665E] sm:text-[14px]">
                The everyday conversations, laughter and friendships that make
                school feel familiar gradually become part of childhood itself.
              </p>
            </div>
          </motion.div>
        </article>

        {/* =====================================================
            FRIENDSHIP
        ====================================================== */}
        <article className="relative mx-auto mt-24 grid max-w-[1160px] items-center gap-10 sm:mt-28 lg:mt-36 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={revealLeft}
            className="relative z-10 order-2 max-w-[420px] lg:order-1"
          >
            <MemoryCaption>Shared Joy</MemoryCaption>

            <h3 className="mt-5 text-[32px] font-semibold leading-[1.06] tracking-[-0.045em] text-[#211713] sm:text-[38px] lg:text-[43px]">
              The moments between
              <span className="block text-[#66751C]">
                lessons matter too.
              </span>
            </h3>

            <p className="mt-5 max-w-[390px] text-[14px] leading-7 text-[#70665E] sm:text-[15px]">
              Friendship grows in ordinary moments—working together, cheering
              each other on, sharing stories and discovering the joy of being
              part of something larger than ourselves.
            </p>

            <div aria-hidden="true" className="mt-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#7A861F]/30" />

              <svg
                viewBox="0 0 25 16"
                className="h-4 w-6 text-[#7A861F]/60"
                fill="none"
              >
                <path
                  d="M2 13C8 12 10 7 14 3"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                />

                <path
                  d="M13.5 3.7C17.2.5 21 .9 23 3C20.7 6.2 17.1 6.7 13.5 3.7Z"
                  stroke="currentColor"
                  strokeWidth="0.9"
                />
              </svg>
            </div>
          </motion.div>

          <motion.div
            initial={photoRevealRight.initial}
            whileInView={photoRevealRight.whileInView}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease,
            }}
            className="relative order-1 lg:order-2"
          >
            <EditorialFrame
              src="/images/student-life/student-life-friendship.webp"
              alt="Students enjoying a natural shared moment with friends at TR Narayan Heritage School"
              sizes="(max-width: 1024px) 100vw, 680px"
              className="aspect-[4/3]"
              imageClassName="object-center"
            />

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
                duration: 0.7,
                delay: 0.45,
                ease,
              }}
              className="absolute -bottom-5 right-[12%] h-10 w-7 rotate-[28deg] rounded-[100%_0_100%_0] border border-[#7A861F]/20 bg-[#EEF0D8]/40"
            />
          </motion.div>
        </article>

        {/* =====================================================
            EXPRESSION
        ====================================================== */}
        <article className="relative mx-auto mt-24 max-w-[1280px] sm:mt-28 lg:mt-40">
          <div className="grid items-end gap-10 lg:grid-cols-[1.28fr_0.72fr] lg:gap-14">
            <motion.div
              initial={photoRevealLeft.initial}
              whileInView={photoRevealLeft.whileInView}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.8,
                ease,
              }}
            >
              <EditorialFrame
                src="/images/student-life/student-life-belonging.jpg"
                alt="Students expressing themselves creatively and confidently during school life at TR Narayan"
                sizes="(max-width: 1024px) 100vw, 790px"
                className="aspect-[3/2]"
                imageClassName="object-center"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={revealRight}
              className="relative pb-3 lg:pb-10"
            >
              <MemoryCaption>Creative Courage</MemoryCaption>

              <h3 className="mt-5 text-[32px] font-semibold leading-[1.07] tracking-[-0.045em] text-[#211713] sm:text-[39px] lg:text-[45px]">
                Space to express.
                <span className="block text-[#66751C]">
                  Confidence to be themselves.
                </span>
              </h3>

              <p className="mt-5 max-w-[430px] text-[14px] leading-7 text-[#70665E] sm:text-[15px]">
                Children discover their voice when they have room to create,
                participate, try something unfamiliar and be celebrated for
                who they are becoming.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7A861F]/75">
                  Growing Together
                </span>

                <span className="h-px flex-1 bg-[#7A861F]/20" />
              </div>
            </motion.div>
          </div>
        </article>

        {/* =====================================================
            CONFIDENCE
        ====================================================== */}
        <article className="relative mx-auto mt-24 max-w-[1110px] sm:mt-28 lg:mt-40">
          <div className="grid items-center gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={revealLeft}
              className="order-2 max-w-[420px] lg:order-1"
            >
              <MemoryCaption>
                A Moment They&apos;ll Remember
              </MemoryCaption>

              <h3 className="mt-5 text-[31px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#211713] sm:text-[38px] lg:text-[42px]">
                Little moments become
                <span className="block text-[#66751C]">
                  lifelong memories.
                </span>
              </h3>

              <p className="mt-5 text-[14px] leading-7 text-[#70665E] sm:text-[15px]">
                Helping a friend. Taking the lead. Finding the courage to step
                forward. These quiet milestones shape confidence long after
                the school day ends.
              </p>

              <div aria-hidden="true" className="mt-8 flex items-center gap-3">
                <span className="h-px w-14 bg-[#7A861F]/25" />
                <span className="size-1 rounded-full bg-[#7A861F]/45" />
                <span className="h-px w-5 bg-[#7A861F]/20" />
              </div>
            </motion.div>

            <motion.div
              initial={photoRevealRight.initial}
              whileInView={photoRevealRight.whileInView}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                ease,
              }}
              className="relative order-1 lg:order-2"
            >
              <EditorialFrame
                src="/images/student-life/student-life-confidence.webp"
                alt="A student showing kindness, leadership or confidence during an everyday moment at TR Narayan Heritage School"
                sizes="(max-width: 1024px) 100vw, 680px"
                className="aspect-[4/3] sm:aspect-[3/2]"
                imageClassName="object-center"
              />

              <div
                aria-hidden="true"
                className="absolute -left-6 top-[16%] hidden h-20 w-20 rounded-full border border-[#7A861F]/10 lg:block"
              />
            </motion.div>
          </div>
        </article>

        {/* =====================================================
            EMOTIONAL COMPLETION
        ====================================================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={reveal}
          className="relative mx-auto mt-28 max-w-[820px] text-center sm:mt-32 lg:mt-40"
        >
          <BotanicalMark />

          <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#737C29] sm:text-[11px]">
            Growing Up Together
          </p>

          <p className="mx-auto mt-4 max-w-[680px] text-[27px] font-medium leading-[1.22] tracking-[-0.035em] text-[#30231C] sm:text-[34px]">
            A school becomes part of childhood.
            <span className="block text-[#66751C]">
              The memories stay much longer.
            </span>
          </p>
        </motion.div>
      </div>

      {/* =====================================================
          GRACEFUL CANOPY EXIT
      ====================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative z-0 -mt-8 h-28 overflow-hidden sm:h-36 lg:h-44"
      >
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full text-[#7A861F]"
          fill="none"
        >
          <path
            d="
              M-30 117
              C160 158 303 135 438 103
              C578 69 710 74 842 110
              C1000 153 1168 158 1470 92
            "
            stroke="currentColor"
            strokeWidth="1.15"
            strokeLinecap="round"
            className="opacity-[0.12]"
          />

          <path
            d="
              M-20 140
              C190 173 330 151 467 124
              C608 97 731 99 872 130
              C1034 166 1190 165 1465 118
            "
            stroke="currentColor"
            strokeWidth="0.8"
            strokeLinecap="round"
            className="opacity-[0.07]"
          />

          <path
            d="M251 139C231 112 201 113 185 133C201 153 228 158 251 139Z"
            fill="currentColor"
            fillOpacity="0.06"
            stroke="currentColor"
            strokeWidth="0.8"
            className="opacity-[0.7]"
          />

          <path
            d="M1124 151C1146 122 1178 126 1191 147C1171 167 1145 170 1124 151Z"
            fill="currentColor"
            fillOpacity="0.06"
            stroke="currentColor"
            strokeWidth="0.8"
            className="opacity-[0.7]"
          />
        </svg>

        <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-b from-transparent to-[#F2EFD9]/60" />
      </div>
    </section>
  );
}