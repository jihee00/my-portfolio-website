"use client";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper";
import { GoHomeFill } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import Input from "@/components/ui/input";
import TextArea from "@/components/ui/text-area";
import Profile from "@/components/ui/profile";
import FancyButton from "@/components/ui/fancy-button";
import { FaArrowRight } from "react-icons/fa";
import LiveClock from "@/components/ui/live-clock";
export default function Home() {
  return <WaterWaveWrapper
    imageUrl=""
    dropRadius="3"
    perturbance="3"
    resolution="2048"
    >
      {() => (
        <div className="w-full p-10">
          <div className="max-w-2xl mx-auto">
              <Card title="Ui Components">
                <div className="grid grid-cols-4">
                  <Button>Basic Button</Button>
                  <Button><GoHomeFill />Basic Button</Button>
                  <Button isIcon><FaUser /></Button>
                  <Button link="https://www.google.com">Google</Button>
                </div>
                <Input type="text" placeholder="Full name"/>
                <Input type="text" placeholder="Full name" icon={<FaUser />}/>
                <TextArea placeholder="Full name"/>
                <TextArea placeholder="Full name" icon={<FaUser />}/>
                <Profile />
                <div className="w-[350px]">
                  <FancyButton text="Contact Me" icon={<FaArrowRight />}/>
                </div>
                <LiveClock timeZone="America/Toronto"/>
              </Card>
          </div>
      </div>
      )}
  </WaterWaveWrapper>
}
