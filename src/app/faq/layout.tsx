import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Student Mental Health Help",
  description:
    "Find answers to common questions about Peace Code's student mental health services. Learn about our AI chatbot, anonymous peer support, therapist counseling, privacy policies, pricing, and how to get started.",
  alternates: {
    canonical: "https://www.peacecode.in/faq",
  },
  openGraph: {
    title: "FAQ — Peace Code Student Mental Health Platform",
    description: "Everything you need to know about Peace Code's free student mental health services.",
    url: "https://www.peacecode.in/faq",
    type: "website",
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
