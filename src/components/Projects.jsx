import React from "react";
import Section from "@/components/layout/Section";
import SmallBar from "@/components/layout/SmallBar";
import Card from "@/components/layout/Card";
import SplitPane from "@/components/layout/SplitPane";

export default function Projects({ items }) {
  function renderPanes(cards) {
    //helper function
    function generateMediaElement(card, i) {
      if (card.media.type === "video") {
        return (
          <video
            width="600"
            height="250"
            controls
            className={` ${card.media.classes}`}
            src={card.media.src}
            alt="project video"
          />
        );
      } else {
        return (
          <img
            key={i}
            height="250"
            className={`${card.media.classes}`}
            src={card.media.src}
            alt="project image"
          />
        );
      }
    }

    //renders panes
    return cards.map((card, i) => {
      const { classes, direction, title, description, controls, media } = card;
      return (
        <SplitPane
          key={i}
          left={generateMediaElement(card, i)}
          right={
            <>
              <Card
                size="md"
                key={`Projects_${i}`}
                classes={classes}
                direction={direction}
                media={media}
                title={title}
                description={description}
                controls={controls}
              />
            </>
          }
          classes={{
            root: "my-10 flex flex-col sm:flex-row sm:justify-center w-full",
            left: "flex flex-row justify-end items-center ",
            right:
              "flex flex-col justify-center items-center sm:flex-row sm:justify-start ",
          }}
        />
      );
    });
  }
  return (
    <Section className="w-full ">
      <SmallBar className=" m-auto mr-0" />
      <h2 className=" text-right text-4xl">Work Experience</h2>
      {renderPanes(items)}
    </Section>
  );
}
