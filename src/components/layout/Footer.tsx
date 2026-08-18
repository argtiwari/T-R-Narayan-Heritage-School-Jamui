"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Leaf,
} from "lucide-react";

import "./footer.css";

const exploreLinks = [
  "Home",
  "About Us",
  "Academics",
  "Admissions",
  "Gallery",
  "Contact Us",
];

const schoolLinks = [
  "Why TR Narayan",
  "Leadership",
  "Campus Life",
  "Facilities",
  "Transport",
  "Safety & Security",
];

const resourceLinks = [
  "CBSE Curriculum",
  "Admissions Process",
  "Fee Structure",
  "Downloads",
  "Careers",
  "FAQs",
];

const socials = [
  {
    label: "Facebook",
    icon: FaFacebookF,
    href: "#",
  },
  {
    label: "Instagram",
    icon: FaInstagram,
    href: "#",
  },
  {
    label: "YouTube",
    icon: FaYoutube,
    href: "#",
  },
  {
    label: "LinkedIn",
    icon: FaLinkedinIn,
    href: "#",
  },
  {
    label: "WhatsApp",
    icon: FaWhatsapp,
    href: "#",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer">
      {/* =================================================
          BOTANICAL BACKGROUND
          ================================================= */}
      <div className="footer-art" aria-hidden="true" />

      {/* =================================================
          ORGANIC WAVE
          ================================================= */}
      <div className="footer-wave" aria-hidden="true">
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
        >
          <path
            className="footer-wave-shadow"
            d="M0,105 C190,170 350,15 560,78 C770,140 900,165 1100,70 C1230,8 1350,40 1440,85 L1440,180 L0,180 Z"
          />

          <path
            className="footer-wave-fill"
            d="M0,105 C190,170 350,15 560,78 C770,140 900,165 1100,70 C1230,8 1350,40 1440,85 L1440,180 L0,180 Z"
          />

          <path
            className="footer-wave-gold"
            d="M0,105 C190,170 350,15 560,78 C770,140 900,165 1100,70 C1230,8 1350,40 1440,85"
          />
        </svg>
      </div>

      {/* =================================================
          MAIN FOOTER
          ================================================= */}
      <div className="footer-body">
        <div className="footer-container">

          {/* =================================================
              BRAND
              ================================================= */}
          <div className="footer-brand">

            <div className="footer-brand-logo">
              <img
                src="/images/logo.svg"
                alt="TR Narayan Heritage School"
              />
            </div>

            <div className="footer-brand-name">
              <h2>TR NARAYAN</h2>
              <span>HERITAGE SCHOOL</span>
            </div>

            <div className="footer-leaf-divider">
              <i />
              <Leaf size={14} strokeWidth={1.5} />
              <i />
            </div>

            <p className="footer-tagline">
              Growth Through Nurturing.
            </p>

            <p className="footer-description">
              Nurturing young minds with values,
              knowledge and skills to create a
              better tomorrow.
            </p>

            <div className="footer-location">
              <MapPin size={17} strokeWidth={1.5} />
              <span>
                Jamui, Bihar — 811307
              </span>
            </div>
          </div>

          {/* =================================================
              EXPLORE
              ================================================= */}
          <FooterColumn
            title="Explore"
            links={exploreLinks}
          />

          {/* =================================================
              OUR SCHOOL
              ================================================= */}
          <FooterColumn
            title="Our School"
            links={schoolLinks}
          />

          {/* =================================================
              RESOURCES
              ================================================= */}
          <FooterColumn
            title="Quick Links"
            links={resourceLinks}
          />

          {/* =================================================
              CONNECT
              ================================================= */}
          <div className="footer-connect">

            <FooterHeading>
              Connect With Us
            </FooterHeading>

            <div className="footer-contact-list">

              <a href="tel:+919304050507">
                <span className="footer-contact-icon">
                  <Phone size={17} strokeWidth={1.5} />
                </span>

                <span>
                  +91 930 405 0507
                </span>
              </a>

              <a href="mailto:info@trnarayanheritageschool.in">
                <span className="footer-contact-icon">
                  <Mail size={17} strokeWidth={1.5} />
                </span>

                <span>
                  info@trnarayanheritageschool.in
                </span>
              </a>

              <div>
                <span className="footer-contact-icon">
                  <MapPin size={17} strokeWidth={1.5} />
                </span>

                <span>
                  Jamui, Bihar — 811307
                </span>
              </div>

            </div>

            <div className="footer-social-heading">
              Follow us on social media
            </div>

            <div className="footer-socials">
              {socials.map(
                ({
                  label,
                  icon: Icon,
                  href,
                }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="footer-social"
                  >
                    <Icon size={16} />
                  </a>
                ),
              )}
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM BAR
            ================================================= */}
        <div className="footer-bottom">
          <div className="footer-bottom-inner">

            <p>
              © 2026 TR Narayan Heritage School.
              All Rights Reserved.
            </p>

            <div className="footer-bottom-leaf">
              <span />
              <Leaf
                size={17}
                strokeWidth={1.4}
              />
              <span />
            </div>

            <p className="footer-made">
              Designed with
              <span>♥</span>
              for a better tomorrow.
            </p>

            <button
              type="button"
              className="footer-top-button"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <ArrowUpRight size={18} />
            </button>

          </div>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   REUSABLE COLUMN
   ========================================================= */

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div className="footer-column">
      <FooterHeading>
        {title}
      </FooterHeading>

      <nav>
        {links.map((link) => (
          <a href="#" key={link}>
            <span className="footer-link-leaf">
              <Leaf size={10} />
            </span>

            {link}
          </a>
        ))}
      </nav>
    </div>
  );
}

function FooterHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h3 className="footer-heading">
      <span className="footer-heading-leaf">
        <Leaf size={13} />
      </span>

      {children}

      <span className="footer-heading-line" />
    </h3>
  );
}