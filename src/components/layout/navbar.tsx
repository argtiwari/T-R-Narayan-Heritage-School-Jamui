"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  Leaf,
  Menu,
  X,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Faculty", href: "/faculty" },
  { label: "Student Life", href: "/student-life" },
  { label: "Gallery", href: "/gallery" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /* =====================================================
     SCROLL STATE
     ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =====================================================
     LOCK BODY WHEN MOBILE MENU IS OPEN
     ===================================================== */

  useEffect(() => {
    document.body.style.overflow = isOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* =====================================================
     ACTIVE LINK
     ===================================================== */

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <>
      {/* =================================================
          FLOATING NAVBAR
         ================================================= */}

      <header
        className={`
          fixed
          left-1/2
          top-4
          z-50
          w-[calc(100%-24px)]
          -translate-x-1/2
          transition-all
          duration-500
          sm:top-5
          sm:w-[calc(100%-40px)]
          xl:w-[calc(100%-56px)]
          2xl:max-w-[1540px]

          ${
            isScrolled
              ? `
                rounded-[18px]
                border-[#CFC5B1]
                bg-[#FFFEFB]/95
                shadow-[0_14px_45px_rgba(55,38,27,0.10)]
                backdrop-blur-xl
              `
              : `
                rounded-[22px]
                border-[#E5DDCC]/80
                bg-[#FFFEFB]/96
                shadow-[0_8px_30px_rgba(55,38,27,0.06)]
                backdrop-blur-md
              `
          }

          border
        `}
      >
        {/* =================================================
            NAV INNER
           ================================================= */}

        <nav
          aria-label="Main navigation"
          className={`
            mx-auto
            flex
            items-center
            px-4
            transition-all
            duration-500
            sm:px-6
            lg:px-7
            xl:px-8

            ${
              isScrolled
                ? "h-[68px]"
                : "h-[76px]"
            }
          `}
        >
          {/* =================================================
              LOGO
             ================================================= */}

          <Link
            href="/"
            aria-label="TR Narayan Heritage School home"
            className="
              relative
              z-[60]
              flex
              shrink-0
              items-center
            "
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/images/branding/trnhs-logo-horizontal.png"
              alt="TR Narayan Heritage School"
              width={420}
              height={150}
              priority
              sizes="
                (max-width: 640px) 180px,
                (max-width: 1280px) 215px,
                250px
              "
              className={`
                h-auto
                object-contain
                transition-all
                duration-500

                ${
                  isScrolled
                    ? "w-[180px] sm:w-[205px] lg:w-[225px]"
                    : "w-[190px] sm:w-[215px] lg:w-[240px]"
                }
              `}
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
             ================================================= */}

          <div className="ml-auto hidden items-center xl:flex">

            <div className="flex items-center">

              {navLinks.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="
                      group
                      relative
                      flex
                      h-[48px]
                      items-center
                      whitespace-nowrap
                      px-[10px]
                      text-[13px]
                      font-medium
                      tracking-[-0.01em]
                      text-[#44382F]
                      transition-colors
                      duration-300
                      hover:text-[#66751C]
                      2xl:px-[12px]
                      2xl:text-[14px]
                    "
                  >
                    <span className="relative">
                      {link.label}

                      {/* Active / hover botanical indicator */}

                      <span
                        className={`
                          pointer-events-none
                          absolute
                          -bottom-[9px]
                          left-1/2
                          flex
                          -translate-x-1/2
                          items-center
                          justify-center
                          transition-all
                          duration-300

                          ${
                            active
                              ? "w-[42px] opacity-100"
                              : "w-0 opacity-0 group-hover:w-[38px] group-hover:opacity-100"
                          }
                        `}
                      >
                        <span
                          className="
                            absolute
                            left-0
                            h-px
                            w-full
                            bg-[#B29443]
                          "
                        />

                        <span
                          className="
                            relative
                            z-10
                            flex
                            items-center
                            justify-center
                            bg-[#FFFEFB]
                            px-1
                            text-[#B29443]
                          "
                        >
                          <Leaf
                            size={11}
                            strokeWidth={1.4}
                          />
                        </span>
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* =================================================
                APPLY BUTTON
               ================================================= */}

            <Link
              href="/admissions"
              className="
                group
                ml-4
                inline-flex
                min-h-[44px]
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-[#B29443]
                bg-[#344B24]
                px-5
                text-[13px]
                font-semibold
                text-[#FFFDF7]
                shadow-[0_6px_18px_rgba(52,75,36,0.16)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#405A2B]
                hover:shadow-[0_10px_25px_rgba(52,75,36,0.22)]
                2xl:ml-5
                2xl:px-6
                2xl:text-[14px]
              "
            >
              <span>
                Apply for Admission
              </span>

              <ArrowUpRight
                size={16}
                strokeWidth={1.7}
                aria-hidden="true"
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </Link>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
             ================================================= */}

          <button
            type="button"
            onClick={() =>
              setIsOpen((current) => !current)
            }
            aria-label={
              isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="
              relative
              z-[60]
              ml-auto
              inline-flex
              size-11
              items-center
              justify-center
              rounded-full
              border
              border-[#D9CFBC]
              bg-[#FFFEFB]
              text-[#30241C]
              shadow-[0_4px_14px_rgba(55,38,27,0.07)]
              transition-all
              duration-300
              hover:border-[#B29443]
              hover:bg-[#F8F3E8]
              xl:hidden
            "
          >
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -45,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 45,
                  }}
                  transition={{
                    duration: 0.18,
                  }}
                >
                  <X
                    size={21}
                    strokeWidth={1.6}
                  />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 45,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -45,
                  }}
                  transition={{
                    duration: 0.18,
                  }}
                >
                  <Menu
                    size={21}
                    strokeWidth={1.6}
                  />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </header>

      {/* =====================================================
          MOBILE MENU
         ===================================================== */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              fixed
              inset-0
              z-40
              bg-[#EDE6D8]/70
              px-3
              pt-[94px]
              backdrop-blur-sm
              xl:hidden
            "
          >
            <motion.nav
              aria-label="Mobile navigation"
              initial={{
                opacity: 0,
                y: -18,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -12,
                scale: 0.98,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="
                relative
                flex
                min-h-[calc(100dvh-106px)]
                flex-col
                overflow-hidden
                rounded-[24px]
                border
                border-[#DCD2BE]
                bg-[#FFFCF6]
                px-6
                pb-6
                pt-5
                shadow-[0_20px_60px_rgba(55,38,27,0.14)]
                sm:px-8
              "
            >
              {/* Decorative botanical detail */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  bottom-0
                  opacity-[0.12]
                "
              >
                <Leaf
                  size={220}
                  strokeWidth={0.7}
                  className="rotate-[18deg] text-[#7C9650]"
                />
              </div>

              {/* Small menu label */}

              <div
                className="
                  relative
                  mb-3
                  flex
                  items-center
                  gap-3
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#8B806C]
                "
              >
                <span className="h-px w-7 bg-[#B29443]" />

                Navigation

                <span className="h-px flex-1 bg-[#E1D8C8]" />
              </div>

              {/* Links */}

              <div className="relative flex flex-1 flex-col">

                {navLinks.map((link, index) => {
                  const active = isActive(link.href);

                  return (
                    <motion.div
                      key={link.label}
                      initial={{
                        opacity: 0,
                        x: -12,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.25,
                        delay: index * 0.035,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() =>
                          setIsOpen(false)
                        }
                        className={`
                          group
                          flex
                          items-center
                          justify-between
                          border-b
                          border-[#E9E1D3]
                          py-[13px]
                          text-[17px]
                          font-medium
                          transition-colors
                          duration-300

                          ${
                            active
                              ? "text-[#66751C]"
                              : "text-[#30241C] hover:text-[#66751C]"
                          }
                        `}
                      >
                        <span className="flex items-center gap-3">
                          {active && (
                            <Leaf
                              size={14}
                              strokeWidth={1.4}
                              className="text-[#B29443]"
                            />
                          )}

                          <span
                            className={
                              active
                                ? ""
                                : "ml-[26px]"
                            }
                          >
                            {link.label}
                          </span>
                        </span>

                        <ArrowUpRight
                          size={17}
                          strokeWidth={1.5}
                          className="
                            text-[#A79B89]
                            transition-transform
                            duration-300
                            group-hover:translate-x-0.5
                            group-hover:-translate-y-0.5
                          "
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Mobile CTA */}

              <Link
                href="/admissions"
                onClick={() =>
                  setIsOpen(false)
                }
                className="
                  relative
                  mt-6
                  inline-flex
                  min-h-[54px]
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-[#B29443]
                  bg-[#344B24]
                  px-6
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_8px_22px_rgba(52,75,36,0.18)]
                "
              >
                Apply for Admission

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.7}
                />
              </Link>

              {/* Footer detail */}

              <div
                className="
                  relative
                  mt-5
                  text-center
                  font-serif
                  text-[12px]
                  italic
                  tracking-wide
                  text-[#8B806C]
                "
              >
                Growth Through Nurturing
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}