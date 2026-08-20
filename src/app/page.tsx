"use client";

import { Navbar } from "@/components/layout/navbar";

import { HeroSection } from "@/components/home/hero-section";
import ParentDiscoverySection from "@/components/home/parent-discovery/parent-discovery-section";
import LeadershipSection from "@/components/home/leadership/leadership-section";
import { StudentLifeSection } from "@/components/home/student-life-section";

import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      {/* =================================================
          NAVIGATION
         ================================================= */}

      <Navbar />

      {/* =================================================
          MAIN WEBSITE
         ================================================= */}

      <main>
        {/* Hero */}
        <HeroSection />

        {/* Parent Discovery */}
        <ParentDiscoverySection />

        {/* Leadership */}
        <LeadershipSection />

        {/* Student Life */}
        <StudentLifeSection />
      </main>

      {/* =================================================
          FOOTER
         ================================================= */}

      <Footer />
    </>
  );
}