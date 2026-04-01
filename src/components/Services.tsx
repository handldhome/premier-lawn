"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    name: "Lawn Maintenance",
    description:
      "Regular mowing, edging, and cleanup so your lawn always looks sharp — without you lifting a finger.",
    image:
      "https://images.unsplash.com/photo-1690068023694-053da714f95f?w=800&q=80&fit=crop",
    alt: "Close-up of a lawn mower cutting green grass on a sunny day",
  },
  {
    name: "Landscaping",
    description:
      "Custom landscaping that turns your outdoor space into somewhere you actually want to spend time.",
    image:
      "https://images.unsplash.com/photo-1722102419763-cec9a7c94ff1?w=800&q=80&fit=crop",
    alt: "A garden filled with colorful flowers and landscaping",
  },
  {
    name: "Tree Trimming & Removal",
    description:
      "From routine pruning to full removal — we keep your trees healthy, safe, and looking their best.",
    image:
      "https://images.unsplash.com/photo-1474742817425-9f91918183b7?w=800&q=80&fit=crop",
    alt: "Man cutting a tree with a chainsaw",
  },
  {
    name: "Sprinkler System Installation",
    description:
      "A properly installed sprinkler system saves water and keeps your landscape lush all year long.",
    image:
      "https://images.unsplash.com/photo-1567387384066-7b7e3e971098?w=800&q=80&fit=crop",
    alt: "Water sprinklers spraying on grass and trees",
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
      "https://images.unsplash.com/photo-1657383543451-e47d1589195d?w=800&q=80&fit=crop",
    alt: "Beautiful California hardscaped patio with stone fireplace and pool at sunset",
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
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover transition-all duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                    unoptimized
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Floating label on hover */}
                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="inline-block rounded-full bg-white/90 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold text-forest shadow-md">
                      {service.name}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-forest group-hover:text-forest-dark transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-warm-gray leading-relaxed">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-sage transition-all duration-300 hover:text-forest hover:gap-2"
                  >
                    Learn More
                    <span className="transition-transform duration-300 group-hover:translate-x-1">›</span>
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
