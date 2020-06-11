import React from "react";

export default (props) => {

  const video = props.video  

  const estilo = {

    marginLeft: "auto",
    marginRight: "auto",
    display: "block"
  }
  return (
    <div>
      <iframe
        style = {estilo}
        width="560"
        height="315"
        src= {props.video}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};
