"use client";

import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote:
      "Premier totally transformed our backyard. They showed up on time, were incredibly professional, and the result was better than we imagined. We've been using them for weekly maintenance ever since.",
    author: "Maria T.",
    location: "Pasadena",
  },
  {
    quote:
      "We hired them for our commercial property and couldn't be happier. The crew is reliable, the work is consistent, and the price is fair. It's a no-brainer to keep renewing.",
    author: "James R.",
    location: "Glendale",
  },
  {
    quote:
      "Called them in the morning, got an estimate the same day. They removed a big tree from our front yard quickly and safely. Super friendly team — highly recommend.",
    author: "Sandra M.",
    location: "Arcadia",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="h-5 w-5 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-forest">
            Don&apos;t just take our word for it.
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.author} delay={i * 0.15}>
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">
                <Stars />
                <blockquote className="mt-4 flex-1 text-warm-gray leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <p className="mt-6 font-semibold text-forest">
                  — {t.author},{" "}
                  <span className="font-normal text-warm-gray">
                    {t.location}
                  </span>
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
