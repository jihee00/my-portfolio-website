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
    date: "2007 - 2008",
    title: "Financial Advisor",
    subTitle: "Korea Federation of Community Credit Cooperatives",
    link: "",
    tag: "",
  },
  {
    date: "2010 - 2011",
    title: "Web Designer",
    subTitle: "Sorte",
    link: "",
    tag: "",
  },
  {
    date: "2012 - 2017",
    title: "E-commerce Manager",
    subTitle: "TAUAD",
    link: "",
    tag: "",
  }
];