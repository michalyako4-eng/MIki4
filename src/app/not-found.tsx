import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { navLinks } from "@/content/site";
import Link from "next/link";

/**
 * Without this the 404 inherits the homepage title and a canonical pointing at
 * the homepage, while also being noindex. noindex plus a canonical to another
 * URL is a conflicting pair of signals, so the canonical is cleared here.
 */
export const metadata: Metadata = {
  title: "Page not found",
  description: "That page is not here. Links back to the rest of the site.",
  alternates: { canonical: null },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="px-6 pb-16 pt-28">
      <div className="mx-auto w-full max-w-3xl">
        <p className="text-sm font-semibold text-rose">Page not found</p>
        <h1 className="hero-gradient-text mt-4 max-w-[680px] text-5xl font-semibold tracking-tight md:text-6xl">
          This page is not here, but you are
        </h1>
        <p className="mt-8 max-w-[680px] text-lg text-muted">
          Something was mistyped, or a link has moved. Here is the way back.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/">Back to the start</ButtonLink>
          <ButtonLink href="/book" variant="secondary">
            Book a session
          </ButtonLink>
        </div>

        <ul className="mt-12 flex flex-wrap gap-6 border-t border-line pt-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-base text-muted underline-offset-4 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-ink hover:underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
