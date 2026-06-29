import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy",
  description:
    "Peace Code's cancellation and refund policy for counseling sessions and subscriptions. Learn about session rescheduling, late cancellation fees, subscription cancellations, and extenuating circumstances.",
  alternates: {
    canonical: "https://www.peacecode.in/cancellation",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CancellationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
