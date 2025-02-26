"use client";
import ModernProductLayout from "../ModernProductLayout";
import { metalBoxData } from "./metalBoxData";

export default function ModularMetalBox() {
  const image = "/products/metalBox/IMG_7300.JPG";

  return (
    <ModernProductLayout
      title="Modular metal Box "
      description="Explore our range of high-quality Modular Metal boxes designed for safety and reliability"
      products={metalBoxData}
      heroImage={image}
    />
  );
}
