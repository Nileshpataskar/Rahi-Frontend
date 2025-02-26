"use client";
import About from "@/components/OurMission";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import WhoAreWe from "@/components/WhoAreWe";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";
import OurMission from "@/components/OurMission";
import HeroSection from "@/components/Trying/Hero1";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import WhyChooseUs from "@/components/WhyChooseUs";

// export const metadata: Metadata = {
//   title: "Rahi Industries",
//   description: "Quality with Integrity",
// };

export default function Home() {
  return (
    <main suppressHydrationWarning>
      <ScrollUp />
      <HeroSection />
      {/* <Hero /> */}

      <WhoAreWe />
      <WhyChooseUs />

      {/* Who We Are Section */}

      <Products />
      <OurMission />
      <Team />
      <Clients />
      <CallToAction />
      {/* <Testimonials /> */}
      {/* <Faq /> */}
      <Contact />
   
    </main>
  );
}
