"use client";

import { useEffect, useRef, useState } from "react";
import { discoveryChapters } from "./parent-discovery-data";
import ParentDiscoveryBackground from "./parent-discovery-background";
import ParentDiscoveryBus from "./parent-discovery-bus";
import ParentDiscoveryChapter from "./parent-discovery-chapter";
import ParentDiscoveryProgress from "./parent-discovery-progress";
import "./parent-discovery.css";
import "./parent-discovery-images.css";

export default function ParentDiscoverySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!section || !viewport || !track) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let raf = 0;
    let lastProgress = -1;

    /*
     * ---------------------------------------------------------
     * Calculate the REAL horizontal distance.
     *
     * Do NOT assume:
     * chapters × 100vw
     *
     * We use the actual rendered track width instead.
     * This prevents mobile chapter misalignment.
     * ---------------------------------------------------------
     */
    const getHorizontalDistance = () => {
      return Math.max(
        0,
        track.scrollWidth - viewport.clientWidth,
      );
    };

    /*
     * ---------------------------------------------------------
     * Calculate scroll progress.
     *
     * 0   = first chapter perfectly centered
     * 1   = last chapter perfectly centered
     * ---------------------------------------------------------
     */
    const getProgress = () => {
      const rect = section.getBoundingClientRect();

      const scrollDistance = Math.max(
        1,
        section.offsetHeight - viewport.clientHeight,
      );

      return Math.min(
        1,
        Math.max(
          0,
          -rect.top / scrollDistance,
        ),
      );
    };

    /*
     * ---------------------------------------------------------
     * Apply horizontal position.
     * ---------------------------------------------------------
     */
    const updateScene = () => {
      raf = 0;

      const value = getProgress();
      const distance = getHorizontalDistance();

      const x = -value * distance;

      /*
       * Only update DOM when progress actually changed.
       * This reduces unnecessary work while scrolling.
       */
      if (Math.abs(value - lastProgress) > 0.0005) {
        lastProgress = value;

        track.style.transform = `translate3d(${x}px, 0, 0)`;

        setProgress(value);
      } else {
        /*
         * Still keep the transform synced after resize.
         */
        track.style.transform = `translate3d(${x}px, 0, 0)`;
      }
    };

    const requestUpdate = () => {
      if (raf) return;

      raf = window.requestAnimationFrame(
        updateScene,
      );
    };

    /*
     * Initial positioning.
     */
    updateScene();

    /*
     * Normal scroll.
     */
    window.addEventListener(
      "scroll",
      requestUpdate,
      { passive: true },
    );

    /*
     * Resize / orientation change.
     */
    window.addEventListener(
      "resize",
      requestUpdate,
      { passive: true },
    );

    window.addEventListener(
      "orientationchange",
      requestUpdate,
      { passive: true },
    );

    /*
     * Reduced motion:
     * no CSS transition / interpolation.
     * Scroll still determines the position.
     */
    if (reduceMotion) {
      track.style.transition = "none";
    }

    /*
     * ---------------------------------------------------------
     * ResizeObserver
     *
     * Important for mobile browsers because viewport dimensions
     * can change when browser UI appears/disappears.
     * ---------------------------------------------------------
     */
    const resizeObserver = new ResizeObserver(() => {
      requestUpdate();
    });

    resizeObserver.observe(viewport);
    resizeObserver.observe(track);

    return () => {
      window.removeEventListener(
        "scroll",
        requestUpdate,
      );

      window.removeEventListener(
        "resize",
        requestUpdate,
      );

      window.removeEventListener(
        "orientationchange",
        requestUpdate,
      );

      resizeObserver.disconnect();

      if (raf) {
        window.cancelAnimationFrame(raf);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="parent-discovery"
      className="pd-section"
      style={
        {
          "--pd-chapter-count":
            discoveryChapters.length,
        } as React.CSSProperties
      }
    >
      <div
        ref={viewportRef}
        className="pd-viewport"
      >
        {/* Real visual journey background */}
        <ParentDiscoveryBackground
          progress={progress}
        />

        {/* School bus follows the same scroll progress */}
        <ParentDiscoveryBus
          progress={progress}
        />

        {/* Horizontal story track */}
        <div
          ref={trackRef}
          className="pd-track"
        >
          {discoveryChapters.map(
            (chapter, index) => (
              <ParentDiscoveryChapter
                key={chapter.id}
                chapter={chapter}
                index={index}
              />
            ),
          )}
        </div>

        {/* Journey progress */}
        <ParentDiscoveryProgress
          progress={progress}
        />
      </div>
    </section>
  );
}