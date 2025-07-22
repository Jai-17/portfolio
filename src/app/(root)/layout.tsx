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
import React, { ReactNode, useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Loader from "@/components/Loader";
import ClickSpark from "@/components/ClickSpark";
import Image from "next/image";

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
    title: "Projects",
    icon: IconCode,
    href: "/projects",
  },
  {
    title: "Extra",
    icon: IconStars,
    href: "/extra",
  },
];

const RootLayout = ({ children }: { children: ReactNode }) => {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const updateSize = () => setIsDesktop(window.innerWidth >= 768);
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <>
      <Loader />
      <ClickSpark>
        <div className="relative min-h-screen">
          <div className="fixed inset-0 z-[-2]">
            {isDesktop === null ? null : isDesktop ? (
              <Dither
                waveColor={[0.5, 0.5, 0.5]}
                disableAnimation={false}
                enableMouseInteraction={false}
                mouseRadius={0.3}
                colorNum={4}
                waveAmplitude={0.3}
                waveFrequency={7}
                waveSpeed={0.05}
              />
            ) : (
              <Image
                src="/dither-static.webp"
                alt="Static background"
                fill
                priority
                className="object-cover"
              />
            )}
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
