import React from "react";
import Card from "@/components/layout/Card";
import Section from "@/components/layout/Section";
import {
  AcademicCapIcon,
  CubeIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

export default function Cards() {
  //cards
  const cards = [
    //Card 1
    {
      classes: {
        root: "border-solid border-4 rounded-lg border-emerald-500 py-5 px-6 w-full sm:w-60 flex flex-col justify-center h-80 sm:h-auto",
        title: "font-bold uppercase text-black text-xl text-center py-3",
        description: "text-md text-black text-center py-3",
      },
      direction: "vertical",
      media: {
        type: "icon",
        src: <AcademicCapIcon className=" text-emerald-500 w-20" />,
      },
      title: "Cross-Industry Experience",
      description: [
        "Before web development, I worked in account management in the IT Research and Cloud fields. Helping business leaders and developers alike.",
      ],
    },
    //Card 2
    {
      classes: {
        root: "border-solid border-4 rounded-lg border-emerald-500 py-5 px-6 w-full sm:w-60 flex flex-col justify-center h-80 sm:h-auto",
        title: "font-bold uppercase text-black text-center text-xl py-3",
        description: "text-md text-black text-center py-3",
      },
      direction: "vertical",
      media: {
        type: "icon",
        src: <CubeIcon className="text-emerald-500 w-20" />,
      },
      title: "Full Stack Development",
      description: [
        "For me, it is nice to know all sides of the process. Whatever technology will help us build apps, I'll learn and make sure to implement it. ",
      ],
    },
    //Card 3
    {
      classes: {
        root: "border-solid border-4 rounded-lg border-emerald-500 py-5 px-6 w-full sm:w-60 flex flex-col justify-center h-80 sm:h-auto",
        title: "font-bold uppercase text-black text-center text-xl py-3",
        description: "text-md text-black text-center py-3",
      },
      direction: "vertical",
      media: {
        type: "icon",
        src: <UserCircleIcon className="text-emerald-500 w-20" />,
      },
      title: "Front End Expertise",
      description: [
        "I've developed projects in both Vue and React as well as learned libaries like Tailwind and Bootstrap.",
        "I try to adhere to Material Design but love learning new things.",
      ],
    },
  ];
  //rendering
  function renderCards(cards) {
    return cards.map((card, i) => {
      const { classes, direction, title, description, controls, media } = card;
      return (
        <Card
          key={`${i}_card`}
          size="md"
          classes={classes}
          direction={direction}
          media={media}
          title={title}
          description={description}
          controls={controls}
        />
      );
    });
  }
  return (
    <Section className="w-full py-4 flex flex-col justify-center items-center space-y-10 sm:flex-row sm:space-x-10 sm:space-y-0 sm:items-stretch">
      {renderCards(cards)}
    </Section>
  );
}
