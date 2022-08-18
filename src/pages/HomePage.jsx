import React from "react";
//Home
import Banner from "@/components/Banner";
import Cards from "@/components/Cards";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";
import Section from "@/components/layout/Section";

export default function HomePage() {
  //local state
  return (
    <main className="pt-2 flex flex-col items-center justify-center">
      {/* Banner */}
      <Banner />

      <Section className=" flex flex-col gap-28 w-4/5 lg:w-2/3">
        {/* Card Panel Section */}
        <Cards />
        {/* About Me Section  */}
        <About />

        {/* Projects Section */}
        <Projects />

        {/* Technologies Icons */}
        <Technologies />

        {/* Contact Icons */}
        <Contact />
      </Section>
    </main>
  );
}
