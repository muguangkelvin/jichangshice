"use client";

import React, { useMemo } from "react";
import { marked } from "marked";

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const htmlContent = useMemo(() => {
    if (!content) return "";

    // Clean up any meaningless AI artifacts like `&&&`, `%%%` if present, while preserving `#`, `**`, `---` etc.
    let cleaned = content.replace(/[&%]{3,}/g, "");

    // Configure marked options
    marked.setOptions({
      gfm: true,
      breaks: true,
    });

    // Parse Markdown to HTML
    let parsed = marked.parse(cleaned) as string;

    // Ensure external third-party links have rel="sponsored nofollow noopener"
    parsed = parsed.replace(
      /<a href="(https?:\/\/[^"]+)"/g,
      '<a href="$1" target="_blank" rel="sponsored nofollow noopener"'
    );

    return parsed;
  }, [content]);

  return (
    <div
      className="markdown-body text-[16px] sm:text-[17px] md:text-[18px] leading-[1.85] text-slate-800 dark:text-slate-200"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
