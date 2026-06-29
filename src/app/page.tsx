import type { Metadata } from "next";
import Index from "../routes/index";

export const metadata: Metadata = {
  title: "Peace Code — Free Mental Health Support for College Students | #1 Student Wellness Platform",
  description:
    "Peace Code is India's #1 free mental health platform for college students. Get 24/7 anonymous peer support, AI wellness chatbot, licensed therapist counseling, guided journaling, breathing exercises & clinical screenings. Trusted by DTU students. 100% private, stigma-free.",
  alternates: {
    canonical: "https://www.peacecode.in",
  },
  openGraph: {
    title: "Peace Code — Free Mental Health Support for College Students",
    description:
      "India's leading student mental wellness platform. Anonymous peer support, AI chatbot, licensed therapists, journaling & breathing exercises — all free and private.",
    url: "https://www.peacecode.in",
    type: "website",
  },
  twitter: {
    title: "Peace Code — Free Mental Health Support for College Students",
    description:
      "India's #1 student wellness platform. Anonymous support, AI chatbot, therapists & more — free, private, 24/7.",
  },
};

// Homepage structured data: FAQPage + HowTo + ItemList schemas
const homepageStructuredData = [
  // ─── FAQPage Schema (from the accordion content) ──────────────
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does Peace Code help with academic burnout and exam stress?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PeaceCode offers guided 5-minute reset rituals, pomodoro breathing techniques, and late-night peer support rooms specifically designed for students during finals. Our AI-powered wellness assistant delivers real-time burnout prevention routines including personalized micro-breaks and guided focus sessions tailored to your study schedule."
        }
      },
      {
        "@type": "Question",
        "name": "Can Peace Code help with social anxiety and campus isolation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. PeaceCode provides anonymous text-first peer support rooms that make the first hello easy. You can match with peers who understand dining-hall dread and weekend loneliness. Our Anonymous Peer Circles provide immediate, judgment-free connections, allowing you to discuss campus life struggles safely."
        }
      },
      {
        "@type": "Question",
        "name": "Does Peace Code address imposter syndrome in competitive college majors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. PeaceCode offers honest journaling prompts, success stories from founders and seniors, and 1:1 chats with mentors who've sat in the same lecture halls. Our imposter syndrome journals and anonymous peer validation help you realize you're not alone in feeling this way."
        }
      },
      {
        "@type": "Question",
        "name": "Is Peace Code free for college students?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Peace Code is completely free for college students. Our core services including the AI wellness chatbot (Peace Bot), anonymous peer support rooms, guided journaling, breathing exercises, focus timer, gratitude wall, and clinical screenings are all available at no cost. We also offer affordable access to licensed therapists."
        }
      },
      {
        "@type": "Question",
        "name": "Is my data private on Peace Code?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Privacy is our foundation. All peer interactions are anonymous, clinical screenings (PHQ-9, GAD-7) are processed entirely on your local device, and your data never reaches university records. We are HIPAA-aligned and follow ISO 27001 security standards."
        }
      },
      {
        "@type": "Question",
        "name": "What mental health tools does Peace Code offer for students?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Peace Code offers a comprehensive suite: (1) Peace Bot — 24/7 AI wellness chatbot using cognitive behavioral techniques, (2) Peace Buddies — anonymous peer support rooms, (3) Licensed Therapist Counseling — affordable, private sessions, (4) Guided Journaling & Mood Tracking, (5) Breathing Exercises — box breathing, 4-7-8, physiological sighs, (6) Focus Timer — kind Pomodoro with breath cues, (7) Gratitude Wall — anonymous small wins sharing, (8) Clinical Screenings — PHQ-9, GAD-7 assessments."
        }
      },
      {
        "@type": "Question",
        "name": "Which universities use Peace Code?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Peace Code is currently in collaboration with Delhi Technological University (DTU) and is expanding to more universities across India. Our platform is designed for students at any college or university."
        }
      }
    ]
  },

  // ─── HowTo Schema (3-step how it works) ───────────────────────
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Start Your Mental Wellness Journey with Peace Code",
    "description": "Getting mental health support as a college student is simple with Peace Code. Follow these 3 steps to begin your private, stigma-free wellness journey.",
    "totalTime": "PT5M",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Tell us how you feel",
        "text": "A private check-in designed for students. No forms, no pressure, and no need to have the right words. Start wherever you are. Your check-in is anonymous from the first moment.",
        "url": "https://www.peacecode.in/#mood"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Find your people",
        "text": "Discover anonymous peer support spaces where students listen, share, and support one another. Sometimes the biggest relief is realizing you are not the only one feeling this way.",
        "url": "https://www.peacecode.in/peace-buddies"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Move forward gently",
        "text": "Build small habits of reflection, celebrate quiet progress, and receive professional support at your own pace. Growth does not need to be rushed. Access licensed therapists when you're ready.",
        "url": "https://www.peacecode.in/psychologist"
      }
    ]
  },

  // ─── WebPage Schema ───────────────────────────────────────────
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.peacecode.in/#webpage",
    "url": "https://www.peacecode.in/",
    "name": "Peace Code — Free Mental Health Support for College Students",
    "description": "India's leading free mental health platform built exclusively for college students. Offering anonymous peer support, AI wellness chatbot, licensed therapist counseling, and more.",
    "isPartOf": { "@id": "https://www.peacecode.in/#website" },
    "about": { "@id": "https://www.peacecode.in/#organization" },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://www.peacecode.in/hero-background.webp"
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".hero-description", ".section-heading"]
    },
    "specialty": "Student Mental Health & Wellness"
  },

  // ─── ItemList Schema (Core Features) ──────────────────────────
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Peace Code Mental Health Tools for Students",
    "description": "Complete list of free mental health and wellness tools available to college students on the Peace Code platform.",
    "numberOfItems": 8,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Peace Bot — AI Wellness Chatbot",
        "url": "https://www.peacecode.in/peacebot",
        "description": "24/7 AI-powered digital companion that uses cognitive behavioral techniques to help students process anxiety and academic pressure."
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Peace Buddies — Anonymous Peer Support",
        "url": "https://www.peacecode.in/peace-buddies",
        "description": "Anonymous, moderated peer support rooms where college students connect with others experiencing similar challenges."
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Licensed Therapist Counseling",
        "url": "https://www.peacecode.in/psychologist",
        "description": "Connect with licensed therapists who specialize in college student mental health. Affordable, stigma-free, private."
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Guided Journaling & Mood Tracking",
        "url": "https://www.peacecode.in/journal",
        "description": "Private journaling space with gentle prompts. Track mood patterns and build small habits of reflection."
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Breathing Exercises",
        "url": "https://www.peacecode.in/breathe",
        "description": "Box breathing, 4-7-8, and physiological sighs for instant anxiety and stress relief between classes."
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Focus Timer (Kind Pomodoro)",
        "url": "https://www.peacecode.in/focus",
        "description": "Pomodoro timer with built-in breath cues and gentle break reminders designed for student study sessions."
      },
      {
        "@type": "ListItem",
        "position": 7,
        "name": "Gratitude Wall",
        "url": "https://www.peacecode.in/gratitude",
        "description": "An anonymous wall of small wins shared by students. Because waking up on time is a victory."
      },
      {
        "@type": "ListItem",
        "position": 8,
        "name": "Clinical Mental Health Screenings",
        "url": "https://www.peacecode.in/screening",
        "description": "Validated PHQ-9 and GAD-7 assessments processed entirely on your device. 100% private."
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      {homepageStructuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      <Index />
    </>
  );
}
