import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import menuData, { Menu as MenuType } from "./menuData";
import Image from "next/image";

interface MobileMenuProps {
  isOpen?: boolean;
  onClose?: () => void;
  isDarkMode?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen = true,
  onClose = () => {},
  isDarkMode = false,
}) => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [expandedSubItems, setExpandedSubItems] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const toggleSubExpand = (id: number) => {
    setExpandedSubItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const renderMenuItem = (item: MenuType) => {
    const isExpanded = expandedItems.includes(item.id);
    const hasChildren = item.menu && item.menu.length > 0;

    return (
      <div key={item.id} className="w-full">
        <div
          className={`flex items-center justify-between px-4 py-3 transition-colors ${isDarkMode ? "hover:bg-gray-800/50" : "hover:bg-gray-50"}`}
          onClick={() => hasChildren && toggleExpand(item.id)}
        >
          <a
            href={item.path}
            className={`flex items-center gap-3 transition-colors ${isDarkMode ? "text-white hover:text-primary" : "text-gray-800 hover:text-primary"}`}
            onClick={(e) => hasChildren && e.preventDefault()}
            target={item.newTab ? "_blank" : "_self"}
            rel={item.newTab ? "noopener noreferrer" : ""}
          >
            <span className="text-base font-medium">{item.title}</span>
          </a>
          {hasChildren && (
            <Button
              variant="ghost"
              size="sm"
              className="h-auto p-0 text-primary"
            >
              {isExpanded ? (
                <ChevronDown size={18} />
              ) : (
                <ChevronRight size={18} />
              )}
            </Button>
          )}
        </div>

        {hasChildren && (
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`overflow-hidden ${isDarkMode ? "bg-gray-800/50" : "bg-gray-50/80"} backdrop-blur-sm`}
              >
                {item.menu?.map((subItem) => renderSubMenuItem(subItem))}
              </motion.div>
            )}
          </AnimatePresence>
        )}

        <Separator
          className={`opacity-30 ${isDarkMode ? "bg-gray-700" : ""}`}
        />
      </div>
    );
  };

  const renderSubMenuItem = (item: MenuType) => {
    const isExpanded = expandedSubItems.includes(item.id);
    const hasSubMenu = item.subMenu && item.subMenu.length > 0;

    return (
      <div key={item.id} className="w-full">
        <div
          className={`flex items-center justify-between px-8 py-3 transition-colors ${isDarkMode ? "hover:bg-gray-700/80" : "hover:bg-gray-100/80"}`}
          onClick={() => hasSubMenu && toggleSubExpand(item.id)}
        >
          <a
            href={item.path}
            className={`flex items-center gap-3 transition-colors ${isDarkMode ? "text-gray-200 hover:text-primary" : "text-gray-800 hover:text-primary"}`}
            onClick={(e) => hasSubMenu && e.preventDefault()}
            target={item.newTab ? "_blank" : "_self"}
            rel={item.newTab ? "noopener noreferrer" : ""}
          >
            <span className="text-sm font-medium">{item.title}</span>
          </a>
          {hasSubMenu && (
            <Button
              variant="ghost"
              size="sm"
              className="h-auto p-0 text-primary"
            >
              {isExpanded ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </Button>
          )}
        </div>

        {hasSubMenu && (
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`overflow-hidden ${isDarkMode ? "bg-gray-700/80" : "bg-gray-100/80"} backdrop-blur-sm`}
              >
                {item.subMenu?.map((subItem, index) => (
                  <div key={index} className="w-full">
                    <a
                      href={subItem.path}
                      className={`block px-12 py-2 text-sm transition-colors ${isDarkMode ? "text-gray-300 hover:bg-gray-600/50 hover:text-primary" : "text-gray-700 hover:bg-gray-200/50 hover:text-primary"}`}
                    >
                      {subItem.name}
                    </a>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    );
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black backdrop-blur-sm"
              onClick={onClose}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`fixed left-0 top-0 z-50 flex h-full w-[320px] flex-col overflow-y-auto ${isDarkMode ? "bg-gray-900/95" : "bg-white/95"} backdrop-blur-md`}
            >
              <div
                className={`flex items-center justify-between border-b p-4 ${isDarkMode ? "border-gray-800" : "border-gray-100"}`}
              >
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/Rahi_LogoW.png"
                    alt="Logo"
                    width={100}
                    height={30}
                  />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className={`${isDarkMode ? "text-white hover:bg-white/10" : "text-primary hover:bg-primary/10"}`}
                >
                  <X size={20} />
                </Button>
              </div>

              <div className="flex-1 overflow-y-auto">
                {menuData.map((item) => renderMenuItem(item))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
