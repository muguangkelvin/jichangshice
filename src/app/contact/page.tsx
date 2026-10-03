import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_SEO_PROFILE } from "@/data/seoProfile";
import { Send, Mail, MessageSquare } from "lucide-react";

export const metadata = {
  title: `联系我们｜${SITE_SEO_PROFILE.brandName}`,
  description: `联系我们：欢迎提交机场资料纠错、商务合作询问及 TG 频道交流。`,
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: "联系我们" }]} />

      <div className="space-y-4">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
          联系我们与社区交流
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          如果您有数据纠错建议、机场评测申请或商务合作需求，欢迎通过下方渠道联系我们。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950 text-sky-500 flex items-center justify-center">
            <Send className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Telegram 官方交流频道
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            加入我们的 Telegram 社区频道，实时接收最新机场测速报告、优惠码发放与故障提醒：
          </p>
          <a
            href={SITE_SEO_PROFILE.telegramChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-xs transition-colors"
          >
            <Send className="w-4 h-4" />
            <span>点击加入 TG 交流频道</span>
          </a>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950 text-brand-600 flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            数据纠错与商务沟通
          </h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            若发现本站公示的套餐价格、流量或优惠码发生变动，请通过 TG 频道或工单进行反馈，我们将于 24 小时内更正。
          </p>
        </div>
      </div>
    </div>
  );
}
