import React from "react";
import Link from "next/link";
import { Article } from "@/data/articles";
import { Clock, Eye, Calendar, ArrowRight } from "lucide-react";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="group bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-brand-500/40 transition-all flex flex-col justify-between">
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300 font-semibold px-2.5 py-0.5 rounded-full border border-brand-200 dark:border-brand-800">
            {article.section}
          </span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>
        </div>

        <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors line-clamp-2">
          <Link href={`/${article.section}/${article.slug}/`}>
            {article.title}
          </Link>
        </h3>

        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">
          {article.summary}
        </p>
      </div>

      <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
        <div className="flex items-center gap-1 text-xs text-slate-400">
          <Eye className="w-3.5 h-3.5" />
          <span>{article.views} 次阅读</span>
        </div>
        <Link
          href={`/${article.section}/${article.slug}/`}
          className="text-xs font-bold text-brand-600 dark:text-brand-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
        >
          <span>阅读正文</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
