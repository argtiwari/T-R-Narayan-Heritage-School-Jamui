"use client";

import type { DiscoveryChapter } from "./parent-discovery-data";

type Props = { chapter: DiscoveryChapter; index: number };

export default function ParentDiscoveryChapter({ chapter, index }: Props) {
  const Icon = chapter.features[0]?.icon;
  return (
    <article className="pd-chapter" data-chapter={chapter.id}>
      <div className="pd-chapter-inner">
        <div className="pd-chapter-topline">
          <span className="pd-rule" />
          <span className="pd-number">{chapter.number}</span>
          <span className="pd-rule" />
        </div>
        <div className="pd-label">{chapter.label}</div>
        <div className="pd-symbol">{Icon ? <Icon size={24} strokeWidth={1.25} /> : null}</div>

        <h2 className="pd-title">{chapter.title}</h2>
        <p className="pd-description">{chapter.description}</p>

        <div className="pd-features">
          {chapter.features.map((feature) => {
            const FeatureIcon = feature.icon;
            return (
              <div className={`pd-feature pd-feature-${feature.tone}`} key={feature.title}>
                <span className="pd-feature-icon"><FeatureIcon size={18} strokeWidth={1.5} /></span>
                <span className="pd-feature-copy">
                  <strong>{feature.title}</strong>
                  <small>{feature.benefit}</small>
                </span>
              </div>
            );
          })}
        </div>

        <div className="pd-chapter-actions">
          <button type="button" className="pd-primary-action">Explore More <span>→</span></button>
          <button type="button" className="pd-secondary-action"><span>▶</span> Watch Our Story</button>
        </div>
      </div>

      <div className={`pd-editorial-card pd-card-a pd-card-${index + 1}`}>
        <div className="pd-card-photo"><span>PHOTO</span></div>
        <div className="pd-card-caption"><strong>{chapter.features[0]?.title}</strong><small>{chapter.features[0]?.benefit}</small></div>
      </div>
      <div className={`pd-editorial-card pd-card-b pd-card-${index + 1}`}>
        <div className="pd-card-photo"><span>PHOTO</span></div>
        <div className="pd-card-caption"><strong>{chapter.features[1]?.title ?? chapter.label}</strong><small>{chapter.features[1]?.benefit ?? chapter.description}</small></div>
      </div>
    </article>
  );
}
