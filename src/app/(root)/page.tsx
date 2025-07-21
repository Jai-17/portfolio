"use client";

import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import {
  FaInstagram,
  FaLinkedin,
  FaBehance,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import { IoMdMail } from "react-icons/io";
import SplitText from "@/components/SplitText";
import { motion } from "motion/react";
import GlassIcon from "@/components/GlassIcon";
import Magnet from "@/components/Magnet";

const icons = [
  { icon: IoMdMail },
  { icon: FaInstagram, link: "https://instagram.com/yourusername" },
  { icon: FaLinkedin, link: "https://linkedin.com/in/yourusername" },
  { icon: FaTwitter, link: "https://facebook.com/yourusername" },
  { icon: FaBehance, link: "https://behance.net/yourusername" },
  { icon: FaGithub, link: "https://github.com/yourusername" },
  { icon: SiLeetcode, link: "https://leetcode.com/yourusername" },
  { icon: SiCodeforces, link: "https://codeforces.com/profile/yourusername" },
];

const generateDelays = (min = 1.2, max = 2.1) =>
  icons.map(() => Math.random() * (max - min) + min);

const delays = generateDelays();

const Page = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const formatted = format(currentTime, "EEEE, hh:mm a");

  return (
      <main className="relative min-h-screen flex items-center justify-center">
        {/* Your content */}
        <div className="text-center z-20 flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-2 text-neutral-400"
          >
            {formatted}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-neutral-300 italic tracking-widest mb-6"
          >
            Crafting Intuitive Digital Experiences
          </motion.p>
          <div className="relative w-fit">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-[42px] md:text-6xl font-against absolute inset-0 break-words w-screen pointer-events-none blur-md opacity-70 text-[#E9E6FF]"
            >
              Jai Madhukar
            </motion.h1>
            <SplitText
              text="Jai Madhukar"
              className="text-[42px] md:text-6xl -mb-2 md:mb-0 font-against break-words w-screen text-[#E9E6FF]"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.4}
              rootMargin="-100px"
              textAlign="center"
            />
          </div>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5">
            <Magnet padding={50} disabled={false} magnetStrength={10}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="px-6 py-2 rounded-full border border-white/20 bg-white/5 text-neutral-200 backdrop-blur-md shadow-inner shadow-white/10"
              >
                UX Designer
              </motion.div>
            </Magnet>
            <Magnet padding={50} disabled={false} magnetStrength={10}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                className="px-6 py-2 rounded-full border border-white/20 bg-white/5 text-neutral-200 backdrop-blur-md shadow-inner shadow-white/10"
              >
                FullStack Developer
              </motion.div>
            </Magnet>
            <Magnet padding={50} disabled={false} magnetStrength={10}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="px-6 py-2 rounded-full border border-white/20 bg-white/5 text-neutral-200 backdrop-blur-md shadow-inner shadow-white/10"
              >
                DevOps Engineer
              </motion.div>
            </Magnet>
            <Magnet padding={50} disabled={false} magnetStrength={10}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                className="px-6 py-2 rounded-full border border-white/20 bg-white/5 text-neutral-200 backdrop-blur-md shadow-inner shadow-white/10"
              >
                Generative AI
              </motion.div>
            </Magnet>
          </div>
          <div className="mt-8 grid grid-cols-4 md:grid-cols-8 gap-4 justify-center">
            {icons.map(({ icon, link }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: delays[i],
                  duration: 0.4,
                  ease: [0.32, 0.23, 0.4, 0.9],
                }}
              >
                <GlassIcon icon={icon} link={link} />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
  );
};

export default Page;
