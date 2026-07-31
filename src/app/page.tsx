"use client";

import { useState } from "react";

import BrandIntro from "@/components/home/brand-intro";

import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/home/hero-section";
import { StatisticsSection } from "@/components/home/statistics/statistics-section";
import { WhyChooseUsSection } from "@/components/home/why-choose-us-section";
import { LearningSection } from "@/components/home/learning-section";
import { StudentLifeSection } from "@/components/home/student-life-section";
import { HeroStatisticsTransition } from "@/components/home/transitions/hero-statistics-transition";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <BrandIntro
          onFinish={() => {
            setLoading(false);
          }}
        />
      )}

      <Navbar />

      <main
        className={`transition-opacity duration-700 ${
          loading
            ? "pointer-events-none opacity-0"
            : "pointer-events-auto opacity-100"
        }`}
      >
        <HeroSection />
        
        <HeroStatisticsTransition />

        <StatisticsSection />

        <WhyChooseUsSection />

        <LearningSection />

        <StudentLifeSection />
      </main>
    </>
  );
}