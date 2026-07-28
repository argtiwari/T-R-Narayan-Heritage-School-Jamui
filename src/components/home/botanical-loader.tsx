"use client";

import { motion } from "framer-motion";

const leaves = [
  { x: 60, y: 52, rotate: -25 },
  { x: 95, y: 38, rotate: 20 },
  { x: 135, y: 56, rotate: -30 },
  { x: 170, y: 42, rotate: 18 },
  { x: 210, y: 60, rotate: -20 },
];

export function BotanicalLoader() {
  return (
    <div className="flex items-center justify-center">
      <svg
        width="260"
        height="90"
        viewBox="0 0 260 90"
        fill="none"
      >
        {/* Seed */}

        <motion.ellipse
          cx="18"
          cy="67"
          rx="5"
          ry="7"
          fill="#6F7E4C"
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: .35,
          }}
        />

        {/* Branch */}

        <motion.path
          d="M20 67 C60 45 80 55 110 42 C145 28 175 42 240 30"
          stroke="#708043"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="transparent"
          initial={{
            pathLength: 0,
          }}
          animate={{
            pathLength: 1,
          }}
          transition={{
            duration: 1.6,
            ease: "easeInOut",
            delay: .25,
          }}
        />

        {leaves.map((leaf, index) => (
          <motion.g
            key={index}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              delay: .55 + index * .18,
              duration: .35,
            }}
            style={{
              originX: leaf.x,
              originY: leaf.y,
            }}
          >
            <ellipse
              cx={leaf.x}
              cy={leaf.y}
              rx="5"
              ry="10"
              fill="#7E9A52"
              transform={`rotate(${leaf.rotate} ${leaf.x} ${leaf.y})`}
            />
          </motion.g>
        ))}

        {/* Tiny End Leaf */}

        <motion.ellipse
          cx="244"
          cy="30"
          rx="4"
          ry="8"
          fill="#88A85D"
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            delay: 1.5,
            duration: .3,
          }}
        />
      </svg>
    </div>
  );
}