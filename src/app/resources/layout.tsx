import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mental Health Resources for College Students — Articles, Guides & Tools",
  description:
    "Curated mental health resources for college students. Evidence-based articles, self-help guides, crisis helpline numbers, mental wellness tools, video resources, and clinical assessments — all free and accessible.",
  alternates: {
    canonical: "https://www.peacecode.in/resources",
  },
  openGraph: {
    title: "Mental Health Resources for Students — Free Guides & Tools | Peace Code",
    description: "Free curated mental health resources, articles, guides, and tools for college students.",
    url: "https://www.peacecode.in/resources",
    type: "website",
  },
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
