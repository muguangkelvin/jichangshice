import React from "react";
import CategoryPageLayout from "@/components/CategoryPageLayout";

export const metadata = {
  title: "线路与节点｜IEPL, IPLC, BGP专线与香港日本节点选择",
  description: "线路与节点专栏：深入解析 IEPL 专线、IPLC 物理专线、BGP 中转、Shadowsocks, Trojan, VLESS 协议及各地节点延迟特质。",
};

export default function NodesCategoryPage() {
  return (
    <CategoryPageLayout
      sectionKey="nodes"
      title="线路与节点"
      description="专业节点线路知识库。带您看懂 IEPL 内网专线、BGP 入口、节点倍率、原生 IP 及不同地区节点的延迟与性能差异。"
    />
  );
}
