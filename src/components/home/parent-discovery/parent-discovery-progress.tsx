"use client";

import { discoveryChapters } from "./parent-discovery-data";

export default function ParentDiscoveryProgress({ progress }: { progress: number }) {
  const active = Math.min(discoveryChapters.length - 1, Math.round(progress * (discoveryChapters.length - 1)));
  return (
    <div className="pd-progress" aria-label="Parent Discovery Journey progress">
      <span className="pd-progress-title">PARENT DISCOVERY JOURNEY</span>
      <div className="pd-progress-line">
        <div className="pd-progress-fill" style={{ width: `${progress * 100}%` }} />
        {discoveryChapters.map((chapter, index) => (
          <span key={chapter.id} className={`pd-progress-dot ${index <= active ? "is-active" : ""}`} />
        ))}
      </div>
      <span className="pd-progress-count">{String(active + 1).padStart(2, "0")} / 06</span>
      <span className="pd-progress-hint">SCROLL TO EXPLORE</span>
    </div>
  );
}
