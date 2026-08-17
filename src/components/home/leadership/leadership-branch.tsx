"use client";

type LeadershipBranchProps = {
  progress?: number;
};

export default function LeadershipBranch({
  progress = 0,
}: LeadershipBranchProps) {
  const safeProgress = Math.min(
    1,
    Math.max(0, progress),
  );

  return (
    <div
      className="leadership-branch"
      aria-hidden="true"
      style={
        {
          "--leadership-branch-progress":
            safeProgress,
        } as React.CSSProperties
      }
    >
      <svg
        className="leadership-branch-svg"
        viewBox="0 0 1400 520"
        preserveAspectRatio="none"
      >
        {/* Soft shadow */}
        <path
          className="leadership-branch-shadow"
          d="
            M40 360
            C190 300 260 390 410 330
            C560 270 640 350 780 300
            C930 245 1000 315 1130 250
            C1240 195 1310 205 1370 135
          "
        />

        {/* Main branch */}
        <path
          className="leadership-branch-path"
          pathLength="1"
          d="
            M40 360
            C190 300 260 390 410 330
            C560 270 640 350 780 300
            C930 245 1000 315 1130 250
            C1240 195 1310 205 1370 135
          "
        />

        {/* Chairman connection */}
        <path
          className="leadership-branch-twig"
          pathLength="1"
          d="
            M270 355
            C245 310 235 270 250 225
          "
        />

        {/* Director connection */}
        <path
          className="leadership-branch-twig"
          pathLength="1"
          d="
            M970 300
            C995 260 1005 220 990 175
          "
        />

        {/* Principal connection */}
        <path
          className="leadership-branch-twig"
          pathLength="1"
          d="
            M560 315
            C540 365 535 405 560 450
          "
        />

        {/* Coordinator connection */}
        <path
          className="leadership-branch-twig"
          pathLength="1"
          d="
            M1180 225
            C1200 275 1205 315 1180 355
          "
        />

        {/* Decorative leaves */}
        <g className="leadership-branch-leaves">
          <ellipse
            cx="245"
            cy="220"
            rx="18"
            ry="8"
            transform="rotate(-35 245 220)"
          />

          <ellipse
            cx="255"
            cy="250"
            rx="16"
            ry="7"
            transform="rotate(30 255 250)"
          />

          <ellipse
            cx="990"
            cy="170"
            rx="18"
            ry="8"
            transform="rotate(32 990 170)"
          />

          <ellipse
            cx="1000"
            cy="195"
            rx="15"
            ry="7"
            transform="rotate(-30 1000 195)"
          />

          <ellipse
            cx="555"
            cy="450"
            rx="17"
            ry="8"
            transform="rotate(-28 555 450)"
          />

          <ellipse
            cx="570"
            cy="425"
            rx="14"
            ry="7"
            transform="rotate(35 570 425)"
          />

          <ellipse
            cx="1180"
            cy="355"
            rx="18"
            ry="8"
            transform="rotate(28 1180 355)"
          />
        </g>

        {/* Journey points */}
        <g className="leadership-branch-points">
          <circle cx="250" cy="350" r="7" />
          <circle cx="990" cy="285" r="7" />
          <circle cx="555" cy="320" r="6" />
          <circle cx="1180" cy="225" r="6" />
        </g>
      </svg>
    </div>
  );
}