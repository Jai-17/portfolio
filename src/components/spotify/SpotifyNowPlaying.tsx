/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SpotifyNowPlaying({ track }: { track: any }) {
  return (
    <motion.div
      className="h-full p-6 rounded-2xl border border-white/10 bg-neutral-600/10 backdrop-blur-xs shadow-xl flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <p className="text-neutral-400 font-light mb-7 text-center italic tracking-wider">
        Currently Playing
      </p>

      <motion.div
        className="relative w-28 h-28 rounded-full shadow-lg mb-4"
        animate={{
          scale: [1, 1.1, 1],
          boxShadow: [
            "0 0 0px rgba(255,255,255,0.05)",
            "0 0 20px rgba(255,255,255,0.15)",
            "0 0 0px rgba(255,255,255,0.05)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <Image
          src={track.albumImageUrl}
          alt="Album Art"
          fill
          className="rounded-full object-cover"
        />
      </motion.div>

      <div className="text-center">
        <div className="text-lg font-semibold text-white">{track.title}</div>
        <div className="text-neutral-400">{track.artist}</div>
      </div>
    </motion.div>
  );
}
