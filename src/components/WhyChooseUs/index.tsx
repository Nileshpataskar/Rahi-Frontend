import React from "react";

import gsap from "gsap";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, Sparkles, Users, Wrench, Zap } from "lucide-react";
const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "ISO certified manufacturing process",
    },
    {
      icon: Award,
      title: "Industry Leading",
      description: "12+ years of excellence",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Technical assistance provided",
    },
    {
      icon: Zap,
      title: "Smart Solutions",
      description: "Best in class solutions",
    },
    {
      icon: Wrench,
      title: "Custom Design",
      description: "Tailored to your needs",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Latest design and technology",
    },
  ];
  return (
    <section className="bg-muted/30 py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Why Choose Us</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Experience excellence in electrical manufacturing with our
            comprehensive solutions
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <feature.icon className="mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
