import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Premier Lawn & Landscape Corporation | Southern California Landscaping",
  description:
    "Professional landscaping, lawn maintenance, tree trimming, hardscaping, and more for residential and commercial properties throughout Southern California. Free estimates — call 747-240-9647.",
  keywords: [
    "landscaping",
    "lawn care",
    "Southern California",
    "tree trimming",
    "hardscaping",
    "sprinkler installation",
    "sod installation",
  ],
  openGraph: {
    title: "Premier Lawn & Landscape Corporation",
    description:
      "Transforming Southern California yards for over 10 years. Residential & commercial. Free estimates.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
