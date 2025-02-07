"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { BackgroundBeams } from "./BackgroundBeams";
import { ColourfulText } from "./ColourfulText";
import Image from "next/image";

const Hero = () => {
  const phrases = ["Sustainable", "Innovative", "Advanced", "Powerful"];

  // const phrases = [
  //   "Quality First, Always Ahead",
  //   "Precision Perfection, Unmatched Satisfaction",
  //   "Powering the Next Generation",
  //   "Crafting Excellence in Every Product",
  // ];

  const [currentPhrase, setCurrentPhrase] = useState(0);
  const textRef = useRef<HTMLParagraphElement>(null);
  const tlRef = useRef<GSAPTimeline | null>(null);

  useEffect(() => {
    // Create a GSAP timeline that loops infinitely.
    // Total cycle: fade out (0.5s) + fade in (0.5s) + pause (2s) = 3 seconds.
    tlRef.current = gsap.timeline({ repeat: -1 });

    tlRef.current
      .to(textRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      })
      .call(() => {
        // Update phrase when text is faded out
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
      })
      .to(textRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.in",
      })
      .to(textRef.current, {
        // Hold the current phrase for 2 seconds before repeating
        opacity: 1,
        duration: 2,
      });

    // Cleanup timeline on unmount
    return () => {
      tlRef.current?.kill();
    };
  }, [phrases.length]);

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-primary"
    >
      <div className="pointer-events-none z-10 flex h-full flex-col items-center justify-center px-4">
        <p
          // ref={textRef}
          className="max-w-5xl text-center font-madefor text-3xl font-bold text-[#fff] transition-opacity dark:text-gray-200 md:text-6xl"
        >
          Powering Your{" "}
          <span className="sm:hidden">
            <br />
          </span>
          <ColourfulText text={phrases[currentPhrase]} /> Vision
          {/* {phrases[currentPhrase] */}
        </p>
      </div>
      <BackgroundBeams />
    </section>
  );
};

export default Hero;
