"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { LearningItem } from "./learning-data";

type LearningCardProps = {
  item: LearningItem;
  className?: string;
};

export function LearningCard({
  item,
  className = "",
}: LearningCardProps) {
  const Icon = item.icon;

  return (
    <motion.article
      className={`absolute z-20 w-[250px] sm:w-[280px] lg:w-[310px] ${className}`}
      initial={{
        opacity: 0,
        y: 28,
        rotate: item.rotation,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: item.rotation,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
        transition: {
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
    >
      <div className="relative">
        {/* Photo */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] border border-[#74633e]/15 bg-[#f8f4e9] p-[5px] shadow-[0_22px_50px_rgba(57,45,27,0.16)]">
          <div className="relative h-full w-full overflow-hidden rounded-[17px]">
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 250px, 310px"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-[#efe9d8]/[0.06]" />
          </div>
        </div>

        {/* Attached label */}
        <div className="absolute -bottom-6 left-1/2 flex w-[88%] -translate-x-1/2 items-center gap-3 rounded-full border border-[#7a713f]/10 bg-[#fffdf7] px-4 py-3 shadow-[0_12px_28px_rgba(53,43,28,0.13)]">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#788333]/20 bg-[#f5f4e8] text-[#63712d]">
            <Icon size={17} strokeWidth={1.5} />
          </span>

          <div className="min-w-0">
            <p className="text-[10px] font-semibold tracking-[0.16em] text-[#3b3028]">
              {item.label}
            </p>

            <p className="mt-1 line-clamp-2 text-[10px] leading-[1.45] text-[#756d62]">
              {item.benefit}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}