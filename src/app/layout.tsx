import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_SEO_PROFILE } from "@/data/seoProfile";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_SEO_PROFILE.domain),
  title: SITE_SEO_PROFILE.siteTitle,
  description: SITE_SEO_PROFILE.siteDescription,
  keywords: SITE_SEO_PROFILE.primaryKeywords.join(", "),
  alternates: {
    canonical: SITE_SEO_PROFILE.domain,
  },
  openGraph: {
    title: SITE_SEO_PROFILE.siteTitle,
    description: SITE_SEO_PROFILE.siteDescription,
    url: SITE_SEO_PROFILE.domain,
    siteName: SITE_SEO_PROFILE.brandName,
    locale: "zh_CN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_SEO_PROFILE.brandName,
    url: SITE_SEO_PROFILE.domain,
    description: SITE_SEO_PROFILE.siteDescription,
    publisher: {
      "@type": "Organization",
      name: SITE_SEO_PROFILE.brandName,
      url: SITE_SEO_PROFILE.domain,
    },
  };

  return (
    <html lang="zh-CN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
