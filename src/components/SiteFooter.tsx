import Link from "next/link";
import Image from "next/image";
import { bookLink, logo, navLinks, site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-sand">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Image
              src={logo.lockup.src}
              alt={`${site.businessName} — ${site.brandTagline}`}
              width={logo.lockup.width}
              height={logo.lockup.height}
              className="h-20 w-auto"
            />
            <p className="mt-3 max-w-xs text-sm text-muted">
              Reiki and Access Bars with {site.practitioner}, at Reiki Harmony
              Wellness Studio in {site.location.city} and at the Spa at Forma
              Gym in Walnut Creek.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold">Pages</h2>
            <ul className="mt-3 space-y-2">
              {[...navLinks, bookLink].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted underline-offset-4 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-ink hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold">Get in touch</h2>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="text-sm text-muted underline-offset-4 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-ink hover:underline"
                >
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={site.contact.phoneHref}
                  className="text-sm text-muted underline-offset-4 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-ink hover:underline"
                >
                  {site.contact.phone}
                </a>
              </li>
              {site.social.instagram ? (
                <li>
                  <a
                    href={site.social.instagram}
                    rel="me noopener"
                    className="text-sm text-muted underline-offset-4 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-ink hover:underline"
                  >
                    Instagram {site.social.instagramHandle}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <p className="mt-16 max-w-3xl border-t border-line pt-8 text-xs text-muted">
          Reiki is a complementary practice. It does not diagnose, treat or cure
          any medical condition, and it is never a substitute for care from a
          licensed medical professional. Please keep your doctor informed about
          any complementary therapy you take up.
        </p>

        <div className="mt-8 flex flex-col gap-4 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.businessName}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            <li>
              <Link
                href="/privacy"
                className="underline-offset-4 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-ink hover:underline"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="underline-offset-4 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-ink hover:underline"
              >
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
