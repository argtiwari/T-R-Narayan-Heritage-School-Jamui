"use client";

type ParentDiscoveryBusProps = {
  progress: number;
};

export default function ParentDiscoveryBus({
  progress,
}: ParentDiscoveryBusProps) {
  /*
   * Scroll is the only source of movement.
   * 0   = bus enters from left
   * 1   = bus exits toward right
   */
  const x = -18 + progress * 118;

  return (
    <div
      className="pd-bus-layer"
      aria-hidden="true"
    >
      <div
        className="pd-bus-moving"
        style={{
          transform: `translate3d(${x}vw, 0, 0)`,
        }}
      >
        <div className="pd-bus-road-shadow" />

        <img
          className="pd-bus"
          src="/images/parent-discovery/school-bus.png"
          alt=""
          draggable={false}
        />
      </div>
    </div>
  );
}