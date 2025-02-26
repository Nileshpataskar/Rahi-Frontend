"use client";
import ModernProductLayout from "../ModernProductLayout";
import { conduitPipeData } from "./conduitPipeData";


export default function CoduitPipe() {
  const image = "/products/metalBox/IMG_7277.JPG";
  return (
    <ModernProductLayout
      title="Conduit Pipes"
      description="Explore our range of high-quality MCB boxes designed for safety and reliability"
      products={conduitPipeData}
      heroImage={image}
    />
  );
}
