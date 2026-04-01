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
          {/* Photo */}
          <ScrollReveal>
            <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
              <Image
                src="https://images.unsplash.com/photo-1683316924890-6a8c5ab10d29?w=800&q=80&fit=crop"
                alt="Man mowing grass in a sunny yard"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                unoptimized
              />
            </div>
          </ScrollReveal>

          {/* Copy */}
          <ScrollReveal delay={0.2}>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-forest">
              10 years. Thousands of happy yards.
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
