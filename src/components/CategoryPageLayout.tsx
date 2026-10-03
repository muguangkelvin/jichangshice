import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleCard from "@/components/ArticleCard";
import ProviderCard from "@/components/ProviderCard";
import { TOP_4_PROVIDERS } from "@/data/providers";
import { getArticlesBySection } from "@/data/articles";
import { SITE_SEO_PROFILE } from "@/data/seoProfile";

interface CategoryPageLayoutProps {
  sectionKey: string;
  title: string;
  description: string;
}

export default function CategoryPageLayout({
  sectionKey,
  title,
  description,
}: CategoryPageLayoutProps) {
  const articles = getArticlesBySection(sectionKey);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: title }]} />

      {/* Header Section */}
      <div className="bg-gradient-to-r from-brand-900 via-slate-900 to-indigo-950 rounded-3xl p-8 text-white shadow-xl">
        <div className="max-w-3xl space-y-3">
          <span className="bg-brand-500/20 text-brand-300 text-xs font-bold px-3 py-1 rounded-full border border-brand-500/30">
            {SITE_SEO_PROFILE.brandName} 专题矩阵
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {title}
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            {description}
          </p>
          <div className="pt-2 text-xs text-slate-400">
            全栏目已发布 <span className="text-amber-400 font-bold">{articles.length}</span> 篇深度测试与指导文章
          </div>
        </div>
      </div>

      {/* Embedded Top 4 Core Recommended Providers Section */}
      <div className="space-y-6">
        <div className="border-l-4 border-brand-600 pl-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            编辑部主推四大专线机场（选购前必备参考）
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            在浏览以下专题文章前，您可以直接查看本站实测推荐的前 4 名优质机场
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TOP_4_PROVIDERS.map((provider) => (
            <ProviderCard key={provider.slug} provider={provider} showRankBadge={true} />
          ))}
        </div>
      </div>

      {/* Article Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
          {title} · 专属文章列表
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
