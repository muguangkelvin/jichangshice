import React from "react";
import CategoryPageLayout from "@/components/CategoryPageLayout";

export const metadata = {
  title: "科学上网教程｜魔法上网新手零基础指南、准备与排障",
  description: "科学上网教程：降低小白上手门槛，提供客户端下载、订阅链接导入、节点故障排查及全平台网络代理配置教程。",
};

export default function GuideCategoryPage() {
  return (
    <CategoryPageLayout
      sectionKey="guide"
      title="科学上网"
      description="小白新手向的科学上网全套教程。手把手教您准备客户端、选购套餐、导入订阅及解决连不上打不开网页等常见故障。"
    />
  );
}
