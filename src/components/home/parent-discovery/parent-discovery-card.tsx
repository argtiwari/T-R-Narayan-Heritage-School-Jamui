"use client";

import Image from "next/image";
import type { LucideIcon } from "lucide-react";

type ParentDiscoveryCardProps = {
  label: string;
  benefit: string;
  icon: LucideIcon;
  image?: string;
  rotation?: number;
  className?: string;
};

export default function ParentDiscoveryCard({
  label,
  benefit,
  icon: Icon,
  image,
  rotation = 0,
  className = "",
}: ParentDiscoveryCardProps) {
  return (
    <article
      className={`group relative w-[250px] shrink-0 sm:w-[280px] ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      {/* Photograph */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-[#d9d4c4] bg-[#ebe9d9] p-[6px] shadow-[0_24px_55px_rgba(65,48,32,0.13)]">
        <div className="relative h-full w-full overflow-hidden rounded-[15px] bg-[#e5e7d5]">
          {image ? (
            <Image
              src={image}
              alt={label}
              fill
              sizes="280px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-[#e7ead9]">
              <Icon
                size={34}
                strokeWidth={1}
                className="text-[#7a853c]/50"
              />
            </div>
          )}

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[#f7f1df]/[0.08]"
          />
        </div>
      </div>

      {/* Floating label */}
      <div className="relative z-10 mx-auto -mt-6 w-[88%] rounded-[14px] border border-[#d9d3c5] bg-[#fffdf8] px-4 py-3 shadow-[0_16px_32px_rgba(59,45,31,0.14)]">
        <div className="flex items-start gap-3">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[#7c863c]/20 bg-[#f1f3e4] text-[#6d7833]">
            <Icon size={15} strokeWidth={1.45} />
          </span>

          <div className="min-w-0">
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#342922]">
              {label}
            </p>

            <p className="mt-1 text-[10px] leading-[1.45] text-[#777067]">
              {benefit}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}