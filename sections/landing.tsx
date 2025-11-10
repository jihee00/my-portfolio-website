"use client";

import React from 'react'
import Header from '@/components/navigation/header/header'
import MagneticWrapper from '@/components/visualEffects/magnetic-wrapper'
import FancyButton from '@/components/ui/fancy-button'
import { FaArrowRight } from 'react-icons/fa'
import LiveClock from '@/components/ui/live-clock'
import ScrollDown from '@/components/ui/scroll-down'
import { openTawkChat } from "@/lib/tawk";

export default function LandingSection() {

  return (
    <div id="home" className="relative h-screen overflow-hidden p-8">
      {/* Header */}
      <Header />
      {/*Show magnetic fancy button on small screens and hide it on md screens */}
      {/*<div className="absolute bottom-36 left-10 z-20 md:hidden">
        <MagneticWrapper>
          <FancyButton 
          text="Let's Talk"
          icon={<FaArrowRight />}
          onClick={openTawkChat}
          />
        </MagneticWrapper>
      </div>
      */}
      {/*Live Clock*/}
      <div className="absolute right-10 bottom-10">
        <LiveClock timeZone="America/Toronto" />
      </div>
      {/*Slogan*/}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
      mt-8 leading-[4.67vw] lg:leading-[3.33vw] 2xl:leading-[3rem] font-medium h-[13.33rem] tracking-[-0.1rem]">
        <div className="flex flex-col justify-center items-center text-primary-foreground text-[6vw] lg:text-[4.67vw] 2xl:text-[4rem] space-y-4">
          <div>
            <span>Hello, universe <span className="inline-block animate-wave">👋🏻</span> </span>
          </div>
          <div>
            <span>I'm <span className='text-hotpink'>Jihee Kim</span>.</span>
          </div>
          <div>
            <span><span className='text-purple'>Full stack</span> developer.</span>
          </div>
        </div>
        {/*Magnetic Scroll Down*/}
        <MagneticWrapper className="mt-8">
          <ScrollDown />
        </MagneticWrapper>
      </div>
    </div>
  );
}
