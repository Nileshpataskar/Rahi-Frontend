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
        path: "/electric-distribution-box",
        newTab: false,
      },
      {
        id: 64,
        title: "Metal Enclosure",
        path: "/metalEnclosure",
        newTab: false,
      },
      {
        id: 66,
        title: "Bus Bar",
        path: "/busbar",
        newTab: false,
      },
      {
        id: 67,
        title: "Surface Box",
        path: "/surfacebox",
        newTab: false,
      },
      {
        id: 68,
        title: "Conduit PVC Pipes",
        path: "/conduit-pipe",
        newTab: false,
      },
      {
        id: 69,
        title: "Conduit PVC Accesories",
        path: "/conduit-pipe-accesories",
        newTab: false,
      },
      {
        id: 70,
        title: "Junction Box",
        path: "/junction-box",
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
    title: "About us",
    path: "/about",
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
