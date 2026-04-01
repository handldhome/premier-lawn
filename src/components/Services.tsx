"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    name: "Lawn Maintenance",
    description:
      "Regular mowing, edging, and cleanup so your lawn always looks sharp — without you lifting a finger.",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80&fit=crop",
    alt: "Close-up of lush green grass",
  },
  {
    name: "Landscaping",
    description:
      "Custom landscaping that turns your outdoor space into somewhere you actually want to spend time.",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4aaae?w=800&q=80&fit=crop",
    alt: "Beautifully manicured garden beds",
  },
  {
    name: "Tree Trimming & Pruning",
    description:
      "Healthy, beautiful trees start with the right cut. We keep yours thriving and your neighbors impressed.",
    image:
      "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=800&q=80&fit=crop",
    alt: "Pruning shears on a tree branch close-up",
  },
  {
    name: "Tree Removal",
    description:
      "Safe, efficient removal of unwanted or hazardous trees — big or small, we've got it covered.",
    image:
      "https://images.unsplash.com/photo-1564419320461-6870880221ad?w=800&q=80&fit=crop",
    alt: "Worker with chainsaw in a tree",
  },
  {
    name: "Sprinkler System Installation",
    description:
      "A properly installed sprinkler system saves water and keeps your landscape lush all year long.",
    image:
      "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=800&q=80&fit=crop",
    alt: "Sprinkler head close-up with water spray",
  },
  {
    name: "Sod Installation",
    description:
      "New sod installed right means an instant green transformation with roots built to last.",
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80&fit=crop",
    alt: "Hands pressing fresh sod into the ground",
  },
  {
    name: "Hardscape Services",
    description:
      "Patios, walkways, retaining walls — we design and build hardscapes that are as functional as they are beautiful.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&fit=crop",
    alt: "Clean paver patio in a California yard",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-offwhite py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-forest">
            Everything your property needs, handled.
          </h2>
          <p className="mt-4 text-lg text-warm-gray max-w-2xl mx-auto">
            From weekly lawn care to full landscape transformations — we do it
            all.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={service.name} delay={i * 0.1}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-forest">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-warm-gray leading-relaxed">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-4 inline-block text-sm font-medium text-sage transition-colors hover:text-forest"
                  >
                    Learn More ›
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
