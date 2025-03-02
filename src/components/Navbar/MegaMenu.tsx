import React from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Laptop,
  Smartphone,
  Tablet,
  Monitor,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from 'next/image';

interface MegaMenuProps {
  isOpen?: boolean;
  onClose?: () => void;
}

interface CategoryProps {
  title: string;
  items: {
    name: string;
    href: string;
    description?: string;
    subItems?: {
      name: string;
      href: string;
    }[];
  }[];
  icon?: React.ReactNode;
}

const ProductCategory: React.FC<CategoryProps> = ({ title, items, icon }) => {
  const [expandedItem, setExpandedItem] = React.useState<string | null>(null);

  const toggleExpand = (itemName: string) => {
    setExpandedItem(expandedItem === itemName ? null : itemName);
  };

  return (
    <div className="p-4">
      <div className="mb-3 flex items-center text-primary">
        {icon}
        <h3 className="ml-2 text-lg font-medium">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index}>
            <div className="flex flex-col">
              <div
                className="flex cursor-pointer items-center justify-between text-sm text-gray-700 transition-colors duration-200 hover:text-primary"
                onClick={() => toggleExpand(item.name)}
              >
                <div className="flex items-center">
                  <ChevronRight
                    className={`mr-2 h-3 w-3 transition-transform duration-200 ${expandedItem === item.name ? "rotate-90" : ""}`}
                  />
                  <span>{item.name}</span>
                </div>
                {item.subItems && (
                  <span className="text-xs text-gray-500">
                    {expandedItem === item.name ? "−" : "+"}
                  </span>
                )}
              </div>
              {item.description && (
                <p className="ml-5 mt-1 text-xs text-gray-500">
                  {item.description}
                </p>
              )}
              {item.subItems && expandedItem === item.name && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-5 mt-2 space-y-1"
                >
                  {item.subItems.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.href}
                      className="flex items-center py-1 text-xs text-gray-600 transition-colors duration-200 hover:text-primary"
                    >
                      <ChevronRight className="mr-1 h-2 w-2" />
                      <span>{subItem.name}</span>
                    </a>
                  ))}
                </motion.div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FeaturedProduct: React.FC<{
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}> = ({ title, description, imageSrc, href }) => {
  return (
    <a
      href={href}
      className="block rounded-lg p-4 transition-colors duration-200 hover:bg-gray-50"
    >
      <div className="relative mb-3 aspect-video overflow-hidden rounded-md">
        <Image
          src={imageSrc}
          alt={title}
          width={500}
          height={300}
          className="h-full w-full object-cover"
        />
      </div>
      <h3 className="mb-1 text-base font-medium">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </a>
  );
};

const MegaMenu: React.FC<MegaMenuProps> = ({
  isOpen = false,
  onClose = () => {},
}) => {
  // Sample data for the mega menu
  const categories = [
    {
      title: "Computers",
      icon: <Laptop className="h-5 w-5" />,
      items: [
        {
          name: "Laptops",
          href: "/products/laptops",
          subItems: [
            { name: "Dell", href: "/products/laptops/dell" },
            { name: "HP", href: "/products/laptops/hp" },
            { name: "Lenovo", href: "/products/laptops/lenovo" },
            { name: "Apple", href: "/products/laptops/apple" },
            { name: "Asus", href: "/products/laptops/asus" },
          ],
        },
        {
          name: "Desktops",
          href: "/products/desktops",
          subItems: [
            { name: "Dell", href: "/products/desktops/dell" },
            { name: "HP", href: "/products/desktops/hp" },
            { name: "Lenovo", href: "/products/desktops/lenovo" },
            { name: "Apple", href: "/products/desktops/apple" },
            { name: "Custom Builds", href: "/products/desktops/custom" },
          ],
        },
        { name: "Workstations", href: "/products/workstations" },
        { name: "Gaming PCs", href: "/products/gaming-pcs" },
      ],
    },
    {
      title: "Mobile Devices",
      icon: <Smartphone className="h-5 w-5" />,
      items: [
        { name: "Smartphones", href: "/products/smartphones" },
        { name: "Tablets", href: "/products/tablets" },
        { name: "E-readers", href: "/products/e-readers" },
        { name: "Accessories", href: "/products/mobile-accessories" },
      ],
    },
    {
      title: "Displays",
      icon: <Monitor className="h-5 w-5" />,
      items: [
        { name: "Monitors", href: "/products/monitors" },
        { name: "TVs", href: "/products/tvs" },
        { name: "Projectors", href: "/products/projectors" },
        { name: "Digital Signage", href: "/products/digital-signage" },
      ],
    },
    {
      title: "Tablets",
      icon: <Tablet className="h-5 w-5" />,
      items: [
        { name: "iPad", href: "/products/ipad" },
        { name: "Android Tablets", href: "/products/android-tablets" },
        { name: "Windows Tablets", href: "/products/windows-tablets" },
        { name: "Tablet Accessories", href: "/products/tablet-accessories" },
      ],
    },
  ];

  const featuredProducts = [
    {
      title: "New XPS 15",
      description: "Our most powerful 15-inch laptop yet",
      imageSrc:
        "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      href: "/products/xps-15",
    },
    {
      title: "Ultra Gaming Monitor",
      description: "240Hz refresh rate for competitive gaming",
      imageSrc:
        "https://images.unsplash.com/photo-1527219525722-f9767a7f2884?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      href: "/products/gaming-monitor",
    },
  ];

  // Animation variants for the mega menu
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="w-[1200px] rounded-lg border border-gray-200 bg-white shadow-lg"
            >
              <div className="grid grid-cols-4 gap-4 p-6">
                <div className="col-span-3 grid grid-cols-3 gap-6 border-r border-gray-200 pr-6">
                  {categories.map((category, index) => (
                    <ProductCategory
                      key={index}
                      title={category.title}
                      items={category.items}
                      icon={category.icon}
                    />
                  ))}
                </div>
                <div className="col-span-1">
                  <div className="p-4">
                    <h3 className="mb-4 text-lg font-medium">
                      Featured Products
                    </h3>
                    <div className="space-y-4">
                      {featuredProducts.map((product, index) => (
                        <FeaturedProduct
                          key={index}
                          title={product.title}
                          description={product.description}
                          imageSrc={product.imageSrc}
                          href={product.href}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-b-lg border-t border-gray-200 bg-gray-50 p-4">
                <div className="flex items-center justify-between">
                  <a
                    href="/products"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    View all products
                  </a>
                  <a
                    href="/support"
                    className="text-sm text-gray-600 transition-colors duration-200 hover:text-primary"
                  >
                    Need help finding a product?
                  </a>
                </div>
              </div>
            </motion.div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MegaMenu;
