import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { Faq } from "@/components/Faq";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { Venues } from "@/components/Venues";
import {
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
};

export default function ServicesPage() {
  return (
    <>
      <section className="px-6 pb-24 pt-40 md:pt-48">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-16 md:grid-cols-[1.15fr_0.85fr]">
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

      <section className="px-6 pb-24">
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

      <section className="px-6 pb-24">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              {sections.venues}
            </h2>
          </Reveal>
          <div className="mt-16">
            <Venues />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-sand px-6 py-24">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              {sections.steps}
            </h2>
          </Reveal>
          <ol className="mt-16 grid gap-8 md:grid-cols-3">
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

      <section className="px-6 py-24">
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

      <section className="px-6 pb-24">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              {sections.faq}
            </h2>
          </Reveal>
          <div className="mt-16">
            <Faq />
          </div>
        </div>
      </section>
    </>
  );
}
