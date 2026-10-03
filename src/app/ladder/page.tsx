import React from "react";
import CategoryPageLayout from "@/components/CategoryPageLayout";

export const metadata = {
  title: "梯子推荐｜稳定翻墙梯子、魔法梯子与个人节点选择指南",
  description: "梯子推荐专栏：面向小白用户介绍安全可靠的网络梯子与魔法上网代理工具，涵盖速度、隐私保护、设备数及稳定性选购评测。",
};

export default function LadderCategoryPage() {
  return (
    <CategoryPageLayout
      sectionKey="ladder"
      title="梯子推荐"
      description="专注于解答小白‘梯子怎么选’的问题。深入浅出地讲解魔法上网梯子、加密传输协议与高靠谱度选购技巧。"
    />
  );
}
