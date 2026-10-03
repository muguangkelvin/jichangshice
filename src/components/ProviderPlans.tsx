"use client";

import React, { useState } from "react";
import { Provider } from "@/data/providers";
import { ExternalLink, Copy, Check, Ticket, Sparkles, AlertCircle, HelpCircle } from "lucide-react";

interface ProviderPlansProps {
  provider: Provider;
}

export default function ProviderPlans({ provider }: ProviderPlansProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyCoupon = () => {
    if (provider.coupon) {
      navigator.clipboard.writeText(provider.coupon);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Build plans list fallback if no explicit plans array provided
  const plans = provider.plans && provider.plans.length > 0
    ? provider.plans
    : [
        {
          name: "基础体验套餐",
          price: provider.priceFrom,
          traffic: provider.trafficFrom,
          period: "月付",
          suitableFor: provider.suitableFor || "日常科学上网、网页浏览与基础使用",
          features: ["提供核心常用节点", "基础客服支持", "主流客户端兼容"],
          isPopular: true,
        },
      ];

  const hasFullPlans = provider.plans && provider.plans.length >= 3;

  return (
    <div className="space-y-6">
      {/* 模块标题与来源说明 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            二、套餐价格与流量
          </h2>
        </div>
        <span className="text-xs text-slate-500 font-mono">
          价格核验时间：{provider.lastChecked || "2026-10-02"}
        </span>
      </div>

      {/* 桌面端大屏幕：套餐表格 */}
      <div className="hidden sm:block overflow-x-auto bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200">
              <th className="py-3.5 px-4 font-bold">套餐名称</th>
              <th className="py-3.5 px-4 font-bold">价格</th>
              <th className="py-3.5 px-4 font-bold">流量额度</th>
              <th className="py-3.5 px-4 font-bold">付款周期</th>
              <th className="py-3.5 px-4 font-bold">适合人群与场景</th>
              <th className="py-3.5 px-4 font-bold text-center">官网直达</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {plans.map((plan, idx) => (
              <tr
                key={idx}
                className={`hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors ${
                  plan.isPopular ? "bg-brand-50/20 dark:bg-brand-950/20" : ""
                }`}
              >
                <td className="py-3.5 px-4 font-bold text-slate-900 dark:text-white whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <span>{plan.name}</span>
                    {plan.isPopular && (
                      <span className="text-[10px] bg-amber-500 text-white font-extrabold px-1.5 py-0.5 rounded">
                        推荐
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-3.5 px-4 font-black text-brand-600 dark:text-brand-400 whitespace-nowrap">
                  {plan.price}
                  {plan.originalPrice && (
                    <span className="ml-1 text-[11px] text-slate-400 line-through font-normal">
                      {plan.originalPrice}
                    </span>
                  )}
                </td>
                <td className="py-3.5 px-4 text-slate-800 dark:text-slate-200 font-bold whitespace-nowrap">
                  {plan.traffic}
                </td>
                <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300 whitespace-nowrap">
                  <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-[11px]">
                    {plan.period}
                  </span>
                </td>
                <td className="py-3.5 px-4 text-slate-600 dark:text-slate-300 max-w-[240px]">
                  {plan.suitableFor}
                </td>
                <td className="py-3.5 px-4 text-center whitespace-nowrap">
                  <a
                    href={provider.inviteURL}
                    target="_blank"
                    rel="sponsored nofollow noopener"
                    className="inline-flex items-center gap-1 bg-brand-600 hover:bg-brand-500 text-white font-bold text-[11px] px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <span>官网查看</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 移动端手机屏幕 (<640px)：套餐卡片列表 */}
      <div className="sm:hidden space-y-3">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-xl border space-y-3 bg-white dark:bg-slate-900 ${
              plan.isPopular
                ? "border-brand-500 dark:border-brand-500 ring-1 ring-brand-500/20"
                : "border-slate-200 dark:border-slate-800"
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-slate-900 dark:text-white text-sm">
                  {plan.name}
                </span>
                {plan.isPopular && (
                  <span className="text-[10px] bg-amber-500 text-white font-extrabold px-1.5 py-0.5 rounded">
                    热门推荐
                  </span>
                )}
              </div>
              <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded">
                {plan.period}
              </span>
            </div>

            <div className="flex items-baseline justify-between pt-1">
              <div>
                <span className="text-xs text-slate-400">套餐价格：</span>
                <span className="text-lg font-black text-brand-600 dark:text-brand-400">
                  {plan.price}
                </span>
              </div>
              <div>
                <span className="text-xs text-slate-400">额度：</span>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                  {plan.traffic}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-lg">
              <strong>适用人群：</strong>{plan.suitableFor}
            </p>

            <a
              href={provider.inviteURL}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="w-full inline-flex items-center justify-center gap-1.5 bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs py-2 rounded-lg transition-colors"
            >
              <span>前往官网选择此套餐</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>

      {/* 未完全展开套餐时的引导提示 */}
      {!hasFullPlans && (
        <div className="text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between flex-wrap gap-2">
          <span>如需查看 {provider.name} 更多进阶/大流量/不限时套餐及最新促销折扣，请前往官方页面：</span>
          <a
            href={provider.inviteURL}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="text-brand-600 dark:text-brand-400 font-bold hover:underline inline-flex items-center gap-1"
          >
            <span>查看完整套餐列表</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      )}

      {/* 怎么选？指南模块 */}
      <div className="bg-brand-50/40 dark:bg-brand-950/20 border border-brand-100 dark:border-brand-900 rounded-xl p-4 space-y-2">
        <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm flex items-center gap-1.5">
          <HelpCircle className="w-4 h-4 text-brand-600 dark:text-brand-400" />
          <span>{provider.name} 套餐应该怎么选？</span>
        </h4>
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          {provider.selectionGuide ? (
            provider.selectionGuide
          ) : (
            `轻度网页浏览与文字 AI 对话推荐选择【${plans[0].name}】；若需观看 4K 高清视频、进行大文件传输或多设备并发使用，建议选择大流量或专线进阶套餐。建议首次购买优先选择【月付】进行本地网络实测。`
          )}
        </p>
      </div>

      {/* 真实优惠码模块（存在优惠码时独占展示） */}
      {provider.coupon && (
        <div className="bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-bold text-amber-900 dark:text-amber-300">
              <Ticket className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{provider.name} 专属优惠码与活动</span>
            </div>
            {provider.couponNote && (
              <p className="text-amber-800/80 dark:text-amber-400 leading-normal">
                {provider.couponNote}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
            <span className="bg-white dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-amber-300 dark:border-amber-800 font-mono font-black text-amber-700 dark:text-amber-300 text-sm">
              {provider.coupon}
            </span>
            <button
              onClick={handleCopyCoupon}
              className="inline-flex items-center gap-1 bg-amber-600 hover:bg-amber-500 text-white font-bold px-3 py-1.5 rounded-lg transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>已复制</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>复制优惠码</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* 套餐变动小字提示 */}
      <div className="flex items-center gap-1.5 text-[11px] text-slate-400 pt-1">
        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
        <span>
          套餐价格、流量及促销活动可能随时调整，实际购买信息请以服务商当前官方页面为准。
        </span>
      </div>
    </div>
  );
}
