import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? site.domain;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/about", "/book", "/privacy", "/terms"];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : route === "/book" ? 0.9 : 0.7,
  }));
}
