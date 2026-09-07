import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { about, photos, site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `Meet ${site.practitioner}, a Usui Reiki Master practising in ${site.location.city}. Nineteen years in hospital administration before the table.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="px-6 pb-24 pt-40 md:pt-48">
        <div className="mx-auto grid w-full max-w-6xl items-start gap-16 md:grid-cols-2">
          <div>
            <h1 className="hero-gradient-text max-w-[680px] text-5xl font-semibold tracking-tight md:text-6xl">
              {about.heading}
            </h1>
            <div className="mt-10 space-y-6">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="max-w-[680px] text-lg text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-10">
              <ButtonLink href="/book">Book a session</ButtonLink>
            </div>
          </div>

          <div className="md:sticky md:top-32">
            <Photo
              src={photos.chimes.src}
              alt={photos.chimes.alt}
              ratio="aspect-[3/4]"
              priority
            />
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-sand px-6 py-24">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Training and background
            </h2>
          </Reveal>
          <Reveal className="mt-12">
            <Photo
              src={photos.inStudio.src}
              alt={photos.inStudio.alt}
              ratio="aspect-[16/10] md:aspect-[21/9]"
              sizes="(min-width: 1024px) 1024px, 100vw"
            />
          </Reveal>

          <ul className="mt-12 grid gap-4 md:grid-cols-2">
            {about.credentials.map((credential, index) => (
              <Reveal
                as="li"
                key={credential}
                delay={index * 60}
                className="rounded-2xl border border-line bg-surface p-6 text-base text-muted"
              >
                {credential}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
