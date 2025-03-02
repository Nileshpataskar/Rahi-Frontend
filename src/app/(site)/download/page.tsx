"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileText,
  Laptop,
  Book,
  Shield,
  Cpu,
  Database,
  Cloud,
  Microscope,
  Lightbulb,
  Download,
  ArrowRight,
  ChevronRight,
  Play,
  Zap,
  Code,
  LineChart,
} from "lucide-react";
import Image from "next/image";
import Breadcrumb from "@/components/Common/Breadcrumb";

const categories = [
  {
    id: "technical",
    name: "Technical Documentation",
    description:
      "Access detailed product specifications and implementation guides",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&auto=format&fit=crop",
    resources: [
      {
        icon: FileText,
        title: "Product Specifications",
        description:
          "Complete technical documentation for our entire product line",
        size: "15.2 MB",
        format: "PDF",
        version: "2024.1",
        tag: "Updated",
      },
      {
        icon: Laptop,
        title: "CAD Models Library",
        description: "High-precision 3D models for engineering and design",
        size: "1.2 GB",
        format: "ZIP",
        version: "2024.2",
        tag: "Premium",
      },
      {
        icon: Shield,
        title: "Safety Certifications",
        description: "Product safety and compliance documentation",
        size: "8.5 MB",
        format: "PDF",
        version: "2024.1",
      },
      {
        icon: Book,
        title: "Installation Guides",
        description: "Step-by-step installation and configuration manuals",
        size: "12.8 MB",
        format: "PDF",
        version: "2024.1",
      },
    ],
  },
  {
    id: "development",
    name: "Development Tools",
    description: "Software development kits and integration tools",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop",
    resources: [
      {
        icon: Cloud,
        title: "Cloud Integration SDK",
        description:
          "Tools for cloud platform integration and IoT connectivity",
        size: "180 MB",
        format: "ZIP",
        version: "2024.2",
        tag: "New",
      },
      {
        icon: Code,
        title: "API Documentation",
        description: "Complete API reference and code examples",
        size: "5.8 MB",
        format: "PDF",
        version: "2024.1",
      },
      {
        icon: Database,
        title: "Analytics Package",
        description: "Data analysis and visualization components",
        size: "450 MB",
        format: "ZIP",
        version: "2024.1",
      },
      {
        icon: Cpu,
        title: "Firmware Updates",
        description: "Latest firmware and update utilities",
        size: "85 MB",
        format: "ZIP",
        version: "2024.3",
      },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise Solutions",
    description: "Resources for large-scale implementations",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&auto=format&fit=crop",
    resources: [
      {
        icon: LineChart,
        title: "ROI Calculator",
        description: "Enterprise implementation cost analysis tools",
        size: "2.5 MB",
        format: "XLSX",
        version: "2024.1",
        tag: "Enterprise",
      },
      {
        icon: Shield,
        title: "Security Whitepaper",
        description: "Security implementation and best practices",
        size: "18.5 MB",
        format: "PDF",
        version: "2024.1",
      },
      {
        icon: Zap,
        title: "Performance Suite",
        description: "System optimization and monitoring tools",
        size: "320 MB",
        format: "ZIP",
        version: "2024.2",
      },
      {
        icon: Cloud,
        title: "Deployment Guide",
        description: "Enterprise deployment and scaling documentation",
        size: "15.8 MB",
        format: "PDF",
        version: "2024.1",
      },
    ],
  },
];

const DownloadPage = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [hoveredResource, setHoveredResource] = useState<number | null>(null);

  return (
    <div className="min-h-screen mx-auto max-w-7xl bg-white text-black">
      {/* Hero Section */}
      {/* <section className="relative h-[70vh] overflow-hidden bg-zinc-100">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1200&q=80"
            alt="Luxury showroom"
            className="h-full w-full object-cover"
            height={1000}
            width={1000}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/30" />
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="container relative flex h-full flex-col justify-center"
        >
          <h1 className="mb-6 max-w-2xl text-5xl font-bold text-zinc-900 md:text-7xl">
            Resource Center
          </h1>
          <p className="max-w-xl text-xl text-zinc-600 md:text-2xl">
            Get all the brochures and catalogues from one place
          </p>
        </motion.div>
      </section> */}

      <Breadcrumb pageName="adosh"  />

      <section className="relative   ">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="mb-6 text-4xl font-bold tracking-tight">
              Get in Touch
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Connect with our team to explore premium industrial solutions.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Resources Section */}
      <div id="resources" className="relative min-h-screen bg-background py-32">
        <div className="mx-auto max-w-7xl px-4">
          <Tabs defaultValue={categories[0].id} className="w-full ">
            <TabsList className="mb-16 w-full justify-start rounded-full border  border-white/10 bg-white/5 p-1 backdrop-blur-sm">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  onClick={() => setActiveCategory(category)}
                  className="flex-1 rounded-full py-3 transition-all duration-300 bg-white/30 shadow-1 data-[state=active]:bg-gray-100 data-[state=active]:text-black"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="mt-0 focus-visible:outline-none focus-visible:ring-0"
              >
                <div className="mb-16">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 text-4xl font-bold"
                  >
                    {category.name}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-gray-400"
                  >
                    {category.description}
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
                >
                  {category.resources.map((resource, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      onHoverStart={() => setHoveredResource(index)}
                      onHoverEnd={() => setHoveredResource(null)}
                      className="group"
                    >
                      <Card className="h-full overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                        <div className="flex h-full flex-col p-6">
                          <div className="mb-6">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 transition-transform duration-300 group-hover:scale-110">
                              <resource.icon className="h-6 w-6 text-white" />
                            </div>
                          </div>

                          <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-blue-400">
                            {resource.title}
                          </h3>
                          <p className="mb-6 flex-grow text-gray-600">
                            {resource.description}
                          </p>

                          <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
                            <div className="space-y-1">
                              <div className="text-sm text-gray-600">
                                {resource.format} · {resource.size}
                              </div>
                              <div className="text-xs text-blue-600">
                                Version {resource.version}
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-white hover:bg-blue-500/10 hover:text-blue-400"
                            >
                              <Download className="mr-2 h-4 w-4" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
