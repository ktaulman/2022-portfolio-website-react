import React from "react";
import Section from "@/components/layout/Section";
import About from "@/components/About";

export default function AboutPage() {
  return (
    <Section className=" flex flex-col justify-center items-center h-screen">
      <div className="h-2/3 lg:w-2/3">
        <About />
      </div>
    </Section>
  );
}
