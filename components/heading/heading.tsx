import { FC } from "react";
import SVGCurve from "@/components/visualEffects/svg-curve";
import HeadingAnimatedSvg from "@/components/heading/heading-animated-svg";

interface HeadingProps { 
  number: string;
  title_1: string;
  title_2: string;
}

const Heading: FC<HeadingProps> = ({ number, title_1, title_2}) => {
  return <div className="relative my-10 px-8 z-20">
    {/*Number*/}
    <div className="outline-none flex flex-col justify-start shrink-0 opacity-5 transform -top-32 2xl:-top-24
      w-[71px] flex-none h-auto left-4 lg:left-12 absolute whitespace-pre">
        <h2 className="font-roboto text-[90px] text-center text-primary-foreground relative">
          <span className="bottom_fade bg-clip-text text-transparent p-4">
            {number}
          </span>
        </h2>
    </div>
    {/* heading text wrapper */}
    <div className="flex items-center flex-nowrap min-h-min overflow-hidden p-0 w-full font-robotoSerif">
      <p className="text-primary-foreground text-[4vw] lg:text-[3vw] leading-[100%] mr-3">
        {title_1}
      </p>
      <HeadingAnimatedSvg text="LEARN MORE ABOUT OUR FEATURED PROJECTS"/>
      <p className="text-primary-foreground text-[4vw] lg:text-[3vw] leading-[100%] italic">
        {title_2}
      </p>
    </div>
    {/* SVG Curve */}
    <SVGCurve />
  </div>;
};

export default Heading;