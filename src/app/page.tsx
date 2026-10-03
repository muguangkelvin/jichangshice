import React from "react";
import Link from "next/link";
import { SITE_SEO_PROFILE } from "@/data/seoProfile";
import { TOP_4_PROVIDERS, OTHER_PROVIDERS } from "@/data/providers";
import ProviderCard from "@/components/ProviderCard";
import ComparisonTable from "@/components/ComparisonTable";
import ArticleCard from "@/components/ArticleCard";
import { ALL_ARTICLES } from "@/data/articles";
import { ALL_FAQS } from "@/data/faqs";
import { ShieldCheck, Zap, ArrowRight, HelpCircle, Star, Sparkles, Send, CheckCircle2 } from "lucide-react";

export default function HomePage() {
  const latestArticles = ALL_ARTICLES.slice(0, 6);
  const featuredFAQs = ALL_FAQS.slice(0, 6);

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 border-b border-slate-200/60 dark:border-slate-800 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-brand-100 dark:bg-brand-950/80 text-brand-700 dark:text-brand-300 text-xs font-extrabold px-3.5 py-1.5 rounded-full border border-brand-200 dark:border-brand-800 mb-6 shadow-xs">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>2026年最新中文机场实测 · Clash 机场测评 · 节点选择</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
            {SITE_SEO_PROFILE.siteH1}
          </h1>

          {/* Hero High CTR & Long-Tail Keywords Injected Paragraph */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-3xl mx-auto">
            {SITE_SEO_PROFILE.heroLongTailText}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/recommend/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-600 via-sky-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-extrabold text-base px-8 py-3.5 rounded-2xl shadow-lg shadow-brand-500/25 transition-all"
            >
              <span>查看 2026 机场推荐总榜</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href={TOP_4_PROVIDERS[0].inviteURL}
              target="_blank"
              rel="sponsored nofollow noopener"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-bold text-base px-7 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 transition-colors shadow-xs"
            >
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>直接看榜一【灵动云】套餐</span>
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-500 dark:text-slate-400 flex-wrap">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              人工测速与核验
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              支持 iOS/Android/Windows/Mac
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              透明合作披露
            </span>
          </div>
        </div>
      </section>

      {/* Featured Flagship Article Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-brand-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-brand-800/80 shadow-xl space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 text-xs font-bold px-3.5 py-1.5 rounded-full border border-brand-500/30">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>本站重磅实测指南 · 2026 新手必读</span>
            </div>
            <span className="text-xs text-slate-400">分类：机场实测 · 2026-10-02</span>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
              <Link href="/test/test-jichang-shice-2026-guide/" className="hover:text-brand-300 transition-colors">
                机场实测：2026 机场推荐、测速与科学上网新手指南
              </Link>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl">
              第一次接触机场的新手，很容易陷入一个误区：看到“高速节点”“专线”“流媒体解锁”“低延迟”等宣传，就认为价格越贵、节点越多的机场一定越好。实际上，真正影响日常体验的往往不是某一个漂亮参数，而是线路质量、晚高峰稳定性、套餐流量、节点覆盖、客户端兼容性以及自己的实际使用需求。
            </p>
          </div>

          {/* Quick Outline Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs">
            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60 text-slate-300">
              <div className="font-bold text-white mb-0.5">一、节点数量</div>
              <span className="text-[11px] text-slate-400">别急看节点数，够用稳定才好</span>
            </div>
            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60 text-slate-300">
              <div className="font-bold text-white mb-0.5">二、实测维度</div>
              <span className="text-[11px] text-slate-400">看延迟、晚高峰与真实吞吐</span>
            </div>
            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60 text-slate-300">
              <div className="font-bold text-white mb-0.5">三、中转线路</div>
              <span className="text-[11px] text-slate-400">IEPL / IPLC / BGP 怎么看</span>
            </div>
            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60 text-slate-300">
              <div className="font-bold text-white mb-0.5">四、套餐价格</div>
              <span className="text-[11px] text-slate-400">便宜不一定差，短周期测试</span>
            </div>
            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60 text-slate-300">
              <div className="font-bold text-white mb-0.5">六、新手流程</div>
              <span className="text-[11px] text-slate-400">客户端、TUN模式与配置</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
            <div className="text-xs text-slate-400">
              包含从选节点、跑分测速、协议原理到 Clash / Shadowrocket 客户端全套教学
            </div>
            <Link
              href="/test/test-jichang-shice-2026-guide/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-extrabold text-sm px-6 py-3 rounded-2xl shadow-md transition-all whitespace-nowrap"
            >
              <span>阅读正文（查看完整 10 章指南）</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Top 4 Recommended Providers Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="text-xs font-bold text-brand-600 uppercase tracking-wider">
              TOP 4 核心精选
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              2026 机场实测推荐榜：编辑部重点主推四大机场
            </h2>
          </div>
          <Link
            href="/recommend/"
            className="hidden sm:flex items-center gap-1 text-sm font-bold text-brand-600 hover:text-brand-500"
          >
            <span>查看完整列表</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {TOP_4_PROVIDERS.map((provider) => (
            <ProviderCard key={provider.slug} provider={provider} showRankBadge={true} />
          ))}
        </div>
      </section>

      {/* Full Comparison Table Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <div className="text-xs font-bold text-brand-600 uppercase tracking-wider">
            全站 28 家机场总表
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            机场对比总表：28 家机场价格、流量、线路与解锁情况
          </h2>
          <p className="text-xs text-slate-500 mt-2">
            包含灵动云、暮光网络、飞猫云、微风网络、隐形人、浪网、梯子云、飞V等全量服务实测记录。
          </p>
        </div>

        <ComparisonTable />
      </section>

      {/* Demand-Based Selection Matrix */}
      <section className="bg-slate-100 dark:bg-slate-900/60 py-12 border-y border-slate-200/60 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              按使用场景与需求精准选机场
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
              快速匹配最适合您的套餐，降本增效，告别选择困难
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                AI 办公与高效创作
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                解锁 ChatGPT 4o, Claude 3.5 及 Midjourney。优先推荐具备原生住宅 IP 的【灵动云】与【暮光网络】。
              </p>
              <Link
                href="/unlock/"
                className="inline-flex items-center gap-1 text-xs font-bold text-purple-600 hover:underline pt-2"
              >
                <span>查看 AI 解锁专题</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-600 flex items-center justify-center font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                4K / 8K 超清流媒体
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                畅享 Netflix, Disney+, YouTube Premium。优先推荐拥有 IEPL 万兆专线的【暮光网络】与【光速云】。
              </p>
              <Link
                href="/compare/"
                className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 hover:underline pt-2"
              >
                <span>查看影音对比</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                极致性价比 & 学生预算
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                低预算、备用小流量。推荐折合每月仅需 7 元的【飞猫云】及按量付费不限时套餐。
              </p>
              <Link
                href="/recommend/"
                className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:underline pt-2"
              >
                <span>查看性价比榜</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950 text-sky-600 flex items-center justify-center font-bold">
                <Send className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                手机 / 平板移动办公
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                iOS Shadowrocket 与 Android Clash 一键接入。推荐链路优化的【微风网络】与【灵猫】。
              </p>
              <Link
                href="/clients/"
                className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:underline pt-2"
              >
                <span>查看客户端教程</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="text-xs font-bold text-brand-600 uppercase tracking-wider">
              内容矩阵
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              最新机场实测文章与选购指南
            </h2>
          </div>
          <Link
            href="/test/"
            className="flex items-center gap-1 text-sm font-bold text-brand-600 hover:text-brand-500"
          >
            <span>全部文章</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestArticles.map((art) => (
            <ArticleCard key={art.slug} article={art} />
          ))}
        </div>
      </section>

      {/* Featured FAQs Expanded Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-bold text-brand-600 uppercase tracking-wider flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4" />
                常见问题知识库
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                小白常见问题 FAQ 精选解答（全 100 问已展开）
              </h2>
            </div>
            <Link
              href="/faq/"
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs transition-colors"
            >
              <span>查看全部 100 个 FAQ 展开页面</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredFAQs.map((faq) => (
              <div
                key={faq.id}
                className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-2"
              >
                <div className="text-xs font-bold text-brand-600 dark:text-brand-400">
                  [{faq.category}] #{faq.id}
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                  {faq.question}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                  {faq.detailedAnswer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
