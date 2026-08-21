"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Leaf } from "lucide-react";

type PageMaintenanceProps = {
  number: string;
  section: string;
  title: string;
  description?: string;
};

export default function PageMaintenance({
  number,
  section,
  title,
  description = "We are carefully preparing this section to bring you a thoughtful experience that reflects the spirit of TR Narayan Heritage School.",
}: PageMaintenanceProps) {
  return (
    <main className="relative flex min-h-screen overflow-hidden bg-[#F8F5EE] text-[#382417]">

      {/* =====================================================
          BOTANICAL BACKGROUND
         ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Soft olive glow */}

        <div
          className="
            absolute
            -left-[18vw]
            top-[18%]
            h-[42vw]
            w-[42vw]
            max-h-[620px]
            max-w-[620px]
            rounded-full
            bg-[#7C9650]/10
            blur-[90px]
          "
        />

        {/* Soft gold glow */}

        <div
          className="
            absolute
            -right-[15vw]
            bottom-[5%]
            h-[38vw]
            w-[38vw]
            max-h-[560px]
            max-w-[560px]
            rounded-full
            bg-[#B29443]/10
            blur-[100px]
          "
        />

        {/* Large decorative leaf */}

        <Leaf
          size={420}
          strokeWidth={0.55}
          className="
            absolute
            -bottom-24
            -right-20
            rotate-[18deg]
            text-[#7C9650]/[0.10]
          "
        />

        <Leaf
          size={250}
          strokeWidth={0.55}
          className="
            absolute
            -left-20
            top-28
            rotate-[-35deg]
            text-[#B29443]/[0.08]
          "
        />
      </div>

      {/* =====================================================
          NAVBAR
         ===================================================== */}

      <header
        className="
          absolute
          left-1/2
          top-5
          z-20
          w-[calc(100%-24px)]
          max-w-[1540px]
          -translate-x-1/2
        "
      >
        <nav
          className="
            flex
            h-[70px]
            items-center
            justify-between
            rounded-[20px]
            border
            border-[#DED4C2]
            bg-[#FFFEFB]/90
            px-5
            shadow-[0_10px_35px_rgba(55,38,27,0.07)]
            backdrop-blur-xl
            sm:px-7
            lg:px-8
          "
        >
          <Link
            href="/"
            aria-label="TR Narayan Heritage School home"
          >
            <img
              src="/images/branding/trnhs-logo-horizontal.png"
              alt="TR Narayan Heritage School"
              className="
                h-auto
                w-[175px]
                object-contain
                sm:w-[205px]
              "
            />
          </Link>

          <Link
            href="/"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-[#665A4D]
              transition-colors
              hover:text-[#66751C]
            "
          >
            <ArrowLeft
              size={15}
              strokeWidth={1.5}
              className="
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
            />

            Back Home
          </Link>
        </nav>
      </header>

      {/* =====================================================
          MAIN CONTENT
         ===================================================== */}

      <section
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1180px]
          items-center
          justify-center
          px-6
          pb-16
          pt-36
          sm:px-8
          lg:px-12
        "
      >
        <div
          className="
            w-full
            max-w-[820px]
            text-center
          "
        >

          {/* =================================================
              NUMBER
             ================================================= */}

          <div
            className="
              mb-7
              flex
              items-center
              justify-center
              gap-4
              text-[10px]
              font-semibold
              tracking-[0.35em]
              text-[#8A7C69]
            "
          >
            <span className="h-px w-12 bg-[#B29443]/60" />

            <span>
              {number}
            </span>

            <span className="h-px w-12 bg-[#B29443]/60" />
          </div>

          {/* =================================================
              SECTION LABEL
             ================================================= */}

          <div
            className="
              mb-6
              flex
              items-center
              justify-center
              gap-2
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.35em]
              text-[#66751C]
            "
          >
            <Leaf
              size={13}
              strokeWidth={1.3}
            />

            {section}
          </div>

          {/* =================================================
              MAIN TITLE
             ================================================= */}

          <h1
            className="
              font-serif
              text-[clamp(42px,6vw,76px)]
              font-normal
              leading-[0.98]
              tracking-[-0.035em]
              text-[#382417]
            "
          >
            {title}
          </h1>

          {/* =================================================
              GOLD DIVIDER
             ================================================= */}

          <div
            className="
              mx-auto
              my-9
              flex
              w-[190px]
              items-center
              gap-3
            "
          >
            <span className="h-px flex-1 bg-[#B29443]/45" />

            <Leaf
              size={18}
              strokeWidth={1.2}
              className="shrink-0 text-[#B29443]"
            />

            <span className="h-px flex-1 bg-[#B29443]/45" />
          </div>

          {/* =================================================
              DESCRIPTION
             ================================================= */}

          <p
            className="
              mx-auto
              max-w-[590px]
              text-[15px]
              leading-7
              text-[#75695C]
              sm:text-[16px]
            "
          >
            {description}
          </p>

          {/* =================================================
              ACTIONS
             ================================================= */}

          <div
            className="
              mt-10
              flex
              flex-col
              items-center
              justify-center
              gap-3
              sm:flex-row
            "
          >
            <Link
              href="/"
              className="
                group
                inline-flex
                min-h-[50px]
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-[#B29443]
                bg-[#344B24]
                px-6
                text-[13px]
                font-semibold
                text-white
                shadow-[0_8px_22px_rgba(52,75,36,0.15)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#405A2B]
              "
            >
              Back to Home

              <ArrowLeft
                size={16}
                strokeWidth={1.7}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-x-0.5
                "
              />
            </Link>

            <Link
              href="/contact"
              className="
                group
                inline-flex
                min-h-[50px]
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-[#D5CCBC]
                bg-[#FFFEFB]/80
                px-6
                text-[13px]
                font-semibold
                text-[#4B382B]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#B29443]
                hover:bg-[#F8F3E8]
              "
            >
              Contact Us

              <ArrowUpRight
                size={16}
                strokeWidth={1.7}
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
              BOTTOM MESSAGE
             ================================================= */}

          <p
            className="
              mt-12
              font-serif
              text-[13px]
              italic
              tracking-wide
              text-[#948674]
            "
          >
            Growth Through Nurturing
          </p>
        </div>
      </section>
    </main>
  );
}