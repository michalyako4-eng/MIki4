import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { logo, photos, site } from "@/content/site";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.businessName} · Reiki and Access Bars in ${site.location.city}, CA`,
    template: `%s · ${site.businessName}`,
  },
  // Kept under 155 characters so it is not truncated in search results.
  description:
    "Reiki and Access Bars in Alamo, California. Gentle touch, or no touch at all, and you stay fully clothed. 60 minutes $111, 90 minutes $160.",
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
    url: "/",
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

/**
 * One linked entity graph, shared by every page.
 *
 * Every node carries an @id so the six copies resolve to one business rather
 * than six anonymous duplicates, and so Service and Person can point at it.
 *
 * Deliberately absent:
 *  - aggregateRating / review: there are no real reviews yet, and inventing
 *    them is a Google spam policy violation.
 *  - openingHoursSpecification and geo: not confirmed with Miki. Fabricated
 *    hours on a local business are worse than no hours.
 *  - any Offer for the Forma Gym sessions: an Offer asserts this business
 *    sells that service, and the site says the opposite.
 */
const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HealthAndBeautyBusiness",
      "@id": `${siteUrl}/#business`,
      name: site.businessName,
      url: siteUrl,
      logo: `${siteUrl}${logo.wordmark.src}`,
      image: [
        `${siteUrl}${photos.inStudio.src}`,
        `${siteUrl}${photos.withBowls.src}`,
        `${siteUrl}${photos.atHead.src}`,
      ],
      telephone: "+1-925-286-4654",
      ...(site.contact.email ? { email: site.contact.email } : {}),
      slogan: site.brandTagline,
      priceRange: "$111-$160",
      currenciesAccepted: "USD",
      description:
        "Reiki and Access Bars sessions with Miki (Michal) Yakobovich, a Reiki Master practising in Alamo, California.",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.location.streetAddress,
        addressLocality: site.location.city,
        addressRegion: site.location.region,
        postalCode: site.location.postalCode,
        addressCountry: "US",
      },
      areaServed: ["Alamo", "Danville", "Walnut Creek"].map((name) => ({
        "@type": "City",
        name,
        address: {
          "@type": "PostalAddress",
          addressRegion: "CA",
          addressCountry: "US",
        },
      })),
      sameAs: [site.social.instagram],
      founder: { "@id": `${siteUrl}/#miki` },
      employee: { "@id": `${siteUrl}/#miki` },
      knowsAbout: [
        "Reiki",
        "Usui Reiki",
        "Access Bars",
        "Sound healing",
        "Energy healing",
      ],
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#miki`,
      name: site.fullName,
      alternateName: ["Miki Yakobovich", "Miki"],
      jobTitle: "Reiki Master",
      description:
        "Usui Reiki Master and Access Bars practitioner in Alamo, California.",
      image: `${siteUrl}${photos.inStudio.src}`,
      url: `${siteUrl}/about`,
      telephone: "+1-925-286-4654",
      worksFor: { "@id": `${siteUrl}/#business` },
      workLocation: { "@id": `${siteUrl}/#studio` },
      sameAs: [site.social.instagram],
      knowsAbout: ["Reiki", "Access Bars", "Sound healing", "Crystal healing"],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "Reiki Master, Usui system",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "Access Bars Practitioner",
        },
      ],
    },
    {
      "@type": "Place",
      "@id": `${siteUrl}/#studio`,
      name: "Reiki Harmony Wellness Studio",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.location.streetAddress,
        addressLocality: site.location.city,
        addressRegion: site.location.region,
        postalCode: site.location.postalCode,
        addressCountry: "US",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: site.businessName,
      inLanguage: "en-US",
      publisher: { "@id": `${siteUrl}/#business` },
    },
  ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
      </body>
    </html>
  );
}
