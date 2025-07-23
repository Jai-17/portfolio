"use client";

import ProjectCard from "@/components/card/ProjectCard";
import Footer from "@/components/sections/Footer";
import { projectDetailsData, projectUXDetailsData } from "@/lib/constants";
import { motion } from "motion/react";
import React from "react";

const Page = () => {
  return (
    <>
      <main className="relative w-full px-4 py-16 flex flex-col items-center">
        <div className="max-w-4xl w-full">
          <p className="text-neutral-400 text-xl italic tracking-widest">
            /Projects
          </p>

          <div className="mt-10">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.0,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[#C4BCFF] text-4xl font-against"
            >
              Tech Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-neutral-400 mt-4 mb-10 text-lg"
            >
              I&apos;ve worked across various domains in corporates as well as
              agencies
            </motion.p>

            <div className="mt-10">
              {projectDetailsData.map((project) => (
                <ProjectCard key={project.projectTitle} project={project} />
              ))}
            </div>
          </div>

          <div className="mt-30">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.0,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[#C4BCFF] text-4xl font-against"
            >
              UX Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-neutral-400 mt-4 mb-10 text-lg"
            >
              I&apos;ve worked across various domains in corporates as well as
              agencies
            </motion.p>

            <div className="my-10">
              {projectUXDetailsData.map((project) => (
                <ProjectCard key={project.projectTitle} project={project} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Page;
