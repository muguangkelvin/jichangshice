import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "服务条款｜机场实测 MOM",
  description: "机场实测 MOM 的服务条款说明。",
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <Breadcrumbs items={[{ label: "服务条款" }]} />
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">服务条款</h1>
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 text-sm text-slate-700 dark:text-slate-300">
        <p>访问与使用本网站即表示您同意遵守本服务条款及所在地适用法律法规。</p>
        <p>本站内容仅供学习交流、网络隐私科普与技术探讨使用。</p>
      </div>
    </div>
  );
}
