import React from "react";
import CategoryPageLayout from "@/components/CategoryPageLayout";

export const metadata = {
  title: "机场知识库｜网络代理术语、订阅原理与加密协议百科",
  description: "机场知识库专栏：通俗解释什么是机场、订阅链接、分流规则、DNS污染、防火墙拦截与网络代理专业术语。",
};

export default function WikiCategoryPage() {
  return (
    <CategoryPageLayout
      sectionKey="wiki"
      title="机场知识库"
      description="降低小白理解成本的科普字典。用简单易懂的语言为您科普机场术语、网络原理与代理安全常识。"
    />
  );
}
