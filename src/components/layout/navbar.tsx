"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

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
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-slate-200/70 bg-white/90 shadow-[0_8px_30px_rgb(15,23,42,0.06)] backdrop-blur-xl"
            : "bg-white"
        }`}
      >
        <nav
          className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="relative z-50 flex shrink-0 items-center"
            aria-label="TR Narayan Heritage School home"
          >
            <Image
              src="/images/branding/trnhs-logo.png"
              alt="TR Narayan Heritage School"
              width={190}
              height={70}
              priority
              className="h-[58px] w-auto object-contain sm:h-[64px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 xl:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative rounded-lg px-3 py-2 text-[14px] font-medium text-slate-700 transition-colors hover:text-school-blue"
              >
                {link.label}

                <span className="absolute inset-x-3 bottom-0 h-px origin-left scale-x-0 bg-school-gold transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden xl:block">
            <Link
              href="/admissions"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-school-navy px-5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-school-blue hover:shadow-lg"
            >
              Apply for Admission

              <ArrowUpRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="relative z-50 inline-flex size-11 items-center justify-center rounded-full border border-slate-200 bg-white text-school-navy transition-colors hover:bg-slate-50 xl:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white xl:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex min-h-dvh flex-col px-6 pb-8 pt-28"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-1 flex-col">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.035,
                      duration: 0.25,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between border-b border-slate-100 py-4 text-lg font-medium text-school-navy transition-colors hover:text-school-blue"
                    >
                      {link.label}

                      <ArrowUpRight
                        size={17}
                        className="text-slate-400"
                        aria-hidden="true"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <Link
                href="/admissions"
                onClick={() => setIsOpen(false)}
                className="mt-8 inline-flex h-13 items-center justify-center gap-2 rounded-full bg-school-navy px-6 text-sm font-semibold text-white"
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