import type { Metadata } from "next";
import ScreeningRoute from "../../routes/screening";

export const metadata: Metadata = {
  title: "Free Mental Health Screening for Students — PHQ-9 & GAD-7 Assessments",
  description:
    "Take free, validated clinical mental health screenings (PHQ-9, GAD-7) designed for college students. 100% private — processed entirely on your device. Understand your anxiety and depression levels with evidence-based assessments.",
  alternates: {
    canonical: "https://www.peacecode.in/screening",
  },
  openGraph: {
    title: "Free Mental Health Screening for Students — PHQ-9 & GAD-7 | Peace Code",
    description: "Take free, validated mental health assessments. 100% private, processed on your device. For college students.",
    url: "https://www.peacecode.in/screening",
    type: "website",
  },
};

export default function Page() {
  return <ScreeningRoute />;
}
