import HeadingAnimatedSvg from "@/components/heading/heading-animated-svg";
import Link from "next/link";
import Image from "next/image";
import ShadeImg from '@/public/assets/images/background/card-shade.png'

export default function MenuCard() {
  return <div className="w-full h-auto min-h-[427px] gap-[70px] bg-[#1e36ea] rounded-[10px] flex-col justify-between items-start flex relative overflow-hidden pt-10 px-[25px] pb-5 shadow-md">
    {/*Header*/}
    <div className="w-full flex relative justify-between items-center">
      <div className="font-bold text-2xl text-white">
        Who is Jihee?
      </div>
      <HeadingAnimatedSvg
      animated
      text="LEARN MORE ABOUT JIHEE" />
    </div>
    {/*Menu*/}
    <div className="z-40 w-full flex flex-col gap-y-[5px] justify-center items-start relative">
      {
        myLinks.map((link, i) => (
          <Link
          key={i}
          href={link.link}
          className="text-[#fdf825] uppercase text-[52px] font-bold leading-[85%] transition-colors duration-75 hover:text-white"
          >{link.title}</Link>
        ))
      }
    </div>
    {/*Image shade*/}
    <Image src={ShadeImg} alt="" className="block w-full h-full mix-blend-overlay absolute top-0 right-0 left-0 bottom-0"/>
  </div>
}

const myLinks = [
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Resume",
    link: "#resume",
  },
  {
    title: "TECH-STACK",
    link: "#tech-stack",
  },
  {
    title: "EDUCATION",
    link: "#education",
  },
  {
    title: "EXPERIENCE",
    link: "#experience",
  },
  {
    title: "Gallery",
    link: "#gallery",
  },
];