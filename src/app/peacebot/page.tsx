import type { Metadata } from "next";
import PeaceBotRoute from "../../routes/peacebot";

export const metadata: Metadata = {
  title: "Peace Bot — 24/7 AI Mental Health Chatbot for Students",
  description:
    "Meet Peace Bot, your free 24/7 AI-powered mental wellness companion for college students. Uses cognitive behavioral techniques to help you process anxiety, stress, and academic pressure — completely private, anonymous, and always awake.",
  alternates: {
    canonical: "https://www.peacecode.in/peacebot",
  },
  openGraph: {
    title: "Peace Bot — 24/7 AI Mental Health Chatbot for Students | Peace Code",
    description: "Free AI chatbot that helps college students with anxiety, stress, and academic pressure. Private, anonymous, always awake.",
    url: "https://www.peacecode.in/peacebot",
    type: "website",
  },
};

export default function Page() {
  return <PeaceBotRoute />;
}
