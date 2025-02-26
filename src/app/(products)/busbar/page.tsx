"use client"; // Ensures this page is rendered on the client

import React from "react";
import ModernProductLayout from "../ModernProductLayout";
import { busBarData } from "./busbardata";

export default function SurfaceBoxPage() {
  const image = "/products/busbar/IMG_7201.JPG";

  return (
    <ModernProductLayout
      title="Bus Bar"
      description="Discover our high-quality Bus Bar solutions, engineered for optimal performance and safety in electrical installations."
      products={busBarData}
      heroImage={image}
    />
  );
}
