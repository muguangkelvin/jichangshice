"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SITE_SEO_PROFILE } from "@/data/seoProfile";
import SearchBar from "./SearchBar";
import { Send, Menu, X, ShieldCheck } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 via-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors">
                  {SITE_SEO_PROFILE.brandName}
                </span>
                <span className="text-[10px] font-medium text-slate-400 -mt-1 hidden sm:block">
                  jichangshice.mom
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Right Tools: Search Bar & Telegram Channel */}
          <div className="hidden md:flex items-center gap-3">
            <SearchBar />
            <a
              href={SITE_SEO_PROFILE.telegramChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-sky-500 hover:bg-sky-600 text-white px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-sm transition-transform active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>TG 交流频道</span>
            </a>
          </div>

          {/* Mobile Menu Button & Search */}
          <div className="flex items-center gap-2 md:hidden">
            <SearchBar />
            <a
              href={SITE_SEO_PROFILE.telegramChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-sky-500 hover:bg-sky-50 dark:hover:bg-slate-800 rounded-lg"
              title="TG 频道"
            >
              <Send className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg focus:outline-none"
              aria-label="切换菜单"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Secondary Navigation Row (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 py-2 overflow-x-auto border-t border-slate-100 dark:border-slate-800/50 scrollbar-none text-xs font-medium">
          {SITE_SEO_PROFILE.navigationItems.map((item) => (
            <Link
              key={item.url}
              href={item.url}
              className="px-3 py-1.5 rounded-lg text-slate-700 dark:text-slate-300 hover:text-brand-600 hover:bg-brand-50/80 dark:hover:bg-slate-800 dark:hover:text-brand-400 whitespace-nowrap transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-4 space-y-1 shadow-lg">
          <div className="grid grid-cols-2 gap-1.5 pt-2">
            {SITE_SEO_PROFILE.navigationItems.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-brand-50 dark:hover:bg-slate-800 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
