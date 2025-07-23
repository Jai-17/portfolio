import React from "react";
import { CardSpotlight } from "../card/card-spotlight";

const Education = () => {
  return (
    <div>
      <CardSpotlight>
        <div className="flex flex-col text-center gap-3 md:flex-row md:text-left justify-between items-center mb-2">
          <h1 className="font-medium text-xl text-neutral-200 relative z-20">
            Thapar Institute of Engineering & Technology, Patiala
          </h1>
          <p className="text-neutral-400 md:text-neutral-300 text-xl font-semibold relative z-20">2022-2026</p>
        </div>
        <div className="text-neutral-400 text-center md:text-left text-lg relative z-20">
            B.E Computer Science & Engineering | CGPA: 9.16
        </div>
      </CardSpotlight>
      <CardSpotlight>
        <div className="flex flex-col text-center gap-3 md:flex-row md:text-left justify-between items-center mb-2">
          <h1 className="font-medium text-xl text-neutral-200 relative z-20">
            Amity International School, Sector-46, Gurugram
          </h1>
          <p className="text-neutral-400 md:text-neutral-300 text-xl font-semibold relative z-20">2020-2022</p>
        </div>
        <div className="text-neutral-400 text-center md:text-left text-lg relative z-20">
            Physics, Chemistry, Maths, Computer Science, English | 96%
        </div>
      </CardSpotlight>
    </div>
  );
};

export default Education;
