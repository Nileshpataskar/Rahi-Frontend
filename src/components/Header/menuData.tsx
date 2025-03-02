export interface Menu {
  id: number;
  title: string;
  path?: string;
  newTab?: boolean;
  menu?: Menu[];
  subMenu?: { name: string; path: string }[];
  name?: string;
}
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
    menu: [
      {
        id: 61,
        title: "ABS Door MCB Box",
        path: "/mcbbox",
        newTab: false,
      },
      {
        id: 62,
        title: "BUS Bar Chambers",
        path: "/modular_metal_box",
        newTab: false,
        subMenu: [
          { name: "Copper BUS Bar Chamber", path: "/a" },
          { name: "Copper Bus Bar chamber with HRC Fuse base", path: "/b" },
        ],
      },
      {
        id: 63,
        title: "Double Door MCB Box",
        path: "/electric-distribution-box",
        newTab: false,
        subMenu: [
          { name: "Prime Series SPN Double Door MCB Box", path: "/a" },
          { name: "Prime series TPN Double Door MCB Box", path: "/b" },
          { name: "Standard Series SPN Double Door MCB Box", path: "/b" },
          { name: "Standard series TPN Double Door MCB Box", path: "/b" },
        ],
      },
      {
        id: 64,
        title: "Double door Mcb box with TV-TEL",
        path: "/metalEnclosure",
        newTab: false,
        subMenu: [
          { name: "SPN Double Door Mcb box with TV-Tel", path: "/a" },
          { name: "TPN Double Door Mcb box with TV-Tel", path: "/b" },
        ],
      },
      {
        id: 66,
        title: "ISI PVC Conduit Pipe",
        path: "/busbar",
        newTab: false,
      },
      {
        id: 67,
        title: "MCB Metal Enclosures",
        path: "/surfacebox",
        newTab: false,

        subMenu: [
          { name: "ABS Double Door MCB Box", path: "/a" },
          { name: "PVC MCB Box with Metal Back", path: "/b" },
          { name: "SPN Metal Enclosures", path: "/b" },
          { name: "TPN Metal Enclosures", path: "/b" },
        ],
      },
      {
        id: 68,
        title: "Modular Double Wall Surface box",
        path: "/conduit-pipe",
        newTab: false,
      },
      {
        id: 69,
        title: "Modular GI Metal Box",
        path: "/conduit-pipe-accesories",
        newTab: false,
      },
      {
        id: 70,
        title: "Modular Silver line Gang box",
        path: "/junction-box",
        newTab: false,
      },
      {
        id: 71,
        title: "NOVA SERIES NON ISI PVC Conduit Pipe",
        path: "/junction-box",
        newTab: false,
      },
      
      {
        id: 72,
        title: "PVC Conduit Pipe Accesaries",
        path: "/junction-box",
        newTab: false,
        subMenu: [
          { name: "Bend", path: "/a" },
          { name: "Coupler", path: "/b" },
          { name: "Deep Junction Box", path: "/b" },
          { name: "Junction Box", path: "/b" },]
      },
      {
        id: 73,
        title: "Round Fan Box GI",
        path: "/junction-box",
        newTab: false,
      },
      {
        id: 74,
        title: "Round Plates",
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
