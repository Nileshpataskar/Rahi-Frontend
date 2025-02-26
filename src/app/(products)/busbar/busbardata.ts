// Add this interface at the top of the file
interface Product {
  id: number;
  code: string;
  title: string;
  description: string;
  specifications?: Record<string, string>;

  category: string | "";
  image: string;
}

export const busBarData: Product[] = [

  {
    id: 1,
    code: "B02",
    title: "Bus Bar",
    description: "Standard Bus Bar for various applications.",
    category: "Standard Bus Bar",
    image: "/products/busbar/IMG_7229.jpg",
    specifications: {
      BC32: "32 Amp 415v BUS Bar",
      BC63: "63 Amp 415v Bus Bar",
      BC100: "100 Amp 415v Bus Bar",
      BC200: "200 Amp 415v Bus Bar",
    },
  },
  {
    id: 2,
    code: "B01",
    title: "Bus Bar with HRC",
    description: "Silver line gang box with 1 model.",
    category: "",
    image: "/products/busbar/IMG_7228.jpg",
    specifications: {
      HBC63: "63Amp 415v HRC Bus Bar",
      HBC100: "100Amp 415V HRC Bus Bar",
      HBC200: "200Amp 415V HRC Bus Bar",
    },
  },
];
