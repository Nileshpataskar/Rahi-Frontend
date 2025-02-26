import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileDown, Mail } from "lucide-react";
import Image from "next/image";

export type Product = {
  id: number | string;
  code?: string;
  title: string;
  description: string;
  image: string;
  specifications?: Record<string, string>;
  category: string;
  price?: string;
};

interface ModernProductLayoutProps {
  title: string;
  description: string;
  products: Product[];
  heroImage?: string; // Add heroImage prop
}

export default function ModernProductLayout({
  title,
  description,
  products,
  heroImage,
}: ModernProductLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform the scroll progress to control opacity
  // When scrollYProgress is 0 (top of the page), opacity is 1 (fully visible)
  // When scrollYProgress is 0.2 (20% down the page), opacity is 0 (invisible)
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.1]);

  // Transform the scroll progress to control scale
  // When scrollYProgress is 0 (top of the page), scale is 1 (normal size)
  // When scrollYProgress is 0.1 (10% down the page), scale is 0.8 (80% of normal size)
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);

  useEffect(() => {
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowX = "auto";
    };
  }, []);

  const scrollToProducts = () => {
    if (productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section */}
      <motion.div
        style={{ opacity, scale }}
        className="relative flex h-screen items-center justify-center overflow-hidden bg-gray-800"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: heroImage ? `url(${heroImage})` : "none",
            backgroundColor: heroImage ? "transparent" : "black",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            filter: "brightness(0.6)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="mb-6 text-6xl font-extrabold tracking-tight text-white md:text-8xl">
              {title}
            </h1>
            <p className="mb-8 text-lg text-gray-300 md:text-xl">
              {description}
            </p>
            <Button
              size="lg"
              className="transform rounded-full bg-blue-600 px-8 text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-700"
              onClick={scrollToProducts}
            >
              Explore Collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Products Section */}
      <div ref={productsRef} className="bg-white">
        {products.map((product, index) => (
          <section
            key={product.id}
            className={`flex min-h-screen items-center ${index % 2 === 0 ? "bg-white" : "bg-gray-50"} transition duration-300 ease-in-out`}
          >
            <div className="mx-auto max-w-7xl px-4 py-24 md:py-32 lg:py-40">
              <div
                className={`grid items-center gap-12 md:grid-cols-2 ${index % 2 === 0 ? "md:grid-flow-row" : "md:grid-flow-row-dense"}`}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`space-y-6 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}
                >
                  <h2 className="text-5xl font-bold text-gray-900 transition duration-300 hover:text-blue-600 md:text-6xl">
                    {product.title}
                  </h2>
                  <p className="text-lg text-gray-600">{product.description}</p>

                  {product.specifications && (
                    <div className="grid grid-cols-2 gap-6 pt-6">
                      {Object.entries(product.specifications).map(
                        ([key, value]) => (
                          <div
                            key={key}
                            className="border-t border-gray-200 pt-4"
                          >
                            <div className="inline-block bg-gray-300 px-1 py-1 text-sm font-medium text-black">
                              {key}
                            </div>
                            <div className="mt-1 text-sm font-medium text-gray-700">
                              {value}
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-4 pt-6">
                    <Button
                      size="lg"
                      className="rounded-full bg-blue-600 text-white transition duration-300 hover:bg-blue-700"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Request Quote
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-full border border-gray-300 text-gray-700 transition duration-300 hover:bg-gray-200"
                    >
                      <FileDown className="mr-2 h-4 w-4" />
                      Technical Specs
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`relative aspect-square overflow-hidden rounded-xl shadow-lg ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}
                >
                  <div className="absolute inset-0 bg-gray-900/5" />
                  <Image
                    fill={true}
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                  />
                </motion.div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
