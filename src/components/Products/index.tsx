"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { productData } from "./productData";
import { Button } from "../ui/button";

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
    <section className="relative bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[95%] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 ">
            Our Products
          </h2>
          <p className="mt-4 text-base text-gray-600 text-muted-foreground">
            Discover Our Top-Selling Products That Redefine Quality and
            Innovation
          </p>
        </motion.div>

        <div
          className="relative mx-auto w-full bg-white p-2"
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
          <div className="overflow-hidden rounded-xl bg-white/50 p-4 backdrop-blur-sm">
            <motion.div
              className="flex"
              initial={{ x: 0 }}
              animate={{ x: `-${currentIndex * (100 / itemsToShow)}%` }}
              transition={{ type: "spring", stiffness: 150, damping: 80 }}
            >
              {extendedData.map((product, index) => (
                <motion.div
                  key={index}
                  style={{ width: `${itemWidthPercent}%` }}
                  className="flex-shrink-0 px-2 sm:px-3 md:px-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="group relative h-full cursor-pointer overflow-hidden rounded-xl border border-gray-400 bg-white transition-all duration-300 hover:shadow-four">
                    <div className="relative h-48 w-full overflow-hidden bg-gray-300/50 p-5 sm:h-56 md:h-64">
                      <Image
                        src={product.src}
                        alt={product.title}
                        fill
                        style={{ objectFit: "cover" }}
                        className="m-5 transform transition-transform duration-500 "
                      />
                    </div>

                    <div className="relative z-10 p-4 sm:p-5 md:p-6">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {product.title}
                      </h3>
                      <p className="line-clamp-2 text-sm text-gray-600">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between pt-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
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
