"use client"; // Ensures this page is rendered on the client

import React from "react";
import ModernProductLayout from "../ModernProductLayout";

// You can reuse the same Product interface from your existing code:
interface Product {
  id: number;
  code: string;
  title: string;
  description: string;
  specifications?: Record<string, string>;
  category: string;
  image: string;
}

// Example data array for conduit pipes:
export const conduitPipeData: Product[] = [
  {
    id: 1,
    code: "CP-LMS",
    title: "LMS (Light Mechanical Stress)",
    description:
      "Rahi LMS PVC Conduit Pipes for light mechanical stress. Available in 20, 25, and 32 mm sizes.",
    category: "Electrical Conduit PVC Pipes",
    image: "/products/conduitpipes/lms.jpg", // Update path to your actual image
    specifications: {
      "Standard": "IS:9537 (Part 3)",
      "HSN Code": "39172310",
      "Sizes (mm)": "20, 25, 32",
      "Packaging (pcs/bundle)": "20mm:100 or 25, 25mm:75 or 25, 32mm:50 or 25",
    },
  },
  {
    id: 2,
    code: "CP-MMS",
    title: "MMS (Medium Mechanical Stress)",
    description:
      "Rahi MMS PVC Conduit Pipes for medium mechanical stress. Available in 20, 25, and 32 mm sizes.",
    category: "Electrical Conduit PVC Pipes",
    image: "/products/conduitpipes/mms.jpg", // Update path to your actual image
    specifications: {
      "Standard": "IS:9537 (Part 3)",
      "HSN Code": "39172310",
      "Sizes (mm)": "20, 25, 32",
      "Packaging (pcs/bundle)": "20mm:100 or 25, 25mm:75 or 25, 32mm:50 or 25",
    },
  },
  {
    id: 3,
    code: "CP-HMS",
    title: "HMS (Heavy Mechanical Stress)",
    description:
      "Rahi HMS PVC Conduit Pipes for heavy mechanical stress. Available in 20, 25, and 32 mm sizes.",
    category: "Electrical Conduit PVC Pipes",
    image: "/products/conduitpipes/hms.jpg", // Update path to your actual image
    specifications: {
      "Standard": "IS:9537 (Part 3)",
      "HSN Code": "39172310",
      "Sizes (mm)": "20, 25, 32",
      "Packaging (pcs/bundle)": "20mm:100 or 25, 25mm:75 or 25, 32mm:50 or 25",
    },
  },
];


