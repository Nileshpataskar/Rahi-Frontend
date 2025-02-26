"use client"; // Ensures this page is rendered on the client

import React from "react";
import ModernProductLayout from "../ModernProductLayout";
import { surfaceBoxData } from "./surfaceBoxData";

export default function SurfaceBoxPage() {
  // Optionally define a hero image if desired
  const heroImage = "/products/surfacebox/IMG_7327.JPG`";

  return (
    <ModernProductLayout
      title="Surface Box and Gang Box"
      description="Explore our premium line of Surface and Gang Boxes. Durable, reliable, and designed to meet various installation needs."
      products={surfaceBoxData}
      heroImage={heroImage}
    />
  );
}
