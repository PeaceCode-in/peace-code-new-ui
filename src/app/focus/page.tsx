import type { Metadata } from "next";
import FocusRoute from "../../routes/focus";

export const metadata: Metadata = {
  title: "Focus Timer for Students — Kind Pomodoro with Breathing Cues",
  description:
    "Free Pomodoro focus timer designed for college students. Built-in breathing cues during breaks, gentle reminders, and study session tracking. Combat exam burnout with mindful productivity sessions.",
  alternates: {
    canonical: "https://www.peacecode.in/focus",
  },
  openGraph: {
    title: "Focus Timer for Students — Kind Pomodoro | Peace Code",
    description: "A Pomodoro timer that's actually kind. Built-in breathing cues, gentle breaks, and study session tracking for students.",
    url: "https://www.peacecode.in/focus",
    type: "website",
  },
};

export default function Page() {
  return <FocusRoute />;
}
