import React from "react";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import BallCoins from "./canvas/Ball";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCoins icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
