import React from "react";
import Card from "@/components/layout/Card";
import Section from "@/components/layout/Section";
import {
  AcademicCapIcon,
  CubeIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

export default function SummaryCards({ items }) {
  //Icons
  const icons = [
    <AcademicCapIcon className=" text-emerald-500 w-20" />,
    <CubeIcon className="text-emerald-500 w-20" />,
    <UserCircleIcon className="text-emerald-500 w-20" />,
  ];
  //CSS Classes
  const classes = {
    root: "border-solid border-4 rounded-lg border-emerald-500 py-5 px-6 w-full sm:w-60 flex flex-col justify-center h-80 sm:h-auto",
    title: "font-bold uppercase text-black text-xl text-center py-3",
    description: "text-md text-black text-center py-3",
  };
  //Rendering function
  function renderCards(cards) {
    return cards.map((card, i) => {
      const { title, description } = card;
      return (
        <Card
          key={`${i}_card`}
          size="md"
          classes={classes}
          direction={"vertical"}
          media={{ type: "icon", src: icons[i] }}
          title={title}
          description={description}
        />
      );
    });
  }
  //Component Render
  return (
    <Section className="w-full py-4 flex flex-col justify-center items-center space-y-10 sm:flex-row sm:space-x-10 sm:space-y-0 sm:items-stretch">
      {renderCards(items)}
    </Section>
  );
}
