import Image from "next/image";
import { Leaf } from "lucide-react";

const chapters = [
  {
    number: "01",
    title: "Strong Foundations",
    description:
      "A child's journey begins with belonging. Through care, values and meaningful relationships, we create the foundation from which confident learning can grow.",
    image: "/images/why-choose-us/wcu-foundations.webp",
    alt: "Teacher nurturing young students during a classroom learning activity",
    side: "left",
    tone: "ivory",
    objectPosition: "center center",
  },
  {
    number: "02",
    title: "Learning with Curiosity",
    description:
      "Learning becomes meaningful when children are encouraged to question, explore and discover—not simply remember answers.",
    image: "/images/why-choose-us/wcu-curiosity.webp",
    alt: "Students exploring and learning together through a practical activity",
    side: "right",
    tone: "white",
    objectPosition: "center center",
  },
  {
    number: "03",
    title: "Character & Confidence",
    description:
      "Education reaches beyond academics. Responsibility, empathy and opportunities to express themselves help children discover their own voice.",
    image: "/images/why-choose-us/wcu-confidence.webp",
    alt: "Student confidently participating in a school activity",
    side: "left",
    tone: "sage",
    objectPosition: "center center",
  },
  {
    number: "04",
    title: "Ready to Flourish",
    description:
      "With strong roots, curious minds and growing confidence, students become independent thinkers prepared to embrace what comes next.",
    image: "/images/why-choose-us/wcu-flourish.webp",
    alt: "Students walking confidently together through the school campus",
    side: "right",
    tone: "white",
    objectPosition: "center center",
  },
] as const;

const toneClasses = {
  ivory:
    "bg-[linear-gradient(135deg,rgba(255,253,247,0.96),rgba(250,247,238,0.78))]",
  white: "bg-[rgba(255,255,252,0.76)]",
  sage:
    "bg-[linear-gradient(135deg,rgba(248,247,238,0.92),rgba(241,244,226,0.62))]",
};

function BranchArtwork() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-[180px] left-1/2 z-0 hidden w-[330px] -translate-x-1/2 lg:block"
    >
      <svg
        viewBox="0 0 330 1900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full overflow-visible"
      >
        {/* Main organic branch */}
        <path
          d="
            M168 0
            C174 145 122 205 135 340
            C146 466 218 520 190 650
            C166 765 106 833 132 960
            C157 1085 222 1142 198 1272
            C178 1390 120 1450 146 1575
            C164 1660 188 1750 170 1900
          "
          stroke="rgba(113,125,48,0.18)"
          strokeWidth="1.35"
          strokeLinecap="round"
        />

        {/* Branch 01 */}
        <path
          d="M136 330 C91 300 66 252 69 205"
          stroke="rgba(113,125,48,0.15)"
          strokeWidth="1.15"
          strokeLinecap="round"
        />

        {/* Branch 02 */}
        <path
          d="M188 648 C234 607 260 554 258 500"
          stroke="rgba(113,125,48,0.15)"
          strokeWidth="1.15"
          strokeLinecap="round"
        />

        {/* Branch 03 */}
        <path
          d="M134 960 C91 926 71 882 74 830"
          stroke="rgba(113,125,48,0.15)"
          strokeWidth="1.15"
          strokeLinecap="round"
        />

        {/* Branch 04 */}
        <path
          d="M197 1270 C242 1235 265 1190 261 1138"
          stroke="rgba(113,125,48,0.15)"
          strokeWidth="1.15"
          strokeLinecap="round"
        />

        {/* Leaves */}
        <g stroke="rgba(113,125,48,0.24)" strokeWidth="1.15">
          <path
            d="M67 205 C44 190 43 165 63 151 C79 169 80 190 67 205Z"
            fill="rgba(239,242,215,0.38)"
          />

          <path
            d="M258 500 C279 482 301 490 306 512 C283 521 266 516 258 500Z"
            fill="rgba(239,242,215,0.38)"
          />

          <path
            d="M74 830 C52 813 31 822 28 844 C49 852 66 846 74 830Z"
            fill="rgba(239,242,215,0.38)"
          />

          <path
            d="M261 1138 C282 1120 304 1128 309 1150 C287 1159 269 1154 261 1138Z"
            fill="rgba(239,242,215,0.38)"
          />
        </g>
      </svg>
    </div>
  );
}

function SectionEyebrow() {
  return (
    <div className="mb-5 flex items-center justify-center gap-3">
      <span
        aria-hidden="true"
        className="h-px w-8 bg-[#9a9c55]/45 sm:w-10"
      />

      <Leaf
        aria-hidden="true"
        strokeWidth={1.6}
        className="size-3.5 rotate-[18deg] text-[#7d8531]"
      />

      <span
        aria-hidden="true"
        className="h-px w-8 bg-[#9a9c55]/45 sm:w-10"
      />
    </div>
  );
}

function ChapterImage({
  image,
  alt,
  objectPosition,
}: {
  image: string;
  alt: string;
  objectPosition: string;
}) {
  return (
    <div className="relative">
      {/* restrained ambient depth */}
      <div
        aria-hidden="true"
        className="absolute -inset-5 -z-10 rounded-[42px] bg-[radial-gradient(circle_at_50%_50%,rgba(127,137,56,0.075),transparent_68%)] blur-2xl"
      />

      <div className="relative aspect-[4/3] overflow-hidden rounded-[26px] border border-white/80 bg-[#f2eee4] shadow-[0_22px_60px_rgba(63,47,28,0.09)] sm:rounded-[30px]">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 1023px) 100vw, 52vw"
          className="object-cover"
          style={{
            objectPosition,
          }}
        />

        {/* Very light photographic warmth only */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,248,230,0.025),rgba(73,49,29,0.025))]"
        />
      </div>
    </div>
  );
}

