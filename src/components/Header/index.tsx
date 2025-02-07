"use client";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import menuData from "./menuData";

const Header = () => {
  const pathUrl = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);

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

  const handleSubmenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);



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
            <div className="w-60 max-w-full px-4">
              <Link
                href="/"
                className={`navbar-logo block w-full ${
                  sticky ? "py-2" : "py-5"
                }`}
              >
                {pathUrl !== "/" ? (
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
                ) : (
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
                    />
                    <Image
                      src="/assets/Rahi_LogoW.png"
                      alt="logo"
                      width={140}
                      height={30}
                      className="header-logo hidden w-full dark:block"
                    />
                  </>
                )}
              </Link>
            </div>
            <div className="flex w-full items-center justify-end gap-10 px-4">
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
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
              <nav
                id="navbarCollapse"
                className={`navbar absolute right-0 z-50 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark-2 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 lg:dark:bg-transparent ${
                  navbarOpen
                    ? "visible top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                }`}
              >
                <ul className="block lg:ml-8 lg:flex lg:gap-x-8 xl:ml-14 xl:gap-x-12">
                  {menuData.map((menuItem, index) =>
                    menuItem.path ? (
                      <li key={index} className="group relative">
                        {pathUrl !== "/" ? (
                          <Link
                            onClick={navbarToggleHandler}
                            scroll={false}
                            href={menuItem.path}
                            className={`ud-menu-scroll flex py-2 text-base text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary lg:inline-flex lg:px-0 lg:py-6 ${
                              pathUrl === menuItem?.path && "text-primary"
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <Link
                            scroll={false}
                            href={menuItem.path}
                            className={`ud-menu-scroll flex py-2 text-base lg:inline-flex lg:px-0 lg:py-6 ${
                              sticky
                                ? "text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary"
                                : "text-body-color dark:text-white lg:text-white"
                            } ${
                              pathUrl === menuItem?.path &&
                              sticky &&
                              "!text-primary"
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        )}
                      </li>
                    ) : (
                      <li className="submenu-item group relative" key={index}>
                        {pathUrl !== "/" ? (
                          <button
                            onClick={() => handleSubmenu(index)}
                            className={`ud-menu-scroll flex items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary lg:inline-flex lg:px-0 lg:py-6`}
                          >
                            {menuItem.title}
                            <span className="pl-1">
                              <svg
                                className={`duration-300 lg:group-hover:rotate-180`}
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.00039 11.9C7.85039 11.9 7.72539 11.85 7.60039 11.75L1.85039 6.10005C1.62539 5.87505 1.62539 5.52505 1.85039 5.30005C2.07539 5.07505 2.42539 5.07505 2.65039 5.30005L8.00039 10.525L13.3504 5.25005C13.5754 5.02505 13.9254 5.02505 14.1504 5.25005C14.3754 5.47505 14.3754 5.82505 14.1504 6.05005L8.40039 11.7C8.27539 11.825 8.15039 11.9 8.00039 11.9Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </button>
                        ) : (
                          <button
                            onClick={() => handleSubmenu(index)}
                            className={`ud-menu-scroll flex items-center justify-between py-2 text-base lg:inline-flex lg:px-0 lg:py-6 ${
                              sticky
                                ? "text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary"
                                : "text-white"
                            }`}
                          >
                            {menuItem.title}
                            <span className="pl-1">
                              <svg
                                className={`duration-300 lg:group-hover:rotate-180`}
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.00039 11.9C7.85039 11.9 7.72539 11.85 7.60039 11.75L1.85039 6.10005C1.62539 5.87505 1.62539 5.52505 1.85039 5.30005C2.07539 5.07505 2.42539 5.07505 2.65039 5.30005L8.00039 10.525L13.3504 5.25005C13.5754 5.02505 13.9254 5.02505 14.1504 5.25005C14.3754 5.47505 14.3754 5.82505 14.1504 6.05005L8.40039 11.7C8.27539 11.825 8.15039 11.9 8.00039 11.9Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </button>
                        )}

                        <AnimatePresence>
                          <motion.div
                            initial="hidden"
                            animate={{ opacity: 1 }}
                            exit="exit"
                            variants={{
                              hidden: { opacity: 0, y: -10, scale: 0.95 },
                              visible: { opacity: 1, y: 0, scale: 1 },
                              exit: { opacity: 0, y: -10, scale: 0.95 },
                            }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className={`submenu absolute left-0 top-full z-50 w-72 rounded-xl bg-white p-4 shadow-2xl shadow-black/10
                              ${openIndex === index ? "block" : "hidden"} 
                              lg:invisible lg:absolute lg:top-[110%] lg:block lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full`}
                          >
                            <div className="flex flex-col space-y-1">
                              {menuItem?.submenu?.map((submenuItem: any, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    delay: i * 0.05,
                                    duration: 0.2,
                                  }}
                                >
                                  <Link
                                    href={submenuItem.path}
                                    className={`block rounded-lg px-4 py-3 text-sm  ${
                                      pathUrl === submenuItem.path
                                        ? "bg-primary/10 font-semibold text-primary"
                                        : "text-gray-700 hover:bg-gray-300/50 hover:font-semibold hover:text-gray-900 "
                                    }`}
                                    onClick={() => setNavbarOpen(false)}
                                  >
                                    {submenuItem.title}
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        </AnimatePresence>
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
