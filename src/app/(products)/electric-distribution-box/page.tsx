"use client"; // Ensures this page is rendered on the client

import React from "react";
import ModernProductLayout from "../ModernProductLayout";
import { edbData } from "./edbData";

export default function ElectricDistributionBoxPage() {
  // Optionally define a hero image if desired
  const heroImage =
    "https://image.made-in-china.com/318f0j00QtEUdVmavWgj/24-mp4.webp";

  return (
    <ModernProductLayout
      title="Electrical Distribution Boxes"
      description="Explore our premium line of Electrical Distribution Boxes. Crafting durable and reliable solutions for your electrical needs."
      products={edbData}
      heroImage={heroImage}
    />
  );
}
