"use client";

import { useEffect, useRef } from "react";

import { StatisticCard } from "./statistic-card";
import { StatisticsBus } from "./statistics-bus";
import { statisticsData } from "./statistics-data";
import {
  StatisticsJourneyProvider,
  useStatisticsJourney,
} from "./statistics-journey";

export function StatisticsGrid() {
  return (
    <StatisticsJourneyProvider>
      <StatisticsJourneyContent />
    </StatisticsJourneyProvider>
  );
}

function StatisticsJourneyContent() {
  const journeyRef = useRef<HTMLDivElement>(null);

  const { startJourney } = useStatisticsJourney();

  const academics = statisticsData.find(
    (item) => item.id === "academics",
  );

  const people = statisticsData.find(
    (item) => item.id === "people",
  );

  const campus = statisticsData.find(
    (item) => item.id === "campus",
  );

  const transport = statisticsData.find(
    (item) => item.id === "transport",
  );

  /* =========================================================
     SINGLE JOURNEY TRIGGER

     IntersectionObserver starts the cinematic sequence once.

     We intentionally do NOT give every card its own timeline.
  ========================================================= */

  useEffect(() => {
    const element = journeyRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        startJourney();

        observer.disconnect();
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [startJourney]);

  if (!academics || !people || !campus || !transport) {
    return null;
  }

  return (
    <div
      ref={journeyRef}
      className="relative"
    >
      {/* =====================================================
          DESKTOP
      ===================================================== */}

      <div className="hidden grid-cols-12 gap-x-5 lg:grid xl:gap-x-6">
        {/* 01 — ACADEMICS */}

        <div className="relative z-10 col-span-7">
          <StatisticCard
            statistic={academics}
            className="min-h-[470px]"
          />
        </div>

        {/* 02 — PEOPLE */}

        <div className="relative z-10 col-span-5">
          <StatisticCard
            statistic={people}
            className="min-h-[470px]"
          />
        </div>

        {/* ===================================================
            JOURNEY CORRIDOR
        =================================================== */}

        <div className="relative col-span-12 h-[118px] xl:h-[138px]">
          <div
            aria-hidden="true"
            className="absolute left-[7%] top-1/2 size-[3px] -translate-y-1/2 rounded-full bg-[#7C833A]/20"
          />

          <div
            aria-hidden="true"
            className="absolute right-[7%] top-1/2 size-[3px] -translate-y-1/2 rounded-full bg-[#7C833A]/20"
          />

          <StatisticsBus />
        </div>

        {/* 03 — CAMPUS */}

        <div className="relative z-10 col-span-5">
          <StatisticCard
            statistic={campus}
            className="min-h-[410px]"
          />
        </div>

        {/* 04 — TRANSPORT */}

        <div className="relative z-10 col-span-7">
          <StatisticCard
            statistic={transport}
            className="min-h-[410px]"
          />
        </div>
      </div>

      {/* =====================================================
          TABLET
      ===================================================== */}

      <div className="relative hidden grid-cols-2 gap-5 md:grid lg:hidden">
        <div className="relative z-10">
          <StatisticCard
            statistic={academics}
            className="min-h-[440px]"
          />
        </div>

        <div className="relative z-10">
          <StatisticCard
            statistic={people}
            className="min-h-[440px]"
          />
        </div>

        <div className="relative z-10">
          <StatisticCard
            statistic={campus}
            className="min-h-[400px]"
          />
        </div>

        <div className="relative z-10">
          <StatisticCard
            statistic={transport}
            className="min-h-[400px]"
          />
        </div>
      </div>

      {/* =====================================================
          MOBILE
      ===================================================== */}

      <div className="relative grid gap-4 md:hidden">
        <StatisticCard statistic={academics} />

        <StatisticCard statistic={people} />

        <StatisticCard statistic={campus} />

        <StatisticCard statistic={transport} />
      </div>
    </div>
  );
}