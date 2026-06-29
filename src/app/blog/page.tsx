import type { Metadata } from "next";
import BlogRoute from "../../routes/blog";

export const metadata: Metadata = {
  title: "Mental Health Blog for Students — Articles, Tips & Stories",
  description:
    "Read evidence-based mental health articles written for college students. Topics include exam anxiety management, campus burnout recovery, making friends in college, imposter syndrome coping strategies, and student wellness tips.",
  alternates: {
    canonical: "https://www.peacecode.in/blog",
  },
  openGraph: {
    title: "Mental Health Blog for Students — Articles, Tips & Stories | Peace Code",
    description: "Evidence-based mental health articles, student stories, and wellness tips for college life.",
    url: "https://www.peacecode.in/blog",
    type: "website",
  },
};

export default function BlogPage() {
  return <BlogRoute />;
}
