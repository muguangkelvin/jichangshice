import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "联盟合作与邀请链接披露｜机场实测 MOM",
  description: "联盟合作与邀请链接披露说明：说明站内第三方跳转链接的属性与透明度。",
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <Breadcrumbs items={[{ label: "联盟合作披露" }]} />
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">联盟合作与邀请链接披露</h1>
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 text-sm text-slate-700 dark:text-slate-300">
        <p>本站部分按钮与卡片包含第三方服务商的邀请/合作链接（Affiliate Links）。</p>
        <p>所有第三方链接均严格添加 <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded font-mono text-xs">rel="sponsored nofollow noopener"</code> 属性。</p>
        <p>通过这些链接注册购买不会增加您的消费金额，部分优惠码还能为您带来折扣。所得收益用于维持本站的服务器运行与实测开销。</p>
      </div>
    </div>
  );
}
