"use client";

import SpotifyNowPlaying from "@/components/spotify/SpotifyNowPlaying";
import SpotifyTopTracks from "@/components/spotify/SpotifyTopTracks";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

const Page = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [nowPlaying, setNowPlaying] = useState<any | null>(null);

  useEffect(() => {
    fetch("/api/now-playing")
      .then((res) => res.json())
      .then((data) => {
        if (data?.isPlaying) {
          setNowPlaying(data);
        } else {
          setNowPlaying(null);
        }
      });
  }, []);

  return (
    <>
      <main className="relative w-full px-4 py-16 flex flex-col items-center">
        <div className="max-w-4xl w-full">
          <p className="text-neutral-400 text-xl italic tracking-widest">
            /Extra
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.0,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[#C4BCFF] mt-10 text-4xl font-against"
          >
            🎧🎼🎶🧑‍💻
          </motion.h1>
          <div className="mt-5">
            <div className="mt-12 flex flex-col md:flex-row justify-center gap-8">
              {nowPlaying && (
                <div className="w-full md:w-[300px] flex-shrink-0">
                  <SpotifyNowPlaying track={nowPlaying} />
                </div>
              )}

              <div className="w-full md:flex-1">
                <SpotifyTopTracks />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
