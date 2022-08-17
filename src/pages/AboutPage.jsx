import React from "react";
import Section from "@/components/layout/Section";
import About from "@/components/About";

export default function AboutPage() {
  return (
    <Section className="flex justify-center">
      <div className="w-3/5">
        <About />
      </div>
    </Section>
  );
}
