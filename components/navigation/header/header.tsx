import React from 'react'
import Profile from '@/components/ui/profile'
import MagneticWrapper from '@/components/visualEffects/magnetic-wrapper'
import FancyButton from '@/components/ui/fancy-button'
import { FaArrowRight } from 'react-icons/fa'

export default function Header() {
  return (
    <div className="w-full flex items-center justify-center md:justify-between">
      <Profile />
      <div className="hidden md:inline">
        <MagneticWrapper>
          <FancyButton 
          text="Let's Talk"
          icon={<FaArrowRight />}
          />
        </MagneticWrapper>
      </div>
    </div>
  );
}