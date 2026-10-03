const { searchAll } = require("../src/utils/searchEngine");

const testKeywords = [
  "机场",
  "灵动云",
  "暮光网络",
  "飞猫云",
  "微风网络",
  "机场测速",
  "IEPL",
  "DNS",
  "TUN",
  "Clash",
  "Shadowrocket",
  "Netflix",
  "Windows",
  "节点",
  "原生IP"
];

console.log("=== Testing 15 Specified Search Keywords ===");
let allPassed = true;

for (const kw of testKeywords) {
  const res = searchAll(kw);
  console.log(`\n----------------------------------------`);
  console.log(`🔍 Keyword: "${kw}" | Total Matches: ${res.totalMatches}`);
  console.log(`   Providers (${res.providers.length}): ${res.providers.map(p => p.provider.name).join(", ") || "None"}`);
  console.log(`   Articles (${res.articles.length}):`);
  res.articles.slice(0, 3).forEach((a, i) => {
    console.log(`     [${i + 1}] (Score: ${a.score}) ${a.article.title}`);
  });
  console.log(`   FAQs (${res.faqs.length}):`);
  res.faqs.slice(0, 2).forEach((f, i) => {
    console.log(`     [${i + 1}] (Score: ${f.score}) ${f.faq.question}`);
  });

  if (res.totalMatches === 0) {
    console.error(`❌ FAIL: Keyword "${kw}" returned 0 matches!`);
    allPassed = false;
  }
}

if (allPassed) {
  console.log("\n🎉 ALL 15 KEYWORDS PASSED VERIFICATION!");
} else {
  console.error("\n❌ SOME KEYWORDS FAILED!");
  process.exit(1);
}
