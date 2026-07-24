"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Leaf, Trophy, Users } from "lucide-react";

const statistics = [
  {
    number: "15+",
    label: "Years of Excellence",
    icon: Award,
  },
  {
    number: "1200+",
    label: "Students Growing",
    icon: BookOpen,
  },
  {
    number: "50+",
    label: "Faculty Members",
    icon: Users,
  },
  {
    number: "25+",
    label: "Achievements",
    icon: Trophy,
  },
];

export function StatisticsSection() {
  return (
    <section className="relative overflow-hidden bg-[#fffdf8] py-14 sm:py-16 lg:py-20">
      {/* Ambient background depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[#9aa342]/[0.035] blur-[90px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-[#6b351f]/[0.025] blur-[90px]"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-9 text-center sm:mb-11"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#7b8530]/35" />

            <Leaf
              size={15}
              strokeWidth={1.6}
              className="-rotate-[18deg] text-[#7b8530]"
              aria-hidden="true"
            />

            <span className="h-px w-9 bg-[#7b8530]/35" />
          </div>

          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#747d2c]">
            Growing Together
          </p>

          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#20150f] sm:text-4xl">
            Our Growth in Numbers
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#756a62] sm:text-[15px]">
            Nurturing progress, learning and excellence year after year.
          </p>
        </motion.div>

        {/* Statistics cards */}
        <div className="grid grid-cols-2 gap-3.5 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {statistics.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.article
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.055,
                  ease: "easeOut",
                }}
                whileHover={{ y: -5 }}
                className="group relative min-h-[172px] overflow-hidden rounded-[22px] border border-[#ded9ca]/80 bg-[#fffefb]/95 p-5 shadow-[0_10px_35px_rgba(72,52,35,0.045)] transition-[border-color,box-shadow] duration-300 hover:border-[#a7ad68]/55 hover:shadow-[0_18px_45px_rgba(72,52,35,0.09)] sm:min-h-[190px] sm:p-6 lg:p-7"
              >
                {/* Organic corner */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-14 h-28 w-28 rounded-full border border-[#939b43]/[0.08] transition-all duration-300 group-hover:scale-110 group-hover:border-[#939b43]/[0.14]"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-7 -top-8 h-20 w-20 rounded-full bg-[#a6ad52]/[0.035] blur-xl transition-opacity duration-300 group-hover:opacity-80"
                />

                {/* Hover leaf */}
                <Leaf
                  size={16}
                  strokeWidth={1.4}
                  aria-hidden="true"
                  className="pointer-events-none absolute right-5 top-5 translate-x-1 -rotate-12 text-[#7d8632]/0 transition-all duration-300 group-hover:translate-x-0 group-hover:rotate-6 group-hover:text-[#7d8632]/35"
                />

                <div className="relative flex h-full flex-col">
                  {/* Icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-[15px] border border-[#dfe2bd]/90 bg-[#f5f6df] text-[#737c29] transition-all duration-300 group-hover:border-[#ccd18f] group-hover:bg-[#f2f4d4]">
                    <Icon
                      size={20}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Number */}
                  <div className="mt-auto pt-7 sm:pt-8">
                    <p className="text-[31px] font-semibold leading-none tracking-[-0.05em] text-[#201712] sm:text-[38px]">
                      {stat.number}
                    </p>

                    <p className="mt-2 text-xs font-medium leading-5 text-[#70665e] sm:text-[13px]">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Quiet transition to next chapter */}
        <div
          aria-hidden="true"
          className="mt-12 flex items-center justify-center gap-3 opacity-50 sm:mt-14"
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#858e35]/45" />

          <Leaf
            size={13}
            strokeWidth={1.5}
            className="-rotate-12 text-[#737c29]"
          />

          <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#858e35]/45" />
        </div>
      </div>
    </section>
  );
}