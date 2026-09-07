import { site } from "@/content/site";

/**
 * The public base URL, used for canonical links, the sitemap, robots.txt and
 * social preview images.
 *
 * Note the `||` rather than `??`. A hosting dashboard will happily store an
 * environment variable that is present but empty, and `??` only falls back on
 * null or undefined, so an empty string would pass straight through to
 * `new URL()` and throw at build time. `||` treats empty as absent.
 *
 * The result is also validated, so a typo in the variable degrades to the
 * domain in site.ts instead of failing the build.
 */
function resolveSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  for (const candidate of [fromEnv, site.domain]) {
    if (!candidate) continue;
    try {
      return new URL(candidate).origin;
    } catch {
      // Try the next candidate.
    }
  }

  throw new Error(
    "No usable site URL. Set NEXT_PUBLIC_SITE_URL, or fix `domain` in src/content/site.ts.",
  );
}

export const siteUrl = resolveSiteUrl();
