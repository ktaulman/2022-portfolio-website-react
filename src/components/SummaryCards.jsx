import React from "react";
import Card from "@/components/layout/Card";
import Section from "@/components/layout/Section";
import {
  AcademicCapIcon,
  CubeIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

export default function SummaryCards({ items }) {
  //rendering
  function renderCards(cards) {
    let icons = [
      <AcademicCapIcon className=" text-emerald-500 w-20" />,
      <CubeIcon className="text-emerald-500 w-20" />,
      <UserCircleIcon className="text-emerald-500 w-20" />,
    ];
    cards.forEach((el, i) => (el.media.src = icons[i]));
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
      {renderCards(items)}
    </Section>
  );
}
