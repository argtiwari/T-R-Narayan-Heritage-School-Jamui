"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";

import type {
  StatisticId,
  StatisticItem,
} from "./statistics-data";

import { useStatisticsJourney } from "./statistics-journey";

type StatisticCardProps = {
  statistic: StatisticItem;
  className?: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;

const MATERIALS: Record<
  StatisticId,
  {
    surface: string;
    border: string;
  }
> = {
  academics: {
    surface: "bg-[#FCFAF4]",
    border: "border-[#D8D0C1]",
  },
  people: {
    surface: "bg-[#F7F1E7]",
    border: "border-[#DDD3C4]",
  },
  campus: {
    surface: "bg-[#FAF7F0]",
    border: "border-[#DAD3C7]",
  },
  transport: {
    surface: "bg-[#F9F5EB]",
    border: "border-[#D9D0C0]",
  },
};

const DETAIL_LINKS: Record<
  StatisticId,
  {
    href: string;
    label: string;
  }
> = {
  academics: {
    href: "/academics",
    label: "Explore Academics",
  },
  people: {
    href: "/faculty",
    label: "Meet Our People",
  },
  campus: {
    href: "/campus",
    label: "Explore Our Campus",
  },
  transport: {
    href: "/transport",
    label: "Explore Transport",
  },
};

export function StatisticCard({
  statistic,
  className = "",
}: StatisticCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const reducedMotion = useReducedMotion();
  const { activeCard } = useStatisticsJourney();

  const Icon = statistic.icon;
  const material = MATERIALS[statistic.id];
  const detailLink = DETAIL_LINKS[statistic.id];

  const isJourneyActive = activeCard === statistic.id;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 18,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      animate={{
        y: isJourneyActive && !reducedMotion ? -3 : 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: reducedMotion ? 0 : 0.65,
        ease: EASE,
      }}
      className={`
        group relative isolate h-full overflow-hidden
        rounded-[26px] border
        ${material.surface}
        ${material.border}
        ${className}

        ${
          isJourneyActive
            ? "border-[#9A9560] shadow-[0_22px_60px_rgba(67,48,35,0.095)]"
            : "shadow-[0_10px_35px_rgba(67,48,35,0.035)]"
        }

        transition-[border-color,box-shadow]
        duration-700
        hover:border-[#C5B9A6]
        hover:shadow-[0_24px_70px_rgba(67,48,35,0.085)]
      `}
    >
      <CardMaterial statistic={statistic} />

      {/* Journey warmth */}
      <div
        aria-hidden="true"
        className={`
          pointer-events-none absolute inset-0 z-[1]
          rounded-[26px]
          transition-opacity duration-700
          ${
            isJourneyActive
              ? "opacity-100"
              : "opacity-0"
          }
        `}
      >
        <div className="absolute inset-[6px] rounded-[21px] border border-[#8A873D]/15" />

        <div className="absolute left-8 top-0 h-px w-24 bg-[#A38A4B]/35" />
      </div>

      <div className="relative z-10 flex h-full flex-col p-7 sm:p-8 lg:p-9 xl:p-10">
        {/* TOP META */}

        <div className="flex items-start justify-between gap-6">
          <div className="flex items-center gap-3">
            <span
              className={`
                text-[9px] font-semibold tracking-[0.3em]
                transition-colors duration-500
                ${
                  isJourneyActive
                    ? "text-[#626D1E]"
                    : "text-[#7A842D]"
                }
              `}
            >
              {statistic.index}
            </span>

            <span
              aria-hidden="true"
              className={`
                h-px transition-[width,background-color]
                duration-700
                ${
                  isJourneyActive
                    ? "w-10 bg-[#8D8A4B]"
                    : "w-5 bg-[#AAA47C]/60"
                }
              `}
            />

            <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#81776D] sm:text-[10px]">
              {statistic.category}
            </span>
          </div>

          <motion.div
            animate={{
              scale:
                isJourneyActive && !reducedMotion
                  ? 1.08
                  : 1,
            }}
            transition={{
              duration: 0.55,
              ease: EASE,
            }}
          >
            <Icon
              size={20}
              strokeWidth={1.25}
              aria-hidden="true"
              className={`
                shrink-0 transition-colors duration-500
                ${
                  isJourneyActive
                    ? "text-[#5F6B1C]"
                    : "text-[#747E2A]"
                }
              `}
            />
          </motion.div>
        </div>

        {/* PRIMARY STATISTIC */}

        <div className="mt-10 lg:mt-12">
          {statistic.displayValue ? (
            <motion.p
              animate={{
                scale:
                  isJourneyActive && !reducedMotion
                    ? 1.018
                    : 1,
              }}
              transition={{
                duration: 0.6,
                ease: EASE,
              }}
              className="origin-left max-w-[390px] font-serif text-[38px] leading-[0.98] tracking-[-0.04em] text-[#302019] sm:text-[43px] lg:text-[48px]"
            >
              {statistic.displayValue}
            </motion.p>
          ) : (
            <motion.div
              animate={{
                scale:
                  isJourneyActive && !reducedMotion
                    ? 1.025
                    : 1,
              }}
              transition={{
                duration: 0.6,
                ease: EASE,
              }}
              className="flex origin-left items-start"
            >
              {statistic.prefix && (
                <span className="mr-1.5 mt-2 text-[18px] font-medium text-[#39271F]">
                  {statistic.prefix}
                </span>
              )}

              <span className="text-[58px] font-semibold leading-[0.88] tracking-[-0.065em] text-[#2B1D17] sm:text-[66px] lg:text-[72px]">
                {statistic.value?.toLocaleString("en-US")}
              </span>

              {statistic.suffix && (
                <span className="ml-1.5 mt-0.5 text-[25px] font-medium leading-none tracking-[-0.04em] text-[#747E2A] sm:text-[29px]">
                  {statistic.suffix}
                </span>
              )}
            </motion.div>
          )}

          <h3 className="mt-5 max-w-[390px] text-[18px] font-medium leading-snug tracking-[-0.025em] text-[#3D2A21] sm:text-[20px]">
            {statistic.title}
          </h3>

          <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8A8076] sm:text-[10px]">
            {statistic.subtitle}
          </p>
        </div>

        {/* DESCRIPTION */}

        <p className="mt-7 max-w-[560px] text-[13px] leading-[1.8] text-[#746A61] sm:text-[14px]">
          {statistic.description}
        </p>

        {/* EDITORIAL JOURNEY LINE */}

        <div
          aria-hidden="true"
          className="relative mt-7 h-px overflow-hidden bg-[#D9D1C3]"
        >
          <span
            className={`
              absolute inset-y-0 left-0
              bg-[#7C8535]
              transition-[width] duration-700 ease-out

              ${
                isJourneyActive
                  ? "w-full"
                  : "w-[18%]"
              }

              group-hover:w-full
            `}
          />
        </div>

        {/* ===================================================
            DESKTOP DETAILS
        =================================================== */}

        <div className="hidden overflow-hidden lg:block">
          <div
            className="
              grid max-h-0 grid-cols-2
              gap-x-6 gap-y-2.5
              opacity-0

              transition-[max-height,margin,opacity]
              duration-500 ease-out

              group-hover:mt-6
              group-hover:max-h-[230px]
              group-hover:opacity-100
            "
          >
            {statistic.highlights.map((highlight) => (
              <Highlight
                key={highlight}
                text={highlight}
              />
            ))}

            <div className="col-span-2 mt-3">
              <ExploreLink
                href={detailLink.href}
                label={detailLink.label}
              />
            </div>
          </div>
        </div>

        {/* ===================================================
            MOBILE / TABLET
        =================================================== */}

        <div className="mt-auto pt-6 lg:hidden">
          <button
            type="button"
            onClick={() =>
              setIsOpen((current) => !current)
            }
            aria-expanded={isOpen}
            className="
              flex min-h-11 w-full
              items-center justify-between
              border-t border-[#D9D1C3]
              pt-4 text-left

              text-[10px] font-semibold
              uppercase tracking-[0.18em]
              text-[#697326]

              outline-none
              transition-colors

              focus-visible:text-[#3D2A21]
            "
          >
            {isOpen
              ? "Hide details"
              : "Discover more"}

            <ChevronDown
              size={15}
              strokeWidth={1.4}
              aria-hidden="true"
              className={`
                transition-transform duration-300
                ${isOpen ? "rotate-180" : ""}
              `}
            />
          </button>

          <div
            className={`
              grid
              transition-[grid-template-rows,opacity]
              duration-500 ease-out

              ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }
            `}
          >
            <div className="overflow-hidden">
              <div className="grid gap-2.5 pb-2 pt-4 sm:grid-cols-2">
                {statistic.highlights.map(
                  (highlight) => (
                    <Highlight
                      key={highlight}
                      text={highlight}
                    />
                  ),
                )}

                <div className="mt-3 sm:col-span-2">
                  <ExploreLink
                    href={detailLink.href}
                    label={detailLink.label}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   HIGHLIGHT

   Deliberately not icon-heavy.
========================================================= */

function Highlight({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2.5 text-[12px] leading-5 text-[#62584F]">
      <span
        aria-hidden="true"
        className="mt-[8px] size-[3px] shrink-0 rounded-full bg-[#7C8535]"
      />

      <span>{text}</span>
    </div>
  );
}

/* =========================================================
   FUTURE CONTENT ENTRY POINT
========================================================= */

function ExploreLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="
        group/link inline-flex min-h-11
        items-center gap-2

        text-[10px] font-semibold
        uppercase tracking-[0.18em]
        text-[#66721F]

        outline-none
        transition-colors duration-300

        hover:text-[#3F2B21]
        focus-visible:text-[#3F2B21]
      "
    >
      {label}

      <ArrowUpRight
        size={14}
        strokeWidth={1.4}
        aria-hidden="true"
        className="
          transition-transform duration-300
          group-hover/link:translate-x-0.5
          group-hover/link:-translate-y-0.5
        "
      />
    </Link>
  );
}

/* =========================================================
   MATERIAL IDENTITY
========================================================= */

function CardMaterial({
  statistic,
}: {
  statistic: StatisticItem;
}) {
  switch (statistic.id) {
    case "academics":
      return <AcademicsMaterial />;

    case "people":
      return <PeopleMaterial />;

    case "campus":
      return <CampusMaterial />;

    case "transport":
      return <TransportMaterial />;

    default:
      return null;
  }
}

/* 01 — ACADEMICS */

function AcademicsMaterial() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
    >
      <div className="absolute inset-[7px] rounded-[20px] border border-[#8A7E61]/[0.08]" />

      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(77,57,41,0.16) 0.4px, transparent 0.4px)",
          backgroundSize: "6px 6px",
        }}
      />

      <div className="absolute bottom-0 left-[11%] h-[2px] w-[19%] bg-[#A78D4A]/20" />
    </div>
  );
}

/* 02 — PEOPLE */

function PeopleMaterial() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <span className="absolute -right-5 top-[22%] select-none text-[118px] font-semibold leading-none tracking-[-0.09em] text-[#4D3428]/[0.025] sm:text-[140px] lg:-right-8 lg:text-[160px]">
        1200
      </span>

      <div className="absolute -right-20 -top-20 size-56 rounded-full border border-[#7B8338]/[0.045]" />

      <div className="absolute -right-12 -top-12 size-40 rounded-full border border-[#7B8338]/[0.04]" />
    </div>
  );
}

