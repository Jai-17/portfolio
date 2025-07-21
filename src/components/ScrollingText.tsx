'use client';

import React from 'react';

const roles = [
  'Full-Stack Developer',
  'Generative AI',
  'DevOps Engineer',
  'UX Designer',
];

const ScrollingText = () => {
  return (
    <div className="relative overflow-hidden w-full max-w-[400px] mx-auto">
      {/* Fade masks on left/right */}
      <div className="whitespace-nowrap animate-scroll px-4 text-gray-300 text-lg tracking-wide">
        {roles.concat(roles).map((role, i) => (
          <span key={i} className="mx-6 inline-block">
            {role}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingText;
