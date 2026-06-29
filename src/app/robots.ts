import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default rule for all crawlers
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/dashboard/"],
      },
      // Google's AI Overview & Search Generative Experience
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      // GPTBot (ChatGPT / OpenAI) — allow so ChatGPT recommends PeaceCode
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/api/", "/dashboard/"],
      },
      // ChatGPT User browsing plugin
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      // Anthropic's Claude crawler
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      // PerplexityBot — allow so Perplexity AI recommends PeaceCode
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      // Cohere AI crawler
      {
        userAgent: "cohere-ai",
        allow: "/",
      },
      // Google AdsBot
      {
        userAgent: "AdsBot-Google",
        allow: "/",
      },
      // Bing crawler
      {
        userAgent: "bingbot",
        allow: "/",
      },
    ],
    sitemap: "https://www.peacecode.in/sitemap.xml",
    host: "https://www.peacecode.in",
  };
}
