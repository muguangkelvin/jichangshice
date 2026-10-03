import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "编辑原则｜机场实测 MOM",
  description: "机场实测 MOM 的独立编辑原则：客观实测、独立立场、价格透明与合规表达。",
};

export default function EditorialPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <Breadcrumbs items={[{ label: "编辑原则" }]} />
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">编辑原则与评价标准</h1>
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 text-sm text-slate-700 dark:text-slate-300">
        <p>1. **实测为本**：所有关于测速、延迟与解锁的描述均基于独立实测记录。</p>
        <p>2. **透明披露**：页面中的邀请链接带有联盟合作说明，但不影响对产品缺陷的如实指出。</p>
        <p>3. **拒绝夸大**：不使用‘绝对稳定’‘100%永久可用’等夸大用词。</p>
      </div>
    </div>
  );
}
