import React from "react";

export default function Card({
  size,
  classes,
  children,
  title,
  direction,
  description,
  media,
  controls,
}) {
  //rendersizer
  const calculateCSS = (cardSize, direction, rootClass) => {
    let size;
    let dir;
    let root;
    //compute cardSize
    switch (cardSize) {
      case "sm":
        size = "w-64";
        break;
      case "md":
        size = "w-80";
        break;
      case "lg":
        size = "w-96";
        break;
      case "full":
        size = "w-full";
        break;
      default:
        size = "w-64";
        break;
    }
    //compute direction
    switch (direction) {
      case "vertical":
        dir = "flex flex-col justify-start items-center";
        break;
      default:
        dir = "flex flex-row justify-start items-center";
        break;
    }
    //compute root cllas
    root = rootClass ? rootClass : "";

    size = size + " " + dir + " " + root + " " + "rounded-xl";

    return size;
  };
  function renderDescription(description, css) {
    return description.map((paragraph) => (
      <p key={paragraph} className={css ? css : ""}>
        {paragraph}
      </p>
    ));
  }
  function renderMedia(media) {
    let result;
    switch (media.type) {
      case "icon":
        result = media.src;
        break;
      case "image":
        result = (
          <img className={media.className} src={media.src} alt="card media" />
        );
        break;
      case "video":
        break;
      default:
        break;
    }

    return result;
  }
  function renderControls(controls) {
    if (!controls) return;
    return controls.map((el, i) => {
      const { css, url, title } = el;
      return (
        <a key={i} className={css} href={url} target="_blank">
          {title}
        </a>
      );
    });
  }

  return (
    <section className={calculateCSS(size, direction, classes.root)}>
      {/* Media */}
      {renderMedia(media)}
      {/*Title */}
      <h2 className={classes.title} alt={title}>
        {title}
      </h2>

      {/* Description */}
      {renderDescription(description, classes.description)}

      {/* Flexible Area for Buttons,Icons,Liks */}

      <div className="flex flex-row space-evenly">
        {renderControls(controls)}
      </div>
      {children}
    </section>
  );
}
