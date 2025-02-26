import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <>
      {/* Contact Section */}
      <section className="bg-gray-900 py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold md:text-5xl">
              Ready to Elevate Your Project?
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-400">
              Our team of experts is here to help you choose the perfect
              solution for your needs.
            </p>
            <Button
              size="lg"
              className="rounded-none bg-white px-8 text-black hover:bg-gray-100"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
