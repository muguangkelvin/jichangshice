import React from "react";
import CategoryPageLayout from "@/components/CategoryPageLayout";

export const metadata = {
  title: "AI与流媒体｜ChatGPT, Claude 3.5, Gemini & Netflix 4K 解锁机场",
  description: "AI与流媒体专栏：测评能稳定解锁 ChatGPT 4o, Claude, Gemini, Midjourney, Sora, Netflix, Disney+, TikTok 的高洁净度住宅原生 IP 机场。",
};

export default function UnlockCategoryPage() {
  return (
    <CategoryPageLayout
      sectionKey="unlock"
      title="AI与流媒体"
      description="解决 Access Denied 封锁。严选搭载住宅原生 IP 的优质机场节点，助您无障碍使用全系 AI 效率工具与播放 4K 超清流媒体。"
    />
  );
}
