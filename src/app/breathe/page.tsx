import type { Metadata } from "next";
import BreatheRoute from "../../routes/breathe";

export const metadata: Metadata = {
  title: "Breathing Exercises for Students — Box Breathing, 4-7-8 & More",
  description:
    "Free guided breathing exercises for college students. Practice box breathing, 4-7-8 technique, and physiological sighs for instant anxiety relief before exams, presentations, and stressful moments. 60-second stress resets.",
  alternates: {
    canonical: "https://www.peacecode.in/breathe",
  },
  openGraph: {
    title: "Free Breathing Exercises for Students — Instant Anxiety Relief | Peace Code",
    description: "60-second guided breathing exercises for instant stress relief. Box breathing, 4-7-8, and physiological sighs for students.",
    url: "https://www.peacecode.in/breathe",
    type: "website",
  },
};

export default function Page() {
  return <BreatheRoute />;
}
