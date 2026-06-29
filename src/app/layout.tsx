import type { Metadata } from "next";
import "../styles.css";
import "./globals.css";
import GlobalErrorListener from "../components/GlobalErrorListener";
import Protection from "../components/Protection";
export const metadata: Metadata = {
  metadataBase: new URL("https://www.peacecode.in"),
  title: {
    default: "Peace Code — Free Mental Health Support for College Students | Student Wellness Platform",
    template: "%s | Peace Code — Student Mental Wellness",
  },
  description:
    "Peace Code is India's leading free mental health platform built exclusively for college students. Access anonymous peer support, AI wellness chatbot, licensed therapist counseling, guided journaling, breathing exercises & clinical mental health screenings — all 100% private, stigma-free, and available 24/7. Trusted by students at DTU and universities across India.",
  keywords: [
    "mental health website for students",
    "mental health website for college students",
    "best mental health app for students",
    "free mental health support for students",
    "student mental wellness platform",
    "college student mental health",
    "student counseling online",
    "anonymous peer support students",
    "mental health app India",
    "student therapy online free",
    "college burnout help",
    "exam anxiety support",
    "student stress management",
    "online counseling for college students",
    "mental wellness tools for students",
    "PeaceCode",
    "peace code mental health",
    "student wellbeing platform",
    "digital mental health for students",
    "campus mental health support",
    "free therapy for students India",
    "student mental health resources",
    "academic anxiety help",
    "imposter syndrome students",
    "social anxiety college students",
  ],
  authors: [{ name: "Peace Code", url: "https://www.peacecode.in" }],
  creator: "Peace Code",
  publisher: "Peace Code",
  category: "Health & Wellness",
  classification: "Mental Health",
  alternates: {
    canonical: "https://www.peacecode.in",
  },
  robots: {
    index: true,
    follow: true,
    noimageindex: true,
    "max-image-preview": "none",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-image-preview": "none",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.peacecode.in",
    title: "Peace Code — Free Mental Health Support for College Students",
    description:
      "India's #1 student mental wellness platform. Anonymous peer support, AI chatbot, licensed therapists, journaling, breathing exercises & screenings — free, private, 24/7. Trusted by students at DTU.",
    siteName: "Peace Code",
    images: [
      {
        url: "/assets/peacecode-og-image.png",
        width: 1200,
        height: 630,
        alt: "Peace Code — Free Mental Health Support for College Students",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@peacecode",
    creator: "@peacecode",
    title: "Peace Code — Free Mental Health Support for College Students",
    description:
      "India's #1 student mental wellness platform. Anonymous peer support, AI chatbot, licensed therapists & more — free, private, 24/7.",
    images: ["/assets/peacecode-og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon-180x180.png", sizes: "180x180" },
      { url: "/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/apple-icon-120x120.png", sizes: "120x120" },
    ],
  },
  manifest: "/manifest.json",
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-verification-code",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Peace Code",
    "application-name": "Peace Code",
    "msapplication-TileColor": "#98A6D4",
    "theme-color": "#98A6D4",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      // ─── WebSite Schema ───────────────────────────────────────────
      {
        "@type": "WebSite",
        "@id": "https://www.peacecode.in/#website",
        "url": "https://www.peacecode.in/",
        "name": "Peace Code",
        "alternateName": ["PeaceCode", "Peace Code India", "Peace Code Mental Health"],
        "description": "India's leading free mental health platform built exclusively for college students. Offering anonymous peer support, AI wellness chatbot, licensed therapist counseling, guided journaling, breathing exercises, and clinical mental health screenings.",
        "publisher": {
          "@id": "https://www.peacecode.in/#organization"
        },
        "inLanguage": "en-IN",
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

      // ─── Organization / MedicalOrganization Schema ────────────────
      {
        "@type": ["Organization", "MedicalOrganization"],
        "@id": "https://www.peacecode.in/#organization",
        "name": "Peace Code",
        "alternateName": "PeaceCode",
        "url": "https://www.peacecode.in/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.peacecode.in/nav%20bar%20logo.svg",
          "width": 200,
          "height": 60,
          "caption": "Peace Code Logo"
        },
        "image": "https://www.peacecode.in/nav%20bar%20logo.svg",
        "description": "Peace Code is a free, stigma-free digital mental health platform designed exclusively for college students in India. We provide anonymous peer support, AI-powered wellness tools, licensed therapist access, guided journaling, breathing exercises, and validated clinical screenings — all available 24/7 with complete privacy.",
        "slogan": "Find your peace with PeaceCode.",
        "foundingDate": "2024",
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "audience": {
          "@type": "EducationalAudience",
          "educationalRole": "student",
          "audienceType": "College Students"
        },
        "knowsAbout": [
          "Student Mental Health",
          "College Counseling",
          "Peer Support",
          "Academic Burnout",
          "Exam Anxiety",
          "Imposter Syndrome",
          "Social Anxiety",
          "Mental Wellness Technology",
          "Digital Therapeutics",
          "Cognitive Behavioral Therapy"
        ],
        "email": "peacecode.in@gmail.com",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "email": "peacecode.in@gmail.com",
            "availableLanguage": ["English", "Hindi"],
            "areaServed": "IN"
          }
        ],
        "sameAs": [
          "https://www.instagram.com/peacecode.in",
          "https://twitter.com/peacecode",
          "https://www.linkedin.com/company/peacecode/",
          "https://www.linkedin.com/company/peacecode-in/"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Peace Code Student Mental Health Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI Wellness Chatbot (Peace Bot)",
                "description": "24/7 AI-powered mental wellness companion for students. Uses cognitive behavioral framing to help students process anxiety, stress, and academic pressure privately.",
                "url": "https://www.peacecode.in/peacebot",
                "provider": { "@id": "https://www.peacecode.in/#organization" },
                "serviceType": "Digital Mental Health Support",
                "audience": { "@type": "EducationalAudience", "educationalRole": "student" },
                "availableChannel": { "@type": "ServiceChannel", "serviceUrl": "https://www.peacecode.in/peacebot" }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Anonymous Peer Support",
                "description": "Moderated, anonymous peer support rooms where college students connect with others experiencing similar challenges — exam stress, social anxiety, loneliness, and more.",
                "url": "https://www.peacecode.in/peace-buddies",
                "provider": { "@id": "https://www.peacecode.in/#organization" },
                "serviceType": "Peer Counseling"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Licensed Therapist Counseling",
                "description": "Connect with licensed, vetted therapists and clinical psychologists who specialize in college student mental health. Affordable, stigma-free, and private.",
                "url": "https://www.peacecode.in/psychologist",
                "provider": { "@id": "https://www.peacecode.in/#organization" },
                "serviceType": "Professional Counseling"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Guided Journaling & Mood Tracking",
                "description": "Private journaling space with gentle prompts for emotional processing. Track mood patterns and build small habits of reflection.",
                "url": "https://www.peacecode.in/journal",
                "provider": { "@id": "https://www.peacecode.in/#organization" },
                "serviceType": "Mental Wellness Tool"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Breathing Exercises",
                "description": "Guided breathing exercises including box breathing, 4-7-8, and physiological sighs for instant anxiety and stress relief.",
                "url": "https://www.peacecode.in/breathe",
                "provider": { "@id": "https://www.peacecode.in/#organization" },
                "serviceType": "Stress Management Tool"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Clinical Mental Health Screenings",
                "description": "Validated clinical assessments (PHQ-9, GAD-7) processed entirely on your device. Completely private mental health screening for students.",
                "url": "https://www.peacecode.in/screening",
                "provider": { "@id": "https://www.peacecode.in/#organization" },
                "serviceType": "Mental Health Assessment"
              }
            }
          ]
        }
      },

      // ─── BreadcrumbList Schema (Global) ───────────────────────────
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.peacecode.in/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.peacecode.in/"
          }
        ]
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload hero image */}
        <link rel="preload" href="/hero-background.webp" as="image" />
        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <GlobalErrorListener />
        <Protection />
        {children}
      </body>
    </html>
  );
}
