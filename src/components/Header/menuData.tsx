import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Products",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "MCB Box",
        path: "/mcbbox",
        newTab: false,
      },
      {
        id: 62,
        title: "Modular Metal Box",
        path: "/modular_metal_box",
        newTab: false,
      },
      {
        id: 63,
        title: "Electric Distribution Box",
        path: "/contact",
        newTab: false,
      },
      {
        id: 64,
        title: "Metal Enclosure",
        path: "/blogs",
        newTab: false,
      },
      {
        id: 66,
        title: "Bus Bar",
        path: "/signup",
        newTab: false,
      },
      {
        id: 67,
        title: "Round Plates",
        path: "/signin",
        newTab: false,
      },
      {
        id: 68,
        title: "Conduit PVC Pipes",
        path: "/error",
        newTab: false,
      },
      {
        id: 69,
        title: "Conduit PVC Accesories",
        path: "/error",
        newTab: false,
      },
      {
        id: 70,
        title: "Junction Box",
        path: "/error",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Download",
    path: "/download",
    newTab: false,
  },
  {
    id: 4,
    title: "Company",
    path: "/company",
    newTab: false,
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
 
];
export default menuData;
