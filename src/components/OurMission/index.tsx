import { motion } from "framer-motion";
import Image from "next/image";

const OurMission = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] overflow-hidden rounded-lg"
          >
            <Image
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800"
              alt="Factory floor"
              fill={true}
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold">Our Mission</h2>
            <p className="mb-4 text-muted-foreground">
              To provide innovative and high-quality electrical solutions that
              meet the evolving needs of our customers while maintaining the
              highest standards of safety and reliability.
            </p>
            <p className="text-muted-foreground">
              We are committed to sustainable manufacturing practices and
              continuous improvement in our products and processes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
