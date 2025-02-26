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

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-muted/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl font-bold tracking-tight mb-6">
                About Rahi Industries
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
              <p className="text-muted-foreground">
                From humble beginnings to industry leadership, our journey spans
                over two decades of innovation and growth.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="p-6 rounded-lg border bg-card"
              >
                <h3 className="font-bold mb-2">1995</h3>
                <p className="text-muted-foreground">
                  Founded with a vision to revolutionize electrical
                  manufacturing
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-6 rounded-lg border bg-card"
              >
                <h3 className="font-bold mb-2">2005</h3>
                <p className="text-muted-foreground">
                  Expanded operations globally and achieved ISO certification
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-6 rounded-lg border bg-card"
              >
                <h3 className="font-bold mb-2">2023</h3>
                <p className="text-muted-foreground">
                  Leading the industry with smart manufacturing and IoT
                  integration
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-muted-foreground mb-4">
                  To provide innovative and high-quality electrical solutions
                  that meet the evolving needs of our customers while
                  maintaining the highest standards of safety and reliability.
                </p>
                <p className="text-muted-foreground">
                  We are committed to sustainable manufacturing practices and
                  continuous improvement in our products and processes.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-[400px] rounded-lg overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800"
                  alt="Factory floor"
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              <p className="text-muted-foreground">
                The core principles that guide our operations and relationships
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center p-6"
                >
                  <value.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">{value.title}</h3>
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
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Leadership Team</h2>
              <p className="text-muted-foreground">
                Meet the experts driving our vision forward
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Rajesh Kumar",
                  role: "CEO & Founder",
                  image: "https://api.dicebear.com/7.x/avataaars/svg?seed=ceo",
                },
                {
                  name: "Priya Sharma",
                  role: "Head of Operations",
                  image:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=operations",
                },
                {
                  name: "Amit Patel",
                  role: "Technical Director",
                  image: "https://api.dicebear.com/7.x/avataaars/svg?seed=tech",
                },
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AboutPage;
