import React from "react";
import SmallBar from "@/components/layout/SmallBar";
import SplitPane from "@/components/layout/SplitPane";
import Spacer from "@/components/layout/Spacer";
import Section from "@/components/layout/Section";
import AboutImage from "@/assets/about-image.svg";

export default function About() {
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
          <div className="flex flex-col px-3 pr-4">
            {/* <img src={AboutImage} alt="kevin taulman image" className="sm:visible"/> */}
            <p className="my-10 text-lg">
              Hi, my name's Kevin Taulman, a Web Developer/Software Engineer
              from Atlanta, GA. I love building web applications that help solve
              issues or enable new ideas!
            </p>
            <p className=" text-lg">
              I work primarily with React, Vue, Express, Node, and SQL and
              volunteer as the Technology Director for a non-profit. I've
              been fortunate enough to be able to learn about AWS, Google Cloud,
              and more by building out their technology infrastructure!
            </p>
          </div>
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
