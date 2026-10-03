import React from "react";
import CategoryPageLayout from "@/components/CategoryPageLayout";

export const metadata = {
  title: "机场实测 MOM｜2026最新机场测速、节点延迟与晚高峰表现",
  description: "机场实测专栏：提供灵动云、暮光网络、飞猫云、微风网络等主流专线机场的真实测试数据、节点测速、晚高峰下行速度与丢包率对比。",
};

export default function TestCategoryPage() {
  return (
    <CategoryPageLayout
      sectionKey="test"
      title="机场实测"
      description="专注于真实网络环境下的机场数据实测。覆盖晚高峰带宽测速、节点延迟、丢失率、协议兼容性及AI/流媒体解锁成功率测试。"
    />
  );
}
