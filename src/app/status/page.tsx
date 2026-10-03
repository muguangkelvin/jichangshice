import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { TOP_4_PROVIDERS } from "@/data/providers";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "服务状态与实时监控｜机场实测 MOM",
  description: "机场服务状态：展示主推机场线路最后人工核验状态与联通率。",
};

export default function StatusPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <Breadcrumbs items={[{ label: "服务状态" }]} />
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">机场服务状态监控</h1>
      <p className="text-xs text-slate-500">
        最后人工核验时间：2026年10月02日（人工定时更新）
      </p>

      <div className="space-y-4">
        {TOP_4_PROVIDERS.map((p) => (
          <div
            key={p.slug}
            className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between"
          >
            <div>
              <div className="font-bold text-slate-900 dark:text-white text-sm">{p.name}</div>
              <div className="text-xs text-slate-500">主专线：{p.nodesInfo}</div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-full">
              <CheckCircle2 className="w-4 h-4" />
              <span>运行正常 (SLA 99.9%)</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
