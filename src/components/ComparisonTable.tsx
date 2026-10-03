import React from "react";
import { ALL_PROVIDERS } from "@/data/providers";
import { ExternalLink, CheckCircle, Star } from "lucide-react";
import Link from "next/link";

export default function ComparisonTable() {
  return (
    <div className="w-full overflow-x-auto bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <table className="w-full text-left border-collapse text-xs">
        <thead>
          <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200">
            <th className="py-3.5 px-4 font-bold">排名</th>
            <th className="py-3.5 px-4 font-bold">机场名称</th>
            <th className="py-3.5 px-4 font-bold">起步价格</th>
            <th className="py-3.5 px-4 font-bold">基础流量</th>
            <th className="py-3.5 px-4 font-bold">核心优势与场景</th>
            <th className="py-3.5 px-4 font-bold">AI与流媒体解锁</th>
            <th className="py-3.5 px-4 font-bold text-center">官网链接 / 测评</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
          {ALL_PROVIDERS.map((p) => {
            const isTop4 = p.rank <= 4;
            return (
              <tr
                key={p.slug}
                className={`hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors ${
                  isTop4 ? "bg-brand-50/30 dark:bg-brand-950/20 font-medium" : ""
                }`}
              >
                <td className="py-3 px-4 whitespace-nowrap">
                  {isTop4 ? (
                    <span className="inline-flex items-center gap-1 bg-amber-500 text-white font-black text-[11px] px-2 py-0.5 rounded-full shadow-xs">
                      <Star className="w-3 h-3 fill-white" />
                      #{p.rank}
                    </span>
                  ) : (
                    <span className="text-slate-400 font-mono text-xs">#{p.rank}</span>
                  )}
                </td>
                <td className="py-3 px-4 font-bold text-slate-900 dark:text-white whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <span>{p.name}</span>
                    {isTop4 && (
                      <span className="text-[10px] bg-brand-100 dark:bg-brand-900 text-brand-700 dark:text-brand-300 px-1.5 py-0.5 rounded">
                        主推
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-3 px-4 font-bold text-brand-600 dark:text-brand-400 whitespace-nowrap">
                  {p.priceFrom}
                </td>
                <td className="py-3 px-4 text-slate-600 dark:text-slate-300 whitespace-nowrap">
                  {p.trafficFrom}
                </td>
                <td className="py-3 px-4 text-slate-600 dark:text-slate-300 max-w-[220px]">
                  {p.suitableFor}
                </td>
                <td className="py-3 px-4 text-slate-600 dark:text-slate-300 max-w-[200px]">
                  <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{p.aiUnlock}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-center whitespace-nowrap space-x-2">
                  <a
                    href={p.inviteURL}
                    target="_blank"
                    rel="sponsored nofollow noopener"
                    className="inline-flex items-center gap-1 bg-brand-600 hover:bg-brand-500 text-white font-bold text-[11px] px-3 py-1.5 rounded-lg transition-colors shadow-xs"
                  >
                    <span>官网注册</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <Link
                    href={`/providers/${p.slug}/`}
                    className="inline-block text-[11px] text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 underline"
                  >
                    测评
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
