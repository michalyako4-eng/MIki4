"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { logo, navLinks, site } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Lock the page behind the overlay while it is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Main"
        className="relative z-50 mx-auto mt-6 flex w-max max-w-[calc(100vw-32px)] items-center gap-2 rounded-full border border-line bg-white/70 p-2 shadow-[0_1px_24px_rgba(31,27,22,0.06)] backdrop-blur-xl"
      >
        <Link
          href="/"
          aria-label={`${site.businessName}, back to the home page`}
          className="rounded-full px-3 py-2 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-sand active:scale-[0.98]"
        >
          <Image
            src={logo.wordmark.src}
            alt={site.businessName}
            width={logo.wordmark.width}
            height={logo.wordmark.height}
            priority
            className="h-6 w-auto"
          />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isCurrent(link.href) ? "page" : undefined}
                className={`rounded-full px-3 py-2 text-sm font-medium transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-sand active:scale-[0.98] ${
                  isCurrent(link.href) ? "bg-sand text-ink" : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/book"
          className="hidden rounded-full bg-rose px-3 py-2 text-sm font-semibold text-white transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-rose-deep active:scale-[0.98] md:inline-block"
        >
          Book a session
        </Link>

        {/* Hamburger. The two lines rotate into an X, they never disappear. */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative h-10 w-10 shrink-0 rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-sand active:scale-[0.98] md:hidden"
        >
          <span
            className={`absolute left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-ink transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-4"
            }`}
          />
          <span
            className={`absolute left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-ink transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              open ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-6"
            }`}
          />
        </button>
      </nav>

      {/* Screen filling glass overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white/80 backdrop-blur-3xl transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <ul className="flex h-full flex-col justify-center gap-2 px-8">
          {[...navLinks, { label: "Contact", href: "/book#contact" }].map(
            (link, index) => (
              <li
                key={link.href}
                className={`transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  open
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${100 + index * 50}ms` : "0ms" }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className="block py-2 text-4xl font-medium tracking-tight"
                >
                  {link.label}
                </Link>
              </li>
            ),
          )}
        </ul>
      </div>
    </header>
  );
}
