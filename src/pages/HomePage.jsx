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
    <main className="pt-2 flex flex-col space-y-20 items-center">
      {/* Banner */}
      <Banner />

      <Section className="w-4/5 sm:2/3 flex flex-col space-y-10">
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
