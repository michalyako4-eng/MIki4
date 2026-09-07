import Link from "next/link";
import {
  Flower,
  HandsPraying,
  Heartbeat,
  Leaf,
  Moon,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";
import { ButtonLink } from "@/components/Button";
import { Photo } from "@/components/Photo";
import { Modalities } from "@/components/Modalities";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { TaglineReveal } from "@/components/TaglineReveal";
import { Venues } from "@/components/Venues";
import {
  benefits,
  hero,
  intro,
  riskReversal,
  sections,
  photos,
  services,
  site,
  tagline,
  testimonials,
} from "@/content/site";

const icons = {
  moon: Moon,
  heartbeat: Heartbeat,
  handsPraying: HandsPraying,
  leaf: Leaf,
  flower: Flower,
} as const;

export default function Home() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────────── */}
      <section className="px-6 pb-16 pt-28">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h1 className="max-w-[680px] text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              {hero.headline.map((line) => (
                <span key={line} className="hero-gradient-text block">
                  {/* Trailing space so extractors and screen readers do not
                      run the lines together. */}
                  {line}{" "}
                </span>
              ))}
              <span className="mt-4 block text-lg font-medium text-muted sm:text-xl">
                {hero.headlineDescriptor}
              </span>
            </h1>

            <p className="mt-8 max-w-[680px] text-lg text-muted">
              {hero.subheadline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href={hero.ctaHref}>{hero.ctaLabel}</ButtonLink>
              <ButtonLink href={hero.secondaryHref} variant="secondary">
                {hero.secondaryLabel}
              </ButtonLink>
            </div>

            <p className="mt-8 text-sm text-muted">{hero.proofLine}</p>
          </div>

          <Photo
            src={photos.atHead.src}
            alt={photos.atHead.alt}
            ratio="aspect-[3/4]"
            priority
          />
        </div>
      </section>

      {/* ─── Problem to solution ──────────────────────────────────────── */}
      <section className="border-y border-line bg-sand px-6 py-12">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              {intro.heading}
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-muted">{intro.body}</p>
          </Reveal>
          <Reveal delay={100}>
            <Photo
              src={photos.withBowls.src}
              alt={photos.withBowls.alt}
              ratio="aspect-[4/3]"
            />
          </Reveal>
        </div>
      </section>

      {/* ─── Tagline reveal ───────────────────────────────────────────── */}
      <section className="px-6 py-20">
        <div className="mx-auto w-full max-w-6xl">
          <TaglineReveal lines={tagline.lines} />
        </div>
      </section>

      {/* ─── Benefits ─────────────────────────────────────────────────── */}
      <section className="px-6 py-12">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              {sections.benefits}
            </h2>
          </Reveal>

          <ul className="mt-12 flex flex-wrap justify-center gap-8">
            {benefits.map((benefit, index) => {
              const Icon = icons[benefit.icon as keyof typeof icons];
              return (
                <Reveal
                  as="li"
                  key={benefit.title}
                  delay={Math.min(index, 4) * 80}
                  className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-21.334px)] rounded-2xl border border-line bg-surface p-8"
                >
                  <Icon size={28} weight="light" className="text-rose" />
                  <h3 className="mt-6 text-xl font-semibold tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-base text-muted">{benefit.body}</p>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ─── Modalities ───────────────────────────────────────────────── */}
      <section className="px-6 py-12">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              {sections.modalities}
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              {sections.modalitiesNote}
            </p>
          </Reveal>
          <div className="mt-12">
            <Modalities />
          </div>
        </div>
      </section>

      {/* ─── Sessions ─────────────────────────────────────────────────── */}
      <section className="px-6 py-12">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              {sections.services}
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              {sections.servicesNote}
            </p>
          </Reveal>

          <ul className="mt-12 grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                delay={index * 80}
                summaryOnly
              />
            ))}
          </ul>

          <Reveal className="mt-12 flex flex-wrap gap-3">
            <ButtonLink href="/services">What each session involves</ButtonLink>
            <ButtonLink href="/book" variant="secondary">
              Book a session
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* ─── Proof. Renders only once real testimonials exist. ────────── */}
      {testimonials.length > 0 ? (
        <section className="border-y border-line bg-sand px-6 py-12">
          <div className="mx-auto w-full max-w-6xl">
            <Reveal>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
                In their words
              </h2>
            </Reveal>
            <ul className="mt-12 grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Reveal
                  as="li"
                  key={testimonial.quote}
                  delay={index * 80}
                  className="rounded-2xl border border-line bg-surface p-8"
                >
                  <blockquote className="text-base text-ink">
                    {testimonial.quote}
                  </blockquote>
                  <p className="mt-6 text-sm font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted">{testimonial.context}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* ─── Where to find me ─────────────────────────────────────────── */}
      <section className="border-y border-line bg-sand px-6 py-12">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              {sections.venues}
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              {sections.venuesNote}
            </p>
          </Reveal>
          <div className="mt-12">
            <Venues />
          </div>
        </div>
      </section>

      {/* ─── Risk reversal ────────────────────────────────────────────── */}
      <section className="px-6 py-12">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal className="rounded-2xl border border-line bg-rose-soft p-12">
            <ShieldCheck size={28} weight="light" className="text-rose-deep" />
            <h2 className="mt-6 max-w-2xl text-3xl font-semibold tracking-tight">
              {riskReversal.title}
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              {riskReversal.body}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── Final CTA ────────────────────────────────────────────────── */}
      <section className="border-t border-line bg-sand px-6 py-20">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <h2 className="max-w-[680px] text-4xl font-semibold tracking-tight md:text-5xl">
              {sections.finalCta}
            </h2>
            <p className="mt-8 max-w-[680px] text-lg text-muted">
              {sections.finalCtaBody}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="/book">Book a session</ButtonLink>
              <a
                href={site.contact.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-surface px-3 py-2 text-base font-semibold transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white active:scale-[0.98]"
              >
                {site.contact.phone}
              </a>
            </div>
            <p className="mt-8 text-sm text-muted">
              Not sure which session?{" "}
              <Link
                href="/services"
                className="underline underline-offset-4 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-ink"
              >
                Read what each one involves
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

    </>
  );
}
