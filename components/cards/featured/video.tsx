import { cn } from "@/lib/utils";
import { FC } from "react";
import ReactPlayer from "react-player";

interface VideoProps {
  video: string;
  active: boolean;
  caption?: string;
}

const Video: FC<VideoProps> = ({ video, active, caption }) => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 rounded-3xl overflow-hidden">
      <ReactPlayer
        url={video}
        playing={active}
        loop={active}
        muted
        controls
        width="100%"
        height="100%"
        className={cn("object-cover rounded-3xl transition-all duration-500")}
        aria-label={caption}
      />
      {caption && <p className="mt-2 text-sm text-gray-400">{caption}</p>}
    </div>
  );
};

export default Video;