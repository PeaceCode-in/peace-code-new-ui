import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — How Peace Code Protects Your Data",
  description:
    "Peace Code's privacy policy explains how we protect student mental health data. HIPAA-aligned, ISO 27001 compliant. Clinical screenings processed on-device. Your mental health journey stays completely private.",
  alternates: {
    canonical: "https://www.peacecode.in/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
