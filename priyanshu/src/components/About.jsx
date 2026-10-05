import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Highlighter } from "@/components/ui/highlighter";

export default function About({ scrollContainerRef }) {
  return (
    <section id="about" className="w-full min-h-screen bg-white text-black p-8 sm:p-16 md:p-24 flex items-center justify-center">
      <div className="max-w-4xl text-center">
        <div className="mb-6 flex justify-center">
          <h2 className="text-4xl sm:text-5xl font-bold font-pixel underline-wavy-yellow inline-block">
            <Highlighter action="underline" color="#FFD700">
              KNOW ABOUT ME
            </Highlighter>
          </h2>
        </div>

        <p className="text-lg sm:text-2xl font-semibold text-gray-800 font-pixel tracking-wide mb-6">
          Full-Stack Developer and a little bit of everything
        </p>

        <ScrollReveal
          scrollContainerRef={scrollContainerRef}
          baseOpacity={0}
          enableBlur={true}
          baseRotation={1.2}
          blurStrength={10}
          containerClassName="my-8"
          textClassName="font-sans text-base sm:text-lg md:text-xl leading-relaxed text-gray-700"
        >
          {"I'm Priyanshu Kamal, a proactive full-stack developer passionate about creating dynamic web experiences. From frontend to backend, I thrive on solving complex problems with clean, efficient code. My expertise spans React, Next.js, and Node.js, and I'm always eager to learn more. When I'm not immersed in work, I'm exploring new ideas and staying curious. Life's about balance, and I love embracing every part of it. I believe in waking up each day eager to make a difference!"}
        </ScrollReveal>
      </div>
    </section>
  );
}