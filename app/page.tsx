"use client";
//import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper";
import LandingSection from "@/sections/landing";
import FeaturedSection from "@/sections/featured";
import AboutSection from "@/sections/about";
import ContactSection from "@/sections/contact";

export default function Home() {
  return (
    <div className="pb-8">
          <LandingSection />
          <FeaturedSection />
          <AboutSection />
          <ContactSection />
    </div>
  );
}
