"use client";
import ModernProductLayout from "../ModernProductLayout";
import { mcbBoxProducts } from "./mcbBoxProducts";

export default function MCBBoxPage() {
  const image = "/products/metalBox/IMG_7277.JPG";
  return (
    <ModernProductLayout
      title="MCB Box Collection"
      description="Explore our range of high-quality MCB boxes designed for safety and reliability"
      products={mcbBoxProducts}
      heroImage={image}
    />
  );
}
