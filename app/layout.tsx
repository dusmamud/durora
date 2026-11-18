import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://durora.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Durora Music Festival 2027 | Berlin, 14–16 August",
    template: "%s | Durora Music Festival 2027",
  },
  description:
    "Durora is a three-day music festival in Berlin, 14–16 August 2027. 60+ artists, 5 stages, electronic music, art installations and light shows — featuring Sofia Lane.",
  keywords: [
    "Durora",
    "music festival",
    "Berlin festival",
    "Sofia Lane",
    "August 2027",
    "electronic music",
    "Tempelhofer Feld",
  ],
  authors: [{ name: "Durora" }],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Durora Music Festival",
    title: "Durora Music Festival 2027 | Berlin, 14–16 August",
    description:
      "Three days, five stages, 60+ artists in Berlin. Featuring Sofia Lane. 14–16 August 2027.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Durora Music Festival 2027 — Berlin at sunset",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Durora Music Festival 2027 | Berlin, 14–16 August",
    description:
      "Three days, five stages, 60+ artists in Berlin. Featuring Sofia Lane.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#1a0505",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicEvent",
  name: "Durora Music Festival 2027",
  startDate: "2027-08-14T12:00:00+02:00",
  endDate: "2027-08-16T23:00:00+02:00",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Tempelhofer Feld",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Berlin",
      addressCountry: "DE",
    },
  },
  performer: {
    "@type": "MusicGroup",
    name: "Sofia Lane",
  },
  offers: {
    "@type": "Offer",
    price: "69",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/#tickets`,
  },
  description:
    "A three-day music festival in Berlin combining electronic music, art installations, and light shows. 60+ artists across 5 stages.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable}`}>
      <body className="bg-[#20100c] font-sans text-cream antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
