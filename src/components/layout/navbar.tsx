"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

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
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          isScrolled
            ? "border-[#DED8CB]/70 bg-[#FFFEFB]/92 shadow-[0_8px_32px_rgba(55,38,27,0.055)] backdrop-blur-xl"
            : "border-[#E8E3D9]/80 bg-[#FFFEFB]"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-[88px] max-w-[1580px] items-center px-5 sm:px-7 lg:px-10 xl:px-12"
        >
          <Link
            href="/"
            aria-label="TR Narayan Heritage School home"
            className="relative z-50 flex shrink-0 items-center"
          >
            <Image
              src="/images/branding/trnhs-logo-horizontal.png"
              alt="TR Narayan Heritage School"
              width={420}
              height={150}
              priority
              sizes="(max-width: 640px) 210px, 270px"
              className="h-auto w-[205px] object-contain sm:w-[230px] lg:w-[255px]"
            />
          </Link>

          <div className="ml-auto hidden items-center xl:flex">
            <div className="flex items-center gap-[1px]">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group relative whitespace-nowrap px-[10px] py-3 text-[13px] font-medium tracking-[-0.01em] text-[#3F4854] transition-colors duration-200 hover:text-[#4B2414] 2xl:px-[13px] 2xl:text-[14px]"
                >
                  {link.label}

                  <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-[#7A861F] transition-all duration-300 group-hover:w-[22px]" />
                </Link>
              ))}
            </div>

            <Link
              href="/admissions"
              className="group ml-4 inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2.5 rounded-full bg-[#111827] px-6 text-[13px] font-semibold text-white shadow-[0_7px_20px_rgba(15,23,42,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4B2414] hover:shadow-[0_11px_25px_rgba(75,36,20,0.18)] 2xl:ml-6 2xl:px-7 2xl:text-[14px]"
            >
              Apply for Admission

              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="relative z-50 ml-auto inline-flex size-11 items-center justify-center rounded-full border border-[#DED8CD] bg-[#FFFEFB] text-[#251A15] shadow-sm transition-all duration-200 hover:border-[#C8C0B0] hover:bg-[#F8F5ED] xl:hidden"
          >
            {isOpen ? (
              <X size={21} aria-hidden="true" />
            ) : (
              <Menu size={21} aria-hidden="true" />
            )}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#FFFEFB] xl:hidden"
          >
            <motion.nav
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex min-h-dvh flex-col px-6 pb-7 pt-[108px] sm:px-8"
            >
              <div className="flex flex-1 flex-col">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.25,
                      delay: index * 0.025,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between border-b border-[#ECE7DE] py-[15px] text-[17px] font-medium text-[#251A15] transition-colors hover:text-[#66751C]"
                    >
                      {link.label}

                      <ArrowUpRight
                        size={17}
                        aria-hidden="true"
                        className="text-[#8B8178] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <Link
                href="/admissions"
                onClick={() => setIsOpen(false)}
                className="mt-7 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#111827] px-6 text-sm font-semibold text-white"
              >
                Apply for Admission
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}