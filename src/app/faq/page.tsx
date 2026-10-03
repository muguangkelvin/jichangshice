import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQComponent from "@/components/FAQComponent";
import { ALL_FAQS } from "@/data/faqs";
import { HelpCircle, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "常见问题 FAQ (全 100 问已展开)｜机场推荐、Clash与节点故障排查",
  description: "机场常见问题 FAQ 中心：包含恰好 100 个围绕机场选购、Clash/Shadowrocket 配置、SS/Trojan 协议、节点测速、晚高峰拥堵与 AI/流媒体解锁的详细展开解答。",
};

export default function FAQPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs items={[{ label: "常见问题 FAQ (100问)" }]} />

      <div className="bg-gradient-to-r from-brand-900 via-slate-900 to-indigo-950 rounded-3xl p-8 text-white shadow-xl">
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
            <HelpCircle className="w-4 h-4" />
            <span>机场实测 MOM 知识库中心</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            常见问题 FAQ（100 个问题与详细展开答案）
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            涵盖机场选购、Clash 客户端、SS/Trojan 协议、节点延迟、性价比套餐、多设备支持、网络排障与 AI 工具解封全套 100 个真实小白提问。按照要求，所有问题默认为展开完整视图。
          </p>
        </div>
      </div>

      <FAQComponent faqs={ALL_FAQS} />
    </div>
  );
}
