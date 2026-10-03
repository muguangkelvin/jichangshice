import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_SEO_PROFILE } from "@/data/seoProfile";
import { ShieldCheck, CheckCircle } from "lucide-react";

export const metadata = {
  title: `关于我们｜${SITE_SEO_PROFILE.brandName}`,
  description: `关于${SITE_SEO_PROFILE.brandName}：专注于机场实测、机场推荐、梯子测评与科学上网指南的独立编辑团队。`,
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: "关于我们" }]} />

      <div className="space-y-4">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
          关于 {SITE_SEO_PROFILE.brandName}
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {SITE_SEO_PROFILE.brandName}（jichangshice.mom）是一个面向中文小白用户的网络隐私、远程办公与科学上网实测指南站。
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-brand-600" />
          <span>我们的核心宗旨与定位</span>
        </h2>
        <p>
          我们坚持“真实实测、看数据再选择”的原则。本站拒绝无脑复制粘贴与虚假采集，所有榜单均基于真实的延迟测试、晚高峰带宽拉满表现与 AI 工具解封成功率。
        </p>

        <h3 className="text-base font-bold text-slate-900 dark:text-white pt-2">
          我们关注的四大核心服务
        </h3>
        <ul className="space-y-1.5 list-disc pl-5">
          <li><strong>灵动云</strong>：主打全专线入口与 AI 高洁净度住宅 IP。</li>
          <li><strong>暮光网络</strong>：主打 IEPL 万兆专线与 4K/8K 超清流媒体。</li>
          <li><strong>飞猫云</strong>：主打极致性价比与小流量年付。</li>
          <li><strong>微风网络</strong>：主打移动端链路优化与随身连接。</li>
        </ul>
      </div>
    </div>
  );
}
