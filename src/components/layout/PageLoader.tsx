"use client";

import { useEffect, useState } from "react";

import "./page-loader.css";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    /*
     * Loader is already visible from the first render.
     * We only control when it closes here.
     */

    const closeTimer = window.setTimeout(() => {
      setIsClosing(true);
    }, 2200);

    /*
     * 2200ms
     * + 750ms exit animation
     * = approximately 2950ms
     */

    const removeTimer = window.setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      window.clearTimeout(closeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <div
      className={`page-loader ${
        isClosing ? "page-loader--closing" : ""
      }`}
      aria-label="Loading TR Narayan Heritage School"
      role="status"
    >
      {/* =================================================
          SOFT BOTANICAL GLOW
         ================================================= */}

      <div
        className="page-loader-glow page-loader-glow-left"
        aria-hidden="true"
      />

      <div
        className="page-loader-glow page-loader-glow-right"
        aria-hidden="true"
      />

      {/* =================================================
          MAIN CONTENT
         ================================================= */}

      <div className="page-loader-content">

        {/* =================================================
            LOGO
           ================================================= */}

        <div className="page-loader-logo">
          <img
            src="/images/logo.svg"
            alt="TR Narayan Heritage School"
          />
        </div>

        {/* =================================================
            SCHOOL NAME
           ================================================= */}

        <div className="page-loader-school">
          <h1>TR NARAYAN</h1>

          <span>
            HERITAGE SCHOOL
          </span>
        </div>

        {/* =================================================
            BOTANICAL DIVIDER
           ================================================= */}

        <div
          className="page-loader-divider"
          aria-hidden="true"
        >
          <i />

          <span className="page-loader-leaf">
            <svg
              viewBox="0 0 48 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 19C17 17 26 10 35 4"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />

              <path
                d="M14 15C11 10 12 6 16 3C19 7 18 11 14 15Z"
                fill="currentColor"
              />

              <path
                d="M22 11C20 7 22 4 26 2C27 6 26 9 22 11Z"
                fill="currentColor"
              />

              <path
                d="M29 8C28 5 30 2 34 1C34 5 32 7 29 8Z"
                fill="currentColor"
              />

              <path
                d="M35 5C36 2 39 1 43 2C41 5 39 6 35 5Z"
                fill="currentColor"
              />
            </svg>
          </span>

          <i />
        </div>

        {/* =================================================
            TAGLINE
           ================================================= */}

        <p className="page-loader-tagline">
          Growth Through Nurturing
        </p>

        {/* =================================================
            PROGRESS
           ================================================= */}

        <div
          className="page-loader-progress"
          aria-hidden="true"
        >
          <span />
        </div>

        {/* =================================================
            LOADING TEXT
           ================================================= */}

        <p className="page-loader-loading-text">
          Nurturing Every Beginning
        </p>

      </div>

      {/* =================================================
          CORNER DETAILS
         ================================================= */}

      <div
        className="page-loader-corner page-loader-corner-top"
        aria-hidden="true"
      />

      <div
        className="page-loader-corner page-loader-corner-bottom"
        aria-hidden="true"
      />
    </div>
  );
}