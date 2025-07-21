"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FlipWords } from "@/components/FlipWords";
import { Button } from "@/components/ui/button";
import ShinyText from "@/components/ShinyText";
import { MapPin } from "lucide-react";
import { Experience } from "@/components/sections/experience";
import RecentAchievements from "@/components/sections/RecentAchievements";
import { LinkPreview } from "@/components/LinkPreview";
import { InfiniteMovingCards } from "@/components/InfiniteMovingCards";
import { designItems, devItems, languagesItems } from "@/lib/constants";
import { PositionOfResponsibility } from "@/components/sections/PositionOfResponsibility";
import Education from "@/components/sections/Education";
import { motion } from "motion/react";

const Page = () => {
  const words = ["cool", "creative", "aesthetic", "functional"];

  return (
    <main className="relative w-full px-4 py-16 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <p className="text-neutral-400 text-xl italic tracking-widest">
          /About
        </p>
        <div className="flex flex-col md:flex-row md:items-center gap-5 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.0,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex gap-4 items-center"
          >
            <Avatar className="w-12 h-12">
              <AvatarImage
                className="object-cover"
                src="https://64.media.tumblr.com/b9d521874edd91a337c70735aa327709/6b7a68bc63e79fcb-6c/s640x960/a83628705e4d3da15ce6dd22c7a5a332aedc1298.png"
              />
              <AvatarFallback className="text-black border border-neutral-400">
                JM
              </AvatarFallback>
            </Avatar>
            <p className="text-3xl text-neutral-200 font-semibold">
              Jai Madhukar
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex gap-2">
              <div className="text-neutral-200 px-4 py-1 rounded-md border border-white/20 bg-neutral-500/5 backdrop-blur-md">
                Lvl. 20
              </div>
              <div className="text-neutral-200 flex items-center gap-2 px-4 py-1 rounded-md border border-white/20 bg-neutral-500/5 backdrop-blur-md">
                <MapPin size={16} className="text-neutral-500" />
                Gurugram, Haryana
              </div>
            </div>
          </motion.div>
        </div>
        <div className="mt-7">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-2xl md:text-4xl mx-auto italic text-neutral-400"
          >
            I like to make <FlipWords words={words} />
            stuff!
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.8,
            }}
            className="text-neutral-300 text-lg mt-4 tracking-wide"
          >
            Dedicated Computer Science student with hands-on experience in
            software development and intuitive UI/UX design. Skilled in modern
            web technologies like Node.js and Next.js, with a passion for
            creating user-focused, impactful digital solutions. Also,{" "}
            <LinkPreview
              url="https://open.spotify.com/artist/7b6Ui7JVaBDEfZB9k6nHL0"
              isStatic
              imageSrc="/local-train.jpg"
              className="italic text-neutral-300"
            >
              this
            </LinkPreview>{" "}
            band is quite cool!
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Button className="mt-7 bg-white/5 border border-[#C4BCFF] backdrop-blur-md shadow-inner shadow-white/10 px-10">
              <ShinyText
                text="Resume"
                speed={3}
                className="text-[#C4BCFF] text-base tracking-wide font-normal"
              />
            </Button>
          </motion.div>
        </div>

        {/* EXPERIENCE SECTION */}
        <div className="my-32">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[#C4BCFF] text-4xl font-against"
          >
            Experience
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.1,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-neutral-400 mt-4 mb-10 text-lg"
          >
            I&apos;ve worked across various domains in corporates as well as
            agencies
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.2,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Experience />
          </motion.div>
        </div>

        {/* RECENT ACHIEVEMENTS */}
        <div className="my-32">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[#C4BCFF] text-4xl font-against"
          >
            Recent Achievements
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-neutral-400 mt-4 mb-10 text-lg"
          >
            Some things i did recently
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.6,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <RecentAchievements />
          </motion.div>
        </div>

        {/* SKILLS */}
        <div className="mb-32">
          <InfiniteMovingCards items={languagesItems} direction="left" />
          <InfiniteMovingCards
            items={devItems}
            direction="right"
            speed="slow"
          />
          <InfiniteMovingCards
            items={designItems}
            direction="left"
            speed="slow"
          />
        </div>

        <div className="mb-32">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[#C4BCFF] text-4xl font-against"
          >
            Position of Responsibility
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-neutral-400 mt-4 mb-10 text-lg"
          >
            Have led some tech communities, helping students, teaching bootcamps
            n stuff
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.6,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <PositionOfResponsibility />
          </motion.div>
        </div>

        <div className="mb-32">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[#C4BCFF] text-4xl font-against"
          >
            Education
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-neutral-400 mt-4 mb-10 text-lg"
          >
            Also, i am a student right now
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Education />
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Page;
