"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Award,
  Users,
  Building2,
  Globe,
  Shield,
  Target,
  Lightbulb,
  Recycle,
} from "lucide-react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import OurMission from "@/components/OurMission";
import Image from "next/image";
import { teamData } from "@/components/Team";
import SingleTeam from "@/components/Team/SingleTeam";

const stats = [
  { icon: Building2, label: "Manufacturing Units", value: "5+" },
  { icon: Users, label: "Happy Clients", value: "1000+" },
  { icon: Globe, label: "Countries Served", value: "25+" },
  { icon: Award, label: "Quality Certifications", value: "10+" },
];

const values = [
  {
    icon: Shield,
    title: "Quality",
    description:
      "Uncompromising commitment to product excellence and safety standards",
  },
  {
    icon: Target,
    title: "Innovation",
    description:
      "Continuous advancement in electrical manufacturing technology",
  },
  {
    icon: Lightbulb,
    title: "Expertise",
    description: "Deep industry knowledge and technical proficiency",
  },
  {
    icon: Recycle,
    title: "Sustainability",
    description: "Environmentally conscious manufacturing processes",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Breadcrumb pageName="adosh" />
      <main>
        {/* Hero Section */}
        <section className="relative bg-white max-w-7xl mx-auto ">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="mb-6 text-4xl font-bold tracking-tight">
                About Rahi Industries
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                Leading manufacturer of electrical enclosures and industrial
                solutions since 1995.
              </p>
              <Button size="lg">Contact Us</Button>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <stat.icon className="mx-auto mb-4 h-8 w-8 text-primary" />
                  <h3 className="mb-2 text-3xl font-bold">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="bg-muted/30 py-20">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold">Our Journey</h2>
              <p className="text-muted-foreground">
                From humble beginnings to industry leadership, our journey spans
                over two decades of innovation and growth.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="rounded-lg border bg-card p-6"
              >
                <h3 className="mb-2 font-bold">1995</h3>
                <p className="text-muted-foreground">
                  Founded with a vision to revolutionize electrical
                  manufacturing
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-lg border bg-card p-6"
              >
                <h3 className="mb-2 font-bold">2005</h3>
                <p className="text-muted-foreground">
                  Expanded operations globally and achieved ISO certification
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="rounded-lg border bg-card p-6"
              >
                <h3 className="mb-2 font-bold">2023</h3>
                <p className="text-muted-foreground">
                  Leading the industry with smart manufacturing and IoT
                  integration
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <OurMission />

        {/* Values Section */}
        <section className="bg-muted/30 py-20">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold">Our Values</h2>
              <p className="text-muted-foreground">
                The core principles that guide our operations and relationships
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="p-6 text-center"
                >
                  <value.icon className="mx-auto mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 font-semibold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold">Leadership Team</h2>
              <p className="text-muted-foreground">
                Meet the experts driving our vision forward
              </p>
            </div>
            <motion.div
              className="-mx-4 flex flex-wrap justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              {teamData.map((team, i) => (
                <SingleTeam key={i} team={team} />
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
