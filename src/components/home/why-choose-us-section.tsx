"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const chapters = [
  {
    number: "01",
    title: "Strong Foundations",
    description:
      "A child's journey begins with belonging. Through care, values and meaningful relationships, we create the foundation from which confident learning can grow.",
    image: "/images/why-choose-us/wcu-foundations.webp",
    alt: "Teacher nurturing young students during a classroom learning activity",
    side: "left",
    tone: "ivory",
    imageClassName: "object-center",
  },
  {
    number: "02",
    title: "Learning with Curiosity",
    description:
      "Learning becomes meaningful when children are encouraged to question, explore and discover—not simply remember answers.",
    image: "/images/why-choose-us/wcu-curiosity.webp",
    alt: "Students exploring and learning together through a practical activity",
    side: "right",
    tone: "cream",
    imageClassName: "object-center",
  },
  {
    number: "03",
    title: "Character & Confidence",
    description:
      "Education reaches beyond academics. Responsibility, empathy and opportunities to express themselves help children discover their own voice.",
    image: "/images/why-choose-us/wcu-confidence.webp",
    alt: "Student confidently participating in a school activity",
    side: "left",
    tone: "sage",
    imageClassName: "object-center",
  },
  {
    number: "04",
    title: "Ready to Flourish",
    description:
      "With strong roots, curious minds and growing confidence, students become independent thinkers prepared to embrace what comes next.",
    image: "/images/why-choose-us/wcu-flourish.webp",
    alt: "Students walking confidently together through the school campus",
    side: "right",
    tone: "warm",
    imageClassName: "object-center",
  },
] as const;

type Chapter = (typeof chapters)[number];

const toneClasses: Record<Chapter["tone"], string> = {
  ivory:
    "bg-[linear-gradient(135deg,rgba(255,254,249,0.78)_0%,rgba(250,247,237,0.56)_54%,rgba(247,246,234,0.42)_100%)]",
  cream:
    "bg-[linear-gradient(135deg,rgba(252,249,240,0.62)_0%,rgba(255,254,249,0.76)_52%,rgba(248,246,235,0.48)_100%)]",
  sage:
    "bg-[linear-gradient(135deg,rgba(249,248,239,0.72)_0%,rgba(241,244,225,0.5)_54%,rgba(250,248,240,0.58)_100%)]",
  warm:
    "bg-[linear-gradient(135deg,rgba(253,250,242,0.66)_0%,rgba(249,246,237,0.5)_48%,rgba(247,244,232,0.54)_100%)]",
};

const EASE = [0.22, 1, 0.36, 1] as const;

/* -------------------------------------------------------------------------- */
/*                                  MOTION                                    */
/* -------------------------------------------------------------------------- */

const introVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: EASE,
    },
  },
};

const imageVariants: Variants = {
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
      duration: 0.7,
      ease: EASE,
    },
  },
};

const copyVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.08,
      ease: EASE,
    },
  },
};

const branchViewport = {
  once: true,
  amount: 0.08,
};

const branchInitial = {
  pathLength: 0,
  opacity: 0,
};

const branchVisible = {
  pathLength: 1,
  opacity: 1,
};

function getLeafMotion(delay: number) {
  return {
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
      amount: 0.15,
    },
    transition: {
      duration: 0.45,
      delay,
      ease: EASE,
    },
  };
}

/* -------------------------------------------------------------------------- */
/*                                  INTRO                                     */
/* -------------------------------------------------------------------------- */

function BrandEyebrow() {
  return (
    <div className="mb-5 flex flex-col items-center">
      <div
        aria-hidden="true"
        className="mb-3 flex items-center justify-center gap-2.5"
      >
        <span className="h-px w-7 bg-gradient-to-r from-transparent to-[#7b8530]/45 sm:w-10" />

        <svg
          viewBox="0 0 46 20"
          fill="none"
          className="h-5 w-[46px]"
        >
          <path
            d="M2 15.5C12 14.5 17.5 10.5 23 5"
            stroke="#747D2C"
            strokeOpacity=".6"
            strokeWidth="1.1"
            strokeLinecap="round"
          />

          <path
            d="M22.5 5.4C24.7 1.8 29.1 1.3 32 3.8C29.6 7.3 25.7 8 22.5 5.4Z"
            fill="#E7EACD"
            stroke="#747D2C"
            strokeOpacity=".72"
            strokeWidth=".9"
          />

          <path
            d="M14.5 12C12.3 8.7 8.4 8.4 6.2 10.8C8.2 14 11.6 14.5 14.5 12Z"
            fill="#F0EAD9"
            stroke="#8B744E"
            strokeOpacity=".48"
            strokeWidth=".8"
          />

          <path
            d="M23 5C28 9.8 34.2 12.2 44 12.5"
            stroke="#747D2C"
            strokeOpacity=".36"
            strokeWidth=".9"
            strokeLinecap="round"
          />
        </svg>

        <span className="h-px w-7 bg-gradient-to-l from-transparent to-[#7b8530]/45 sm:w-10" />
      </div>

      <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#687321] sm:text-[11px]">
        Why TR Narayan
      </p>
    </div>
  );
}

