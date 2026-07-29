"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export function StatisticsBus() {
    return (
        <>
            {/* =====================================================
          DESKTOP CINEMATIC JOURNEY
      ===================================================== */}

            <motion.div
                aria-hidden="true"
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 0.25,
                }}
                className="
          pointer-events-none
          absolute inset-x-0 top-1/2 z-20
          hidden h-[110px]
          -translate-y-1/2
          overflow-visible
          lg:block
        "
            >
                {/* ===================================================
            JOURNEY PATH
        =================================================== */}

                <svg
                    viewBox="0 0 1200 110"
                    preserveAspectRatio="none"
                    fill="none"
                    className="absolute inset-0 h-full w-full overflow-visible"
                >
                    {/* Permanent quiet route */}

                    <path
                        d="
              M1165 42
              C1060 38 985 53 900 60
              C810 68 735 52 650 45
              C555 37 475 49 390 60
              C285 74 190 67 35 70
            "
                        stroke="#7C833A"
                        strokeWidth="0.8"
                        strokeLinecap="round"
                        opacity="0.1"
                    />

                    {/* Growing route */}

                    <motion.path
                        d="
              M1165 42
              C1060 38 985 53 900 60
              C810 68 735 52 650 45
              C555 37 475 49 390 60
              C285 74 190 67 35 70
            "
                        stroke="#7C833A"
                        strokeWidth="1"
                        strokeLinecap="round"
                        variants={{
                            hidden: {
                                pathLength: 0,
                                opacity: 0,
                            },

                            visible: {
                                pathLength: 1,
                                opacity: 0.32,

                                transition: {
                                    pathLength: {
                                        duration: 7.2,
                                        ease: [0.22, 1, 0.36, 1],
                                    },

                                    opacity: {
                                        duration: 0.8,
                                    },
                                },
                            },
                        }}
                    />

                    {/* Journey milestones */}

                    <g fill="#7C833A">
                        <circle cx="1050" cy="44" r="2.3" opacity="0.25" />
                        <circle cx="785" cy="61" r="2.3" opacity="0.25" />
                        <circle cx="510" cy="45" r="2.3" opacity="0.25" />
                        <circle cx="230" cy="69" r="2.3" opacity="0.25" />
                    </g>
                </svg>

                {/* ===================================================
            SCHOOL BUS

            Starts outside RIGHT.
            Travels slowly across the composition.
            Exits LEFT.
        =================================================== */}
                <motion.div
                    initial={{
                        x: 0,
                        opacity: 1,
                    }}
                    animate={{
                        x: [0, 300, 600, 900, 1200, 1600],
                        opacity: 1,
                    }}
                    transition={{
                        duration: 10,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    className="absolute left-[-160px] top-[18px] z-50"
                >
                    <SchoolBus />
                </motion.div>
                {/* ===================================================
            VERY SUBTLE GROUND THREAD
        =================================================== */}

                <div className="absolute bottom-[22px] left-[4%] right-[4%] h-px bg-[#7C833A]/[0.035]" />
            </motion.div>

            {/* =====================================================
          MOBILE

          Desktop bus is intentionally removed.
          Mobile gets a quiet vertical journey.
      ===================================================== */}

            <motion.div
                aria-hidden="true"
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 0.15,
                }}
                className="
          pointer-events-none
          absolute bottom-5 left-[17px] top-5 z-20
          lg:hidden
        "
            >
                <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-[#7C833A]/10" />

                <motion.span
                    variants={{
                        hidden: {
                            top: "3%",
                            opacity: 0,
                        },

                        visible: {
                            top: "92%",
                            opacity: [0, 0.6, 0.6, 0],

                            transition: {
                                duration: 5.5,
                                ease: [0.22, 1, 0.36, 1],
                            },
                        },
                    }}
                    className="
            absolute left-1/2
            block size-[6px]
            -translate-x-1/2
            rounded-full
            border border-[#747E2A]/50
            bg-[#F8F5EF]
            motion-reduce:!top-1/2
            motion-reduce:!opacity-50
          "
                />
            </motion.div>
        </>
    );
}

/* =========================================================
   SCHOOL BUS
========================================================= */

function SchoolBus() {
    return (
        <svg
            viewBox="0 0 150 68"
            fill="none"
            className="h-[68px] w-[150px] xl:h-[74px] xl:w-[164px]"
        >
            <path
                d="M20 16C20 11 24 8 29 8H111C119 8 125 12 128 19L137 39V50H15V23C15 19 17 17 20 16Z"
                fill="#F3E9D5"
                fillOpacity="0.94"
            />

            <path
                d="M20 16C20 11 24 8 29 8H111C119 8 125 12 128 19L137 39V50H15V23C15 19 17 17 20 16Z"
                stroke="#765F2C"
                strokeWidth="1.15"
                strokeLinejoin="round"
            />

            <path
                d="M15 39H137V50H15V39Z"
                fill="#A58B48"
                fillOpacity="0.15"
            />

            <path
                d="M15 39H137"
                stroke="#765F2C"
                strokeWidth="0.8"
                opacity="0.7"
            />

            {/* Windows */}

            <path d="M29 15H45V31H29V15Z" stroke="#765F2C" strokeWidth="0.8" />
            <path d="M50 15H66V31H50V15Z" stroke="#765F2C" strokeWidth="0.8" />
            <path d="M71 15H87V31H71V15Z" stroke="#765F2C" strokeWidth="0.8" />
            <path d="M92 15H108V31H92V15Z" stroke="#765F2C" strokeWidth="0.8" />

            <path
                d="M113 15C119 16 122 20 124 25L127 31H113V15Z"
                stroke="#765F2C"
                strokeWidth="0.8"
            />

            {/* School name */}

           <text
  x="70"
  y="37"
  fill="#5A4027"
  fontSize="5.2"
  fontWeight="600"
  letterSpacing="0.45"
  textAnchor="middle"
>
  T.R. NARAYAN HERITAGE SCHOOL
</text>

 


            {/* Front */}

            <path
                d="M137 41H143V47H137"
                stroke="#765F2C"
                strokeWidth="0.8"
            />

            <circle
                cx="139"
                cy="35"
                r="1.6"
                fill="#A58B48"
                fillOpacity="0.65"
            />

            {/* Wheels */}

            <circle
                cx="40"
                cy="51"
                r="8"
                fill="#F8F5EF"
                stroke="#49392E"
                strokeWidth="1.2"
            />

            <circle
                cx="40"
                cy="51"
                r="3"
                stroke="#765F2C"
                strokeWidth="0.8"
            />

            <circle
                cx="113"
                cy="51"
                r="8"
                fill="#F8F5EF"
                stroke="#49392E"
                strokeWidth="1.2"
            />

            <circle
                cx="113"
                cy="51"
                r="3"
                stroke="#765F2C"
                strokeWidth="0.8"
            />
        </svg>
    );
}