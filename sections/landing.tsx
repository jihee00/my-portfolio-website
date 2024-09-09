import React from 'react'
import Header from '@/components/navigation/header/header'
import MagneticWrapper from '@/components/visualEffects/magnetic-wrapper'
import FancyButton from '@/components/ui/fancy-button'
import { FaArrowRight } from 'react-icons/fa'
import LiveClock from '@/components/ui/live-clock'

export default function LandingSection() {
  return (
    <div className="relative h-screen overflow-hidden p-8">
      {/* Header */}
      <Header />
      {/*Show magnetic fancy button on small screens and hide it on md screens */}
      <div className="absolute bottom-36 left-10 z-20">
        <MagneticWrapper>
          <FancyButton 
          text="Let's Talk"
          icon={<FaArrowRight />}
          />
        </MagneticWrapper>
      </div>
      {/*Live Clock*/}
      <div className="absolute right-10 bottom-10">
        <LiveClock timeZone="America/Toronto" />
      </div>
    </div>
  );
}
