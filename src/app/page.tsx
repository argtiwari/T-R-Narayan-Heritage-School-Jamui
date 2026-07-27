import { HeroSection } from "@/components/home/hero-section";
import { StatisticsSection } from "@/components/home/statistics-section";
import { WhyChooseUsSection  } from "@/components/home/why-choose-us-section";
import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-[104px]">
        <HeroSection />
        <StatisticsSection />
        <WhyChooseUsSection />
      </main>
    </>
  );
}