"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import menuData from "./menuData";

const Header = () => {
  const pathUrl = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  const handleMouseEnter = (index: number) => {
    setActiveDropdown(index);
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
        className={`ud-header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "shadow-nav fixed z-[999] border-b border-stroke bg-white/50 backdrop-blur-[5px] dark:border-dark-3/20 dark:bg-dark/10"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            {/* Logo Section */}
            <div className="w-60 max-w-full px-4">
              <Link
                href="/"
                className={`navbar-logo block w-full ${sticky ? "py-2" : "py-5"}`}
              >
                {pathUrl !== "/contact" &&
                pathUrl !== "/download" &&
                pathUrl !== "/about" ? (
                  <>
                    <Image
                      src={
                        sticky
                          ? "/assets/Rahi_Logo.png"
                          : "/assets/Rahi_LogoW.png"
                      }
                      alt="logo"
                      width={140}
                      height={30}
                      className="header-logo w-full dark:hidden"
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
                      width={240}
                      height={30}
                      className="header-logo w-full dark:hidden"
                    />
                    <Image
                      src="/assets/Rahi_Logo.png"
                      alt="logo"
                      width={240}
                      height={30}
                      className="header-logo hidden w-full dark:block"
                    />
                  </>
                )}
              </Link>
            </div>

            {/* Navigation Section */}
            <div className="flex w-full items-center justify-end gap-10 px-4">
              {/* Mobile Menu Toggle */}
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                    navbarOpen ? "top-[7px] rotate-45" : ""
                  } ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${
                    pathUrl === "/" && sticky
                      ? "bg-dark dark:bg-white"
                      : "bg-white"
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                    navbarOpen ? "opacity-0" : ""
                  } ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${
                    pathUrl === "/" && sticky
                      ? "bg-dark dark:bg-white"
                      : "bg-white"
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                    navbarOpen ? "top-[-8px] -rotate-45" : ""
                  } ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${
                    pathUrl === "/" && sticky
                      ? "bg-dark dark:bg-white"
                      : "bg-white"
                  }`}
                />
              </button>

              {/* Main Navigation */}
              <nav
                id="navbarCollapse"
                className={`navbar absolute right-0 z-50 ${
                  navbarOpen
                    ? "visible top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                } rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark-2 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 lg:dark:bg-transparent`}
              >
                <ul className="block lg:ml-8 lg:flex lg:gap-x-8 xl:ml-14 xl:gap-x-12">
                  {menuData.map((item, index) =>
                    item.menu ? (
                      <li
                        key={index}
                        className="submenu-item group relative"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <button
                          className={`ud-menu-scroll flex items-center justify-between py-2 text-base lg:inline-flex lg:px-0 lg:py-6 ${
                            sticky
                              ? "text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary"
                              : "text-white"
                          }`}
                        >
                          {item.title}
                          <motion.span
                            animate={
                              activeDropdown === index
                                ? { rotate: 180 }
                                : { rotate: 0 }
                            }
                            transition={{ duration: 0.2 }}
                            className="pl-1"
                          >
                            <ChevronDown />
                          </motion.span>
                        </button>
                        <AnimatePresence>
                          {activeDropdown === index && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.2 }}
                              className={`absolute right-0 mt-2 ${
                                item.title === "Products" ? "w-[600px]" : "w-72"
                              } z-50 overflow-hidden rounded-lg border border-gray-100 bg-white/95 shadow-xl backdrop-blur-sm`}
                              style={{ maxWidth: "calc(100vw - 40px)" }}
                            >
                              {item.title === "Products" ? (
                                // Products mega menu with grid layout
                                <>
                                  <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3">
                                    {[0, 1, 2].map((colIndex) => (
                                      <div key={colIndex} className="space-y-4">
                                        {item.menu
                                          ?.filter(
                                            (_, idx) => idx % 3 === colIndex,
                                          )
                                          .map((submenuItem: any) => (
                                            <div
                                              key={
                                                submenuItem.id ||
                                                submenuItem.title
                                              }
                                              className="relative"
                                            >
                                              <div
                                                className="group/item mb-2 flex cursor-pointer items-center justify-between rounded p-1.5 hover:bg-gray-50"
                                                onClick={() =>
                                                  handleSubmenuClick(
                                                    submenuItem.id ||
                                                      index * 100 + colIndex,
                                                  )
                                                }
                                              >
                                                <Link
                                                  href={submenuItem.path}
                                                  className="text-sm font-medium text-gray-800 transition-colors hover:text-primary group-hover/item:text-primary"
                                                  onClick={(e) => {
                                                    if (submenuItem.subMenu) {
                                                      e.preventDefault();
                                                    }
                                                    setNavbarOpen(false);
                                                  }}
                                                >
                                                  {submenuItem.title}
                                                </Link>
                                                {submenuItem.subMenu && (
                                                  <ChevronDown
                                                    className={`h-3.5 w-3.5 text-gray-500 transition-transform duration-200 group-hover/item:text-primary ${
                                                      activeSubmenu ===
                                                      (submenuItem.id ||
                                                        index * 100 + colIndex)
                                                        ? "rotate-180"
                                                        : ""
                                                    }`}
                                                  />
                                                )}
                                              </div>

                                              {submenuItem.subMenu && (
                                                <AnimatePresence>
                                                  {activeSubmenu ===
                                                    (submenuItem.id ||
                                                      index * 100 +
                                                        colIndex) && (
                                                    <motion.ul
                                                      initial={{
                                                        height: 0,
                                                        opacity: 0,
                                                      }}
                                                      animate={{
                                                        height: "auto",
                                                        opacity: 1,
                                                      }}
                                                      exit={{
                                                        height: 0,
                                                        opacity: 0,
                                                      }}
                                                      transition={{
                                                        duration: 0.2,
                                                      }}
                                                      className="ml-1 space-y-1 overflow-hidden border-l-2 border-primary/20 pl-3"
                                                    >
                                                      {submenuItem.subMenu.map(
                                                        (
                                                          subItem: any,
                                                          idx: number,
                                                        ) => (
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
                                                            <Link
                                                              href={
                                                                subItem.path
                                                              }
                                                              className="block rounded px-2 py-1 text-xs text-gray-600 transition-colors hover:bg-gray-50 hover:text-primary"
                                                              onClick={() =>
                                                                setNavbarOpen(
                                                                  false,
                                                                )
                                                              }
                                                            >
                                                              {subItem.name}
                                                            </Link>
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
                                    <Link
                                      href="/products"
                                      className="inline-flex items-center text-xs font-medium text-primary hover:underline"
                                      onClick={() => setNavbarOpen(false)}
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
                                    </Link>
                                  </div>
                                </>
                              ) : (
                                // Regular dropdown menu for other items
                                <div className="flex flex-col space-y-1 p-3">
                                  {item.menu.map((submenuItem: any, i) => (
                                    <div key={i} className="relative">
                                      <div
                                        className="mb-2 flex cursor-pointer items-center justify-between rounded p-1.5 hover:bg-gray-50"
                                        onClick={() => handleSubmenuClick(i)}
                                      >
                                        <Link
                                          href={submenuItem.path}
                                          className={`font-medium ${
                                            pathUrl === submenuItem.path
                                              ? "text-primary"
                                              : "text-gray-800 hover:text-primary"
                                          } text-sm transition-colors`}
                                          onClick={() => setNavbarOpen(false)}
                                        >
                                          {submenuItem.title}
                                        </Link>
                                        {submenuItem.subMenu && (
                                          <ChevronDown
                                            className={`h-3.5 w-3.5 text-gray-500 transition-transform duration-200 ${
                                              activeSubmenu === i
                                                ? "rotate-180"
                                                : ""
                                            }`}
                                          />
                                        )}
                                      </div>

                                      {submenuItem.subMenu && (
                                        <AnimatePresence>
                                          {activeSubmenu === i && (
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
                                                (
                                                  nestedItem: any,
                                                  j: number,
                                                ) => (
                                                  <motion.li
                                                    key={j}
                                                    initial={{
                                                      x: -5,
                                                      opacity: 0,
                                                    }}
                                                    animate={{
                                                      x: 0,
                                                      opacity: 1,
                                                    }}
                                                    transition={{
                                                      delay: j * 0.05,
                                                    }}
                                                    className="transition-transform duration-200 hover:translate-x-1"
                                                  >
                                                    <Link
                                                      href={nestedItem.path}
                                                      className={`block text-xs ${
                                                        pathUrl ===
                                                        nestedItem.path
                                                          ? "text-primary"
                                                          : "text-gray-600 hover:text-primary"
                                                      } rounded px-2 py-1 transition-colors hover:bg-gray-50`}
                                                      onClick={() =>
                                                        setNavbarOpen(false)
                                                      }
                                                    >
                                                      {nestedItem.name}
                                                    </Link>
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
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </li>
                    ) : (
                      <li key={index} className="group relative">
                        <Link
                          scroll={false}
                          href={item.path || "#"}
                          className={`ud-menu-scroll flex py-2 text-base lg:inline-flex lg:px-0 lg:py-6 ${
                            sticky
                              ? "text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary"
                              : "text-body-color dark:text-white lg:text-white"
                          } ${pathUrl === item?.path && sticky && "!text-primary"}`}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
