import React from 'react';
import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

export default function ExperienceCard() {
  return (
    <Card title="My Experience">
      <Timeline>
        {experienceData.map((ex,i) => (
            <TimelineItem
            key={i}
            date={ex.date}
            title={ex.title}
            subTitle={ex.subTitle}
            link={ex.link}
            tag={ex.tag}
            />
          ))}
      </Timeline>
    </Card>
  )
}

const experienceData = [
  {
    date: "2008 - 2009",
    title: "Financial Advisor",
    subTitle: "Korea Federation of Community Credit Cooperatives",
    link: "http://www.uiwangkfcc.co.kr/",
    tag: "Republic of Korea",
  },
  {
    date: "2010 - 2011",
    title: "Web Designer",
    subTitle: "NSON Media Inc.",
    link: "",
    tag: "Republic of Korea",
  },
  {
    date: "2012 - 2017",
    title: "E-commerce Manager",
    subTitle: "TAUAD Inc.",
    link: "",
    tag: "Republic of Korea",
  }
];