import React from "react";
import CategoryPageLayout from "@/components/CategoryPageLayout";

export const metadata = {
  title: "2026机场推荐总榜｜稳定专线机场、性价比梯子与靠谱机场选购",
  description: "2026机场推荐：精选灵动云、暮光网络、飞猫云、微风网络等口碑专线机场。按预算、流量、设备支持及使用场景推荐靠谱代理服务。",
};

export default function RecommendCategoryPage() {
  return (
    <CategoryPageLayout
      sectionKey="recommend"
      title="机场推荐"
      description="按需求与意图分层的权威机场推荐总榜。为您精选全网靠谱、高速、稳定、低延时的IEPL专线与BGP优化机场。"
    />
  );
}
