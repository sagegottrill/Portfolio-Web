import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {technologies.length > 0 ? (
        technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.id || technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))
      ) : (
        <p className="text-white text-lg">No technologies to display</p>
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "");
