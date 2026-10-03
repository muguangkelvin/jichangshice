import React from "react";
import { getArticleBySlug, getArticlesBySection } from "@/data/articles";
import ArticleDetailLayout from "@/components/ArticleDetailLayout";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const articles = getArticlesBySection("wiki");
  return articles.map((art) => ({ slug: art.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: `${article.title}｜机场实测 MOM`,
    description: article.summary,
  };
}

export default function WikiArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  return <ArticleDetailLayout article={article} />;
}