function SectionIntro() {
  return (
    <motion.header
      variants={introVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.55,
      }}
      className="mx-auto max-w-[780px] text-center"
    >
      <BrandEyebrow />

      <h2
        id="why-tr-narayan-heading"
        className="mx-auto max-w-[730px] text-balance text-[38px] font-semibold leading-[1.055] tracking-[-0.046em] text-[#21170f] sm:text-[48px] lg:text-[56px]"
      >
        Where growth{" "}
        <span className="text-[#68751c]">
          takes root.
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-[610px] text-[15px] leading-[1.8] text-[#6f6358] sm:mt-6 sm:text-base">
        Every child begins with potential. We create the environment, guidance
        and experiences that help that potential grow with purpose.
      </p>
    </motion.header>
  );
}

/* -------------------------------------------------------------------------- */
/*                              ORGANIC BRANCH                                */
/* -------------------------------------------------------------------------- */

function OrganicBranch() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-8 left-1/2 z-0 hidden w-[360px] -translate-x-1/2 lg:block xl:w-[410px]"
    >
      <svg
        viewBox="0 0 410 1900"
        preserveAspectRatio="none"
        fill="none"
        className="h-full w-full overflow-visible"
      >
        {/* Main living stem */}
        <motion.path
          d="
            M205 0
            C212 118 164 188 172 310
            C181 431 241 491 220 610
            C201 722 145 786 159 910
            C173 1032 239 1102 220 1226
            C201 1348 151 1410 166 1531
            C177 1626 211 1718 199 1900
          "
          stroke="#717A28"
          strokeOpacity="0.27"
          strokeWidth="2"
          strokeLinecap="round"
          initial={branchInitial}
          whileInView={branchVisible}
          viewport={branchViewport}
          transition={{
            pathLength: {
              duration: 2.25,
              ease: EASE,
            },
            opacity: {
              duration: 0.45,
            },
          }}
        />

        {/* Upper-left branch */}
        <motion.path
          d="
            M173 300
            C142 282 116 254 98 220
            C86 197 82 174 85 150
          "
          stroke="#78812D"
          strokeOpacity="0.2"
          strokeWidth="1.45"
          strokeLinecap="round"
          initial={branchInitial}
          whileInView={branchVisible}
          viewport={branchViewport}
          transition={{
            pathLength: {
              duration: 0.75,
              delay: 0.4,
              ease: EASE,
            },
            opacity: {
              duration: 0.3,
              delay: 0.4,
            },
          }}
        />

        {/* Upper-right branch */}
        <motion.path
          d="
            M220 610
            C252 585 278 552 293 516
            C301 497 304 478 302 459
          "
          stroke="#78812D"
          strokeOpacity="0.2"
          strokeWidth="1.45"
          strokeLinecap="round"
          initial={branchInitial}
          whileInView={branchVisible}
          viewport={branchViewport}
          transition={{
            pathLength: {
              duration: 0.75,
              delay: 0.72,
              ease: EASE,
            },
            opacity: {
              duration: 0.3,
              delay: 0.72,
            },
          }}
        />

        {/* Middle-left branch */}
        <motion.path
          d="
            M159 910
            C128 888 103 859 88 825
            C78 803 76 781 79 760
          "
          stroke="#78812D"
          strokeOpacity="0.19"
          strokeWidth="1.4"
          strokeLinecap="round"
          initial={branchInitial}
          whileInView={branchVisible}
          viewport={branchViewport}
          transition={{
            pathLength: {
              duration: 0.75,
              delay: 1.02,
              ease: EASE,
            },
            opacity: {
              duration: 0.3,
              delay: 1.02,
            },
          }}
        />

        {/* Middle-right branch */}
        <motion.path
          d="
            M220 1226
            C253 1201 278 1170 292 1134
            C300 1115 303 1097 301 1077
          "
          stroke="#78812D"
          strokeOpacity="0.19"
          strokeWidth="1.4"
          strokeLinecap="round"
          initial={branchInitial}
          whileInView={branchVisible}
          viewport={branchViewport}
          transition={{
            pathLength: {
              duration: 0.75,
              delay: 1.3,
              ease: EASE,
            },
            opacity: {
              duration: 0.3,
              delay: 1.3,
            },
          }}
        />

        {/* Lower-left branch */}
        <motion.path
          d="
            M166 1531
            C138 1514 114 1488 98 1458
            C88 1439 84 1418 86 1398
          "
          stroke="#78812D"
          strokeOpacity="0.17"
          strokeWidth="1.35"
          strokeLinecap="round"
          initial={branchInitial}
          whileInView={branchVisible}
          viewport={branchViewport}
          transition={{
            pathLength: {
              duration: 0.75,
              delay: 1.56,
              ease: EASE,
            },
            opacity: {
              duration: 0.3,
              delay: 1.56,
            },
          }}
        />

        {/* Tiny secondary growth */}
        <motion.path
          d="M113 242 C97 234 84 222 75 207"
          stroke="#78812D"
          strokeOpacity="0.13"
          strokeWidth="1"
          strokeLinecap="round"
          initial={branchInitial}
          whileInView={branchVisible}
          viewport={branchViewport}
          transition={{
            pathLength: {
              duration: 0.45,
              delay: 0.72,
              ease: EASE,
            },
            opacity: {
              duration: 0.25,
              delay: 0.72,
            },
          }}
        />

        <motion.path
          d="M277 550 C294 543 309 532 320 518"
          stroke="#78812D"
          strokeOpacity="0.13"
          strokeWidth="1"
          strokeLinecap="round"
          initial={branchInitial}
          whileInView={branchVisible}
          viewport={branchViewport}
          transition={{
            pathLength: {
              duration: 0.45,
              delay: 1,
              ease: EASE,
            },
            opacity: {
              duration: 0.25,
              delay: 1,
            },
          }}
        />

        <motion.path
          d="M106 861 C90 855 76 844 66 830"
          stroke="#78812D"
          strokeOpacity="0.12"
          strokeWidth="1"
          strokeLinecap="round"
          initial={branchInitial}
          whileInView={branchVisible}
          viewport={branchViewport}
          transition={{
            pathLength: {
              duration: 0.45,
              delay: 1.3,
              ease: EASE,
            },
            opacity: {
              duration: 0.25,
              delay: 1.3,
            },
          }}
        />

        {/* Leaves */}
        <motion.path
          d="M85 151C61 134 57 106 77 88C98 106 101 132 85 151Z"
          fill="#EDF0D5"
          fillOpacity="0.62"
          stroke="#737D2A"
          strokeWidth="1"
          strokeOpacity="0.3"
          style={{
            transformOrigin: "85px 151px",
          }}
          {...getLeafMotion(0.85)}
        />

        <motion.path
          d="M301 459C324 440 351 448 358 473C335 486 313 481 301 459Z"
          fill="#E9EDD0"
          fillOpacity="0.58"
          stroke="#737D2A"
          strokeWidth="1"
          strokeOpacity="0.3"
          style={{
            transformOrigin: "301px 459px",
          }}
          {...getLeafMotion(1.08)}
        />

        <motion.path
          d="M79 760C56 742 30 750 24 775C47 787 68 781 79 760Z"
          fill="#F1EAD8"
          fillOpacity="0.52"
          stroke="#8B744E"
          strokeWidth="1"
          strokeOpacity="0.24"
          style={{
            transformOrigin: "79px 760px",
          }}
          {...getLeafMotion(1.35)}
        />

        <motion.path
          d="M301 1077C325 1059 350 1068 356 1093C333 1105 312 1099 301 1077Z"
          fill="#E9EDD0"
          fillOpacity="0.58"
          stroke="#737D2A"
          strokeWidth="1"
          strokeOpacity="0.3"
          style={{
            transformOrigin: "301px 1077px",
          }}
          {...getLeafMotion(1.58)}
        />

        <motion.path
          d="M86 1398C63 1382 39 1390 34 1414C56 1425 76 1419 86 1398Z"
          fill="#EDF0D5"
          fillOpacity="0.5"
          stroke="#737D2A"
          strokeWidth="1"
          strokeOpacity="0.3"
          style={{
            transformOrigin: "86px 1398px",
          }}
          {...getLeafMotion(1.82)}
        />

        {/* Tiny nodes */}
        <circle
          cx="172"
          cy="310"
          r="3"
          fill="#747D2C"
          fillOpacity="0.18"
        />

        <circle
          cx="220"
          cy="610"
          r="3"
          fill="#747D2C"
          fillOpacity="0.18"
        />

        <circle
          cx="159"
          cy="910"
          r="3"
          fill="#747D2C"
          fillOpacity="0.18"
        />

        <circle
          cx="220"
          cy="1226"
          r="3"
          fill="#747D2C"
          fillOpacity="0.18"
        />
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  IMAGE                                     */
/* -------------------------------------------------------------------------- */

