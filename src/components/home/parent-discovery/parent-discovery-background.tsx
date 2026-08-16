"use client";

type Props = { progress: number };

export default function ParentDiscoveryBackground({ progress }: Props) {
  return (
    <div className="pd-background" aria-hidden="true">
      <div className="pd-background-photo" />
      <div className="pd-background-wash" />
      <div className="pd-background-vignette" />
      <div className="pd-background-leaves pd-background-leaves-left" />
      <div className="pd-background-leaves pd-background-leaves-right" />
      <div className="pd-road-glow" style={{ transform: `translateX(${progress * 24}px)` }} />
    </div>
  );
}
