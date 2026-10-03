import { Article, ALL_ARTICLES } from "@/data/articles";
import { FAQItem, ALL_FAQS } from "@/data/faqs";
import { Provider, TOP_4_PROVIDERS, OTHER_PROVIDERS } from "@/data/providers";

export interface ArticleSearchResult {
  article: Article;
  score: number;
}

export interface FAQSearchResult {
  faq: FAQItem;
  score: number;
}

export interface ProviderSearchResult {
  provider: Provider;
  score: number;
}

export interface SearchResults {
  articles: ArticleSearchResult[];
  faqs: FAQSearchResult[];
  providers: ProviderSearchResult[];
  totalMatches: number;
}

const ALL_PROVIDERS = [...TOP_4_PROVIDERS, ...OTHER_PROVIDERS];

// Section label mapping for category matching
const SECTION_NAMES: Record<string, string> = {
  test: "机场实测",
  recommend: "机场推荐",
  compare: "机场对比",
  ladder: "梯子推荐",
  guide: "科学上网",
  clients: "客户端教程",
  nodes: "线路与节点",
  unlock: "AI与流媒体",
  wiki: "机场知识库",
  services: "本站服务"
};

/**
 * Perform relevance-based search across Articles, FAQs, and Providers.
 */
export function searchAll(query: string): SearchResults {
  const trimmed = query.trim();
  if (!trimmed) {
    return { articles: [], faqs: [], providers: [], totalMatches: 0 };
  }

  const terms = trimmed.toLowerCase().split(/\s+/).filter(Boolean);
  const fullQuery = trimmed.toLowerCase();

  // 1. Search Articles
  const articleResults: ArticleSearchResult[] = [];
  for (const article of ALL_ARTICLES) {
    let score = 0;
    const titleLower = article.title.toLowerCase();
    const summaryLower = article.summary.toLowerCase();
    const contentLower = article.content.toLowerCase();
    const keywordsLower = article.keywords.map((k) => k.toLowerCase());
    const sectionCN = SECTION_NAMES[article.section] || "";
    const sectionLower = article.section.toLowerCase();

    // Normalized versions (without spaces) for Chinese fuzzy join matching
    const normFullQuery = fullQuery.replace(/\s+/g, "");
    const normTitle = titleLower.replace(/\s+/g, "");
    const normSummary = summaryLower.replace(/\s+/g, "");
    const normContent = contentLower.replace(/\s+/g, "");
    const normKeywords = keywordsLower.map((k) => k.replace(/\s+/g, ""));

    // Check if ALL terms match somewhere in article fields
    const allTermsMatch = terms.every(
      (term) =>
        titleLower.includes(term) ||
        summaryLower.includes(term) ||
        keywordsLower.some((k) => k.includes(term)) ||
        sectionCN.includes(term) ||
        sectionLower.includes(term) ||
        contentLower.includes(term) ||
        normTitle.includes(term.replace(/\s+/g, "")) ||
        normSummary.includes(term.replace(/\s+/g, "")) ||
        normKeywords.some((k) => k.includes(term.replace(/\s+/g, "")))
    );

    if (!allTermsMatch) continue;

    // Full query matches
    if (titleLower === fullQuery || normTitle === normFullQuery) score += 600;
    else if (titleLower.startsWith(fullQuery) || normTitle.startsWith(normFullQuery)) score += 350;
    else if (titleLower.includes(fullQuery) || normTitle.includes(normFullQuery)) score += 200;

    if (summaryLower.includes(fullQuery) || normSummary.includes(normFullQuery)) score += 80;
    if (keywordsLower.some((k) => k === fullQuery || k.replace(/\s+/g, "") === normFullQuery)) score += 120;
    else if (keywordsLower.some((k) => k.includes(fullQuery) || k.replace(/\s+/g, "").includes(normFullQuery))) score += 60;
    if (contentLower.includes(fullQuery) || normContent.includes(normFullQuery)) score += 30;

    // Term-level scoring
    for (const term of terms) {
      if (titleLower.includes(term)) score += 40;
      if (summaryLower.includes(term)) score += 20;
      if (keywordsLower.some((k) => k.includes(term))) score += 25;
      if (sectionCN.includes(term) || sectionLower.includes(term)) score += 20;
      if (contentLower.includes(term)) score += 10;
    }

    // Bonus for multi-term query match
    if (terms.length > 1 && allTermsMatch) {
      score += 150;
    }

    if (score > 0) {
      articleResults.push({ article, score });
    }
  }

  articleResults.sort((a, b) => b.score - a.score);

  // 2. Search FAQs
  const faqResults: FAQSearchResult[] = [];
  for (const faq of ALL_FAQS) {
    let score = 0;
    const qLower = faq.question.toLowerCase();
    const shortAnsLower = faq.shortAnswer.toLowerCase();
    const detailAnsLower = faq.detailedAnswer.toLowerCase();
    const keywordsLower = faq.keywords.map((k) => k.toLowerCase());
    const categoryLower = faq.category.toLowerCase();

    const allTermsMatch = terms.every(
      (term) =>
        qLower.includes(term) ||
        shortAnsLower.includes(term) ||
        detailAnsLower.includes(term) ||
        keywordsLower.some((k) => k.includes(term)) ||
        categoryLower.includes(term)
    );

    if (!allTermsMatch) continue;

    if (qLower === fullQuery) score += 600;
    else if (qLower.startsWith(fullQuery)) score += 350;
    else if (qLower.includes(fullQuery)) score += 200;

    if (shortAnsLower.includes(fullQuery)) score += 80;
    if (detailAnsLower.includes(fullQuery)) score += 50;
    if (keywordsLower.some((k) => k === fullQuery)) score += 100;
    else if (keywordsLower.some((k) => k.includes(fullQuery))) score += 50;

    for (const term of terms) {
      if (qLower.includes(term)) score += 40;
      if (shortAnsLower.includes(term)) score += 20;
      if (detailAnsLower.includes(term)) score += 15;
      if (keywordsLower.some((k) => k.includes(term))) score += 20;
    }

    if (terms.length > 1 && allTermsMatch) {
      score += 150;
    }

    if (score > 0) {
      faqResults.push({ faq, score });
    }
  }

  faqResults.sort((a, b) => b.score - a.score);

  // 3. Search Providers
  const providerResults: ProviderSearchResult[] = [];
  for (const provider of ALL_PROVIDERS) {
    let score = 0;
    const nameLower = provider.name.toLowerCase();
    const altLower = (provider.alternateName || "").toLowerCase();
    const summaryLower = provider.summary.toLowerCase();
    const suitableLower = provider.suitableFor.toLowerCase();
    const nodesLower = provider.nodesInfo.toLowerCase();
    const protocolsLower = provider.protocols.toLowerCase();
    const aiLower = provider.aiUnlock.toLowerCase();
    const streamingLower = provider.streamingUnlock.toLowerCase();

    const allTermsMatch = terms.every(
      (term) =>
        nameLower.includes(term) ||
        altLower.includes(term) ||
        summaryLower.includes(term) ||
        suitableLower.includes(term) ||
        nodesLower.includes(term) ||
        protocolsLower.includes(term) ||
        aiLower.includes(term) ||
        streamingLower.includes(term)
    );

    if (!allTermsMatch) continue;

    if (nameLower === fullQuery || altLower === fullQuery) score += 800;
    else if (nameLower.includes(fullQuery) || altLower.includes(fullQuery)) score += 400;

    if (summaryLower.includes(fullQuery)) score += 100;
    if (suitableLower.includes(fullQuery)) score += 80;

    for (const term of terms) {
      if (nameLower.includes(term) || altLower.includes(term)) score += 50;
      if (summaryLower.includes(term)) score += 30;
      if (suitableLower.includes(term)) score += 20;
    }

    if (score > 0) {
      providerResults.push({ provider, score });
    }
  }

  providerResults.sort((a, b) => b.score - a.score);

  const totalMatches = articleResults.length + faqResults.length + providerResults.length;

  return {
    articles: articleResults.slice(0, 8),
    faqs: faqResults.slice(0, 6),
    providers: providerResults.slice(0, 4),
    totalMatches
  };
}
