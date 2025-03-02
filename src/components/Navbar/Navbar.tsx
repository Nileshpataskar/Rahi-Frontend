import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import menuData from "../Header/menuData";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseEnter = (id: number) => {
    setActiveDropdown(id);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
    setActiveSubmenu(null);
  };

  const handleSubmenuClick = (id: number) => {
    setActiveSubmenu(activeSubmenu === id ? null : id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 bg-transparent backdrop-blur-md transition-all duration-300 ${
          scrolled ? "bg-white/80 shadow-md py-2" : "py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/vite.svg" 
                  alt="Logo" 
                  width={32}
                  height={32}
                  className="h-8 w-auto" 
                />
                <span className="ml-2 text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Brand
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuData.map((item) => (
                <div
                  key={item.id}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  {!item.menu ? (
                    <a
                      href={item.path}
                      className={`px-4 py-2 text-sm font-medium transition-colors ${
                        item.path === window.location.pathname
                          ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                          : "text-gray-700 hover:text-primary"
                      }`}
                      target={item.newTab ? "_blank" : "_self"}
                      rel={item.newTab ? "noopener noreferrer" : ""}
                    >
                      {item.title}
                    </a>
                  ) : (
                    <div className="relative">
                      <button
                        className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium transition-colors ${
                          activeDropdown === item.id
                            ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                            : "text-gray-700 hover:text-primary group-hover:text-primary"
                        }`}
                      >
                        <span>{item.title}</span>
                        <motion.div
                          animate={{
                            rotate: activeDropdown === item.id ? 180 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.id && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute right-0 mt-2 w-[600px] bg-white/95 backdrop-blur-sm rounded-lg shadow-xl z-50 border border-gray-100 overflow-hidden"
                            style={{ maxWidth: "calc(100vw - 40px)" }}
                          >
                            <div className="grid grid-cols-3 gap-6 p-6">
                              {/* Group menu items into sections */}
                              {[0, 1, 2].map((colIndex) => (
                                <div key={colIndex} className="space-y-4">
                                  {item.menu
                                    ?.filter((_, idx) => idx % 3 === colIndex)
                                    .map((submenuItem) => (
                                      <div
                                        key={submenuItem.id}
                                        className="relative"
                                      >
                                        <div
                                          className="mb-2 flex items-center justify-between cursor-pointer group/item hover:bg-gray-50 rounded p-1.5"
                                          onClick={() =>
                                            handleSubmenuClick(submenuItem.id)
                                          }
                                        >
                                          <a
                                            href={submenuItem.path}
                                            className="font-medium text-gray-800 hover:text-primary transition-colors group-hover/item:text-primary text-sm"
                                            onClick={(e) => {
                                              if (submenuItem.subMenu) {
                                                e.preventDefault();
                                              }
                                            }}
                                          >
                                            {submenuItem.title}
                                          </a>
                                          {submenuItem.subMenu && (
                                            <ChevronDown
                                              className={`h-3.5 w-3.5 text-gray-500 transition-transform duration-200 group-hover/item:text-primary ${activeSubmenu === submenuItem.id ? "rotate-180" : ""}`}
                                            />
                                          )}
                                        </div>

                                        {submenuItem.subMenu && (
                                          <AnimatePresence>
                                            {activeSubmenu ===
                                              submenuItem.id && (
                                              <motion.ul
                                                initial={{
                                                  height: 0,
                                                  opacity: 0,
                                                }}
                                                animate={{
                                                  height: "auto",
                                                  opacity: 1,
                                                }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="space-y-1 overflow-hidden pl-3 border-l-2 border-primary/20 ml-1"
                                              >
                                                {submenuItem.subMenu.map(
                                                  (subItem, idx) => (
                                                    <motion.li
                                                      key={idx}
                                                      initial={{
                                                        x: -5,
                                                        opacity: 0,
                                                      }}
                                                      animate={{
                                                        x: 0,
                                                        opacity: 1,
                                                      }}
                                                      transition={{
                                                        delay: idx * 0.05,
                                                      }}
                                                      className="hover:translate-x-1 transition-transform duration-200"
                                                    >
                                                      <a
                                                        href={subItem.path}
                                                        className="block text-xs text-gray-600 hover:text-primary transition-colors py-1 hover:bg-gray-50 rounded px-2"
                                                      >
                                                        {subItem.name}
                                                      </a>
                                                    </motion.li>
                                                  ),
                                                )}
                                              </motion.ul>
                                            )}
                                          </AnimatePresence>
                                        )}
                                      </div>
                                    ))}
                                </div>
                              ))}
                            </div>
                            <div className="bg-gradient-to-r from-primary/5 to-blue-500/5 p-3 rounded-b-lg border-t border-gray-100 text-center">
                              <a
                                href="/products"
                                className="text-xs font-medium text-primary hover:underline inline-flex items-center"
                              >
                                View all products
                                <svg
                                  className="w-3 h-3 ml-1"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5 12H19M19 12L12 5M19 12L12 19"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-primary hover:bg-primary/10"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Spacer to prevent content from being hidden under the fixed navbar */}
      <div className={`h-${scrolled ? "16" : "20"}`}></div>
    </>
  );
};

export default Navbar;
