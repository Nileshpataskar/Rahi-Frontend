import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DropdownItemType {
  label: string;
  href: string;
  active?: boolean;
}

interface DropdownMenuProps {
  label?: string;
  items?: DropdownItemType[];
  isActive?: boolean;
}

const DropdownMenuComponent = ({
  label = "Menu",
  items = [
    { label: "About Us", href: "/about", active: false },
    { label: "Our Team", href: "/team", active: false },
    { label: "Careers", href: "/careers", active: false },
    { label: "Contact", href: "/contact", active: false },
  ],
  isActive = false,
}: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  // Animation variants for menu items
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  };

  return (
    <div className="relative bg-white">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <button
            className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${isActive ? "text-primary" : "text-gray-700 hover:text-primary"}`}
            aria-expanded={isOpen}
          >
            <span>{label}</span>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="w-56 p-1 bg-white shadow-lg rounded-md"
          align="center"
        >
          {items.map((item, index) => (
            <React.Fragment key={item.label}>
              <motion.div
                custom={index}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
              >
                <DropdownMenuItem asChild>
                  <a
                    href={item.href}
                    className={`block w-full px-3 py-2 text-sm rounded-md ${item.active ? "bg-primary/10 text-primary" : "text-gray-700 hover:bg-gray-100"}`}
                  >
                    {item.label}
                  </a>
                </DropdownMenuItem>
              </motion.div>
              {index < items.length - 1 && (
                <DropdownMenuSeparator className="my-1" />
              )}
            </React.Fragment>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropdownMenuComponent;
