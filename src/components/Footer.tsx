import Image from "next/image";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Get a Free Estimate", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-forest pt-16 pb-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Col 1: Logo + tagline */}
          <div>
            {/* TODO: Replace with transparent background version */}
            <Image
              src="/images/premier-logo.png"
              alt="Premier Lawn & Landscape"
              width={140}
              height={48}
              className="h-12 w-auto"
              unoptimized
            />
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Transforming Southern California yards, one property at a time.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-display text-base font-semibold text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="font-display text-base font-semibold text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <a
                  href="tel:7472409647"
                  className="transition-colors hover:text-white"
                >
                  📞 747-240-9647
                </a>
              </li>
              <li>
                <a
                  href="mailto:premierlawnlandscapeinc@gmail.com"
                  className="transition-colors hover:text-white"
                >
                  ✉️ premierlawnlandscapeinc@gmail.com
                </a>
              </li>
              <li>
                Serving residential &amp; commercial clients throughout Southern
                California
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-white/10 bg-forest-dark py-6">
        <p className="text-center text-xs text-white/50">
          © 2025 Premier Lawn &amp; Landscape Corporation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
