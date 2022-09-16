import React, { useEffect, useState } from "react";
import Projects from "@/components/Projects";
import Section from "@/components/layout/Section";

export default function ProjectsPage() {
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
    <Section className="flex justify-center">
      <div className="w-full sm:3/5">
        <Projects items={data.Projects} />
      </div>
    </Section>
  );
}