function ChapterImage({
  chapter,
  index,
}: {
  chapter: Chapter;
  index: number;
}) {
  return (
    <div className="relative">
      {/* Restrained ambient glow */}
      <div
        aria-hidden="true"
        className={[
          "pointer-events-none absolute h-[72%] w-[72%] rounded-full blur-[80px]",
          index % 2 === 0
            ? "-bottom-[14%] -left-[8%] bg-[#89933a]/[0.075]"
            : "-right-[7%] -top-[14%] bg-[#876a48]/[0.055]",
        ].join(" ")}
      />

      {/* Partial organic contour */}
      <div
        aria-hidden="true"
        className={[
          "pointer-events-none absolute hidden size-32 rounded-full border border-[#7d8731]/[0.13] sm:block lg:size-40",
          index % 2 === 0
            ? "-bottom-5 -left-5"
            : "-right-5 -top-5",
        ].join(" ")}
      />

      <figure className="relative overflow-hidden rounded-[24px] border border-white/90 bg-[#eee9df] shadow-[0_24px_65px_rgba(61,44,29,0.095)] sm:rounded-[28px]">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={chapter.image}
            alt={chapter.alt}
            fill
            sizes="(max-width: 639px) 94vw, (max-width: 1023px) 90vw, (max-width: 1439px) 47vw, 650px"
            className={`object-cover ${chapter.imageClassName}`}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,249,230,0.018),rgba(74,50,30,0.025))]"
          />
        </div>
      </figure>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   COPY                                     */
