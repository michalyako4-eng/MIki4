import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site, venues } from "@/content/site";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? site.domain;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.businessName} · Reiki in ${site.location.city} and Walnut Creek`,
    template: `%s · ${site.businessName}`,
  },
  description:
    "Reiki and Access Bars sessions with Miki, at Reiki Harmony Wellness Studio in Alamo and at the Spa at Forma Gym in Walnut Creek. Gentle touch or no touch, and you stay fully clothed.",
  keywords: [
    "Reiki",
    "Reiki Alamo",
    "Reiki Walnut Creek",
    "Access Bars",
    "energy healing",
    "sound healing",
    "complementary therapy",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: site.businessName,
    title: `${site.businessName} · ${site.brandTagline}`,
    description:
      "A space to slow down, reconnect, and simply receive care. Reiki and Access Bars in Alamo and Walnut Creek.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.businessName} · ${site.brandTagline}`,
    description:
      "A space to slow down, reconnect, and simply receive care. Reiki and Access Bars in Alamo and Walnut Creek.",
  },
  robots: { index: true, follow: true },
};

/** Tells Google and AI answer engines this is a real local business. */
const localBusiness = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: site.businessName,
  alternateName: site.fullName,
  url: siteUrl,
  email: site.contact.email,
  telephone: site.contact.phone,
  slogan: site.brandTagline,
  description:
    "Reiki and Access Bars sessions with Miki (Michal) Yakobovich, a Reiki Master practising in Alamo and Walnut Creek, California.",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.location.streetAddress,
    addressLocality: site.location.city,
    addressRegion: site.location.region,
    postalCode: site.location.postalCode,
    addressCountry: "US",
  },
  areaServed: site.location.serviceArea,
  sameAs: [site.social.instagram],
  makesOffer: venues.map((venue) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: `Reiki at ${venue.name}`,
      areaServed: venue.locality,
    },
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-3 focus:py-2 focus:text-base focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
      </body>
    </html>
  );
}
