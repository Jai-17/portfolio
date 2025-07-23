/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function SpotifyTopTracks() {
  const [tracks, setTracks] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/top-tracks")
      .then((res) => res.json())
      .then((data) => setTracks(data));
  }, []);

  return (
    <div className="h-full p-6 rounded-2xl border-t border-b border-white/10 shadow-xl">
      <h3 className="text-neutral-400 italic font-light mb-4 tracking-wider">
        Top Tracks
      </h3>
      <div className="grid gap-3">
        {tracks.map((track, index) => (
          <a
            key={index}
            href={track.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 border-t border-b border-[#C4BCFF]/15 bg-white/5 hover:bg-white/10 backdrop-blur-xs py-2 px-4 rounded transition"
          >
            <Image
              src={track.albumImageUrl}
              alt="Album"
              className="w-10 h-10 rounded"
              width={100}
              height={100}
            />
            <div className="flex flex-col">
              <span className="font-medium text-white">{track.title}</span>
              <span className="text-neutral-500">{track.artist}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
