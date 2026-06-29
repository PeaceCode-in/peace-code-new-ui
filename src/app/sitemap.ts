import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.peacecode.in";

  // Priority tiers for better crawl budget allocation
  const corePages = [
    { route: "", priority: 1.0, changeFrequency: "daily" as const },
  ];

  const servicePages = [
    { route: "/psychologist", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/peacebot", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/peace-buddies", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/community", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/screening", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/breathe", priority: 0.85, changeFrequency: "weekly" as const },
    { route: "/focus", priority: 0.85, changeFrequency: "weekly" as const },
    { route: "/journal", priority: 0.85, changeFrequency: "weekly" as const },
    { route: "/gratitude", priority: 0.85, changeFrequency: "weekly" as const },
  ];

  const contentPages = [
    { route: "/blog", priority: 0.8, changeFrequency: "daily" as const },
    { route: "/announcements", priority: 0.8, changeFrequency: "daily" as const },
    { route: "/resources", priority: 0.8, changeFrequency: "weekly" as const },
  ];

  const aboutPages = [
    { route: "/careers", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  const legalPages = [
    { route: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { route: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
    { route: "/cancellation", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const allPages = [
    ...corePages,
    ...servicePages,
    ...contentPages,
    ...aboutPages,
    ...legalPages,
  ];

  return allPages.map((page) => ({
    url: `${baseUrl}${page.route}`,
    lastModified: new Date("2026-06-29").toISOString(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
