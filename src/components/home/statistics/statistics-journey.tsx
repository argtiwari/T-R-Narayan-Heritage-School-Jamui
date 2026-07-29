"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import type { StatisticId } from "./statistics-data";

type JourneyStage =
  | "idle"
  | "entering"
  | "academics"
  | "people"
  | "campus"
  | "transport"
  | "exiting"
  | "complete";

type StatisticsJourneyContextValue = {
  stage: JourneyStage;
  activeCard: StatisticId | null;
  progress: number;
  startJourney: () => void;
};

const StatisticsJourneyContext =
  createContext<StatisticsJourneyContextValue | null>(null);

/*
  One cinematic timeline:

  0.0s   Bus begins entering
  1.2s   Academics
  2.7s   People
  4.3s   Campus
  5.9s   Transport
  7.2s   Bus exits
  8.4s   Journey complete
*/

const JOURNEY = {
  academics: 1200,
  people: 2700,
  campus: 4300,
  transport: 5900,
  exiting: 7200,
  complete: 8400,
} as const;

export function StatisticsJourneyProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [stage, setStage] = useState<JourneyStage>("idle");
  const [progress, setProgress] = useState(0);

  const hasStarted = useRef(false);
  const timers = useRef<number[]>([]);
  const animationFrame = useRef<number | null>(null);

  const clearJourney = useCallback(() => {
    timers.current.forEach((timer) => {
      window.clearTimeout(timer);
    });

    timers.current = [];

    if (animationFrame.current !== null) {
      window.cancelAnimationFrame(animationFrame.current);
      animationFrame.current = null;
    }
  }, []);

  const startJourney = useCallback(() => {
    if (hasStarted.current) return;

    hasStarted.current = true;

    const startedAt = performance.now();

    setStage("entering");
    setProgress(0);

    const schedule = (
      delay: number,
      nextStage: JourneyStage,
    ) => {
      const timer = window.setTimeout(() => {
        setStage(nextStage);
      }, delay);

      timers.current.push(timer);
    };

    schedule(JOURNEY.academics, "academics");
    schedule(JOURNEY.people, "people");
    schedule(JOURNEY.campus, "campus");
    schedule(JOURNEY.transport, "transport");
    schedule(JOURNEY.exiting, "exiting");
    schedule(JOURNEY.complete, "complete");

    const updateProgress = (now: number) => {
      const elapsed = now - startedAt;

      const nextProgress = Math.min(
        elapsed / JOURNEY.complete,
        1,
      );

      setProgress(nextProgress);

      if (nextProgress < 1) {
        animationFrame.current =
          window.requestAnimationFrame(updateProgress);
      }
    };

    animationFrame.current =
      window.requestAnimationFrame(updateProgress);
  }, []);

  useEffect(() => {
    return clearJourney;
  }, [clearJourney]);

  let activeCard: StatisticId | null = null;

  if (stage === "academics") {
    activeCard = "academics";
  }

  if (stage === "people") {
    activeCard = "people";
  }

  if (stage === "campus") {
    activeCard = "campus";
  }

  if (stage === "transport") {
    activeCard = "transport";
  }

  return (
    <StatisticsJourneyContext.Provider
      value={{
        stage,
        activeCard,
        progress,
        startJourney,
      }}
    >
      {children}
    </StatisticsJourneyContext.Provider>
  );
}

export function useStatisticsJourney() {
  const context = useContext(StatisticsJourneyContext);

  if (!context) {
    throw new Error(
      "useStatisticsJourney must be used inside StatisticsJourneyProvider",
    );
  }

  return context;
}