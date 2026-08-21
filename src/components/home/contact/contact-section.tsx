"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import "./contact-section.css";

const contactDetails = [
  {
    icon: MapPin,
    label: "VISIT OUR SCHOOL",
    value: "TR Narayan Heritage School",
    detail: "Jamui, Bihar — 811307",
  },
  {
    icon: Phone,
    label: "CALL US",
    value: "+91 930 405 0507",
    detail: "Available during school hours",
    href: "tel:+919304050507",
  },
  {
    icon: Mail,
    label: "WRITE TO US",
    value: "info@trnarayanheritageschool.in",
    detail: "We usually respond promptly",
    href: "mailto:info@trnarayanheritageschool.in",
  },
  {
    icon: Clock3,
    label: "SCHOOL HOURS",
    value: "Monday — Saturday",
    detail: "8:00 AM — 5:00 PM",
  },
];

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      {/* =================================================
          BOTANICAL DECORATION
         ================================================= */}

      <div
        className="contact-decoration contact-decoration-left"
        aria-hidden="true"
      />

      <div
        className="contact-decoration contact-decoration-right"
        aria-hidden="true"
      />

      <div className="contact-container">

        {/* =================================================
            INTRO
           ================================================= */}

        <div className="contact-intro">
          <div className="contact-eyebrow">
            <span className="contact-eyebrow-line" />
            <span>08 — CONTACT</span>
            <span className="contact-eyebrow-line" />
          </div>

          <h2 className="contact-title">
            Let&apos;s begin
            <em>a conversation.</em>
          </h2>

          <p className="contact-intro-copy">
            Whether you&apos;re exploring our school, planning a visit,
            or simply have a question, we&apos;d be happy to hear from you.
          </p>
        </div>

        {/* =================================================
            MAIN CONTACT GRID
           ================================================= */}

        <div className="contact-main-grid">

          {/* =================================================
              LEFT — CONNECT
             ================================================= */}

          <div className="contact-connect">

            <div className="contact-section-heading">
              <span className="contact-small-leaf">✦</span>

              <div>
                <span>VISIT &amp; CONNECT</span>
                <h3>We&apos;re here to help.</h3>
              </div>
            </div>

            <div className="contact-details">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                const content = (
                  <>
                    <span className="contact-detail-icon">
                      <Icon
                        size={18}
                        strokeWidth={1.4}
                      />
                    </span>

                    <span className="contact-detail-copy">
                      <small>{item.label}</small>

                      <strong>{item.value}</strong>

                      <span>{item.detail}</span>
                    </span>

                    {item.href && (
                      <ArrowUpRight
                        className="contact-detail-arrow"
                        size={17}
                        strokeWidth={1.5}
                      />
                    )}
                  </>
                );

                if (item.href) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="contact-detail"
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <div
                    key={item.label}
                    className="contact-detail"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="contact-note">
              <span className="contact-note-mark">“</span>

              <p>
                Every meaningful journey begins with a simple
                conversation.
              </p>
            </div>
          </div>

          {/* =================================================
              RIGHT — ENQUIRY FORM
             ================================================= */}

          <div className="contact-form-panel">

            <div className="contact-form-header">
              <div>
                <span>ENQUIRY</span>

                <h3>
                  Tell us how
                  <em>we can help.</em>
                </h3>
              </div>

              <div className="contact-form-symbol">
                <Send
                  size={19}
                  strokeWidth={1.25}
                />
              </div>
            </div>

            <form className="contact-form">

              <div className="contact-form-row">

                <label className="contact-field">
                  <span>Name</span>

                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                  />
                </label>

                <label className="contact-field">
                  <span>Phone</span>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91"
                  />
                </label>

              </div>

              <label className="contact-field">
                <span>Email</span>

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                />
              </label>

              <label className="contact-field">
                <span>Subject</span>

                <select
                  name="subject"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an enquiry type
                  </option>

                  <option value="admissions">
                    Admissions
                  </option>

                  <option value="school-visit">
                    School Visit
                  </option>

                  <option value="general">
                    General Enquiry
                  </option>

                  <option value="other">
                    Other
                  </option>
                </select>
              </label>

              <label className="contact-field">
                <span>Message</span>

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us a little about your enquiry..."
                />
              </label>

              <button
                type="submit"
                className="contact-submit"
              >
                <span>Send Enquiry</span>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.7}
                />
              </button>

            </form>

            <p className="contact-form-footnote">
              Your information is used only to respond to your
              enquiry.
            </p>
          </div>
        </div>

        {/* =================================================
            LOCATION
           ================================================= */}

        <div className="contact-location">

          <div className="contact-location-info">
            <span className="contact-location-label">
              FIND US
            </span>

            <h3>
              Come and
              <em>visit us.</em>
            </h3>

            <p>
              We welcome parents and families to experience
              the school environment and discover what makes
              TR Narayan Heritage School special.
            </p>

            <div className="contact-location-address">
              <MapPin
                size={17}
                strokeWidth={1.4}
              />

              <span>
                TR Narayan Heritage School
                <br />
                Jamui, Bihar — 811307
              </span>
            </div>

            <Link
              href="https://www.google.com/maps/search/?api=1&query=TR+Narayan+Heritage+School+Jamui+Bihar"
              target="_blank"
              rel="noreferrer"
              className="contact-map-link"
            >
              Open in Maps

              <ArrowUpRight
                size={16}
                strokeWidth={1.6}
              />
            </Link>
          </div>

          <div className="contact-map">
            <div className="contact-map-pattern" />

            <div className="contact-map-marker">
              <span>
                <MapPin
                  size={22}
                  strokeWidth={1.35}
                />
              </span>

              <small>
                TR NARAYAN
                <br />
                HERITAGE SCHOOL
              </small>
            </div>

            <div className="contact-map-road contact-map-road-one" />
            <div className="contact-map-road contact-map-road-two" />
            <div className="contact-map-road contact-map-road-three" />

            <div className="contact-map-water" />
          </div>
        </div>

        {/* =================================================
            FINAL CTA
           ================================================= */}

        <div className="contact-final-cta">

          <div className="contact-final-leaf">
            <span />
            <span>✦</span>
            <span />
          </div>

          <p>
            Have a question?
          </p>

          <h3>
            We&apos;re always happy
            <em>to hear from you.</em>
          </h3>

          <Link
            href="mailto:info@trnarayanheritageschool.in"
            className="contact-final-link"
          >
            Get in Touch

            <ArrowUpRight
              size={17}
              strokeWidth={1.7}
            />
          </Link>

        </div>
      </div>
    </section>
  );
}