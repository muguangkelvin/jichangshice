import { MetadataRoute } from "next";
import { SITE_SEO_PROFILE } from "@/data/seoProfile";
import { ALL_ARTICLES } from "@/data/articles";
import { ALL_PROVIDERS } from "@/data/providers";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_SEO_PROFILE.domain;
  const now = new Date().toISOString();

  // Static section pages
  const staticPages = [
    "",
    "/test/",
    "/recommend/",
    "/compare/",
    "/ladder/",
    "/guide/",
    "/clients/",
    "/nodes/",
    "/unlock/",
    "/wiki/",
    "/faq/",
    "/services/",
    "/about/",
    "/contact/",
    "/editorial-policy/",
    "/methodology/",
    "/corrections/",
    "/affiliate-disclosure/",
    "/privacy/",
    "/terms/",
    "/disclaimer/",
    "/status/",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Article pages
  const articlePages = ALL_ARTICLES.map((art) => ({
    url: `${baseUrl}/${art.section}/${art.slug}/`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Provider pages
  const providerPages = ALL_PROVIDERS.map((p) => ({
    url: `${baseUrl}/providers/${p.slug}/`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  return [...staticPages, ...articlePages, ...providerPages];
}
