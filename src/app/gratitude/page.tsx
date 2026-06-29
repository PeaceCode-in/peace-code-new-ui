import type { Metadata } from "next";
import GratitudeRoute from "../../routes/gratitude";

export const metadata: Metadata = {
  title: "Gratitude Wall — Anonymous Student Wins & Positive Vibes",
  description:
    "Share and read anonymous small wins from college students. A quiet wall of gratitude, hope, and tiny victories. Because waking up on time is a victory. Free, anonymous, and uplifting.",
  alternates: {
    canonical: "https://www.peacecode.in/gratitude",
  },
  openGraph: {
    title: "Gratitude Wall — Anonymous Student Wins | Peace Code",
    description: "A quiet wall of small wins shared by college students. Anonymous, uplifting, and always open.",
    url: "https://www.peacecode.in/gratitude",
    type: "website",
  },
};

export default function Page() {
  return <GratitudeRoute />;
}
