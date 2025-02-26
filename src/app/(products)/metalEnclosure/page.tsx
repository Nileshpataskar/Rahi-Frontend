"use client"; // Ensures this page is rendered on the client

import React from "react";
import ModernProductLayout from "../ModernProductLayout";
import { metalEnclosureData } from "./metal-enclosure-data";

export default function MetalEnclosurePage() {
  // Optionally define a hero image if desired
  const heroImage =
    "https://image.made-in-china.com/318f0j00QtEUdVmavWgj/24-mp4.webp";

  return (
    <ModernProductLayout
      title="Metal Enclosure"
      description="Explore our premium line of Metal Enclosure. Crafting durable and reliable solutions for your electrical needs."
      products={metalEnclosureData}
      heroImage={heroImage}
    />
  );
}
