"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { productData } from "./productData";

const OurProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1200);
  const [itemsToShow, setItemsToShow] = useState(4);

  // Function to determine itemsToShow based on screen width
  const getItemsToShow = (width: number) => {
    if (width < 640) return 1; // Mobile
    if (width < 1024) return 2; // Tablet
    if (width < 1280) return 3; // Small Desktop
    return 4; // Large Desktop
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const newWidth = window.innerWidth;
        setWindowWidth(newWidth);
        setItemsToShow(getItemsToShow(newWidth));
      };

      handleResize(); // Set initial value on mount
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex(
          (prevIndex) =>
            (prevIndex + 1) % (productData.length - itemsToShow + 1),
        );
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isHovered, itemsToShow]);

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % (productData.length - itemsToShow + 1),
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? productData.length - itemsToShow : prevIndex - 1,
    );
  };

  // Extended array for seamless looping
  const extendedData = [...productData, ...productData.slice(0, itemsToShow)];
  const itemWidthPercent = 100 / itemsToShow; // e.g. for 4 items: 25%
  const totalDistance = productData.length * itemWidthPercent;
  const duration = productData.length * 2; // adjust duration per item

  return (
    <section className="relative bg-secondary py-16 sm:py-20">
      <div className="mx-auto max-w-[95%] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Our Products
          </h2>
          <p className="mt-4 text-base text-gray-600 sm:text-lg md:text-xl">
            Discover Our Top-Selling Products That Redefine Quality and
            Innovation
          </p>
        </motion.div>

        <div
          className="relative mx-auto max-w-7xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute -left-3 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white/50 p-2 text-gray-800 shadow-lg transition-all hover:bg-white  hover:shadow-2xl sm:-left-5 sm:p-3 lg:-left-6"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-3 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white/50 p-2 text-gray-800 shadow-lg transition-all hover:bg-white hover:shadow-xl sm:-right-5 sm:p-3 lg:-right-6"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden rounded-3xl bg-white/50 p-4 backdrop-blur-sm">
            <motion.div
              className="flex"
              initial={{ x: 0 }}
              animate={{ x: `-${currentIndex * (100 / itemsToShow)}%` }}
              transition={{ type: "spring", stiffness: 150, damping: 30 }}
            >
              {extendedData.map((product, index) => (
                <motion.div
                  key={index}
                  style={{ width: `${itemWidthPercent}%` }}
                  className="flex-shrink-0 px-2 sm:px-3 md:px-4"
                  whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
                >
                  <div className="group relative h-full cursor-pointer overflow-hidden rounded-3xl border border-gray-400 bg-white transition-all duration-300 hover:shadow-four">
                    <div className="relative h-48 w-full overflow-hidden bg-gray-300/50 p-5 sm:h-56 md:h-64">
                      <Image
                        src={product.src}
                        alt={product.title}
                        layout="fill"
                        style={{ objectFit: "cover" }} // ✅ Use style instead of objectFit prop
                        className="m-5 transform transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Overlay gradient that appears on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />
                    </div>

                    <div className="relative z-10 p-4 sm:p-5 md:p-6">
                      <div className="mb-2">
                        <span className="inline-block rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-medium text-indigo-800">
                          Recommended
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 sm:text-xl md:text-2xl">
                        {product.title}
                      </h3>
                      <div className="mt-4 flex items-center space-x-2">
                        <span className="text-sm font-medium text-indigo-600 transition-colors group-hover:text-indigo-700">
                          View Details
                        </span>
                        <motion.div
                          className="rounded-full bg-indigo-100 p-1"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight className="h-4 w-4 text-indigo-600" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Pagination Dots */}
          <div className="mt-6 flex justify-center space-x-2">
            {Array.from({
              length: productData.length - itemsToShow + 1,
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all sm:h-2 ${
                  currentIndex === index
                    ? "w-6 bg-indigo-600 sm:w-8"
                    : "w-1.5 bg-gray-300 sm:w-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