/* 03 — CAMPUS */

function CampusMaterial() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <svg
        viewBox="0 0 520 300"
        fill="none"
        className="absolute bottom-0 right-0 h-[58%] w-[82%] text-[#5E503E] opacity-[0.045]"
      >
        <path
          d="M42 248H494"
          stroke="currentColor"
          strokeWidth="1"
        />

        <path
          d="M96 248V157H221V248"
          stroke="currentColor"
          strokeWidth="1"
        />

        <path
          d="M221 248V115H383V248"
          stroke="currentColor"
          strokeWidth="1"
        />

        <path
          d="M383 248V170H458V248"
          stroke="currentColor"
          strokeWidth="1"
        />

        <path
          d="M202 115L302 62L403 115"
          stroke="currentColor"
          strokeWidth="1"
        />

        <path
          d="M274 248V181H331V248"
          stroke="currentColor"
          strokeWidth="1"
        />

        <path
          d="M244 143H267M289 143H312M334 143H357"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />

        <path
          d="M120 185H145M166 185H191M405 195H429"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />

        <path
          d="M302 62V31"
          stroke="currentColor"
          strokeWidth="1"
        />

        <path
          d="M302 31L328 41L302 51"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

/* 04 — TRANSPORT */

function TransportMaterial() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <svg
        viewBox="0 0 700 320"
        fill="none"
        className="absolute -bottom-5 -right-8 h-[72%] w-[78%]"
      >
        <path
          d="M40 260C118 245 138 184 218 181C304 178 318 238 403 219C485 201 499 123 574 111C620 104 650 117 681 93"
          stroke="#777D39"
          strokeWidth="1.1"
          strokeLinecap="round"
          opacity="0.08"
        />

        <path
          d="M40 278C126 265 152 205 224 201C305 197 334 253 416 237C505 219 521 146 586 132C625 124 654 130 690 110"
          stroke="#8B7443"
          strokeWidth="0.75"
          strokeLinecap="round"
          opacity="0.045"
        />

        <g opacity="0.1">
          <circle
            cx="218"
            cy="181"
            r="4"
            fill="#777D39"
          />

          <circle
            cx="218"
            cy="181"
            r="10"
            stroke="#777D39"
            strokeWidth="0.8"
          />
        </g>

        <g opacity="0.08">
          <circle
            cx="403"
            cy="219"
            r="4"
            fill="#777D39"
          />

          <circle
            cx="403"
            cy="219"
            r="10"
            stroke="#777D39"
            strokeWidth="0.8"
          />
        </g>

        <g opacity="0.09">
          <circle
            cx="574"
            cy="111"
            r="4"
            fill="#A0884D"
          />

          <circle
            cx="574"
            cy="111"
            r="10"
            stroke="#A0884D"
            strokeWidth="0.8"
          />
        </g>
      </svg>

      <div className="absolute bottom-7 right-8 hidden items-center gap-2 opacity-25 sm:flex">
        <span className="size-1 rounded-full bg-[#7A842D]" />

        <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#6F674E]">
          Jamui · Bihar
        </span>
      </div>
    </div>
  );
}