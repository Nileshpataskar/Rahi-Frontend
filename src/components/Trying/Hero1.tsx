"use client";

import React, { useEffect } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
}

const HeroSection = ({
  title = "Leading Electrical Solutions",
  subtitle = "Transform your electrical infrastructure with our cutting-edge components and smart technology",
  ctaText = "Explore Products",
}: HeroSectionProps) => {
  const controls = useAnimation();
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    });
  }, [controls]);

  const floatingComponents = [
    { x: -30, y: -22, delay: 0 },
    { x: 30, y: 10, delay: 0.1 },
    { x: -38, y: 25, delay: 0.1 },
    { x: -60, y: 20, delay: 0.3 },
  ];

  return (
    // <div className="relative h-[900px] w-full overflow-hidden bg-gradient-to-b from-blue-600 to-purple-900">
    <div className="relative h-[900px] w-full overflow-hidden bg-gray-400">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(17,24,39,0.9))]" />
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, transparent, rgba(0,0,0,0.5))",
        }}
      />
      {/* Floating Electrical Components */}
      {floatingComponents.map((component, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${50 + component.x}%`,
            top: `${50 + component.y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 0.6,
            scale: 0.8,
            y: [0, -10, 0],
            x: [0, 10, 0],
          }}
          transition={{
            delay: component.delay,
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-500/20 backdrop-blur-xl">
            <Zap className="h-10 w-10 text-blue-300" />
          </div>
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        style={{ y, opacity }}
      >
        <motion.h1
          className="mb-6 text-5xl font-bold text-white md:text-7xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="mb-12 max-w-3xl text-xl text-blue-100 md:text-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30">
            <motion.div
              className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
