import React from "react";
import Link from "next/link";
import { SITE_SEO_PROFILE } from "@/data/seoProfile";
import { Send, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Mission Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {SITE_SEO_PROFILE.brandName}
              </span>
            </div>
            
            {/* Hero / Footer Keywords Injection */}
            <p className="text-xs text-slate-300 leading-relaxed">
              {SITE_SEO_PROFILE.footerTextParagraph1}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              {SITE_SEO_PROFILE.footerTextParagraph2}
            </p>

            <div className="pt-2">
              <a
                href={SITE_SEO_PROFILE.telegramChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>加入 Telegram 官方交流频道</span>
              </a>
            </div>
          </div>

          {/* Core Clusters Nav */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
              核心主题矩阵
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/test/" className="hover:text-white transition-colors">
                  机场实测与测速
                </Link>
              </li>
              <li>
                <Link href="/recommend/" className="hover:text-white transition-colors">
                  2026机场推荐榜
                </Link>
              </li>
              <li>
                <Link href="/compare/" className="hover:text-white transition-colors">
                  性价比机场对比
                </Link>
              </li>
              <li>
                <Link href="/ladder/" className="hover:text-white transition-colors">
                  稳定翻墙梯子推荐
                </Link>
              </li>
              <li>
                <Link href="/clients/" className="hover:text-white transition-colors">
                  Clash / Shadowrocket 教程
                </Link>
              </li>
              <li>
                <Link href="/nodes/" className="hover:text-white transition-colors">
                  IEPL 专线与节点解析
                </Link>
              </li>
              <li>
                <Link href="/unlock/" className="hover:text-white transition-colors">
                  ChatGPT & Netflix 解锁
                </Link>
              </li>
              <li>
                <Link href="/faq/" className="hover:text-white transition-colors">
                  常见问题 FAQ (100问)
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Editorial */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
              编辑原则与合规
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about/" className="hover:text-white transition-colors">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-white transition-colors">
                  联系我们（TG 频道）
                </Link>
              </li>
              <li>
                <Link href="/editorial-policy/" className="hover:text-white transition-colors">
                  编辑原则
                </Link>
              </li>
              <li>
                <Link href="/methodology/" className="hover:text-white transition-colors">
                  实测方法论
                </Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure/" className="hover:text-white transition-colors">
                  联盟合作与邀请链接披露
                </Link>
              </li>
              <li>
                <Link href="/corrections/" className="hover:text-white transition-colors">
                  纠错与数据更新政策
                </Link>
              </li>
              <li>
                <Link href="/privacy/" className="hover:text-white transition-colors">
                  隐私政策
                </Link>
              </li>
              <li>
                <Link href="/terms/" className="hover:text-white transition-colors">
                  服务条款
                </Link>
              </li>
              <li>
                <Link href="/disclaimer/" className="hover:text-white transition-colors">
                  免责声明
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 {SITE_SEO_PROFILE.brandName} (jichangshice.mom). 保留所有权利。
          </div>
          <div className="flex items-center gap-1">
            <span>Powered by Next.js & Pure Static Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
