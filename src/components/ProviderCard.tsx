"use client";

import React, { useState } from "react";
import { Provider } from "@/data/providers";
import Link from "next/link";
import { ExternalLink, CheckCircle2, Copy, Check, Star, Zap, Shield, Sparkles } from "lucide-react";

interface ProviderCardProps {
  provider: Provider;
  showRankBadge?: boolean;
}

export default function ProviderCard({ provider, showRankBadge = true }: ProviderCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyCoupon = () => {
    if (provider.coupon) {
      navigator.clipboard.writeText(provider.coupon);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const isTop4 = provider.rank <= 4;

  return (
    <div
      className={`relative bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border transition-all duration-300 hover:shadow-xl ${
        isTop4
          ? "border-brand-500/40 dark:border-brand-500/50 ring-2 ring-brand-500/10 shadow-lg"
          : "border-slate-200 dark:border-slate-800 shadow-sm"
      }`}
    >
      {/* Top 4 Special Highlight Ribbon */}
      {showRankBadge && isTop4 && (
        <div className="absolute -top-3.5 left-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-md flex items-center gap-1 z-10">
          <Star className="w-3.5 h-3.5 fill-white" />
          <span>实测榜单第 {provider.rank} 名</span>
        </div>
      )}

      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 pt-2">
        {/* Left Section: Name, Summary, Badges */}
        <div className="flex-1 space-y-3 min-w-0">
          {/* Header Row: Provider Name, Primary Badge, Last Checked Date */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white whitespace-nowrap shrink-0 break-keep min-w-[80px]">
              {provider.name}
            </h3>
            {provider.isPrimary && (
              <span className="bg-brand-50 dark:bg-brand-950/50 text-brand-700 dark:text-brand-300 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-brand-200 dark:border-brand-800 whitespace-nowrap shrink-0">
                编辑部推荐
              </span>
            )}
            <span className="text-xs text-slate-400 font-mono whitespace-nowrap shrink-0">
              已核验：{provider.lastChecked}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {provider.summary}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
            <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 min-w-0">
              <Zap className="w-4 h-4 text-amber-500 shrink-0" />
              <span className="truncate"><strong>适用：</strong>{provider.suitableFor}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 min-w-0">
              <Sparkles className="w-4 h-4 text-purple-500 shrink-0" />
              <span className="truncate"><strong>AI解锁：</strong>{provider.aiUnlock}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 min-w-0">
              <Shield className="w-4 h-4 text-emerald-500 shrink-0" />
              <span className="truncate"><strong>线路：</strong>{provider.nodesInfo}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 min-w-0">
              <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
              <span className="truncate"><strong>流媒体：</strong>{provider.streamingUnlock}</span>
            </div>
          </div>
        </div>

        {/* Right Section: Price & Prominent Registration Button */}
        <div className="flex flex-col sm:flex-row xl:flex-col items-start sm:items-center xl:items-end justify-between xl:justify-center gap-3 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 w-full xl:w-auto xl:min-w-[210px] shrink-0">
          <div className="text-left sm:text-right w-full sm:w-auto">
            <div className="text-xs text-slate-400 whitespace-nowrap">起步参考价格</div>
            <div className="text-2xl font-black text-brand-600 dark:text-brand-400 whitespace-nowrap">
              {provider.priceFrom}
            </div>
            <div className="text-xs text-slate-500 mt-0.5 whitespace-nowrap">
              基础流量：{provider.trafficFrom}
            </div>
          </div>

          {/* Coupon Display */}
          {provider.coupon && (
            <div className="w-full text-xs bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 p-2 rounded-lg text-amber-900 dark:text-amber-200 flex items-center justify-between gap-2">
              <span className="font-mono font-bold whitespace-nowrap">码: {provider.coupon}</span>
              <button
                onClick={handleCopyCoupon}
                className="flex items-center gap-1 text-[11px] bg-amber-200 dark:bg-amber-800 text-amber-900 dark:text-amber-100 px-2 py-0.5 rounded font-medium hover:bg-amber-300 transition-colors whitespace-nowrap shrink-0"
              >
                {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                {copied ? "已复制" : "复制"}
              </button>
            </div>
          )}

          {/* Prominent Outbound Registration Button with rel="sponsored nofollow noopener" */}
          <div className="w-full space-y-2">
            <a
              href={provider.inviteURL}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-600 via-sky-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-bold py-2.5 px-4 rounded-xl shadow-md shadow-brand-500/20 active:scale-98 transition-all whitespace-nowrap"
            >
              <span>{provider.ctaText}</span>
              <ExternalLink className="w-4 h-4 shrink-0" />
            </a>

            <Link
              href={`/providers/${provider.slug}/`}
              className="w-full block text-center text-xs text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 py-1 transition-colors underline underline-offset-2 whitespace-nowrap"
            >
              查看 {provider.name} 独立测评报告
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
