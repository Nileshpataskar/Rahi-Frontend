// Add this interface at the top of the file
interface Product {
  id: number;
  code: string;
  title: string;
  description: string;
  specifications?: Record<string, string>;

  category: string;
  image: string;
}

export const surfaceBoxData: Product[] = [
  {
    id: 1,
    code: "B01",
    title: "1 Model",
    description: "Silver line gang box with 1 model.",
    category: "Silver Line Gang Box",
    image: "/products/surfacebox/IMG_7313.jpg",
    specifications: {
      "Protection Grade": "IP40",
      "Door Type": "ABS Door",
      "Material": "ABS Plastic",
      "Ways": "2/4",
    },
  },
  {
    id: 2,
    code: "B02",
    title: "2 Model",
    description: "Silver line gang box with 2 models.",
    category: "Silver Line Gang Box",
    image: "/products/surfacebox/IMG_7314.jpg",
  },
  {
    id: 3,
    code: "B03",
    title: "3 Model",
    description: "Silver line gang box with 3 models.",
    category: "Silver Line Gang Box",
    image: "/products/surfacebox/IMG_7316.jpg",
  },
  {
    id: 4,
    code: "B04",
    title: "4 Model",
    description: "Silver line gang box with 4 models.",
    category: "Silver Line Gang Box",
    image: "/products/surfacebox/7320.jpg",
  },

  {
    id: 9,
    code: "B09",
    title: "9 Model",
    description: "Silver line gang box with 9 models.",
    category: "Silver Line Gang Box",
    image: "/products/surfacebox/IMG_7326.jpg",
  },
];
