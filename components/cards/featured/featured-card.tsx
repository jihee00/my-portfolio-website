import { FC, ReactNode } from "react";
import Header from "./header";
import Video from "./video";

interface FeaturedCardProps {
  logo?: ReactNode;
  title: string;
  tag: string;
  video: string;
  active: boolean;
  caption?: string;
}

const FeaturedCard: FC<FeaturedCardProps> = ({ logo, title, tag, video, active, caption }) => {
  return (
    <div className="w-full h-full bg-secondary-background border border-border shadow-lg rounded-3xl cursor-pointer flex flex-col gap-2 p-2 transition-transform transform hover:scale-105">
      {/* Header */}
      <Header title={title} tag={tag} />
      {/* Body */}
      <div className="relative flex flex-grow p-6 w-full items-center justify-center h-[550px] border border-border rounded-3xl">
        {/* Video */}
        <Video video={video} active={active} caption={caption} />
      </div>
    </div>
  );
};

export default FeaturedCard;