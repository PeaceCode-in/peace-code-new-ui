import type { Metadata } from "next";
import PsychologistRoute from "../../routes/psychologist";

export const metadata: Metadata = {
  title: "Student Counseling — Connect with Licensed Therapists Online",
  description:
    "Connect with licensed psychologists and therapists who specialize in college student mental health. Affordable, stigma-free, completely private professional counseling. No waitlists, no paperwork, no university records.",
  alternates: {
    canonical: "https://www.peacecode.in/psychologist",
  },
  openGraph: {
    title: "Student Counseling — Licensed Therapists Online | Peace Code",
    description: "Affordable, private counseling from licensed therapists who understand college life. No waitlists, no paperwork.",
    url: "https://www.peacecode.in/psychologist",
    type: "website",
  },
};

export default function Page() {
  return <PsychologistRoute />;
}
