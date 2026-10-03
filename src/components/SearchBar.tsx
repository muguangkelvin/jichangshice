"use client";

import React, { useState } from "react";
import { Search, X, BookOpen, HelpCircle, ShieldCheck } from "lucide-react";
import { searchAll } from "@/utils/searchEngine";
import Link from "next/link";

function HighlightText({ text, query }: { text: string; query: string }) {
  if (!query.trim() || !text) return <>{text}</>;
  const terms = query
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  if (terms.length === 0) return <>{text}</>;

  try {
    const pattern = terms.join("|");
    const regex = new RegExp(`(${pattern})`, "gi");
    const parts = text.split(regex);

    return (
      <>
        {parts.map((part, i) =>
          regex.test(part) ? (
            <mark
              key={i}
              className="bg-amber-100 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200 font-bold px-0.5 rounded"
            >
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    );
  } catch {
    return <>{text}</>;
  }
}

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const searchResults = searchAll(query);
  const { articles, faqs, providers, totalMatches } = searchResults;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 px-3 py-1.5 rounded-full text-sm font-medium transition-colors border border-slate-200 dark:border-slate-700"
        aria-label="搜索全站文章与FAQ"
      >
        <Search className="w-4 h-4 text-brand-600" />
        <span className="hidden sm:inline">搜索文章/FAQ...</span>
        <span className="sm:hidden">搜索</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in-95">
            <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
              <Search className="w-5 h-5 text-brand-600 shrink-0" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="输入关键词搜索（如：机场推荐, Clash, 延迟, 灵动云, 套餐...）"
                className="w-full bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none text-base"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg"
                aria-label="关闭搜索 modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
              {!query.trim() && (
                <div className="text-center py-8 text-slate-400 text-sm">
                  请输入关键词搜索 300+ 篇机场实测文章、服务商及 100 项 FAQ 问答
                </div>
              )}

              {query.trim() && totalMatches === 0 && (
                <div className="text-center py-8 text-slate-400 text-sm">
                  没有找到与「{query}」相关的内容
                </div>
              )}

              {providers.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    匹配机场服务商
                  </h4>
                  <div className="space-y-2">
                    {providers.map(({ provider }) => (
                      <Link
                        key={provider.slug}
                        href={`/providers/${provider.slug}/`}
                        onClick={() => setIsOpen(false)}
                        className="block p-3 rounded-xl bg-brand-50/50 dark:bg-brand-950/40 hover:bg-brand-100/60 dark:hover:bg-brand-900/50 border border-brand-200/60 dark:border-brand-800/60 transition-colors"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="font-bold text-slate-900 dark:text-white text-sm">
                            <HighlightText text={provider.name} query={query} />
                            <span className="ml-2 text-xs font-normal text-slate-500">
                              (起步价: {provider.priceFrom})
                            </span>
                          </div>
                          <span className="text-xs font-bold text-brand-600 dark:text-brand-400">
                            查看独立测评报告 &rarr;
                          </span>
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-300 line-clamp-1 mt-1">
                          <HighlightText text={provider.summary} query={query} />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {articles.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-brand-600" />
                    相关文章 ({articles.length})
                  </h4>
                  <div className="space-y-2">
                    {articles.map(({ article }) => (
                      <Link
                        key={article.slug}
                        href={`/${article.section}/${article.slug}/`}
                        onClick={() => setIsOpen(false)}
                        className="block p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
                      >
                        <div className="font-medium text-slate-900 dark:text-white text-sm">
                          <HighlightText text={article.title} query={query} />
                        </div>
                        <div className="text-xs text-slate-500 line-clamp-1 mt-1">
                          <HighlightText text={article.summary} query={query} />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {faqs.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
                    相关 FAQ 问答 ({faqs.length})
                  </h4>
                  <div className="space-y-2">
                    {faqs.map(({ faq }) => (
                      <Link
                        key={faq.id}
                        href={`/faq/#${faq.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="block p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
                      >
                        <div className="font-medium text-slate-900 dark:text-white text-sm">
                          <HighlightText text={faq.question} query={query} />
                        </div>
                        <div className="text-xs text-slate-500 line-clamp-1 mt-1">
                          <HighlightText text={faq.shortAnswer} query={query} />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
