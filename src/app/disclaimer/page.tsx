import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "免责声明｜机场实测 MOM",
  description: "机场实测 MOM 的免责声明。",
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <Breadcrumbs items={[{ label: "免责声明" }]} />
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">免责声明</h1>
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 text-sm text-slate-700 dark:text-slate-300">
        <p>1. 本站为网络技术评测与隐私研究博客，旨在提高用户的网络安全防范意识与设备配置能力。</p>
        <p>2. 请读者务必遵守所在地法律法规，合法合规使用互联网连接服务，不得将本站介绍的技术或服务用于任何违法违规用途。</p>
      </div>
    </div>
  );
}
