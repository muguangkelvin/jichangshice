# SEO Profile 替换契约说明书

本文档用于指导后续对 `jichangshice.mom` 进行全站 SEO 关键词及导航矩阵的无缝替换。

## 1. 替换流程规范

1. 修改 `src/data/seoProfile.ts` 与 `docs/site-seo-profile.json` 中的关键词数组与导航规则。
2. 保持主推 4 大机场及其邀请链接不变：
   - 第一名：灵动云 (`https://varnexa.lingdongaff.com/#/?code=JoIy7bO1`)
   - 第二名：暮光网络 (`https://varnexa.twilightaff.com/#/?code=KvGly3jY`)
   - 第三名：飞猫云 (`https://flycat1.flycatvipaff.cc/#/?code=FOdfcRFH`)
   - 第四名：微风网络 (`https://edp01.breezenetaff.com/#/?code=He4n3zxg`)
3. 确保 Telegram 交流频道保留在页眉与页脚：`https://t.me/+SR_Uz65nwpk2MzNl`。
4. 运行 `npm run verify-seo` 验证关键词覆盖度与 301 重定向映射。
5. 运行 `npm run build` 执行 SSG 静态导出。
