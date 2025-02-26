"use client";
import { mcbBoxProducts } from "../mcbbox/mcbBoxProducts";
import ModernProductLayout from "../ModernProductLayout";

export default function CoduitPipeAccesories() {
  const image = "/products/metalBox/IMG_7277.JPG";
  return (
    <ModernProductLayout
      title="Conduit Pipe Accesories "
      description="Explore our range of high-quality MCB boxes designed for safety and reliability"
      products={mcbBoxProducts}
      heroImage={image}
    />
  );
}
