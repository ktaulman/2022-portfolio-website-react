import React from "react";
//components
import SmallBar from "@/components/layout/SmallBar";
//images

export default function Technologies({ icons }) {
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
      <h2 className="text-4xl my-2">Technologies</h2>
      <div className="flex flex-row flex-wrap justify-center">
        {renderImages(icons)}
      </div>
    </div>
  );
}
