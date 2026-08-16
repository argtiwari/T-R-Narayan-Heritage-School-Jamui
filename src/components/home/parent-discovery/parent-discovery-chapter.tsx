"use client";

import type { DiscoveryChapter } from "./parent-discovery-data";

type Props = {
  chapter: DiscoveryChapter;
  index: number;
};

export default function ParentDiscoveryChapter({
  chapter,
  index,
}: Props) {
  const SymbolIcon = chapter.features[0]?.icon;

  return (
    <article
      className="pd-chapter"
      data-chapter={chapter.id}
      data-index={index}
    >
      {/* =====================================================
          MAIN CONTENT
         ===================================================== */}

      <div className="pd-chapter-inner">

        {/* Chapter number */}

        <div className="pd-chapter-topline">
          <span className="pd-rule" />

          <span className="pd-number">
            {chapter.number}
          </span>

          <span className="pd-rule" />
        </div>

        {/* Chapter label */}

        <div className="pd-label">
          {chapter.label}
        </div>

        {/* Small chapter icon */}

        <div className="pd-symbol" aria-hidden="true">
          {SymbolIcon ? (
            <SymbolIcon
              size={24}
              strokeWidth={1.25}
            />
          ) : null}
        </div>

        {/* Main heading */}

        <h2 className="pd-title">
          {chapter.title}
        </h2>

        {/* Description */}

        <p className="pd-description">
          {chapter.description}
        </p>

        {/* =================================================
            FEATURES
           ================================================= */}

        <div className="pd-features">
          {chapter.features.map((feature) => {
            const FeatureIcon = feature.icon;

            return (
              <div
                key={feature.title}
                className="pd-feature"
              >
                <span className="pd-feature-icon">
                  <FeatureIcon
                    size={17}
                    strokeWidth={1.5}
                  />
                </span>

                <span className="pd-feature-copy">
                  <strong>
                    {feature.title}
                  </strong>

                  <small>
                    {feature.benefit}
                  </small>
                </span>
              </div>
            );
          })}
        </div>

        
{/* =================================================
            ACTIONS
           ================================================= */}

        <div className="pd-chapter-actions">
          <button
            type="button"
            className="pd-primary-action"
          >
            <span className="pd-action-label">
              Explore More
            </span>

            <span
              className="pd-action-arrow"
              aria-hidden="true"
            >
              →
            </span>
          </button>

          <button
            type="button"
            className="pd-secondary-action"
          >
            <span
              className="pd-action-play"
              aria-hidden="true"
            >
              ▶
            </span>

            <span>
              Watch Our Story
            </span>
          </button>
        </div>
      </div>

      {/* =====================================================
          DECORATIVE EDITORIAL CARDS

          Separate layer so they can never affect
          the main content layout.
         ===================================================== */}

      <div
        className={`pd-editorial-card pd-card-a pd-card-${index + 1}`}
        aria-hidden="true"
      >
        <div className="pd-card-photo">
          <span>PHOTO</span>
        </div>

        <div className="pd-card-caption">
          <strong>
            {chapter.features[0]?.title ?? chapter.label}
          </strong>

          <small>
            {chapter.features[0]?.benefit ?? ""}
          </small>
        </div>
      </div>


      <div
        className={`pd-editorial-card pd-card-b pd-card-${index + 1}`}
        aria-hidden="true"
      >
        <div className="pd-card-photo">
          <span>PHOTO</span>
        </div>

        <div className="pd-card-caption">
          <strong>
            {chapter.features[1]?.title ?? chapter.label}
          </strong>

          <small>
            {chapter.features[1]?.benefit ?? ""}
          </small>
        </div>
      </div>
    </article>
  );
}