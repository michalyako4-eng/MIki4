import type { Metadata } from "next";
import { Envelope, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import { ContactForm } from "@/components/ContactForm";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { Scheduler } from "@/components/Scheduler";
import { Venues } from "@/components/Venues";
import { photos, riskReversal, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Book a session",
  description: `Book a Reiki session in ${site.location.city}, or send a message first. Cancel or move any booking up to 24 hours ahead at no cost.`,
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-40 md:pt-48">
        <div className="mx-auto w-full max-w-6xl">
          <h1 className="hero-gradient-text max-w-[680px] text-5xl font-semibold tracking-tight md:text-6xl">
            Book a session
          </h1>
          <p className="mt-8 max-w-[680px] text-lg text-muted">
            Reiki and Access Bars at the studio in Alamo. Sixty minutes is
            $111, ninety minutes is $160, and both practices are priced the
            same. If you would rather ask something first, the form below comes
            straight to me, and calling is always fine.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto w-full max-w-6xl">
          <Scheduler />
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Where to find me
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              Sessions booked here are at the studio in Alamo.
            </p>
          </Reveal>
          <div className="mt-16">
            <Venues />
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-32 border-t border-line bg-sand px-6 py-24"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-16 md:grid-cols-[1fr_1.2fr]">
          <div>
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Or just send me a message
              </h2>
              <p className="mt-6 text-base text-muted">
                Questions about whether Reiki suits what you are dealing with are
                welcome, and you are not committing to anything by asking.
              </p>

              <ul className="mt-10 space-y-4">
                <li className="flex items-start gap-3">
                  <Phone size={20} weight="light" className="mt-1 text-rose" />
                  <a
                    href={site.contact.phoneHref}
                    className="text-base underline-offset-4 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:underline"
                  >
                    {site.contact.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Envelope size={20} weight="light" className="mt-1 text-rose" />
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-base underline-offset-4 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:underline"
                  >
                    {site.contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={20} weight="light" className="mt-1 text-rose" />
                  <span className="text-base text-muted">
                    {site.location.city}, {site.location.region}. Serving{" "}
                    {site.location.serviceArea}.
                  </span>
                </li>
              </ul>

              <p className="mt-10 max-w-md text-sm text-muted">
                {riskReversal.body}
              </p>
            </Reveal>
          </div>

          <div>
            <Reveal className="mb-8">
              <Photo
                src={photos.holdingFeet.src}
                alt={photos.holdingFeet.alt}
                ratio="aspect-[16/10]"
                sizes="(min-width: 768px) 55vw, 100vw"
              />
            </Reveal>
            <Reveal delay={100} className="rounded-2xl border border-line bg-surface p-8">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
