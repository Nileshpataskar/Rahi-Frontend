import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import menuData from "../Header/menuData";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathUrl = usePathname();

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
        className={`fixed left-0 right-0 top-0 z-30 bg-transparent backdrop-blur-md transition-all duration-300 ${
          scrolled ? "bg-white/80 py-2 shadow-md" : "py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="w-52 max-w-full px-4">
              <Link
                href="/"
                className={`navbar-logo block w-full ${scrolled ? "py-2" : "py-5"}`}
              >
                {pathUrl !== "/contact" &&
                pathUrl !== "/download" &&
                pathUrl !== "/about" ? (
                  <>
                    <Image
                      src={
                        scrolled
                          ? "/assets/Rahi_Logo.png"
                          : "/assets/Rahi_LogoW.png"
                      }
                      alt="logo"
                      width={140}
                      height={30}
                      className=" w-full dark:hidden"
                      priority
                    />
                    <Image
                      src="/assets/Rahi_LogoW.png"
                      alt="logo"
                      width={140}
                      height={30}
                      className="header-logo hidden w-full dark:block"
                      priority
                    />
                  </>
                ) : (
                  <>
                    <Image
                      src="/assets/Rahi_Logo.png"
                      alt="logo"
                      width={140}
                      height={30}
                      className="header-logo w-full dark:hidden"
                    />
                    <Image
                      src="/assets/Rahi_Logo.png"
                      alt="logo"
                      width={140}
                      height={30}
                      className="header-logo hidden w-full dark:block"
                    />
                  </>
                )}
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden items-center space-x-8 lg:flex">
              {menuData.map((item) => (
                <div
                  key={item.id}
                  className="group relative"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  {!item.menu ? (
                    <a
                      href={item.path}
                      className={`px-4 py-2 text-lg font-medium transition-colors ${
                        item.path === window.location.pathname
                          ? "text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary"
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
                        className={`flex items-center space-x-1 px-4 py-2 text-lg font-medium transition-colors ${
                          activeDropdown === item.id
                            ? "text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary"
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
                            className="absolute right-0 z-50 mt-2 w-[600px] overflow-hidden rounded-lg border border-gray-100 bg-white/95 shadow-xl backdrop-blur-2xl"
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
                                          className="group/item mb-2 flex cursor-pointer items-center justify-between rounded p-1.5 hover:bg-gray-50"
                                          onClick={() =>
                                            handleSubmenuClick(submenuItem.id)
                                          }
                                        >
                                          <a
                                            href={submenuItem.path}
                                            className="text-lg font-medium text-gray-800 transition-colors hover:text-primary group-hover/item:text-primary"
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
                                                className="ml-1 space-y-1 overflow-hidden border-l-2 border-primary/20 pl-3"
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
                                                      className="transition-transform duration-200 hover:translate-x-1"
                                                    >
                                                      <a
                                                        href={subItem.path}
                                                        className="block rounded px-2 py-1 text-xs text-gray-600 transition-colors hover:bg-gray-50 hover:text-primary"
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
                            <div className="rounded-b-lg border-t border-gray-100 bg-gradient-to-r from-primary/5 to-blue-500/5 p-3 text-center">
                              <a
                                href="/products"
                                className="inline-flex items-center text-xs font-medium text-primary hover:underline"
                              >
                                View all products
                                <svg
                                  className="ml-1 h-3 w-3"
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
              className="text-primary hover:bg-primary/10 lg:hidden"
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