/* -------------------------------------------------------------------------- */

function ChapterMarker({ number }: { number: string }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="font-serif text-[13px] font-medium tracking-[0.14em] text-[#687322]">
        {number}
      </span>

      <span
        aria-hidden="true"
        className="h-px w-9 bg-gradient-to-r from-[#77812d]/40 to-transparent"
      />

      <svg
        aria-hidden="true"
        viewBox="0 0 15 10"
        className="h-2.5 w-[15px]"
        fill="none"
      >
        <path
          d="M1 8C5 7.5 8 5.2 10 1.5"
          stroke="#77812D"
          strokeOpacity=".42"
          strokeWidth=".8"
          strokeLinecap="round"
        />

        <path
          d="M9.8 1.8C11.1.2 13.3.3 14.2 1.8C12.8 3.5 11 3.5 9.8 1.8Z"
          fill="#E5E9C8"
          stroke="#77812D"
          strokeOpacity=".48"
          strokeWidth=".6"
        />
      </svg>
    </div>
  );
}

function ChapterCopy({
  chapter,
}: {
  chapter: Chapter;
}) {
  return (
    <div className="relative max-w-[460px]">
      <ChapterMarker number={chapter.number} />

      <h3 className="text-balance text-[29px] font-semibold leading-[1.1] tracking-[-0.038em] text-[#211710] sm:text-[34px] lg:text-[37px]">
        {chapter.title}
      </h3>

      <p className="mt-4 max-w-[430px] text-[15px] leading-[1.82] text-[#6c6157] sm:mt-5 sm:text-base">
        {chapter.description}
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              STORY CHAPTER                                 */
/* -------------------------------------------------------------------------- */

function StoryChapter({
  chapter,
  index,
}: {
  chapter: Chapter;
  index: number;
}) {
  const imageFirst = chapter.side === "left";

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className={[
        "relative isolate overflow-hidden",
        "rounded-[26px] sm:rounded-[30px] lg:rounded-[36px]",
        "px-5 py-7 sm:px-8 sm:py-9",
        "lg:px-10 lg:py-10 xl:px-12 xl:py-11",
        toneClasses[chapter.tone],
      ].join(" ")}
    >
      {/* Asymmetric atmospheric field */}
      <div
        aria-hidden="true"
        className={[
          "pointer-events-none absolute -z-10 h-[390px] w-[390px] rounded-full blur-[95px]",
          index % 2 === 0
            ? "-left-40 -top-32 bg-[#9ca554]/[0.055]"
            : "-right-40 -bottom-32 bg-[#805d42]/[0.04]",
        ].join(" ")}
      />

      {/* Very quiet organic edge */}
      <svg
        aria-hidden="true"
        viewBox="0 0 180 180"
        fill="none"
        className={[
          "pointer-events-none absolute hidden h-[180px] w-[180px] text-[#7a8430] opacity-[0.08] md:block",
          index % 2 === 0
            ? "-bottom-16 -right-12"
            : "-left-12 -top-16 rotate-180",
        ].join(" ")}
      >
        <path
          d="M8 171C40 135 48 93 79 66C105 43 139 38 172 8"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />

        <path
          d="M79 66C67 46 69 29 84 15"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />

        <path
          d="M121 42C140 48 156 44 168 31"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>

      <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        {imageFirst ? (
          <>
            <motion.div variants={imageVariants}>
              <ChapterImage
                chapter={chapter}
                index={index}
              />
            </motion.div>

            <motion.div
              variants={copyVariants}
              className="flex lg:justify-center"
            >
              <ChapterCopy chapter={chapter} />
            </motion.div>
          </>
        ) : (
          <>
            <motion.div
              variants={copyVariants}
              className="order-2 flex lg:order-1 lg:justify-center"
            >
              <ChapterCopy chapter={chapter} />
            </motion.div>

            <motion.div
              variants={imageVariants}
              className="order-1 lg:order-2"
            >
              <ChapterImage
                chapter={chapter}
                index={index}
              />
            </motion.div>
          </>
        )}
      </div>
    </motion.article>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  SECTION                                   */
/* -------------------------------------------------------------------------- */

export function WhyChooseUsSection() {
  return (
    <section
      aria-labelledby="why-tr-narayan-heading"
      className="relative isolate overflow-hidden bg-[#fffdf8]"
    >
      {/* Statistics → Why Choose Us transition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(248,246,236,0.58),rgba(255,253,248,0))] sm:h-28"
      />

      {/* Global atmospheric layers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-[17%] top-[8%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(130,140,56,0.06),transparent_68%)]" />

        <div className="absolute -right-[18%] top-[37%] h-[650px] w-[650px] rounded-full bg-[radial-gradient(circle,rgba(116,80,53,0.04),transparent_70%)]" />

        <div className="absolute left-[10%] top-[65%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(141,151,72,0.045),transparent_70%)]" />

        <div className="absolute -right-[10%] bottom-[2%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(126,136,58,0.04),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-[1480px] px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-18 lg:px-8 lg:pb-24 lg:pt-20">
        <SectionIntro />

        <div className="relative mt-12 sm:mt-14 lg:mt-18">
          <OrganicBranch />

          <div className="relative z-10 space-y-6 sm:space-y-8 lg:space-y-10">
            {chapters.map((chapter, index) => (
              <StoryChapter
                key={chapter.number}
                chapter={chapter}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Story completion mark */}
        <motion.div
          aria-hidden="true"
          initial={{
            opacity: 0,
            y: 8,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.8,
          }}
          transition={{
            duration: 0.55,
            ease: EASE,
          }}
          className="mt-12 flex items-center justify-center gap-3 sm:mt-14 lg:mt-16"
        >
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#7b8530]/35 sm:w-16" />

          <svg
            viewBox="0 0 30 18"
            fill="none"
            className="h-[18px] w-[30px]"
          >
            <path
              d="M2 15C9 14 13.5 10 16 4"
              stroke="#747D2C"
              strokeOpacity=".5"
              strokeWidth="1"
              strokeLinecap="round"
            />

            <path
              d="M15.5 4.4C18.1.8 22.8.8 25.2 4C22.3 7.4 18.4 7.3 15.5 4.4Z"
              fill="#E7EACD"
              stroke="#747D2C"
              strokeOpacity=".58"
              strokeWidth=".8"
            />
          </svg>

          <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#7b8530]/35 sm:w-16" />
        </motion.div>
      </div>

      {/* Why Choose Us → next section */}
      <div
        aria-hidden="true"
        className="h-14 bg-[linear-gradient(180deg,rgba(255,253,248,0),rgba(244,246,231,0.52))] sm:h-16"
      />
    </section>
  );
}