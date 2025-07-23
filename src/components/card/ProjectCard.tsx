import React from "react";
import SpotlightCard from "../SpotlightCard";
import { PinContainer } from "../pin";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { ArrowRightCircle, Globe } from "lucide-react";

interface ProjectCardProps {
    design?: boolean
    pinTitle: string;
    pinLink: string;
    projectImage: string;
    projectTitle: string;
    techstack: string[];
    projectDescription: string;
    githubLink: string;
    isLive: boolean;
    demoLink: string;
}

const ProjectCard = ({project}:{project: ProjectCardProps}) => {
    const {design, pinTitle, pinLink, projectImage, projectTitle, techstack, projectDescription, githubLink, isLive, demoLink} = project;

  return (
    <SpotlightCard className="px-2 md:px-6 pb-15 pt-10 flex flex-col md:flex-row gap-12 border-b border-[#C4BCFF]/20 shadow-lg rounded-lg">
      <PinContainer
        title={pinTitle}
        href={pinLink}
      >
        <div className="h-[250px] w-[350px] md:h-[300px] md:w-[400px] overflow-hidden rounded-md border-8 border-white/20">
          <Image
            src={projectImage}
            alt="Project thumbnail"
            className="h-full w-full object-cover rounded-md"
            width={300}
            height={400}
          />
        </div>
      </PinContainer>

      <div className="flex-1 flex flex-col justify-between">
        <div className="space-y-6">
          <h2 className="text-3xl text-[#C4BCFF] mt-5 mb-5 font-against">
            {projectTitle}
          </h2>

          <div className="w-full h-[0.5px] mb-5 bg-neutral-800 rounded-full"></div>

          <div className="flex flex-wrap gap-2 mb-4">
            {techstack.map((tech, index) => (
              <div
                key={index}
                className="rounded-lg border border-white/10 bg-white/10 backdrop-blur-xs px-4 py-2 shadow-md w-fit flex items-center justify-center text-white transition-all duration-300 ease-out hover:scale-105 hover:backdrop-blur-0 hover:bg-transparent"
              >
                {tech}
              </div>
            ))}
          </div>

          <div className="w-full h-[0.5px] mb-5 bg-neutral-800 rounded-full"></div>

          <p className="text-neutral-400 leading-relaxed">
            {projectDescription}
          </p>
        </div>

        <div className="flex gap-4 mt-6">
          {!design && (<><Link
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border flex gap-2 items-center border-[#C4BCFF]/40 text-[#C4BCFF] rounded-md hover:bg-[#C4BCFF]/10 transition-all duration-200 hover:scale-105"
          >
            GitHub <SiGithub size={20} />
          </Link>
          {isLive && <Link
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border flex gap-2 items-center border-[#C4BCFF]/40 text-[#C4BCFF] rounded-md hover:bg-[#C4BCFF]/10 transition-all duration-200 hover:scale-105"
          >
            Live Demo <Globe size={20} />
          </Link>}</>)}
          {design && (<Link
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border flex gap-2 items-center border-[#C4BCFF]/40 text-[#C4BCFF] rounded-md hover:bg-[#C4BCFF]/10 transition-all duration-200 hover:scale-105"
          >
            View <ArrowRightCircle size={20} />
          </Link>)}
        </div>
      </div>
    </SpotlightCard>
  );
};

export default ProjectCard;
