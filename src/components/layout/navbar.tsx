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
            ? "border-slate-200/70 bg-white/90 shadow-[0_8px_35px_rgba(15,23,42,0.06)] backdrop-blur-xl"
            : "border-slate-100 bg-white"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-[104px] max-w-[1580px] items-center px-5 sm:px-7 lg:px-10 xl:px-12"
        >
          {/* Logo */}
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
              sizes="(max-width: 640px) 230px, 300px"
              className="h-auto w-[225px] object-contain sm:w-[255px] lg:w-[285px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="ml-auto hidden items-center xl:flex">
            <div className="flex items-center gap-[2px]">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group relative whitespace-nowrap px-[11px] py-3 text-[14px] font-medium tracking-[-0.01em] text-slate-700 transition-colors duration-200 hover:text-school-blue 2xl:px-[14px]"
                >
                  {link.label}

                  <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-school-gold transition-all duration-300 group-hover:w-[22px]" />
                </Link>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/admissions"
              className="group ml-5 inline-flex h-[52px] shrink-0 items-center justify-center gap-2.5 rounded-full bg-school-navy px-6 text-[14px] font-semibold text-white shadow-[0_6px_18px_rgba(15,23,42,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-school-blue hover:shadow-[0_10px_25px_rgba(15,23,42,0.20)] 2xl:ml-7 2xl:px-7"
            >
              Apply for Admission

              <ArrowUpRight
                size={17}
                strokeWidth={2}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Mobile / Tablet Button */}
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="relative z-50 ml-auto inline-flex size-11 items-center justify-center rounded-full border border-slate-200 bg-white text-school-navy shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 xl:hidden"
          >
            {isOpen ? (
              <X size={21} aria-hidden="true" />
            ) : (
              <Menu size={21} aria-hidden="true" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white xl:hidden"
          >
            <motion.nav
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex min-h-dvh flex-col px-6 pb-7 pt-[125px] sm:px-8"
            >
              <div className="flex flex-1 flex-col">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.25,
                      delay: index * 0.025,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between border-b border-slate-100 py-[15px] text-[17px] font-medium text-school-navy transition-colors hover:text-school-blue"
                    >
                      {link.label}

                      <ArrowUpRight
                        size={17}
                        aria-hidden="true"
                        className="text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <Link
                href="/admissions"
                onClick={() => setIsOpen(false)}
                className="mt-7 inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-school-navy px-6 text-sm font-semibold text-white"
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