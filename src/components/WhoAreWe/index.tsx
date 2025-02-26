"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const WhoAreWe = () => {
  return (
    <>
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-3xl font-bold">Who We Are</h2>
              <p className="mb-6 text-muted-foreground">
                Rahi Industries is a leading innovator in the electrical
                accessories and solutions market. Since our inception, we have
                been dedicated to providing top-tier, high-performance products
                that meet the demands of modern electrical infrastructure.
              </p>
              <p className="mb-6 text-muted-foreground">
                Our extensive range of products includes cable clips, modular
                gang boxes, MCB distribution units, junction boxes, and more. We
                prioritize innovation, quality, and customer satisfaction,
                ensuring that every product meets rigorous industry standards.
              </p>
              <p className="mb-6 text-muted-foreground">
                With a strong commitment to excellence, we have earned a
                reputation for reliability and cutting-edge technology. Whether
                for residential, commercial, or industrial applications, our
                products provide seamless integration and superior performance.
              </p>
              <Button variant="default" size="lg">
                Learn More About Us
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] overflow-hidden rounded-lg"
            >
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800"
                alt="Manufacturing facility"
              height={400}
              width={400}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoAreWe;