function ChapterCopy({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-[470px]">
      <span className="mb-4 block text-[11px] font-semibold tracking-[0.28em] text-[#7b812c]">
        {number}
      </span>

      <h3 className="text-balance text-[30px] font-semibold leading-[1.12] tracking-[-0.035em] text-[#21170f] sm:text-[36px] lg:text-[38px]">
        {title}
      </h3>

      <div
        aria-hidden="true"
        className="my-5 h-px w-12 bg-gradient-to-r from-[#7d8531]/65 to-[#7d8531]/10"
      />

      <p className="max-w-[440px] text-[15px] leading-[1.9] text-[#685b4d] sm:text-[16px]">
        {description}
      </p>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section
      id="why-tr-narayan"
      aria-labelledby="why-tr-narayan-title"
      className="relative isolate overflow-hidden bg-[#fffdf8]"
    >
      {/* Global atmospheric depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
      >
        <div className="absolute left-[-12%] top-[12%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(138,145,66,0.055),transparent_68%)]" />

        <div className="absolute right-[-13%] top-[43%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(99,62,38,0.04),transparent_70%)]" />

        <div className="absolute bottom-[4%] left-[25%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(149,157,87,0.045),transparent_70%)]" />
      </div>

      {/* Header */}
      <div className="mx-auto max-w-[1440px] px-5 pb-16 pt-24 text-center sm:px-8 sm:pb-20 sm:pt-28 lg:px-10 lg:pb-28 lg:pt-32">
        <SectionEyebrow />

        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#777b2d] sm:text-[11px]">
          Why TR Narayan
        </p>

        <h2
          id="why-tr-narayan-title"
          className="mx-auto max-w-[760px] text-balance text-[38px] font-semibold leading-[1.06] tracking-[-0.045em] text-[#21170f] sm:text-[48px] lg:text-[58px]"
        >
          Where growth{" "}
          <span className="text-[#687515]">takes root.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-[650px] text-[15px] leading-7 text-[#716457] sm:text-[16px]">
          Every child begins with potential. We create the environment,
          guidance and experiences that help that potential grow with purpose.
        </p>
      </div>

      {/* Story */}
      <div className="relative mx-auto max-w-[1480px] px-4 pb-24 sm:px-7 sm:pb-28 lg:px-10 lg:pb-36">
        <BranchArtwork />

        <div className="relative z-10 space-y-10 sm:space-y-14 lg:space-y-20">
          {chapters.map((chapter, index) => {
            const imageFirst = chapter.side === "left";

            return (
              <article
                key={chapter.number}
                className={[
                  "relative overflow-hidden rounded-[34px]",
                  "px-5 py-10 sm:px-8 sm:py-12",
                  "lg:min-h-[570px] lg:px-12 lg:py-14",
                  "xl:px-16 xl:py-16",
                  toneClasses[chapter.tone],
                ].join(" ")}
              >
                {/* subtle chapter atmosphere */}
                <div
                  aria-hidden="true"
                  className={[
                    "pointer-events-none absolute h-[360px] w-[360px] rounded-full blur-3xl",
                    index % 2 === 0
                      ? "-left-32 -top-28 bg-[#b6bc72]/[0.055]"
                      : "-right-32 -top-24 bg-[#785037]/[0.045]",
                  ].join(" ")}
                />

                {/* Organic corner, not sticker */}
                <div
                  aria-hidden="true"
                  className={[
                    "pointer-events-none absolute size-32 rounded-full border border-[#8d963f]/10",
                    imageFirst
                      ? "-bottom-20 -left-16"
                      : "-right-16 -top-20",
                  ].join(" ")}
                />

                <div className="relative grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 xl:gap-24">
                  {imageFirst ? (
                    <>
                      <ChapterImage
                        image={chapter.image}
                        alt={chapter.alt}
                        objectPosition={chapter.objectPosition}
                      />

                      <div className="flex lg:justify-center">
                        <ChapterCopy
                          number={chapter.number}
                          title={chapter.title}
                          description={chapter.description}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="order-2 flex lg:order-1 lg:justify-center">
                        <ChapterCopy
                          number={chapter.number}
                          title={chapter.title}
                          description={chapter.description}
                        />
                      </div>

                      <div className="order-1 lg:order-2">
                        <ChapterImage
                          image={chapter.image}
                          alt={chapter.alt}
                          objectPosition={chapter.objectPosition}
                        />
                      </div>
                    </>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Closing growth mark */}
        <div
          aria-hidden="true"
          className="mt-16 flex items-center justify-center gap-3 sm:mt-20"
        >
          <span className="h-px w-10 bg-[#8d963f]/25" />

          <Leaf
            strokeWidth={1.4}
            className="size-3.5 rotate-[24deg] text-[#7d8531]/70"
          />

          <span className="h-px w-10 bg-[#8d963f]/25" />
        </div>
      </div>

      {/* Seamless transition into next chapter */}
      <div
        aria-hidden="true"
        className="h-16 bg-[linear-gradient(180deg,rgba(255,253,248,0),rgba(247,247,237,0.55))] sm:h-20"
      />
    </section>
  );
}