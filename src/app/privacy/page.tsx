import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "隐私政策｜机场实测 MOM",
  description: "机场实测 MOM 的隐私政策：尊重并保护每一位用户的访问隐私。",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <Breadcrumbs items={[{ label: "隐私政策" }]} />
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">隐私政策</h1>
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 text-sm text-slate-700 dark:text-slate-300">
        <p>本站为纯静态网站，不主动收集用户的个人身份敏感信息、订阅地址或支付密码。</p>
        <p>我们重视您的上网隐私，建议在浏览互联网时使用加密传输协议。</p>
      </div>
    </div>
  );
}
