import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "数据纠错与更新政策｜机场实测 MOM",
  description: "数据纠错与更新政策：致力于保持套餐价格、优惠码及节点信息的时效性。",
};

export default function CorrectionsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <Breadcrumbs items={[{ label: "数据纠错政策" }]} />
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">数据纠错与更新政策</h1>
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 text-sm text-slate-700 dark:text-slate-300">
        <p>因第三方服务商套餐与优惠码随时可能变动，页面数据均标注有‘最后核验日期’。</p>
        <p>若读者发现数据失效，欢迎通过 Telegram 频道提交纠错，编辑部核对后将于 24 小时内修更。</p>
      </div>
    </div>
  );
}
