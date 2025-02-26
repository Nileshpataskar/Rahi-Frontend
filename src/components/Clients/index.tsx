"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { clientsData } from "./clientsData";
import SingleClient from "./SingleClient";

const Clients = () => {
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Clone logos to create seamless infinite scrolling
    const clone = marquee.innerHTML;
    marquee.innerHTML += clone; // Duplicate content for smooth loop

    gsap.to(marquee, {
      x: "-50%", // Moves half the distance, creating an infinite loop
      ease: "linear",
      duration: 18, // Adjust speed
      repeat: -1, // Infinite loop
    });
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-white py-10 dark:bg-primary">
      {/* Title */}
      <h2 className="mb-20 text-center text-2xl   font-bold text-gray-900 dark:text-white md:text-3xl">
        Our Clients
      </h2>

      {/* Rotating Client Logos */}
      <div className="w-full overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex w-max gap-10 whitespace-nowrap px-4"
        >
          {clientsData.map((client, i) => (
            <SingleClient key={i} client={client} />
          ))}
          {/* Duplicate logos for infinite loop effect */}
          {clientsData.map((client, i) => (
            <SingleClient key={`clone-${i}`} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
