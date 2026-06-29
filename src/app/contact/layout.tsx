import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Peace Code — Get Help & Support",
  description:
    "Reach out to Peace Code for mental health support inquiries, partnership proposals, press requests, or technical help. Email us at peacecode.in@gmail.com. We're here for college students across India.",
  alternates: {
    canonical: "https://www.peacecode.in/contact",
  },
  openGraph: {
    title: "Contact Peace Code — Student Mental Health Support",
    description: "Get in touch with Peace Code for support, partnerships, press inquiries, or feedback.",
    url: "https://www.peacecode.in/contact",
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
