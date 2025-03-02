// types/menu.ts
export interface Menu {
  id: number;
  title: string;
  path?: string;
  newTab?: boolean;
  menu?: Menu[];
}