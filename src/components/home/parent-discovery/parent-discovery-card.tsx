"use client";

import type { DiscoveryFeature } from "./parent-discovery-data";

type Props = {
  feature: DiscoveryFeature;
  index: number;
};

export default function ParentDiscoveryCard({
  feature,
  index,
}: Props) {
  const Icon = feature.icon;

  return (
    <div
      data-discovery-card
      className={`pd-photo-card pd-photo-card-${index}`}
    >
      <div className="pd-photo">
        <div className="pd-photo-paper">
          <div className="pd-photo-scene">
            <div className="pd-photo-glow" />

            <div className="pd-photo-building">
              <i />
              <i />
              <i />
            </div>

            <div className="pd-photo-leaf pd-photo-leaf-a" />
            <div className="pd-photo-leaf pd-photo-leaf-b" />
          </div>
        </div>
      </div>

      <div className="pd-card-caption">
        <span className="pd-card-icon">
          <Icon
            size={14}
            strokeWidth={1.35}
          />
        </span>

        <span>
          <strong>{feature.title}</strong>
          <small>{feature.benefit}</small>
        </span>
      </div>

      <span className="pd-card-connector" />
    </div>
  );
}