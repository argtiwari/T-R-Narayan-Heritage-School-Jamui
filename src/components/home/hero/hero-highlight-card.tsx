"use client";

import type { ElementType } from "react";
import { ArrowUpRight, Leaf } from "lucide-react";

export type HeroHighlightCardProps = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  icon: ElementType;
  tone: "ivory" | "paper" | "sage" | "linen";
};

const toneStyles = {
  ivory: "bg-[#FBF8F0]",
  paper: "bg-[#FFFDF8]",
  sage: "bg-[#F2F5E9]",
  linen: "bg-[#F8F3E9]",
};

export function HeroHighlightCard({
  id,
  title,
  subtitle,
  description,
  cta,
  icon: Icon,
  tone,
}: HeroHighlightCardProps) {
  return (
    <article
      className={[
        "group relative flex min-h-[174px] flex-col overflow-hidden",
        "rounded-[18px] border border-[#DDD5C5]",
        "px-4.5 py-4.5 sm:px-5 sm:py-5",
        toneStyles[tone],
        "transition-[border-color,box-shadow,background-color] duration-500",
        "hover:border-[#AEBB82]",
        "hover:shadow-[0_14px_34px_rgba(62,43,30,0.055)]",
      ].join(" ")}
    >
      {/* quiet inner museum frame */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[5px] rounded-[13px] border border-[#FFFFFF]/45"
      />

      {/* soft sage atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-14 size-32 rounded-full bg-[#B8C99A]/0 blur-2xl transition-colors duration-700 group-hover:bg-[#B8C99A]/15"
      />

      {/* botanical corner */}
      <Leaf
        aria-hidden="true"
        size={38}
        strokeWidth={0.7}
        className="pointer-events-none absolute -right-1 -top-1 rotate-[24deg] text-[#89985F] opacity-0 transition-all duration-500 group-hover:right-2 group-hover:top-2 group-hover:opacity-[0.14]"
      />

      {/* number + icon */}
      <div className="relative flex items-start justify-between">
        <span className="text-[9px] font-semibold tracking-[0.24em] text-[#8A9561]">
          {id}
        </span>

        <span className="flex size-8 items-center justify-center rounded-full border border-[#D9DEC7] bg-[#F7F8F0]/80">
          <Icon
            size={15}
            strokeWidth={1.35}
            aria-hidden="true"
            className="text-[#718044]"
          />
        </span>
      </div>

      {/* content */}
      <div className="relative mt-5">
        <h2 className="text-[14px] font-semibold leading-[1.18] tracking-[-0.025em] text-[#2C211B] sm:text-[15px]">
          {title}
        </h2>

        <p className="mt-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#7D8953]">
          {subtitle}
        </p>

        {/* growing rule */}
        <div className="mt-3.5 h-px w-full overflow-hidden bg-[#DCD5C7]">
          <div className="h-full w-[26%] bg-[#98A66D] transition-all duration-500 ease-out group-hover:w-full" />
        </div>

        <p className="mt-3 text-[10.5px] leading-[1.55] text-[#70665E]">
          {description}
        </p>
      </div>

      {/* editorial footer */}
      <div className="relative mt-auto flex items-end justify-between pt-4">
        <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8A806F] transition-colors duration-300 group-hover:text-[#687541]">
          {cta}
        </span>

        <ArrowUpRight
          size={13}
          strokeWidth={1.4}
          aria-hidden="true"
          className="translate-y-0.5 text-[#7A861F]/45 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        />
      </div>

      {/* bottom growth line */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-5 h-px w-0 bg-[#87965B] transition-all duration-500 ease-out group-hover:w-[42%]"
      />
    </article>
  );
}