import type { Metadata } from "next";
import { Fraunces, Instrument_Serif, Inter, DM_Serif_Display } from "next/font/google";
import "../styles.css";
import "./globals.css";
import GlobalErrorListener from "../components/GlobalErrorListener";
import Protection from "../components/Protection";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-serif-display",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://www.peacecode.in"),
  title: {
    default: "Peace Code | Student Mental Wellness Platform",
    template: "%s | Peace Code",
  },
  description:
    "Peace Code provides digital self-help resources, student mental wellness tracking, and access to licensed professionals to help you build a good life for yourself.",
  keywords: ["mental wellness", "student health", "counseling", "therapy", "peacecode", "mental health platform", "students", "psychologist"],
  authors: [{ name: "Peace Code", url: "https://www.peacecode.in" }],
  creator: "Peace Code",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.peacecode.in",
    title: "Peace Code | Student Mental Wellness Platform",
    description:
      "Peace Code provides digital self-help resources, student mental wellness tracking, and access to licensed professionals to help you build a good life for yourself.",
    siteName: "Peace Code",
    images: [
      {
        url: "/assets/peacecode-logo.svg",
        width: 800,
        height: 600,
        alt: "Peace Code Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peace Code | Student Mental Wellness Platform",
    description:
      "Peace Code provides digital self-help resources, student mental wellness tracking, and access to licensed professionals to help you build a good life for yourself.",
    images: ["/assets/peacecode-logo.svg"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon-180x180.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.peacecode.in/#website",
        "url": "https://www.peacecode.in/",
        "name": "Peace Code",
        "description": "Peacecode is an AI-powered mental health platform that helps college students by providing anonymous student peer support and stigma-free wellness resources. We offer real-time exam anxiety tools and college burnout prevention strategies to create a 24/7 digital sanctuary where students can safely vent, track moods, and access clinical counseling.",
        "publisher": {
          "@id": "https://www.peacecode.in/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://www.peacecode.in/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://www.peacecode.in/#organization",
        "name": "Peace Code",
        "url": "https://www.peacecode.in/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.peacecode.in/nav%20bar%20logo.svg"
        },
        "sameAs": [
          "https://www.linkedin.com/company/peacecode/"
        ]
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/hero-background.png" as="image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`antialiased ${fraunces.variable} ${instrumentSerif.variable} ${inter.variable} ${dmSerifDisplay.variable}`} suppressHydrationWarning>
        <GlobalErrorListener />
        <Protection />
        {children}
      </body>
    </html>
  );
}
