import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "评测方法论｜机场实测 MOM",
  description: "机场实测 MOM 的测试方法：包含千兆宽带晚高峰跑满测试、Ping抖动、丢包率及住宅IP风控测试。",
};

export default function MethodologyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <Breadcrumbs items={[{ label: "评测方法论" }]} />
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">机场实测方法论</h1>
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 text-sm text-slate-700 dark:text-slate-300">
        <p>我们的测试环境包含 1000M 联通/电信/移动宽带，在每日 20:00 - 23:00 晚高峰进行连续测速。</p>
        <p>流媒体与 AI 解锁测试涵盖 Netflix 4K, Disney+, YouTube, ChatGPT 4o 及 Claude 3.5 Sonnet。</p>
      </div>
    </div>
  );
}
