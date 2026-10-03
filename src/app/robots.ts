import { MetadataRoute } from "next";
import { SITE_SEO_PROFILE } from "@/data/seoProfile";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_SEO_PROFILE.domain}/sitemap.xml`,
  };
}
