import Heading from "@/components/heading/heading";
import FeaturedCard from "@/components/cards/featured/featured-card";
import { featuredData } from "@/data";
import ExpandableFeatured from "@/components/expandables/expandable-featured";
import { useState } from "react";

export default function FeaturedSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div id="featured" className="pt-24 px-3 lg:px-8">
      {/* Heading */}
      <Heading number="01" title_1="Featured" title_2="Work" />

      {/* Featured Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredData.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <FeaturedCard
              title={item.title}
              tag={item.tag}
              video={item.video}
              active={activeIndex === index}
            />
          </div>
        ))}
      </div>

      {/* Expandable Featured (선택 사항) */}
      {/* 
      <div className="mt-24">
        <ExpandableFeatured />
      </div> 
      */}
    </div>
  );
}
