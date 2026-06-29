import type { Metadata } from "next";
import JournalLandingPage from "../../routes/journal";

export const metadata: Metadata = {
  title: "Guided Journaling & Mood Tracking for Students — Private & Free",
  description:
    "Free guided journaling and mood tracking for college students. Gentle prompts when the page feels blank, daily mood analysis, and progress celebration. Build small habits of reflection in a completely private space.",
  alternates: {
    canonical: "https://www.peacecode.in/journal",
  },
  openGraph: {
    title: "Guided Journaling & Mood Tracking | Peace Code",
    description: "Private journaling space with gentle prompts for college students. Track your mood, reflect daily, and celebrate progress.",
    url: "https://www.peacecode.in/journal",
    type: "website",
  },
};

export default function Page() {
  return <JournalLandingPage />;
}
