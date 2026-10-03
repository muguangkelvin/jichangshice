import React from "react";
import { ALL_PROVIDERS, getProviderBySlug } from "@/data/providers";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProviderPlans from "@/components/ProviderPlans";
import ComparisonTable from "@/components/ComparisonTable";
import { notFound } from "next/navigation";
import { ExternalLink, CheckCircle2, ShieldAlert } from "lucide-react";

export function generateStaticParams() {
  return ALL_PROVIDERS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const provider = getProviderBySlug(params.slug);
  if (!provider) return {};
  return {
    title: `${provider.name}机场测评：价格、节点、套餐与购买前须知｜机场实测 MOM`,
    description: `${provider.name}独立测评报告：起步价格${provider.priceFrom}，基础流量${provider.trafficFrom}。节点线路：${provider.nodesInfo}。${provider.summary}`,
  };
}

export default function ProviderDetailPage({ params }: { params: { slug: string } }) {
  const provider = getProviderBySlug(params.slug);
  if (!provider) notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumbs
        items={[
          { label: "本站服务", href: "/services/" },
          { label: `${provider.name} 独立测评` },
        ]}
      />

      {/* Hero Header Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-lg space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-amber-500 text-white font-extrabold text-xs px-2.5 py-0.5 rounded-full">
                实测排名 #{provider.rank}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                核验日期: {provider.lastChecked}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mt-2">
              {provider.name} 机场综合测评报告
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              主打场景：{provider.suitableFor}
            </p>
          </div>

          {/* Prominent Registration CTA button */}
          <a
            href={provider.inviteURL}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-600 via-sky-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-extrabold text-sm px-6 py-3 rounded-2xl shadow-md transition-transform active:scale-95 shrink-0"
          >
            <span>{provider.ctaText}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl space-y-1">
            <div className="text-xs text-slate-400">起步价格</div>
            <div className="text-xl font-bold text-brand-600 dark:text-brand-400">
              {provider.priceFrom}
            </div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl space-y-1">
            <div className="text-xs text-slate-400">初始流量</div>
            <div className="text-xl font-bold text-slate-800 dark:text-slate-200">
              {provider.trafficFrom}
            </div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl space-y-1">
            <div className="text-xs text-slate-400">支持协议</div>
            <div className="text-sm font-bold text-slate-800 dark:text-slate-200 truncate">
              {provider.protocols}
            </div>
          </div>
        </div>

        <div className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-brand-50/50 dark:bg-brand-950/20 p-4 rounded-xl border border-brand-100 dark:border-brand-900">
          <strong>编辑部实测总结：</strong>{provider.summary}
        </div>
      </div>

      {/* Pros & Cons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-emerald-50/50 dark:bg-emerald-950/20 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-900/50 space-y-3">
          <h3 className="font-bold text-emerald-800 dark:text-emerald-300 text-base flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>优势亮点 (Pros)</span>
          </h3>
          <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            {provider.advantages.map((adv, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>{adv}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-amber-50/50 dark:bg-amber-950/20 p-6 rounded-2xl border border-amber-200 dark:border-amber-900/50 space-y-3">
          <h3 className="font-bold text-amber-800 dark:text-amber-300 text-base flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-amber-600" />
            <span>注意事项 (Cons)</span>
          </h3>
          <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            {provider.disadvantages.map((dis, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>{dis}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Provider Details Breakdown Article */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-md space-y-8">
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4">
          {provider.name} 详细线路与解锁评测报告
        </h2>

        <div className="prose dark:prose-invert max-w-none text-sm leading-relaxed text-slate-800 dark:text-slate-200 space-y-6">
          <p>
            在针对 <strong>{provider.name}</strong> 的专项实测中，编辑部对其出口 IP 洁净度、BGP 专线丢包率以及客户端适配能力进行了全面考量。
          </p>

          <div className="space-y-2">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">一、线路覆盖与节点倍率</h3>
            <p className="text-slate-700 dark:text-slate-300">
              {provider.name} 提供的线路包含：{provider.nodesInfo}。在晚高峰时段（20:00 - 23:00），主要节点下行带宽保持稳定，无明显死节点情况。
            </p>
          </div>

          {/* 二、套餐价格与流量 (使用公共 ProviderPlans 组件) */}
          <div className="pt-2">
            <ProviderPlans provider={provider} />
          </div>

          {/* 三、AI 与流媒体解锁表现 */}
          <div className="space-y-2 pt-2">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">三、AI 与流媒体解锁表现</h3>
            <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc pl-5">
              <li>
                <strong>AI 工具解锁：</strong>{provider.aiUnlock}
              </li>
              <li>
                <strong>流媒体平台解锁：</strong>{provider.streamingUnlock}
              </li>
            </ul>
          </div>

          {/* 四、购买与使用前核对清单 */}
          <div className="space-y-2 pt-2">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">四、购买与使用前核对清单</h3>
            <ol className="list-decimal pl-5 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>核对第三方结算页面的实时价格与是否有最新折扣活动。</li>
              <li>在客户端配置时优先选用推荐协议：{provider.protocols}。</li>
              <li>建议首次购买选择月付或季付测试本地运营商连通性。</li>
            </ol>
          </div>
        </div>

        {/* Final CTA Bar */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500">
            准备好使用 {provider.name} 了吗？点击下方注册按钮即刻前往官网：
          </div>
          <a
            href={provider.inviteURL}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-extrabold text-xs px-6 py-2.5 rounded-xl shadow-xs transition-colors shrink-0"
          >
            <span>前往 {provider.name} 官网注册</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* All Providers Comparison Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          与其他 27 家机场对比
        </h3>
        <ComparisonTable />
      </div>
    </div>
  );
}
