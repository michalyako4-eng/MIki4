import type { Metadata } from "next";
import { Envelope, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import { ContactForm } from "@/components/ContactForm";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { Venues } from "@/components/Venues";
import { photos, riskReversal, sections, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Book a session",
  description:
    "Book a Reiki or Access Bars session with Miki in Alamo. Sixty minutes $111, ninety minutes $160. Call, or send a message and she will reply within a day.",
  alternates: { canonical: "/book" },
  openGraph: {
    url: "/book",
    title: "Book a session",
  },
  twitter: { title: "Book a session" },
};

export default function BookPage() {
  return (
    <>
      <section className="px-6 pb-12 pt-28">
        <div className="mx-auto w-full max-w-6xl">
          <h1 className="hero-gradient-text max-w-[680px] text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Book a session
          </h1>
          <p className="mt-8 max-w-[680px] text-lg text-muted">
            Reiki and Access Bars at the studio in Alamo. Sixty minutes is $111,
            ninety minutes is $160, and both are priced the same. Sessions are
            arranged with me directly, so call or send a message and I will come
            back to you within a day.
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            <li>
              <a
                href={site.contact.phoneHref}
                className="inline-flex items-center gap-3 text-lg font-semibold underline-offset-4 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-rose-deep hover:underline"
              >
                <Phone size={22} weight="light" className="text-rose" />
                {site.contact.phone}
              </a>
            </li>
            {site.contact.email ? (
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="inline-flex items-center gap-3 text-lg underline-offset-4 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-rose-deep hover:underline"
                >
                  <Envelope size={22} weight="light" className="text-rose" />
                  {site.contact.email}
                </a>
              </li>
            ) : null}
            <li className="inline-flex items-center gap-3 text-lg text-muted">
              <MapPin size={22} weight="light" className="text-rose" />
              {site.location.city}, {site.location.region}
            </li>
          </ul>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto w-full max-w-6xl">
          <Photo
            src={photos.holdingFeet.src}
            alt={photos.holdingFeet.alt}
            ratio="aspect-[16/10] md:aspect-[21/9]"
            sizes="(min-width: 1024px) 1024px, 100vw"
            priority
          />
        </div>
      </section>

      {/* ─── The form, full width ───────────────────────────────────────── */}
      <section
        id="contact"
        className="scroll-mt-32 border-y border-line bg-sand px-6 py-12"
      >
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              Send me a message
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              Questions about whether Reiki suits what you are dealing with are
              welcome, and you are not committing to anything by asking.
            </p>
          </Reveal>

          <Reveal
            delay={80}
            className="mt-12 rounded-2xl border border-line bg-surface p-8 md:p-12"
          >
            <ContactForm />
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-8 max-w-3xl text-sm text-muted">
              {riskReversal.body}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {sections.venues}
            </h2>
          </Reveal>
          <div className="mt-12">
            <Venues />
          </div>
        </div>
      </section>
    </>
  );
}
