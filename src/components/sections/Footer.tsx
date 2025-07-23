"use client";

import React, { useState } from "react";
import { PlaceholdersAndVanishInput } from "../VanishInput";
import { toast } from "sonner";

const Footer = () => {
  const [value, setValue] = useState("");
  const placeholders = [
    "Hello! What's up?",
    "Local train best songs?",
    "How to not build a website?",
    "Are designers figma male?",
    "What is the best song in the world?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
    toast.custom((t) => (
      <div className="bg-neutral-900 text-white px-8 py-6 rounded-lg shadow">
        Message Sent Successfully!
      </div>
    ));
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: value,
        }),
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <footer className="relative z-50 px-4 sm:px-6 pt-24 pb-30 bg-gradient-to-b from-[#0c0c0c]/90 via-[#0f0f0f]/70 to-[#0a0a0a]/90 rounded-t-3xl border-t border-zinc-800">
      <div className="absolute inset-0 pointer-events-none bg-[url('/noise.jpeg')] opacity-[0.03] mix-blend-soft-light rounded-3xl" />

      <div className="relative max-w-3xl mx-auto text-center">
        <h1 className="text-neutral-300 font-semibold text-3xl sm:text-4xl mb-10 tracking-tight">
          <span className="font-against">Say Hi</span>{" "}
          <span className="text-[#C4BCFF]">:D</span>
        </h1>

        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />

        <div className="mt-10 text-zinc-600">
          <p className="text-zinc-500">
            Built with Background Music and VSCode
          </p>
          <p className="mt-2 text-zinc-500">© Jai Madhukar, probably</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
