import type { Metadata } from "next";
import "../styles.css";
import "./globals.css";


export const metadata: Metadata = {
  title: "PeaceCode",
  description:
    "PeaceCode is a minimalist, single-page landing page for a student mental wellness platform.",
  authors: [{ name: "PeaceCode" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "PeaceCode",
    description:
      "PeaceCode is a minimalist, single-page landing page for a student mental wellness platform.",
    images: [
      {
        url: "/assets/peacecode-logo.svg",
        width: 800,
        height: 600,
        alt: "PeaceCode Logo",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
