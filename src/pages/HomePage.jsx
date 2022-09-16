import React, { useState, useEffect } from "react";
//Home
import Banner from "@/components/Banner";
import Cards from "@/components/Cards";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";

import aws from "@/assets/technologies/aws.svg";
import css from "@/assets/technologies/css.svg";
import google from "@/assets/technologies/google.svg";
import html from "@/assets/technologies/html.svg";
import js from "@/assets/technologies/js.svg";
import node from "@/assets/technologies/node.svg";
import postgresql from "@/assets/technologies/postgresql.svg";
import reactImage from "@/assets/technologies/react.svg";
import redux from "@/assets/technologies/redux.svg";
import stripe from "@/assets/technologies/stripe.svg";
import tailwind from "@/assets/technologies/tailwind.svg";
import vue from "@/assets/technologies/vue.svg";
const images = [
  html,
  css,
  js,
  reactImage,
  redux,
  vue,
  tailwind,
  node,
  postgresql,
  aws,
  google,
  stripe,
];

//Layout Components
import Contact from "@/components/Contact";
import Section from "@/components/layout/Section";

export default function HomePage() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async (url) => {
      const data = await fetch(url);
      const json = await data.json();
      // console.log(data, json);
      await setData(json);
    };
    fetchData("config.json");
  }, [data]);

  if (!data) return;

  return (
    <main className="pt-2 flex flex-col items-center justify-center">
      {/* Banner */}
      <Banner />

      <Section className=" flex flex-col gap-28 w-4/5 lg:w-2/3">
        {/* Card Panel Section */}
        <Cards items={data.Cards} />
        {/* About Me Section  */}
        <About title={data.About.title} paragraphs={data.About.paragraphs} />

        {/* Projects Section */}
        <Projects items={data.Projects} />

        {/* Technologies Icons */}
        <Technologies icons={images} />

        {/* Contact Icons */}
        <Contact />
      </Section>
    </main>
  );
}
