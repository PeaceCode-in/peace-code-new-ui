import type { Metadata } from "next";
import AnnouncementsRoute from "../../routes/announcements";

export const metadata: Metadata = {
  title: "Announcements — Latest Updates from Peace Code",
  description:
    "Stay updated with the latest announcements from Peace Code — India's compassionate digital psychological intervention platform for college students. New features, partnerships, campus events, and mental wellness updates.",
  alternates: {
    canonical: "https://www.peacecode.in/announcements",
  },
  openGraph: {
    title: "Announcements — Latest Updates from Peace Code",
    description: "Latest news and updates from India's leading student mental health platform.",
    url: "https://www.peacecode.in/announcements",
    type: "website",
  },
};

export default function Page() {
  return <AnnouncementsRoute />;
}
