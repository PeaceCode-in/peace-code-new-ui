import type { Metadata } from "next";
import CareersRoute from "../../routes/careers";

export const metadata: Metadata = {
  title: "Careers at Peace Code — Join India's Student Mental Health Mission",
  description:
    "Join Peace Code and help build India's most compassionate student mental health platform. We're hiring designers, developers, psychologists, and community builders who want to make college mental wellness accessible.",
  alternates: {
    canonical: "https://www.peacecode.in/careers",
  },
  openGraph: {
    title: "Careers at Peace Code — Join the Student Mental Health Mission",
    description: "Help build India's leading student mental wellness platform. Open positions in design, development, psychology, and more.",
    url: "https://www.peacecode.in/careers",
    type: "website",
  },
};

export default function Page() {
  return <CareersRoute />;
}
