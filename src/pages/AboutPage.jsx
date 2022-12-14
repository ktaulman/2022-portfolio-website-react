import React from "react";
import Section from "@/components/layout/Section";
import About from "@/components/About";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async (url, callback) => {
      const data = await fetch(url);
      const json = await data.json();
      callback(json.About);
    };
    fetchData("content.json", setData);
  }, []);
  if (!data) return;
  return (
    <Section className=" flex flex-col justify-center items-center h-screen">
      <div className="h-2/3 lg:w-2/3">
        <About title={data.title} paragraphs={data.paragraphs} />
      </div>
    </Section>
  );
}
