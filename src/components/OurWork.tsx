"use client";

import Image from "next/image";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

interface Project {
  title: string;
  description: string;
  before: string;
  after: string;
  beforePosition?: string;
  afterPosition?: string;
  beforeFit?: "contain" | "cover";
  afterFit?: "contain" | "cover";
}

const projects: Project[] = [
  {
    title: "Backyard Landscape Transformation",
    description: "Complete backyard overhaul with turf, river rock, and stepping stone pathways.",
    before: "/images/work/landscape-before.jpeg",
    after: "/images/work/landscape-after.jpeg",
    afterFit: "contain",
  },
  {
    title: "Front Yard Landscaping",
    description: "Overgrown front yard replaced with fresh turf, decorative rock borders, and new plantings.",
    before: "/images/work/frontyard-before.jpg",
    after: "/images/work/frontyard-after.jpeg",
    beforePosition: "top",
  },
  {
    title: "Tree Trimming",
    description: "Large eucalyptus tree professionally trimmed for health, safety, and curb appeal.",
    before: "/images/work/tree-before.jpg",
    after: "/images/work/tree-after.jpg",
  },
  {
    title: "Fence Installation",
    description: "Old fencing removed and replaced with a clean white picket fence and brick columns.",
    before: "/images/work/fence-before.jpeg",
    after: "/images/work/fence-after.jpeg",
  },
];

const gallery = [
  { src: "/images/work/gallery-yard.jpeg", alt: "Beautifully maintained yard with hedges and lush green lawn" },
  { src: "/images/work/gallery-frontyard.jpeg", alt: "Manicured front yard with trimmed hedges and green lawn" },
  { src: "/images/work/gallery-lawn-1.jpeg", alt: "Large green lawn freshly mowed with clean edges" },
  { src: "/images/work/gallery-lawn-2.jpeg", alt: "Residential front yard with pristine green lawn" },
  { src: "/images/work/gallery-lawn-3.jpeg", alt: "Lush green backyard lawn with mature landscaping" },
];

function BeforeAfterCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [showAfter, setShowAfter] = useState(true);

  return (
    <ScrollReveal delay={index * 0.15}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
        {/* Image area */}
        <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
          {/* Before image */}
          <Image
            src={project.before}
            alt={`${project.title} — before`}
            fill
            className={`${project.beforeFit === "contain" ? "object-contain" : "object-cover"} transition-opacity duration-500 ${showAfter ? "opacity-0" : "opacity-100"}`}
            style={project.beforePosition ? { objectPosition: project.beforePosition } : undefined}
            loading="lazy"
            unoptimized
          />
          {/* After image */}
          <Image
            src={project.after}
            alt={`${project.title} — after`}
            fill
            className={`${project.afterFit === "contain" ? "object-contain" : "object-cover"} transition-opacity duration-500 ${showAfter ? "opacity-100" : "opacity-0"}`}
            style={project.afterPosition ? { objectPosition: project.afterPosition } : undefined}
            loading="lazy"
            unoptimized
          />

          {/* Toggle buttons */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex rounded-full bg-black/60 backdrop-blur-sm p-1 gap-1">
            <button
              onClick={() => setShowAfter(false)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                !showAfter
                  ? "bg-white text-forest shadow-md"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Before
            </button>
            <button
              onClick={() => setShowAfter(true)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                showAfter
                  ? "bg-sage text-white shadow-md"
                  : "text-white/80 hover:text-white"
              }`}
            >
              After
            </button>
          </div>
        </div>

        {/* Caption */}
        <div className="p-6">
          <h3 className="font-display text-xl font-bold text-forest">
            {project.title}
          </h3>
          <p className="mt-2 text-warm-gray leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function OurWork() {
  return (
    <section id="our-work" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-forest">
            See the difference for yourself.
          </h2>
          <p className="mt-4 text-lg text-warm-gray max-w-2xl mx-auto">
            Real projects. Real results. Tap to toggle between before and after.
          </p>
        </ScrollReveal>

        {/* Before / After grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <BeforeAfterCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Gallery strip */}
        <ScrollReveal delay={0.2} className="mt-16">
          <h3 className="font-display text-2xl font-bold text-forest text-center">
            More of our work
          </h3>
          <div className="mt-8 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {gallery.map((img) => (
              <div
                key={img.src}
                className="relative flex-none w-72 sm:w-80 aspect-[4/3] rounded-xl overflow-hidden snap-start"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.3} className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-forest px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-forest-dark hover:shadow-xl"
          >
            Get a Free Estimate
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
