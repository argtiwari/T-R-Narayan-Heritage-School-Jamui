"use client";

type Props = {
  progress: number;
};

export default function LeadershipBranch({ progress }: Props) {
  return (
    <div
      className="leadership-branch"
      style={
        {
          "--branch-progress": progress,
        } as React.CSSProperties
      }
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 420"
        preserveAspectRatio="none"
        className="leadership-branch-svg"
      >
        <path
          className="leadership-branch-shadow"
          d="M80 230 C260 230 300 80 500 160 C690 235 750 330 930 190 C1010 130 1080 140 1140 80"
        />

        <path
          className="leadership-branch-path"
          d="M80 230 C260 230 300 80 500 160 C690 235 750 330 930 190 C1010 130 1080 140 1140 80"
        />

        <circle cx="500" cy="160" r="8" />
        <circle cx="930" cy="190" r="8" />
      </svg>
    </div>
  );
}