"use client";

export default function ParentDiscoveryBus({ progress }: { progress: number }) {
  const x = -8 + progress * 116;
  return (
    <div className="pd-bus-layer" aria-hidden="true">
      <div className="pd-bus-road-shadow" />
      <img
        className="pd-bus"
        src="/images/parent-discovery/school-bus.png"
        alt=""
        draggable={false}
        style={{ transform: `translate3d(${x}vw, 0, 0)` }}
      />
    </div>
  );
}
