import React from "react";
import { CardSpotlight } from "../card/card-spotlight";
import { LinkPreview } from "../LinkPreview";

const RecentAchievements = () => {
  return (
    <div>
      <CardSpotlight>
        <div className="flex justify-between items-center mb-2">
          <h1 className="font-medium text-xl text-neutral-200 relative z-20">
            Overall Winner at JPMC Code for Good&apos;25
          </h1>
          <p className="text-neutral-300 text-xl font-semibold relative z-20">Jun&apos;25</p>
        </div>
        <div className="text-neutral-400 text-lg relative z-20">
         Built a platform for helping <LinkPreview url="https://github.com/" isStatic imageSrc="/cfg-landing.png" className="text-[#C4BCFF] font-semibold italic">Kalam Foundation</LinkPreview>, won amongs 50,000+ regisatrions.
        </div>
      </CardSpotlight>
      <CardSpotlight>
        <div className="flex justify-between items-center mb-2">
          <h1 className="font-medium text-xl text-neutral-200 relative z-20">
            Finalist Smart India Hackathon&apos;24
          </h1>
          <p className="text-neutral-300 text-xl font-semibold relative z-20">Dec&apos;24</p>
        </div>
        <div className="text-neutral-400 text-lg relative z-20">
         Built an <LinkPreview url="https://github.com/" isStatic imageSrc="/sih.png" className="text-[#C4BCFF] font-semibold italic">AI Powered Research Enginer</LinkPreview>, were top 5 nationwide.
        </div>
      </CardSpotlight>
    </div>
  );
};

export default RecentAchievements;
