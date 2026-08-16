"use client";

import { useEffect, useRef, useState } from "react";
import { discoveryChapters } from "./parent-discovery-data";
import ParentDiscoveryBackground from "./parent-discovery-background";
import ParentDiscoveryBus from "./parent-discovery-bus";
import ParentDiscoveryChapter from "./parent-discovery-chapter";
import ParentDiscoveryProgress from "./parent-discovery-progress";
import "./parent-discovery.css";

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

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;

    const update = () => {
      raf = 0;
      const rect = section.getBoundingClientRect();
      const travel = Math.max(1, section.offsetHeight - viewport.clientHeight);
      const value = Math.min(1, Math.max(0, -rect.top / travel));
      setProgress(value);
      track.style.transform = `translate3d(${-value * (discoveryChapters.length - 1) * 100}vw,0,0)`;
    };

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    if (reduceMotion) track.style.transition = "none";

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={sectionRef} id="parent-discovery" className="pd-section">
      <div ref={viewportRef} className="pd-viewport">
        <ParentDiscoveryBackground progress={progress} />
        <ParentDiscoveryBus progress={progress} />
        <div ref={trackRef} className="pd-track">
          {discoveryChapters.map((chapter, index) => (
            <ParentDiscoveryChapter key={chapter.id} chapter={chapter} index={index} />
          ))}
        </div>
        <ParentDiscoveryProgress progress={progress} />
      </div>
    </section>
  );
}
