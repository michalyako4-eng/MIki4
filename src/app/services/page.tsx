import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { Faq } from "@/components/Faq";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import {
  faqs,
  photos,
  riskReversal,
  sections,
  services,
  steps,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Sessions",
  description:
    "Reiki and Access Bars sessions with Miki at Reiki Harmony Wellness Studio in Alamo. Sixty minutes $111, ninety minutes $160.",
  alternates: { canonical: "/services" },
  openGraph: {
    url: "/services",
    title: "Sessions · Reiki and Access Bars",
  },
  twitter: { title: "Sessions · Reiki and Access Bars" },
};

const SITE = "https://miki4.com";

/** Offers are built from the same `services` data the page renders. */
const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    ...services.map((service) => ({
      "@type": "Service",
      "@id": `${SITE}/services#${service.slug}`,
      name: service.name,
      serviceType: service.name.replace(" session", ""),
      description: service.summary,
      url: `${SITE}/services`,
      image: `${SITE}${service.photo.src}`,
      provider: { "@id": `${SITE}/#business` },
      areaServed: {
        "@type": "City",
        name: "Alamo",
        address: {
          "@type": "PostalAddress",
          addressRegion: "CA",
          addressCountry: "US",
        },
      },
      offers: service.pricing.map((tier) => ({
        "@type": "Offer",
        name: `${tier.duration} ${service.name.toLowerCase()}`,
        price: tier.price.replace("$", ""),
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: `${SITE}/book`,
        seller: { "@id": `${SITE}/#business` },
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: tier.price.replace("$", ""),
          priceCurrency: "USD",
          referenceQuantity: {
            "@type": "QuantitativeValue",
            value: Number(tier.duration.replace(/\D/g, "")),
            unitCode: "MIN",
          },
        },
      })),
    })),
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE}/services#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        {
          "@type": "ListItem",
          position: 2,
          name: "Sessions",
          item: `${SITE}/services`,
        },
      ],
    },
  ],
};

/** Plain question and answer pairs, so AI answer engines can quote them. */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://miki4.com/services#faq",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-28">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h1 className="hero-gradient-text max-w-[680px] text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Reiki and Access Bars
            </h1>
            <p className="mt-8 max-w-[680px] text-lg text-muted">
              Both are priced the same, and both are held at the studio in
              Alamo. You stay fully clothed throughout. Nothing is pressed or
              manipulated, and you can ask me to stop at any point without
              explaining why.
            </p>
            <div className="mt-10">
              <ButtonLink href="/book">Book a session</ButtonLink>
            </div>
          </div>

          <Photo
            src={photos.crystalBowls.src}
            alt={photos.crystalBowls.alt}
            ratio="aspect-[3/4]"
            priority
          />
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto w-full max-w-6xl">
          <ul className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                delay={index * 80}
                headingLevel="h2"
              >
                <ButtonLink href="/book" variant="secondary">
                  Book this
                </ButtonLink>
              </ServiceCard>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-line bg-sand px-6 py-12">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              {sections.steps}
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <Reveal
                as="li"
                key={step.number}
                delay={index * 100}
                className="rounded-2xl border border-line bg-surface p-8"
              >
                <span className="text-sm font-semibold text-rose">
                  {step.number}
                </span>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-base text-muted">{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal className="rounded-2xl border border-line bg-rose-soft p-12">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight">
              {riskReversal.title}
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              {riskReversal.body}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              {sections.faq}
            </h2>
          </Reveal>
          <div className="mt-12">
            <Faq />
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
