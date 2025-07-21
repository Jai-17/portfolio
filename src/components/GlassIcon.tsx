"use client"

import React from "react";
import { IconType } from "react-icons";
import {motion} from 'motion/react'

interface GlassIconProps {
  icon: IconType;
  link?: string;
  size?: number;
  className?: string;
}

const GlassIcon: React.FC<GlassIconProps> = ({
  icon: Icon,
  link,
  size = 20,
  className = "",
}) => {
  const content = (
    <motion.div
      className={`
        flex items-center justify-center
        rounded-full
        bg-white/10 border border-white/20
        backdrop-blur-md shadow-md shadow-white/5
        p-2 transition-all duration-300 hover:bg-white/20
        scale-100 hover:scale-125
        ${className}
      `}
    >
      <Icon size={size} className="text-neutral-200" />
    </motion.div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
};

export default GlassIcon;
