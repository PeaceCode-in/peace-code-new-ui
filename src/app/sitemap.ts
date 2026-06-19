import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.peacecode.in";

  const routes = [
    "",
    "/about",
    "/careers",
    "/contact",
    "/faq",
    "/psychologist",
    "/peacebot",
    "/community",
    "/focus",
    "/breathe",
    "/gratitude",
    "/journal",
    "/screening",
    "/resources",
    "/privacy",
    "/terms",
    "/cancellation",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  return routes;
}
