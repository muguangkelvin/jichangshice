"use client";

import React from "react";
import { List } from "lucide-react";

export default function TOC() {
  return (
    <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800 my-6">
      <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white mb-2">
        <List className="w-4 h-4 text-brand-600" />
        <span>文章目录（TOC）</span>
      </div>
      <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 pl-4 list-disc">
        <li><a href="#一为什么真实实测比广告宣传更重要" className="hover:text-brand-600">一、为什么真实实测比广告宣传更重要？</a></li>
        <li><a href="#2026年四大核心主推专线机场实测推荐编辑部重点复核" className="hover:text-brand-600">二、2026年四大核心主推专线机场实测推荐</a></li>
        <li><a href="#三核心实测指标分析" className="hover:text-brand-600">三、核心实测指标分析（晚高峰/延迟/解锁）</a></li>
        <li><a href="#四新手选购与配置建议" className="hover:text-brand-600">四、新手选购与配置建议</a></li>
        <li><a href="#五常见问题解答faq" className="hover:text-brand-600">五、常见问题解答 FAQ</a></li>
      </ul>
    </div>
  );
}
