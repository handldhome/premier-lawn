"use client";

import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-forest py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Ready for a yard you&apos;re proud of?
          </h2>
          <p className="mt-4 text-lg text-sage">
            Get a free estimate — no pressure, no hassle. Just a real
            conversation about what your property needs.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:7472409647"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-forest shadow-lg transition-all hover:bg-offwhite hover:shadow-xl"
            >
              📞 Call Us: 747-240-9647
            </a>
            <a
              href="mailto:premierlawnlandscapeinc@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white/10"
            >
              ✉️ Email Us
            </a>
          </div>
          <p className="mt-6 text-sm text-white/50">
            We serve residential and commercial properties throughout Southern
            California.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
