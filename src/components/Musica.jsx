import React from "react";
import Escala from "./Escala";
import Backing from "./Backing";
import Cifra from "./Cifra";
import Tab from "./Tab";

export default (props) => {
  return (
    <div>
      <Cifra />
      <Escala url="https://fretmap.app/scale-major/root-e/hand-right" />
      <Backing video="https://www.youtube.com/embed/UPm4x4PMOpU" />
      <Tab />
    </div>
  );
};
