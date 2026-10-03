import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ComparisonTable from "@/components/ComparisonTable";
import ProviderCard from "@/components/ProviderCard";
import { ALL_PROVIDERS } from "@/data/providers";
import { SITE_SEO_PROFILE } from "@/data/seoProfile";
import {
  ShieldCheck,
  Sparkles,
  Gauge,
  Scale,
  Network,
  BookOpen,
  Smartphone,
  Wrench,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  DollarSign,
  Sliders,
  Layers,
  Tv,
  Bot,
  Users,
  Briefcase,
  GraduationCap,
  Info,
  RefreshCw,
  Compass,
} from "lucide-react";

export const metadata = {
  title: "全站机场实测资料汇总与官网注册入口｜机场实测 MOM",
  description:
    "本站服务：汇集灵动云、暮光网络、飞猫云、微风网络等全量28家机场官网注册链接、套餐价格、节点资料、适用场景与AI解锁总结，附新手机场选择指南与配置流程。",
};

export default function ServicesPage() {
  const faqData = [
    {
      q: "机场越贵就一定越好吗？",
      a: "不一定。价格主要受线路采购成本（如 IEPL / IPLC 跨境专线）、带宽冗余量及服务商定位影响。高端专线机场在高峰期稳定性与低延迟方面优势明显，但如果您的需求仅为日常浏览网页、查阅资料或轻度文字 AI 对话，性价比高的 BGP 中转机场完全能满足需求，不必盲目追高价格。",
    },
    {
      q: "节点数量越多越好吗？",
      a: "绝对不是。不少服务商标注数百个节点，其中大量为虚拟重定向、低速备用或高倍率节点。真正决定日用体验的是香港、日本、新加坡、美国等核心常用节点的带宽充沛度、真实响应延迟与丢包率。优质机场通常注重节点质量而非虚标数量。",
    },
    {
      q: "第一次购买应该选择月付还是年付？",
      a: "强烈建议新手首次使用任何机场都优先选择【月付】。因为不同用户的本地宽带运营商（电信、联通、移动）及所在地区国际出口节点差异较大。先通过月付在您当地真实网络环境与晚高峰时段测试 1–2 周，确认稳定可靠后再考虑季付或年付优惠。",
    },
    {
      q: "每月到底需要多少流量才够用？",
      a: "流量需求取决于您的具体使用场景：若仅用于网页浏览、社媒聊天与文字 AI 对话，每月 50GB–100GB 绰绰有余；若每天观看 1–2 小时 1080P 高清视频，每月需 150GB–250GB；若经常观看 4K 影视或下载大文件，建议选择 300GB–500GB 以上或不限时流量套餐。",
    },
    {
      q: "为什么同一个机场，不同人的使用体验大不相同？",
      a: "科学上网体验受多重因素叠加影响：包括用户本地宽带类型（电信/联通/移动）、所处省份路由出口、使用时段（白天与晚高峰流量拥堵度不同）、所选客户端及其分流规则设置等。因此他人推荐仅作参考，实际本地测试最为准确。",
    },
    {
      q: "“AI 解锁”具体指的是什么？",
      a: "“AI 解锁”指机场节点具备干净的原生 IP 或专有反向代理机制，能够顺畅绕过 OpenAI (ChatGPT)、Claude、Gemini 等平台严苛的 IP 风险风控系统，避免频繁弹出人机验证、报错“Access Denied”或无法加载对话页面。",
    },
    {
      q: "支持 Netflix 是否代表所有节点都能解锁？",
      a: "不是。机场通常会单独标记特定的“流媒体解锁节点”（如 HK Netflix、JP Streaming 等）。普通通用节点可能仅能观看非自制剧集或受到版权地区限制。如果您有重度观影需求，请认准专门标注了流媒体解锁的节点。",
    },
    {
      q: "购买机场之后，应该使用什么客户端软件？",
      a: "根据您的设备平台选择主流客户端：Windows 推荐使用 Clash Verge Rev 或 Sing-box；macOS 推荐使用 Clash Verge 或 Stash；iOS (iPhone/iPad) 首选 Shadowrocket（小火箭）或 Stash；Android 推荐 Clash Meta (Clash Nyanpasu) 或 Sing-box。详细操作可参阅本站 [客户端教程](/clients)。",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. 面包屑 */}
      <Breadcrumbs items={[{ label: "本站服务与全站机场总表" }]} />

      {/* 2. Hero 区域 */}
      <div className="bg-gradient-to-r from-brand-900 via-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-10 text-white shadow-xl">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-brand-300 text-xs font-bold tracking-wide uppercase">
            <ShieldCheck className="w-4 h-4" />
            <span>{SITE_SEO_PROFILE.brandName} 商业服务与转化总库</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            全站机场实测资料汇总与官网注册链接
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            本文罗列了本站跟踪实测的所有 28 家机场服务商及其官网直达链接、价格套餐、专线节点情况、AI 解锁及适用的场景人群。点击注册按钮均带有安全授权防截获。
          </p>
        </div>
      </div>

      {/* 3. 新增：本站服务说明 */}
      <section className="space-y-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 px-3 py-1 rounded-full border border-brand-200 dark:border-brand-800">
            <Compass className="w-3.5 h-3.5" />
            <span>解决新手选型痛点</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            本站服务能帮你解决什么？
          </h2>
        </div>
        
        <div className="prose prose-slate dark:prose-invert max-w-none text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 space-y-4">
          <p>
            很多第一次接触科学上网或机场代理的新手用户，真正面临的困难往往并不是“找不到机场入口”，而是面对琳琅满目的套餐价格、月度流量额度、直连与专线线路、各类客户端（Clash、Sing-box、Shadowrocket 等）、节点数量以及 AI / 流媒体解锁等繁杂参数时，无法判断哪些信息真正与自己的使用需求相匹配。
          </p>
          <p>
            本站整理全站 28 家机场实测资料的初衷，是将分散在各处的第三方测试数据与官方套餐信息进行标准化集中展示。通过剔除虚假宣传与参数烟雾弹，帮助小白用户与专业从业者以最低的学习成本完成选型、购买与配置落地。
          </p>
        </div>

        {/* 6项服务功能卡片 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs hover:border-brand-500/50 transition-colors flex items-start gap-3">
            <div className="p-2 bg-brand-50 dark:bg-brand-950 rounded-lg text-brand-600 dark:text-brand-400 shrink-0">
              <Gauge className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">机场实测</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-normal">
                真实网络环境下持续监测连续延迟与高峰期吞吐数据。
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs hover:border-brand-500/50 transition-colors flex items-start gap-3">
            <div className="p-2 bg-indigo-50 dark:bg-indigo-950 rounded-lg text-indigo-600 dark:text-indigo-400 shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">套餐对比</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-normal">
                横向梳理 28 家服务商的起步月费、流量上限与性价比。
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs hover:border-brand-500/50 transition-colors flex items-start gap-3">
            <div className="p-2 bg-emerald-50 dark:bg-emerald-950 rounded-lg text-emerald-600 dark:text-emerald-400 shrink-0">
              <Network className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">线路分析</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-normal">
                深入剖析直连、BGP 中转与 IEPL/IPLC 跨境专线差异。
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs hover:border-brand-500/50 transition-colors flex items-start gap-3">
            <div className="p-2 bg-amber-50 dark:bg-amber-950 rounded-lg text-amber-600 dark:text-amber-400 shrink-0">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">客户端教程</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-normal">
                提供 Win/Mac/iOS/Android 全平台客户端一键导入指引。
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs hover:border-brand-500/50 transition-colors flex items-start gap-3">
            <div className="p-2 bg-purple-50 dark:bg-purple-950 rounded-lg text-purple-600 dark:text-purple-400 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">新手指南</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-normal">
                整理科学上网基础常识、避坑要点与规则分流技巧。
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs hover:border-brand-500/50 transition-colors flex items-start gap-3">
            <div className="p-2 bg-rose-50 dark:bg-rose-950 rounded-lg text-rose-600 dark:text-rose-400 shrink-0">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">问题排查</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-normal">
                快速定位节点超时、AI 报错、订阅更新失败等常见故障。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 新增：这张机场总表应该怎么看？ */}
      <section className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4">
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <Info className="w-5 h-5 text-brand-600 dark:text-brand-400" />
          <span>这张机场总表应该怎么看？</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          <div className="space-y-1 bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800">
            <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-500"></span>
              【起步价格】
            </span>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              不能只看最低数字。部分机场标出的低价需一次性年付或属于低流量入门包，建议结合套餐周期与每 GB 实际成本综合判断。
            </p>
          </div>
          <div className="space-y-1 bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800">
            <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-500"></span>
              【基础流量】
            </span>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              标注月度可用流量额度。轻度网页查阅 50GB 足矣，而 4K 流媒体播放与大文件下载用户建议选择 200GB 以上的套餐。
            </p>
          </div>
          <div className="space-y-1 bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800">
            <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-500"></span>
              【核心优势与场景】
            </span>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              帮助您快速判断机场定位。例如偏向新手入门、AI 深度办公、4K 影音流畅播放、多设备连接还是跨境商务办公。
            </p>
          </div>
          <div className="space-y-1 bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate me-800">
            <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-500"></span>
              【AI 与流媒体解锁】
            </span>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              记录该服务商节点对 ChatGPT、Claude、Netflix 等平台的适配表现。实际表现受目标平台风控与节点地区策略影响。
            </p>
          </div>
        </div>
      </section>

      {/* 5. 保留：28家机场快速注册对比表 */}
      <section className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span>28 家机场快速注册对比表</span>
          </h2>
          <span className="text-xs text-slate-500 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full">
            实时监测中 · 支持滚动查看全表
          </span>
        </div>
        <ComparisonTable />
      </section>

      {/* 6. 新增：新手选择机场，真正应该看哪些指标？ */}
      <section className="space-y-6 pt-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          新手选择机场，真正应该看哪些指标？
        </h2>
        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          <p>
            面对网络上五花八门的机场广告，很多新手容易被诸如“千兆跑满”、“无限流量”等宣传口号误导。在挑选机场服务时，建议重点关注以下 6 个核心维度：
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-black text-sm">
              01
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">网络稳定性</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              峰值测速跑得快并不代表日常好用。真正决定体验的是晚高峰（20:00 - 23:00）的连接成功率与低丢包率。优先选择在高峰期依然稳定不掉线的服务商。
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-black text-sm">
              02
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">线路架构类型</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              常见的线路分为三类：直连成本低但晚高峰易拥堵；BGP 中转能在国内入口优化路由；IEPL/IPLC 跨境专线不过公网防火墙，延迟极低且抗封锁能力强。
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-black text-sm">
              03
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">节点覆盖与质量</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              无需过度追求上百个节点数量。新手应重点关注香港、日本、新加坡、台湾、美国等常用优质节点的可用率与实际响应速度。
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center font-black text-sm">
              04
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">流量上限与倍率</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              明确自己的消耗模式。网页浏览与社交消耗极低；观看 1080P/4K 高清视频每小时消耗 1.5GB–7GB。注意区分普通节点与高倍率（如 2x/3x）节点的扣费规则。
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-2.5">
            <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center font-black text-sm">
              05
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">客户端支持与兼容</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              确认服务商是否支持通用的 Clash、Sing-box、Shadowrocket 订阅协议，或提供一键导入定制客户端，确保能在电脑、手机和平板端顺畅使用。
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-2.5">
            <div className="w-8 h-8 rounded-lg bg-rose-50 dark:bg-rose-950 text-rose-600 dark:text-rose-400 flex items-center justify-center font-black text-sm">
              06
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">AI 与流媒体需求</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              若需使用 ChatGPT、Claude 或观看 Netflix、Disney+，需确认节点具备原生 IP 解锁能力。谨记网络环境会动态变动，避免相信“永久 100% 解锁”承诺。
            </p>
          </div>
        </div>
      </section>

      {/* 7. 新增：不同预算应该如何选择？ */}
      <section className="space-y-6 pt-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          月预算不同，应该怎么选择机场套餐？
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/80 px-2.5 py-1 rounded-md">
                <DollarSign className="w-3.5 h-3.5" />
                <span>入门预算（¥10 – ¥20 / 月）</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">轻度学习与新手试水</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                适合刚接触科学上网、主要进行网页浏览、查找资料、社媒聊天或偶尔使用文字 AI 对话的用户。建议选择支持按月付费的服务商（如[飞猫云](/providers/flycat)），避免一次性投入过高年费。
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
              💡 核心策略：低月费、月付试水、注重基础性价比
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border-2 border-brand-500 dark:border-brand-500 rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-md relative">
            <div className="absolute -top-3 right-4 bg-brand-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
              推荐选择
            </div>
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 bg-brand-50 dark:bg-brand-950/80 px-2.5 py-1 rounded-md">
                <DollarSign className="w-3.5 h-3.5" />
                <span>中等预算（¥20 – ¥40 / 月）</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">4K 影音与日常稳定</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                适合大部分主力用户。需要流畅播放 4K 高清视频、频繁使用 ChatGPT/Claude 深度办公、多设备同时在线。建议选择具备 BGP 中转或混合专线的高性价比服务商（如[灵动云](/providers/lingdong)、[暮光网络](/providers/twilight)）。
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
              💡 核心策略：BGP 中转、大流量、4K 流媒体与 AI 解锁
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 bg-indigo-50 dark:bg-indigo-950/80 px-2.5 py-1 rounded-md">
                <DollarSign className="w-3.5 h-3.5" />
                <span>较高预算（¥40 – ¥80+ / 月）</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">跨境办公与极致低延迟</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                适合跨境电商、外贸团队、远程办公及对外网连接连续性与低延迟有极高要求的专业用户。建议直奔纯 IEPL / IPLC 全专线服务商（如[微风网络](/providers/feifeng)），保障全天候业务不中断。
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
              💡 核心策略：IEPL 纯专线、SLA 保证、高抗封锁能力
            </div>
          </div>
        </div>

        <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 rounded-xl p-4 text-xs sm:text-sm text-amber-800 dark:text-amber-300 flex items-start gap-3">
          <Info className="w-5 h-5 shrink-0 text-amber-600 dark:text-amber-400" />
          <p className="leading-relaxed">
            <strong>选购建议：</strong>不要盲目认为价格越贵就一定越适合自己。应根据个人实际的【流量消耗】、【使用场景】、【设备数量】与【本地网络环境】综合评估，找到边际效益最高的套餐。
          </p>
        </div>
      </section>

      {/* 8. 新增：不同使用需求怎么判断？ */}
      <section className="space-y-6 pt-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          不同使用场景，应该重点关注什么？
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
              <Bot className="w-5 h-5 text-brand-600" />
              <span>AI 工具用户</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              <strong>重点指标：</strong>节点 IP 干净度、ChatGPT / Claude 原生解锁率。避免因公共节点风控引发账户封禁。
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
              <Tv className="w-5 h-5 text-indigo-600" />
              <span>影音娱乐用户</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              <strong>重点指标：</strong>节点吞吐带宽、晚高峰速率、Netflix / YouTube 4K 解锁节点。
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
              <GraduationCap className="w-5 h-5 text-emerald-600" />
              <span>轻度学习用户</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              <strong>重点指标：</strong>起步月费亲民度、基础流量包额度、配置导入简单程度。
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
              <Users className="w-5 h-5 text-amber-600" />
              <span>多设备家庭</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              <strong>重点指标：</strong>同时在线设备数量限制、通用订阅协议支持、多平台兼容度。
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
              <Briefcase className="w-5 h-5 text-rose-600" />
              <span>跨境办公团队</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              <strong>重点指标：</strong>IEPL 专线保障、连接连续性、常用地区（港/日/美）低延迟稳定性。
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
              <BookOpen className="w-5 h-5 text-purple-600" />
              <span>小白新手</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              <strong>重点指标：</strong>一键定制客户端、傻瓜式导入图文教程、工单与客服响应速度。
            </p>
          </div>
        </div>
      </section>

      {/* 9. 新增：从选择到使用的完整流程 */}
      <section className="space-y-6 pt-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          从选择机场到正常使用，一般需要哪些步骤？
        </h2>

        <ol className="space-y-3">
          {[
            {
              step: "01",
              title: "明确预算与使用需求",
              desc: "评估自己主要用于 AI 办公、4K 影音还是网页浏览，初步确定月度流量需求与价格承受区间。",
            },
            {
              step: "02",
              title: "从机场总表筛选候选服务",
              desc: "结合上方 28 家机场表格，对比起步价格、基础流量、核心优势及线路架构，筛选出 2–3 家目标服务商。",
            },
            {
              step: "03",
              title: "查看对应独立测评",
              desc: "点击对比表右侧的“测评”链接，深入了解目标机场的节点分布、售后保障及具体测试曲线。",
            },
            {
              step: "04",
              title: "前往官方页面注册并选择套餐",
              desc: "通过防伪直达按钮进入机场官网，注册账号后优先选择【月付】套餐试水。",
            },
            {
              step: "05",
              title: "获取专属订阅地址",
              desc: "登入机场后台仪表盘，在“订阅中心”复制适合您客户端的 Clash、Sing-box 或 Universal 订阅链接。",
            },
            {
              step: "06",
              title: "下载并安装适合设备的客户端",
              desc: "根据操作系统下载对应客户端（Win 首选 Clash Verge，Mac 首选 Stash/Verge，iOS 首选小火箭，Android 首选 Clash Meta）。",
            },
            {
              step: "07",
              title: "一键导入订阅配置",
              desc: "打开客户端软件，选择“导入订阅”或将复制的订阅链接贴入配置栏中完成一键更新。",
            },
            {
              step: "08",
              title: "选择合适节点与分流模式",
              desc: "在客户端中将代理模式设为“规则模式（Rule）”，选择延迟较低的香港、日本或新加坡节点。",
            },
            {
              step: "09",
              title: "开启代理并测试连接",
              desc: "启动系统代理后，打开常用海外网站（Google、YouTube、ChatGPT）验证网络连通性。",
            },
          ].map((item) => (
            <li
              key={item.step}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex items-start gap-4 shadow-xs"
            >
              <div className="w-8 h-8 rounded-full bg-brand-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                {item.step}
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* 10. 新增：本站如何整理测评资料？ */}
      <section className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span>本站如何整理机场测评资料？</span>
          </h2>
          <span className="text-xs font-mono text-slate-500 bg-white dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700">
            最近更新日期：2026年10月
          </span>
        </div>
        
        <div className="prose prose-slate dark:prose-invert max-w-none text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 space-y-3">
          <p>
            本站（机场实测 MOM）所有表格数据与测评内容，均基于真实网络环境下的多时段追踪测试及服务商官网公开数据整理。我们重点考察套餐价格真实性、流量额度规则、节点地区分布、日常晚高峰联通表现以及主流 AI 与流媒体解锁状况。
          </p>
          <p>
            <strong>理性参考声明：</strong>网络环境具有高度的动态复杂性。不同地区、不同宽带运营商（电信/联通/移动）、本地出口路由调整及平台风控策略均可能带来体验差异。本站资料仅作为选购参考，强烈建议用户以实际测试体验为准。
          </p>
        </div>
      </section>

      {/* 11. 新增：常见问题 FAQ */}
      <section className="space-y-6 pt-4">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-brand-600" />
            <span>机场选择常见问题 (FAQ)</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            新手选购机场时最常遇到的疑问与解答汇总。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-2.5 shadow-xs"
            >
              <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base flex items-start gap-2">
                <span className="text-brand-600 dark:text-brand-400 font-extrabold shrink-0">Q:</span>
                <span>{item.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-5 border-l-2 border-slate-100 dark:border-slate-800">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 12. 新增：本站服务 CTA 模块 */}
      <section className="bg-gradient-to-r from-brand-600 via-indigo-600 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl font-extrabold">找到最适合您的科学上网方案</h2>
          <p className="text-xs sm:text-sm text-brand-100 max-w-xl leading-relaxed">
            通过本站系统测试与分类推荐，进一步探索主流客户端使用教程与针对性避坑指南。
          </p>
        </div>
        <div className="flex items-center gap-3 flex-wrap justify-center shrink-0">
          <Link
            href="/recommend"
            className="bg-white text-brand-700 hover:bg-brand-50 font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-colors shadow-sm inline-flex items-center gap-1.5"
          >
            <span>推荐机场榜单</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/clients"
            className="bg-slate-800/80 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-slate-700 transition-colors inline-flex items-center gap-1.5"
          >
            <span>客户端下载教程</span>
          </Link>
        </div>
      </section>

      {/* 13. 保留：所有 28 家机场详细测评卡片与注册入口 */}
      <section className="space-y-6 pt-4">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            所有 28 家机场详细测评卡片与注册入口
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            按实测综合推荐度排序，涵盖全量独立测评详情与优惠码资料。
          </p>
        </div>

        <div className="space-y-6">
          {ALL_PROVIDERS.map((provider) => (
            <ProviderCard key={provider.slug} provider={provider} showRankBadge={true} />
          ))}
        </div>
      </section>
    </div>
  );
}
