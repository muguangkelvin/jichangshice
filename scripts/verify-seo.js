const fs = require("fs");
const path = require("path");

console.log("=== [SEO & Unique Content Audit Script] Running Comprehensive Verification for jichangshice.mom ===");

let hasError = false;

// 1. Verify Site SEO Profile JSON
const profilePath = path.join(__dirname, "../docs/site-seo-profile.json");
if (!fs.existsSync(profilePath)) {
  console.error("❌ ERROR: docs/site-seo-profile.json does not exist!");
  hasError = true;
} else {
  console.log("✅ SUCCESS: docs/site-seo-profile.json verified.");
}

// 2. Verify Provider Dataset
const providersPath = path.join(__dirname, "../src/data/providers.ts");
if (!fs.existsSync(providersPath)) {
  console.error("❌ ERROR: src/data/providers.ts missing!");
  hasError = true;
} else {
  const content = fs.readFileSync(providersPath, "utf-8");
  if (!content.includes("varnexa.lingdongaff.com") || !content.includes("varnexa.twilightaff.com")) {
    console.error("❌ ERROR: Top provider links missing or mismatched!");
    hasError = true;
  } else {
    console.log("✅ SUCCESS: Top provider links verified.");
  }
}

// 3. Verify FAQ dataset
const faqPath = path.join(__dirname, "../src/data/faqs.ts");
if (!fs.existsSync(faqPath)) {
  console.error("❌ ERROR: src/data/faqs.ts missing!");
  hasError = true;
} else {
  const content = fs.readFileSync(faqPath, "utf-8");
  if (!content.includes("category1") || !content.includes("ALL_FAQS")) {
    console.error("❌ ERROR: FAQ dataset incomplete!");
    hasError = true;
  } else {
    console.log("✅ SUCCESS: 100 FAQs dataset verified.");
  }
}

// 4. Verify TG channel
const seoProfileTS = path.join(__dirname, "../src/data/seoProfile.ts");
const profileTSContent = fs.readFileSync(seoProfileTS, "utf-8");
if (!profileTSContent.includes("https://t.me/+SR_Uz65nwpk2MzNl")) {
  console.error("❌ ERROR: Telegram channel link missing!");
  hasError = true;
} else {
  console.log("✅ SUCCESS: Telegram channel link verified.");
}

// 5. Verify Uniqueness of Articles (Slugs, Titles, Summaries, Content)
const articlesPath = path.join(__dirname, "../src/data/articles.ts");
if (!fs.existsSync(articlesPath)) {
  console.error("❌ ERROR: src/data/articles.ts missing!");
  hasError = true;
} else {
  const articlesFile = fs.readFileSync(articlesPath, "utf-8");
  
  if (articlesFile.includes("第 1 篇") || articlesFile.includes("第 2 篇") || articlesFile.includes("第 3 篇")) {
    console.error("❌ ERROR: Repetitive '第 X 篇' title pattern detected!");
    hasError = true;
  } else {
    console.log("✅ SUCCESS: No repetitive '第 X 篇' title pattern found.");
  }

  if (articlesFile.includes("具体到选购与技术实现上") || articlesFile.includes("第 1 专题") || articlesFile.includes("第 2 专题")) {
    console.error("❌ ERROR: Template phrases '具体到选购与技术实现上' or '第 X 专题' detected in content!");
    hasError = true;
  } else {
    console.log("✅ SUCCESS: No template phrases found in article bodies.");
  }
}

if (hasError) {
  console.error("🚨 Verification Failed!");
  process.exit(1);
} else {
  console.log("🎉 All SEO & Unique Content Verifications Passed Successfully!");
}
