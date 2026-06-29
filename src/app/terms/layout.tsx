import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Peace Code's terms of use for the student mental health platform. Covers service agreement, medical disclaimer, user responsibilities, community guidelines, and platform rules.",
  alternates: {
    canonical: "https://www.peacecode.in/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
