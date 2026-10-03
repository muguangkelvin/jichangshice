"use client";

import React, { useState } from "react";
import { FAQItem } from "@/data/faqs";
import { HelpCircle, CheckCircle, Search, Tag } from "lucide-react";

interface FAQComponentProps {
  faqs: FAQItem[];
}

export default function FAQComponent({ faqs }: FAQComponentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("全部");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const categories = ["全部", ...Array.from(new Set(faqs.map((f) => f.category)))];

  const filtered = faqs.filter((faq) => {
    const matchCategory = selectedCategory === "全部" || faq.category === selectedCategory;
    const matchSearch =
      !searchTerm.trim() ||
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.detailedAnswer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.keywords.some((k) => k.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchCategory && matchSearch;
  });

  return (
    <div className="space-y-6">
      {/* Category Pills & Search */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-2 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? "bg-brand-600 text-white shadow-sm"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="在 100 项 FAQ 中筛选..."
            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white pl-9 pr-3 py-1.5 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>
      </div>

      <div className="text-xs text-slate-500 font-medium px-1">
        共匹配到 <span className="text-brand-600 font-bold">{filtered.length}</span> 个常见问题（按要求：全部问题均为展开视图）：
      </div>

      {/* Expanded FAQ List */}
      <div className="space-y-4">
        {filtered.map((faq) => (
          <div
            key={faq.id}
            id={faq.slug}
            className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* FAQ Header */}
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center shrink-0 mt-0.5">
                <HelpCircle className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-semibold px-2.5 py-0.5 rounded-md">
                    {faq.category}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">
                    ID: #{faq.id}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {faq.question}
                </h3>
              </div>
            </div>

            {/* EXPANDED Full Detailed Answer */}
            <div className="mt-4 pl-10 text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-2 border-l-2 border-brand-500/30">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <CheckCircle className="w-4 h-4" />
                <span>结论回答与详细指导：</span>
              </div>
              <p>{faq.detailedAnswer}</p>

              {/* Keywords Tagging */}
              <div className="pt-2 flex items-center gap-1.5 flex-wrap">
                <Tag className="w-3.5 h-3.5 text-slate-400" />
                {faq.keywords.map((k) => (
                  <span
                    key={k}
                    className="text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded"
                  >
                    #{k}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
