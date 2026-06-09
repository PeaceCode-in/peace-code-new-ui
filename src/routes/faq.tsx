"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, Search, Sparkles } from "lucide-react";
import { Nav, Footer } from "./index";
import Link from "next/link";

const categories = ["All", "General Info", "Therapy & Services", "Account & Billing", "Crisis Support", "Student Life"];

const faqsData = [
  // General Info (10)
  { category: "General Info", q: "What is PeaceCode?", a: "PeaceCode is a comprehensive mental health and wellness platform designed specifically for college students." },
  { category: "General Info", q: "How do I sign up?", a: "You can sign up by clicking the 'Sign In' button on our homepage and following the registration flow using your university email." },
  { category: "General Info", q: "Is my data private?", a: "Absolutely. We employ enterprise-grade encryption and comply with all major healthcare privacy standards." },
  { category: "General Info", q: "Who runs PeaceCode?", a: "We are a team of clinical psychologists, engineers, and former student advocates." },
  { category: "General Info", q: "Is PeaceCode only for US students?", a: "Currently, our core clinical services are US-based, but our wellness tools are available globally." },
  { category: "General Info", q: "Can non-students use PeaceCode?", a: "While tailored for students, anyone can access our public resources and mindfulness tools." },
  { category: "General Info", q: "How do I contact support?", a: "You can reach out via our Contact page or email hello@peacecode.in." },
  { category: "General Info", q: "Are the resources evidence-based?", a: "Yes, all our clinical tools and articles are reviewed by licensed professionals." },
  { category: "General Info", q: "Can I use PeaceCode on my phone?", a: "Yes! Our web application is fully responsive and optimized for mobile devices." },
  { category: "General Info", q: "How often are new resources added?", a: "We update our library weekly with new articles, meditations, and tools." },

  // Therapy & Services (10)
  { category: "Therapy & Services", q: "How does matching work?", a: "You fill out a brief intake assessment, and our algorithm matches you with 3 therapists that fit your needs." },
  { category: "Therapy & Services", q: "Can I switch therapists?", a: "Yes, you can request a new therapist at any time directly through your dashboard." },
  { category: "Therapy & Services", q: "How long is a therapy session?", a: "Standard sessions are 45-50 minutes long." },
  { category: "Therapy & Services", q: "Do you offer group therapy?", a: "Yes, we facilitate peer-support groups and specialized group therapy sessions." },
  { category: "Therapy & Services", q: "What happens if I miss a session?", a: "Please refer to your specific therapist's cancellation policy. Generally, a 24-hour notice is required." },
  { category: "Therapy & Services", q: "Is text therapy available?", a: "Yes, we offer asynchronous messaging as a supplement to video sessions." },
  { category: "Therapy & Services", q: "Are all therapists licensed?", a: "Yes, every provider on our platform is fully licensed in their respective state." },
  { category: "Therapy & Services", q: "Do you prescribe medication?", a: "We have psychiatric providers who can prescribe non-controlled medications if appropriate." },
  { category: "Therapy & Services", q: "Can I invite a family member to a session?", a: "Yes, with your therapist's consent, you can invite a guest to a video session." },
  { category: "Therapy & Services", q: "How do I prepare for my first session?", a: "Find a quiet, private space, check your internet connection, and come with an open mind." },

  // Account & Billing (10)
  { category: "Account & Billing", q: "Do you accept insurance?", a: "Yes, we are in-network with most major insurance providers. You can verify your coverage during sign-up." },
  { category: "Account & Billing", q: "What if I don't have insurance?", a: "We offer an out-of-pocket sliding scale based on your financial situation." },
  { category: "Account & Billing", q: "How do I update my payment method?", a: "Navigate to Account Settings > Billing to update your credit card information." },
  { category: "Account & Billing", q: "Can my university pay for this?", a: "Many universities partner with us to subsidize or fully cover the cost. Use your .edu email to check eligibility." },
  { category: "Account & Billing", q: "How do I cancel my subscription?", a: "You can pause or cancel your subscription at any time from your Account Settings." },
  { category: "Account & Billing", q: "Are there hidden fees?", a: "No, our pricing is fully transparent. You only pay the listed price or your insurance co-pay." },
  { category: "Account & Billing", q: "Can I get a refund for an unused session?", a: "Refunds are handled on a case-by-case basis. Please contact support." },
  { category: "Account & Billing", q: "How do I view my invoice history?", a: "All past invoices and receipts can be downloaded from your Billing dashboard." },
  { category: "Account & Billing", q: "Do you offer financial aid?", a: "Yes, we have a grant program for students demonstrating extreme financial hardship." },
  { category: "Account & Billing", q: "Will my parents know I am using this?", a: "If you are 18 or older, your health records are completely private, even if on a parent's insurance (though they may see an EOB)." },

  // Crisis Support (10)
  { category: "Crisis Support", q: "What if I am in a crisis right now?", a: "Please call 911 or go to the nearest emergency room immediately. PeaceCode is not for emergencies." },
  { category: "Crisis Support", q: "Do you have a crisis hotline?", a: "We do not operate our own hotline, but we provide quick-links to national crisis numbers like 988." },
  { category: "Crisis Support", q: "What is 988?", a: "988 is the National Suicide Prevention Lifeline in the US, available 24/7 for free." },
  { category: "Crisis Support", q: "Can I text someone in a crisis?", a: "Yes, you can text HOME to 741741 to reach the Crisis Text Line." },
  { category: "Crisis Support", q: "Does my therapist offer emergency support?", a: "Therapists are not available 24/7. They will outline their specific availability during your first session." },
  { category: "Crisis Support", q: "How can I help a friend in crisis?", a: "Stay with them, listen without judgment, and help them contact emergency services or a crisis line." },
  { category: "Crisis Support", q: "What is a safety plan?", a: "A safety plan is a personalized, step-by-step plan you create with your therapist to manage severe distress." },
  { category: "Crisis Support", q: "Are there local resources available?", a: "Our app directory can point you to local campus police and urgent care centers based on your university." },
  { category: "Crisis Support", q: "Is the crisis text line confidential?", a: "Yes, it is fully confidential unless they believe you are in imminent physical danger." },
  { category: "Crisis Support", q: "What if I experience a panic attack?", a: "Try using our 'Breathe' wellness tool, but if it persists and feels like a medical emergency, seek immediate care." },

  // Student Life (10)
  { category: "Student Life", q: "How do I balance therapy and classes?", a: "Our therapists offer flexible scheduling, including evenings and weekends, to fit around your class schedule." },
  { category: "Student Life", q: "Can therapy help with exam anxiety?", a: "Absolutely. We have specific modules and therapists trained in academic performance anxiety." },
  { category: "Student Life", q: "What about roommate conflicts?", a: "Therapy is a great place to build communication strategies to handle difficult living situations." },
  { category: "Student Life", q: "Is homesickness normal?", a: "Yes! Almost every student experiences it. We have support groups specifically for first-year students." },
  { category: "Student Life", q: "How do I deal with imposter syndrome?", a: "We offer workshops and 1-on-1 counseling to help reframe negative self-talk regarding academic worth." },
  { category: "Student Life", q: "Do you help with career anxiety?", a: "While we don't offer career counseling, we can help manage the anxiety and stress associated with job hunting." },
  { category: "Student Life", q: "What if I'm thinking of dropping out?", a: "Speak with your academic advisor, but a therapist can help you process the emotional weight of that decision." },
  { category: "Student Life", q: "How do I make friends on campus?", a: "We have articles and tools on building social confidence and finding your community." },
  { category: "Student Life", q: "Can you help me build better study habits?", a: "Our AI support and behavioral tools can help you set up healthy routines and boundaries." },
  { category: "Student Life", q: "Does the platform work during study abroad?", a: "Yes, our digital tools are accessible anywhere, though direct therapy depends on international licensing laws." }
];

