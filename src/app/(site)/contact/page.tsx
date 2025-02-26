"use client";
import React from "react";
import { motion } from "framer-motion";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/Common/Breadcrumb";

const Contact = () => {
  return (
    <div className="min-h-screen mx-auto max-w-7xl bg-background">
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
            Get in Touch
          </h1>
          <p className="max-w-xl text-xl text-zinc-600 md:text-2xl">
            Connect with our team to explore premium industrial solutions.
          </p>
        </motion.div>
      </section> */}

      <Breadcrumb pageName="adosh" />

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

      <main className="bg-white py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-20 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* <div>
                <h2 className="mb-2 text-3xl font-bold text-zinc-900">
                  Contact Us
                </h2>
                <p className="text-zinc-600">
                  Transform your vision into reality.
                </p>
              </div> */}
              {/* Contact Form */}

              <div className="flex min-h-screen items-center justify-center bg-gray-100">
                <div className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-8 shadow-md">
                  <form>
                    <div className="mb-6">
                      <label
                        htmlFor="fullName"
                        className="mb-2 block text-sm font-semibold text-gray-700"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Raj Patil"
                        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold text-gray-700"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="example@yourmail.com"
                        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-semibold text-gray-700"
                      >
                        Phone *
                      </label>
                      <input
                        type="text"
                        name="phone"
                        placeholder="+91 9999 999 999"
                        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-semibold text-gray-700"
                      >
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        rows={3}
                        placeholder="Type your message here"
                        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></Textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 ease-in-out hover:bg-blue-700"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-16 lg:pl-20"
            >
              <div className="grid gap-12">
                {[
                  {
                    icon: MapPin,
                    title: "Address",
                    details:
                      "Sr No 323, 3A, Uruli Devachi, Pune, Maharashtra 412308",
                  },
                  {
                    icon: Phone,
                    title: "Contact Number",
                    details: "+91 90114 46161",
                  },
                  {
                    icon: Mail,
                    title: "Email Address",
                    details: "sales@rahiindustries.in",
                  },
                  {
                    icon: Clock,
                    title: "Working Hours",
                    details: "Monday - Saturday\n9:00 AM - 6:00 PM IST",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-zinc-100 p-3 text-zinc-900 transition-colors group-hover:bg-zinc-900 group-hover:text-white">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold text-zinc-900">
                          {item.title}
                        </h3>
                        <p className="whitespace-pre-line text-zinc-600">
                          {item.details}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map */}
              <div className="h-[300px] overflow-hidden rounded-xl border-2 border-zinc-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.1598999842997!2d77.2272!3d28.6129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzQ2LjQiTiA3N8KwMTMnMzcuOSJF!5e0!3m2!1sen!2sin!4v1620799750951!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
