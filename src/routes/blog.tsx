"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Search } from "lucide-react";
import { Nav, Footer } from "./index";

export default function BlogRoute() {
  const { scrollY } = useScroll();
  
  // Parallax animations for clouds and birds
  const cloudLeftY = useTransform(scrollY, [0, 800], [0, -100]);
  const cloudRightY = useTransform(scrollY, [0, 800], [0, -160]);
  const birdsY = useTransform(scrollY, [0, 800], [0, -80]);

  const posts = [
    {
      tag: "News",
      title: "PeaceCode Selected for Campus Wellness Model",
      img: "/ChatGPT Image Jun 3, 2026, 03_03_06 PM.png",
    },
    {
      tag: "News",
      title: "PeaceCode Appoints Former Campus Counselor to Lead Clinical Strategy",
      img: "/ChatGPT Image Jun 3, 2026, 03_08_14 PM.png",
    },
    {
      tag: "News",
      title: "PeaceCode raises $6.5M Seed led by General Catalyst",
      img: "/ChatGPT Image Jun 3, 2026, 03_35_21 PM.png",
    },
    {
      tag: "Anxiety & Health",
      title: "Understanding Insurance Coverage for Student Therapy: Your Questions Answered",
      img: "/ChatGPT Image Jun 3, 2026, 03_03_06 PM.png", 
    },
    {
      tag: "For Peers",
      title: "Having the Hard Conversations About Mental Health",
      img: "/ChatGPT Image Jun 3, 2026, 03_08_14 PM.png", 
    },
    {
      tag: "For Students",
      title: "Finding Fulfillment When Studying Solo",
      img: "/ChatGPT Image Jun 3, 2026, 03_35_21 PM.png", 
    },
  ];

  const categories = ["All", "Money & Healthcare", "For Caregivers", "News", "Improving Care", "For Seniors"];

  // Animation variants
  const reveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any },
  };

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden text-slate-900 bg-[#FBF8F3]">
      {/* Background Gradient (Blue -> Soft Pink -> Beige) */}
      <div 
        className="absolute top-0 inset-x-0 h-[800px] pointer-events-none z-0"
        style={{
          background: "linear-gradient(to bottom, #D9E4EF 0%, #F2E4EA 35%, #FBF8F3 80%)"
        }}
      />

      {/* Cloud Illustrations */}
      <motion.img 
        src="/Untitled design (36).svg" 
        alt="" 
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as any }}
        className="absolute left-[-2%] top-[4%] w-[32vw] max-w-[400px] pointer-events-none z-10"
        style={{ y: cloudLeftY }}
      />

      <Nav />
      
      <section className="relative pt-44 pb-28 md:py-48 px-6 md:px-10 overflow-visible z-20">
        <motion.div {...reveal} className="relative mx-auto max-w-[1024px] text-center">
          <h2 className="main-page-title mb-5">
            Insights, tips, and stories for better care
          </h2>
          <p className="text-[#4F6072] max-w-[700px] mx-auto text-[16px] md:text-[18px] leading-relaxed mb-10">
            Find helpful tips and stories that make healthcare and daily routines easier for older adults and their families.
          </p>

          {/* Birds */}
          <motion.div style={{ y: birdsY }} className="flex justify-center items-center gap-32 mb-10 pointer-events-none opacity-[0.9] mix-blend-multiply">
            <img src="/Untitled design (41).svg" alt="" className="w-[220px] object-contain scale-x-[-1] translate-y-6" />
            <img src="/Untitled design (41).svg" alt="" className="w-[180px] object-contain -translate-y-4" />
          </motion.div>

          {/* Search Bar */}
          <div className="max-w-[1024px] mx-auto mb-8">
            <div className="relative shadow-[0_2px_15px_rgba(0,0,0,0.03)] rounded-xl">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-slate-400" />
              <input 
                type="text" 
                placeholder="Search 9 items..."
                className="w-full pl-[52px] pr-5 py-[18px] rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-[#1E3048] text-[15px] text-[#1E3048] bg-white transition-all placeholder:text-slate-400 font-medium"
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-start gap-2.5 mb-14">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-[8px] text-[13px] font-medium transition-all ${
                  i === 0 
                    ? "bg-[#1E3A8A] text-white shadow-sm" 
                    : "bg-white text-[#596B78] hover:bg-slate-50 border border-transparent shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 text-left">
            {posts.map((p, i) => (
              <motion.div
                key={p.title + i}
                {...reveal}
                transition={{ duration: 0.8, delay: (i%3) * 0.1, ease: [0.22, 1, 0.36, 1] as any }}
                className="group cursor-pointer flex flex-col h-full"
              >
                {/* Image */}
                <div className="relative w-full aspect-[1.5] rounded-[14px] overflow-hidden mb-4 bg-slate-100 border border-[rgba(0,0,0,0.02)] shadow-sm">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                
                {/* Tag */}
                <div className="mb-2.5">
                  <span className="inline-block px-[14px] py-[4px] bg-[#E3DCE7] text-[#4F4655] rounded-full text-[11px] font-bold tracking-[0.02em]">
                    {p.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-sans text-[17px] text-[#213145] leading-[1.3] font-medium group-hover:text-[#1E3A8A] transition-colors">
                  {p.title}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-16 text-center">
            <button className="px-8 py-2.5 rounded-full border border-[#B1B8C0] text-[#556372] text-[14px] font-semibold hover:bg-white hover:border-[#1E3A8A] hover:text-[#1E3A8A] transition-colors bg-transparent">
              Load More
            </button>
          </div>
        </motion.div>
      </section>

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
