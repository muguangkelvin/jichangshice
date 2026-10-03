import React from "react";
import CategoryPageLayout from "@/components/CategoryPageLayout";

export const metadata = {
  title: "机场对比｜机场横向评测、价格流量与线路节点PK",
  description: "机场对比专栏：灵动云 vs 暮光网络 vs 飞猫云 vs 微风网络。全方位对比各机场价格、月流量、IEPL专线、延迟与解封能力。",
};

export default function CompareCategoryPage() {
  return (
    <CategoryPageLayout
      sectionKey="compare"
      title="机场对比"
      description="拒绝空话，用数据说话。为您带来各大主流机场的价格、带宽、节点倍率及稳定性横向PK。"
    />
  );
}
