"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export function StatisticsBackground() {
  const reducedMotion = useReducedMotion();

  const duration = reducedMotion ? 0 : 1.8;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* =====================================================
          PAPER MATERIAL
      ===================================================== */}

      <div
        className="absolute inset-0 opacity-[0.11]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(74,54,39,0.12) 0.45px, transparent 0.45px)",
          backgroundSize: "5px 5px",
        }}
      />

      {/* =====================================================
          GROWTH CONTOURS

          Inspired by tree age rings / topographic drawings.
          They communicate time and growth without drawing
          a literal tree.
      ===================================================== */}

      <svg
        viewBox="0 0 760 760"
        fill="none"
        className="
          absolute
          -left-[250px] top-[7%]
          h-[720px] w-[720px]
          text-[#766F45]
          opacity-[0.055]
          sm:-left-[220px]
          lg:-left-[170px]
          lg:h-[820px] lg:w-[820px]
        "
      >
        <ellipse
          cx="370"
          cy="380"
          rx="315"
          ry="300"
          stroke="currentColor"
          strokeWidth="1"
        />

        <ellipse
          cx="370"
          cy="380"
          rx="270"
          ry="255"
          stroke="currentColor"
          strokeWidth="0.9"
        />

        <ellipse
          cx="370"
          cy="380"
          rx="225"
          ry="210"
          stroke="currentColor"
          strokeWidth="0.85"
        />

        <ellipse
          cx="370"
          cy="380"
          rx="180"
          ry="165"
          stroke="currentColor"
          strokeWidth="0.8"
        />

        <ellipse
          cx="370"
          cy="380"
          rx="137"
          ry="123"
          stroke="currentColor"
          strokeWidth="0.75"
        />

        <path
          d="M109 282C157 249 203 240 247 249C293 259 317 291 360 301C410 312 451 287 493 292C539 297 574 327 621 321"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeLinecap="round"
        />

        <path
          d="M101 449C152 416 202 407 249 418C298 430 326 463 370 469C417 476 454 450 501 454C547 458 580 483 630 478"
          stroke="currentColor"
          strokeWidth="0.7"
          strokeLinecap="round"
        />
      </svg>

      {/* Secondary contour — quieter */}
      <svg
        viewBox="0 0 620 620"
        fill="none"
        className="
          absolute
          -right-[260px] bottom-[2%]
          h-[600px] w-[600px]
          text-[#8A7A4A]
          opacity-[0.04]
          lg:-right-[170px]
          lg:h-[700px] lg:w-[700px]
        "
      >
        <ellipse
          cx="310"
          cy="310"
          rx="270"
          ry="245"
          stroke="currentColor"
          strokeWidth="0.9"
        />

        <ellipse
          cx="310"
          cy="310"
          rx="220"
          ry="198"
          stroke="currentColor"
          strokeWidth="0.8"
        />

        <ellipse
          cx="310"
          cy="310"
          rx="169"
          ry="150"
          stroke="currentColor"
          strokeWidth="0.75"
        />

        <ellipse
          cx="310"
          cy="310"
          rx="116"
          ry="101"
          stroke="currentColor"
          strokeWidth="0.7"
        />
      </svg>

      {/* =====================================================
          DESKTOP JOURNEY GEOMETRY

          This is deliberately NOT a road.

          Before the bus arrives it reads as a branch /
          editorial path. Once the bus moves through it,
          it gains a second meaning: journey.
      ===================================================== */}

      <svg
        viewBox="0 0 1440 420"
        preserveAspectRatio="none"
        fill="none"
        className="
          absolute left-1/2 top-[43%]
          hidden h-[360px] w-[min(94%,1440px)]
          -translate-x-1/2
          overflow-visible
          lg:block
          xl:h-[400px]
        "
      >
        {/* Resting ghost path */}
        <path
          d="
            M1390 94
            C1270 93 1190 102 1095 125
            C1010 145 934 176 845 185
            C747 195 682 166 590 171
            C485 176 425 226 339 244
            C245 264 151 258 48 301
          "
          stroke="#7C833A"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.09"
        />

        {/* Animated growth stroke */}
        <motion.path
          d="
            M1390 94
            C1270 93 1190 102 1095 125
            C1010 145 934 176 845 185
            C747 195 682 166 590 171
            C485 176 425 226 339 244
            C245 264 151 258 48 301
          "
          initial={{
            pathLength: 0,
            opacity: 0,
          }}
          whileInView={{
            pathLength: 1,
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            pathLength: {
              duration,
              ease: EASE,
            },
            opacity: {
              duration: reducedMotion ? 0 : 0.4,
              ease: EASE,
            },
          }}
          stroke="#7C833A"
          strokeWidth="1.05"
          strokeLinecap="round"
          opacity="0.24"
        />

        {/* Milestone 01 */}
        <g opacity="0.32">
          <circle
            cx="1110"
            cy="122"
            r="3"
            fill="#7C833A"
          />

          <circle
            cx="1110"
            cy="122"
            r="8"
            stroke="#7C833A"
            strokeWidth="0.7"
            opacity="0.28"
          />
        </g>

        {/* Milestone 02 */}
        <g opacity="0.28">
          <circle
            cx="844"
            cy="185"
            r="3"
            fill="#7C833A"
          />

          <circle
            cx="844"
            cy="185"
            r="8"
            stroke="#7C833A"
            strokeWidth="0.7"
            opacity="0.26"
          />
        </g>

        {/* Milestone 03 */}
        <g opacity="0.26">
          <circle
            cx="590"
            cy="171"
            r="3"
            fill="#7C833A"
          />

          <circle
            cx="590"
            cy="171"
            r="8"
            stroke="#7C833A"
            strokeWidth="0.7"
            opacity="0.24"
          />
        </g>

        {/* Milestone 04 */}
        <g opacity="0.24">
          <circle
            cx="339"
            cy="244"
            r="3"
            fill="#7C833A"
          />

          <circle
            cx="339"
            cy="244"
            r="8"
            stroke="#7C833A"
            strokeWidth="0.7"
            opacity="0.22"
          />
        </g>

        {/* Only two tiny growth gestures.
            Not repeated decoration. */}

        <path
          d="M1003 147C996 137 987 134 978 137C984 146 993 150 1003 147Z"
          stroke="#7C833A"
          strokeWidth="0.75"
          opacity="0.18"
        />

        <path
          d="M472 194C464 184 454 182 445 186C452 195 462 198 472 194Z"
          stroke="#7C833A"
          strokeWidth="0.75"
          opacity="0.16"
        />
      </svg>

      {/* =====================================================
          MOBILE / TABLET JOURNEY THREAD

          Desktop composition is not squeezed onto mobile.
          The story becomes vertical.
      ===================================================== */}

      <svg
        viewBox="0 0 80 1000"
        preserveAspectRatio="none"
        fill="none"
        className="
          absolute bottom-[8%] left-[21px] top-[26%]
          h-[66%] w-12
          text-[#7C833A]
          opacity-30
          md:left-[28px]
          lg:hidden
        "
      >
        <path
          d="
            M39 0
            C54 105 22 185 38 286
            C55 390 25 477 39 584
            C52 688 27 789 40 1000
          "
          stroke="currentColor"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.22"
        />

        <motion.path
          d="
            M39 0
            C54 105 22 185 38 286
            C55 390 25 477 39 584
            C52 688 27 789 40 1000
          "
          initial={{
            pathLength: 0,
            opacity: 0,
          }}
          whileInView={{
            pathLength: 1,
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            pathLength: {
              duration: reducedMotion ? 0 : 2,
              ease: EASE,
            },
            opacity: {
              duration: reducedMotion ? 0 : 0.4,
              ease: EASE,
            },
          }}
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.42"
        />

        <circle cx="39" cy="95" r="3" fill="currentColor" />
        <circle cx="38" cy="355" r="3" fill="currentColor" />
        <circle cx="39" cy="635" r="3" fill="currentColor" />
        <circle cx="40" cy="900" r="3" fill="currentColor" />
      </svg>
    </div>
  );
}