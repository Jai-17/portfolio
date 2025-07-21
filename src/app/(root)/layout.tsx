"use client";

import Dither from "@/components/Dither";
import { FloatingDock } from "@/components/FloatingDock";
import {
  IconHome,
  IconUser,
  IconCode,
  IconLayoutDashboard,
  IconStars,
} from "@tabler/icons-react";
import React, { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Loader from "@/components/Loader";
import ClickSpark from "@/components/ClickSpark";

const links = [
  {
    title: "Home",
    icon: IconHome,
    href: "/",
  },
  {
    title: "About",
    icon: IconUser,
    href: "/about",
  },
  {
    title: "Tech Projects",
    icon: IconCode,
    href: "/tech-projects",
  },
  {
    title: "UX Projects",
    icon: IconLayoutDashboard,
    href: "/ux-projects",
  },
  {
    title: "Extra",
    icon: IconStars,
    href: "/extra",
  },
];

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Loader />
      <ClickSpark>
      <div className="relative min-h-screen">
        <div className="fixed inset-0 z-[-2]">
          <Dither
            waveColor={[0.5, 0.5, 0.5]}
            disableAnimation={true}
            enableMouseInteraction={false}
            mouseRadius={0.3}
            colorNum={4}
            waveAmplitude={0.3}
            waveFrequency={7}
            waveSpeed={0.05}
          />
        </div>

        <div className="fixed inset-0 z-[-1] bg-black opacity-70 pointer-events-none" />
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_7%,black)] bg-black"></div>
        {children}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="fixed bottom-6 z-50 left-auto translate-x-0 md:left-1/2 md:-translate-x-1/2 right-6 md:right-auto"
        >
          <FloatingDock mobileClassName="translate-y-0" items={links} />
        </motion.div>
      </div>
      </ClickSpark>
    </>
  );
};

export default RootLayout;
