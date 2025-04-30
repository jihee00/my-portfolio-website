import React from 'react';
import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

export default function EducationCard() {
  return (
    <Card title="My Education">
      <Timeline>
        {educationData.map((ex,i) => (
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

const educationData = [
  {
    date: "2002 - 2006",
    title: "Chinese Language And Literature",
    subTitle: "Ewha Womans' University",
    link: "https://www.ewha.ac.kr/ewhaen/index.do",
    tag: "Republic of Korea",
  },
  {
    date: "2008 - 2009",
    title: "Web Design Master Course",
    subTitle: "Ezen Computer Academy",
    link: "https://mr.ezenac.co.kr/",
    tag: "Republic of Korea",
  },
  {
    date: "2019 - 2024",
    title: "Computer Programming & Analysis",
    subTitle: "Seneca Polytechnic",
    link: "https://www.senecapolytechnic.ca/home.html",
    tag: "Canada",
  }
];