"use client";

import { useEffect, useRef, useState } from "react";
import ParentDiscoveryChapter from "./parent-discovery-chapter";
import { parentDiscoveryChapters } from "./parent-discovery-data";

export default function ParentDiscoverySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      if (!sectionRef.current || !trackRef.current) {
        return;
      }

      const section = sectionRef.current;

      const rect = section.getBoundingClientRect();

      const scrollDistance = section.offsetHeight - window.innerHeight;

      if (scrollDistance <= 0) {
        return;
      }

      const travelled = Math.min(
        Math.max(-rect.top, 0),
        scrollDistance,
      );

      const nextProgress = travelled / scrollDistance;

      setProgress(nextProgress);
    };

    const onScroll = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        update();
        frame = 0;
      });
    };

    update();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  const chapterCount = parentDiscoveryChapters.length;

  const translatePercent =
    progress * (chapterCount - 1) * -100;

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f8f6ed]"
      style={{
        height: `${chapterCount * 100}vh`,
      }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* very subtle paper texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_20%,rgba(225,221,194,0.18),transparent_42%)]"
        />

        {/* horizontal reel */}
        <div
          ref={trackRef}
          className="relative z-10 flex h-full will-change-transform"
          style={{
            transform: `translate3d(${translatePercent}vw, 0, 0)`,
          }}
        >
          {parentDiscoveryChapters.map((chapter, index) => (
            <ParentDiscoveryChapter
              key={chapter.id}
              chapter={chapter}
              index={index}
            />
          ))}
        </div>

        {/* progress line */}
        <div className="pointer-events-none absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2">
          {parentDiscoveryChapters.map((chapter, index) => {
            const chapterProgress =
              progress * (chapterCount - 1);

            const active =
              Math.round(chapterProgress) === index;

            return (
              <span
                key={chapter.id}
                className={[
                  "h-[2px] transition-all duration-300",
                  active
                    ? "w-10 bg-[#758036]"
                    : "w-3 bg-[#758036]/25",
                ].join(" ")}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}