function FaqItem({ item, isOpen, onClick }: { item: any, isOpen: boolean, onClick: () => void }) {
  return (
    <motion.div 
      initial={false}
      animate={{ backgroundColor: isOpen ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.4)" }}
      className="border border-white/60 backdrop-blur-xl rounded-[1.5rem] overflow-hidden transition-all duration-500 shadow-sm hover:shadow-md"
    >
      <button 
        onClick={onClick}
        className="w-full text-left px-6 py-5 flex items-center justify-between outline-none"
      >
        <span className="font-semibold text-[17px] text-[#1E3048] pr-8">{item.q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="shrink-0 w-8 h-8 rounded-full bg-[#E2D9FF]/50 flex items-center justify-center text-[#1E3A8A]"
        >
          <Plus className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 pb-6 pt-1 text-[#4F6072] text-[16px] leading-relaxed">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqRoute() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const { scrollY } = useScroll();
  const illustration1Y = useTransform(scrollY, [0, 1000], [0, -150]);
  const illustration2Y = useTransform(scrollY, [0, 2000], [0, -250]);

  const filteredFaqs = faqsData.filter(faq => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch = faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden text-slate-900 bg-[#f7f3ea]">
      {/* Background Soft Gradient */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: "linear-gradient(to bottom, #D9E4EF 0%, #F2E4EA 30%, #f7f3ea 70%)"
        }}
      />

      {/* First Illustration - Top Right Edge */}
      <motion.img 
        src="/Gm6CrXzxO7OGmfeRPBsg12Uo.avif" 
        alt=""
        style={{ y: illustration1Y }}
        className="absolute right-[-10vw] top-[5%] w-[40vw] max-w-[600px] object-contain pointer-events-none opacity-[0.85] mix-blend-multiply z-0"
      />

      <Nav />
      
      <section className="relative pt-44 pb-20 md:py-48 px-6 md:px-10 z-20">
        <div className="mx-auto max-w-[1024px] text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#1E3A8A]" />
            <span className="text-[13px] font-bold text-[#1E3048] tracking-wide uppercase">Support Center</span>
          </div>
          <h2 className="main-page-title mb-6 relative z-10">
            How can we help?
          </h2>
          <p className="text-[#4F6072] max-w-[650px] mx-auto text-[17px] md:text-[19px] leading-relaxed">
            Find answers to our most frequently asked questions. We've organized them to make it easy for you to find exactly what you need.
          </p>
        </div>

        {/* Second Illustration - Middle Left */}
        <motion.img 
          src="/SbSqGCYAPE8Sz36boHNMBd7o2kY.avif" 
          alt=""
          style={{ y: illustration2Y }}
          className="absolute left-[-15vw] md:left-[-10vw] top-[30%] w-[35vw] max-w-[500px] object-contain pointer-events-none opacity-[0.85] mix-blend-multiply z-0"
        />

        <div className="max-w-[800px] mx-auto relative z-20">
          
          {/* Search Bar */}
          <div className="relative mb-10">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/60 backdrop-blur-md border border-white rounded-full pl-14 pr-6 py-4 text-[#1E3048] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20 transition-all text-[16px] shadow-sm"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(null);
                }}
                className={`px-5 py-2.5 rounded-full text-[14px] font-medium transition-all duration-300 border ${
                  activeCategory === cat 
                    ? "bg-[#1E3048] text-white border-transparent shadow-md" 
                    : "bg-white/40 text-[#4F6072] border-white/60 hover:bg-white/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQs List */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, i) => (
                <FaqItem 
                  key={i} 
                  item={faq} 
                  isOpen={openIndex === i}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))
            ) : (
              <div className="text-center py-20 text-[#4F6072]">
                No questions found matching your search.
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Cross Navigation - Hyper Minimalist Links */}
      <section className="relative py-20 md:py-32 px-6 md:px-10 z-20 border-t border-slate-200/50 mt-10">
        <div className="max-w-[1024px] mx-auto text-center">
          <h3 className="font-serif text-[28px] text-[#1E3048] mb-12">Still need help?</h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {[
              { label: "Contact Support", href: "/contact" },
              { label: "Read our Blog", href: "/blog" },
              { label: "About PeaceCode", href: "/#about" },
              { label: "Join the Team", href: "/careers" }
            ].map((link, i) => (
              <Link 
                key={i} 
                href={link.href}
                className="group relative text-[16px] font-medium text-[#4F6072] hover:text-[#1E3A8A] transition-colors"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#1E3A8A] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hyper minimalist footer override */}
      <div className="relative w-full bg-transparent">
        <style>{`
          .footer-black-override * {
            color: #0f172a !important;
            border-color: rgba(0,0,0,0.15) !important;
          }
          .footer-black-override button,
          .footer-black-override span[style*="background"] {
            background: rgba(0,0,0,0.03) !important;
          }
          .footer-black-override button:hover {
            background: rgba(0,0,0,0.08) !important;
          }
          .footer-black-override a:hover {
            color: #1E3A8A !important;
            background: transparent !important;
          }
        `}</style>
        <div className="footer-black-override">
          <Footer />
        </div>
      </div>
    </main>
  );
}
