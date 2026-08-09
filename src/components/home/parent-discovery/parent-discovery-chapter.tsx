"use client";

import type { ParentDiscoveryChapter } from "./parent-discovery-data";
import ParentDiscoveryCard from "./parent-discovery-card";

type ParentDiscoveryChapterProps = {
  chapter: ParentDiscoveryChapter;
  index: number;
};

export default function ParentDiscoveryChapter({
  chapter,
  index,
}: ParentDiscoveryChapterProps) {
  const cardRotations = [-4, 3, -2, 4];

  return (
    <article className="relative flex h-full w-screen shrink-0 items-center overflow-hidden bg-[#f8f6ed] px-6 sm:px-10 lg:px-16">
      {/* Botanical left */}
      <div className="absolute inset-y-0 left-0 w-[260px] opacity-70">
        <div className="h-full w-full">
          {/* lightweight CSS botanical impression */}
          <svg
            viewBox="0 0 260 900"
            preserveAspectRatio="none"
            className="h-full w-full text-[#78823a]"
            aria-hidden="true"
          >
            <path
              d="M18 0 C130 120 65 220 155 330 C225 420 120 540 185 650 C220 720 180 810 225 900"
              fill="none"
              stroke="currentColor"
              strokeOpacity=".20"
              strokeWidth="1"
            />

            <ellipse
              cx="76"
              cy="145"
              rx="11"
              ry="22"
              transform="rotate(-35 76 145)"
              fill="currentColor"
              fillOpacity=".16"
            />

            <ellipse
              cx="142"
              cy="300"
              rx="11"
              ry="22"
              transform="rotate(35 142 300)"
              fill="currentColor"
              fillOpacity=".15"
            />

            <ellipse
              cx="115"
              cy="510"
              rx="11"
              ry="22"
              transform="rotate(-35 115 510)"
              fill="currentColor"
              fillOpacity=".14"
            />

            <ellipse
              cx="175"
              cy="710"
              rx="11"
              ry="22"
              transform="rotate(35 175 710)"
              fill="currentColor"
              fillOpacity=".13"
            />
          </svg>
        </div>
      </div>

      {/* Botanical right */}
      <div className="absolute inset-y-0 right-0 w-[260px] scale-x-[-1] opacity-70">
        <svg
          viewBox="0 0 260 900"
          preserveAspectRatio="none"
          className="h-full w-full text-[#78823a]"
          aria-hidden="true"
        >
          <path
            d="M18 0 C130 120 65 220 155 330 C225 420 120 540 185 650 C220 720 180 810 225 900"
            fill="none"
            stroke="currentColor"
            strokeOpacity=".20"
            strokeWidth="1"
          />

          <ellipse
            cx="76"
            cy="145"
            rx="11"
            ry="22"
            transform="rotate(-35 76 145)"
            fill="currentColor"
            fillOpacity=".16"
          />

          <ellipse
            cx="142"
            cy="300"
            rx="11"
            ry="22"
            transform="rotate(35 142 300)"
            fill="currentColor"
            fillOpacity=".15"
          />

          <ellipse
            cx="115"
            cy="510"
            rx="11"
            ry="22"
            transform="rotate(-35 115 510)"
            fill="currentColor"
            fillOpacity=".14"
          />

          <ellipse
            cx="175"
            cy="710"
            rx="11"
            ry="22"
            transform="rotate(35 175 710)"
            fill="currentColor"
            fillOpacity=".13"
          />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1450px] items-center gap-10 lg:grid-cols-[0.95fr_1.1fr]">
        {/* Cards */}
        <div className="relative flex min-h-[520px] items-center justify-center">
          <div className="relative flex w-full max-w-[600px] flex-wrap items-center justify-center gap-6">
            {chapter.items.map((item, itemIndex) => (
              <ParentDiscoveryCard
                key={`${chapter.id}-${item.label}`}
                label={item.label}
                benefit={item.benefit}
                icon={item.icon}
                image={item.image}
                rotation={cardRotations[itemIndex % cardRotations.length]}
                className={
                  itemIndex % 2 === 0
                    ? "translate-y-[-8px]"
                    : "translate-y-[18px]"
                }
              />
            ))}
          </div>
        </div>

        {/* Text */}
        <div className="relative mx-auto max-w-[650px] lg:pl-8">
          <div className="flex items-center gap-4">
            <span className="font-serif text-[15px] italic text-[#9a8040]">
              {chapter.number}
            </span>

            <span className="h-px w-10 bg-[#7a8439]/35" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#77705f]">
              {chapter.eyebrow}
            </span>
          </div>

          <div className="mt-7 flex items-center gap-4 text-[#7a8439]/70">
            <span className="h-px w-10 bg-current" />

            <span className="text-[18px]">✦</span>

            <span className="h-px w-10 bg-current" />
          </div>

          <h2 className="mt-7 max-w-[680px] font-serif text-[48px] font-medium leading-[0.98] tracking-[-0.045em] text-[#2c2019] sm:text-[60px] lg:text-[76px]">
            {chapter.title}
          </h2>

          <p className="mt-7 max-w-[560px] text-[15px] leading-[1.8] text-[#70665d] sm:text-[17px]">
            {chapter.description}
          </p>

          <div className="mt-8 flex max-w-[620px] flex-wrap gap-x-5 gap-y-3">
            {chapter.items.map((item, itemIndex) => (
              <span
                key={`${chapter.id}-feature-${item.label}`}
                className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#697334]"
              >
                {item.label}

                {itemIndex !== chapter.items.length - 1 && (
                  <span className="text-[#b59b43]">•</span>
                )}
              </span>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-3">
            <span className="h-px w-16 bg-[#78823a]/45" />

            <span className="size-1.5 rounded-full bg-[#aa923f]" />

            <span className="text-[9px] uppercase tracking-[0.28em] text-[#888073]">
              TR NARAYAN EXPERIENCE
            </span>
          </div>
        </div>
      </div>

      {/* Chapter number */}
      <div className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#8a8274]">
        {String(index + 1).padStart(2, "0")} / 06
      </div>
    </article>
  );
}