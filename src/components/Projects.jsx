import React from "react";
import Section from "@/components/layout/Section";
import SmallBar from "@/components/layout/SmallBar";
import Card from "@/components/layout/Card";
import SplitPane from "@/components/layout/SplitPane";

export default function Projects({ items }) {
  //CSS Classes
  const classes = {
    project: {
      root: "flex flex-row items-start",
      title: "font-bold text-4xl text-center",
      description: "my-1",
    },
    splitPane: {
      root: "my-10 flex flex-col sm:flex-row sm:justify-center w-full ",
      left: "flex flex-col justify-center items-center ",
      right:
        "flex flex-col justify-center items-center sm:flex-row sm:justify-start ",
    },
  };
  //Rendering Functions
  function generateMediaElement(project, i) {
    if (project.media.type === "video") {
      return (
        <video
          controls
          className="border-2 border-solid rounded-xl border-emerald-500 m-0 sm:mr-12 h-[250px] sm:h-[350px]  w-full max-w-lg flex-1"
          src={project.media.src}
          alt="project video"
        />
      );
    } else {
      return (
        <img
          key={i}
          height="250"
          className="border-2 border-solid rounded-xl border-emerald-500 m-0 sm:mr-12 h-[200px] sm:h-[350px] w-full min-w-sm  max-w-lg w- p-0"
          src={project.media.src}
          alt="project image"
        />
      );
    }
  }
  function renderPanes(cards) {
    //renders panes
    return cards.map((project, i) => {
      const { title, description, controls, media } = project;
      return (
        <SplitPane
          key={i}
          left={generateMediaElement(project, i)}
          right={
            <>
              <Card
                size="md"
                key={i}
                classes={classes.project}
                direction={"vertical"}
                media={media}
                title={title}
                description={description}
                controls={controls}
              />
            </>
          }
          classes={classes.splitPane}
        />
      );
    });
  }
  //Component Render
  return (
    <Section className="w-full ">
      <SmallBar className=" m-auto mr-0" />
      <h2 className=" text-right text-4xl">Work Experience</h2>
      {renderPanes(items)}
    </Section>
  );
}
