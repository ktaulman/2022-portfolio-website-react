import React from "react";
//components
import SmallBar from "@/components/layout/SmallBar";
//images
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

export default function Technologies() {
  const images = [
    aws,
    css,
    google,
    html,
    js,
    node,
    postgresql,
    reactImage,
    redux,
    stripe,
    tailwind,
    vue,
  ];

  function renderImages(images) {
    return images.map((image, i) => (
      <img
        key={i}
        src={image}
        className="w-[125px] h-[65px]"
        alt="technology used"
      />
    ));
  }

  return (
    //
    <div>
      <SmallBar />
      <h2 className="text-2xl my-2">Technologies</h2>
      <div className="flex flex-row flex-wrap justify-center">
        {renderImages(images)}
      </div>
    </div>
  );
}
