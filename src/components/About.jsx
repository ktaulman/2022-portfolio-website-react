import React from "react";
import SmallBar from "@/components/layout/SmallBar";
import SplitPane from "@/components/layout/SplitPane";
import Section from "@/components/layout/Section";
import AboutImage from "@/assets/about-image.svg";

export default function About() {
  const paragraphs=[
    `Hi, my name's Kevin Taulman, a Software Engineer from Atlanta, GA. I love building web applications that help solve issues or enable new ideas!`,
    ` I work primarily with React, Vue, Node, and SQL. Currently I volunteer as the Technology Director for a non-profit. I've been fortunate enough to be able to learn about AWS, Google Cloud, and more by building out their technology infrastructure!`
  ]

  function renderParagraphs(paragraphs){
   return paragraphs.map((paragraph,i)=>{
      return(
        <p className="text-lg">
          {paragraph}
        </p>
      )
    })
    
  }

  return (
    <Section className=" flex flex-row justify-center flex-wrap">
      <div className="self-start justify-start flex-1">
        <SmallBar />
        <h2 className="text-4xl">About Me</h2>
      </div>
     
      <SplitPane
        classes={{
          left: "w-full sm:w-2/3 flex justify-end",
          right: "w-0 sm:w-1/3 flex justify-start",
          root:" w-4/5 pt-10"
        }}
        left={
          <Section className="flex flex-col px-3 pr-4 gap-10">
            {renderParagraphs(paragraphs)}
          </Section>
        }
        right={
          <img
            src={AboutImage}
            className="invisible sm:visible"
            alt="kevin taulman image"
          />
        }
      
      />
    </Section>
  );
}
