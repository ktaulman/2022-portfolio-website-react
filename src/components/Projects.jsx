import React from "react";
import Section from "@/components/layout/Section";
import SmallBar from "@/components/layout/SmallBar";
import Card from "@/components/layout/Card";
import SplitPane from "@/components/layout/SplitPane";
import BannerImage from "@/assets/banner-home.svg";
import projectOneImage from "@/assets/project-1.svg";
import projectTwoImage from "@/assets/project-2.svg";
import projectThreeImage from "@/assets/project-3.svg";

export default function Projects() {
  let cards = [
    {
      classes: {
        root: "flex flex-row items-start",
        title: "font-bold text-4xl text-center",
        description: "my-1",
      },
      direction: "vertical",
      title: "RE/MAX Mapsimply",
      description: [
        " Used by RE/MAX's G73 sales team to demo and display data from their Location Intelligence API. This included Address, Property, Parcel, Residential, and Census APIs used by companies to evaluate decisions prior to investment in a particular geographic area.",
      ],
      controls: [
        // <a className="bg-sky-600 text-white px-1 py-2">React Code</a>
      ],
      media: {
        src: "https://mapsimply-video.s3.amazonaws.com/Wide_Video.mp4",
        type: "video",
        classes: "",
      },
    },
    {
      classes: {
        root: "flex flex-row items-start",
        title: "font-bold text-4xl text-center",
        description: "my-1",
      },
      direction: "vertical",
      title: "Autumn Doors",
      description: [
        " Designed, developed, and deployed an eCommerce website that sells interior, sliding barn doors in Texas and Florida.",
        "Technologies used were Javascript, HTML, CSS, React (Material UI Components), React Router (Routing), Redux (Stage Management), NodeJS (Express Framework), NodeMailer (Email), Stripe SDK",
      ],
      controls: [
        <a
          className="bg-emerald-500 text-white px-1 py-2"
          href="https://www.autumndoors.com"
          target="_blank"
        >
          Live Site
        </a>,
      ],
      media: {
        src: projectOneImage,
      },
    },
    {
      classes: {
        root: "flex flex-row items-start",
        title: "font-bold text-4xl text-center",
        description: "my-1",
      },
      direction: "vertical",
      title: "The PAVE Foundation",
      description: [
        " Designed, developed, and deployed a non-profit's website & infrastrcture. Their mission is to advance STEM and Arts Education for African American Girls in the Atlanta area. I continued on, post-development, as their Technology Director.",
        "Technologies used were Javascript, HTML, CSS, React (Material UI Components), React Router (Routing), Redux (Stage Management), NodeJS (Express Framework), NodeMailer (Email), Stripe SDK",
      ],
      controls: [
        <a
          className="bg-emerald-500 text-white px-1 py-2"
          href="https://www.thepavefoundation.org"
          target="_blank"
        >
          Live Site
        </a>,
      ],
      media: {
        src: projectTwoImage,
      },
    },
    {
      classes: {
        root: "flex flex-row items-start",
        title: "font-bold text-4xl text-center",
        description: "my-1",
      },
      direction: "vertical",
      title: "This Portfolio Website",
      description: [
        " Designed, developed, and deployed as an example of my React capabilities. It has an emphasis on reusable components, well organized files and folder structures, and is publicly available","Includes Node backend deployed to AWS Lamba using GMail and Nodemailer to handle contact form submissions.",
        "Technologies used were Tailwind CSS, React, React Router (Routing), Vite, AWS Lamba, and Node.",
      ],
      controls: [
        <a
          className="bg-sky-600 text-white px-1 py-2"
          href="https://github.com/ktaulman/2022-portfolio-website-react"
          target="_blank"
        >
          React Code
        </a>,
        <a
        className="bg-emerald-500 text-white px-1 py-2 ml-3"
        href="https://github.com/ktaulman/2022-portfolio-website-backend"
        target="_blank"
      >
        Node Code
      </a>
      ],
      media: {
        src: projectThreeImage,
      },
    },
  ];

  function renderPanes(cards) {
    //helper function
    function generateMediaElement(card, i) {
      if (card.media.type === "video") {
        return (
          <video
            width="600"
            height="250"
            controls
            className={`border-2 border-solid rounded-xl border-emerald-500 m-0 sm:mr-12 invisible sm:visible h-[250px] w-full max-w-md   ${card.media.classes}`}
            src={card.media.src}
            alt="project video"
          />
        );
      } else {
        return (
          <img
            key={i}
            height="250"
            className={`border-2 border-solid rounded-xl border-emerald-500 m-0 sm:mr-12 h-[250px] w-full invisible sm:visible max-w-md p-0  ${card.media.classes}`}
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
            root: "my-10",
            left: "w-0 sm:w-2/3 flex flex-row justify-end items-center",
            right:
              "w-full sm:w-1/3 flex flex-col justify-center items-start sm:flex-row sm:justify-start",
          }}
        />
      );
    });
  }
  return (
    <Section className="w-full ">
      <SmallBar className=" m-auto mr-0" />
      <h2 className=" text-right text-4xl">Work Experience</h2>
      {renderPanes(cards)}
    </Section>
  );
}
