"use client";
import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper";
import LandingSection from "@/sections/landing";
import FeaturedSection from "@/sections/featured";

export default function Home() {
  return (
  <WaterWaveWrapper
    imageUrl=""
    dropRadius="3"
    perturbance="3"
    resolution="2048"
    >
      {() => (
        <div className="pb-8">
          {/*<LandingSection />*/}
          <FeaturedSection />
        </div>
      )}
    </WaterWaveWrapper>
  );
}
