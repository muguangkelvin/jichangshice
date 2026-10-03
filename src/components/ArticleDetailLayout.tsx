import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProviderCard from "@/components/ProviderCard";
import TOC from "@/components/TOC";
import ArticleCard from "@/components/ArticleCard";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { Article, ALL_ARTICLES } from "@/data/articles";
import { TOP_4_PROVIDERS } from "@/data/providers";
import { Clock, Calendar, User, Tag, ExternalLink } from "lucide-react";

interface ArticleDetailLayoutProps {
  article: Article;
}

export default function ArticleDetailLayout({ article }: ArticleDetailLayoutProps) {
  const relatedArticles = ALL_ARTICLES.filter(
    (a) => a.section === article.section && a.slug !== article.slug
  ).slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs
        items={[
          { label: article.section, href: `/${article.section}/` },
          { label: article.title },
        ]}
      />

      {/* Title & Metadata Header */}
      <div className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          {article.title}
        </h1>

        <div className="flex items-center gap-4 text-xs text-slate-500 flex-wrap">
          <span className="flex items-center gap-1">
            <User className="w-3.5 h-3.5" />
            {article.author}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {article.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}（在 2500 字以内）
          </span>
          <span className="bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 font-semibold px-2 py-0.5 rounded">
            {article.section}
          </span>
        </div>

        {/* Article Summary Box */}
        <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
          <strong>摘要：</strong>{article.summary}
        </div>
      </div>

      {/* Table of Contents */}
      <TOC />

      {/* Core Standout Section: Top 4 Recommended Providers with Eye-Catching Registration Buttons */}
      <div className="my-8 p-6 bg-gradient-to-br from-brand-50 via-white to-sky-50 dark:from-slate-900 dark:to-slate-950 rounded-3xl border border-brand-200 dark:border-brand-800 shadow-md space-y-6">
        <div className="border-b border-brand-200 dark:border-brand-800 pb-3">
          <h2 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <span>2026 编辑部四大主推机场推荐（区别对比与注册入口）</span>
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            本文为您精准区分灵动云、暮光网络、飞猫云与微风网络四大机场的核心优势与最佳人群：
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TOP_4_PROVIDERS.map((provider) => (
            <div
              key={provider.slug}
              className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-sm font-extrabold text-slate-900 dark:text-white whitespace-nowrap shrink-0 break-keep">
                    #{provider.rank} {provider.name}
                  </span>
                  <span className="text-xs font-black text-brand-600 whitespace-nowrap shrink-0">
                    {provider.priceFrom}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {provider.summary}
                </p>
                <div className="text-[11px] text-purple-600 dark:text-purple-400 font-medium">
                  <strong>特色：</strong>{provider.suitableFor}
                </div>
              </div>

              {/* Eye-catching Registration Button with rel="sponsored nofollow noopener" */}
              <a
                href={provider.inviteURL}
                target="_blank"
                rel="sponsored nofollow noopener"
                className="w-full flex items-center justify-center gap-1.5 bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow-sm transition-all whitespace-nowrap"
              >
                <span>{provider.ctaText}</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Body rendered via MarkdownRenderer */}
      <article className="max-w-none">
        <MarkdownRenderer content={article.content} />
      </article>

      {/* Tags */}
      <div className="flex items-center gap-2 flex-wrap pt-6 border-t border-slate-200 dark:border-slate-800">
        <Tag className="w-4 h-4 text-slate-400" />
        {article.keywords.map((k) => (
          <span
            key={k}
            className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full font-medium"
          >
            #{k}
          </span>
        ))}
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="pt-8 space-y-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            相关推荐文章
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <ArticleCard key={rel.slug} article={rel} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
