import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import menuData from "./menuData";
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
  const [pathUrl, setPathUrl] = useState("/");

  // Set current path
  useEffect(() => {
    setPathUrl(window.location.pathname);
  }, []);

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
      const scrollThreshold = pathUrl === "/" ? 800 : 300;
      if (window.scrollY > scrollThreshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathUrl]);

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

  // Dark mode for home page and product pages with black hero sections
  const isDarkMode =
    pathUrl === "/" ||
    pathUrl === "/mcbbox" ||
    pathUrl === "/electric-distribution-box" ||
    pathUrl === "/busbar-hrc" ||
    pathUrl.startsWith("/product");

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-30 transition-all duration-300 ${
          scrolled
            ? isDarkMode
              ? "bg-[#2d333f]/70 py-3 shadow-md"
              : "bg-white/90 py-3 shadow-md"
            : isDarkMode
              ? "bg-transparent py-6"
              : "bg-white py-6"
        } backdrop-blur-md`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="w-40 max-w-full px-4">
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
                          ? "/assets/Rahi_LogoW.png"
                          : "/assets/Rahi_LogoW.png"
                      }
                      alt="logo"
                      width={140}
                      height={30}
                      className=" w-28 dark:hidden sm:w-full "
                      priority
                    />
                    <Image
                      src="/assets/Rahi_LogoW.png"
                      alt="logo"
                      width={140}
                      height={30}
                      className="header-logo hidden w-28 dark:block sm:w-full"
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
                      className="header-logo w-28 dark:hidden sm:w-full"
                    />
                    <Image
                      src="/assets/Rahi_Logo.png"
                      alt="logo"
                      width={140}
                      height={30}
                      className="header-logo hidden w-28 dark:block sm:w-full"
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
                      className={`px-4 py-3 text-lg transition-colors ${
                        item.path === pathUrl
                          ? isDarkMode
                            ? "font-bold text-white"
                            : "font-bold text-gray-900"
                          : isDarkMode
                            ? "text-white hover:font-bold"
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
                        className={`flex items-center space-x-1 px-4 py-3 text-lg transition-colors ${
                          activeDropdown === item.id
                            ? isDarkMode
                              ? "font-bold text-white"
                              : "font-bold text-gray-900"
                            : isDarkMode
                              ? "text-white hover:text-primary/90 group-hover:text-primary/90"
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
                            className="absolute right-0 z-50 mt-2 w-[600px] overflow-hidden rounded-lg border border-gray-100 bg-white/95 shadow-xl backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/95"
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
                                          className="group/item mb-2 flex cursor-pointer items-center justify-between rounded p-1.5 hover:bg-gray-50 dark:hover:bg-gray-700"
                                          onClick={() =>
                                            handleSubmenuClick(submenuItem.id)
                                          }
                                        >
                                          <a
                                            href={submenuItem.path}
                                            className="text-base font-medium text-gray-800 transition-colors hover:text-primary group-hover/item:text-primary dark:text-gray-200 dark:hover:text-primary"
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
                                              className={`h-3.5 w-3.5 text-gray-500 transition-transform duration-200 group-hover/item:text-primary dark:text-gray-400 ${activeSubmenu === submenuItem.id ? "rotate-180" : ""}`}
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
                                                        className="block rounded px-2 py-1 text-xs text-gray-600 transition-colors hover:bg-gray-50 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-primary"
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
              className={`lg:hidden ${isDarkMode ? "text-white hover:bg-white/10" : "text-primary hover:bg-primary/10"}`}
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
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
        isDarkMode={isDarkMode}
      />

      {/* Spacer to prevent content from being hidden under the fixed navbar */}
      <div className={`h-${scrolled ? "16" : "20"}`}></div>
    </>
  );
};

export default Navbar;
