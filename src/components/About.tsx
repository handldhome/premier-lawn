"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { label: "10+ Years in Business" },
  { label: "Residential & Commercial" },
  { label: "Free Estimates Always" },
  { label: "Full-Service Landscaping" },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Company logo — enlarged */}
          <ScrollReveal>
            <div className="flex items-center justify-center rounded-2xl bg-forest p-12 lg:p-16 aspect-[4/3]">
              {/* TODO: Replace with transparent background version */}
              <Image
                src="/images/premier-logo.png"
                alt="Premier Lawn & Landscape"
                width={400}
                height={200}
                className="w-full max-w-md h-auto"
                unoptimized
              />
            </div>
          </ScrollReveal>

          {/* Copy */}
          <ScrollReveal delay={0.2}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-forest">
              A decade of making yards look their best.
            </h2>
            <div className="mt-6 space-y-4 text-warm-gray leading-relaxed">
              <p>
                Premier Lawn &amp; Landscape got its start the same way most great
                things do — someone in the neighborhood needed help, and we
                showed up. A decade later, we&apos;re still showing up. For
                homeowners who want their weekends back. For businesses that need
                their property to make a great first impression. For anyone who
                believes a well-kept yard says something good about the people
                who live there.
              </p>
              <p>
                We serve both residential and commercial clients, and we bring
                the same level of care to every job — whether it&apos;s a small
                backyard cleanup or a full commercial landscaping contract.
              </p>
              <p>
                Give us a call or shoot us an email. We&apos;d love to earn your
                trust.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats row */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center py-6 ${
                  i < stats.length - 1
                    ? "sm:border-r sm:border-gray-200"
                    : ""
                }`}
              >
                <p className="font-display text-lg font-bold text-forest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
