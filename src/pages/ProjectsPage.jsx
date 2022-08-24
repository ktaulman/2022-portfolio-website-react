import React from "react";
import Projects from "@/components/Projects";
import Section from "@/components/layout/Section";

export default function ProjectsPage() {
  //MapSimply, AutumnDoors, The Pave Foundation, Portfolio

  return (
    <Section className="flex justify-center">
      <div className="w-full sm:3/5">
        <Projects />
      </div>
    </Section>
  );
}
