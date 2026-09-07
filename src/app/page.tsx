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
import { Faq } from "@/components/Faq";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { TaglineReveal } from "@/components/TaglineReveal";
import { Venues } from "@/components/Venues";
import {
  benefits,
  faqs,
  hero,
  intro,
  riskReversal,
  sections,
  photos,
  services,
  site,
  steps,
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

/** Plain question and answer pairs, so AI answer engines can quote them. */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function Home() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────────── */}
      <section className="px-6 pb-24 pt-40 md:pt-48">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-16 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h1 className="hero-gradient-text max-w-[680px] text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              {hero.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <p className="mt-8 max-w-[680px] text-lg text-muted">
              {hero.subheadline}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <ButtonLink href={hero.ctaHref}>{hero.ctaLabel}</ButtonLink>
              <ButtonLink href={hero.secondaryHref} variant="secondary">
                {hero.secondaryLabel}
              </ButtonLink>
            </div>

            <p className="mt-8 text-sm text-muted">{hero.proofLine}</p>
          </div>

          <Photo
            src={photos.atTable.src}
            alt={photos.atTable.alt}
            ratio="aspect-[3/4]"
            priority
          />
        </div>
      </section>

      {/* ─── Problem to solution ──────────────────────────────────────── */}
      <section className="border-y border-line bg-sand px-6 py-24">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              {intro.heading}
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-muted">{intro.body}</p>
          </Reveal>
        </div>
      </section>

      {/* ─── Tagline reveal ───────────────────────────────────────────── */}
      <section className="px-6 py-32">
        <div className="mx-auto w-full max-w-6xl">
          <TaglineReveal lines={tagline.lines} />
        </div>
      </section>

      {/* ─── Benefits ─────────────────────────────────────────────────── */}
      <section className="px-6 py-24">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              {sections.benefits}
            </h2>
          </Reveal>

          <ul className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = icons[benefit.icon as keyof typeof icons];
              return (
                <Reveal
                  as="li"
                  key={benefit.title}
                  delay={Math.min(index, 4) * 80}
                  className="rounded-2xl border border-line bg-surface p-8"
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

      {/* ─── How it works ─────────────────────────────────────────────── */}
      <section className="border-y border-line bg-sand px-6 py-24">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              {sections.steps}
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              {sections.stepsNote}
            </p>
          </Reveal>

          <Reveal delay={80} className="mt-16">
            <Photo
              src={photos.hands.src}
              alt={photos.hands.alt}
              ratio="aspect-[16/10] md:aspect-[21/9]"
              sizes="(min-width: 1024px) 1024px, 100vw"
            />
          </Reveal>

          <ol className="mt-8 grid gap-8 md:grid-cols-3">
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

      {/* ─── Sessions and pricing ─────────────────────────────────────── */}
      <section className="px-6 py-24">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              {sections.services}
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              {sections.servicesNote}
            </p>
          </Reveal>

          <ul className="mt-16 grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <Reveal
                as="li"
                key={service.slug}
                delay={Math.min(index, 3) * 80}
                className="flex flex-col rounded-2xl border border-line bg-surface p-8"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {service.name}
                  </h3>
                  {service.price ? (
                    <span className="text-xl font-semibold text-rose">
                      {service.price}
                    </span>
                  ) : null}
                </div>
                {service.duration ? (
                  <p className="mt-2 text-sm text-muted">{service.duration}</p>
                ) : null}
                <p className="mt-4 text-base text-muted">{service.summary}</p>
                <ul className="mt-6 space-y-2">
                  {service.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted">
                      <span aria-hidden="true" className="text-rose">
                        ·
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                {service.bookingNote ? (
                  <p className="mt-auto pt-8 text-sm text-muted">
                    {service.bookingNote}
                  </p>
                ) : null}
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-12">
            <ButtonLink href="/book">Book a session</ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* ─── Proof. Renders only once real testimonials exist. ────────── */}
      {testimonials.length > 0 ? (
        <section className="border-y border-line bg-sand px-6 py-24">
          <div className="mx-auto w-full max-w-6xl">
            <Reveal>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
                In their words
              </h2>
            </Reveal>
            <ul className="mt-16 grid gap-8 md:grid-cols-3">
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
      <section className="border-y border-line bg-sand px-6 py-24">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              {sections.venues}
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              {sections.venuesNote}
            </p>
          </Reveal>
          <div className="mt-16">
            <Venues />
          </div>
        </div>
      </section>

      {/* ─── Risk reversal ────────────────────────────────────────────── */}
      <section className="px-6 py-24">
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

      {/* ─── FAQ ──────────────────────────────────────────────────────── */}
      <section className="px-6 py-24">
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

      {/* ─── Final CTA ────────────────────────────────────────────────── */}
      <section className="border-t border-line bg-sand px-6 py-32">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <h2 className="max-w-[680px] text-4xl font-semibold tracking-tight md:text-5xl">
              {sections.finalCta}
            </h2>
            <p className="mt-8 max-w-[680px] text-lg text-muted">
              {sections.finalCtaBody}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
