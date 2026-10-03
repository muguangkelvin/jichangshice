import React from "react";
import CategoryPageLayout from "@/components/CategoryPageLayout";

export const metadata = {
  title: "客户端教程｜Clash Verge, Shadowrocket, v2rayN 图文教程",
  description: "代理客户端专栏：包含 Clash Verge, Shadowrocket, v2rayN, Sing-box 等 Windows, macOS, iOS, Android 客户端完整图文配置指南。",
};

export default function ClientsCategoryPage() {
  return (
    <CategoryPageLayout
      sectionKey="clients"
      title="客户端教程"
      description="覆盖全平台代理软件的使用指南。手把手示范 Clash Verge Rev, Shadowrocket (小火箭), v2rayN, Sing-box 及路由器的配置与规则设置。"
    />
  );
}
